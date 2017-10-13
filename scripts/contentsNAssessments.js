function createAssessments(state) {
	var mapContainer = d3.select("div#mapContainer");
	var svg = mapContainer.select("svg");
	var flowCanvas = svg.select("g#flowCanvas");

	if (state) {
		var gradient = svg.append("defs").append("linearGradient").attr("id",
				"gradient").attr("x1", "0%").attr("y1", "0%")
				.attr("x2", "100%").attr("y2", "100%").attr("spreadMethod",
						"pad");

		gradient.append("stop").attr("offset", "0%").attr("stop-color", "#eee")
				.attr("stop-opacity", 1);

		gradient.append("stop").attr("offset", "100%").attr("stop-color",
				"#ddd").attr("stop-opacity", 1);

		var crumbs = bCrumbs();
		var model = crumbs[crumbs.length - 1].model, fillColor = "#CCCCCC", textColor = "#474155";

		var circleSymbol = d3.symbol().type(d3.symbolCircle);

		$
				.each(
						model.p2pObject,
						function(p, step) {
							if (step.assessments) {
								var stepCanvas = flowCanvas.select(
										"g#" + model.stepName).select(
										"g#" + step.name.replace(/\s/g, ""));
								var aCanvas = flowCanvas.append("g").attr(
										"class", "assessments");
								var pos = findNewPoint(step.link.x1,
										step.link.y1,
										step.assessments.link.angle,
										step.assessments.link.stepLength)

								aCanvas.append("line").style("stroke",
										fillColor).style("stroke-width", "5px")
										.attr("x1", step.link.x1).attr("y1",
												step.link.y1).attr("x2", pos.x)
										.attr("y2", pos.y);

								aCanvas
										.append("path")
										.attr("d", circleSymbol.size(150))
										.attr(
												"transform",
												function(d) {
													return "translate("
															+ pos.x
															+ ","
															+ pos.y
															+ ") rotate("
															+ (step.assessments.link.angle - 30)
															+ ")";
												}).attr("fill", fillColor);

								var rectDim = {
									w : 200,
									h : 145
								}

								var rectPos = {
									x : pos.x - (rectDim.w / 2),
									y : step.assessments.link.angle > -180 ? (pos.y - rectDim.h)
											: (pos.y)
								}

								var textAlign = {
									tx1 : 40,
									tx2 : 145,
									ty1 : 13,
									ty2 : 13
								}

								aCanvas.append("rect").attr("x", rectPos.x)
										.attr("y", rectPos.y).attr("rx", 10)
										.attr("ry", 10).attr("width",
												rectDim.w + "px").attr(
												"height", rectDim.h + "px")
										.style("fill", "url(#gradient)").style(
												"filter", "url(#drop-shadow)");

								aCanvas.append("circle").attr("r", 7).attr(
										"cx", step.link.x1).attr("cy",
										step.link.y1).style("fill", fillColor)
										.style("stroke", fillColor).style(
												"stroke-width", "4px");

								var textCanvas = aCanvas.append("g").attr(
										"transform",
										"translate(" + (rectPos.x) + ","
												+ (rectPos.y) + ")");

								var gap = 35, counter = 0;
								var wrapG = textCanvas
										.append("g")
										.attr(
												"transform",
												"translate(0, "
														+ (gap * counter) + ")");

								wrapG.append("text").attr("x", textAlign.tx1)
										.attr("y", textAlign.ty1).attr(
												"font-size", "10px").text(
												"Top Solution Opportunities")
										.style("fill", textColor).style(
												"text-anchor", "middle").call(
												wrap, 100);

								wrapG
										.append("text")
										.attr("x", textAlign.tx2)
										.attr("y", textAlign.ty2)
										.attr("font-size", "10px")
										.text(
												"Average % of Automatable LS Tasks")
										.style("fill", textColor).style(
												"text-anchor", "middle").call(
												wrap, 100);

								wrapG.append("line").style("stroke", "#a98477")
										.style("stroke-width", "2px").attr(
												"x1", 2).attr("y1", 30).attr(
												"x2", "198").attr("y2", 30);

								counter++;
								$
										.each(
												step.assessments.assessObj,
												function(i, assObj) {
													wrapG = textCanvas
															.append("g")
															.attr(
																	"transform",
																	"translate(0, "
																			+ (gap * counter)
																			+ ")")

													wrapG
															.append("image")
															.attr("width",
																	"30px")
															.attr("height",
																	"30px")
															.attr(
																	"x",
																	textAlign.tx1 - 15)
															.attr("y", 0)
															.attr(
																	"xlink:href",
																	getAssessmentAttributes(assObj.name).image);

													wrapG
															.append("image")
															.attr("width",
																	"20px")
															.attr("height",
																	"20px")
															.attr(
																	"x",
																	(textAlign.tx2 - textAlign.tx1) - 20)
															.attr("y", 5)
															.attr("xlink:href",
																	"img/assessments/rightArrow.png");

													wrapG
															.append("text")
															.attr(
																	"x",
																	textAlign.tx2)
															.attr("y", 20)
															.attr("font-size",
																	"14px")
															.text(
																	assObj.percentage)
															.style("fill",
																	textColor)
															.style(
																	"text-anchor",
																	"middle");
													counter++;
												});

								wrapG = textCanvas.append("g").attr(
										"transform",
										"translate(0, " + (30 * counter) + ")");

								wrapG.append("text").attr("x", rectDim.w - 5)
										.attr("y", 21).attr("font-size", "8px")
										.text(step.name).style("fill",
												textColor).style("text-anchor",
												"end");

							}
						});

	} else {
		flowCanvas.selectAll("g.assessments").remove();
		flowCanvas.selectAll("defs#gradient").remove();
	}
}

function createContentView(state) {
//	console.log("createContentView state: ", state);
	var mapContainer = d3.select("div#mapContainer");
	var svg = mapContainer.select("svg");
	var flowCanvas = svg.select("g#flowCanvas");

	if (state) {
		
		function createContents(step){
			var pos = {x: (step.link.x2 + step.contents.link.x), y: (step.link.y2 + step.contents.link.y)};
			var cCanvas = flowCanvas.append("g").attr("class", "contents").attr("transform", "translate("+pos.x+","+pos.y+")");
			cCanvas.append("rect").attr("width", (100 * step.contents.contentObj.length) + "px").attr("height", "100px")
			.style("fill", "#efc6c6").attr("x", 0).attr("y", 0).style("fill-opacity", 0.6).attr("rx", 20).attr("ry", 20);
			var gap = 75, marginL = step.contents.contentObj.length == 1 ? 15: 30;					
			$.each(step.contents.contentObj, function(c, contentObj) {
				cCanvas.append("image").attr("width","70px").attr("height","70px")
				.attr("x",((gap *  c) + marginL)).attr("y", 15)
				.attr("xlink:href",	getContentAttributes(contentObj.name).image);
			});
		}
		
		var allModels = getMapModels();
		$.each(allModels, function(i, model) {
			$.each(model.p2pObject, function(p, step) {
				if (step.contents) {					
					createContents(step);
				}
				
				if(step.linked){
					$.each(step.linked, function(l, linkObj){
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
							
						$.each(linkObj.p2pObject, function(p, linkedStep) {
							if (linkedStep.contents) {					
								createContents(linkedStep);
							}
						});
					})					
				}
			});
		});
	} else {
		flowCanvas.selectAll("g.contents").remove();
	}

}
