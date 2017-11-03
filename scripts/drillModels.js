//Procure To Pay Drill Down
var categoryStrategyLevels = function() {
	var level1 = [ {
		name : "",
		align : "down",
		angle : -270,
		id: "csLevel1_0",
		levels : [],
	}, {
		name : "Strategy for sourcing within each category to maximize value and reduce Total Cost of Ownership",
		align : "down",
		wrapLength : 130,
		id: "csLevel1_1",
		levels : [],
		end : "end"
	} ]
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}

var sourcingAndContractsP2PLevels = function() {
	var level1 = [ {
		name : "",
		align : "up",
		angle : -110,
		id: "scP2PLevel1_0",
		stepLength: 170,
		levels : [],
	}, {
		name : "Supplier relationship and performance management",
		align : "up",
		wrapLength : 110,
		id: "scP2PLevel1_1",
		levels : [],
		end : "end"
	} ]
	
	var level2 = [ {
		name : "",
		align : "up",
		angle : -80,
		id: "scP2PLevel2_0",
		levels : [],
	}, {
		name : "Supplier selection and contract negotiation",
		align : "up",
		id: "scP2PLevel2_1",
		wrapLength : 110,
		end : "end",
		levels : [],
	} ]
	
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	},{
		p2pObject : level2,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}

var contractAdministrationP2PLevels = function() {
	var level1 = [ {
		name : "",
		align : "down",
		id: "caP2PLevel1_0",
		angle : -290,
		levels : [],
	}, {
		name : "Administration and management of contract and for compliance and value delivery",
		align : "down",
		id: "caP2PLevel1_1",
		wrapLength : 110,
		levels : [],
		end : "end"
	} ]
	
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}

var sourcingAndContractsLevels = function() {	
	var level1 = [ {
		name : "",
		align : "up",
		angle : -80,
		id: "scLevel1_0",
		levels : [],
	}, {
		name : "Shopping, creation of requisitions and approval",
		align : "up",
		id: "scLevel1_1",
		wrapLength : 110,
		end : "end",
		levels : [],
	} ]
	
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}

var pOsAndRecievingLevels = function() {	
	var level1 = [ {
		name : "",
		align : "up",
		angle : -260,
		id: "posRLevel1_0",
		stepLength: 170,
		levels : [],
	}, {
		name : "Creation of POs and spot buys",
		align : "left",
		angle : -270,
		id: "posRLevel1_1",
		stepLength: 110,
		wrapLength : 110,		
		levels : [],
	} , {
		name : "Recieving Administration",
		align : "down",
		id: "posRLevel1_2",
		wrapLength : 110,
		end : "end",
		levels : [],
	} ]
	
	var level2 = [ {
		name : "",
		align : "down",
		stepLength: 200,
		angle : -300,
		id: "posRLevel2_0",
		levels : [],
	}, {
		name : "Supplier master data management",
		align : "down",
		id: "posRLevel2_1",
		wrapLength : 110,
		end : "end",
		levels : [],
	} ]
	
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	},{
		p2pObject : level2,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}

var invoiceMatchingLevels = function() {	
	var level1 = [ {
		name : "",
		align : "up",
		angle : -80,
		id: "imLevel1_0",
		levels : [],
	}, {
		name : "3 way matching of PO, invoice and receipt and approval to pay",
		align : "up",
		wrapLength : 110,
		end : "end",
		id: "imLevel1_1",
		levels : [],
	} ]
	
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}


var paymentDisburmentsLevels = function() {	
	var level1 = [ {
		name : "",
		align : "down",
		angle : -300,
		id: "pdLevel1_0",
		levels : [],
	}, {
		name : "Payment on invoice and credit card administration",
		align : "down",
		id: "pdLevel1_1",
		wrapLength : 110,
		end : "end",
		levels : [],
	} ]
	
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}
//Procure To Pay Drill Down

//Quote To Cash
var customerSetupLevels = function() {	
	var level1 = [ {
		name : "",
		align : "up",
		angle : -270,
		id: "custstepLevel1_0",
		stepLength: 170,
		levels : [],
	}, {
		name : "Capture customer information",
		align : "down",	
		id: "custstepLevel1_1",					
		levels : [],
		end : "end",
	} ]
	
	var level2 = [ {
		name : "",
		align : "down",
		id: "custstepLevel2_0",	
		angle : -290,
		levels : [],
	}, {
		name : "Manage customer accounts",
		align : "right",
		id: "custstepLevel2_1",	
		wrapLength : 110,
		end : "end",
		levels : [],
	} ]
	
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	},{
		p2pObject : level2,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}

var creditPricingQuoteLevels = function() {	
	var level1 = [ {
		name : "",
		align : "up",
		angle : -110,
		id: "cpqpLevel1_0",	
		stepLength: 170,
		levels : [],
	}, {
		name : "Apply price",
		align : "up",	
		id: "cpqpLevel1_1",					
		levels : [],
		end : "end",
	} ]
	
	var level2 = [ {
		name : "",
		align : "up",
		id: "cpqpLevel2_0",	
		angle : -60,
		levels : [],
	}, {
		name : "Maintain price records",
		align : "up",
		id: "cpqpLevel2_1",	
		end : "end",
		levels : [],
	} ]
	
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	},{
		p2pObject : level2,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}

var contractAdministrationLevels = function() {	
	var level1 = [ {
		name : "",
		align : "up",
		angle : -270,
		id: "contractadminLevel1_0",	
		stepLength: 170,
		levels : [],
	}, {
		name : "Contract creation, processing and management",
		align : "down",	
		id: "contractadminLevel1_1",	
		wrapLength : 110,
		levels : [],
		end : "end",
	} ]
	
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}

var orderManagementLevels = function() {	
	var level1 = [ {
		name : "",
		align : "right",
		angle : -90,
		id: "ordermanageLevel1_0",	
		levels : [],
	}, {
		name : "Recive and confirm order",
		align : "left",
		angle : -90,	
		id: "ordermanageLevel1_1",					
		levels : [],
	}, {
		name : "Process order",
		align : "up",
		id: "ordermanageLevel1_2",						
		levels : [],
		end : "end",
	} ]
	
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}

var billingLevels = function() {	
	var level1 = [ {
		name : "",
		align : "up",
		angle : -270,
		id: "billingLevel1_0",	
		levels : [],
	}, {
		name : "Create invoice",
		align : "down",	
		id: "billingLevel1_1",
		levels : [],
		end : "end",
	} ]
	
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}

