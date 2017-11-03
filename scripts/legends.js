var createLegends = function() {
	var mapContainer = d3.select("div#mapContainer");
	var svg = mapContainer.select("svg");
	var flowCanvas = svg.select("g#flowCanvas");

	var dom = getDom();
	var svgHeight = dom.height();
	flowCanvas.select("g#legends").remove();
	var view = setViewSelector();
	var page = setViewSelector("page");
	
	var pos = {};
	var crumbs = bCrumbs();
	var model = crumbs[crumbs.length - 1].model;
	model = model[0] ? model[0] : model;
	 if(page === "higherView"){		 
		 pos = getAlignmentPos(model.p2pObject[4]);
		 pos.y = pos.y + 100;
	 }else{
		 pos = getAlignmentPos(model.p2pObject[0]);
		 pos.x = pos.x - 50;
		 pos.y = pos.y + 300;
	 }
	var gLegend = flowCanvas.append("g").attr("transform",
			"translate(" + pos.x + ", " + pos.y + ")").attr("id",
			"legends");

	var counter = 0, gap = 15, stokeWidth = "10px", legendMargin = 20, gId;
	console.log("view: ", view);
	switch(view){
	case "opportunities": 
		var legends = getAssessmentAttributes();
		gap = 45;
		$.each(legends, function(l, legend) {
			var wrapG = gLegend.append("g").attr("transform",
					"translate(0, " + (gap * counter) + ")")

			wrapG.append("image").attr("width", "50px").attr("height", "40px")
					.attr("x", 10).attr("y", 0)
					.attr("xlink:href", legend.image);

			wrapG.append("text").attr("x", 60).attr("y", 25).attr("font-size",
					"11px").text(splitCamelCaseToString(l));
			counter++;
		});
		legendMargin = 130;
		gap = 15;
		break;
	case "map": 
	case "deployments":
	case "useCase":
		var colors = stepColor();
		$.each(colors, function(c, color) {
			var wrapG = gLegend.append("g").attr("transform",
					"translate(0, " + (gap * counter) + ")")

			wrapG.on("mouseover", function() {
				gId = d3.select(this).attr("id");
				d3.select(this).selectAll("text").attr("fill", "green");
				d3.select("g#" + c).selectAll("line").style("stroke", "black");
				d3.select("g#" + c).selectAll("circle").style("fill", "black");
			})
					.on(
							"mouseout",
							function() {
								d3.select(this).selectAll("text").attr("fill",
										"black");
								d3.select("g#" + c).selectAll("line.steps")
										.style("stroke", color);
								d3.select("g#" + c)
										.selectAll("line.linkedStep").style(
												"stroke", linkedStepColor);
								d3.select("g#" + c).selectAll("circle").style(
										"fill", color);
							}).on(
							"click",
							function() {

								var model = getStepModel(c);
								if (model) {
									setViewSelector(true, "deployments", "drilled");
									createDrilledView(JSON.parse(JSON
											.stringify(model)));
								}
							});

			wrapG.append("line").attr("x1", 0).attr("y1", 0).attr("x2", 30)
					.attr("y1", 0).attr("stroke", color).attr("stroke-width",
							stokeWidth).style("stroke-linecap", "round");

			wrapG.append("text").attr("x", 40).attr("y", 5).attr("font-size",
					"11px").text((counter + 1) + " - ");
			wrapG.append("text").attr("x", 60).attr("y", 5).attr("font-size",
					"11px").style("cursor", "pointer").text(splitCamelCaseToString(c));
			counter++;
		});
		break;
	case "content": 
		var legends = getContentAttributes();
		gap = 45;
		$.each(legends, function(l, legend) {
			var wrapG = gLegend.append("g").attr("transform",
					"translate(0, " + (gap * counter) + ")")

			wrapG.append("image").attr("width", "50px").attr("height", "40px")
					.attr("x", 10).attr("y", 0)
					.attr("xlink:href", legend.image);

			wrapG.append("text").attr("x", 60).attr("y", 25).attr("font-size",
					"11px").text(splitCamelCaseToString(l));
			counter++;
		});
		legendMargin = 130;
		gap = 15;
		break;
	}
	
	wrapG = gLegend.append("g").attr("transform",
			"translate(0, " + ((gap * counter) + legendMargin) + ")");
	wrapG.append("circle").attr("cx", 50).attr("cy", 0).attr("r", 5).style(
			"fill", "green");
	wrapG.append("text").attr("x", 60).attr("y", 5).attr("font-size", "11px")
			.text("Process Start (L3) - Station");
	counter++;
	
	wrapG = gLegend.append("g").attr("transform",
			"translate(0, " + ((gap * counter) + legendMargin) + ")");
	wrapG.append("line").attr("x1", -5).attr("y1", 0).attr("x2", 50).attr("y2",
			0).attr("stroke", "green").attr("stroke-width", "5px")
	wrapG.append("circle").attr("cx", 50).attr("cy", 0).attr("r", 6).style(
			"stroke", "green").style("fill", "#FFF");
	wrapG.append("text").attr("x", 60).attr("y", 5).attr("font-size", "11px")
			.text("Process Step (L3) - Station");
	counter++;

	wrapG = gLegend.append("g").attr("transform",
			"translate(0, " + ((gap * counter) + legendMargin) + ")");
	wrapG.append("circle").attr("cx", 50).attr("cy", 0).attr("r", 6).style(
			"stroke", "green").style("fill", "#FFF");
	wrapG.append("text").attr("x", 60).attr("y", 5).attr("font-size", "11px")
			.text("Process End (L3) - Station");
	counter++;

	wrapG = gLegend.append("g").attr("transform",
			"translate(0, " + ((gap * counter) + legendMargin) + ")");
	wrapG.append("line").attr("x1", 24).attr("y1", 0).attr("x2", 55).attr("y2",
			0).attr("stroke", linkedStepColor).style("stroke-linecap", "round")
			.attr("stroke-width", stokeWidth);
	wrapG.append("text").attr("x", 60).attr("y", 5).attr("font-size", "11px")
			.text("Process Link (L3) - Transfer Station");
	counter++;

	wrapG = gLegend.append("g").attr("transform",
			"translate(0, " + ((gap * counter) + legendMargin) + ")");
	wrapG.append("line").attr("x1", 10).attr("y1", 0).attr("x2", 50).attr("y2",
			0).attr("stroke", "#c7b299").attr("stroke-width", 2).style(
			"stroke-dasharray", ("3, 3"));
	wrapG.append("rect").attr("width", 10).attr("height", 10).attr("x", 45)
			.attr("y", -5).attr("fill", "#c7b299");
	wrapG.append("text").attr("x", 60).attr("y", 5).attr("font-size", "11px")
			.text("Process Step (L4) - Line Extension");
	counter++;

	wrapG = gLegend.append("g").attr("transform",
			"translate(0, " + ((gap * counter) + legendMargin) + ")");
	wrapG.append("line").attr("x1", 10).attr("y1", 0).attr("x2", 55).attr("y2",
			0).attr("stroke", "#8393ca").attr("stroke-width", 1).style(
			"stroke-dasharray", ("5, 3"));
	wrapG.append("text").attr("x", 60).attr("y", 5).attr("font-size", "11px")
			.text("Process Step (L4) - Walkway");
	counter++;

	wrapG = gLegend.append("g").attr("transform",
			"translate(0, " + ((gap * counter) + legendMargin) + ")");
	wrapG.append("line").attr("x1", 10).attr("y1", 0).attr("x2", 55).attr("y2",
			0).attr("stroke", "#c7b299").attr("stroke-width", 3);
	wrapG.append("text").attr("x", 60).attr("y", 5).attr("font-size", "11px")
			.text("Process Flow Direction");
	counter++;

	wrapG = gLegend.append("g").attr("transform",
			"translate(0, " + ((gap * counter) + legendMargin) + ")");
	wrapG.append("circle").attr("cx", 40).attr("cy", 0).attr("r", 10).style(
			"fill", "#91d8f5");
	wrapG.append("text").attr("x", 60).attr("y", 5).attr("font-size", "11px")
			.text("Process with Legal and Compliance involvment");
	counter++;
}