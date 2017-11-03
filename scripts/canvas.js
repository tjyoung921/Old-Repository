function getDom(){
	return $("div#mapContainer");
}

var mapObj = {};

var levelDrilled = false;
function showDrilledLevels(state){	
	if(state){
		if(!levelDrilled){
			console.log("showDrilledLevels: ",state);
			var mapModel = getMapModels();
			$.each(mapModel, function(i, model) {
				$.each(model.p2pObject, function(s, step){
					$.each(step.levels, function(l, linkObj) {
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
				});
			});	
		}
		levelDrilled = true;
	}else{
		d3.selectAll("g#processStepL4").remove();
		levelDrilled = false;
	}
}

function initCanvas() {
	var mapContainer = d3.select("div#mapContainer");
	var dom = getDom();
	var svg = mapContainer.append("svg");
	createDropShadow(svg);

	var gCanvas = svg.append("g").attr("id", "gCanvas");

	var flowCanvas = svg.append("g").attr("id", "flowCanvas");
	var transform;
	mapObj.zoom = d3.zoom().on("zoom", function() {
		createContextMenu(false);
		transform = d3.event.transform;
		flowCanvas.attr("transform", transform);
		if(transform.k > 1){
// flowCanvas.selectAll("text").style("font-size", (10 / (transform.k)) + "px")
// flowCanvas.selectAll("text").style("font-size", "7px");
// .call(wrap, (100 * d3.event.transform.k));
		}else{
// flowCanvas.selectAll("text").style("font-size", "10px");
		}
	});
	
	svg.call(mapObj.zoom);
	setViewSelector(true, "map", "higherView");
	drawCenterNode(centerNodePosition());
	var allModels = getMapModels();
	bCrumbs("set", {name: "Metro Map E2E", model: allModels});
	createAllBranches(allModels);		
}

function resetZoomPan(){
	mapObj.zoom.transform(d3.select("svg"), d3.zoomIdentity);	
}

function centerNodePosition(){
	var dom = getDom();
	var svgWidth = dom.width();
	var svgHeight = dom.height();
	return {x : svgWidth/2 - 65, y: svgHeight/2 - 80}
}

function drawCenterNode(nodePosition){
	var mapContainer = d3.select("div#mapContainer");
	var dom = getDom();
	var svg = mapContainer.select("svg");
	var flowCanvas = svg.select("g#flowCanvas");
	var rectG = flowCanvas.append("g").attr("transform", "translate("+(nodePosition.x)+", "+(nodePosition.y)+")").attr("id", "centerNode");	
	rectG.append("circle").attr("r", 80).attr("cx", 65).attr("cy", 80).style("fill", "#ececec").style("stroke", "#959595").style("stroke-width", "4px");
	rectG.append("image").attr("x", "20").attr("y", "15").attr("width", "90px")
			.attr("height", "50px").attr("xlink:href", "img/nodes/connections.png");		
	rectG.append("text").attr("x", "65").attr("y", "80").style("font-weight", "bold").style("font-size", "10px").style("text-anchor", "middle")
	.text("Central Station Enterprise Strategy").call(wrap, 150);	
	rectG.append("text").attr("x", "65").attr("y", "110").style("font-size", "9px").style("text-anchor", "middle")
	.text("Management Committee, Corporate Strategy, Legal, Enterprise Data Mgmt").call(wrap, 120);
}


  function wrap(text, width) {
    text.each(function() {
      var text = d3.select(this),
        words = text.text().split(/\s+/).reverse(),
        word,
        line = [],
        lineNumber = 0,
        lineHeight = 1.1, // ems
        y = text.attr("y"),
        x = text.attr("x"),
        dy = parseFloat(text.attr("dy")) || 0,
        tspan = text.text(null).append("tspan").attr("x", x).attr("y", y).attr("dy", dy + "em");

      width = (typeof width === "function") ? width.call(this) : width;

      while (word = words.pop()) {
        line.push(word);
        tspan.text(line.join(" "));
        if (tspan.node().getComputedTextLength() > width) {
          line.pop();
          tspan.text(line.join(" "));
          line = [word];
          tspan = text.append("tspan").attr("x", x).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
        }
      }
    });
  }
  
  function createDropShadow(svg){
	  var defs = svg.append("defs");
	  var filter = defs.append("filter")
	      .attr("id", "drop-shadow")
	      .attr("height", "130%");
	  filter.append("feGaussianBlur")
	      .attr("in", "SourceAlpha")
	      .attr("stdDeviation", 2)
	      .attr("result", "blur");
	  filter.append("feOffset")
	      .attr("in", "blur")
	      .attr("dx", 1)
	      .attr("dy", 1)
	      .attr("result", "offsetBlur");
	  var feMerge = filter.append("feMerge");
	  feMerge.append("feMergeNode")
	      .attr("in", "offsetBlur")
	  feMerge.append("feMergeNode")
	      .attr("in", "SourceGraphic");
  }
  
  function showViewSelector(event){
	  var dom = $("button#showViewSelector");
	  var view = dom.attr("data-page");
	  var options = {};
	  options.features = getFeatureOptions({name: view});
	  options.dom = dom.parent();
	  options.pos = [-70,30];
	  options.cssOptions = {right: 7 , bottom: 60};
	  options.arrowPos = "arrowDown";
	  createContextMenu(options);
  }  
  
  function setViewSelector(state, val, page){
	  var viewSelector = $("button#showViewSelector");
	  if(state === true){
		  viewSelector.attr("data-view", val).attr("data-page", page);
		  viewSelector.find("span#view").text(getViewText(val));
	  }else if(state === false){	
		  viewSelector.hide().attr("data-view", val).attr("data-page", page);
	  }else if(state === undefined){
		  return viewSelector.attr("data-view");
	  }else if(state === "page"){
		  return viewSelector.attr("data-page");
	  }
  }
  
  function getViewText(val){
	  switch(val){
	  case "deployments": return "Deployments View";break;
	  case "opportunities": return "Opportunities View";break;
	  case "map": return "Map View";break;
	  case "content": return "Content View";break;
	  case "useCase": return "Use Case View";break;
	  }
  }