var cashApplicationLevels = function() {	
	var level1 = [ {
		name : "",
		align : "up",
		angle : -90,
		id: "cashAppLevel1_0",
		levels : [],
	}, {
		name : "Receive cash",
		align : "up",	
		id: "cashAppLevel1_2",
		levels : [],
		end : "end",
	} ]
	
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}

var collectionsAndDisputeManagementLevels = function() {	
	var level1 = [ {
		name : "",
		align : "right",
		angle : -270,
		id: "cadLevel1_0",
		levels : [],
	}, {
		name : "Pre-collections",
		align : "right",
		angle : -280,
		id: "cadLevel1_1",					
		levels : [],
	}, {
		name : "Collection",
		id: "cadLevel1_2",
		align : "right",
		angle : -280,	
		levels : [],
	}, {
		name : "Manage disputes",
		align : "right",
		angle : -280,	
		id: "cadLevel1_3",
		levels : [],
		end : "end",
	}  ]
	
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}
//Quote To Cash

//Plan To Forecast
var strategicPlanningLevels = function() {	
	var level1 = [ {
		name : "",
		align : "right",
		angle : -270,
		id: "spLevel1_0",
		levels : [],
	}, {
		name : "Prepare and deliver strategic plan",
		align : "down",
		id: "spLevel1_1",
		wrapLength : 110,	
		levels : [],
		end : "end",
	}  ]
	
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}

var financialPlanningLevels = function() {	
	var level1 = [ {
		name : "",
		align : "up",
		angle : -120,
		id: "fpLevel1_0",
		levels : [],
	}, {
		name : "Develop and maintain budget policies and procedures",
		align : "upleft",
		wrapLength: 130,
		id: "fpLevel1_1",
		levels : [],
		end : "end",
	} ]
	
	var level2 = [ {
		name : "",
		align : "up",
		angle : -90,
		id: "fpLevel2_0",
		stepLength: 170,
		levels : [],
	}, {
		name : "Draft Budget",
		align : "right",
		id: "fpLevel2_1",
		end : "end",
		levels : [],
	} ]
	
	var level3 = [ {
		name : "",
		align : "up",
		angle : -80,
		id: "fpLevel3_0",
		levels : [],
	}, {
		name : "Follow up on current year budget",
		align : "right",
		id: "fpLevel3_1",
		end : "end",
		levels : [],
	} ]
	
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	},{
		p2pObject : level2,
		stepName : "processStepL4",
		flowDir : "down"
	},{
		p2pObject : level3,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}

var capitalPlanningLevels = function() {	
	var level1 = [ {
		name : "",
		align : "up",
		angle : -240,
		id: "capitalplanLevel1_0",
		levels : [],
	}, {
		name : "Evaluate regulatory and business capital requirements",
		align : "down",
		wrapLength: 130,
		id: "capitalplanLevel1_1",
		levels : [],
		end : "end",
	} ]
	
	var level2 = [ {
		name : "",
		align : "up",
		angle : -280,
		id: "capitalplanLevel2_0",
		stepLength: 170,
		levels : [],
	}, {
		name : "Determine capital allocation metholology",
		align : "down",
		id: "capitalplanLevel2_1",
		end : "end",
		levels : [],
	} ]
		
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	},{
		p2pObject : level2,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}

var performanceManagementLevels = function() {	
	var level1 = [ {
		name : "",
		align : "up",
		id: "permManageLevel1_0",
		angle : -90,
		levels : [],
	}, {
		name : "Define performance metrics",
		align : "right",
		angle : -90,
		id: "permManageLevel1_1",
		wrapLength: 90,
		levels : [],
	}, {
		name : "Evaluate and manage financial performance",
		align : "up",
		id: "permManageLevel1_2",
		wrapLength: 130,
		levels : [],
		end : "end",
	} ]
		
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}

var managementReportingLevels = function() {	
	var level1 = [ {
		name : "",
		align : "up",
		angle : -90,
		id: "mreportLevel1_0",
		levels : [],
	}, {
		name : "Define report content",
		align : "right",
		angle : -90,
		id: "mreportLevel1_1",
		wrapLength: 90,
		levels : [],
	}, {
		name : "Generate reports",
		align : "right",
		id: "mreportLevel1_2",
		angle : -90,
		levels : []
	}, {
		name : "Distribute reports",
		align : "up",
		id: "mreportLevel1_3",
		angle : -90,
		levels : [],
		end : "end",
	} ]
		
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}

var businessAnalyticsLevels = function() {	
	var level1 = [ {
		name : "",
		align : "down",
		id: "bAnalyticsLevel1_0",
		angle : -270,
		levels : [],
	}, {
		name : "Performance and analyze ",
		align : "right",
		angle : -270,
		id: "bAnalyticsLevel1_1",
		wrapLength: 90,
		levels : [],
	}, {
		name : "Analyze drivers of performance",
		align : "right",
		angle : -270,
		id: "bAnalyticsLevel1_2",
		levels : []
	}, {
		name : "Distribute reports",
		id: "bAnalyticsLevel1_3",
		align : "down",
		levels : [],
		end : "end",
	} ]
		
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}

var rollingForcastLevels = function() {	
	var level1 = [ {
		name : "",
		align : "down",
		angle : -290,
		levels : [],
		id: "rForecastLevel1_0",
	}, {
		name : "Update forcast based on performance",
		align : "down",
		wrapLength: 120,
		id: "rForecastLevel1_1",
		levels : [],
		end : "end",
	}]
		
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}
//Plan To Forecast

//Asset Acquire To Retire
var strategicPlanningAndAllocationLevels = function() {	
	var level1 = [ {
		name : "",
		align : "down",
		angle : -280,
		id: "spalloacLevel1_0",
		levels : [],
	}, {
		name : "Develop strategic plan",
		align : "down",
		id: "spalloacLevel1_1",
		wrapLength: 120,
		levels : [],
		end : "end",
	}]
		
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}

var portfolioOptimizationLevels = function() {	
	var level1 = [ {
		name : "",
		align : "down",
		angle : -90,
		id: "portOptLevel1_0",
		levels : [],
	}, {
		name : "Manage portfolio",
		id: "portOptLevel1_1",
		align : "left",
		levels : [],
		wrapLength: 150,
		end : "end",
	}]
		
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}

var riskReturnManagementLevels = function() {	
	var level1 = [ {
		name : "",
		align : "down",
		angle : -270,
		id: "riskmanageLevel1_0",
		levels : [],
	}, {
		name : "Measure, classify, and prioritize risks",
		align : "right",
		angle : -270,
		id: "riskmanageLevel1_1",
		levels : [],
	}, {
		name : "Develop recommendations",
		align : "down",
		angle : -270,
		id: "riskmanageLevel1_2",
		levels : [],
		end : "end",
	}]
		
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}

