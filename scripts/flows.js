var pathTransition = d3.transition().duration(1000).delay(500);
var nodeTransition = d3.transition().duration(1000).delay(700);
var linkedStepColor = "#dad6d2";
var triangle = d3.symbol().type(d3.symbolTriangle);

function createAllBranches(mapModel) {

	$.each(mapModel, function(i, model) {
		createBranch(model);
	});
	createInterLinkes(mapModel);
	createLegends();
}

function clearAllFlowElements() {
	var mapContainer = d3.select("div#mapContainer");
	var svg = mapContainer.select("svg");
	var flowCanvas = svg.select("g#flowCanvas");
	flowCanvas.selectAll("*").remove();
}

function createBranch(model) {
	var mapContainer = d3.select("div#mapContainer");
	var svg = mapContainer.select("svg");
	var flowCanvas = svg.select("g#flowCanvas");
	var stepName = model.stepName;
	var stepObj = model.p2pObject;

	var bCanvas = flowCanvas.append("g").attr("id", stepName);
	$
			.each(
					stepObj,
					function(s, step) {
						var stepCanvas = bCanvas.append("g").attr("id",
								step.name.replace(/\s/g, "")), wrapLength = step.wrapLength ? step.wrapLength
								: 70;
						var textPos = getAlignmentPos(step);
						var text = stepCanvas
								.append("text")
								.attr("x", textPos.x)
								.attr("y", textPos.y)
								.text(step.name)
								.style("font-size", "10px")
								.style("fill-opacity", 0)
								.style("cursor", "pointer")
								.style(
										"fill",
										step.link.textColor ? step.link.textColor
												: "black").call(wrap,
										wrapLength);

						if (step.processTitle && !step.drilled) {
							var titleAngle = step.processTitle.angle ? step.processTitle.angle : 0;
							stepCanvas
									.insert("g", ":first-child")
									.attr(
											"transform",
											"translate("
													+ (step.link.x1 + step.processTitle.x)
													+ ", "
													+ (step.link.y1 + step.processTitle.y)
													+ ") rotate("
													+ (titleAngle) + ")")
									.append("text")
									.text(step.processTitle.name).style("fill",
											step.link.stroke).style(
											"font-size", "13px");
						}

						if (step.node) {
							text
									.on(
											"mouseover",
											function() {
												circle.style("stroke", "black")
														.style("fill-opacity",
																1);
												text.style("fill", "red")
														.style("fill-opacity",
																1);
											})
									.on(
											"mouseout",
											function() {
												circle
														.style(
																"stroke",
																step.link.stroke)
														.style(
																"fill-opacity",
																step.opacity ? step.opacity
																		: 1);
												text
														.style("fill", "black")
														.style(
																"fill-opacity",
																step.opacity ? step.opacity
																		: 1);

											})
									.on(
											"click",
											function() {
												if (step.node === "start"
														&& !step.linkStart) {
													setViewSelector(true, "deployments", "drilled");
													createDrilledView(JSON
															.parse(JSON
																	.stringify(model)));
												} else {
													d3.event.stopPropagation();
													if (step.node !== "start" && !step.linkStart) {
														var options = {};
														options.step = step;
														options.dom = getDom();
														options.features = getFeatureOptions(step);
														options.pos = [d3.event.x, d3.event.y];
														createContextMenu(options);
												}	
												}
											})
						}

						text.transition(nodeTransition).style("fill-opacity",
								step.opacity ? step.opacity : 1);

						if (!step.end) {
							var line = stepCanvas.append("line").attr(
									"id",
									function() {
										return step.id ? step.id : stepName
												+ "_"
												+ step.name.replace(/\s/g, "");
									}).style("stroke", function() {
								if (step.linkStart) {
									return linkedStepColor;
								} else {
									return step.link.stroke;
								}
							}).style("stroke-width", function() {
								if (step.linkStart) {
									return "10px";
								} else {
									return step.link.strokeWidth;
								}
							}).attr("x1", step.link.x1)
									.attr("y1", step.link.y1).attr("x2",
											step.link.x1).attr("y2",
											step.link.y1).attr("class",
											function() {
												if (step.linkStart) {
													return "linkedStep";
												} else {
													return "steps";
												}
											});

							line.transition(pathTransition).attr("x2",
									step.link.x2).attr("y2", step.link.y2);

							line.style("stroke-opacity",
									step.opacity ? step.opacity : 1).style(
									"stroke-dasharray",
									step.link.strokeDashArray);

							if (step.linkStart) {
								line.style("cursor", "pointer");
								line.on("mouseover", function() {
									line.style("stroke", "black");
								}).on("mouseout", function() {
									line.style("stroke", linkedStepColor);
								}).on(
										"click",
										function() {
											setViewSelector(true, "deployments", "drilled");
											createDrilledView(JSON.parse(JSON
													.stringify(model)));
										})
							}

							if (step.flowDirection) {
								var dirLen = step.stepLength ? step.stepLength / 2
										: 50;
								var newPoint = findNewPoint(step.link.x1,
										step.link.y1, step.angle, dirLen);
								var dirAngle = step.flowDirection == "forward" ? (step.angle - 30)
										: (step.angle + 30);

								stepCanvas
										.append("path")
										.attr("d", triangle.size(100))
										.attr(
												"transform",
												function(d) {
													return "translate("
															+ newPoint.x + ","
															+ newPoint.y
															+ ") rotate("
															+ dirAngle + ")";
												})
										.attr("fill", step.link.stroke)
										.style("fill-opacity",
												step.opacity ? step.opacity : 1);
							}

							switch (step.link.type) {
							case "processStepL4":
								stepCanvas.append("rect").attr("width", "6px")
										.attr("height", "6px").style("fill",
												step.link.stroke).attr("x",
												step.link.x2 - 3).attr("y",
												step.link.y2 - 3);
								break;
							}

						}

						if (step.node) {
							var circle = stepCanvas.append("circle").attr("r",
									6).attr("cx", step.link.x1).attr("cy",
									step.link.y1).style("fill", "none").style(
									"stroke", "none").style("fill-opacity",
									step.opacity ? step.opacity : 1).style(
									"stroke-opacity",
									step.opacity ? step.opacity : 1);

							if (step.node === "start") {
								circle.style("cursor", "pointer");
								circle.on(
										"mouseover",
										function() {
											circle.style("fill", "black")
													.style("fill-opacity", 1);
											text.style("fill", "red").style(
													"fill-opacity", 1);
										}).on(
										"mouseout",
										function() {
											circle.style("fill",
													step.link.stroke).style(
													"fill-opacity",
													step.opacity ? step.opacity
															: 1);
											text.style("fill", "black").style(
													"fill-opacity",
													step.opacity ? step.opacity
															: 1);
										}).on(
										"click",
										function() {
											setViewSelector(true, "deployments", "drilled");
											createDrilledView(JSON.parse(JSON
													.stringify(model)));
										});
								circle.transition(nodeTransition).style("fill",
										step.link.stroke).style("stroke",
										"none");
							} else {
								circle.on(
										"mouseover",
										function() {
											circle.style("stroke", "black")
													.style("fill-opacity", 1);
											text.style("fill", "red").style(
													"fill-opacity", 1);
										}).on(
										"mouseout",
										function() {
											circle.style("stroke",
													step.link.stroke).style(
													"fill-opacity",
													step.opacity ? step.opacity
															: 1);
											text.style("fill", "black").style(
													"fill-opacity",
													step.opacity ? step.opacity
															: 1);
										}).on(
										"click",
										function() {
											d3.event.stopPropagation();
											if (step.node !== "start" && !step.linkStart) {
												var options = {};
												options.step = step;
												options.dom = getDom();
												options.features = getFeatureOptions(step);
												options.pos = [d3.event.x, d3.event.y];
												createContextMenu(options);
										}														
										});
								circle.transition(nodeTransition).style("fill",
										"#FFF").style("stroke",
										step.link.stroke).style("stroke-width",
										"3px");
							}
						}

						if (step.linked) {
							$
									.each(step.linked,
											function(l, linkObj) {
												linkObj.p2pObject[0].startPos = {
													x : step.link.x1,
													y : step.link.y1
												};
												linkObj.p2pObject[0].linkStart = true;
												linkObj.p2pObject = generateProgressiveLinkPosition(
														linkObj.p2pObject,
														linkObj.stepName, {
															x : step.link.x1,
															y : step.link.y1
														}, linkObj.flowDir);
												createBranch(linkObj);
											});
						}

						if (step.drilled) {
							$
									.each(
											step.levels,
											function(l, linkObj) {
												linkObj.p2pObject[0].startPos = {
													x : step.link.x1,
													y : step.link.y1
												};

												linkObj.p2pObject = generateProgressiveLinkPosition(
														linkObj.p2pObject,
														linkObj.stepName, {
															x : step.link.x1,
															y : step.link.y1
														}, linkObj.flowDir);
												createBranch(linkObj);
											});
						}

					});
}

