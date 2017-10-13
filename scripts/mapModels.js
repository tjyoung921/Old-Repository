var stepColor = function(stepName) {
	var colors = 
		{
			AssetAcquireToRetire: "#c7b299",
			QuoteToCash: "#1ea9e0",
			PlanToForecast: "#001571",
			ProcureToPay: "#91d8f5",
			RecordToReport: "#1b41ce",
			HireToRetire: "#ff0000",
			TalentPlanningAcquisition: "#ff7300",
			ITDesignToBuild: "#1baa2f",
			ITStrategyToArchitecture: "#52d726",
			ITTransitionToOperationCI: "#00530b",
			NewProductDevelopment: "#57330f",
			PlanToDelivery: "#8c6238",
			InnovationToCommercialization: "#643f2e",
			ProductLineManagement: "#3c2d29",
		}
	
	if(stepName){
		return colors[stepName];
	}else{
		return colors;
	}
}

var stepModel = function(step) {
	this.type = step.type;
	this.stroke = step.stroke;
	this.textColor = step.textColor;
	this.strokeWidth = step.strokeWidth;
	this.strokeDashArray = step.strokeDashArray;
	this.x1 = step.x1;
	this.y1 = step.y1;
	this.x2 = step.x2;
	this.y2 = step.y2;
	this.start = step.start;
	this.end = step.end;
	this.angle = step.angle;
}

stepModel.prototype.get = function() {
	for ( var i in this) {
		if (!this[i]) {
			delete this[i];
		}
	}
	return this;
}

var getStepAttributes = function(stepName, options) {
	var color = stepColor(stepName);
	switch (stepName) {	
	case "ProcureToPay":
	case "QuoteToCash":
	case "PlanToDelivery":
	case "ProductLineManagement":
	case "PlanToForecast":
	case "InnovationToCommercialization":
	case "HireToRetire":
	case "TalentPlanningAcquisition":
	case "AssetAcquireToRetire":
	case "ITStrategyToArchitecture":
	case "ITDesignToBuild":
	case "ITTransitionToOperationCI":
	case "RecordToReport":
	case "NewProductDevelopment":
		var link = new stepModel({
			type: "processStepL3",
			stroke: color,
			fill: color,
			strokeDashArray: "0",
			strokeWidth: 5,
			x1: options.x1,
			y1: options.y1,
			x2: options.x2,
			y2: options.y2,
			start: options.start,
			end: options.end,
		});		
		return link.get();
		break;
	case "processStepL4": 
		var link = new stepModel({
			type: "processStepL4",
			stroke: "#c7b299",
			fill: "#c7b299",
			textColor: "#555555",
			strokeWidth: 2,
			strokeDashArray: "3,3",
			x1: options.x1,
			y1: options.y1,
			x2: options.x2,
			y2: options.y2,
			start: options.start,
			end: options.end,
		});		
		return link.get();
		break;
	}
}


var  generateProgressiveLinkPosition = function(p2pObject, stepName, startPos, flowDir){	
	var dom = getDom();
	var objLen = p2pObject.length;
//	var stepLength = flowDir == "left" ? Math.abs(startPos.x - 0)/objLen : Math.abs(startPos.x - dom.width())/objLen;
	var stepLength = 100;
	var options = {}, newPoint, x1, y1;
	for ( var p = 0 ; p < p2pObject.length ; p++) {
		p2pObject[p].angle = p2pObject[p].angle ? p2pObject[p].angle : 0;
		stepLength = p2pObject[p].stepLength ? p2pObject[p].stepLength: stepLength;
		if(p2pObject[p].startPos){
			x1 = startPos.x, y1 = startPos.y;		
		}else{
			x1 = p2pObject[p-1].link.x2, y1 = p2pObject[p-1].link.y2;
		}
		newPoint = findNewPoint(x1, y1, p2pObject[p].angle, stepLength);
		options = {x1: x1, y1: y1, x2:newPoint.x, y2: newPoint.y, }
		p2pObject[p].link = getStepAttributes(stepName, options)
	}
	return p2pObject;
}

function findNewPoint(x, y, angle, distance) {
    var result = {};
    result.x = Math.round(Math.cos(angle * Math.PI / 180) * distance + x);
    result.y = Math.round(Math.sin(angle * Math.PI / 180) * distance + y);
    return result;
}
