export const json = {
    "status": 200,
    "message": "GSI fetch is successful",
    "result": {
        "solutionLogic": [
            {
                "TYPE": "com.nsl.logical.model.SequentialCU",
                "DATA": {
                    "index": 11,
                    "nextTriggerSet": [
                        {
                            "index": 1,
                            "nextCUId": 1518486254559,
                            "nextCUName": "Default Accepted",
                            "isParallel": false
                        }
                    ],
                    "referencedChangeUnit": 1199155209954,
                    "disableSTEs": false,
                    "pathwaysCountFromCurrentCU": 48,
                    "isParallel": false,
                    "txnDataSaveMode": "DEFAULT",
                    "name": "Keeping Dummy CU",
                    "displayName": "Keeping Dummy CU",
                    "agents": [
                        {
                            "agentType": "machine"
                        }
                    ],
                    "isReserved": false,
                    "masterId": 972123869844,
                    "version": "2.0",
                    "status": "PUBLISHED",
                    "cuType": "BASIC",
                    "isFaceted": false,
                    "id": 1092766400018,
                    "contextualId": [
                        "GS963628229450.CU1092766400018_1199155209954"
                    ],
                    "designTimeRights": [],
                    "txnTimeRights": [],
                    "dsdMetadataId": "35616553-8d96-4b8c-b085-7486cde64fb6"
                }
            },
            {
                "TYPE": "com.nsl.logical.model.SequentialCU",
                "DATA": {
                    "index": 1,
                    "nextTriggerSet": [
                        {
                            "index": 2,
                            "nextCUId": 1141946760907,
                            "nextCUName": "Search Accepted Cases From Case Request",
                            "isParallel": false
                        }
                    ],
                    "referencedChangeUnit": 41006331166,
                    "disableSTEs": false,
                    "pathwaysCountFromCurrentCU": 48,
                    "isParallel": false,
                    "txnDataSaveMode": "DEFAULT",
                    "name": "Default Accepted",
                    "displayName": "Default Accepted",
                    "agents": [
                        {
                            "agentType": "machine"
                        }
                    ],
                    "isReserved": false,
                    "masterId": 41006331166,
                    "version": "1.0",
                    "status": "PUBLISHED",
                    "cuType": "BASIC",
                    "isFaceted": false,
                    "id": 1518486254559,
                    "contextualId": [
                        "GS963628229450.CU1518486254559_41006331166"
                    ],
                    "designTimeRights": [],
                    "txnTimeRights": [],
                    "dsdMetadataId": "5aab100a-deb1-4307-a5bc-02455f7980d4"
                }
            },
            {
                "TYPE": "com.nsl.logical.model.SequentialCU",
                "DATA": {
                    "index": 2,
                    "nextTriggerSet": [
                        {
                            "index": 8,
                            "nextCUId": 694388800047,
                            "nextCUName": "Getting First Alternative for Case Details",
                            "isParallel": false
                        },
                        {
                            "index": 9,
                            "nextCUId": 958154023898,
                            "nextCUName": "Getting Second Alternative for Case Details",
                            "isParallel": false
                        }
                    ],
                    "referencedChangeUnit": 1384098576826,
                    "disableSTEs": false,
                    "pathwaysCountFromCurrentCU": 48,
                    "isParallel": false,
                    "txnDataSaveMode": "DEFAULT",
                    "name": "Search Accepted Cases From Case Request",
                    "displayName": "Search Accepted Cases From Case Request",
                    "agents": [
                        {
                            "agentType": "machine"
                        }
                    ],
                    "isReserved": false,
                    "masterId": 1384098576826,
                    "version": "1.0",
                    "status": "PUBLISHED",
                    "cuType": "BASIC",
                    "isFaceted": false,
                    "id": 1141946760907,
                    "contextualId": [
                        "GS963628229450.CU1141946760907_1384098576826"
                    ],
                    "designTimeRights": [],
                    "txnTimeRights": [],
                    "dsdMetadataId": "16dc8608-9ddf-4b21-8c8d-7a4a93c9372f"
                }
            },
            {
                "TYPE": "com.nsl.logical.model.SequentialCU",
                "DATA": {
                    "index": 3,
                    "nextTriggerSet": [
                        {
                            "index": 13,
                            "nextCUId": 309504205291,
                            "nextCUName": "Preview Case Request",
                            "isParallel": false
                        }
                    ],
                    "referencedChangeUnit": 2145712264750,
                    "disableSTEs": false,
                    "pathwaysCountFromCurrentCU": 47,
                    "isParallel": false,
                    "txnDataSaveMode": "DEFAULT",
                    "name": "View Case Details To Assign",
                    "displayName": "View Case Details",
                    "agents": [
                        {
                            "agentType": "human"
                        }
                    ],
                    "isReserved": false,
                    "masterId": 55546978173,
                    "version": "17.0",
                    "status": "PUBLISHED",
                    "cuType": "BASIC",
                    "isFaceted": false,
                    "id": 2045059248669,
                    "contextualId": [
                        "GS963628229450.CU2045059248669_2145712264750"
                    ],
                    "designTimeRights": [
                        {
                            "informationRight": true,
                            "decisionRight": true,
                            "executionRight": false,
                            "rightHolderId": 389660037451,
                            "rightHolderType": "ROLE",
                            "rightHolderName": "Mx CRM",
                            "disableParentRoleAccess": false
                        },
                        {
                            "informationRight": true,
                            "decisionRight": true,
                            "executionRight": false,
                            "rightHolderId": 1505928273018,
                            "rightHolderType": "ROLE",
                            "rightHolderName": "NSL Admin",
                            "disableParentRoleAccess": false
                        }
                    ],
                    "txnTimeRights": [
                        {
                            "informationRight": true,
                            "decisionRight": false,
                            "executionRight": true,
                            "rightHolderId": 389660037451,
                            "rightHolderType": "ROLE",
                            "rightHolderName": "Mx CRM",
                            "disableParentRoleAccess": false
                        },
                        {
                            "informationRight": true,
                            "decisionRight": false,
                            "executionRight": true,
                            "rightHolderId": 1505928273018,
                            "rightHolderType": "ROLE",
                            "rightHolderName": "NSL Admin",
                            "disableParentRoleAccess": false
                        }
                    ],
                    "dsdMetadataId": "6f75218a-cf7a-4ddf-b5e0-79af912cd604"
                }
            },
            {
                "TYPE": "com.nsl.logical.model.AlternativeCU",
                "DATA": {
                    "index": 8,
                    "nextTriggerSet": [
                        {
                            "index": 3,
                            "nextCUId": 2045059248669,
                            "nextCUName": "View Case Details To Assign",
                            "isParallel": false
                        }
                    ],
                    "referencedChangeUnit": 1465344577396,
                    "disableSTEs": false,
                    "pathwaysCountFromCurrentCU": 47,
                    "isParallel": false,
                    "txnDataSaveMode": "DEFAULT",
                    "name": "Getting First Alternative for Case Details",
                    "displayName": "Getting First Alternative for Case Details",
                    "agents": [
                        {
                            "agentType": "machine"
                        }
                    ],
                    "isReserved": false,
                    "masterId": 1465344577396,
                    "version": "1.0",
                    "status": "PUBLISHED",
                    "cuType": "BASIC",
                    "isFaceted": false,
                    "id": 694388800047,
                    "contextualId": [
                        "GS963628229450.CU694388800047_1465344577396"
                    ],
                    "designTimeRights": [],
                    "txnTimeRights": [],
                    "dsdMetadataId": "30bd782c-cc1a-41d8-80e6-44bb022e4a66"
                }
            },
            {
                "TYPE": "com.nsl.logical.model.AlternativeCU",
                "DATA": {
                    "index": 9,
                    "nextTriggerSet": [
                        {
                            "index": 10,
                            "nextCUId": 1020168464427,
                            "nextCUName": "Displaying Note for No Accepted Cases",
                            "isParallel": false
                        }
                    ],
                    "referencedChangeUnit": 1945516143552,
                    "disableSTEs": false,
                    "pathwaysCountFromCurrentCU": 1,
                    "isParallel": false,
                    "txnDataSaveMode": "DEFAULT",
                    "name": "Getting Second Alternative for Case Details",
                    "displayName": "Getting Second Alternative for Case Details",
                    "agents": [
                        {
                            "agentType": "machine"
                        }
                    ],
                    "isReserved": false,
                    "masterId": 1945516143552,
                    "version": "1.0",
                    "status": "PUBLISHED",
                    "cuType": "BASIC",
                    "isFaceted": false,
                    "id": 958154023898,
                    "contextualId": [
                        "GS963628229450.CU958154023898_1945516143552"
                    ],
                    "designTimeRights": [],
                    "txnTimeRights": [],
                    "dsdMetadataId": "5e85d801-1e62-4c86-b5e5-9024bf7ca4aa"
                }
            },
            {
                "TYPE": "com.nsl.logical.model.SequentialCU",
                "DATA": {
                    "index": 10,
                    "nextTriggerSet": [],
                    "referencedChangeUnit": 368504673783,
                    "disableSTEs": false,
                    "pathwaysCountFromCurrentCU": 0,
                    "isParallel": false,
                    "txnDataSaveMode": "DEFAULT",
                    "name": "Displaying Note for No Accepted Cases",
                    "displayName": "Displaying Note for No Accepted Cases",
                    "agents": [
                        {
                            "agentType": "human"
                        }
                    ],
                    "isReserved": false,
                    "masterId": 368504673783,
                    "version": "1.0",
                    "status": "PUBLISHED",
                    "cuType": "BASIC",
                    "isFaceted": false,
                    "id": 1020168464427,
                    "contextualId": [
                        "GS963628229450.CU1020168464427_368504673783"
                    ],
                    "designTimeRights": [
                        {
                            "informationRight": true,
                            "decisionRight": false,
                            "executionRight": false,
                            "rightHolderId": 389660037451,
                            "rightHolderType": "ROLE",
                            "rightHolderName": "Mx CRM",
                            "disableParentRoleAccess": false
                        },
                        {
                            "informationRight": true,
                            "decisionRight": false,
                            "executionRight": false,
                            "rightHolderId": 1505928273018,
                            "rightHolderType": "ROLE",
                            "rightHolderName": "NSL Admin",
                            "disableParentRoleAccess": false
                        }
                    ],
                    "txnTimeRights": [
                        {
                            "informationRight": true,
                            "decisionRight": false,
                            "executionRight": true,
                            "rightHolderId": 389660037451,
                            "rightHolderType": "ROLE",
                            "rightHolderName": "Mx CRM",
                            "disableParentRoleAccess": false
                        },
                        {
                            "informationRight": true,
                            "decisionRight": false,
                            "executionRight": true,
                            "rightHolderId": 1505928273018,
                            "rightHolderType": "ROLE",
                            "rightHolderName": "NSL Admin",
                            "disableParentRoleAccess": false
                        }
                    ],
                    "dsdMetadataId": "c9e6dcaf-3373-4289-82c1-b3fd5ca17b9a"
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
                    "index": 12,
                    "nextTriggerSet": [
                        {
                            "index": 1,
                            "nextCUId": 1518486254559,
                            "nextCUName": "Default Accepted",
                            "isParallel": false
                        }
                    ],
                    "referencedChangeUnit": 851735812892,
                    "disableSTEs": false,
                    "pathwaysCountFromCurrentCU": 47,
                    "isParallel": false,
                    "txnDataSaveMode": "DEFAULT",
                    "name": "Latency Embed GSI for Metrics",
                    "displayName": "Latency Embed GSI for Metrics",
                    "agents": [
                        {
                            "agentType": "human"
                        }
                    ],
                    "isReserved": false,
                    "masterId": 851735812892,
                    "version": "1.0",
                    "status": "PUBLISHED",
                    "cuType": "GSI",
                    "isFaceted": false,
                    "id": 1605120882436,
                    "contextualId": [
                        "GS963628229450.GS1605120882436_851735812892"
                    ],
                    "designTimeRights": [],
                    "txnTimeRights": [],
                    "dsdMetadataId": "5dd05e59-bb7f-4a6d-a075-9fa41ba1da00"
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
                    "index": 13,
                    "nextTriggerSet": [
                        {
                            "index": 12,
                            "nextCUId": 1605120882436,
                            "nextCUName": "Latency Embed GSI for Metrics",
                            "isParallel": false
                        }
                    ],
                    "referencedChangeUnit": 1826273336211,
                    "disableSTEs": false,
                    "pathwaysCountFromCurrentCU": 47,
                    "isParallel": false,
                    "txnDataSaveMode": "DEFAULT",
                    "name": "Preview Case Request",
                    "displayName": "Preview Case Request",
                    "agents": [
                        {
                            "agentType": "human"
                        }
                    ],
                    "isReserved": false,
                    "masterId": 12182365296,
                    "version": "106.0",
                    "status": "ARCHIVED",
                    "cuType": "GSI",
                    "isFaceted": false,
                    "id": 309504205291,
                    "contextualId": [
                        "GS963628229450.GS309504205291_1826273336211"
                    ],
                    "designTimeRights": [],
                    "txnTimeRights": [],
                    "dsdMetadataId": "e6b87c8e-c19d-4f44-81f9-01cbeddbbb54"
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
        "name": "assign case reviewer",
        "displayName": "Assign Cases",
        "agents": [
            {
                "agentType": "human"
            }
        ],
        "isReserved": false,
        "masterId": 384978931735,
        "version": "58.0",
        "status": "PUBLISHED",
        "cuType": "GSI",
        "isFaceted": false,
        "id": 963628229450,
        "designTimeRights": [
            {
                "informationRight": true,
                "decisionRight": true,
                "executionRight": false,
                "rightHolderId": 389660037451,
                "rightHolderType": "ROLE",
                "rightHolderName": "Mx CRM",
                "disableParentRoleAccess": false
            },
            {
                "informationRight": true,
                "decisionRight": true,
                "executionRight": false,
                "rightHolderId": 1505928273018,
                "rightHolderType": "ROLE",
                "rightHolderName": "NSL Admin",
                "disableParentRoleAccess": false
            }
        ],
        "txnTimeRights": [
            {
                "informationRight": true,
                "decisionRight": false,
                "executionRight": true,
                "rightHolderId": 389660037451,
                "rightHolderType": "ROLE",
                "rightHolderName": "Mx CRM",
                "disableParentRoleAccess": false
            },
            {
                "informationRight": true,
                "decisionRight": false,
                "executionRight": true,
                "rightHolderId": 1505928273018,
                "rightHolderType": "ROLE",
                "rightHolderName": "NSL Admin",
                "disableParentRoleAccess": false
            }
        ],
        "dsdMetadataId": "ad3c2bef-13c2-4f99-b536-b7670a98a1da",
        "dsdId": "963628229450",
        "designUrl": "/dsd-orch/design/book/global/time/design/224589815848/1701671596"
    }
}