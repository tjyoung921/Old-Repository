var getMapModels = function(){
	var mapModel = [
		{stepName: "ProcureToPay", p2pObject: ProcureToPayModel()},
		{stepName: "QuoteToCash", p2pObject: QuoteToCashModel()},
		{stepName: "PlanToDelivery", p2pObject: PlanToDeliveryModel()},
		{stepName: "PlanToForecast", p2pObject: PlanToForecastModel()},
		{stepName: "InnovationToCommercialization", p2pObject: InnovationToCommercializationModel()},
		{stepName: "NewProductDevelopment", p2pObject: NewProductDevelopmentModel()},
		{stepName: "TalentPlanningAcquisition", p2pObject: TalentPlanningAcquisitionModel()},
		{stepName: "AssetAcquireToRetire", p2pObject: AssetAcquireToRetireModel()},
		{stepName: "ITStrategyToArchitecture", p2pObject: ITStrategyToArchitectureModel()},
		
	];	
	return mapModel;
}

var QuoteToCashModel = function() {
	var nodePosition = centerNodePosition();	
	var startPos = {x: nodePosition.x - 10, y: nodePosition.y + 50};
	var p2pObject = [ {
		name : "Customer Setup",
		align: "down",
		node : "start",
		startPos: startPos,
		flowDirection: "forward",
		angle: -180,		
		levels : customerSetupLevels(),
		assessments: QuoteToCashAssessments("customerSetup"),
	}, {
		name : "Credit, Pricing, Quote",
		align: "up",
		node : "end",
		angle: -200,
		assessments: QuoteToCashAssessments("creditPricingQuote"),
		levels : creditPricingQuoteLevels(),
	}, {
		name : "Contract Administration",
		align: "up",
		node : "end",
		angle: -180,
		linkedTo: [[0, 2]],
		assessments: QuoteToCashAssessments("contractAdministration"),
		levels : contractAdministrationLevels()
	}, {
		name : "Order Management",
		align: "down",
		node : "end",
		angle: -180,
		assessments: QuoteToCashAssessments("orderManagement"),
		levels : orderManagementLevels()
	}, {
		name : "Billing",
		align: "down",
		node : "end",
		angle: -180,
		assessments: QuoteToCashAssessments("billing"),
		levels : billingLevels()
	}, {
		name : "Cash Application",
		align: "down",
		node : "end",
		assessments: QuoteToCashAssessments("cashApplication"),
		angle: -180,
		processTitle: {name: "Quote To Cash", x: 10, y: -10},
		levels : cashApplicationLevels(),
		contents: branchContentView("QuoteToCash")
	}, {
		name : "Collections and Dispute Management",
		align: "down",
		angle: -180,
		assessments: QuoteToCashAssessments("collectionsDisputeManagement"),
		node : "end",
		end: "end",
		levels : collectionsAndDisputeManagementLevels()
	} ];
	
	return generateProgressiveLinkPosition(p2pObject, "QuoteToCash", startPos, "left");
}

var ProcureToPayModel = function() {
	var nodePosition = centerNodePosition();	
	var startPos = {x: nodePosition.x - 3, y: nodePosition.y + 120};
	var p2pObject = [ {
		name : "Category Strategy",
		align: "downC",
		node : "start",
		startPos: startPos,
		flowDirection: "forward",
		angle: -200,
		levels : categoryStrategyLevels()
	}, {
		name : "Sourcing and Contracts",
		align: "up",
		node : "end",
		angle: -190,
		linkedTo: [[2,2]],
		assessments: procureToPayAssessments("sourcingContracts"),
		levels : sourcingAndContractsP2PLevels(),
	}, {
		name : "Contract Administration",
		align: "downright",
		node : "end",
		stepLength: 150,
		angle: -210,
		levels : contractAdministrationP2PLevels()
	}, {
		name : "Requisition",
		align: "down",
		node : "end",
		angle: -180,
		levels : sourcingAndContractsLevels()
	}, {
		name : "POs and Recieving",
		align: "down",
		node : "end",
		angle: -180,
		assessments: procureToPayAssessments("pOsAndRecieving"),
		levels : pOsAndRecievingLevels()
	}, {
		name : "Invoice Matching",
		align: "down",
		node : "end",
		processTitle: {name: "Procure To Pay", x: 10, y: -10},
		angle: -180,
		assessments: procureToPayAssessments("invoiceMatching"),
		levels : invoiceMatchingLevels(),
		contents: branchContentView("ProcureToPay")
	}, {
		name : "Payment Disburments",
		align: "down",
		angle: -180,
		node : "end",
		end: "end",
		assessments: procureToPayAssessments("paymentDisburments"),
		levels : paymentDisburmentsLevels()
	} ];
	
	return generateProgressiveLinkPosition(p2pObject, "ProcureToPay", startPos, "left");
}

