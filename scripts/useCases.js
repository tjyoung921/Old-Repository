function createUseCaseView(state) {
	console.log("createUseCaseView state: ", state);
	var mapContainer = d3.select("div#mapContainer");
	var svg = mapContainer.select("svg");
	var flowCanvas = svg.select("g#flowCanvas");

	if (state) {

		function createContents(step) {
			var pos = {
				x : (step.link.x1 + step.useCase.link.x),
				y : (step.link.y1 + step.useCase.link.y)
			};
			var cCanvas = flowCanvas
					.append("g")
					.attr("class", "useCases")
					.attr("transform", "translate(" + pos.x + "," + pos.y + ")");
			var useCaseImage = cCanvas.append("image").attr("width", "80px")
					.attr("height", "80px").attr("x", 0).attr("y", 0).attr(
							"xlink:href",
							getUseCaseAttributes(step.useCase.name).image)
					.style("cursor", "pointer").style(
							"filter", "url(#drop-shadow)");

			useCaseImage.on("click", function() {
				createUseCaseOptionMenu(step);
			});
		}

		var crumbs = bCrumbs();
		var model = crumbs[crumbs.length - 1].model;

		$.each(model.p2pObject, function(p, step) {
			if (step.useCase) {
				createContents(step);
			}

			if (step.linked) {
				$.each(step.linked, function(l, linkObj) {
					linkObj.p2pObject[0].startPos = {
						x : step.link.x1,
						y : step.link.y1
					};
					linkObj.p2pObject[0].linkStart = true;
					linkObj.p2pObject = generateProgressiveLinkPosition(
							linkObj.p2pObject, linkObj.stepName, {
								x : step.link.x1,
								y : step.link.y1
							}, linkObj.flowDir);

					$.each(linkObj.p2pObject, function(p, linkedStep) {
						if (linkedStep.useCase) {
							createContents(linkedStep);
						}
					});
				})
			}
		});
	} else {
		flowCanvas.selectAll("defs#gradient").remove();
		flowCanvas.selectAll("g.useCases").remove();
		flowCanvas.selectAll("g.useCaseOptions").remove();
		flowCanvas.selectAll("g.useCaseExtended").remove();
	}
}

function createUseCaseOptionMenu(step) {
	switch (step.useCase.name) {
	case "Amelia":
		createAmeliaUseCaseOptions(step);
		break;
	}

}

