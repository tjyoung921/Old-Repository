$(document).ready(function(){
	initCanvas();

	$("select#viewSelector").on("change", function(event){
//		console.log("change");
		var view = event.target.value;
		createLegends();
		switch(view){
		case "opportunities": 
			createAssessments(true);
			createUseCaseView(false);
			break;
		case "deployments": 
			createAssessments(false);
			createUseCaseView(false);
			break;
		case "useCase": 
			createUseCaseView(true);
			createAssessments(false);
			break;
		case "map": 
			createContentView(false);
			break;
		case "content": 
			createContentView(true);
			break;
		}
	})
});

function openFileExplorer(){
	$("input#uploadFile").click();
}

function splitCamelCaseToString(s) {
    return s.split(/(?=[A-Z])/).join(' ');
}

function randomID(){
	return "l" + (Math.random().toString(36).substring(7));
}