var designProcurementLeanConstructionLevels = function() {	
	var level1 = [ {
		name : "",
		align : "down",
		angle : -80,
		id: "dplcLevel1_0",
		levels : [],
	}, {
		name : "Monitor productivity",
		align : "right",
		wrapLength: 150,
		id: "dplcLevel1_1",
		angle : -80,
		levels : [],
	}, {
		name : "Improve productivity through design, procurement, construction",
		align : "right",
		id: "dplcLevel1_2",
		wrapLength : 150,
		levels : [],
		end : "end",
	}]
		
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}

var assetUseMaintenanceRetirementLevels = function() {	
	var level1 = [ {
		name : "",
		align : "down",
		angle : -350,
		stepLength: 200,
		id: "aumrLevel1_0",
		levels : [],
	}, {
		name : "Retire assets",
		align : "right",
		id: "aumrLevel1_1",
		levels : [],
		end : "end"
	}]
	
	var level2 = [ {
		name : "",
		align : "down",
		angle : -300,
		id: "aumrLevel2_0",
		levels : [],
	}, {
		name : "Perform planned and unplanned maintenance",
		align : "right",
		levels : [],
		id: "aumrLevel2_1",
		end : "end"
	}]
		
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	},{
		p2pObject : level2,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}
//Asset Acquire To Retire

//Record To Report
var reportingLevels = function() {	
	var level1 = [ {
		name : "",
		align : "down",
		angle : -90,
		levels : [],
		id: "reportLevel1_0",
	}, {
		name : "Prepare and review management reports",
		align : "left",
		levels : [],
		id: "reportLevel1_1",
		end : "end"
	}]	
		
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}

var consolidationLevels = function() {	
	var level1 = [ {
		name : "",
		align : "down",
		angle : -320,
		stepLength: 150,
		id: "consolidationLevel1_0",
		levels : [],
	}, {
		name : "Coordinate and execute consolidation and closing of books",
		align : "down",
		id: "consolidationLevel1_1",
		levels : [],
		end : "end"
	}]	
		
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}

var internetCompanyLevels = function() {	
	var level1 = [ {
		name : "",
		align : "down",
		angle : -80,
		id: "internetCompanyLevel1_0",
		levels : [],
	}, {
		name : "Process intercompany billings",
		align : "left",
		id: "internetCompanyLevel1_1",
		angle : -90,
		levels : [],
	}, {
		name : "Confirm intercompany balances",
		align : "up",
		id: "internetCompanyLevel1_2",
		levels : [],
		end : "end"
	}]	
		
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}

var accountingReconcilliationsLevels = function() {	
	var level1 = [ {
		name : "",
		align : "down",
		id: "accountingReconcilliationsLevel1_0",
		angle : -230,
		levels : [],
	}, {
		name : "Prepare and review bank reconcillations",
		align : "down",
		id: "accountingReconcilliationsLevel1_1",
		levels : [],
		end : "end"
	}];
	
	var level2 = [ {
		name : "",
		align : "down",
		angle : -275,
		id: "accountingReconcilliationsLevel2_0",
		stepLength: 150,
		levels : [],
	}, {
		name : "Prepare and review GL account reconcillations",
		align : "down",
		id: "accountingReconcilliationsLevel2_1",
		levels : [],
		end : "end"
	}]
	
	var level3 = [ {
		name : "",
		align : "down",
		stepLength: 125,
		id: "accountingReconcilliationsLevel3_0",
		angle : -315,
		levels : [],
	}, {
		name : "Manage reconcillation compliance reporting",
		align : "down",
		id: "accountingReconcilliationsLevel3_1",
		levels : [],
		end : "end"
	}]
		
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	},{
		p2pObject : level2,
		stepName : "processStepL4",
		flowDir : "down"
	},{
		p2pObject : level3,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}

var closingJourneyEntriesLevels = function() {	
	var level1 = [ {
		name : "",
		align : "down",
		angle : -80,
		id: "closingJourneyEntriesLevel1_0",
		levels : [],
	}, {
		name : "Prepare and enter journal entries",
		align : "left",
		id: "closingJourneyEntriesLevel1_1",
		angle : -90,
		levels : [],
	}, {
		name : "Review and approve journal entries",
		align : "left",
		id: "closingJourneyEntriesLevel1_2",
		angle : -90,
		levels : [],
	}, {
		name : "File and archive journal entries",
		id: "closingJourneyEntriesLevel1_3",
		align : "up",
		levels : [],
		end : "end"
	}]	
		
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}

var gLSubledgerMaintenanceLevels = function() {	
	var level1 = [ {
		name : "",
		align : "down",
		angle : -260,
		id: "gLSubledgerMaintenanceLevel1_0",
		stepLength: 200,
		levels : [],
	}, {
		name : "Maintain reporting structures",
		align : "down",
		id: "gLSubledgerMaintenanceLevel1_1",
		levels : [],
		end : "end"
	}];
	
	var level2 = [ {
		name : "",
		align : "down",
		angle : -280,
		id: "gLSubledgerMaintenanceLevel2_0",
		stepLength: 150,
		levels : [],
	}, {
		name : "Maintain reports and queries, other system maintenance",
		align : "down",
		id: "gLSubledgerMaintenanceLevel2_1",
		wrapLength: 150,
		levels : [],
		end : "end"
	}]
	
	var level3 = [ {
		name : "",
		align : "down",
		stepLength: 125,
		id: "gLSubledgerMaintenanceLevel3_0",
		angle : -315,
		levels : [],
	}, {
		name : "Maintain closing of accounts policies",
		align : "down",
		id: "gLSubledgerMaintenanceLevel3_1",
		levels : [],
		end : "end"
	}]
		
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	},{
		p2pObject : level2,
		stepName : "processStepL4",
		flowDir : "down"
	},{
		p2pObject : level3,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}

var accountingPolicyMaintenanceLevels = function() {	
	var level1 = [ {
		name : "",
		align : "down",
		id: "accountingPolicyMaintenanceLevel1_0",
		angle : -60,
		levels : [],
	}, {
		name : "Define accounting policies",
		align : "right",
		id: "accountingPolicyMaintenanceLevel1_1",
		levels : [],
		end : "end"
	}]	
		
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}
//Record To Report