var PlanToDeliveryModel = function() {
	var nodePosition = centerNodePosition();	
	var startPos = {x: nodePosition.x + 40, y: nodePosition.y + 155};
	var p2pObject = [ {
		name : "Demand Sensing",
		align: "down",
		node : "start",
		startPos: startPos,
		flowDirection: "forward",
		angle: -270,
		levels : demandSensingLevels()
	}, {
		name : "Supply Network Planning",
		align: "down",
		node : "end",
		angle: -180,
		assessments: procureToPayAssessments("tbd"),
		levels : supplyNetworkPlanningLevels(),
		linked : [ProductLineManagementModel()]
	}, {
		name : "Production/Sourcing Execution",
		align: "downleft",
		node : "end",
		angle: -270,
		wrapLength: 100,
		drillStepLength: 150,
		levels : productionSourcingExecutionLevels()
	}, {
		name : "Plan Maintenance and Asset Management",
		align: "right",
		node : "end",
		angle: -270,
		drillStepLength: 150,
		levels : planMaintenanceAssetManagementLevels()
	}, {
		name : "Quality Management",
		align: "right",
		node : "end",
		angle: -270,
		processTitle: {name: "Plan To Delivery", x: -10, y: 0, angle: 270},
		drillStepLength: 150,
		assessments: procureToPayAssessments("tbd"),
		levels : qualityManagementLevels(),
		contents: branchContentView("PlanToDelivery")
	}, {
		name : "Inbound Logistics and Warehousing",
		align: "right",
		node : "end",
		angle: -270,
		drillStepLength: 150,
		levels : inboundLogisticsWarehousingLevels()
	}, {
		name : "Outbound Logistics",
		align: "left",
		angle: -270,
		node : "end",
		end: "end",
		levels : outboundLogisticsLevels()
	} ];
	
	return generateProgressiveLinkPosition(p2pObject, "PlanToDelivery", startPos, "down");
}

var ProductLineManagementModel = function() {
	var p2pObject = [ {
		name : "",
		align: "down",
		node : "start",
		drillStepLength: 300,
		angle: -300,
		levels : [],
	},{
		name : "Material Characterization",
		align: "right",
		node : "end",
		flowDirection: "forward",
		assessments: procureToPayAssessments("tbd"),
		angle: -300,
		levels : materialCharacterizationLevels()
	}, {
		name : "Product and Process Change Management",
		align: "right",
		wrapLength: 80,
		drillStepLength: 200,
		node : "end",
		angle: -270,
		levels : productProcessChangeManagementLevels(),
	}, {
		name : "Product Life Cycle Mangement",
		align: "down",
		node : "end",
		angle: -360,
		processTitle: {name: "Product Line Management", x: 10, y: -10},	
		stepLength: 180,
		assessments: procureToPayAssessments("tbd"),
		levels : productLifeCycleMangementLevels()
	}, {
		name : "Product Profitability",
		align: "down",
		node : "end",
		angle: -360,
		levels : productProfitabilityLevels(),
	}, {
		name : "Product Claims Management",
		align: "down",
		node : "end",
		angle: -360,
		levels : productClaimsManagementLevels(),
		end: "end"
	}];
	return {p2pObject: p2pObject, stepName: "ProductLineManagement", flowDir: "down"};
}