function createInterLinkes(models) {
	var mapContainer = d3.select("div#mapContainer");
	var svg = mapContainer.select("svg");
	var flowCanvas = svg.select("g#flowCanvas");
	$
			.each(
					models,
					function(i, model) {
						$
								.each(
										model.p2pObject,
										function(i, stepObj) {
											if (stepObj.linkedTo) {
												$
														.each(
																stepObj.linkedTo,
																function(l,
																		linkedTo) {
																	var linkedObj;
																	if (linkedTo.length > 2) {
																		try {
																			linkedObj = models[linkedTo[0]].p2pObject[linkedTo[1]][linkedTo[2]][linkedTo[3]].p2pObject[linkedTo[4]];
																		} catch (e) {
																		}
																	} else {
																		try {
																			linkedObj = models[linkedTo[0]].p2pObject[linkedTo[1]];
																		} catch (e) {

																		}
																	}

																	// console.log("linkedObj:
																	// ",linkedObj);

																	if (linkedObj) {
																		var line = flowCanvas
																				.insert(
																						"line",
																						":first-child")
																				.style(
																						"stroke",
																						linkedStepColor)
																				.style(
																						"stroke-width",
																						"10px")
																				.attr(
																						"x1",
																						stepObj.link.x1)
																				.attr(
																						"y1",
																						stepObj.link.y1)
																				.attr(
																						"x2",
																						stepObj.link.x1)
																				.attr(
																						"y2",
																						stepObj.link.y1)
																				.attr(
																						"class",
																						"linkedStep");

																		line
																				.transition(
																						pathTransition)
																				.attr(
																						"x2",
																						linkedObj.link.x1)
																				.attr(
																						"y2",
																						linkedObj.link.y1);

																		flowCanvas
																				.append(
																						"circle")
																				.attr(
																						"r",
																						6)
																				.attr(
																						"cx",
																						stepObj.link.x1)
																				.attr(
																						"cy",
																						stepObj.link.y1)
																				.style(
																						"fill",
																						linkedStepColor)
																				.style(
																						"stroke",
																						linkedStepColor);
																		flowCanvas
																				.append(
																						"circle")
																				.attr(
																						"r",
																						6)
																				.attr(
																						"cx",
																						linkedObj.link.x1)
																				.attr(
																						"cy",
																						linkedObj.link.y1)
																				.style(
																						"fill",
																						linkedStepColor)
																				.style(
																						"stroke",
																						linkedStepColor);

																	}
																})
											}
										});
					});
}

function getAlignmentPos(step) {
	switch (step.align) {
	case "down":
		return {
			x : step.link.x1 - 40,
			y : step.link.y1 + 20
		};
		break;
	case "up":
		return {
			x : step.link.x1 - 10,
			y : step.link.y1 - 30
		};
		break;
	case "left":
		return {
			x : step.link.x1 - 70,
			y : step.link.y1 + 0
		};
		break;
	case "right":
		return {
			x : step.link.x1 + 10,
			y : step.link.y1 + 5
		};
		break;
	case "downright":
		return {
			x : step.link.x1 + 10,
			y : step.link.y1 + 10
		};
		break;
	case "upright":
		return {
			x : step.link.x1 + 10,
			y : step.link.y1 - 10
		};
		break;
	}
}