//Talent Planning Acquisition
var talentStrategyCompensationBenifitPlanningLevels = function() {	
	var level1 = [ {
		name : "",
		align : "down",
		angle : -270,
		id: "talentStrategyCBPlanningLevel1_0",
		levels : [],
	}, {
		name : "Define talent sourcing strategy, align staffing plan to business needs",
		align : "down",
		id: "talentStrategyCBPlanningLevel1_1",
		levels : [],
		end : "end"
	}]	
		
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}

var identifyRequirementsLevels = function() {	
	var level1 = [ {
		name : "",
		align : "down",
		id: "identifyRequirementsLevel1_0",
		angle : -80,
		levels : [],
	}, {
		name : "Create and develop employee requisitions",
		align : "up",
		wrapLength: 130,
		id: "identifyRequirementsLevel1_1",
		levels : [],
		end : "end"
	}]	
		
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}

var sourceAndSearchLevels = function() {	
	var level1 = [ {
		name : "",
		align : "down",
		angle : -260,
		levels : [],
		id: "sourceAndSearchLevel1_0",
	}, {
		name : "Determining and perform recruiting activities",
		align : "down",
		levels : [],
		id: "sourceAndSearchLevel1_1",
		end : "end"
	}]	
		
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}

var interviewSelectCandidateLevels = function() {	
	var level1 = [ {
		name : "",
		align : "down",
		angle : -90,
		id: "interviewSelectCandidateLevel1_0",
		levels : [],
	}, {
		name : "Screen and select candidates",
		align : "right",
		id: "interviewSelectCandidateLevel1_1",
		levels : [],
		end : "end"
	}]	
		
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}

var extentOfferCultivateAcceptanceLevels = function() {	
	var level1 = [ {
		name : "",
		align : "down",
		angle : -250,
		id: "extentOfferCultivateAcceptanceLevel1_0",
		levels : [],
	}, {
		name : "Conduct pre-employment screening",
		id: "extentOfferCultivateAcceptanceLevel1_1",
		align : "left",
		angle : -270,
		levels : [],
	}, {
		name : "Make and negogiate offer",
		align : "down",
		id: "extentOfferCultivateAcceptanceLevel1_2",
		levels : [],
		end : "end"
	}]	
	
	var level2 = [ {
		name : "",
		align : "down",
		angle : -300,
		id: "extentOfferCultivateAcceptanceLevel2_0",
		levels : [],
	}, {
		name : "Manage application data",
		align : "down",
		id: "extentOfferCultivateAcceptanceLevel2_1",
		angle : -90,
		levels : [],
		end : "end"
	}]	
		
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	},{
		p2pObject : level2,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}

//Talent Planning Acquisition

//Hire To Retire
var extentOfferCultivateAcceptanceHRLevels = function() {	
	var level1 = [ {
		name : "",
		align : "down",
		angle : -90,
		id: "extentOfferCultivateAcceptanceHRLevel1_0",
		levels : [],
	}, {
		name : "Create/maintain employee on-boarding program",
		align : "left",
		id: "extentOfferCultivateAcceptanceHRLevel1_1",
		levels : [],
		end : "end"
	}]	
		
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}

var payrollTABenifitsSetupLevels = function() {	
	var level1 = [ {
		name : "",
		align : "down",
		angle : -250,
		id: "payrollTABenifitsSetupLevel1_0",
		levels : [],
	}, {
		name : "Time tracking and absence tracking",
		id: "payrollTABenifitsSetupLevel1_1",
		align : "down",
		levels : [],
		end : "end"
	}]	
	
	var level2 = [ {
		name : "",
		align : "down",
		stepLength: 150,
		angle : -275,
		id: "payrollTABenifitsSetupLevel2_0",
		levels : [],
	}, {
		name : "Payroll administration",
		align : "down",
		levels : [],
		id: "payrollTABenifitsSetupLevel2_1",
		end : "end"
	}]
	
	var level3 = [ {
		name : "",
		align : "down",
		angle : -310,
		id: "payrollTABenifitsSetupLevel3_0",
		levels : [],
	}, {
		name : "Design and develop benifits plans",
		align : "right",
		id: "payrollTABenifitsSetupLevel3_1",
		angle : -270,
		levels : [],
	}, {
		name : "Select vendors to provide coverage",
		align : "down",
		id: "payrollTABenifitsSetupLevel3_2",
		levels : [],
		end : "end"
	}]
		
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	},{
		p2pObject : level2,
		stepName : "processStepL4",
		flowDir : "down"
	},{
		p2pObject : level3,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}

var goalsObjectiveLevels = function() {	
	var level1 = [ {
		name : "",
		align : "down",
		angle : -95,
		id: "goalsObjectiveLevel1_0",
		levels : [],
	}, {
		name : "Define performance objectives",
		align : "left",
		id: "goalsObjectiveLevel1_1",
		levels : [],
		end : "end"
	}]	
		
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}

var performanceSuccessionMangementLevels = function() {	
	var level1 = [ {
		name : "",
		align : "down",
		angle : -270,
		id: "performanceSuccessionMangementLevel1_0",
		levels : [],
	}, {
		name : "Evaluate and review performance program",
		align : "down",
		id: "performanceSuccessionMangementLevel1_1",
		levels : [],
		end : "end"
	}]	
	
	var level2 = [ {
		name : "",
		align : "down",
		angle : -120,
		id: "performanceSuccessionMangementLevel2_0",
		stepLength: 150,
		connectedTo: ["goalsObjectiveLevel1_0", "learningAndDevelopmentLevel2_0", "engagementCommunicationsLevel1_0"],
		levels : [],
	}, {
		name : "Review and manage employee performance",
		align : "up",
		wrapLength: 150,
		id: "performanceSuccessionMangementLevel2_1",
		levels : [],
		end : "end"
	}]	
		
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	},
	{
		p2pObject : level2,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}

var learningAndDevelopmentLevels= function() {	
	var level1 = [ {
		name : "",
		align : "down",
		id: "learningAndDevelopmentLevel1_0",
		angle : -270,
		levels : [],
	}, {
		name : "Manage employee development",
		align : "right",
		angle : -260,
		id: "learningAndDevelopmentLevel1_1",
		levels : [],
	}, {
		name : "Train employees",
		align : "down",
		id: "learningAndDevelopmentLevel1_2",
		levels : [],
		end : "end"
	}]	
	
	var level2 = [ {
		name : "",
		align : "down",
		id: "learningAndDevelopmentLevel2_0",
		angle : -90,		
		levels : [],
	}, {
		name : "Manage promotion and demotion process",
		align : "right",
		angle : -60,
		id: "learningAndDevelopmentLevel2_1",
		levels : [],
		end : "end"
	}]	
		
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	},{
		p2pObject : level2,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}

