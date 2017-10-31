$(document).ready(function() {
	initCanvas();

	$("select#viewSelector").on("change", function(event) {
		// console.log("change");
		var view = event.target.value;
		createLegends();
		switch (view) {
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

function openFileExplorer() {
	$("input#uploadFile").click();
	var reader = new FileReader();

	function loadFile() {
		var file = document.querySelector('input#uploadFile').files[0];
		reader.addEventListener("load", parseFile, false);
		if (file) {
			reader.readAsText(file);
		}
	}

	function parseFile() {
		var data = d3.csvParse(reader.result, function(d) {
			return d;
		});
		console.log("data: ", data);
	}

	$("input#uploadFile").change(function() {
		loadFile();
	});
}

function splitCamelCaseToString(s) {
	return s.split(/(?=[A-Z])/).join(' ');
}

function randomID() {
	return "l" + (Math.random().toString(36).substring(7));
}