function createDrilledView(model) {
// console.log("createDrilledView model: ",model);
	var dom = getDom();
	var svgWidth = dom.width();
	var svgHeight = dom.height();
	resetZoomPan();
	clearAllFlowElements();
	drawCenterNode({
		x : 20,
		y : svgHeight / 2 - 80
	});
	model = changePositionsForDrilledView(model, svgWidth, svgHeight);
	bCrumbs(
			"set",
			{
				name : model.stepName,
				model : model
			});
	createAllBranches([ model ]);
    createLevelConnections(model);
	var view = setViewSelector();
	switch(view){
	case "opportunities": 
		createAssessments(true);
		break;
	case "deployments": 
		createAssessments(false);
		break;
	case "map": 
		
		break;
	case "content": 
		
		break;
	}
	setViewSelector(true, view, "drilled");
}

function changePositionsForDrilledView(model, svgWidth, svgHeight) {
// console.log("model: ", model);
	var startPos = {
		x : 165,
		y : (svgHeight / 2 - 80) + 80
	};

	$.each(model.p2pObject, function(s, step) {
		step.angle = -360;
		step.align = s == 0 ? "upr" : s % 2 == 0 ? "up" : "down";
		step.drilled = true;
		step.opacity = 1;
		step.stepLength = step.drillStepLength ? step.drillStepLength : step.stepLength;
		$.each(step.levels, function(l, level){
			$.each(level.p2pObject, function(p, pObj){
				pObj.opacity = 1;
			});
		});
		
		if(step.linked){
			$.each(step.linked, function(l, linkObj) {				
						$.each(linkObj.p2pObject, function(i, p2pObject){
							p2pObject.opacity = 0.5;
							p2pObject.drilled = true;
							if(i === 0){
								p2pObject.align = "upr";
								p2pObject.stepLength = p2pObject.drillStepLength ? p2pObject.drillStepLength : 160;
								p2pObject.startPos = {
									x : step.link.x1,
									y : step.link.y1
								};
								p2pObject.angle = l % 2 == 0 ? -60: -300;						
								p2pObject.linkStart = true;
							}else{
								p2pObject.stepLength = p2pObject.drillStepLength ? p2pObject.drillStepLength : 160;
								p2pObject.align = i % 2 == 0 ? "up" : "down";
								p2pObject.angle = -360;	
							}
							
							$.each(p2pObject.levels, function(l, level){
								$.each(level.p2pObject, function(p, pObj){
									pObj.opacity = 0.5;
								});
							});
						});					
						
						linkObj.p2pObject = generateProgressiveLinkPosition(
								linkObj.p2pObject,
								linkObj.stepName, {
									x : step.link.x1,
									y : step.link.y1
								}, linkObj.flowDir);
					});
		}
	})
	model.p2pObject[0].startPos = startPos;
	model.p2pObject = generateProgressiveLinkPosition(model.p2pObject,
			model.stepName, startPos, model.flowDir);
	return model;
}

var breadCrumbs = [];
var bCrumbs = function(action, obj, index){
	if(action === "set"){
		breadCrumbs.push(obj);
		createBreadCrumbsElements();
	}else if(action === "remove"){
		breadCrumbs.splice(index, breadCrumbs.length);
		createBreadCrumbsElements();
	}else{
		return breadCrumbs;
	}
}

function createBreadCrumbsElements(){
	var crumbs = bCrumbs();
	var crumbContainer = $("div#breadCrumbs");
	crumbContainer.children().remove();
	
	$.each(crumbs, function(c, crumb){
		var clickableBtn = $("<button/>", {
			class: function(){
				if(c === 0){
					return "metroHome fA fa-home";
				}
				return "crumbs";				
			},
			text: function(){
				if(c === 0){
					return "";
				}
				return splitCamelCaseToString(crumb.name);				
			}
		});
		if(c !== crumbs.length - 1){
			clickableBtn.click(function(){
				clearAllFlowElements();				
				if(c === 0){
					resetZoomPan();
					setViewSelector(true, "map", "higherView");
					drawCenterNode(centerNodePosition());
					bCrumbs("remove", undefined,  (c + 1));
					createAllBranches(crumb.model);					
				}else{
					createDrilledView(crumb.model);
					bCrumbs("remove", undefined,  (c + 1));
				}
			})			
		}		
		crumbContainer.append(clickableBtn);
	});
}


function getStepModel(stepName){
	var allModels = getMapModels();
	var stepModel;
	$.each(allModels, function(m, model){		 
		if (stepName === model.stepName) {
			stepModel = model;
			return false;
		}else{
			$.each(model.p2pObject, function(p, linkObj){
				if(linkObj.linked){
					$.each(linkObj.linked, function(l, lObj){						
							if (stepName === lObj.stepName) {
								lObj.p2pObject[0].linkStart = true;
								stepModel = lObj;
								return false;
							}						
					});
				}
			});
		}
	});
	return stepModel;
}

function createLevelConnections(model){
	var mapContainer = d3.select("div#mapContainer");
	var svg = mapContainer.select("svg");
	var flowCanvas = svg.select("g#flowCanvas");
	
	$.each(model.p2pObject, function(p, stepObj){
		createConnections(stepObj);		
		$.each(stepObj.linked, function(l, link){
			$.each(link.p2pObject, function(p, stepObj){
				createConnections(stepObj);
			});
		});
	});
	
	function createConnections(stepObj){
		$.each(stepObj.levels, function(l, level){
			$.each(level.p2pObject, function(i, lev){
				if(lev.connectedTo){														
					setTimeout(function(){
						$.each(lev.connectedTo, function(c, connection){
							var connectedLine = d3.select("line#"+connection);
							if(!connectedLine.empty()){
								var line = flowCanvas.append("line").attr("x1", lev.link.x2).attr("y1", lev.link.y2).attr("x2", lev.link.x2).attr("y2", lev.link.y2)
								.attr("stroke", "#8393ca").attr("stroke-width", 1).style("stroke-dasharray", ("5, 3"));
								line.transition().duration(500).attr("x2", parseInt(connectedLine.attr("x2"))).attr("y2", parseInt(connectedLine.attr("y2")));								
							}
						});
					},500);					
				}
			});
		});
	}	
}