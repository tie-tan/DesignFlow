export const json = {
    "status": 200,
    "message": "GSI fetch is successful",
    "result": {
        "solutionLogic": [
            {
                "TYPE": "com.nsl.logical.model.SequentialCU",
                "DATA": {
                    "index": 9,
                    "nextTriggerSet": [
                        {
                            "index": 2,
                            "nextCUId": 201752786269,
                            "nextCUName": "Select Status",
                            "isParallel": false
                        }
                    ],
                    "referencedChangeUnit": 1984122297734,
                    "disableSTEs": false,
                    "pathwaysCountFromCurrentCU": 1437248170,
                    "isParallel": false,
                    "txnDataSaveMode": "DEFAULT",
                    "name": "NSL_FetchUserDataReservedCu",
                    "displayName": "Fetch User Data Reserved ",
                    "agents": [
                        {
                            "agentType": "machine"
                        }
                    ],
                    "isReserved": false,
                    "masterId": 7829014138,
                    "version": "20.0",
                    "status": "ARCHIVED",
                    "cuType": "BASIC",
                    "isFaceted": false,
                    "id": 1139328433236,
                    "contextualId": [
                        "GS819134690206.CU1139328433236_1984122297734"
                    ],
                    "designTimeRights": [],
                    "txnTimeRights": []
                }
            },
            {
                "TYPE": "com.nsl.logical.model.SequentialCU",
                "DATA": {
                    "index": 2,
                    "nextTriggerSet": [
                        {
                            "index": 38,
                            "nextCUId": 1908873283863,
                            "nextCUName": "Search For Health System Client",
                            "isParallel": false
                        }
                    ],
                    "referencedChangeUnit": 660794699762,
                    "disableSTEs": false,
                    "pathwaysCountFromCurrentCU": 1437248170,
                    "isParallel": false,
                    "txnDataSaveMode": "DEFAULT",
                    "name": "Select Status",
                    "displayName": "Select Status",
                    "agents": [
                        {
                            "agentType": "human"
                        }
                    ],
                    "isReserved": false,
                    "masterId": 1058252814239,
                    "version": "14.0",
                    "status": "PUBLISHED",
                    "cuType": "BASIC",
                    "isFaceted": false,
                    "id": 201752786269,
                    "contextualId": [
                        "GS819134690206.CU201752786269_660794699762"
                    ],
                    "designTimeRights": [
                        {
                            "informationRight": true,
                            "decisionRight": true,
                            "executionRight": false,
                            "rightHolderId": 1505928273018,
                            "rightHolderType": "ROLE",
                            "rightHolderName": "NSL Admin",
                            "disableParentRoleAccess": false
                        },
                        {
                            "informationRight": true,
                            "decisionRight": false,
                            "executionRight": false,
                            "rightHolderId": 389660037451,
                            "rightHolderType": "ROLE",
                            "rightHolderName": "Mx CRM",
                            "disableParentRoleAccess": false
                        }
                    ],
                    "txnTimeRights": [
                        {
                            "informationRight": true,
                            "decisionRight": false,
                            "executionRight": true,
                            "rightHolderId": 1505928273018,
                            "rightHolderType": "ROLE",
                            "rightHolderName": "NSL Admin",
                            "disableParentRoleAccess": false
                        },
                        {
                            "informationRight": true,
                            "decisionRight": false,
                            "executionRight": true,
                            "rightHolderId": 389660037451,
                            "rightHolderType": "ROLE",
                            "rightHolderName": "Mx CRM",
                            "disableParentRoleAccess": false
                        }
                    ],
                    "dsdMetadataId": "184e376e-5e9e-4d1a-979c-a2efa9bf02c1"
                }
            },
            {
                "TYPE": "com.nsl.logical.model.SequentialCU",
                "DATA": {
                    "index": 4,
                    "nextTriggerSet": [
                        {
                            "index": 6,
                            "nextCUId": 1135179603348,
                            "nextCUName": "Proceed To Reject",
                            "isParallel": false
                        },
                        {
                            "index": 7,
                            "nextCUId": 1407138192331,
                            "nextCUName": "Proceed To Preview",
                            "isParallel": false
                        },
                        {
                            "index": 13,
                            "nextCUId": 1916153567701,
                            "nextCUName": "Proceed To Deactivate",
                            "isParallel": false
                        },
                        {
                            "index": 14,
                            "nextCUId": 1433738452168,
                            "nextCUName": "Proceed To Smart Contract",
                            "isParallel": false
                        },
                        {
                            "index": 70,
                            "nextCUId": 634819978901,
                            "nextCUName": "Proceed to End",
                            "isParallel": false
                        }
                    ],
                    "referencedChangeUnit": 1472944364159,
                    "disableSTEs": false,
                    "pathwaysCountFromCurrentCU": 1437248169,
                    "isParallel": false,
                    "txnDataSaveMode": "DEFAULT",
                    "name": "Display Health System Client",
                    "displayName": "Display Health System Client",
                    "agents": [
                        {
                            "agentType": "human"
                        }
                    ],
                    "isReserved": false,
                    "masterId": 1790177114556,
                    "version": "27.0",
                    "status": "PUBLISHED",
                    "cuType": "BASIC",
                    "isFaceted": false,
                    "id": 2122897430561,
                    "contextualId": [
                        "GS819134690206.CU2122897430561_1472944364159"
                    ],
                    "designTimeRights": [
                        {
                            "informationRight": true,
                            "decisionRight": true,
                            "executionRight": false,
                            "rightHolderId": 1505928273018,
                            "rightHolderType": "ROLE",
                            "rightHolderName": "NSL Admin",
                            "disableParentRoleAccess": false
                        },
                        {
                            "informationRight": true,
                            "decisionRight": false,
                            "executionRight": false,
                            "rightHolderId": 389660037451,
                            "rightHolderType": "ROLE",
                            "rightHolderName": "Mx CRM",
                            "disableParentRoleAccess": false
                        }
                    ],
                    "txnTimeRights": [
                        {
                            "informationRight": true,
                            "decisionRight": false,
                            "executionRight": true,
                            "rightHolderId": 1505928273018,
                            "rightHolderType": "ROLE",
                            "rightHolderName": "NSL Admin",
                            "disableParentRoleAccess": false
                        },
                        {
                            "informationRight": true,
                            "decisionRight": false,
                            "executionRight": true,
                            "rightHolderId": 389660037451,
                            "rightHolderType": "ROLE",
                            "rightHolderName": "Mx CRM",
                            "disableParentRoleAccess": false
                        }
                    ],
                    "dsdMetadataId": "5463f8b8-089d-4948-a9db-427d0d15c121"
                }
            },
            {
                "TYPE": "com.nsl.logical.model.AlternativeCU",
                "DATA": {
                    "index": 6,
                    "nextTriggerSet": [
                        {
                            "index": 68,
                            "nextCUId": 145493608420,
                            "nextCUName": "Reject Health System Subscription",
                            "isParallel": false
                        }
                    ],
                    "referencedChangeUnit": 817598247462,
                    "disableSTEs": false,
                    "pathwaysCountFromCurrentCU": 1433053866,
                    "isParallel": false,
                    "txnDataSaveMode": "DEFAULT",
                    "name": "Proceed To Reject",
                    "displayName": "Proceed To Reject",
                    "agents": [
                        {
                            "agentType": "machine"
                        }
                    ],
                    "isReserved": false,
                    "masterId": 320696746646,
                    "version": "5.0",
                    "status": "ARCHIVED",
                    "cuType": "BASIC",
                    "isFaceted": false,
                    "id": 1135179603348,
                    "contextualId": [
                        "GS819134690206.CU1135179603348_817598247462"
                    ],
                    "designTimeRights": [],
                    "txnTimeRights": [],
                    "dsdMetadataId": "664d25bd-b462-4a0d-a0d8-6138264d2981"
                }
            },
            {
                "TYPE": "com.nsl.logical.model.AlternativeCU",
                "DATA": {
                    "index": 7,
                    "nextTriggerSet": [
                        {
                            "index": 79,
                            "nextCUId": 478256486293,
                            "nextCUName": "Preview Health System Client Details",
                            "isParallel": false
                        }
                    ],
                    "referencedChangeUnit": 1203563809685,
                    "disableSTEs": false,
                    "pathwaysCountFromCurrentCU": 1433053866,
                    "isParallel": false,
                    "txnDataSaveMode": "DEFAULT",
                    "name": "Proceed To Preview",
                    "displayName": "Proceed To Preview",
                    "agents": [
                        {
                            "agentType": "machine"
                        }
                    ],
                    "isReserved": false,
                    "masterId": 1033797087498,
                    "version": "4.0",
                    "status": "ARCHIVED",
                    "cuType": "BASIC",
                    "isFaceted": false,
                    "id": 1407138192331,
                    "contextualId": [
                        "GS819134690206.CU1407138192331_1203563809685"
                    ],
                    "designTimeRights": [],
                    "txnTimeRights": [],
                    "dsdMetadataId": "9ec53488-97ab-4c11-ac91-ce73bde2a618"
                }
            },
            {
                "TYPE": "com.nsl.logical.model.AlternativeCU",
                "DATA": {
                    "index": 13,
                    "nextTriggerSet": [
                        {
                            "index": 74,
                            "nextCUId": 98921396766,
                            "nextCUName": "Deactivate Health System Subscription",
                            "isParallel": false
                        }
                    ],
                    "referencedChangeUnit": 2083279182268,
                    "disableSTEs": false,
                    "pathwaysCountFromCurrentCU": 1433053866,
                    "isParallel": false,
                    "txnDataSaveMode": "DEFAULT",
                    "name": "Proceed To Deactivate",
                    "displayName": "Proceed To Deactivate",
                    "agents": [
                        {
                            "agentType": "machine"
                        }
                    ],
                    "isReserved": false,
                    "masterId": 1081678003564,
                    "version": "4.0",
                    "status": "PUBLISHED",
                    "cuType": "BASIC",
                    "isFaceted": false,
                    "id": 1916153567701,
                    "contextualId": [
                        "GS819134690206.CU1916153567701_2083279182268"
                    ],
                    "designTimeRights": [],
                    "txnTimeRights": [],
                    "dsdMetadataId": "b6fb1ddb-4fca-41ad-910d-a45c82abd08c"
                }
            },
            {
                "TYPE": "com.nsl.logical.model.AlternativeCU",
                "DATA": {
                    "index": 14,
                    "nextTriggerSet": [
                        {
                            "index": 73,
                            "nextCUId": 1301482683308,
                            "nextCUName": "Smart Contract For Health System Client",
                            "isParallel": false
                        }
                    ],
                    "referencedChangeUnit": 85202663730,
                    "disableSTEs": false,
                    "pathwaysCountFromCurrentCU": 1433053866,
                    "isParallel": false,
                    "txnDataSaveMode": "DEFAULT",
                    "name": "Proceed To Smart Contract",
                    "displayName": "Proceed To Smart Contract",
                    "agents": [
                        {
                            "agentType": "machine"
                        }
                    ],
                    "isReserved": false,
                    "masterId": 83885114820,
                    "version": "2.0",
                    "status": "PUBLISHED",
                    "cuType": "BASIC",
                    "isFaceted": false,
                    "id": 1433738452168,
                    "contextualId": [
                        "GS819134690206.CU1433738452168_85202663730"
                    ],
                    "designTimeRights": [],
                    "txnTimeRights": [],
                    "dsdMetadataId": "57fc9de8-6a87-4d3b-a4a2-a2802f0ebec7"
                }
            },
            {
                "TYPE": "com.nsl.logical.model.SequentialCU",
                "DATA": {
                    "index": 30,
                    "nextTriggerSet": [
                        {
                            "index": 2,
                            "nextCUId": 201752786269,
                            "nextCUName": "Select Status",
                            "isParallel": false
                        }
                    ],
                    "referencedChangeUnit": 1798503936989,
                    "disableSTEs": false,
                    "pathwaysCountFromCurrentCU": 1433053866,
                    "isParallel": false,
                    "txnDataSaveMode": "DEFAULT",
                    "name": "How Would You Like To Proceed MxCRM",
                    "displayName": "How Would You Like To Proceed?",
                    "agents": [
                        {
                            "agentType": "machine"
                        }
                    ],
                    "isReserved": false,
                    "masterId": 1533114836479,
                    "version": "4.0",
                    "status": "PUBLISHED",
                    "cuType": "BASIC",
                    "isFaceted": false,
                    "id": 561848679496,
                    "contextualId": [
                        "GS819134690206.CU561848679496_1798503936989"
                    ],
                    "designTimeRights": [],
                    "txnTimeRights": [],
                    "dsdMetadataId": "d78dc86a-c420-4f55-95b8-d9d49b65d5c2"
                }
            },
            {
                "TYPE": "com.nsl.logical.model.SequentialCU",
                "DATA": {
                    "index": 38,
                    "nextTriggerSet": [
                        {
                            "index": 76,
                            "nextCUId": 698484561196,
                            "nextCUName": "Get this path if status is absent",
                            "isParallel": false
                        },
                        {
                            "index": 77,
                            "nextCUId": 546637416374,
                            "nextCUName": "Get this path if status is present",
                            "isParallel": false
                        }
                    ],
                    "referencedChangeUnit": 895068011616,
                    "disableSTEs": false,
                    "pathwaysCountFromCurrentCU": 1437248170,
                    "isParallel": false,
                    "txnDataSaveMode": "DEFAULT",
                    "name": "Search For Health System Client",
                    "displayName": "Search For Health System Client",
                    "agents": [
                        {
                            "agentType": "machine"
                        }
                    ],
                    "isReserved": false,
                    "masterId": 276312912181,
                    "version": "4.0",
                    "status": "PUBLISHED",
                    "cuType": "BASIC",
                    "isFaceted": false,
                    "id": 1908873283863,
                    "contextualId": [
                        "GS819134690206.CU1908873283863_895068011616"
                    ],
                    "designTimeRights": [],
                    "txnTimeRights": [],
                    "dsdMetadataId": "f5d2fa58-97eb-4bfd-b49b-d59a82405a2f"
                }
            },
            {
                "TYPE": "com.nsl.logical.model.AlternativeCU",
                "DATA": {
                    "index": 70,
                    "nextTriggerSet": [],
                    "referencedChangeUnit": 1902495148686,
                    "disableSTEs": false,
                    "pathwaysCountFromCurrentCU": 0,
                    "isParallel": false,
                    "txnDataSaveMode": "DEFAULT",
                    "name": "Proceed to End",
                    "displayName": "Proceed to End",
                    "agents": [
                        {
                            "agentType": "human"
                        }
                    ],
                    "isReserved": false,
                    "masterId": 1902495148686,
                    "version": "1.0",
                    "status": "PUBLISHED",
                    "cuType": "BASIC",
                    "isFaceted": false,
                    "id": 634819978901,
                    "contextualId": [
                        "GS819134690206.CU634819978901_1902495148686"
                    ],
                    "designTimeRights": [
                        {
                            "informationRight": true,
                            "decisionRight": true,
                            "executionRight": false,
                            "rightHolderId": 1505928273018,
                            "rightHolderType": "ROLE",
                            "rightHolderName": "NSL Admin",
                            "disableParentRoleAccess": false
                        },
                        {
                            "informationRight": true,
                            "decisionRight": false,
                            "executionRight": false,
                            "rightHolderId": 389660037451,
                            "rightHolderType": "ROLE",
                            "rightHolderName": "Mx CRM",
                            "disableParentRoleAccess": false
                        }
                    ],
                    "txnTimeRights": [
                        {
                            "informationRight": true,
                            "decisionRight": false,
                            "executionRight": true,
                            "rightHolderId": 1505928273018,
                            "rightHolderType": "ROLE",
                            "rightHolderName": "NSL Admin",
                            "disableParentRoleAccess": false
                        },
                        {
                            "informationRight": true,
                            "decisionRight": false,
                            "executionRight": true,
                            "rightHolderId": 389660037451,
                            "rightHolderType": "ROLE",
                            "rightHolderName": "Mx CRM",
                            "disableParentRoleAccess": false
                        }
                    ],
                    "dsdMetadataId": "cfad6d99-9ac6-427b-9fd9-7806d36a86ef"
                }
            },
            {
                "TYPE": "com.nsl.logical.model.GSI",
                "DATA": {
                    "constrainedToReportingTree": false,
                    "constrainedToTeam": false,
                    "allowPreviouCUView": false,
                    "isNavigableCu": false,
                    "enableBot": false,
                    "isMultiValueSensitive": false,
                    "isGSILayerBasedRecursion": false,
                    "preRecursiveConditionCheck": false,
                    "index": 74,
                    "nextTriggerSet": [
                        {
                            "index": 30,
                            "nextCUId": 561848679496,
                            "nextCUName": "How Would You Like To Proceed MxCRM",
                            "isParallel": false
                        }
                    ],
                    "referencedChangeUnit": 1442228104286,
                    "disableSTEs": false,
                    "pathwaysCountFromCurrentCU": 1433053866,
                    "isParallel": false,
                    "txnDataSaveMode": "DEFAULT",
                    "name": "Deactivate Health System Subscription",
                    "displayName": "Deactivate Health Organization Subscription",
                    "agents": [
                        {
                            "agentType": "human"
                        }
                    ],
                    "isReserved": false,
                    "masterId": 1436020470650,
                    "version": "22.0",
                    "status": "PUBLISHED",
                    "cuType": "GSI",
                    "isFaceted": false,
                    "id": 98921396766,
                    "contextualId": [
                        "GS819134690206.GS98921396766_1442228104286"
                    ],
                    "designTimeRights": [],
                    "txnTimeRights": [],
                    "dsdMetadataId": "7f6c2536-d06b-42c5-89fd-7e56f99a570f"
                }
            },
            {
                "TYPE": "com.nsl.logical.model.AlternativeCU",
                "DATA": {
                    "index": 76,
                    "nextTriggerSet": [
                        {
                            "index": 78,
                            "nextCUId": 133208273608,
                            "nextCUName": "Show the Note for Absent Status",
                            "isParallel": false
                        }
                    ],
                    "referencedChangeUnit": 625601279758,
                    "disableSTEs": false,
                    "pathwaysCountFromCurrentCU": 1,
                    "isParallel": false,
                    "txnDataSaveMode": "DEFAULT",
                    "name": "Get this path if status is absent",
                    "displayName": "Get this path if status is absent",
                    "agents": [
                        {
                            "agentType": "machine"
                        }
                    ],
                    "isReserved": false,
                    "masterId": 625601279758,
                    "version": "1.0",
                    "status": "PUBLISHED",
                    "cuType": "BASIC",
                    "isFaceted": false,
                    "id": 698484561196,
                    "contextualId": [
                        "GS819134690206.CU698484561196_625601279758"
                    ],
                    "designTimeRights": [],
                    "txnTimeRights": [],
                    "dsdMetadataId": "b644aa67-4c63-4b50-a711-9563e9aadc59"
                }
            },
            {
                "TYPE": "com.nsl.logical.model.AlternativeCU",
                "DATA": {
                    "index": 77,
                    "nextTriggerSet": [
                        {
                            "index": 4,
                            "nextCUId": 2122897430561,
                            "nextCUName": "Display Health System Client",
                            "isParallel": false
                        }
                    ],
                    "referencedChangeUnit": 2047670682533,
                    "disableSTEs": false,
                    "pathwaysCountFromCurrentCU": 1437248169,
                    "isParallel": false,
                    "txnDataSaveMode": "DEFAULT",
                    "name": "Get this path if status is present",
                    "displayName": "Get this path if status is present",
                    "agents": [
                        {
                            "agentType": "machine"
                        }
                    ],
                    "isReserved": false,
                    "masterId": 2047670682533,
                    "version": "1.0",
                    "status": "PUBLISHED",
                    "cuType": "BASIC",
                    "isFaceted": false,
                    "id": 546637416374,
                    "contextualId": [
                        "GS819134690206.CU546637416374_2047670682533"
                    ],
                    "designTimeRights": [],
                    "txnTimeRights": [],
                    "dsdMetadataId": "e6a752eb-9253-4ce8-87b6-5339df1cd6cd"
                }
            },
            {
                "TYPE": "com.nsl.logical.model.SequentialCU",
                "DATA": {
                    "index": 78,
                    "nextTriggerSet": [],
                    "referencedChangeUnit": 2130191204444,
                    "disableSTEs": false,
                    "pathwaysCountFromCurrentCU": 0,
                    "isParallel": false,
                    "txnDataSaveMode": "DEFAULT",
                    "name": "Show the Note for Absent Status",
                    "displayName": "Note",
                    "agents": [
                        {
                            "agentType": "human"
                        }
                    ],
                    "isReserved": false,
                    "masterId": 2130191204444,
                    "version": "1.0",
                    "status": "PUBLISHED",
                    "cuType": "BASIC",
                    "isFaceted": false,
                    "id": 133208273608,
                    "contextualId": [
                        "GS819134690206.CU133208273608_2130191204444"
                    ],
                    "designTimeRights": [
                        {
                            "informationRight": true,
                            "decisionRight": true,
                            "executionRight": false,
                            "rightHolderId": 1505928273018,
                            "rightHolderType": "ROLE",
                            "rightHolderName": "NSL Admin",
                            "disableParentRoleAccess": false
                        },
                        {
                            "informationRight": true,
                            "decisionRight": false,
                            "executionRight": false,
                            "rightHolderId": 389660037451,
                            "rightHolderType": "ROLE",
                            "rightHolderName": "Mx CRM",
                            "disableParentRoleAccess": false
                        }
                    ],
                    "txnTimeRights": [
                        {
                            "informationRight": true,
                            "decisionRight": false,
                            "executionRight": true,
                            "rightHolderId": 1505928273018,
                            "rightHolderType": "ROLE",
                            "rightHolderName": "NSL Admin",
                            "disableParentRoleAccess": false
                        },
                        {
                            "informationRight": true,
                            "decisionRight": false,
                            "executionRight": true,
                            "rightHolderId": 389660037451,
                            "rightHolderType": "ROLE",
                            "rightHolderName": "Mx CRM",
                            "disableParentRoleAccess": false
                        }
                    ],
                    "dsdMetadataId": "ad66ef5b-c3a5-4a3b-b0d4-b1f248bf6695"
                }
            },
            {
                "TYPE": "com.nsl.logical.model.GSI",
                "DATA": {
                    "constrainedToReportingTree": false,
                    "constrainedToTeam": false,
                    "allowPreviouCUView": false,
                    "isNavigableCu": false,
                    "enableBot": false,
                    "isMultiValueSensitive": false,
                    "isGSILayerBasedRecursion": false,
                    "preRecursiveConditionCheck": false,
                    "index": 79,
                    "nextTriggerSet": [
                        {
                            "index": 30,
                            "nextCUId": 561848679496,
                            "nextCUName": "How Would You Like To Proceed MxCRM",
                            "isParallel": false
                        }
                    ],
                    "referencedChangeUnit": 345579317852,
                    "disableSTEs": false,
                    "pathwaysCountFromCurrentCU": 1433053866,
                    "isParallel": false,
                    "txnDataSaveMode": "DEFAULT",
                    "name": "Preview Health System Client Details",
                    "displayName": "Preview Health System Client Details",
                    "agents": [
                        {
                            "agentType": "human"
                        }
                    ],
                    "isReserved": false,
                    "masterId": 1572838958458,
                    "version": "37.0",
                    "status": "ARCHIVED",
                    "cuType": "GSI",
                    "isFaceted": false,
                    "id": 478256486293,
                    "contextualId": [
                        "GS819134690206.GS478256486293_345579317852"
                    ],
                    "designTimeRights": [],
                    "txnTimeRights": [],
                    "dsdMetadataId": "786d371a-74f8-4bd0-842a-93ac30429346"
                }
            },
            {
                "TYPE": "com.nsl.logical.model.SequentialCU",
                "DATA": {
                    "index": 80,
                    "nextTriggerSet": [
                        {
                            "index": 30,
                            "nextCUId": 561848679496,
                            "nextCUName": "How Would You Like To Proceed MxCRM",
                            "isParallel": false
                        }
                    ],
                    "referencedChangeUnit": 1539632995495,
                    "disableSTEs": false,
                    "pathwaysCountFromCurrentCU": 1433053866,
                    "isParallel": false,
                    "txnDataSaveMode": "DEFAULT",
                    "name": "Show case for reject",
                    "displayName": "Show case for reject",
                    "agents": [
                        {
                            "agentType": "machine"
                        }
                    ],
                    "isReserved": false,
                    "masterId": 1539632995495,
                    "version": "1.0",
                    "status": "PUBLISHED",
                    "cuType": "BASIC",
                    "isFaceted": false,
                    "id": 124935855297,
                    "contextualId": [
                        "GS819134690206.CU124935855297_1539632995495"
                    ],
                    "designTimeRights": [],
                    "txnTimeRights": [],
                    "dsdMetadataId": "247e7764-6978-4169-a328-954a56b9db73"
                }
            },
            {
                "TYPE": "com.nsl.logical.model.GSI",
                "DATA": {
                    "constrainedToReportingTree": false,
                    "constrainedToTeam": false,
                    "allowPreviouCUView": false,
                    "isNavigableCu": false,
                    "enableBot": false,
                    "isMultiValueSensitive": false,
                    "isGSILayerBasedRecursion": false,
                    "preRecursiveConditionCheck": false,
                    "index": 68,
                    "nextTriggerSet": [
                        {
                            "index": 80,
                            "nextCUId": 124935855297,
                            "nextCUName": "Show case for reject",
                            "isParallel": false
                        }
                    ],
                    "referencedChangeUnit": 536024609655,
                    "disableSTEs": false,
                    "pathwaysCountFromCurrentCU": 1433053866,
                    "isParallel": false,
                    "txnDataSaveMode": "DEFAULT",
                    "name": "Reject Health System Subscription",
                    "displayName": "Reject Health System Subscription",
                    "agents": [
                        {
                            "agentType": "human"
                        }
                    ],
                    "isReserved": false,
                    "masterId": 728483609448,
                    "version": "27.0",
                    "status": "PUBLISHED",
                    "cuType": "GSI",
                    "isFaceted": false,
                    "id": 145493608420,
                    "contextualId": [
                        "GS819134690206.GS145493608420_536024609655"
                    ],
                    "designTimeRights": [],
                    "txnTimeRights": [],
                    "dsdMetadataId": "972fe3f6-e59a-4809-99b6-a06fdf376a4c"
                }
            },
            {
                "TYPE": "com.nsl.logical.model.SequentialCU",
                "DATA": {
                    "index": 81,
                    "nextTriggerSet": [
                        {
                            "index": 30,
                            "nextCUId": 561848679496,
                            "nextCUName": "How Would You Like To Proceed MxCRM",
                            "isParallel": false
                        }
                    ],
                    "referencedChangeUnit": 172322174134,
                    "disableSTEs": false,
                    "pathwaysCountFromCurrentCU": 1433053866,
                    "isParallel": false,
                    "txnDataSaveMode": "DEFAULT",
                    "name": "Show case for contract",
                    "displayName": "Show case for contract",
                    "agents": [
                        {
                            "agentType": "machine"
                        }
                    ],
                    "isReserved": false,
                    "masterId": 172322174134,
                    "version": "1.0",
                    "status": "PUBLISHED",
                    "cuType": "BASIC",
                    "isFaceted": false,
                    "id": 198877107160,
                    "contextualId": [
                        "GS819134690206.CU198877107160_172322174134"
                    ],
                    "designTimeRights": [],
                    "txnTimeRights": [],
                    "dsdMetadataId": "247e7764-6978-4169-a328-954a56b9db73"
                }
            },
            {
                "TYPE": "com.nsl.logical.model.GSI",
                "DATA": {
                    "constrainedToReportingTree": false,
                    "constrainedToTeam": false,
                    "allowPreviouCUView": false,
                    "isNavigableCu": false,
                    "enableBot": false,
                    "isMultiValueSensitive": false,
                    "isGSILayerBasedRecursion": false,
                    "preRecursiveConditionCheck": false,
                    "index": 73,
                    "nextTriggerSet": [
                        {
                            "index": 81,
                            "nextCUId": 198877107160,
                            "nextCUName": "Show case for contract",
                            "isParallel": false
                        }
                    ],
                    "referencedChangeUnit": 1068616041477,
                    "disableSTEs": false,
                    "pathwaysCountFromCurrentCU": 1433053866,
                    "isParallel": false,
                    "txnDataSaveMode": "DEFAULT",
                    "name": "Smart Contract For Health System Client",
                    "displayName": "Smart Contract For Health System Client",
                    "agents": [
                        {
                            "agentType": "human"
                        }
                    ],
                    "isReserved": false,
                    "masterId": 1109402928460,
                    "version": "64.0",
                    "status": "PUBLISHED",
                    "cuType": "GSI",
                    "isFaceted": false,
                    "id": 1301482683308,
                    "contextualId": [
                        "GS819134690206.GS1301482683308_1068616041477"
                    ],
                    "designTimeRights": [],
                    "txnTimeRights": [],
                    "dsdMetadataId": "970a38bb-af4f-4e4e-be26-bd34844cb794"
                }
            }
        ],
        "constrainedToReportingTree": false,
        "constrainedToTeam": false,
        "allowPreviouCUView": false,
        "isNavigableCu": false,
        "enableBot": false,
        "isMultiValueSensitive": false,
        "isGSILayerBasedRecursion": false,
        "preRecursiveConditionCheck": false,
        "disableSTEs": false,
        "pathwaysCountFromCurrentCU": 0,
        "isParallel": false,
        "txnDataSaveMode": "DEFAULT",
        "name": "Authenticate Health System Client",
        "displayName": "Authenticate Health Organization Client",
        "agents": [
            {
                "agentType": "human"
            }
        ],
        "isReserved": false,
        "masterId": 980973205354,
        "version": "125.0",
        "status": "PUBLISHED",
        "cuType": "GSI",
        "isFaceted": false,
        "id": 819134690206,
        "designTimeRights": [
            {
                "informationRight": true,
                "decisionRight": true,
                "executionRight": false,
                "rightHolderId": 1505928273018,
                "rightHolderType": "ROLE",
                "rightHolderName": "NSL Admin",
                "disableParentRoleAccess": false
            },
            {
                "informationRight": true,
                "decisionRight": false,
                "executionRight": false,
                "rightHolderId": 389660037451,
                "rightHolderType": "ROLE",
                "rightHolderName": "Mx CRM",
                "disableParentRoleAccess": false
            }
        ],
        "txnTimeRights": [
            {
                "informationRight": true,
                "decisionRight": false,
                "executionRight": true,
                "rightHolderId": 1505928273018,
                "rightHolderType": "ROLE",
                "rightHolderName": "NSL Admin",
                "disableParentRoleAccess": false
            },
            {
                "informationRight": true,
                "decisionRight": false,
                "executionRight": true,
                "rightHolderId": 389660037451,
                "rightHolderType": "ROLE",
                "rightHolderName": "Mx CRM",
                "disableParentRoleAccess": false
            }
        ],
        "dsdMetadataId": "55abb9b9-18c2-4188-be95-aefc499975ae",
        "dsdId": "819134690206",
        "designUrl": "/dsd-orch/design/book/global/time/design/1570744831319/1700819054"
    }
}