var engagementCommunicationsLevels= function() {	
	var level1 = [ {
		name : "",
		align : "down",
		id: "engagementCommunicationsLevel1_0",
		angle : -110,
		stepLength: 180,
		levels : [],
	}, {
		name : "Reward and retain employees",
		align : "up",
		angle : -260,
		id: "engagementCommunicationsLevel1_1",
		levels : [],
		end : "end"
	}]
	
	var level2 = [ {
		name : "",
		align : "down",
		id: "engagementCommunicationsLevel2_0",
		angle : -270,
		stepLength: 150,
		levels : [],
	}, {
		name : "Manage employee infomation",
		align : "down",
		angle : -260,
		id: "engagementCommunicationsLevel2_1",
		levels : [],
		end : "end"
	}]
	
	var level3 = [ {
		name : "",
		align : "down",
		id: "engagementCommunicationsLevel3_0",
		angle : -310,
		levels : [],
	}, {
		name : "Manage employee communication",
		align : "down",
		angle : -260,
		id: "engagementCommunicationsLevel3_1",
		levels : [],
		end : "end"
	}]
		
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	},{
		p2pObject : level2,
		stepName : "processStepL4",
		flowDir : "down"
	},{
		p2pObject : level3,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}

var retirementReemploymentPolicyLevels = function(){
	var level1 = [ {
		name : "",
		align : "down",
		id: "retirementReemploymentPolicyLevel1_0",
		angle : -80,
		levels : [],
	}, {
		name : "Manage retirement and re-employment program",
		align : "right",
		angle : -260,
		id: "retirementReemploymentPolicyLevel1_1",
		levels : [],
		end : "end"
	}]
		
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}

var retirementSeparationsLevels = function(){
	var level1 = [ {
		name : "",
		align : "down",
		id: "retirementSeparationsLevel1_0",
		angle : -270,
		stepLength: 150,
		levels : [],
	}, {
		name : "Counseling for employees about to retire or that have been seperated",
		align : "down",
		angle : -260,
		id: "retirementSeparationsLevel1_1",
		levels : [],
		end : "end"
	}]
	
	var level2 = [ {
		name : "",
		align : "down",
		id: "retirementSeparationsLevel2_0",
		angle : -300,
		levels : [],
	}, {
		name : "Evaluate and track reason for leaving",
		align : "right",
		angle : -260,
		id: "retirementSeparationsLevel2_1",
		levels : [],
		end : "end"
	}]
		
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	},{
		p2pObject : level2,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}

var benefitsAdministrationLevels = function(){
	var level1 = [ {
		name : "",
		align : "down",
		id: "benefitsAdministrationLevel1_0",
		angle : -360,
		levels : [],
	}, {
		name : "Manage and administer benifits",
		align : "right",
		angle : -260,
		id: "benefitsAdministrationLevel1_1",
		levels : [],
		end : "end"
	}]
		
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}
//Hire To Retire

//ITStrategy To Architecture
var businessITStrategyAllignmentLevels= function() {	
	var level1 = [ {
		name : "",
		align : "down",
		angle : -280,
		id: "businessITStrategyAllignmentLevel1_0",
		levels : [],
	}, {
		name : "Build strategic plan, ensure plan supports business objectives",
		align : "down",
		id: "businessITStrategyAllignmentLevel1_1",
		angle : -280,
		levels : [],
		end: "end"
	}]	
		
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}

var iTPortfolioManagementLevels= function() {	
	var level1 = [ {
		name : "",
		align : "down",
		id: "iTPortfolioManagementLevel1_0",
		angle : -80,
		levels : [],
	}, {
		name : "Manage portfolio",
		align : "left",
		id: "iTPortfolioManagementLevel1_1",
		angle : -80,
		levels : [],
		end: "end"
	}]	
		
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}

var defineITArchitectureLevels= function() {	
	var level1 = [ {
		name : "",
		align : "down",
		angle : -270,
		levels : [],
		id: "defineITArchitectureLevel1_0",
	}, {
		name : "Define IT architecture",
		align : "down",
		angle : -270,
		id: "defineITArchitectureLevel1_1",
		levels : [],
		end: "end"
	}]	
		
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}

var defineITDesignBuildStandardsLevels= function() {	
	var level1 = [ {
		name : "",
		align : "down",
		id: "defineITDesignBuildStandardsLevel1_0",
		angle : -260,
		stepLength: 140,		
		connectedTo: ['incidentManagementContinuousImprovementLevel2_0'],
		levels : [],
	}, {
		name : "Define IT desing and build standards",
		align : "left",
		id: "defineITDesignBuildStandardsLevel1_1",
		angle : -300,
		levels : [],
		end: "end"
	}]	
		
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}
//ITStrategy To Architecture

//IT Design To Build
var businessRequirementsFunctionalDesignLevels= function() {	
	var level1 = [ {
		name : "",
		align : "down",
		id: "businessRequirementsFunctionalDesignLevel1_0",
		angle : -290,
		connectedTo: ["applicationPerformanceManagementLevel1_0", "technicalRequirementsDesignLevel1_0"],
		stepLength: 80,
		levels : [],
	}, {
		name : "Record functional requirements (e.g. software functionality)",
		align : "left",
		stepLength: 90,
		wrapLength: 70,
		connectedTo: ["technicalRequirementsDesignLevel1_0", "incidentManagementContinuousImprovementLevel1_0"],
		id: "businessRequirementsFunctionalDesignLevel1_1",
		angle : -270,
		levels : [],
	}, {
		name : "Record business (non-functional) requirements (e.g. timing, budget)",
		align : "left",
		angle : -80,
//		connectedTo: ["incidentManagementContinuousImprovementLevel1_0"],
		stepLength: 90,
		id: "businessRequirementsFunctionalDesignLevel1_2",
		levels : [],
		end: "end"
	}]	
		
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}

var technicalRequirementsDesignLevels= function() {	
	var level1 = [ {
		name : "",
		align : "down",
		id: "technicalRequirementsDesignLevel1_0",
		angle : -310,
		stepLength: 90,
		levels : [],
	}, {
		name : "Define technical requirements",
		align : "right",
		angle : -290,
		stepLength: 80,
		id: "technicalRequirementsDesignLevel1_1",
		levels : [],
	}, {
		name : "Design to meet requirements and user needs",
		id: "technicalRequirementsDesignLevel1_2",
		align : "down",
		angle : -80,
		levels : [],
		end: "end"
	}]	
		
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}