var PlanToForecastModel = function() {
	var nodePosition = centerNodePosition();	
	var startPos = {x: nodePosition.x + 80, y: nodePosition.y + 160};
	var p2pObject = [ {
		name : "Strategic Planning",
		align: "right",
		node : "start",
		startPos: startPos,
		flowDirection: "forward",
		angle: -300,
		assessments: planToForecastAssessments("strategicPlanning"),
		levels : strategicPlanningLevels()
	}, {
		name : "Financial Planning",
		align: "upright",
		node : "end",
		angle: -320,
		levels : financialPlanningLevels(),
		assessments: planToForecastAssessments("financialPlanning"),
	}, {
		name : "Capital Planning",
		align: "upright",
		node : "end",
		processTitle: {name: "Plan To Forecast", x: -5, y: 20, angle: -320},
		angle: -320,
		stepLength: 150,
		assessments: planToForecastAssessments("capitalPlanning"),
		levels : capitalPlanningLevels()
	}, {
		name : "Performance Management",
		align: "up",
		node : "end",
		angle: -360,
		linkedTo: [[2, 1, "linked", 0, 4]],
		assessments: planToForecastAssessments("performanceManagement"),
		levels : performanceManagementLevels(),
		contents: branchContentView("PlanToForecast")
	}, {
		name : "Management Reporting",
		align: "up",
		node : "end",
		stepLength: 200,
		assessments: planToForecastAssessments("managementReporting"),
		assessments: procureToPayAssessments("invoiceMatching"),
		angle: -330,
		levels : managementReportingLevels()
	}, {
		name : "Business Analytics",
		align: "left",
		node : "end",
		angle: -270,
		assessments: planToForecastAssessments("businessAnalytics"),
		levels : businessAnalyticsLevels(),
		linked: [RecordToReportModel()]
	}, {
		name : "Rolling Forcast",
		align: "right",
		angle: -270,
		node : "end",
		end: "end",
		levels : rollingForcastLevels()
	} ];
	
	return generateProgressiveLinkPosition(p2pObject, "PlanToForecast", startPos, "down");
}

var RecordToReportModel = function() {
	var p2pObject = [ {
		name : "",
		align: "left",
		node : "start",
		angle: -90,
		stepLength: 70,
		drillStepLength: 150,
		levels : []
	}, {
		name : "Reporting",
		align: "right",
		node : "end",
		processTitle: {name: "Record To Report", x: -10, y: -5, angle: -75},
		assessments: procureToPayAssessments("tbd"),
		angle: -75,
		stepLength: 70,
		drillStepLength: 150,
		levels : reportingLevels(),
	}, {
		name : "Consolidation",
		align: "right",
		node : "end",
		angle: -75,
		drillStepLength: 150,
		stepLength: 70,
		levels : consolidationLevels()
	}, {
		name : "Internet-Company",
		align: "right",
		node : "end",
		angle: -50,
		drillStepLength: 150,
		stepLength: 70,
		levels : internetCompanyLevels(),
		contents: branchContentView("RecordToReport")
	}, {
		name : "Accounting Reconcilliations",
		align: "right",
		node : "end",
		assessments: procureToPayAssessments("tbd"),
		angle: -50,
		drillStepLength: 150,
		stepLength: 70,
		levels : accountingReconcilliationsLevels(),
	},{
		name : "Closing Journey Entries",
		align: "right",
		node : "end",
		angle: -60,
		drillStepLength: 150,
		stepLength: 70,
		levels : closingJourneyEntriesLevels(),
	},{
		name : "GL and Subledger Maintenance",
		align: "right",
		flowDirection: "backward",
		node : "end",
		angle: -90,
		drillStepLength: 150,
		stepLength: 70,
		levels : gLSubledgerMaintenanceLevels(),
	},{
		name : "Accounting Policy Maintenance",
		align: "right",
		node : "end",
		drillStepLength: 150,
		assessments: procureToPayAssessments("tbd"),
		levels : accountingPolicyMaintenanceLevels(),
		end: "end"
	}];
	return {p2pObject: p2pObject, stepName: "RecordToReport", flowDir: "down"};
}