function createAmeliaUseCaseOptions(step) {	
	var mapContainer = d3.select("div#mapContainer");
	var svg = mapContainer.select("svg");
	var flowCanvas = svg.select("g#flowCanvas");
	
	var gradient = svg.append("defs").append("linearGradient").attr("id",
	"gradient").attr("x1", "0%").attr("y1", "0%")
	.attr("x2", "100%").attr("y2", "100%").attr("spreadMethod",
			"pad");

gradient.append("stop").attr("offset", "0%").attr("stop-color", "#eee")
	.attr("stop-opacity", 1);

gradient.append("stop").attr("offset", "100%").attr("stop-color",
	"#ddd").attr("stop-opacity", 1);

	var pos = {
			x : (step.link.x1 + step.useCase.link.x -150),
			y : (step.link.y1 + step.useCase.link.y -50)
		};
	
	var cCanvas = flowCanvas
	.append("g")
	.attr("class", "useCaseOptions")
	.attr("transform", "translate(" + pos.x + "," + pos.y + ")");
	
	cCanvas.append("rect").attr("width", "250px").attr("height", "250px")
	.style("fill", "url(#gradient)").attr("x", 0).attr("y", 0).style("fill-opacity", 1).attr("rx", 20).attr("ry", 20).style(
			"filter", "url(#drop-shadow)");
	
	var wrapG = cCanvas.append("g").attr("transform", "translate(125,0)");
	wrapG.append("text").text("Click a Use Case to Learn More").style("fill", "#276134").style("font-weight", "600").style("font-style", "italic").attr("x",0).attr("y", 20).style("text-anchor", "middle").style("font-size", "12px");
	wrapG.append("image").attr("width", "20px").attr("height", "20px").attr("x", 100).attr("y", 5).style("cursor", "pointer").attr("xlink:href", "img/assessments/close.png")
	.on("click", function(){
		flowCanvas.selectAll("g.useCaseOptions").remove();
		flowCanvas.selectAll("g.useCaseExtended").remove();
	});
	
	wrapG = cCanvas.append("g").attr("transform", "translate(0,30)");
	wrapG.append("image").attr("width", "60px").attr("height", "60px").attr("x", 20).attr("y", 0).attr("xlink:href", getUseCaseAttributes(step.useCase.name).image);
	var rectBox = wrapG.append("rect").attr("class", "buttons").attr("x", 90).attr("y", 15).attr("height", 30).style("fill", "#31a94b").attr("rx", 5).attr("ry", 5).style("cursor", "pointer").style("filter", "url(#drop-shadow)");
	var text = wrapG.append("text").text("Administration Rights").attr("x", 100).attr("y", 35).style("fill", "#FFF").style("font-size", "13px").style("cursor", "pointer");
	var dim = text.node().getBBox();
	rectBox.attr("width", dim.width + 20)
	wrapG.on("click", function(){
		cCanvas.selectAll("rect.buttons").style("fill", "#31a94b");
		d3.select(this).select("rect.buttons").transition().duration(300).style("fill", "#1e582b");
		var options = {
				name: "Admin Rights with Amelia",
				description: "Users can place requests with Cognitive chat bot to obtain Administrator Rights to their computer and recived access to install applications",
				successRate: "95%",
				noOfRequests: "TBD"
		}
		createAmeliaUseCaseExtendedView(options, {clientX: d3.event.clientX, clientY: d3.event.clientY, pos: pos, offsetY: 30});
	});
	
	wrapG = cCanvas.append("g").attr("transform", "translate(0,100)");
	wrapG.append("image").attr("width", "60px")	.attr("height", "60px").attr("x", 20).attr("y", 0).attr("xlink:href", getUseCaseAttributes(step.useCase.name).image);
	var rectBox = wrapG.append("rect").attr("class", "buttons").attr("x", 90).attr("y", 15).attr("height", 30).style("fill", "#31a94b").attr("rx", 5).attr("ry", 5).style("cursor", "pointer").style("filter", "url(#drop-shadow)");
	var text = wrapG.append("text").text("USB Privileges").attr("x", 100).attr("y", 35).style("fill", "#FFF").style("font-size", "13px").style("cursor", "pointer");
	var dim = text.node().getBBox();
	rectBox.attr("width", dim.width + 20)
	wrapG.on("click", function(){
		cCanvas.selectAll("rect.buttons").style("fill", "#31a94b");
		d3.select(this).select("rect.buttons").transition().duration(300).style("fill", "#1e582b");
		var options = {
				name: "USB Privileges with Amelia",
				description: "Users can place requests to obtain USB Privileges through Cognitive chat bot and recieve access to use a removeable drive for data transfer",
				successRate: "93%",
				noOfRequests: "TBD"
		}
		createAmeliaUseCaseExtendedView(options, {clientX: d3.event.clientX, clientY: d3.event.clientY, pos: pos, offsetY: 100});
	});
	
	wrapG = cCanvas.append("g").attr("transform", "translate(0,170)");
	wrapG.append("image").attr("width", "60px").attr("height", "60px").attr("x", 20).attr("y", 0).attr("xlink:href", getUseCaseAttributes(step.useCase.name).image);
	var rectBox = wrapG.append("rect").attr("class", "buttons").attr("x", 90).attr("y", 15).attr("height", 30).style("fill", "#31a94b").attr("rx", 5).attr("ry", 5).style("cursor", "pointer").style("filter", "url(#drop-shadow)");
	var text = wrapG.append("text").text("Guest WiFi").attr("x", 100).attr("y", 35).style("fill", "#FFF").style("font-size", "13px").style("cursor", "pointer");
	var dim = text.node().getBBox();
	rectBox.attr("width", dim.width + 20)
	wrapG.on("click", function(){
		cCanvas.selectAll("rect.buttons").style("fill", "#31a94b");
		d3.select(this).select("rect.buttons").transition().duration(300).style("fill", "#1e582b");
		var options = {
				name: "Guest WiFi with Amelia",
				description: "Users can place requests for guest wireless access using cognitive chat bot and recive credentials nearly instantly",
				successRate: "91%",
				noOfRequests: "TBD"
		}
		createAmeliaUseCaseExtendedView(options, {clientX: d3.event.clientX, clientY: d3.event.clientY, pos: pos, offsetY: 170});
	});	
}