var capacityPlanningManagementLevels= function() {	
	var level1 = [ {
		name : "",
		align : "down",
		angle : -60,
		levels : [],
		id: "capacityPlanningManagementLevel1_0",
	}, {
		name : "Schedule testing",
		align : "right",
		angle : -60,
		levels : [],
		id: "capacityPlanningManagementLevel1_1",
		end: "end"
	}]	
	
	var level2 = [ {
		name : "",
		align : "down",
		angle : -120,
		id: "capacityPlanningManagementLevel2_0",
		levels : [],
	}, {
		name : "Capacity planning",
		align : "up",
		angle : -120,
		id: "capacityPlanningManagementLevel2_1",
		levels : [],
		end: "end"
	}]
		
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	},{
		p2pObject : level2,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}

var applicationDevelopmentTestLevels= function() {	
	var level1 = [ {
		name : "",
		id: "applicationDevelopmentTestLevel1_0",
		align : "down",
		angle : -240,
		levels : [],
	}, {
		name : "Programming",
		align : "down",
		angle : -60,
		id: "applicationDevelopmentTestLevel1_1",
		levels : [],
		end: "end"
	}]	
	
	var level2 = [ {
		name : "",
		align : "down",
		angle : -360,
		stepLength: 150,
		id: "applicationDevelopmentTestLevel2_0",
		levels : [],
	}, {
		name : "Definition of test scripts",
		align : "right",
		angle : -120,
		id: "applicationDevelopmentTestLevel2_1",
		levels : [],
		end: "end"
	}]
	
	var level3 = [ {
		name : "",
		align : "down",
		angle : -310,
		levels : [],
		id: "applicationDevelopmentTestLevel3_0",
	}, {
		name : "Performance and user acceptance testing",
		align : "down",
		angle : -120,
		levels : [],
		id: "applicationDevelopmentTestLevel3_1",
		end: "end"
	}]
		
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	},{
		p2pObject : level2,
		stepName : "processStepL4",
		flowDir : "down"
	},{
		p2pObject : level3,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}
//IT Design To Build

//IT Transition To Operation CI
var incidentManagementContinuousImprovementLevels= function() {	
	var level1 = [ {
		name : "",
		align : "down",
		angle : -90,
		id: "incidentManagementContinuousImprovementLevel1_0",
		levels : [],
	}, {
		name : "Plan and implement changes",
		align : "right",
		id: "incidentManagementContinuousImprovementLevel1_1",
		angle : -80,
		levels : [],
		end: "end"
	}]	
	
	var level2 = [ {
		name : "",
		align : "down",
		angle : -190,
		levels : [],
		id: "incidentManagementContinuousImprovementLevel2_0",
	}, {
		name : "Monitor issues",
		align : "down",
		angle : -80,
		levels : [],
		id: "incidentManagementContinuousImprovementLevel2_1",
		end: "end"
	}]	
		
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	},{
		p2pObject : level2,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}

var applicationPerformanceManagementLevels= function() {	
	var level1 = [ {
		name : "",
		align : "down",
		angle : -110,
		stepLength: 150,
		levels : [],
		id: "applicationPerformanceManagementLevel1_0",
	}, {
		name : "Define performance metrics",
		align : "right",
		angle : -90,
		id: "applicationPerformanceManagementLevel1_1",
		levels : [],
		end: "end"
	}]	
		
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}

var releaseAndDeploymentLevels= function() {	
	var level1 = [ {
		name : "",
		align : "down",
		angle : -120,
		levels : [],
		id: "releaseAndDeploymentLevel1_0",
	}, {
		name : "Plan and manage releases",
		align : "up",
		angle : -60,
		levels : [],
		id: "releaseAndDeploymentLevel1_1",
		end: "end"
	}]	
	
	var level2 = [ {
		name : "",
		align : "down",
		angle : -80,
		levels : [],
		id: "releaseAndDeploymentLevel2_0",
	}, {
		name : "Develop deployment strategy",
		align : "up",
		id: "releaseAndDeploymentLevel2_1",
		angle : -120,
		levels : [],
		end: "end"
	}]
		
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	},{
		p2pObject : level2,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}

var supportCatalogTransitionPlanningLevels= function() {	
	var level1 = [ {
		name : "",
		align : "down",
		angle : -280,
		id: "supportCatalogTransitionPlanningLevel1_0",
		levels : [],
	}, {
		name : "Develop transition roadmap",
		align : "down",
		angle : -60,
		id: "supportCatalogTransitionPlanningLevel1_1",
		levels : [],
		end: "end"
	}]	
	
	var level2 = [ {
		name : "",
		align : "down",
		angle : -330,
		stepLength: 150,
		id: "supportCatalogTransitionPlanningLevel2_0",
		levels : [],
	}, {
		name : "Develop support catalog",
		align : "down",
		angle : -120,
		id: "supportCatalogTransitionPlanningLevel2_1",
		levels : [],
		end: "end"
	}]
		
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	},{
		p2pObject : level2,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}
//IT Transition To Operation CI

//New Product Development
var opportunityAssessmentConceptCreationLevels= function() {	
	var level1 = [ {
		name : "",
		align : "down",
		angle : -290,
		id: "opportunityAssessmentConceptCreationLevel1_0",
		levels : [],
	}, {
		name : "Evaluate performance of existing products against market opportunities",
		align : "down",
		id: "opportunityAssessmentConceptCreationLevel1_1",
		angle : -360,
		levels : [],
	}, {
		name : "Identify potential new products or potential improvements to existing products",
		align : "right",
		wrapLength: 130,
		stepLength: 150,
		id: "opportunityAssessmentConceptCreationLevel1_2",
		angle : -290,
		levels : [],
	}, {
		name : "Confirm alignment of product with business strategy",
		align : "down",
		id: "opportunityAssessmentConceptCreationLevel1_3",
		angle : -360,
		levels : [],
		end: "end"
	}]	
			
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}

var requirementGatheringLevels= function() {	
	var level1 = [ {
		name : "",
		align : "down",
		angle : -80,
		levels : [],
		id: "requirementGatheringLevel1_0",
	}, {
		name : "Define requirements",
		align : "right",
		angle : -80,
		levels : [],
		id: "requirementGatheringLevel1_1",
		end: "end"
	}]	
		
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}