var InnovationToCommercializationModel = function() {
	var nodePosition = centerNodePosition();	
	var startPos = {x: nodePosition.x + 120, y: nodePosition.y + 140};
	var p2pObject = [ {
		name : "Front End Ideation and Innovation",
		align: "upright",
		node : "start",
		startPos: startPos,
		flowDirection: "forward",
		stepLength: 200,
		wrapLength: 200,
		drillStepLength: 200,
		angle: -360,
		levels : frontEndIdeationInnovationLevels()
	}, {
		name : "Innovation Portfolio Mangement",
		align: "down",
		node : "end",
		processTitle: {name: "Innovation To Commercialization", x: 10, y: 40},
		angle: -360,
		stepLength: 150,
		wrapLength: 200,
		drillStepLength: 200,
		levels : innovationPortfolioMangementLevels(),
	}, {
		name : "Commercialization",
		align: "right",
		node : "end",
		angle: -360,
		drillStepLength: 200,
		assessments: procureToPayAssessments("tbd"),
		levels : commercializationLevels(),
		end: "end"
	}];
	
	return generateProgressiveLinkPosition(p2pObject, "InnovationToCommercialization", startPos, "right");
}

var NewProductDevelopmentModel = function() {
	var nodePosition = centerNodePosition();	
	var startPos = {x: nodePosition.x + 145, y: nodePosition.y + 90};
	var p2pObject = [ {
		name : "Opportunity Assessment and Concept Creation",
		wrapLength: 250,
		drillStepLength: 250,
		align: "downright",
		node : "start",
		stepLength: 230,
		startPos: startPos,
		assessments: procureToPayAssessments("tbd"),
		flowDirection: "forward",
		angle: -5,
		levels : opportunityAssessmentConceptCreationLevels(),
	}, {
		name : "Requirement Gathering",
		align: "right",
		drillStepLength: 200,
		stepLength: 130,
		node : "end",
		angle: -50,
		levels : requirementGatheringLevels(),
	}, {
		name : "Design Development",
		align: "right",
		drillStepLength: 200,
		stepLength: 180,
		wrapLength: 200,
		processTitle: {name: "New Product Development", x: 5, y: -15, angle: -30},
		node : "end",
		angle: -30,
		levels : designDevelopmentLevels(),
		contents: branchContentView("NewProductDevelopment")
	}, {
		name : "Product Qualification and Testing",
		align: "up",
		drillStepLength: 200,
		stepLength: 200,
		node : "end",
		angle: -360,
		levels : productQualificationTestingLevels()
	},{
		name : "Go-To-Market",
		align: "down",
		node : "end",
		angle: -360,
		assessments: procureToPayAssessments("tbd"),
		levels : goToMarketLevels(),
		end: "end"
	}];
	
	return generateProgressiveLinkPosition(p2pObject, "NewProductDevelopment", startPos, "right");
}

var TalentPlanningAcquisitionModel = function() {
	var nodePosition = centerNodePosition();	
	var startPos = {x: nodePosition.x + 135, y: nodePosition.y + 40};
	var p2pObject = [ {
		name : "Talent Strategy, Compensation and Benifit Planning",
		align: "right",
		node : "start",
		wrapLength: 130,
		drillStepLength: 180,
		startPos: startPos,
		flowDirection: "forward",
		angle: -40,
		levels : talentStrategyCompensationBenifitPlanningLevels()
	}, {
		name : "Identify Requirements",
		align: "right",
		node : "end",
		drillStepLength: 180,
		assessments: procureToPayAssessments("tbd"),
		stepLength: 50,
		angle: -90,
		levels : identifyRequirementsLevels(),
	}, {
		name : "Source and Search",
		align: "right",
		node : "end",
		drillStepLength: 180,
		processTitle: {name: "Talent Planning Acquisition", x: -20, y: 10, angle: -90},
		stepLength: 50,
		angle: -90,
		levels : sourceAndSearchLevels()
	}, {
		name : "Interview, Select Candidate",
		align: "right",
		stepLength: 50,
		wrapLength: 200,
		node : "end",
		drillStepLength: 180,
		angle: -90,
		assessments: procureToPayAssessments("tbd"),
		levels : interviewSelectCandidateLevels()
	},{
		name : "Extent Offer, Cultivate and Acceptance",
		align: "right",
		stepLength: 50,
		wrapLength: 150,
		node : "end",
		angle: -90,
		levels : extentOfferCultivateAcceptanceLevels(),
		linked: [HireToRetireModel()],
		end: "end"
	}];
	
	return generateProgressiveLinkPosition(p2pObject, "TalentPlanningAcquisition", startPos, "right");
}

