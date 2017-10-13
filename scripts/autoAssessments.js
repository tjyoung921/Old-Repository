var getAssessmentAttributes = function(assessment) {
	var attrs = {
		MachineLearning : {
			image : "img/assessments/ml.png"
		},
		SmartWorkFlows : {
			image : "img/assessments/smartWorkFlows.png"
		},
		NLP : {
			image : "img/assessments/nlp.png"
		},
		RPA : {
			image : "img/assessments/rpa.png"
		},
	}

	if (assessment) {
		return attrs[assessment];
	} else {
		return attrs;
	}
}

var getContentAttributes = function(content) {
	var attrs = {
		ProductionRPABusinessBots : {
			image : "img/assessments/rpa.png"
		},
		ProductiveCognitiveEndUserSupport : {
			image : "img/assessments/ameliaFront.png"
		},
		E2EProcessAssessmentOpportunityArea : {
			image : "img/assessments/processAssessments.png"
		}
	}

	if (content) {
		return attrs[content];
	} else {
		return attrs;
	}
}

var getUseCaseAttributes = function(useCase) {
	var attrs = {
		Amelia : {
			image : "img/assessments/ameliaFront.png"
		}
	}

	if (useCase) {
		return attrs[useCase];
	} else {
		return attrs;
	}
}

var QuoteToCashAssessments = function(step) {
	var assessments = {
			customerSetup : {
			link : {
				angle : -110,
				stepLength : 180,
			},
			assessObj : [ {
				name : "RPA",
				percentage : "37%"
			}, {
				name : "SmartWorkFlows",
				percentage : "27%"
			}, {
				name : "MachineLearning",
				percentage : "20%"
			} ],
		},
		creditPricingQuote : {
			link : {
				angle : -90,
				stepLength : 300,
			},
			assessObj : [ {
				name : "RPA",
				percentage : "30%"
			}, {
				name : "MachineLearning",
				percentage : "22%"
			}, {
				name : "NLP",
				percentage : "16%"
			} ]
		},
		contractAdministration: {
			link : {
				angle : -250,
				stepLength : 300,
			},
			assessObj : [ {
				name : "RPA",
				percentage : "48%"
			}, {
				name : "SmartWorkFlows",
				percentage : "21%"
			}, {
				name : "NLP",
				percentage : "16%"
			} ]
		},
		orderManagement: {
			link : {
				angle : -270,
				stepLength : 30,
			},
			assessObj : [ {
				name : "RPA",
				percentage : "53%"
			}, {
				name : "SmartWorkFlows",
				percentage : "20%"
			}, {
				name : "MachineLearning",
				percentage : "19%"
			} ]
		},
		billing : {
			link : {
				angle : -110,
				stepLength : 180,
			},
			assessObj : [ {
				name : "RPA",
				percentage : "79%"
			}, {
				name : "NLP",
				percentage : "13%"
			}, {
				name : "MachineLearning",
				percentage : "8%"
			} ],
		},
		cashApplication : {
			link : {
				angle : -60,
				stepLength : 200,
			},
			assessObj : [ {
				name : "RPA",
				percentage : "68%"
			}, {
				name : "MachineLearning",
				percentage : "27%"
			}, {
				name : "NLP",
				percentage : "5%"
			} ]
		},
		collectionsDisputeManagement: {
			link : {
				angle : -320,
				stepLength : 300,
			},
			assessObj : [ {
				name : "RPA",
				percentage : "31%"
			}, {
				name : "MachineLearning",
				percentage : "20%"
			}, {
				name : "NLP",
				percentage : "18%"
			} ]
		},
	}

	if (step) {
		return assessments[step];
	} else {
		return assessments;
	}
}

var procureToPayAssessments = function(step) {
	var assessments = {
		sourcingContracts : {
			link : {
				angle : -110,
				stepLength : 180,
			},
			assessObj : [ {
				name : "NLP",
				percentage : "28%"
			}, {
				name : "MachineLearning",
				percentage : "25%"
			}, {
				name : "RPA",
				percentage : "19%"
			} ],
		},
		invoiceMatching : {
			link : {
				angle : -100,
				stepLength : 200,
			},
			assessObj : [ {
				name : "RPA",
				percentage : "52%"
			}, {
				name : "NLP",
				percentage : "17%"
			}, {
				name : "SmartWorkFlows",
				percentage : "16%"
			} ]
		},
		pOsAndRecieving: {
			link : {
				angle : -250,
				stepLength : 300,
			},
			assessObj : [ {
				name : "RPA",
				percentage : "35%"
			}, {
				name : "NLP",
				percentage : "18%"
			}, {
				name : "SmartWorkFlows",
				percentage : "17%"
			} ]
		},
		paymentDisburments: {
			link : {
				angle : -30,
				stepLength : 200,
			},
			assessObj : [ {
				name : "RPA",
				percentage : "77%"
			}, {
				name : "NLP",
				percentage : "11%"
			}, {
				name : "SmartWorkFlows",
				percentage : "10%"
			} ]
		},
		tbd: {
			link : {
				angle : -30,
				stepLength : 200,
			},
			assessObj : [ {
				name : "RPA",
				percentage : "TBD"
			}, {
				name : "NLP",
				percentage : "TBD"
			}, {
				name : "SmartWorkFlows",
				percentage : "TBD"
			} ]
		}
	}

	if (step) {
		return assessments[step];
	} else {
		return assessments;
	}
}