var designDevelopmentLevels= function() {	
	var level1 = [ {
		name : "",
		align : "down",
		angle : -280,
		id: "designDevelopmentLevel1_0",
		levels : [],
	}, {
		name : "Develop and document product design specifications",
		align : "down",
		angle : -310,
		id: "designDevelopmentLevel1_1",
		levels : []
	}, {
		name : "Build prototypes",
		align : "down",
		angle : -60,
		id: "designDevelopmentLevel1_2",
		levels : [],
		end: "end"
	}]	
		
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}

var productQualificationTestingLevels= function() {	
	var level1 = [ {
		name : "",
		align : "down",
		angle : -90,
		levels : [],
		id: "productQualificationTestingLevel1_0",
	}, {
		name : "Conduct in-house product testing and evaluate feasiblity",
		align : "left",
		angle : -80,
		levels : [],
		id: "productQualificationTestingLevel1_1",
	}, {
		name : "Identify performance indicators",
		align : "left",
		angle : -20,
		levels : [],
		id: "productQualificationTestingLevel1_2",
	}, {
		name : "Eliminate quality and reliability problems",
		align : "right",
		angle : -60,
		id: "productQualificationTestingLevel1_3",
		levels : [],
		end: "end"
	}]
		
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}

var goToMarketLevels= function() {	
	var level1 = [ {
		name : "",
		align : "down",
		angle : -260,
		levels : [],
		id: "goToMarketLevel1_0",
	}, {
		name : "Test market for new product",
		align : "down",
		angle : -80,
		levels : [],
		id: "goToMarketLevel1_1",
		end: "end"
	}]
	
	var level2 = [ {
		name : "",
		align : "down",
		angle : -310,
		stepLength: 150,
		id: "goToMarketLevel2_0",
		levels : [],
	}, {
		name : "Manage regulatory requirements",
		align : "down",
		angle : -80,
		id: "goToMarketLevel2_1",
		levels : [],
		end: "end"
	}]
	
	var level3 = [ {
		name : "",
		align : "down",
		angle : -350,
		levels : [],
		id: "goToMarketLevel3_0",
	}, {
		name : "Collaborate with suppliers and contract manufactures",
		align : "right",
		angle : -80,
		id: "goToMarketLevel3_1",
		levels : [],
		end: "end"
	}]
		
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	},{
		p2pObject : level2,
		stepName : "processStepL4",
		flowDir : "down"
	},{
		p2pObject : level3,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}
//New Product Development

//Innovation To Commercialization
var frontEndIdeationInnovationLevels= function() {	
	var level1 = [ {
		name : "",
		align : "down",
		angle : -260,
		levels : [],
		id: "frontEndIdeationInnovationLevel1_0",
	}, {
		name : "Idea generation",
		align : "right",
		angle : -280,
		id: "frontEndIdeationInnovationLevel1_1",
		levels : [],
	}, {
		name : "Identify potential area of innovation",
		id: "frontEndIdeationInnovationLevel1_1",
		align : "down",
		angle : -80,
		levels : [],
		end: "end"
	}]
	
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}

var innovationPortfolioMangementLevels= function() {	
	var level1 = [ {
		name : "",
		align : "down",
		angle : -80,
		id: "innovationPortfolioMangementLevel1_0",
		levels : [],
	}, {
		name : "Evaluate ideas for feasibilty",
		align : "left",
		angle : -50,
		id: "innovationPortfolioMangementLevel1_1",
		levels : [],
	}, {
		name : "Asset protfolio",
		align : "right",
		angle : -80,
		id: "innovationPortfolioMangementLevel1_2",
		levels : [],
		end: "end"
	}]
	
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}

var commercializationLevels= function() {	
	var level1 = [ {
		name : "",
		align : "down",
		angle : -270,
		stepLenght: 150,
		levels : [],
		id: "commercializationLevel1_0",
	}, {
		name : "Develop timeline",
		align : "down",
		angle : -340,
		levels : [],
		id: "commercializationLevel1_1",
	}, {
		name : "Establish standards for launch and marketing plans",
		align : "right",
		angle : -270,
		id: "commercializationLevel1_2",
		levels : [],
	}, {
		name : "Launch product",
		align : "right",
		angle : -80,
		id: "commercializationLevel1_3",
		levels : [],
		end: "end"
	}]
	
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}
//Innovation To Commercialization

//Plan To Delivery
var demandSensingLevels= function() {	
	var level1 = [ {
		name : "",
		align : "down",
		angle : -270,
		id: "demandSensingLevel1_0",
		levels : [],
	}, {
		name : "Develop forecast",
		align : "left",
		angle : -280,
		stepLength: 70,
		levels : [],
		id: "demandSensingLevel1_1",
	}, {
		name : "Monitor activity against forecast",
		align : "down",
		angle : -180,
		stepLength: 120,
		id: "demandSensingLevel1_2",
		levels : [],
	}, {
		name : "Evaluate accuracy and revise forecast",
		align : "down",
		angle : -80,
		id: "demandSensingLevel1_3",
		levels : [],
		end: "end"
	}]
	
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}

var supplyNetworkPlanningLevels= function() {	
	var level1 = [ {
		name : "",
		align : "down",
		angle : -270,
		levels : [],
		id: "supplyNetworkPlanningLevel1_0",
	}, {
		name : "Manage demand for products",
		align : "left",
		angle : -280,
		levels : [],
		id: "supplyNetworkPlanningLevel1_1",
	}, {
		name : "Create and manage production schedule",
		align : "down",
		angle : -80,
		levels : [],
		id: "supplyNetworkPlanningLevel1_2",
		end: "end"
	}]
	
	var level2 = [ {
		name : "",
		align : "down",
		angle : -140,
		connectedTo: ["materialCharacterizationLevel1_1"],
		levels : [],
		id: "supplyNetworkPlanningLevel2_0",
	}, {
		name : "Develop production and materials plan",
		align : "upright",
		angle : -50,
		id: "supplyNetworkPlanningLevel2_1",
		levels : [],
		end: "end"
	}]
	
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	},{
		p2pObject : level2,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}

var productionSourcingExecutionLevels= function() {	
	var level1 = [ {
		name : "",
		align : "down",
		angle : -270,
		stepLenght: 150,
		levels : [],
		id: "productionSourcingExecutionLevel1_0",
	}, {
		name : "Develop contracts with suppliers",
		align : "down",
		angle : -340,
		levels : [],
		id: "productionSourcingExecutionLevel1_1",
	}, {
		name : "Order materials and services",
		align : "right",
		angle : -270,
		levels : [],
		id: "productionSourcingExecutionLevel1_2",
	}, {
		name : "Schedule production",
		align : "right",
		angle : -270,
		id: "productionSourcingExecutionLevel1_3",
		levels : [],
	}, {
		name : "Produce product",
		align : "down",
		angle : -80,
		id: "productionSourcingExecutionLevel1_4",
		levels : [],
		end: "end"
	}]
	
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}