var HireToRetireModel = function() {
	var p2pObject = [ {
		name : "",
		align: "right",
		node : "start",
		stepLength: 70,
		drillStepLength: 150,
		wrapLength: 200,
		angle: -90,
		levels : []
	},{
		name : "On-boarding",
		align: "right",
		node : "end",
		flowDirection: "forward",
		assessments: procureToPayAssessments("tbd"),
		stepLength: 70,
		drillStepLength: 220,
		wrapLength: 200,
		angle: -90,
		levels : extentOfferCultivateAcceptanceHRLevels()
	}, {
		name : "Payroll, T&A, Benifits Setup",
		align: "right",
		flowDirection: "forward",
		node : "end",
		stepLength: 70,
		wrapLength: 200,
		drillStepLength: 220,
		angle: -90,
		levels : payrollTABenifitsSetupLevels(),
	}, {
		name : "Goals and Objective",
		align: "right",
		node : "end",
		angle: -50,
		drillStepLength: 150,
		wrapLength: 200,
		assessments: procureToPayAssessments("tbd"),
		levels : goalsObjectiveLevels()
	}, {
		name : "Performance and Succession Mangement",
		align: "up",
		wrapLength: 150,
		node : "end",
		stepLength: 100,
		drillStepLength: 150,
		angle: -360,
		levels : performanceSuccessionMangementLevels(),
	}, {
		name : "Learning and Development",
		align: "down",
		node : "end",
		angle: -360,
		wrapLength: 130,
		stepLength: 100,
		drillStepLength: 150,
		assessments: procureToPayAssessments("tbd"),
		levels : learningAndDevelopmentLevels(),
		contents: branchContentView("HireToRetire")
	},{
		name : "Engagement and Communications",
		align: "up",
		node : "end",
		angle: -360,
		stepLength: 100,
		wrapLength: 130,
		drillStepLength: 150,
		levels : engagementCommunicationsLevels(),
	},{
		name : "Retirement and Re-employment Policy",
		align: "down",
		node : "end",
		stepLength: 100,
		wrapLength: 130,
		drillStepLength: 150,
		angle: -360,
		levels : retirementReemploymentPolicyLevels(),
	},{
		name : "Retirement and Separations",
		align: "up",
		node : "end",
		drillStepLength: 150,
		stepLength: 100,
		processTitle: {name: "Hire To Retire", x: 20, y: 20, angle: -360},
		angle: -360,
		levels : retirementSeparationsLevels()
	},{
		name : "Benefits Administration",
		align: "right",
		node : "end",
		wrapLength: 150,
		angle: -360,
		assessments: procureToPayAssessments("tbd"),
		levels : benefitsAdministrationLevels(),
		end: "end"
	}];
	return {p2pObject: p2pObject, stepName: "HireToRetire", flowDir: "up"};
}

var AssetAcquireToRetireModel = function() {
	var nodePosition = centerNodePosition();	
	var startPos = {x: nodePosition.x + 90, y: nodePosition.y + 3};
	var p2pObject = [ {
		name : "Strategic Planning and Allocation",
		align: "upright",
		node : "start",
		startPos: startPos,
		flowDirection: "forward",
		assessments: assetAcquireToRetireAssessments("strategicPlanningAllocation"),
		angle: -90,
		levels : strategicPlanningAndAllocationLevels()
	}, {
		name : "Portfolio Optimization",
		align: "left",
		node : "end",
		processTitle: {name: "Asset Acquire To Retire", x: 20, y: 10, angle: -90},
		angle: -90,
		assessments: assetAcquireToRetireAssessments("portfolioOptimization"),
		levels : portfolioOptimizationLevels(),
	}, {
		name : "Risk Return Management",
		align: "left",
		node : "end",
		angle: -80,
		levels : riskReturnManagementLevels()
	}, {
		name : "Design, Procurement and Lean Construction",
		align: "left",
		node : "end",
		angle: -80,
		levels : designProcurementLeanConstructionLevels(),
		contents: branchContentView("AssetAcquireToRetire")
	},{
		name : "Asset Use, Maintenance and Retirement",
		align: "up",
		node : "end",
		angle: -90,
		assessments: assetAcquireToRetireAssessments("assetUseMaintenanceRetirement"),
		levels : assetUseMaintenanceRetirementLevels(),
		end: "end"
	}];
	
	return generateProgressiveLinkPosition(p2pObject, "AssetAcquireToRetire", startPos, "up");
}