var assetAcquireToRetireAssessments = function(step) {
	var assessments = {
			strategicPlanningAllocation : {
			link : {
				angle : -110,
				stepLength : 180,
			},
			assessObj : [ {
				name : "MachineLearning",
				percentage : "40%"
			}, {
				name : "SmartWorkFlows",
				percentage : "21%"
			}, {
				name : "NLP",
				percentage : "21%"
			} ],
		},
		portfolioOptimization : {
			link : {
				angle : -60,
				stepLength : 200,
			},
			assessObj : [ {
				name : "MachineLearning",
				percentage : "37%"
			}, {
				name : "NLP",
				percentage : "21%"
			}, {
				name : "SmartWorkFlows",
				percentage : "19%"
			} ]
		},
		assetUseMaintenanceRetirement: {
			link : {
				angle : -250,
				stepLength : 300,
			},
			assessObj : [ {
				name : "MachineLearning",
				percentage : "39%"
			}, {
				name : "SmartWorkFlows",
				percentage : "24%"
			}, {
				name : "RPA",
				percentage : "23%"
			} ]
		}
	}

	if (step) {
		return assessments[step];
	} else {
		return assessments;
	}
}

var planToForecastAssessments = function(step) {
	var assessments = {
			strategicPlanning : {
			link : {
				angle : -110,
				stepLength : 180,
			},
			assessObj : [ {
				name : "MachineLearning",
				percentage : "31%"
			}, {
				name : "SmartWorkFlows",
				percentage : "18%"
			}, {
				name : "RPA",
				percentage : "9%"
			} ],
		},
		financialPlanning : {
			link : {
				angle : -80,
				stepLength : 250,
			},
			assessObj : [ {
				name : "RPA",
				percentage : "38%"
			}, {
				name : "MachineLearning",
				percentage : "27%"
			}, {
				name : "SmartWorkFlows",
				percentage : "18%"
			} ]
		},
		capitalPlanning: {
			link : {
				angle : -250,
				stepLength : 300,
			},
			assessObj : [ {
				name : "RPA",
				percentage : "56%"
			}, {
				name : "MachineLearning",
				percentage : "26%"
			}, {
				name : "NLP",
				percentage : "9%"
			} ]
		},
		performanceManagement: {
			link : {
				angle : -300,
				stepLength : 200,
			},
			assessObj : [ {
				name : "MachineLearning",
				percentage : "34%"
			}, {
				name : "RPA",
				percentage : "29%"
			}, {
				name : "NLP",
				percentage : "21%"
			} ]
		},
		managementReporting : {
			link : {
				angle : -110,
				stepLength : 180,
			},
			assessObj : [ {
				name : "RPA",
				percentage : "36%"
			}, {
				name : "NLP",
				percentage : "27%"
			}, {
				name : "MachineLearning",
				percentage : "17%"
			} ],
		},
		businessAnalytics : {
			link : {
				angle : -70,
				stepLength : 200,
			},
			assessObj : [ {
				name : "RPA",
				percentage : "34%"
			}, {
				name : "MachineLearning",
				percentage : "34%"
			}, {
				name : "NLP",
				percentage : "26%"
			} ]
		},
	}

	if (step) {
		return assessments[step];
	} else {
		return assessments;
	}
}

var branchContentView = function(stepName) {
	var contents = {
		ProcureToPay : {
			link : {
				x : 20,
				y : -50,
			},
			contentObj : [ {
				name : "ProductiveCognitiveEndUserSupport"
			}, {
				name : "ProductionRPABusinessBots"
			}, {
				name : "E2EProcessAssessmentOpportunityArea"
			} ]
		}, 
		QuoteToCash : {
			link : {
				x : 20,
				y : -50,
			},
			contentObj : [ 
			{
				name : "ProductionRPABusinessBots"
			}, {
				name : "E2EProcessAssessmentOpportunityArea"
			} ]
		},
		PlanToDelivery: {
			link : {
				x : -50,
				y : -50,
			},
			contentObj : [ {
				name : "E2EProcessAssessmentOpportunityArea"
			} ]
		},
		PlanToForecast: {
			link : {
				x : 10,
				y : -10,
			},
			contentObj : [ {
				name : "E2EProcessAssessmentOpportunityArea"
			} ]
		},
		RecordToReport: {
			link : {
				x : -80,
				y : 0,
			},
			contentObj : [ {
				name : "E2EProcessAssessmentOpportunityArea"
			} ]
		},
		NewProductDevelopment: {
			link : {
				x : 20,
				y : -50,
			},
			contentObj : [ {
				name : "ProductiveCognitiveEndUserSupport"
			},{
				name : "E2EProcessAssessmentOpportunityArea"
			} ]
		},
		HireToRetire: {
			link : {
				x : 0,
				y : -50,
			},
			contentObj : [{
				name : "E2EProcessAssessmentOpportunityArea"
			} ]
		},
		AssetAcquireToRetire: {
			link : {
				x : -60,
				y : 10,
			},
			contentObj : [{
				name : "E2EProcessAssessmentOpportunityArea"
			} ]
		},
		ITTransitionToOperationCI:{
			link : {
				x : 0,
				y : -60,
			},
			contentObj : [ {
				name : "ProductiveCognitiveEndUserSupport"
			}, {
				name : "ProductionRPABusinessBots"
			}, {
				name : "E2EProcessAssessmentOpportunityArea"
			} ]
		}
	}

	if (stepName) {
		return contents[stepName];
	} else {
		return contents;
	}
}