function createAmeliaUseCaseExtendedView(options, ePos){
	var mapContainer = d3.select("div#mapContainer");
	var svg = mapContainer.select("svg");
	var flowCanvas = svg.select("g#flowCanvas");
	flowCanvas.selectAll("g.useCaseExtended").remove();
	var pos = {};
	var containerWidth = 250;
	var containerHeight = 350;
	var dom = getDom();
	var svgWidth = dom.width();
	var svgHeight = dom.height();
	var image = {
			w: 100,
			h: 100
	}
	var gap = 20;
	
	if(ePos.clientX > (containerWidth*2)){
		pos = {
				x: ePos.pos.x - 253,
				y: ePos.pos.y + 20 + ePos.offsetY
		}
	}else{
		pos = {
				x: ePos.pos.x + 253,
				y: ePos.pos.y + 20 + ePos.offsetY
		}
	}
	
	var uCanvas = flowCanvas.append("g").attr("class", "useCaseExtended").attr("transform", "translate("+pos.x+","+pos.y+")");
	
	uCanvas.append("rect").attr("width", containerWidth).attr("height", containerHeight)
	.style("fill", "#f1f1f1").attr("x", 0).attr("y", 0).style("fill-opacity", 1).attr("rx", 20).attr("ry", 20).style(
			"filter", "url(#drop-shadow)");
	
	uCanvas.append("image").attr("width", image.w)
	.attr("height", image.h).attr("x", ((containerWidth /2) - (image.w / 2))).attr("y", gap).attr("xlink:href", "img/assessments/ameliaSide.PNG");
	uCanvas.append("g").attr("transform", "translate(20, "+(image.h + gap + 20)+")")
	.append("text").text(options.name).style("font-size", "14px").style("font-style", "italic").style("font-weight", "500")
	.style("fill", "#57575c").style("font-weight", "bold");
	
	wrapG = uCanvas.append("g").attr("transform", "translate(20, "+(image.h + gap + 50)+")");
	wrapG.append("text").text("DESCRIPTION").style("fill", "#e6832a").style("font-size", "14px");
	wrapG = uCanvas.append("g").attr("transform", "translate(20, "+(image.h + gap + 70)+")");
	wrapG.append("text").text(options.description).attr("x",0).attr("y", 0).call(wrap, containerWidth - 5).style("font-size", "12px").style("fill", "#57575c");	
	
	wrapG = uCanvas.append("g").attr("transform","translate(20, "+(image.h + gap + 160)+")");	
	wrapG.append("text").attr("x",0).attr("y", 20).style("font-size","12px").text("SUCCESS RATE").style("fill","#247dbe");

	wrapG.append("image").attr("width",	"20px").attr("height","20px").attr("x",  120).attr("y", 5)
	.attr("xlink:href",	"img/assessments/right.png");

	wrapG.append("text").attr("x", containerWidth - 80).attr("y", 20).style("font-size","14px").text(options.successRate).style("fill","#575757");
	
	wrapG = uCanvas.append("g").attr("transform","translate(20, "+(image.h + gap + 185)+")");	
	wrapG.append("text").attr("x",0).attr("y", 20).style("font-size","12px").text("# OF REQUESTS").style("fill","#247dbe");

	wrapG.append("image").attr("width",	"20px").attr("height","20px").attr("x",  120).attr("y", 5)
	.attr("xlink:href",	"img/assessments/right.png");

	wrapG.append("text").attr("x", containerWidth - 80).attr("y", 20).style("font-size","14px").text(options.noOfRequests).style("fill","#f12724").style("font-style", "italic");
	
}