var ITStrategyToArchitectureModel = function() {
	var nodePosition = centerNodePosition();	
	var startPos = {x: nodePosition.x + 30, y: nodePosition.y + 7};
	var p2pObject = [ {
		name : "Business and IT Strategy Allignment",
		align: "left",
		node : "start",
		startPos: startPos,
//		assessments: procureToPayAssessments("paymentDisburments"),
		stepLength: 150,
		flowDirection: "forward",
		angle: -130,
		levels : businessITStrategyAllignmentLevels()
	}, {
		name : "IT Portfolio Management",
		align: "up",
		node : "end",
		angle: -180,
		levels : iTPortfolioManagementLevels(),
	}, {
		name : "Define IT Architecture",
		align: "down",
		node : "end",
		angle: -180,
//		assessments: procureToPayAssessments("pOsAndRecieving"),
		levels : defineITArchitectureLevels()
	}, {
		name : "Define IT Design and Build Standards",
		align: "left",
		processTitle: {name: "IT Strategy To Architecture", x: 10, y: -10},
		node : "end",
		angle: -180,
		levels : defineITDesignBuildStandardsLevels(),
		linked: [ITDesignToBuildModel(), ITTransitionToOperationCIModel()],
		end: "end"
	}];
	
	return generateProgressiveLinkPosition(p2pObject, "ITStrategyToArchitecture", startPos, "up");
}

var ITDesignToBuildModel = function() {
	var p2pObject = [ {
		name : "",
		align: "left",
		drillStepLength: 200,
		node : "start",
		angle: -120,
		levels : [],
	},{
		name : "Business Requirements and Functional Design",
		align: "up",
		wrapLength: 150,
		flowDirection: "forward",
		node : "end",
//		assessments: procureToPayAssessments("sourcingContracts"),
		angle: -180,
		levels : businessRequirementsFunctionalDesignLevels()
	},{
		name : "Technical Requirements and Design",
		align: "up",
		node : "end",
		angle: -180,
		drillStepLength: 220,
//		assessments: procureToPayAssessments("pOsAndRecieving"),
		levels : technicalRequirementsDesignLevels(),
		useCase: {name: "Amelia", link: {x: 30, y: -90}}
	}, {
		name : "Capacity Planning and Management",
		align: "up",
		node : "end",
		drillStepLength: 200,
		angle: -180,
		levels : capacityPlanningManagementLevels(),
	}, {
		name : "Application Development and Test",
		align: "left",
		node : "end",
		angle: -180,
		processTitle: {name: "IT Design To Build", x: 10, y: 20},		
//		assessments: procureToPayAssessments("paymentDisburments"),
		levels : applicationDevelopmentTestLevels(),
		end: "end"		
	}];
	return {p2pObject: p2pObject, stepName: "ITDesignToBuild", flowDir: "left"};
}

var ITTransitionToOperationCIModel = function() {
	var p2pObject = [ {
		name : "",
		align: "left",
		drillStepLength: 200,
		node : "start",
		angle: -240,
		levels : [],
	},{
		name : "Incident Management and Continuous Improvement",
		align: "down",
		node : "end",
		wrapLength: 150,
//		assessments: procureToPayAssessments("sourcingContracts"),
		angle: -180,
		levels : incidentManagementContinuousImprovementLevels()
	},{
		name : "Application Performance Management",
		align: "down",
		node : "end",
		angle: -180,
//		assessments: procureToPayAssessments("paymentDisburments"),
		levels : applicationPerformanceManagementLevels()
	}, {
		name : "Release and Deployment",
		align: "down",
		node : "end",
		processTitle: {name: "IT Transition To Operation / CI", x: 10, y: -10},
		flowDirection: "backward",
		angle: -180,
		levels : releaseAndDeploymentLevels(),
		contents: branchContentView("ITTransitionToOperationCI")
	}, {
		name : "Support Catalog and Transition Planning",
		align: "downleft",
		node : "end",
		angle: -180,
		wrapLength: 110,
		levels : supportCatalogTransitionPlanningLevels(),
		end: "end"
	}];
	return {p2pObject: p2pObject, stepName: "ITTransitionToOperationCI", flowDir: "left"};
}