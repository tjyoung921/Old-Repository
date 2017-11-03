function createContextMenu(options){	
	$("#contextMenu").remove();
	var mapContainer = d3.select("div#mapContainer");
	var svg = mapContainer.select("svg");
	svg.on("click", null);
//	console.log("createContextMenu: ", options);	
	if(options){
			
		var container = $("<div/>", {
			id: "contextMenu",
			class: "contextMenu "+options.arrowPos
		})
		
		var ul = $("<ul/>", {
			class: "customList"
		});
		
		$.each(options.features, function(i, feature){
			ul.append($("<li/>", {
				class: "fA " + feature.icon,
				html: "<span>"+feature.name+"</span>",
				click: function(){
					container.remove();
					feature.propFnc();
				}
			}))
		});
		
		container.append(ul);
		options.dom.append(container);
		var pos = {x: (options.pos[0] - 8), y: (options.pos[1] + 12)};
		console.log("pos: ", pos);
		console.log("container.width(): ",container.width());
		console.log("container.height(): ",container.height());
		var cssOptions;	
		if(options.cssOptions){
			cssOptions = options.cssOptions;	
		}else{		
		if((pos.x + container.width()) > window.innerWidth){
			pos.x = pos.x - container.width();
			container.addClass("arrowR");
		}
		
		if((pos.y + container.height()) > window.innerHeight){
			pos.y = pos.y - container.height();
		}
		cssOptions = {left: pos.x , top: pos.y};	
		}
			
		container.css(cssOptions);
		svg.on("click", function(){
			createContextMenu(false);
		});
	}	
}

function getFeatureOptions(step){
	var features = [];	
	if(step.name === "drilled"){
		var viewSelector = $("button#showViewSelector");
		features = [
			{name: "Deployments View", icon: "fa-suitcase", propFnc: function(){
				createAssessments(false);
				createUseCaseView(false);
				setViewSelector(true, "deployments", "drilled");
				createLegends();
			}},
			{name: "Opportunities View", icon: "fa-file-photo-o", propFnc: function(){
				createAssessments(true);
				createUseCaseView(false);
				setViewSelector(true, "opportunities", "drilled");
				createLegends();
			}},
			{name: "Use Case View", icon: "fa-circle-o-notch", propFnc: function(){
				createUseCaseView(true);
				createAssessments(false);
				setViewSelector(true, "useCase", "drilled");
				createLegends();
			}}
		];		
	}else if(step.name === "higherView"){
		var viewSelector = $("button#showViewSelector");		
		features = [
			{name: "Map View", icon: "fa-line-chart", propFnc: function(){
				createContentView(false);
				setViewSelector(true, "map", "higherView");
				createLegends();
			}},
			{name: "Content View", icon: "fa-file-text", propFnc: function(){
				createContentView(true);
				setViewSelector(true, "content", "higherView");	
				createLegends();		
			}}
		];
	}else{		
		features = [
			{name: "Upload File", icon: "fa-upload", propFnc: function(){
				console.log("Upload File");
				openFileExplorer();
			}},
			{name: "View Uploaded Data", icon: "fa-table", propFnc: function(){
				console.log("View Uploaded Data");			
			}},
			{name: "Use Uploaded Data", icon: "fa-play", propFnc: function(){
				console.log("Use Uploaded Data");			
			}},
			{name: "Remove File", icon: "fa-trash", propFnc: function(){
				console.log("Delete File");			
			}},
		];
	}
	
	return features;
}