var planMaintenanceAssetManagementLevels= function() {	
	var level1 = [ {
		name : "",
		align : "down",
		id: "planMaintenanceAssetManagementLevel1_0",
		angle : -90,
		levels : [],
	}, {
		name : "Preventive (planned) maintenance",
		align : "left",
		id: "planMaintenanceAssetManagementLevel1_1",
		angle : -90,
		levels : [],
	}, {
		name : "Requested (planned) maintenance",
		align : "left",
		id: "planMaintenanceAssetManagementLevel1_2",
		angle : -360,
		levels : [],
	}, {
		name : "Maintaine production records",
		id: "planMaintenanceAssetManagementLevel1_3",
		align : "down",
		angle : -270,
		levels : [],
		end: "end"
	}]
	
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}

var qualityManagementLevels= function() {	
	var level1 = [ {
		name : "",
		align : "down",
		angle : -270,
		id: "qualityManagementLevel1_0",
		levels : [],
	}, {
		name : "Develop quality standards and sampling standards",
		align : "left",
		angle : -280,
		id: "qualityManagementLevel1_1",
		levels : [],
	}, {
		name : "Perform tests and record test results",
		align : "right",
		angle : -270,
		id: "qualityManagementLevel1_2",
		levels : [],
	}, {
		name : "Maintain batch records manage lot traceability",
		align : "right",
		angle : -270,
		id: "qualityManagementLevel1_3",
		levels : [],
		end: "end"
	}]
	
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}

var inboundLogisticsWarehousingLevels= function() {	
	var level1 = [ {
		name : "",
		align : "down",
		angle : -80,
		levels : [],
		id: "inboundLogisticsWarehousingLevel1_0",
	}, {
		name : "Plan and manage inbound material flow",
		align : "left",
		angle : -30,
		levels : [],
		id: "inboundLogisticsWarehousingLevel1_1",
	}, {
		name : "Recieve deliverables",
		align : "downright",
		angle : -10,
		levels : [],
		id: "inboundLogisticsWarehousingLevel1_2",
	}, {
		name : "Track and manage inventory",
		align : "downright",
		angle : -0,
		levels : [],
		id: "inboundLogisticsWarehousingLevel1_3",
	}, {
		name : "Prepare product for delivery",
		align : "right",
		angle : -270,
		levels : [],
		id: "inboundLogisticsWarehousingLevel1_4",
		end: "end"
	}]
	
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}

var outboundLogisticsLevels= function() {	
	var level1 = [ {
		name : "",
		align : "down",
		angle : -270,
		levels : [],
		id: "outboundLogisticsLevel1_0",
	}, {
		name : "Plan, transport, and deliver product",
		align : "down",
		angle : -340,
		id: "outboundLogisticsLevel1_1",
		levels : [],
	}, {
		name : "Track center delivery performance",
		align : "right",
		angle : -270,
		id: "outboundLogisticsLevel1_2",
		levels : [],
	}, {
		name : "Manage transportation fleet",
		align : "right",
		angle : -270,
		id: "outboundLogisticsLevel1_3",
		levels : [],
		end: "end"
	}]
	
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}
//Plan To Delivery

//Product Line Management
var materialCharacterizationLevels= function() {	
	var level1 = [ {
		name : "",
		align : "down",
		angle : -190,
		stepLength: 150,
		id: "materialCharacterizationLevel1_0",
		levels : [],
	}, {
		name : "Characterize materials",
		align : "right",
		id: "materialCharacterizationLevel1_1",
		angle : -200,
		levels : [],
	}, {
		name : "Choose materials",
		align : "up",
		angle : -10,
		id: "materialCharacterizationLevel1_2",
		levels : [],
		end: "end"
	}]
	
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}

var productProcessChangeManagementLevels= function() {	
	var level1 = [ {
		name : "",
		align : "down",
		angle : -130,
		id: "productProcessChangeManagementLevel1_0",
		levels : [],
	}, {
		name : "Plan for and implement modifications",
		align : "left",
		id: "productProcessChangeManagementLevel1_1",
		levels : [],
		end: "end"
	}]
	
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}

var productLifeCycleMangementLevels= function() {	
	var level1 = [ {
		name : "",
		align : "down",
		id: "productLifeCycleMangementLevel1_0",
		angle : -110,
		stepLength: 200,
		levels : [],
	}, {
		name : "Retire outdated products",
		align : "left",
		id: "productLifeCycleMangementLevel1_1",
		angle : -80,
		levels : [],
		end: "end"
	}]
	
	var level2 = [ {
		name : "",
		align : "up",
		id: "productLifeCycleMangementLevel2_0",
		angle : -80,
		stepLength: 150,
		levels : [],
	}, {
		name : "Identify and refine performance indicators",
		align : "up",
		angle : -80,
		wrapLength: 130,
		id: "productLifeCycleMangementLevel2_1",
		levels : [],
		end: "end"
	}]
	
	var level3 = [ {
		name : "",
		align : "down",
		angle : -60,
		id: "productLifeCycleMangementLevel3_0",
		levels : [],
	}, {
		name : "Introduce new products",
		align : "right",
		id: "productLifeCycleMangementLevel3_1",
		angle : -60,
		levels : [],
		end: "end"
	}]
	
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	},{
		p2pObject : level2,
		stepName : "processStepL4",
		flowDir : "down"
	},{
		p2pObject : level3,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}

var productProfitabilityLevels= function() {	
	var level1 = [ {
		name : "",
		align : "down",
		angle : -270,
		stepLength: 70,
		id: "productProfitabilityLevel1_0",
		levels : [],
	}, {
		name : "Evaluate profitability",
		align : "left",
		angle : -270,
		id: "productProfitabilityLevel1_1",
		levels : [],
		end: "end"
	}]
	
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}

var productClaimsManagementLevels= function() {	
	var level1 = [ {
		name : "",
		align : "down",
		angle : -60,
		id: "productClaimsManagementLevel1_0",
		levels : [],
	}, {
		name : "Manage claims",
		align : "right",
		angle : -270,
		id: "productClaimsManagementLevel1_1",
		levels : [],
		end: "end"
	}]
	
	return [{
		p2pObject : level1,
		stepName : "processStepL4",
		flowDir : "down"
	}];
}
//Product Line Management