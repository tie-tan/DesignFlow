export const json = {
    "status": 200,
    "message": "Edited Authenticate Health System Client successfully",
    "result": {
        "solutionLogic": [
            {
                "index": 9,
                "dcd": [],
                "nextTriggerSet": [
                    {
                        "index": 2,
                        "nextCUId": 2013054763961,
                        "dsdNextCUId": "2013054763961",
                        "nextCUName": "Select Status",
                        "isParallel": false
                    }
                ],
                "entityDesignRights": {},
                "referencedChangeUnit": 1984122297734,
                "attributeDesignRights": {},
                "dsdReferencedChangeUnit": "1984122297734",
                "isParallel": false,
                "exceptionCUList": [],
                "slotItemProperties": {},
                "entityTransactionRights": {},
                "tCUConditionalPotentiality": [],
                "pathwaysCountFromCurrentCU": 2141599194,
                "nestedOutgoingDCDs": {},
                "eventCUList": [],
                "tCUConditionalPotentialityNames": [],
                "cuType": "BASIC",
                "attributeTransactionRights": {},
                "mindCUList": [],
                "tCUsentenceName": "{\"physical\":[{\"token\":\"machine\",\"tag\":\"machine agent\",\"tf_id\":\"\u003cagents TF ID\u003e\",\"dsd_id\":\"\u003cagents DSD ID\u003e\"},{\"token\":\"NSL_FetchUserDataReservedCu\",\"tag\":\"cu\",\"tf_id\":\"\u003ccu TF ID\u003e\",\"dsd_id\":\"1984122297734\"},{\"token\":\"using\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"NSL_FetchUserDataInput\",\"tag\":\"entity\",\"entity_counter\":0,\"tf_id\":\"\u003centity1 TF ID\u003e\",\"dsd_id\":\"899282057116\"},{\"token\":\"such as\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"User Id\",\"tag\":\"attributes\",\"entity_counter\":0,\"attribute_counter\":0,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\"and\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"User Name\",\"tag\":\"attributes\",\"entity_counter\":0,\"attribute_counter\":1,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\".\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"}],\"information\":[],\"nested_response\":{},\"triggerCES\":[{\"token\":\"NSL_FetchUserDataOutput\",\"tag\":\"entity\",\"entity_counter\":0,\"tf_id\":\"\u003centity1 TF ID\u003e\",\"dsd_id\":\"82297978814\"},{\"token\":\"such as\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"User Id\",\"tag\":\"attributes\",\"entity_counter\":0,\"attribute_counter\":0,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\",\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"User Name\",\"tag\":\"attributes\",\"entity_counter\":0,\"attribute_counter\":1,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\",\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Email\",\"tag\":\"attributes\",\"entity_counter\":0,\"attribute_counter\":2,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\",\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Manager Name\",\"tag\":\"attributes\",\"entity_counter\":0,\"attribute_counter\":3,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\",\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Manager Id\",\"tag\":\"attributes\",\"entity_counter\":0,\"attribute_counter\":4,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\",\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"OrgUnit Id\",\"tag\":\"attributes\",\"entity_counter\":0,\"attribute_counter\":5,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\",\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"OrgUnit Name\",\"tag\":\"attributes\",\"entity_counter\":0,\"attribute_counter\":6,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\",\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Manager Email\",\"tag\":\"attributes\",\"entity_counter\":0,\"attribute_counter\":7,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\",\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Mobile Number\",\"tag\":\"attributes\",\"entity_counter\":0,\"attribute_counter\":8,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\"and\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Roles\",\"tag\":\"attributes\",\"entity_counter\":0,\"attribute_counter\":9,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\".\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"}]}",
                "triggerCULayers": [
                    {
                        "participatingItems": [
                            {
                                "id": 1672345760360,
                                "isMultiValue": false,
                                "item": {
                                    "TYPE": "GeneralEntity",
                                    "DATA": {
                                        "dsdId": "899282057116",
                                        "id": 899282057116,
                                        "nslAttributes": [
                                            {
                                                "dsdId": "435877679163",
                                                "id": 435877679163,
                                                "attributeType": {
                                                    "type": "string"
                                                },
                                                "defaultValue": "0",
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "nslAttributeMetaData": {
                                                    "changeDriverType": "OPTIONAL"
                                                },
                                                "contextualId": [
                                                    "physical.slot:1.NSL_FetchUserDataInput.User Id",
                                                    "PL.SL001.NSL_FetchUserDataInput.User Id",
                                                    "PL.SL001.EN899282057116.AT435877679163",
                                                    "GS936334308510.CU212216498304_1984122297734.PL.SL001.EN899282057116.AT435877679163"
                                                ],
                                                "ownerId": 503933123919,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "User Id",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": false,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "792678788370",
                                                "id": 792678788370,
                                                "attributeType": {
                                                    "type": "string"
                                                },
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "nslAttributeMetaData": {
                                                    "changeDriverType": "OPTIONAL"
                                                },
                                                "contextualId": [
                                                    "physical.slot:1.NSL_FetchUserDataInput.User Name",
                                                    "PL.SL001.NSL_FetchUserDataInput.User Name",
                                                    "PL.SL001.EN899282057116.AT792678788370",
                                                    "GS936334308510.CU212216498304_1984122297734.PL.SL001.EN899282057116.AT792678788370"
                                                ],
                                                "ownerId": 503933123919,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "User Name",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": false,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            }
                                        ],
                                        "isReserved": true,
                                        "ownerId": 1328852396840,
                                        "canDownload": false,
                                        "exportDesignSystem": true,
                                        "naqResultsForBET": {
                                            "hasChildrenErrors": false
                                        },
                                        "name": "NSL_FetchUserDataInput",
                                        "source": "CANVAS",
                                        "masterId": 7435374152,
                                        "version": "20.0",
                                        "status": "ARCHIVED",
                                        "isNameUpdated": false,
                                        "attachments": [],
                                        "minAge": 0,
                                        "maxAge": 0,
                                        "editable": false,
                                        "approvalStatus": "UnAssigned"
                                    }
                                },
                                "isInPotentiality": false,
                                "triggerConditionalPotentiality": false,
                                "isPlaceholder": false
                            }
                        ],
                        "naqResultsForBET": {
                            "hasChildrenErrors": false
                        },
                        "overrideSTEbehavior": false,
                        "type": "physical"
                    },
                    {
                        "participatingItems": [
                            {
                                "id": 1451599748925,
                                "isMultiValue": false,
                                "item": {
                                    "TYPE": "GeneralEntity",
                                    "DATA": {
                                        "dsdId": "82297978814",
                                        "id": 82297978814,
                                        "nslAttributes": [
                                            {
                                                "dsdId": "316682192265",
                                                "id": 316682192265,
                                                "attributeType": {
                                                    "type": "string"
                                                },
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "contextualId": [
                                                    "triggerCES.slot:1.NSL_FetchUserDataOutput.User Id",
                                                    "triggerCES.SL001.NSL_FetchUserDataOutput.User Id",
                                                    "triggerCES.SL001.EN82297978814.AT316682192265",
                                                    "GS936334308510.CU212216498304_1984122297734.triggerCES.SL001.EN82297978814.AT316682192265"
                                                ],
                                                "ownerId": 503933123919,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "User Id",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": false,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "593520028576",
                                                "id": 593520028576,
                                                "attributeType": {
                                                    "type": "string"
                                                },
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "contextualId": [
                                                    "triggerCES.slot:1.NSL_FetchUserDataOutput.User Name",
                                                    "triggerCES.SL001.NSL_FetchUserDataOutput.User Name",
                                                    "triggerCES.SL001.EN82297978814.AT593520028576",
                                                    "GS936334308510.CU212216498304_1984122297734.triggerCES.SL001.EN82297978814.AT593520028576"
                                                ],
                                                "ownerId": 503933123919,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "User Name",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": false,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "2097994271491",
                                                "id": 2097994271491,
                                                "attributeType": {
                                                    "type": "string"
                                                },
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "contextualId": [
                                                    "triggerCES.slot:1.NSL_FetchUserDataOutput.Email",
                                                    "triggerCES.SL001.NSL_FetchUserDataOutput.Email",
                                                    "triggerCES.SL001.EN82297978814.AT2097994271491",
                                                    "GS936334308510.CU212216498304_1984122297734.triggerCES.SL001.EN82297978814.AT2097994271491"
                                                ],
                                                "ownerId": 503933123919,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Email",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": false,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "1152742638250",
                                                "id": 1152742638250,
                                                "attributeType": {
                                                    "type": "string"
                                                },
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "contextualId": [
                                                    "triggerCES.slot:1.NSL_FetchUserDataOutput.Manager Name",
                                                    "triggerCES.SL001.NSL_FetchUserDataOutput.Manager Name",
                                                    "triggerCES.SL001.EN82297978814.AT1152742638250",
                                                    "GS936334308510.CU212216498304_1984122297734.triggerCES.SL001.EN82297978814.AT1152742638250"
                                                ],
                                                "ownerId": 503933123919,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Manager Name",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": false,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "2022104462827",
                                                "id": 2022104462827,
                                                "attributeType": {
                                                    "type": "string"
                                                },
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "contextualId": [
                                                    "triggerCES.slot:1.NSL_FetchUserDataOutput.Manager Id",
                                                    "triggerCES.SL001.NSL_FetchUserDataOutput.Manager Id",
                                                    "triggerCES.SL001.EN82297978814.AT2022104462827",
                                                    "GS936334308510.CU212216498304_1984122297734.triggerCES.SL001.EN82297978814.AT2022104462827"
                                                ],
                                                "ownerId": 503933123919,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Manager Id",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": false,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "1170470533593",
                                                "id": 1170470533593,
                                                "attributeType": {
                                                    "type": "string"
                                                },
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "contextualId": [
                                                    "triggerCES.slot:1.NSL_FetchUserDataOutput.OrgUnit Id",
                                                    "triggerCES.SL001.NSL_FetchUserDataOutput.OrgUnit Id",
                                                    "triggerCES.SL001.EN82297978814.AT1170470533593",
                                                    "GS936334308510.CU212216498304_1984122297734.triggerCES.SL001.EN82297978814.AT1170470533593"
                                                ],
                                                "ownerId": 503933123919,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "OrgUnit Id",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": false,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "224212975856",
                                                "id": 224212975856,
                                                "attributeType": {
                                                    "type": "string"
                                                },
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "contextualId": [
                                                    "triggerCES.slot:1.NSL_FetchUserDataOutput.OrgUnit Name",
                                                    "triggerCES.SL001.NSL_FetchUserDataOutput.OrgUnit Name",
                                                    "triggerCES.SL001.EN82297978814.AT224212975856",
                                                    "GS936334308510.CU212216498304_1984122297734.triggerCES.SL001.EN82297978814.AT224212975856"
                                                ],
                                                "ownerId": 503933123919,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "OrgUnit Name",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": false,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "567287728078",
                                                "id": 567287728078,
                                                "attributeType": {
                                                    "type": "string"
                                                },
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "contextualId": [
                                                    "triggerCES.slot:1.NSL_FetchUserDataOutput.Manager Email",
                                                    "triggerCES.SL001.NSL_FetchUserDataOutput.Manager Email",
                                                    "triggerCES.SL001.EN82297978814.AT567287728078",
                                                    "GS936334308510.CU212216498304_1984122297734.triggerCES.SL001.EN82297978814.AT567287728078"
                                                ],
                                                "ownerId": 503933123919,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Manager Email",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": false,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "1083882814553",
                                                "id": 1083882814553,
                                                "attributeType": {
                                                    "type": "number"
                                                },
                                                "defaultValue": "1",
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "contextualId": [
                                                    "triggerCES.slot:1.NSL_FetchUserDataOutput.Mobile Number",
                                                    "triggerCES.SL001.NSL_FetchUserDataOutput.Mobile Number",
                                                    "triggerCES.SL001.EN82297978814.AT1083882814553",
                                                    "GS936334308510.CU212216498304_1984122297734.triggerCES.SL001.EN82297978814.AT1083882814553"
                                                ],
                                                "ownerId": 503933123919,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Mobile Number",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": false,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "660614382777",
                                                "id": 660614382777,
                                                "attributeType": {
                                                    "type": "string"
                                                },
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "contextualId": [
                                                    "triggerCES.slot:1.NSL_FetchUserDataOutput.Roles",
                                                    "triggerCES.SL001.NSL_FetchUserDataOutput.Roles",
                                                    "triggerCES.SL001.EN82297978814.AT660614382777",
                                                    "GS936334308510.CU212216498304_1984122297734.triggerCES.SL001.EN82297978814.AT660614382777"
                                                ],
                                                "ownerId": 503933123919,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Roles",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": false,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            }
                                        ],
                                        "isReserved": true,
                                        "ownerId": 1328852396840,
                                        "canDownload": false,
                                        "exportDesignSystem": true,
                                        "naqResultsForBET": {
                                            "hasChildrenErrors": false
                                        },
                                        "name": "NSL_FetchUserDataOutput",
                                        "source": "CANVAS",
                                        "masterId": 8835218414,
                                        "version": "20.0",
                                        "status": "ARCHIVED",
                                        "isNameUpdated": false,
                                        "attachments": [],
                                        "minAge": 0,
                                        "maxAge": 0,
                                        "editable": false,
                                        "approvalStatus": "UnAssigned"
                                    }
                                },
                                "isInPotentiality": false,
                                "triggerConditionalPotentiality": false,
                                "isPlaceholder": false
                            }
                        ],
                        "naqResultsForBET": {
                            "hasChildrenErrors": false
                        },
                        "overrideSTEbehavior": false,
                        "type": "triggerCES"
                    }
                ],
                "disableSTEs": false,
                "dsdId": "212216498304",
                "id": 212216498304,
                "layers": [
                    {
                        "id": 986405145263,
                        "ownerId": 503933123919,
                        "participatingItems": [
                            {
                                "id": 1672345760360,
                                "ownerId": 503933123919,
                                "isMultiValue": false,
                                "item": {
                                    "TYPE": "GeneralEntity",
                                    "DATA": {
                                        "dsdId": "899282057116",
                                        "id": 899282057116,
                                        "nslAttributes": [
                                            {
                                                "dsdId": "435877679163",
                                                "id": 435877679163,
                                                "attributeType": {
                                                    "type": "string"
                                                },
                                                "defaultValue": "0",
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "nslAttributeMetaData": {
                                                    "changeDriverType": "OPTIONAL"
                                                },
                                                "ownerId": 503933123919,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "User Id",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": false,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "792678788370",
                                                "id": 792678788370,
                                                "attributeType": {
                                                    "type": "string"
                                                },
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "nslAttributeMetaData": {
                                                    "changeDriverType": "OPTIONAL"
                                                },
                                                "ownerId": 503933123919,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "User Name",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": false,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            }
                                        ],
                                        "isReserved": true,
                                        "ownerId": 1328852396840,
                                        "canDownload": false,
                                        "exportDesignSystem": true,
                                        "naqResultsForBET": {
                                            "hasChildrenErrors": false
                                        },
                                        "name": "NSL_FetchUserDataInput",
                                        "source": "CANVAS",
                                        "masterId": 7435374152,
                                        "version": "20.0",
                                        "status": "ARCHIVED",
                                        "isNameUpdated": false,
                                        "attachments": [],
                                        "minAge": 0,
                                        "maxAge": 0,
                                        "editable": false,
                                        "approvalStatus": "UnAssigned"
                                    }
                                },
                                "isInPotentiality": false,
                                "triggerConditionalPotentiality": false,
                                "isPlaceholder": false
                            }
                        ],
                        "naqResultsForBET": {
                            "hasChildrenErrors": false
                        },
                        "overrideSTEbehavior": false,
                        "type": "physical"
                    },
                    {
                        "id": 505836510370,
                        "ownerId": 503933123919,
                        "participatingItems": [
                            {
                                "id": 1451599748925,
                                "ownerId": 503933123919,
                                "isMultiValue": false,
                                "item": {
                                    "TYPE": "GeneralEntity",
                                    "DATA": {
                                        "dsdId": "82297978814",
                                        "id": 82297978814,
                                        "nslAttributes": [
                                            {
                                                "dsdId": "316682192265",
                                                "id": 316682192265,
                                                "attributeType": {
                                                    "type": "string"
                                                },
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "ownerId": 503933123919,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "User Id",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": false,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "593520028576",
                                                "id": 593520028576,
                                                "attributeType": {
                                                    "type": "string"
                                                },
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "ownerId": 503933123919,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "User Name",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": false,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "2097994271491",
                                                "id": 2097994271491,
                                                "attributeType": {
                                                    "type": "string"
                                                },
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "ownerId": 503933123919,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Email",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": false,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "1152742638250",
                                                "id": 1152742638250,
                                                "attributeType": {
                                                    "type": "string"
                                                },
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "ownerId": 503933123919,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Manager Name",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": false,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "2022104462827",
                                                "id": 2022104462827,
                                                "attributeType": {
                                                    "type": "string"
                                                },
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "ownerId": 503933123919,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Manager Id",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": false,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "1170470533593",
                                                "id": 1170470533593,
                                                "attributeType": {
                                                    "type": "string"
                                                },
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "ownerId": 503933123919,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "OrgUnit Id",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": false,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "224212975856",
                                                "id": 224212975856,
                                                "attributeType": {
                                                    "type": "string"
                                                },
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "ownerId": 503933123919,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "OrgUnit Name",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": false,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "567287728078",
                                                "id": 567287728078,
                                                "attributeType": {
                                                    "type": "string"
                                                },
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "ownerId": 503933123919,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Manager Email",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": false,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "1083882814553",
                                                "id": 1083882814553,
                                                "attributeType": {
                                                    "type": "number"
                                                },
                                                "defaultValue": "1",
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "ownerId": 503933123919,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Mobile Number",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": false,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "660614382777",
                                                "id": 660614382777,
                                                "attributeType": {
                                                    "type": "string"
                                                },
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "ownerId": 503933123919,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Roles",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": false,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            }
                                        ],
                                        "isReserved": true,
                                        "ownerId": 1328852396840,
                                        "canDownload": false,
                                        "exportDesignSystem": true,
                                        "naqResultsForBET": {
                                            "hasChildrenErrors": false
                                        },
                                        "name": "NSL_FetchUserDataOutput",
                                        "source": "CANVAS",
                                        "masterId": 8835218414,
                                        "version": "20.0",
                                        "status": "ARCHIVED",
                                        "isNameUpdated": false,
                                        "attachments": [],
                                        "minAge": 0,
                                        "maxAge": 0,
                                        "editable": false,
                                        "approvalStatus": "UnAssigned"
                                    }
                                },
                                "isInPotentiality": false,
                                "triggerConditionalPotentiality": false,
                                "isPlaceholder": false
                            }
                        ],
                        "naqResultsForBET": {
                            "hasChildrenErrors": false
                        },
                        "overrideSTEbehavior": false,
                        "type": "triggerCES"
                    }
                ],
                "gsiList": [],
                "isFaceted": false,
                "agents": [
                    {
                        "agentType": "machine"
                    }
                ],
                "isReserved": true,
                "reservedCUType": "FetchUserData",
                "propertiesMap": {
                    "customizedIds": [],
                    "specialFeatures": [],
                    "currentDateTime": [],
                    "optionalAlternative": [
                        {
                            "participatingLayer": "physical",
                            "entityAttributeKey": "NSL_FetchUserDataInput.User Id",
                            "entityAttributeIdKey": "EN899282057116.AT435877679163",
                            "slotIndex": 0,
                            "attributeType": "string",
                            "isMultiValueSlot": false
                        },
                        {
                            "participatingLayer": "physical",
                            "entityAttributeKey": "NSL_FetchUserDataInput.User Name",
                            "entityAttributeIdKey": "EN899282057116.AT792678788370",
                            "slotIndex": 0,
                            "attributeType": "string",
                            "isMultiValueSlot": false
                        }
                    ],
                    "defaultValues": [
                        {
                            "participatingLayer": "triggerCES",
                            "entityAttributeKey": "NSL_FetchUserDataOutput.Mobile Number",
                            "entityAttributeIdKey": "EN82297978814.AT1083882814553",
                            "slotIndex": 0,
                            "attributeType": "number",
                            "isMultiValueSlot": false
                        },
                        {
                            "participatingLayer": "physical",
                            "entityAttributeKey": "NSL_FetchUserDataInput.User Id",
                            "entityAttributeIdKey": "EN899282057116.AT435877679163",
                            "slotIndex": 0,
                            "attributeType": "string",
                            "isMultiValueSlot": false
                        }
                    ],
                    "currentDate": [],
                    "currency": []
                },
                "cuSystemProperties": {},
                "ownerId": 1328852396840,
                "designTimeRights": [],
                "txnTimeRights": [],
                "exportDesignSystem": true,
                "naqResultsForBET": {
                    "hasChildrenErrors": false
                },
                "name": "NSL_FetchUserDataReservedCu",
                "displayName": "Fetch User Data Reserved ",
                "description": "",
                "source": "CANVAS",
                "masterId": 7829014138,
                "version": "20.0",
                "status": "ARCHIVED",
                "isNameUpdated": false,
                "attachments": [],
                "minAge": 0,
                "maxAge": 0,
                "editable": false,
                "approvalStatus": "UnAssigned"
            },
            {
                "index": 2,
                "dcd": [
                    {
                        "sourceContextualId": "",
                        "sourceContextualName": "",
                        "targetContextualId": "Authenticate Health System Client.Search For Health System Client:38.physical.slot:1.Health System Client Database.Status",
                        "targetContextualName": "Authenticate Health System Client.Search For Health System Client:38.physical.slot:1.Health System Client Database.Status",
                        "formula": "PL.SL001.Take Action For Reviewer.Status For Health System",
                        "formulaName": "PL.SL001.Take Action For Reviewer.Status For Health System",
                        "event": "ARRIVAL",
                        "multiValueMode": "APPEND",
                        "isInDCDGroup": false,
                        "id": 2130327011256,
                        "guid": "55211ba4-2649-4735-9d94-3e3eaefa6902",
                        "ownerId": 1802959306829,
                        "createdAt": 1707223302008,
                        "createdBy": 1802959306829,
                        "updatedAt": 1707974276649,
                        "updatedBy": 1802959306829
                    }
                ],
                "nextTriggerSet": [
                    {
                        "index": 38,
                        "nextCUId": 1529742297050,
                        "dsdNextCUId": "1529742297050",
                        "nextCUName": "Search For Health System Client",
                        "isParallel": false
                    }
                ],
                "entityDesignRights": {},
                "referencedChangeUnit": 660794699762,
                "attributeDesignRights": {},
                "dsdReferencedChangeUnit": "660794699762",
                "isParallel": false,
                "exceptionCUList": [],
                "slotItemProperties": {},
                "entityTransactionRights": {},
                "tCUConditionalPotentiality": [],
                "pathwaysCountFromCurrentCU": 2141599194,
                "nestedOutgoingDCDs": {},
                "eventCUList": [
                    {
                        "changeDriverId": 165011058358,
                        "dsdChangeDriverId": "165011058358",
                        "isGsi": false,
                        "eventType": "ON_LOAD",
                        "referenceEntityInfo": {
                            "referenceEntityId": 2078367568262,
                            "dsdReferenceEntityId": "2078367568262",
                            "attributeReferences": [
                                {
                                    "targetAttributeId": "PL.SL001.EN326006241221.AT165011058358",
                                    "targetAttributeName": "PL.SL001.Take Action For Reviewer.Status For Health System",
                                    "refDisplayAttributeId": "EN2078367568262.AT424088661349",
                                    "refDisplayAttributeName": "Subscription Status.Status",
                                    "refActualAttributeId": "EN2078367568262.AT424088661349",
                                    "refActualAttributeName": "Subscription Status.Status",
                                    "referenceValueType": "OPTIONS"
                                }
                            ],
                            "membershipCriterias": []
                        },
                        "ownerId": 1802959306829,
                        "isPopupEvent": false
                    }
                ],
                "tCUConditionalPotentialityNames": [],
                "cuType": "BASIC",
                "attributeTransactionRights": {},
                "mindCUList": [],
                "tCUsentenceName": "{\"physical\":[{\"token\":\"NSL Admin\",\"tag\":\"Hum.\",\"tf_id\":\"\u003cagents TF ID\u003e\",\"dsd_id\":\"\u003cagents DSD ID\u003e\"},{\"token\":\"or\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Mx CRM\",\"tag\":\"Hum.\",\"tf_id\":\"\u003cagents TF ID\u003e\",\"dsd_id\":\"\u003cagents DSD ID\u003e\"},{\"token\":\"Select Status\",\"tag\":\"Int.\",\"tf_id\":\"\u003ccu TF ID\u003e\",\"dsd_id\":\"\"},{\"token\":\"using\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Take Action For Reviewer\",\"tag\":\"Obj.\",\"entity_counter\":0,\"tf_id\":\"\u003centity1 TF ID\u003e\",\"dsd_id\":\"326006241221\"},{\"token\":\"such as\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Status For Health System\",\"tag\":\"Att.\",\"entity_counter\":0,\"attribute_counter\":0,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\".\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"}],\"information\":[],\"nested_response\":{}}",
                "triggerCULayers": [
                    {
                        "participatingItems": [
                            {
                                "id": 335167941677,
                                "isMultiValue": false,
                                "item": {
                                    "TYPE": "GeneralEntity",
                                    "DATA": {
                                        "dsdId": "326006241221",
                                        "id": 326006241221,
                                        "nslAttributes": [
                                            {
                                                "dsdId": "165011058358",
                                                "id": 165011058358,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": [
                                                            {
                                                                "TYPE": "OptionValue",
                                                                "DATA": {
                                                                    "actualValue": "Please Select",
                                                                    "displayValue": "Please Select",
                                                                    "count": 0
                                                                }
                                                            }
                                                        ]
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "contextualId": [
                                                    "physical.slot:1.Take Action For Reviewer.Status For Health System",
                                                    "PL.SL001.Take Action For Reviewer.Status For Health System",
                                                    "PL.SL001.EN326006241221.AT165011058358",
                                                    "GS936334308510.CU2013054763961_660794699762.PL.SL001.EN326006241221.AT165011058358"
                                                ],
                                                "ownerId": 1571362930421,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Status For Health System",
                                                "displayName": "Navigate to Health Organization With Status",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            }
                                        ],
                                        "entityProperties": {
                                            "isGlobal": "true"
                                        },
                                        "isReserved": false,
                                        "ownerId": 1571362930421,
                                        "canDownload": false,
                                        "dsdMetadataId": "8f9d8df8-8129-4a32-8212-b0746ca1c6a1",
                                        "exportDesignSystem": true,
                                        "naqResultsForBET": {
                                            "hasChildrenErrors": false
                                        },
                                        "name": "Take Action For Reviewer",
                                        "displayName": "Take Action",
                                        "source": "CANVAS",
                                        "masterId": 326006241221,
                                        "version": "1.0",
                                        "status": "PUBLISHED",
                                        "isNameUpdated": false,
                                        "attachments": [],
                                        "minAge": 0,
                                        "maxAge": 0,
                                        "editable": false,
                                        "approvalStatus": "UnAssigned"
                                    }
                                },
                                "isInPotentiality": false,
                                "triggerConditionalPotentiality": false,
                                "isPlaceholder": false
                            }
                        ],
                        "naqResultsForBET": {
                            "hasChildrenErrors": false
                        },
                        "overrideSTEbehavior": false,
                        "type": "physical"
                    }
                ],
                "disableSTEs": false,
                "dsdId": "2013054763961",
                "id": 2013054763961,
                "layers": [
                    {
                        "id": 1932756530783,
                        "ownerId": 80834785681,
                        "participatingItems": [
                            {
                                "id": 335167941677,
                                "ownerId": 80834785681,
                                "isMultiValue": false,
                                "item": {
                                    "TYPE": "GeneralEntity",
                                    "DATA": {
                                        "dsdId": "326006241221",
                                        "id": 326006241221,
                                        "nslAttributes": [
                                            {
                                                "dsdId": "165011058358",
                                                "id": 165011058358,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": [
                                                            {
                                                                "TYPE": "OptionValue",
                                                                "DATA": {
                                                                    "actualValue": "Please Select",
                                                                    "displayValue": "Please Select",
                                                                    "count": 0
                                                                }
                                                            }
                                                        ]
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "ownerId": 1571362930421,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Status For Health System",
                                                "displayName": "Navigate to Health Organization With Status",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            }
                                        ],
                                        "entityProperties": {
                                            "isGlobal": "true"
                                        },
                                        "isReserved": false,
                                        "ownerId": 1571362930421,
                                        "canDownload": false,
                                        "dsdMetadataId": "8f9d8df8-8129-4a32-8212-b0746ca1c6a1",
                                        "exportDesignSystem": true,
                                        "naqResultsForBET": {
                                            "hasChildrenErrors": false
                                        },
                                        "name": "Take Action For Reviewer",
                                        "displayName": "Take Action",
                                        "source": "CANVAS",
                                        "masterId": 326006241221,
                                        "version": "1.0",
                                        "status": "PUBLISHED",
                                        "isNameUpdated": false,
                                        "attachments": [],
                                        "minAge": 0,
                                        "maxAge": 0,
                                        "editable": false,
                                        "approvalStatus": "UnAssigned"
                                    }
                                },
                                "isInPotentiality": false,
                                "triggerConditionalPotentiality": false,
                                "isPlaceholder": false
                            }
                        ],
                        "naqResultsForBET": {
                            "hasChildrenErrors": false
                        },
                        "overrideSTEbehavior": false,
                        "type": "physical"
                    }
                ],
                "gsiList": [],
                "isFaceted": false,
                "agents": [
                    {
                        "agentType": "human"
                    }
                ],
                "membershipList": [],
                "isReserved": false,
                "reservedCUType": "",
                "propertiesMap": {
                    "customizedIds": [],
                    "specialFeatures": [],
                    "measures": [],
                    "NSL_User": [],
                    "currentDateTime": [],
                    "optionalAlternative": [],
                    "defaultValues": [],
                    "currentDate": [],
                    "currency": []
                },
                "cuSystemProperties": {
                    "betStoreTCULayer": "true"
                },
                "ownerId": 80834785681,
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
                "querySentence": "{\"physical\":[{\"token\":\"NSL Admin\",\"tag\":1,\"tf_id\":\"\u003cagents TF ID\u003e\",\"dsd_id\":\"\u003cagents DSD ID\u003e\"},{\"token\":\"or\",\"tag\":0,\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Mx CRM\",\"tag\":1,\"tf_id\":\"\u003cagents TF ID\u003e\",\"dsd_id\":\"\u003cagents DSD ID\u003e\"},{\"token\":\"Select Status\",\"tag\":4,\"tf_id\":\"\u003ccu TF ID\u003e\",\"dsd_id\":\"\"},{\"token\":\"using\",\"tag\":0,\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Take Action For Reviewer\",\"tag\":5,\"entity_counter\":0,\"tf_id\":\"\u003centity1 TF ID\u003e\",\"dsd_id\":\"326006241221\"},{\"token\":\"such as\",\"tag\":0,\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Status For Health System\",\"tag\":6,\"entity_counter\":0,\"attribute_counter\":0,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\".\",\"tag\":0,\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"}],\"information\":[],\"nested_response\":{}}",
                "dsdMetadataId": "184e376e-5e9e-4d1a-979c-a2efa9bf02c1",
                "exportDesignSystem": true,
                "naqResultsForBET": {
                    "hasChildrenErrors": false
                },
                "name": "Select Status",
                "displayName": "Select Status",
                "description": "Select Status",
                "source": "CANVAS",
                "masterId": 1058252814239,
                "version": "14.0",
                "status": "PUBLISHED",
                "isNameUpdated": false,
                "attachments": [],
                "minAge": 0,
                "maxAge": 0,
                "editable": false,
                "approvalStatus": "UnAssigned"
            },
            {
                "index": 4,
                "dcd": [
                    {
                        "sourceContextualId": "",
                        "sourceContextualName": "",
                        "targetContextualId": "Authenticate Health System Client.Proceed To Reject:6.information.slot:1.Take Action For Reviewer.Status For Reviewer",
                        "targetContextualName": "Authenticate Health System Client.Proceed To Reject:6.information.slot:1.Take Action For Reviewer.Status For Reviewer",
                        "formula": "PL.SL001.Health System Client Database.Actionable",
                        "formulaName": "PL.SL001.Health System Client Database.Actionable",
                        "event": "ARRIVAL",
                        "multiValueMode": "APPEND",
                        "isInDCDGroup": false,
                        "id": 453639774652,
                        "guid": "cd61e9e6-bc92-4707-9bf3-4d631df1e067",
                        "ownerId": 1802959306829,
                        "createdAt": 1707223302008,
                        "createdBy": 1802959306829,
                        "updatedAt": 1707974276649,
                        "updatedBy": 1802959306829
                    },
                    {
                        "sourceContextualId": "",
                        "sourceContextualName": "",
                        "targetContextualId": "Authenticate Health System Client.Proceed To Preview:7.information.slot:1.Take Action For Reviewer.Status For Reviewer",
                        "targetContextualName": "Authenticate Health System Client.Proceed To Preview:7.information.slot:1.Take Action For Reviewer.Status For Reviewer",
                        "formula": "PL.SL001.Health System Client Database.Actionable",
                        "formulaName": "PL.SL001.Health System Client Database.Actionable",
                        "event": "ARRIVAL",
                        "multiValueMode": "APPEND",
                        "isInDCDGroup": false,
                        "id": 1422731562458,
                        "guid": "563da7ac-a4ca-436d-8c12-a7345b4955ae",
                        "ownerId": 1802959306829,
                        "createdAt": 1707223302008,
                        "createdBy": 1802959306829,
                        "updatedAt": 1707974276649,
                        "updatedBy": 1802959306829
                    },
                    {
                        "sourceContextualId": "",
                        "sourceContextualName": "",
                        "targetContextualId": "Authenticate Health System Client.Proceed To Deactivate:13.information.slot:1.Take Action For Reviewer.Status For Reviewer",
                        "targetContextualName": "Authenticate Health System Client.Proceed To Deactivate:13.information.slot:1.Take Action For Reviewer.Status For Reviewer",
                        "formula": "PL.SL001.Health System Client Database.Actionable",
                        "formulaName": "PL.SL001.Health System Client Database.Actionable",
                        "event": "ARRIVAL",
                        "multiValueMode": "APPEND",
                        "isInDCDGroup": false,
                        "id": 2057911171225,
                        "guid": "b78e213b-19c0-48d4-a42e-4ccc92ebe17e",
                        "ownerId": 1802959306829,
                        "createdAt": 1707223302008,
                        "createdBy": 1802959306829,
                        "updatedAt": 1707974276649,
                        "updatedBy": 1802959306829
                    },
                    {
                        "sourceContextualId": "",
                        "sourceContextualName": "",
                        "targetContextualId": "Authenticate Health System Client.Proceed To Smart Contract:14.information.slot:1.Take Action For Reviewer.Status For Reviewer",
                        "targetContextualName": "Authenticate Health System Client.Proceed To Smart Contract:14.information.slot:1.Take Action For Reviewer.Status For Reviewer",
                        "formula": "PL.SL001.Health System Client Database.Actionable",
                        "formulaName": "PL.SL001.Health System Client Database.Actionable",
                        "event": "ARRIVAL",
                        "multiValueMode": "APPEND",
                        "isInDCDGroup": false,
                        "id": 1113047702995,
                        "guid": "b9ffe569-9cbb-4431-9757-03a3d5bc04a1",
                        "ownerId": 1802959306829,
                        "createdAt": 1707223302008,
                        "createdBy": 1802959306829,
                        "updatedAt": 1707974276649,
                        "updatedBy": 1802959306829
                    },
                    {
                        "sourceContextualId": "Authenticate Health System Client.Display Health System Client:4.physical.slot:1.Health System Client Database.Health System ID",
                        "sourceContextualName": "Authenticate Health System Client.Display Health System Client:4.physical.slot:1.Health System Client Database.Health System ID",
                        "targetContextualId": "Authenticate Health System Client.Reject Health System Subscription:68.Search For Health System Client ID:2.physical.slot:1.Health System Client Database.Health System ID",
                        "targetContextualName": "Authenticate Health System Client.Reject Health System Subscription:68.Search For Health System Client ID:2.physical.slot:1.Health System Client Database.Health System ID",
                        "formula": "PL.SL001.Health System Client Database.Health System ID",
                        "formulaName": "PL.SL001.Health System Client Database.Health System ID",
                        "event": "ARRIVAL",
                        "multiValueMode": "APPEND",
                        "isInDCDGroup": false,
                        "id": 1862003917627,
                        "guid": "78bafaea-27a8-4d36-b6a4-28b96000a580",
                        "ownerId": 1802959306829,
                        "createdAt": 1707223302008,
                        "createdBy": 1802959306829,
                        "updatedAt": 1707974276649,
                        "updatedBy": 1802959306829
                    },
                    {
                        "sourceContextualId": "Authenticate Health System Client.Display Health System Client:4.physical.slot:1.Health System Client Database.Actionable",
                        "sourceContextualName": "Authenticate Health System Client.Display Health System Client:4.physical.slot:1.Health System Client Database.Actionable",
                        "targetContextualId": "Authenticate Health System Client.Proceed to End:70.physical.slot:1.Random 1818.random",
                        "targetContextualName": "Authenticate Health System Client.Proceed to End:70.physical.slot:1.Random 1818.random",
                        "formula": "PL.SL001.Health System Client Database.Actionable",
                        "formulaName": "PL.SL001.Health System Client Database.Actionable",
                        "event": "ARRIVAL",
                        "multiValueMode": "APPEND",
                        "isInDCDGroup": false,
                        "id": 825178961852,
                        "guid": "1b9a75f6-56e5-44bf-bd19-fe3e78b0cad6",
                        "ownerId": 1802959306829,
                        "createdAt": 1707223302008,
                        "createdBy": 1802959306829,
                        "updatedAt": 1707974276649,
                        "updatedBy": 1802959306829
                    },
                    {
                        "sourceContextualId": "Authenticate Health System Client.Display Health System Client:4.physical.slot:1.Health System Client Database.Health System ID",
                        "sourceContextualName": "Authenticate Health System Client.Display Health System Client:4.physical.slot:1.Health System Client Database.Health System ID",
                        "targetContextualId": "Authenticate Health System Client.Smart Contract For Health System Client:73.Search Health System Client ID:1.physical.slot:1.Health System Client Database.Health System ID",
                        "targetContextualName": "Authenticate Health System Client.Smart Contract For Health System Client:73.Search Health System Client ID:1.physical.slot:1.Health System Client Database.Health System ID",
                        "formula": "PL.SL001.Health System Client Database.Health System ID",
                        "formulaName": "PL.SL001.Health System Client Database.Health System ID",
                        "event": "ARRIVAL",
                        "multiValueMode": "APPEND",
                        "isInDCDGroup": false,
                        "id": 1250378138874,
                        "guid": "dc1c2024-466b-4680-afac-339c1b764f0e",
                        "ownerId": 1802959306829,
                        "createdAt": 1707223302008,
                        "createdBy": 1802959306829,
                        "updatedAt": 1707974276649,
                        "updatedBy": 1802959306829
                    },
                    {
                        "sourceContextualId": "Authenticate Health System Client.Display Health System Client:4.physical.slot:1.Health System Client Database.Health System ID",
                        "sourceContextualName": "Authenticate Health System Client.Display Health System Client:4.physical.slot:1.Health System Client Database.Health System ID",
                        "targetContextualId": "Authenticate Health System Client.Deactivate Health System Subscription:74.Search For Health System Client ID:2.physical.slot:1.Health System Client Database.Health System ID",
                        "targetContextualName": "Authenticate Health System Client.Deactivate Health System Subscription:74.Search For Health System Client ID:2.physical.slot:1.Health System Client Database.Health System ID",
                        "formula": "PL.SL001.Health System Client Database.Health System ID",
                        "formulaName": "PL.SL001.Health System Client Database.Health System ID",
                        "event": "ARRIVAL",
                        "multiValueMode": "APPEND",
                        "isInDCDGroup": false,
                        "id": 779464478767,
                        "guid": "1cd88dfa-5059-4586-8421-2d8297eb9139",
                        "ownerId": 1802959306829,
                        "createdAt": 1707223302008,
                        "createdBy": 1802959306829,
                        "updatedAt": 1707974276649,
                        "updatedBy": 1802959306829
                    },
                    {
                        "sourceContextualId": "Authenticate Health System Client.Display Health System Client:4.physical.slot:1.Health System Client Database.Health System ID",
                        "sourceContextualName": "Authenticate Health System Client.Display Health System Client:4.physical.slot:1.Health System Client Database.Health System ID",
                        "targetContextualId": "Authenticate Health System Client.Preview Health System Client Details:82.Search For Health Client Details:2.physical.slot:1.Health System Client Database.Health System ID",
                        "targetContextualName": "Authenticate Health System Client.Preview Health System Client Details:82.Search For Health Client Details:2.physical.slot:1.Health System Client Database.Health System ID",
                        "formula": "PL.SL001.Health System Client Database.Health System ID",
                        "formulaName": "PL.SL001.Health System Client Database.Health System ID",
                        "event": "ARRIVAL",
                        "multiValueMode": "APPEND",
                        "isInDCDGroup": false,
                        "id": 424911613967,
                        "guid": "441a2e97-fd17-4a08-b041-1712bbf8169b",
                        "ownerId": 1802959306829,
                        "createdAt": 1707739389411,
                        "createdBy": 1802959306829,
                        "updatedAt": 1707974276649,
                        "updatedBy": 1802959306829
                    }
                ],
                "nextTriggerSet": [
                    {
                        "index": 6,
                        "nextCUId": 1722590923819,
                        "dsdNextCUId": "1722590923819",
                        "nextCUName": "Proceed To Reject",
                        "isParallel": false
                    },
                    {
                        "index": 7,
                        "nextCUId": 242406491586,
                        "dsdNextCUId": "242406491586",
                        "nextCUName": "Proceed To Preview",
                        "isParallel": false
                    },
                    {
                        "index": 13,
                        "nextCUId": 1260638241831,
                        "dsdNextCUId": "1260638241831",
                        "nextCUName": "Proceed To Deactivate",
                        "isParallel": false
                    },
                    {
                        "index": 14,
                        "nextCUId": 1040030556090,
                        "dsdNextCUId": "1040030556090",
                        "nextCUName": "Proceed To Smart Contract",
                        "isParallel": false
                    },
                    {
                        "index": 70,
                        "nextCUId": 137917345928,
                        "dsdNextCUId": "137917345928",
                        "nextCUName": "Proceed to End",
                        "isParallel": false
                    }
                ],
                "entityDesignRights": {},
                "referencedChangeUnit": 2046802540135,
                "attributeDesignRights": {},
                "dsdReferencedChangeUnit": "2046802540135",
                "isParallel": false,
                "exceptionCUList": [],
                "slotItemProperties": {},
                "entityTransactionRights": {},
                "tCUConditionalPotentiality": [],
                "pathwaysCountFromCurrentCU": 2141599193,
                "nestedOutgoingDCDs": {},
                "eventCUList": [
                    {
                        "changeDriverId": 1629413337027,
                        "dsdChangeDriverId": "1629413337027",
                        "isGsi": false,
                        "eventType": "ON_LOAD",
                        "referenceEntityInfo": {
                            "referenceEntityId": 2110746305273,
                            "dsdReferenceEntityId": "2110746305273",
                            "attributeReferences": [
                                {
                                    "targetAttributeId": "PL.SL001.EN931801392236.AT1629413337027",
                                    "targetAttributeName": "PL.SL001.Health System Client Database.Actionable",
                                    "refDisplayAttributeId": "EN2110746305273.AT1992653777197",
                                    "refDisplayAttributeName": "Subscription Action And Status V3.Action",
                                    "refActualAttributeId": "EN2110746305273.AT1992653777197",
                                    "refActualAttributeName": "Subscription Action And Status V3.Action",
                                    "referenceValueType": "OPTIONS"
                                }
                            ],
                            "membershipCriterias": [
                                {
                                    "referenceAttributeId": "EN2110746305273.AT1867943547898",
                                    "referenceAttributeContextualName": "Subscription Action And Status V3.Status",
                                    "membershipContextualId": "\u003dPL.SL001.Health System Client Database.Status",
                                    "membershipContextualName": "\u003dPL.SL001.Health System Client Database.Status"
                                }
                            ],
                            "contextSearchRequest": {},
                            "dataFilterDto": {}
                        },
                        "ownerId": 1802959306829,
                        "isPopupEvent": false
                    }
                ],
                "tCUConditionalPotentialityNames": [],
                "cuType": "BASIC",
                "attributeTransactionRights": {},
                "mindCUList": [],
                "tCUsentenceName": "{\"physical\":[{\"token\":\"NSL Admin\",\"tag\":\"Hum.\",\"tf_id\":\"\u003cagents TF ID\u003e\",\"dsd_id\":\"\u003cagents DSD ID\u003e\"},{\"token\":\"or\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Mx CRM\",\"tag\":\"Hum.\",\"tf_id\":\"\u003cagents TF ID\u003e\",\"dsd_id\":\"\u003cagents DSD ID\u003e\"},{\"token\":\"Display Health System Client\",\"tag\":\"Int.\",\"tf_id\":\"\u003ccu TF ID\u003e\",\"dsd_id\":\"2046802540135\"},{\"token\":\"using\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Health System Client Database\",\"tag\":\"Obj.\",\"entity_counter\":0,\"tf_id\":\"\u003centity1 TF ID\u003e\",\"dsd_id\":\"931801392236\"},{\"token\":\"such as\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Health System ID\",\"tag\":\"Att.\",\"entity_counter\":0,\"attribute_counter\":0,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\",\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Health System Name\",\"tag\":\"Att.\",\"entity_counter\":0,\"attribute_counter\":1,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\",\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Health System Email ID\",\"tag\":\"Att.\",\"entity_counter\":0,\"attribute_counter\":2,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\",\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"State\",\"tag\":\"Att.\",\"entity_counter\":0,\"attribute_counter\":3,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\",\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Status\",\"tag\":\"Att.\",\"entity_counter\":0,\"attribute_counter\":4,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\"and\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Actionable\",\"tag\":\"Att.\",\"entity_counter\":0,\"attribute_counter\":5,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\".\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"}],\"information\":[],\"nested_response\":{}}",
                "triggerCULayers": [
                    {
                        "participatingItems": [
                            {
                                "id": 1864925082737,
                                "isMultiValue": false,
                                "item": {
                                    "TYPE": "GeneralEntity",
                                    "DATA": {
                                        "dsdId": "931801392236",
                                        "id": 931801392236,
                                        "nslAttributes": [
                                            {
                                                "dsdId": "1343475399457",
                                                "id": 1343475399457,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "nslAttributeMetaData": {
                                                    "changeDriverType": "OPTIONAL"
                                                },
                                                "contextualId": [
                                                    "physical.slot:1.Health System Client Database.Health System ID",
                                                    "PL.SL001.Health System Client Database.Health System ID",
                                                    "PL.SL001.EN931801392236.AT1343475399457",
                                                    "GS936334308510.CU240798752206_2046802540135.PL.SL001.EN931801392236.AT1343475399457"
                                                ],
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Health System ID",
                                                "displayName": "Organization ID",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "1362446012556",
                                                "id": 1362446012556,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "contextualId": [
                                                    "physical.slot:1.Health System Client Database.Health System Name",
                                                    "PL.SL001.Health System Client Database.Health System Name",
                                                    "PL.SL001.EN931801392236.AT1362446012556",
                                                    "GS936334308510.CU240798752206_2046802540135.PL.SL001.EN931801392236.AT1362446012556"
                                                ],
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Health System Name",
                                                "displayName": "Organization Name",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "1805603264883",
                                                "id": 1805603264883,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "nslAttributeMetaData": {
                                                    "changeDriverType": "HIDDEN"
                                                },
                                                "contextualId": [
                                                    "physical.slot:1.Health System Client Database.Health System Email ID",
                                                    "PL.SL001.Health System Client Database.Health System Email ID",
                                                    "PL.SL001.EN931801392236.AT1805603264883",
                                                    "GS936334308510.CU240798752206_2046802540135.PL.SL001.EN931801392236.AT1805603264883"
                                                ],
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Health System Email ID",
                                                "displayName": "Health Organization Email ID",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "1258580474758",
                                                "id": 1258580474758,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "conditionalPotentiality": [
                                                    "PL.SL001.EN931801392236.AT545793212352 !\u003d \u0027Rejected\u0027"
                                                ],
                                                "conditionalPotentialityName": [
                                                    "PL.SL001.Health System Client Database.Status !\u003d \u0027Rejected\u0027"
                                                ],
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "contextualId": [
                                                    "physical.slot:1.Health System Client Database.State",
                                                    "PL.SL001.Health System Client Database.State",
                                                    "PL.SL001.EN931801392236.AT1258580474758",
                                                    "GS936334308510.CU240798752206_2046802540135.PL.SL001.EN931801392236.AT1258580474758"
                                                ],
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "State",
                                                "displayName": "State",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "545793212352",
                                                "id": 545793212352,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": true,
                                                "nslAttributeMetaData": {
                                                    "changeDriverType": "HIDDEN"
                                                },
                                                "contextualId": [
                                                    "physical.slot:1.Health System Client Database.Status",
                                                    "PL.SL001.Health System Client Database.Status",
                                                    "PL.SL001.EN931801392236.AT545793212352",
                                                    "GS936334308510.CU240798752206_2046802540135.PL.SL001.EN931801392236.AT545793212352"
                                                ],
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Status",
                                                "displayName": "Status",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "1629413337027",
                                                "id": 1629413337027,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": [
                                                            {
                                                                "TYPE": "OptionValue",
                                                                "DATA": {
                                                                    "actualValue": "Please Select",
                                                                    "displayValue": "Please Select",
                                                                    "count": 0
                                                                }
                                                            }
                                                        ]
                                                    }
                                                },
                                                "constraints": [],
                                                "defaultValue": "Please Select",
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "contextualId": [
                                                    "physical.slot:1.Health System Client Database.Actionable",
                                                    "PL.SL001.Health System Client Database.Actionable",
                                                    "PL.SL001.EN931801392236.AT1629413337027",
                                                    "GS936334308510.CU240798752206_2046802540135.PL.SL001.EN931801392236.AT1629413337027"
                                                ],
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Actionable",
                                                "displayName": "Action",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            }
                                        ],
                                        "entityProperties": {
                                            "isGlobal": "true"
                                        },
                                        "isReserved": false,
                                        "ownerId": 80834785681,
                                        "canDownload": false,
                                        "dsdMetadataId": "f531c881-1382-4975-8fdd-85d0edd8bd15",
                                        "exportDesignSystem": true,
                                        "naqResultsForBET": {
                                            "hasChildrenErrors": false
                                        },
                                        "name": "Health System Client Database",
                                        "displayName": "Health Organization Details",
                                        "source": "CANVAS",
                                        "masterId": 408933023441,
                                        "version": "6.0",
                                        "status": "PUBLISHED",
                                        "isNameUpdated": false,
                                        "attachments": [],
                                        "minAge": 0,
                                        "maxAge": 0,
                                        "editable": false,
                                        "approvalStatus": "UnAssigned"
                                    }
                                },
                                "changeDriverMetaData": {
                                    "changeDriverType": "OPTIONAL"
                                },
                                "isInPotentiality": false,
                                "triggerConditionalPotentiality": false,
                                "isPlaceholder": false
                            }
                        ],
                        "naqResultsForBET": {
                            "hasChildrenErrors": false
                        },
                        "overrideSTEbehavior": false,
                        "type": "physical"
                    }
                ],
                "disableSTEs": false,
                "dsdId": "240798752206",
                "id": 240798752206,
                "layers": [
                    {
                        "id": 1956999099909,
                        "ownerId": 1802959306829,
                        "participatingItems": [
                            {
                                "id": 1864925082737,
                                "ownerId": 1802959306829,
                                "isMultiValue": false,
                                "item": {
                                    "TYPE": "GeneralEntity",
                                    "DATA": {
                                        "dsdId": "931801392236",
                                        "id": 931801392236,
                                        "nslAttributes": [
                                            {
                                                "dsdId": "1343475399457",
                                                "id": 1343475399457,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "nslAttributeMetaData": {
                                                    "changeDriverType": "OPTIONAL"
                                                },
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Health System ID",
                                                "displayName": "Organization ID",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "1362446012556",
                                                "id": 1362446012556,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Health System Name",
                                                "displayName": "Organization Name",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "1805603264883",
                                                "id": 1805603264883,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "nslAttributeMetaData": {
                                                    "changeDriverType": "HIDDEN"
                                                },
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Health System Email ID",
                                                "displayName": "Health Organization Email ID",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "1258580474758",
                                                "id": 1258580474758,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "conditionalPotentiality": [
                                                    "PL.SL001.EN931801392236.AT545793212352 !\u003d \u0027Rejected\u0027"
                                                ],
                                                "conditionalPotentialityName": [
                                                    "PL.SL001.Health System Client Database.Status !\u003d \u0027Rejected\u0027"
                                                ],
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "State",
                                                "displayName": "State",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "545793212352",
                                                "id": 545793212352,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": true,
                                                "nslAttributeMetaData": {
                                                    "changeDriverType": "HIDDEN"
                                                },
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Status",
                                                "displayName": "Status",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "1629413337027",
                                                "id": 1629413337027,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": [
                                                            {
                                                                "TYPE": "OptionValue",
                                                                "DATA": {
                                                                    "actualValue": "Please Select",
                                                                    "displayValue": "Please Select",
                                                                    "count": 0
                                                                }
                                                            }
                                                        ]
                                                    }
                                                },
                                                "constraints": [],
                                                "defaultValue": "Please Select",
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Actionable",
                                                "displayName": "Action",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            }
                                        ],
                                        "entityProperties": {
                                            "isGlobal": "true"
                                        },
                                        "isReserved": false,
                                        "ownerId": 80834785681,
                                        "canDownload": false,
                                        "dsdMetadataId": "f531c881-1382-4975-8fdd-85d0edd8bd15",
                                        "exportDesignSystem": true,
                                        "naqResultsForBET": {
                                            "hasChildrenErrors": false
                                        },
                                        "name": "Health System Client Database",
                                        "displayName": "Health Organization Details",
                                        "source": "CANVAS",
                                        "masterId": 408933023441,
                                        "version": "6.0",
                                        "status": "PUBLISHED",
                                        "isNameUpdated": false,
                                        "attachments": [],
                                        "minAge": 0,
                                        "maxAge": 0,
                                        "editable": false,
                                        "approvalStatus": "UnAssigned"
                                    }
                                },
                                "changeDriverMetaData": {
                                    "changeDriverType": "OPTIONAL"
                                },
                                "isInPotentiality": false,
                                "triggerConditionalPotentiality": false,
                                "isPlaceholder": false
                            }
                        ],
                        "naqResultsForBET": {
                            "hasChildrenErrors": false
                        },
                        "overrideSTEbehavior": false,
                        "type": "physical"
                    }
                ],
                "gsiList": [],
                "isFaceted": false,
                "agents": [
                    {
                        "agentType": "human"
                    }
                ],
                "membershipList": [],
                "isReserved": false,
                "reservedCUType": "",
                "propertiesMap": {
                    "currentTime": [],
                    "customizedIds": [],
                    "specialFeatures": [],
                    "measures": [],
                    "NSL_User": [],
                    "currentDateTime": [],
                    "optionalAlternative": [
                        {
                            "participatingLayer": "physical",
                            "entityAttributeKey": "Health System Client Database.Health System ID",
                            "entityAttributeIdKey": "EN931801392236.AT1343475399457",
                            "slotIndex": 0,
                            "attributeType": "string",
                            "isMultiValueSlot": false
                        },
                        {
                            "participatingLayer": "physical",
                            "entityAttributeKey": "Health System Client Database.State",
                            "entityAttributeIdKey": "EN931801392236.AT1258580474758",
                            "slotIndex": 0,
                            "attributeType": "string",
                            "isMultiValueSlot": false
                        }
                    ],
                    "defaultValues": [
                        {
                            "participatingLayer": "physical",
                            "entityAttributeKey": "Health System Client Database.Actionable",
                            "entityAttributeIdKey": "EN931801392236.AT1629413337027",
                            "slotIndex": 0,
                            "attributeType": "string",
                            "isMultiValueSlot": false
                        }
                    ],
                    "currentDate": [],
                    "currency": []
                },
                "cuSystemProperties": {
                    "betStoreTCULayer": "true"
                },
                "ownerId": 1802959306829,
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
                "querySentence": "{\"physical\":[{\"token\":\"NSL Admin\",\"tag\":1,\"tf_id\":\"\u003cagents TF ID\u003e\",\"dsd_id\":\"\u003cagents DSD ID\u003e\"},{\"token\":\"or\",\"tag\":0,\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Mx CRM\",\"tag\":1,\"tf_id\":\"\u003cagents TF ID\u003e\",\"dsd_id\":\"\u003cagents DSD ID\u003e\"},{\"token\":\"Display Health System Client\",\"tag\":4,\"tf_id\":\"\u003ccu TF ID\u003e\",\"dsd_id\":\"2046802540135\"},{\"token\":\"using\",\"tag\":0,\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Health System Client Database\",\"tag\":5,\"entity_counter\":0,\"tf_id\":\"\u003centity1 TF ID\u003e\",\"dsd_id\":\"931801392236\"},{\"token\":\"such as\",\"tag\":0,\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Health System ID\",\"tag\":6,\"entity_counter\":0,\"attribute_counter\":0,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\",\",\"tag\":0,\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Health System Name\",\"tag\":6,\"entity_counter\":0,\"attribute_counter\":1,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\",\",\"tag\":0,\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Health System Email ID\",\"tag\":6,\"entity_counter\":0,\"attribute_counter\":2,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\",\",\"tag\":0,\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"State\",\"tag\":6,\"entity_counter\":0,\"attribute_counter\":3,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\",\",\"tag\":0,\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Status\",\"tag\":6,\"entity_counter\":0,\"attribute_counter\":4,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\"and\",\"tag\":0,\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Actionable\",\"tag\":6,\"entity_counter\":0,\"attribute_counter\":5,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\".\",\"tag\":0,\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"}],\"information\":[],\"nested_response\":{}}",
                "dsdMetadataId": "5463f8b8-089d-4948-a9db-427d0d15c121",
                "exportDesignSystem": true,
                "naqResultsForBET": {
                    "hasChildrenErrors": false
                },
                "name": "Display Health System Client",
                "displayName": "Display Health System Client",
                "description": "Authenticate Health System Client",
                "source": "CANVAS",
                "masterId": 1790177114556,
                "version": "28.0",
                "status": "READY",
                "isNameUpdated": false,
                "attachments": [],
                "minAge": 0,
                "maxAge": 0,
                "editable": false,
                "approvalStatus": "UnAssigned"
            },
            {
                "condition": "IL.SL001.EN326006241221.AT1642046499517 \u003d\u003d \u0027Reject\u0027",
                "conditionName": "IL.SL001.Take Action For Reviewer.Status For Reviewer \u003d\u003d \u0027Reject\u0027",
                "index": 6,
                "dcd": [],
                "nextTriggerSet": [
                    {
                        "index": 68,
                        "nextCUId": 1526336794644,
                        "dsdNextCUId": "1526336794644",
                        "nextCUName": "Reject Health System Subscription",
                        "isParallel": false
                    }
                ],
                "entityDesignRights": {},
                "referencedChangeUnit": 817598247462,
                "attributeDesignRights": {},
                "dsdReferencedChangeUnit": "817598247462",
                "isParallel": false,
                "exceptionCUList": [],
                "slotItemProperties": {},
                "entityTransactionRights": {},
                "tCUConditionalPotentiality": [],
                "pathwaysCountFromCurrentCU": -538342026,
                "nestedOutgoingDCDs": {},
                "eventCUList": [],
                "tCUConditionalPotentialityNames": [],
                "cuType": "BASIC",
                "attributeTransactionRights": {},
                "mindCUList": [],
                "tCUsentenceName": "{\"physical\":[{\"token\":\"machine\",\"tag\":\"machine agent\",\"tf_id\":\"\u003cagents TF ID\u003e\",\"dsd_id\":\"\u003cagents DSD ID\u003e\"},{\"token\":\"Proceed To Reject\",\"tag\":\"cu\",\"tf_id\":\"\u003ccu TF ID\u003e\",\"dsd_id\":\"817598247462\"}],\"information\":[{\"token\":\"Take Action For Reviewer\",\"tag\":\"entity\",\"entity_counter\":0,\"tf_id\":\"\u003centity1 TF ID\u003e\",\"dsd_id\":\"326006241221\"},{\"token\":\"such as\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Status For Reviewer\",\"tag\":\"attributes\",\"entity_counter\":0,\"attribute_counter\":0,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\".\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"}],\"nested_response\":{}}",
                "triggerCULayers": [
                    {
                        "participatingItems": [
                            {
                                "id": 941203182412,
                                "isMultiValue": false,
                                "item": {
                                    "TYPE": "GeneralEntity",
                                    "DATA": {
                                        "dsdId": "326006241221",
                                        "id": 326006241221,
                                        "nslAttributes": [
                                            {
                                                "dsdId": "1642046499517",
                                                "id": 1642046499517,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": [
                                                            {
                                                                "TYPE": "OptionValue",
                                                                "DATA": {
                                                                    "actualValue": "Please Select",
                                                                    "displayValue": "Please Select",
                                                                    "count": 0
                                                                }
                                                            }
                                                        ]
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "contextualId": [
                                                    "information.slot:1.Take Action For Reviewer.Status For Reviewer",
                                                    "IL.SL001.Take Action For Reviewer.Status For Reviewer",
                                                    "IL.SL001.EN326006241221.AT1642046499517",
                                                    "GS936334308510.CU1722590923819_817598247462.IL.SL001.EN326006241221.AT1642046499517"
                                                ],
                                                "ownerId": 1571362930421,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Status For Reviewer",
                                                "displayName": "Navigate To Reviewer With Status",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            }
                                        ],
                                        "entityProperties": {
                                            "isGlobal": "true"
                                        },
                                        "isReserved": false,
                                        "ownerId": 1571362930421,
                                        "canDownload": false,
                                        "dsdMetadataId": "8f9d8df8-8129-4a32-8212-b0746ca1c6a1",
                                        "exportDesignSystem": true,
                                        "naqResultsForBET": {
                                            "hasChildrenErrors": false
                                        },
                                        "name": "Take Action For Reviewer",
                                        "displayName": "Take Action",
                                        "source": "CANVAS",
                                        "masterId": 326006241221,
                                        "version": "1.0",
                                        "status": "PUBLISHED",
                                        "isNameUpdated": false,
                                        "attachments": [],
                                        "minAge": 0,
                                        "maxAge": 0,
                                        "editable": false,
                                        "approvalStatus": "UnAssigned"
                                    }
                                },
                                "isInPotentiality": false,
                                "triggerConditionalPotentiality": false,
                                "isPlaceholder": false
                            }
                        ],
                        "naqResultsForBET": {
                            "hasChildrenErrors": false
                        },
                        "overrideSTEbehavior": false,
                        "type": "information"
                    }
                ],
                "disableSTEs": false,
                "dsdId": "1722590923819",
                "id": 1722590923819,
                "layers": [
                    {
                        "id": 365313764297,
                        "ownerId": 1571362930421,
                        "participatingItems": [
                            {
                                "id": 941203182412,
                                "ownerId": 1571362930421,
                                "isMultiValue": false,
                                "item": {
                                    "TYPE": "GeneralEntity",
                                    "DATA": {
                                        "dsdId": "326006241221",
                                        "id": 326006241221,
                                        "nslAttributes": [
                                            {
                                                "dsdId": "1642046499517",
                                                "id": 1642046499517,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": [
                                                            {
                                                                "TYPE": "OptionValue",
                                                                "DATA": {
                                                                    "actualValue": "Please Select",
                                                                    "displayValue": "Please Select",
                                                                    "count": 0
                                                                }
                                                            }
                                                        ]
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "ownerId": 1571362930421,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Status For Reviewer",
                                                "displayName": "Navigate To Reviewer With Status",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            }
                                        ],
                                        "entityProperties": {
                                            "isGlobal": "true"
                                        },
                                        "isReserved": false,
                                        "ownerId": 1571362930421,
                                        "canDownload": false,
                                        "dsdMetadataId": "8f9d8df8-8129-4a32-8212-b0746ca1c6a1",
                                        "exportDesignSystem": true,
                                        "naqResultsForBET": {
                                            "hasChildrenErrors": false
                                        },
                                        "name": "Take Action For Reviewer",
                                        "displayName": "Take Action",
                                        "source": "CANVAS",
                                        "masterId": 326006241221,
                                        "version": "1.0",
                                        "status": "PUBLISHED",
                                        "isNameUpdated": false,
                                        "attachments": [],
                                        "minAge": 0,
                                        "maxAge": 0,
                                        "editable": false,
                                        "approvalStatus": "UnAssigned"
                                    }
                                },
                                "isInPotentiality": false,
                                "triggerConditionalPotentiality": false,
                                "isPlaceholder": false
                            }
                        ],
                        "naqResultsForBET": {
                            "hasChildrenErrors": false
                        },
                        "overrideSTEbehavior": false,
                        "type": "information"
                    }
                ],
                "gsiList": [],
                "isFaceted": false,
                "agents": [
                    {
                        "agentType": "machine"
                    }
                ],
                "membershipList": [],
                "isReserved": false,
                "reservedCUType": "",
                "propertiesMap": {
                    "customizedIds": [],
                    "specialFeatures": [],
                    "currentDateTime": [],
                    "optionalAlternative": [],
                    "defaultValues": [],
                    "currentDate": [],
                    "currency": []
                },
                "cuSystemProperties": {},
                "ownerId": 1571362930421,
                "designTimeRights": [],
                "txnTimeRights": [],
                "dsdMetadataId": "664d25bd-b462-4a0d-a0d8-6138264d2981",
                "exportDesignSystem": true,
                "naqResultsForBET": {
                    "hasChildrenErrors": false
                },
                "name": "Proceed To Reject",
                "displayName": "Proceed To Reject",
                "description": "Proceed To Reject",
                "source": "CANVAS",
                "masterId": 320696746646,
                "version": "5.0",
                "status": "ARCHIVED",
                "isNameUpdated": false,
                "attachments": [],
                "minAge": 0,
                "maxAge": 0,
                "editable": false,
                "approvalStatus": "UnAssigned"
            },
            {
                "condition": "IL.SL001.EN326006241221.AT1642046499517 \u003d\u003d \u0027View Details\u0027",
                "conditionName": "IL.SL001.Take Action For Reviewer.Status For Reviewer \u003d\u003d \u0027View Details\u0027",
                "index": 7,
                "dcd": [],
                "nextTriggerSet": [
                    {
                        "index": 82,
                        "nextCUId": 1748847593590,
                        "dsdNextCUId": "1748847593590",
                        "nextCUName": "Preview Health System Client Details",
                        "isParallel": false
                    }
                ],
                "entityDesignRights": {},
                "referencedChangeUnit": 1203563809685,
                "attributeDesignRights": {},
                "dsdReferencedChangeUnit": "1203563809685",
                "isParallel": false,
                "exceptionCUList": [],
                "slotItemProperties": {},
                "entityTransactionRights": {},
                "tCUConditionalPotentiality": [],
                "pathwaysCountFromCurrentCU": -538342026,
                "nestedOutgoingDCDs": {},
                "eventCUList": [],
                "tCUConditionalPotentialityNames": [],
                "cuType": "BASIC",
                "attributeTransactionRights": {},
                "mindCUList": [],
                "tCUsentenceName": "{\"physical\":[{\"token\":\"machine\",\"tag\":\"machine agent\",\"tf_id\":\"\u003cagents TF ID\u003e\",\"dsd_id\":\"\u003cagents DSD ID\u003e\"},{\"token\":\"Proceed To Preview\",\"tag\":\"cu\",\"tf_id\":\"\u003ccu TF ID\u003e\",\"dsd_id\":\"1203563809685\"}],\"information\":[{\"token\":\"Take Action For Reviewer\",\"tag\":\"entity\",\"entity_counter\":0,\"tf_id\":\"\u003centity1 TF ID\u003e\",\"dsd_id\":\"326006241221\"},{\"token\":\"such as\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Status For Reviewer\",\"tag\":\"attributes\",\"entity_counter\":0,\"attribute_counter\":0,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\".\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"}],\"nested_response\":{}}",
                "triggerCULayers": [
                    {
                        "participatingItems": [
                            {
                                "id": 1634092918562,
                                "isMultiValue": false,
                                "item": {
                                    "TYPE": "GeneralEntity",
                                    "DATA": {
                                        "dsdId": "326006241221",
                                        "id": 326006241221,
                                        "nslAttributes": [
                                            {
                                                "dsdId": "1642046499517",
                                                "id": 1642046499517,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": [
                                                            {
                                                                "TYPE": "OptionValue",
                                                                "DATA": {
                                                                    "actualValue": "Please Select",
                                                                    "displayValue": "Please Select",
                                                                    "count": 0
                                                                }
                                                            }
                                                        ]
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "contextualId": [
                                                    "information.slot:1.Take Action For Reviewer.Status For Reviewer",
                                                    "IL.SL001.Take Action For Reviewer.Status For Reviewer",
                                                    "IL.SL001.EN326006241221.AT1642046499517",
                                                    "GS936334308510.CU242406491586_1203563809685.IL.SL001.EN326006241221.AT1642046499517"
                                                ],
                                                "ownerId": 1571362930421,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Status For Reviewer",
                                                "displayName": "Navigate To Reviewer With Status",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            }
                                        ],
                                        "entityProperties": {
                                            "isGlobal": "true"
                                        },
                                        "isReserved": false,
                                        "ownerId": 1571362930421,
                                        "canDownload": false,
                                        "dsdMetadataId": "8f9d8df8-8129-4a32-8212-b0746ca1c6a1",
                                        "exportDesignSystem": true,
                                        "naqResultsForBET": {
                                            "hasChildrenErrors": false
                                        },
                                        "name": "Take Action For Reviewer",
                                        "displayName": "Take Action",
                                        "source": "CANVAS",
                                        "masterId": 326006241221,
                                        "version": "1.0",
                                        "status": "PUBLISHED",
                                        "isNameUpdated": false,
                                        "attachments": [],
                                        "minAge": 0,
                                        "maxAge": 0,
                                        "editable": false,
                                        "approvalStatus": "UnAssigned"
                                    }
                                },
                                "isInPotentiality": false,
                                "triggerConditionalPotentiality": false,
                                "isPlaceholder": false
                            }
                        ],
                        "naqResultsForBET": {
                            "hasChildrenErrors": false
                        },
                        "overrideSTEbehavior": false,
                        "type": "information"
                    }
                ],
                "disableSTEs": false,
                "dsdId": "242406491586",
                "id": 242406491586,
                "layers": [
                    {
                        "id": 1870234451674,
                        "ownerId": 80834785681,
                        "participatingItems": [
                            {
                                "id": 1634092918562,
                                "ownerId": 80834785681,
                                "isMultiValue": false,
                                "item": {
                                    "TYPE": "GeneralEntity",
                                    "DATA": {
                                        "dsdId": "326006241221",
                                        "id": 326006241221,
                                        "nslAttributes": [
                                            {
                                                "dsdId": "1642046499517",
                                                "id": 1642046499517,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": [
                                                            {
                                                                "TYPE": "OptionValue",
                                                                "DATA": {
                                                                    "actualValue": "Please Select",
                                                                    "displayValue": "Please Select",
                                                                    "count": 0
                                                                }
                                                            }
                                                        ]
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "ownerId": 1571362930421,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Status For Reviewer",
                                                "displayName": "Navigate To Reviewer With Status",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            }
                                        ],
                                        "entityProperties": {
                                            "isGlobal": "true"
                                        },
                                        "isReserved": false,
                                        "ownerId": 1571362930421,
                                        "canDownload": false,
                                        "dsdMetadataId": "8f9d8df8-8129-4a32-8212-b0746ca1c6a1",
                                        "exportDesignSystem": true,
                                        "naqResultsForBET": {
                                            "hasChildrenErrors": false
                                        },
                                        "name": "Take Action For Reviewer",
                                        "displayName": "Take Action",
                                        "source": "CANVAS",
                                        "masterId": 326006241221,
                                        "version": "1.0",
                                        "status": "PUBLISHED",
                                        "isNameUpdated": false,
                                        "attachments": [],
                                        "minAge": 0,
                                        "maxAge": 0,
                                        "editable": false,
                                        "approvalStatus": "UnAssigned"
                                    }
                                },
                                "isInPotentiality": false,
                                "triggerConditionalPotentiality": false,
                                "isPlaceholder": false
                            }
                        ],
                        "naqResultsForBET": {
                            "hasChildrenErrors": false
                        },
                        "overrideSTEbehavior": false,
                        "type": "information"
                    }
                ],
                "gsiList": [],
                "isFaceted": false,
                "agents": [
                    {
                        "agentType": "machine"
                    }
                ],
                "membershipList": [],
                "isReserved": false,
                "reservedCUType": "",
                "propertiesMap": {
                    "customizedIds": [],
                    "specialFeatures": [],
                    "currentDateTime": [],
                    "optionalAlternative": [],
                    "defaultValues": [],
                    "currentDate": [],
                    "currency": []
                },
                "cuSystemProperties": {},
                "ownerId": 80834785681,
                "designTimeRights": [],
                "txnTimeRights": [],
                "dsdMetadataId": "9ec53488-97ab-4c11-ac91-ce73bde2a618",
                "exportDesignSystem": true,
                "naqResultsForBET": {
                    "hasChildrenErrors": false
                },
                "name": "Proceed To Preview",
                "displayName": "Proceed To Preview",
                "description": "Proceed To Preview",
                "source": "CANVAS",
                "masterId": 1033797087498,
                "version": "4.0",
                "status": "ARCHIVED",
                "isNameUpdated": false,
                "attachments": [],
                "minAge": 0,
                "maxAge": 0,
                "editable": false,
                "approvalStatus": "UnAssigned"
            },
            {
                "condition": "IL.SL001.EN326006241221.AT1642046499517 \u003d\u003d \u0027Deactivate\u0027",
                "conditionName": "IL.SL001.Take Action For Reviewer.Status For Reviewer \u003d\u003d \u0027Deactivate\u0027",
                "index": 13,
                "dcd": [],
                "nextTriggerSet": [
                    {
                        "index": 74,
                        "nextCUId": 328636348468,
                        "dsdNextCUId": "328636348468",
                        "nextCUName": "Deactivate Health System Subscription",
                        "isParallel": false
                    }
                ],
                "entityDesignRights": {},
                "referencedChangeUnit": 2083279182268,
                "attributeDesignRights": {},
                "dsdReferencedChangeUnit": "2083279182268",
                "isParallel": false,
                "exceptionCUList": [],
                "slotItemProperties": {},
                "entityTransactionRights": {},
                "tCUConditionalPotentiality": [],
                "pathwaysCountFromCurrentCU": -538342026,
                "nestedOutgoingDCDs": {},
                "eventCUList": [],
                "tCUConditionalPotentialityNames": [],
                "cuType": "BASIC",
                "attributeTransactionRights": {},
                "mindCUList": [],
                "tCUsentenceName": "{\"physical\":[{\"token\":\"machine\",\"tag\":\"machine agent\",\"tf_id\":\"\u003cagents TF ID\u003e\",\"dsd_id\":\"\u003cagents DSD ID\u003e\"},{\"token\":\"Proceed To Deactivate\",\"tag\":\"cu\",\"tf_id\":\"\u003ccu TF ID\u003e\",\"dsd_id\":\"2083279182268\"}],\"information\":[{\"token\":\"Take Action For Reviewer\",\"tag\":\"entity\",\"entity_counter\":0,\"tf_id\":\"\u003centity1 TF ID\u003e\",\"dsd_id\":\"326006241221\"},{\"token\":\"such as\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Status For Health System\",\"tag\":\"attributes\",\"entity_counter\":0,\"attribute_counter\":0,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\"and\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Status For Reviewer\",\"tag\":\"attributes\",\"entity_counter\":0,\"attribute_counter\":1,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\".\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"}],\"nested_response\":{}}",
                "triggerCULayers": [
                    {
                        "participatingItems": [
                            {
                                "id": 1837233023096,
                                "isMultiValue": false,
                                "item": {
                                    "TYPE": "GeneralEntity",
                                    "DATA": {
                                        "dsdId": "326006241221",
                                        "id": 326006241221,
                                        "nslAttributes": [
                                            {
                                                "dsdId": "165011058358",
                                                "id": 165011058358,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": [
                                                            {
                                                                "TYPE": "OptionValue",
                                                                "DATA": {
                                                                    "actualValue": "Please Select",
                                                                    "displayValue": "Please Select",
                                                                    "count": 0
                                                                }
                                                            }
                                                        ]
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "contextualId": [
                                                    "information.slot:1.Take Action For Reviewer.Status For Health System",
                                                    "IL.SL001.Take Action For Reviewer.Status For Health System",
                                                    "IL.SL001.EN326006241221.AT165011058358",
                                                    "GS936334308510.CU1260638241831_2083279182268.IL.SL001.EN326006241221.AT165011058358"
                                                ],
                                                "ownerId": 1571362930421,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Status For Health System",
                                                "displayName": "Navigate to Health Organization With Status",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "1642046499517",
                                                "id": 1642046499517,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": [
                                                            {
                                                                "TYPE": "OptionValue",
                                                                "DATA": {
                                                                    "actualValue": "Please Select",
                                                                    "displayValue": "Please Select",
                                                                    "count": 0
                                                                }
                                                            }
                                                        ]
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "contextualId": [
                                                    "information.slot:1.Take Action For Reviewer.Status For Reviewer",
                                                    "IL.SL001.Take Action For Reviewer.Status For Reviewer",
                                                    "IL.SL001.EN326006241221.AT1642046499517",
                                                    "GS936334308510.CU1260638241831_2083279182268.IL.SL001.EN326006241221.AT1642046499517"
                                                ],
                                                "ownerId": 1571362930421,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Status For Reviewer",
                                                "displayName": "Navigate To Reviewer With Status",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            }
                                        ],
                                        "entityProperties": {
                                            "isGlobal": "true"
                                        },
                                        "isReserved": false,
                                        "ownerId": 1571362930421,
                                        "canDownload": false,
                                        "dsdMetadataId": "8f9d8df8-8129-4a32-8212-b0746ca1c6a1",
                                        "exportDesignSystem": true,
                                        "naqResultsForBET": {
                                            "hasChildrenErrors": false
                                        },
                                        "name": "Take Action For Reviewer",
                                        "displayName": "Take Action",
                                        "source": "CANVAS",
                                        "masterId": 326006241221,
                                        "version": "1.0",
                                        "status": "PUBLISHED",
                                        "isNameUpdated": false,
                                        "attachments": [],
                                        "minAge": 0,
                                        "maxAge": 0,
                                        "editable": false,
                                        "approvalStatus": "UnAssigned"
                                    }
                                },
                                "changeDriverMetaData": {
                                    "changeDriverType": "OPTIONAL"
                                },
                                "isInPotentiality": false,
                                "triggerConditionalPotentiality": false,
                                "isPlaceholder": false
                            }
                        ],
                        "naqResultsForBET": {
                            "hasChildrenErrors": false
                        },
                        "overrideSTEbehavior": false,
                        "type": "information"
                    }
                ],
                "disableSTEs": false,
                "dsdId": "1260638241831",
                "id": 1260638241831,
                "layers": [
                    {
                        "id": 1857756037854,
                        "ownerId": 1571362930421,
                        "participatingItems": [
                            {
                                "id": 1837233023096,
                                "ownerId": 1571362930421,
                                "isMultiValue": false,
                                "item": {
                                    "TYPE": "GeneralEntity",
                                    "DATA": {
                                        "dsdId": "326006241221",
                                        "id": 326006241221,
                                        "nslAttributes": [
                                            {
                                                "dsdId": "165011058358",
                                                "id": 165011058358,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": [
                                                            {
                                                                "TYPE": "OptionValue",
                                                                "DATA": {
                                                                    "actualValue": "Please Select",
                                                                    "displayValue": "Please Select",
                                                                    "count": 0
                                                                }
                                                            }
                                                        ]
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "ownerId": 1571362930421,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Status For Health System",
                                                "displayName": "Navigate to Health Organization With Status",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "1642046499517",
                                                "id": 1642046499517,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": [
                                                            {
                                                                "TYPE": "OptionValue",
                                                                "DATA": {
                                                                    "actualValue": "Please Select",
                                                                    "displayValue": "Please Select",
                                                                    "count": 0
                                                                }
                                                            }
                                                        ]
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "ownerId": 1571362930421,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Status For Reviewer",
                                                "displayName": "Navigate To Reviewer With Status",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            }
                                        ],
                                        "entityProperties": {
                                            "isGlobal": "true"
                                        },
                                        "isReserved": false,
                                        "ownerId": 1571362930421,
                                        "canDownload": false,
                                        "dsdMetadataId": "8f9d8df8-8129-4a32-8212-b0746ca1c6a1",
                                        "exportDesignSystem": true,
                                        "naqResultsForBET": {
                                            "hasChildrenErrors": false
                                        },
                                        "name": "Take Action For Reviewer",
                                        "displayName": "Take Action",
                                        "source": "CANVAS",
                                        "masterId": 326006241221,
                                        "version": "1.0",
                                        "status": "PUBLISHED",
                                        "isNameUpdated": false,
                                        "attachments": [],
                                        "minAge": 0,
                                        "maxAge": 0,
                                        "editable": false,
                                        "approvalStatus": "UnAssigned"
                                    }
                                },
                                "changeDriverMetaData": {
                                    "changeDriverType": "OPTIONAL"
                                },
                                "isInPotentiality": false,
                                "triggerConditionalPotentiality": false,
                                "isPlaceholder": false
                            }
                        ],
                        "naqResultsForBET": {
                            "hasChildrenErrors": false
                        },
                        "overrideSTEbehavior": false,
                        "type": "information"
                    }
                ],
                "gsiList": [],
                "isFaceted": false,
                "agents": [
                    {
                        "agentType": "machine"
                    }
                ],
                "membershipList": [],
                "isReserved": false,
                "reservedCUType": "",
                "propertiesMap": {
                    "customizedIds": [],
                    "specialFeatures": [],
                    "currentDateTime": [],
                    "optionalAlternative": [],
                    "defaultValues": [],
                    "currentDate": [],
                    "currency": []
                },
                "cuSystemProperties": {},
                "ownerId": 1571362930421,
                "designTimeRights": [],
                "txnTimeRights": [],
                "dsdMetadataId": "b6fb1ddb-4fca-41ad-910d-a45c82abd08c",
                "exportDesignSystem": true,
                "naqResultsForBET": {
                    "hasChildrenErrors": false
                },
                "name": "Proceed To Deactivate",
                "displayName": "Proceed To Deactivate",
                "description": "Proceed To Deactivate",
                "source": "CANVAS",
                "masterId": 1081678003564,
                "version": "4.0",
                "status": "PUBLISHED",
                "isNameUpdated": false,
                "attachments": [],
                "minAge": 0,
                "maxAge": 0,
                "editable": false,
                "approvalStatus": "UnAssigned"
            },
            {
                "condition": "IL.SL001.EN326006241221.AT1642046499517 \u003d\u003d \u0027Smart Contract\u0027",
                "conditionName": "IL.SL001.Take Action For Reviewer.Status For Reviewer \u003d\u003d \u0027Smart Contract\u0027",
                "index": 14,
                "dcd": [],
                "nextTriggerSet": [
                    {
                        "index": 73,
                        "nextCUId": 423563865915,
                        "dsdNextCUId": "423563865915",
                        "nextCUName": "Smart Contract For Health System Client",
                        "isParallel": false
                    }
                ],
                "entityDesignRights": {},
                "referencedChangeUnit": 85202663730,
                "attributeDesignRights": {},
                "dsdReferencedChangeUnit": "85202663730",
                "isParallel": false,
                "exceptionCUList": [],
                "slotItemProperties": {},
                "entityTransactionRights": {},
                "tCUConditionalPotentiality": [],
                "pathwaysCountFromCurrentCU": -538342026,
                "nestedOutgoingDCDs": {},
                "eventCUList": [],
                "tCUConditionalPotentialityNames": [],
                "cuType": "BASIC",
                "attributeTransactionRights": {},
                "mindCUList": [],
                "tCUsentenceName": "{\"physical\":[{\"token\":\"machine\",\"tag\":\"machine agent\",\"tf_id\":\"\u003cagents TF ID\u003e\",\"dsd_id\":\"\u003cagents DSD ID\u003e\"},{\"token\":\"Proceed To Smart Contract\",\"tag\":\"cu\",\"tf_id\":\"\u003ccu TF ID\u003e\",\"dsd_id\":\"85202663730\"}],\"information\":[{\"token\":\"Take Action For Reviewer\",\"tag\":\"entity\",\"entity_counter\":0,\"tf_id\":\"\u003centity1 TF ID\u003e\",\"dsd_id\":\"326006241221\"},{\"token\":\"such as\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Status For Health System\",\"tag\":\"attributes\",\"entity_counter\":0,\"attribute_counter\":0,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\"and\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Status For Reviewer\",\"tag\":\"attributes\",\"entity_counter\":0,\"attribute_counter\":1,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\".\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"}],\"nested_response\":{}}",
                "triggerCULayers": [
                    {
                        "participatingItems": [
                            {
                                "id": 358795254060,
                                "isMultiValue": false,
                                "item": {
                                    "TYPE": "GeneralEntity",
                                    "DATA": {
                                        "dsdId": "326006241221",
                                        "id": 326006241221,
                                        "nslAttributes": [
                                            {
                                                "dsdId": "165011058358",
                                                "id": 165011058358,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": [
                                                            {
                                                                "TYPE": "OptionValue",
                                                                "DATA": {
                                                                    "actualValue": "Please Select",
                                                                    "displayValue": "Please Select",
                                                                    "count": 0
                                                                }
                                                            }
                                                        ]
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "contextualId": [
                                                    "information.slot:1.Take Action For Reviewer.Status For Health System",
                                                    "IL.SL001.Take Action For Reviewer.Status For Health System",
                                                    "IL.SL001.EN326006241221.AT165011058358",
                                                    "GS936334308510.CU1040030556090_85202663730.IL.SL001.EN326006241221.AT165011058358"
                                                ],
                                                "ownerId": 1571362930421,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Status For Health System",
                                                "displayName": "Navigate to Health Organization With Status",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "1642046499517",
                                                "id": 1642046499517,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": [
                                                            {
                                                                "TYPE": "OptionValue",
                                                                "DATA": {
                                                                    "actualValue": "Please Select",
                                                                    "displayValue": "Please Select",
                                                                    "count": 0
                                                                }
                                                            }
                                                        ]
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "contextualId": [
                                                    "information.slot:1.Take Action For Reviewer.Status For Reviewer",
                                                    "IL.SL001.Take Action For Reviewer.Status For Reviewer",
                                                    "IL.SL001.EN326006241221.AT1642046499517",
                                                    "GS936334308510.CU1040030556090_85202663730.IL.SL001.EN326006241221.AT1642046499517"
                                                ],
                                                "ownerId": 1571362930421,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Status For Reviewer",
                                                "displayName": "Navigate To Reviewer With Status",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            }
                                        ],
                                        "entityProperties": {
                                            "isGlobal": "true"
                                        },
                                        "isReserved": false,
                                        "ownerId": 1571362930421,
                                        "canDownload": false,
                                        "dsdMetadataId": "8f9d8df8-8129-4a32-8212-b0746ca1c6a1",
                                        "exportDesignSystem": true,
                                        "naqResultsForBET": {
                                            "hasChildrenErrors": false
                                        },
                                        "name": "Take Action For Reviewer",
                                        "displayName": "Take Action",
                                        "source": "CANVAS",
                                        "masterId": 326006241221,
                                        "version": "1.0",
                                        "status": "PUBLISHED",
                                        "isNameUpdated": false,
                                        "attachments": [],
                                        "minAge": 0,
                                        "maxAge": 0,
                                        "editable": false,
                                        "approvalStatus": "UnAssigned"
                                    }
                                },
                                "changeDriverMetaData": {
                                    "changeDriverType": "OPTIONAL"
                                },
                                "isInPotentiality": false,
                                "triggerConditionalPotentiality": false,
                                "isPlaceholder": false
                            }
                        ],
                        "naqResultsForBET": {
                            "hasChildrenErrors": false
                        },
                        "overrideSTEbehavior": false,
                        "type": "information"
                    }
                ],
                "disableSTEs": false,
                "dsdId": "1040030556090",
                "id": 1040030556090,
                "layers": [
                    {
                        "id": 580494082346,
                        "ownerId": 1571362930421,
                        "participatingItems": [
                            {
                                "id": 358795254060,
                                "ownerId": 1571362930421,
                                "isMultiValue": false,
                                "item": {
                                    "TYPE": "GeneralEntity",
                                    "DATA": {
                                        "dsdId": "326006241221",
                                        "id": 326006241221,
                                        "nslAttributes": [
                                            {
                                                "dsdId": "165011058358",
                                                "id": 165011058358,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": [
                                                            {
                                                                "TYPE": "OptionValue",
                                                                "DATA": {
                                                                    "actualValue": "Please Select",
                                                                    "displayValue": "Please Select",
                                                                    "count": 0
                                                                }
                                                            }
                                                        ]
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "ownerId": 1571362930421,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Status For Health System",
                                                "displayName": "Navigate to Health Organization With Status",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "1642046499517",
                                                "id": 1642046499517,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": [
                                                            {
                                                                "TYPE": "OptionValue",
                                                                "DATA": {
                                                                    "actualValue": "Please Select",
                                                                    "displayValue": "Please Select",
                                                                    "count": 0
                                                                }
                                                            }
                                                        ]
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "ownerId": 1571362930421,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Status For Reviewer",
                                                "displayName": "Navigate To Reviewer With Status",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            }
                                        ],
                                        "entityProperties": {
                                            "isGlobal": "true"
                                        },
                                        "isReserved": false,
                                        "ownerId": 1571362930421,
                                        "canDownload": false,
                                        "dsdMetadataId": "8f9d8df8-8129-4a32-8212-b0746ca1c6a1",
                                        "exportDesignSystem": true,
                                        "naqResultsForBET": {
                                            "hasChildrenErrors": false
                                        },
                                        "name": "Take Action For Reviewer",
                                        "displayName": "Take Action",
                                        "source": "CANVAS",
                                        "masterId": 326006241221,
                                        "version": "1.0",
                                        "status": "PUBLISHED",
                                        "isNameUpdated": false,
                                        "attachments": [],
                                        "minAge": 0,
                                        "maxAge": 0,
                                        "editable": false,
                                        "approvalStatus": "UnAssigned"
                                    }
                                },
                                "changeDriverMetaData": {
                                    "changeDriverType": "OPTIONAL"
                                },
                                "isInPotentiality": false,
                                "triggerConditionalPotentiality": false,
                                "isPlaceholder": false
                            }
                        ],
                        "naqResultsForBET": {
                            "hasChildrenErrors": false
                        },
                        "overrideSTEbehavior": false,
                        "type": "information"
                    }
                ],
                "gsiList": [],
                "isFaceted": false,
                "agents": [
                    {
                        "agentType": "machine"
                    }
                ],
                "membershipList": [],
                "isReserved": false,
                "reservedCUType": "",
                "propertiesMap": {
                    "customizedIds": [],
                    "specialFeatures": [],
                    "currentDateTime": [],
                    "optionalAlternative": [],
                    "defaultValues": [],
                    "currentDate": [],
                    "currency": []
                },
                "cuSystemProperties": {},
                "ownerId": 1571362930421,
                "designTimeRights": [],
                "txnTimeRights": [],
                "dsdMetadataId": "57fc9de8-6a87-4d3b-a4a2-a2802f0ebec7",
                "exportDesignSystem": true,
                "naqResultsForBET": {
                    "hasChildrenErrors": false
                },
                "name": "Proceed To Smart Contract",
                "displayName": "Proceed To Smart Contract",
                "description": "Proceed To Smart Contract",
                "source": "CANVAS",
                "masterId": 83885114820,
                "version": "2.0",
                "status": "PUBLISHED",
                "isNameUpdated": false,
                "attachments": [],
                "minAge": 0,
                "maxAge": 0,
                "editable": false,
                "approvalStatus": "UnAssigned"
            },
            {
                "index": 30,
                "dcd": [],
                "nextTriggerSet": [
                    {
                        "index": 2,
                        "nextCUId": 2013054763961,
                        "dsdNextCUId": "2013054763961",
                        "nextCUName": "Select Status",
                        "isParallel": false
                    }
                ],
                "entityDesignRights": {},
                "referencedChangeUnit": 1798503936989,
                "attributeDesignRights": {},
                "dsdReferencedChangeUnit": "1798503936989",
                "isParallel": false,
                "exceptionCUList": [],
                "slotItemProperties": {},
                "entityTransactionRights": {},
                "tCUConditionalPotentiality": [],
                "pathwaysCountFromCurrentCU": -538342026,
                "nestedOutgoingDCDs": {},
                "eventCUList": [],
                "tCUConditionalPotentialityNames": [],
                "cuType": "BASIC",
                "attributeTransactionRights": {},
                "mindCUList": [],
                "tCUsentenceName": "{\"physical\":[{\"token\":\"NSL Admin\",\"tag\":\"Hum.\",\"tf_id\":\"\u003cagents TF ID\u003e\",\"dsd_id\":\"\u003cagents DSD ID\u003e\"},{\"token\":\"or\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Mx CRM\",\"tag\":\"Hum.\",\"tf_id\":\"\u003cagents TF ID\u003e\",\"dsd_id\":\"\u003cagents DSD ID\u003e\"},{\"token\":\"How Would You Like To Proceed MxCRM\",\"tag\":\"Int.\",\"tf_id\":\"\u003ccu TF ID\u003e\",\"dsd_id\":\"\"},{\"token\":\"using\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Review Another Case MxCRM\",\"tag\":\"Obj.\",\"entity_counter\":0,\"tf_id\":\"\u003centity1 TF ID\u003e\",\"dsd_id\":\"1119458400083\"},{\"token\":\"such as\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Action\",\"tag\":\"Att.\",\"entity_counter\":0,\"attribute_counter\":0,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\".\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"}],\"information\":[],\"nested_response\":{}}",
                "triggerCULayers": [
                    {
                        "participatingItems": [
                            {
                                "id": 879880784532,
                                "isMultiValue": false,
                                "item": {
                                    "TYPE": "GeneralEntity",
                                    "DATA": {
                                        "dsdId": "1119458400083",
                                        "id": 1119458400083,
                                        "nslAttributes": [
                                            {
                                                "dsdId": "1844970529365",
                                                "id": 1844970529365,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": [
                                                            {
                                                                "TYPE": "OptionValue",
                                                                "DATA": {
                                                                    "actualValue": "Yes",
                                                                    "displayValue": "Yes",
                                                                    "count": 0
                                                                }
                                                            },
                                                            {
                                                                "TYPE": "OptionValue",
                                                                "DATA": {
                                                                    "actualValue": "No",
                                                                    "displayValue": "No",
                                                                    "count": 0
                                                                }
                                                            }
                                                        ]
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "contextualId": [
                                                    "physical.slot:1.Review Another Case MxCRM.Action",
                                                    "PL.SL001.Review Another Case MxCRM.Action",
                                                    "PL.SL001.EN1119458400083.AT1844970529365",
                                                    "GS936334308510.CU1020110137387_1798503936989.PL.SL001.EN1119458400083.AT1844970529365"
                                                ],
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Action",
                                                "displayName": "Action",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            }
                                        ],
                                        "isReserved": false,
                                        "ownerId": 80834785681,
                                        "canDownload": false,
                                        "dsdMetadataId": "dd211a46-8800-4852-a4db-b52d77572fbe",
                                        "exportDesignSystem": true,
                                        "naqResultsForBET": {
                                            "hasChildrenErrors": false
                                        },
                                        "name": "Review Another Case MxCRM",
                                        "displayName": "Review Another Health Organization?",
                                        "source": "CANVAS",
                                        "masterId": 1119458400083,
                                        "version": "1.0",
                                        "status": "PUBLISHED",
                                        "isNameUpdated": true,
                                        "attachments": [],
                                        "minAge": 0,
                                        "maxAge": 0,
                                        "editable": false,
                                        "approvalStatus": "UnAssigned"
                                    }
                                },
                                "changeDriverMetaData": {
                                    "changeDriverType": "OPTIONAL"
                                },
                                "isInPotentiality": false,
                                "triggerConditionalPotentiality": false,
                                "isPlaceholder": false
                            }
                        ],
                        "naqResultsForBET": {
                            "hasChildrenErrors": false
                        },
                        "overrideSTEbehavior": false,
                        "type": "physical"
                    }
                ],
                "disableSTEs": false,
                "dsdId": "1020110137387",
                "id": 1020110137387,
                "layers": [
                    {
                        "id": 1152573625548,
                        "ownerId": 80834785681,
                        "participatingItems": [
                            {
                                "id": 879880784532,
                                "ownerId": 80834785681,
                                "isMultiValue": false,
                                "item": {
                                    "TYPE": "GeneralEntity",
                                    "DATA": {
                                        "dsdId": "1119458400083",
                                        "id": 1119458400083,
                                        "nslAttributes": [
                                            {
                                                "dsdId": "1844970529365",
                                                "id": 1844970529365,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": [
                                                            {
                                                                "TYPE": "OptionValue",
                                                                "DATA": {
                                                                    "actualValue": "Yes",
                                                                    "displayValue": "Yes",
                                                                    "count": 0
                                                                }
                                                            },
                                                            {
                                                                "TYPE": "OptionValue",
                                                                "DATA": {
                                                                    "actualValue": "No",
                                                                    "displayValue": "No",
                                                                    "count": 0
                                                                }
                                                            }
                                                        ]
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Action",
                                                "displayName": "Action",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            }
                                        ],
                                        "isReserved": false,
                                        "ownerId": 80834785681,
                                        "canDownload": false,
                                        "dsdMetadataId": "dd211a46-8800-4852-a4db-b52d77572fbe",
                                        "exportDesignSystem": true,
                                        "naqResultsForBET": {
                                            "hasChildrenErrors": false
                                        },
                                        "name": "Review Another Case MxCRM",
                                        "displayName": "Review Another Health Organization?",
                                        "source": "CANVAS",
                                        "masterId": 1119458400083,
                                        "version": "1.0",
                                        "status": "PUBLISHED",
                                        "isNameUpdated": true,
                                        "attachments": [],
                                        "minAge": 0,
                                        "maxAge": 0,
                                        "editable": false,
                                        "approvalStatus": "UnAssigned"
                                    }
                                },
                                "changeDriverMetaData": {
                                    "changeDriverType": "OPTIONAL"
                                },
                                "isInPotentiality": false,
                                "triggerConditionalPotentiality": false,
                                "isPlaceholder": false
                            }
                        ],
                        "naqResultsForBET": {
                            "hasChildrenErrors": false
                        },
                        "overrideSTEbehavior": false,
                        "type": "physical"
                    }
                ],
                "gsiList": [],
                "isFaceted": false,
                "agents": [
                    {
                        "agentType": "machine"
                    }
                ],
                "membershipList": [],
                "isReserved": false,
                "reservedCUType": "",
                "propertiesMap": {
                    "customizedIds": [],
                    "specialFeatures": [],
                    "measures": [],
                    "NSL_User": [],
                    "currentDateTime": [],
                    "optionalAlternative": [],
                    "defaultValues": [],
                    "currentDate": [],
                    "currency": []
                },
                "cuSystemProperties": {
                    "betStoreTCULayer": "true"
                },
                "ownerId": 80834785681,
                "designTimeRights": [],
                "txnTimeRights": [],
                "querySentence": "{\"physical\":[{\"token\":\"NSL Admin\",\"tag\":1,\"tf_id\":\"\u003cagents TF ID\u003e\",\"dsd_id\":\"\u003cagents DSD ID\u003e\"},{\"token\":\"or\",\"tag\":0,\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Mx CRM\",\"tag\":1,\"tf_id\":\"\u003cagents TF ID\u003e\",\"dsd_id\":\"\u003cagents DSD ID\u003e\"},{\"token\":\"How Would You Like To Proceed MxCRM\",\"tag\":4,\"tf_id\":\"\u003ccu TF ID\u003e\",\"dsd_id\":\"\"},{\"token\":\"using\",\"tag\":0,\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Review Another Case MxCRM\",\"tag\":5,\"entity_counter\":0,\"tf_id\":\"\u003centity1 TF ID\u003e\",\"dsd_id\":\"1119458400083\"},{\"token\":\"such as\",\"tag\":0,\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Action\",\"tag\":6,\"entity_counter\":0,\"attribute_counter\":0,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\".\",\"tag\":0,\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"}],\"information\":[],\"nested_response\":{}}",
                "dsdMetadataId": "d78dc86a-c420-4f55-95b8-d9d49b65d5c2",
                "exportDesignSystem": true,
                "naqResultsForBET": {
                    "hasChildrenErrors": false
                },
                "name": "How Would You Like To Proceed MxCRM",
                "displayName": "How Would You Like To Proceed?",
                "description": "How Would You Like To Proceed?",
                "source": "CANVAS",
                "masterId": 1533114836479,
                "version": "4.0",
                "status": "PUBLISHED",
                "isNameUpdated": false,
                "attachments": [],
                "minAge": 0,
                "maxAge": 0,
                "editable": false,
                "approvalStatus": "UnAssigned"
            },
            {
                "index": 38,
                "dcd": [
                    {
                        "sourceContextualId": "Authenticate Health System Client.Search For Health System Client:38.triggerCES.slot:1.Health System Client Database",
                        "sourceContextualName": "Authenticate Health System Client.Search For Health System Client:38.triggerCES.slot:1.Health System Client Database",
                        "targetContextualId": "Authenticate Health System Client.Display Health System Client:4.physical.slot:1.Health System Client Database",
                        "targetContextualName": "Authenticate Health System Client.Display Health System Client:4.physical.slot:1.Health System Client Database",
                        "formula": "triggerCES.SL001.Health System Client Database",
                        "formulaName": "triggerCES.SL001.Health System Client Database",
                        "event": "ARRIVAL",
                        "multiValueMode": "APPEND",
                        "isInDCDGroup": false,
                        "id": 1627319358074,
                        "guid": "32d73852-0163-47be-9f9f-d940d5762a03",
                        "ownerId": 1802959306829,
                        "createdAt": 1707223302008,
                        "createdBy": 1802959306829,
                        "updatedAt": 1707974276649,
                        "updatedBy": 1802959306829
                    },
                    {
                        "sourceContextualId": "Authenticate Health System Client.Search For Health System Client:38.triggerCES.slot:1.Health System Client Database",
                        "sourceContextualName": "Authenticate Health System Client.Search For Health System Client:38.triggerCES.slot:1.Health System Client Database",
                        "targetContextualId": "Authenticate Health System Client.Get this path if status is absent:76.physical.slot:1.Health System Client Database",
                        "targetContextualName": "Authenticate Health System Client.Get this path if status is absent:76.physical.slot:1.Health System Client Database",
                        "formula": "triggerCES.SL001.Health System Client Database",
                        "formulaName": "triggerCES.SL001.Health System Client Database",
                        "event": "ARRIVAL",
                        "multiValueMode": "APPEND",
                        "isInDCDGroup": false,
                        "id": 1015061097305,
                        "guid": "286084f3-0e1e-4fe4-90ab-d5590a28ba2b",
                        "ownerId": 1802959306829,
                        "createdAt": 1707223302008,
                        "createdBy": 1802959306829,
                        "updatedAt": 1707974276649,
                        "updatedBy": 1802959306829
                    },
                    {
                        "sourceContextualId": "Authenticate Health System Client.Search For Health System Client:38.triggerCES.slot:1.Health System Client Database",
                        "sourceContextualName": "Authenticate Health System Client.Search For Health System Client:38.triggerCES.slot:1.Health System Client Database",
                        "targetContextualId": "Authenticate Health System Client.Get this path if status is present:77.physical.slot:1.Health System Client Database",
                        "targetContextualName": "Authenticate Health System Client.Get this path if status is present:77.physical.slot:1.Health System Client Database",
                        "formula": "triggerCES.SL001.Health System Client Database",
                        "formulaName": "triggerCES.SL001.Health System Client Database",
                        "event": "ARRIVAL",
                        "multiValueMode": "APPEND",
                        "isInDCDGroup": false,
                        "id": 1403490550799,
                        "guid": "39fdfba9-365a-4109-955a-b9a336bfd834",
                        "ownerId": 1802959306829,
                        "createdAt": 1707223302008,
                        "createdBy": 1802959306829,
                        "updatedAt": 1707974276649,
                        "updatedBy": 1802959306829
                    }
                ],
                "nextTriggerSet": [
                    {
                        "index": 76,
                        "nextCUId": 248126306118,
                        "dsdNextCUId": "248126306118",
                        "nextCUName": "Get this path if status is absent",
                        "isParallel": false
                    },
                    {
                        "index": 77,
                        "nextCUId": 717093099406,
                        "dsdNextCUId": "717093099406",
                        "nextCUName": "Get this path if status is present",
                        "isParallel": false
                    }
                ],
                "entityDesignRights": {},
                "referencedChangeUnit": 895068011616,
                "attributeDesignRights": {},
                "dsdReferencedChangeUnit": "895068011616",
                "isParallel": false,
                "exceptionCUList": [],
                "slotItemProperties": {},
                "entityTransactionRights": {},
                "tCUConditionalPotentiality": [],
                "pathwaysCountFromCurrentCU": 2141599194,
                "nestedOutgoingDCDs": {},
                "eventCUList": [],
                "tCUConditionalPotentialityNames": [],
                "cuType": "BASIC",
                "attributeTransactionRights": {},
                "mindCUList": [],
                "tCUsentenceName": "{\"physical\":[{\"token\":\"machine\",\"tag\":\"machine agent\",\"tf_id\":\"\u003cagents TF ID\u003e\",\"dsd_id\":\"\u003cagents DSD ID\u003e\"},{\"token\":\"Search For Health System Client\",\"tag\":\"cu\",\"tf_id\":\"\u003ccu TF ID\u003e\",\"dsd_id\":\"895068011616\"},{\"token\":\"using\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Health System Client Database\",\"tag\":\"entity\",\"entity_counter\":0,\"tf_id\":\"\u003centity1 TF ID\u003e\",\"dsd_id\":\"931801392236\"},{\"token\":\"such as\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Status\",\"tag\":\"attributes\",\"entity_counter\":0,\"attribute_counter\":0,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\".\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"}],\"information\":[],\"nested_response\":{},\"triggerCES\":[{\"token\":\"Health System Client Database\",\"tag\":\"entity\",\"entity_counter\":0,\"tf_id\":\"\u003centity1 TF ID\u003e\",\"dsd_id\":\"931801392236\"},{\"token\":\"such as\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Health System ID\",\"tag\":\"attributes\",\"entity_counter\":0,\"attribute_counter\":0,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\",\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Health System Name\",\"tag\":\"attributes\",\"entity_counter\":0,\"attribute_counter\":1,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\",\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Health System Email ID\",\"tag\":\"attributes\",\"entity_counter\":0,\"attribute_counter\":2,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\",\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Status\",\"tag\":\"attributes\",\"entity_counter\":0,\"attribute_counter\":3,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\",\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Client Name\",\"tag\":\"attributes\",\"entity_counter\":0,\"attribute_counter\":4,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\",\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Type of Legal Entity\",\"tag\":\"attributes\",\"entity_counter\":0,\"attribute_counter\":5,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\",\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Landline Number\",\"tag\":\"attributes\",\"entity_counter\":0,\"attribute_counter\":6,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\",\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Total no of branches including main branch\",\"tag\":\"attributes\",\"entity_counter\":0,\"attribute_counter\":7,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\",\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"SPOC Name\",\"tag\":\"attributes\",\"entity_counter\":0,\"attribute_counter\":8,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\",\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"SPOC Mobile Number\",\"tag\":\"attributes\",\"entity_counter\":0,\"attribute_counter\":9,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\",\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"SPOC Email\",\"tag\":\"attributes\",\"entity_counter\":0,\"attribute_counter\":10,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\",\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Specialty\",\"tag\":\"attributes\",\"entity_counter\":0,\"attribute_counter\":11,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\",\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Location\",\"tag\":\"attributes\",\"entity_counter\":0,\"attribute_counter\":12,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\",\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Address Field 1\",\"tag\":\"attributes\",\"entity_counter\":0,\"attribute_counter\":13,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\",\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Address Field 2\",\"tag\":\"attributes\",\"entity_counter\":0,\"attribute_counter\":14,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\",\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Country\",\"tag\":\"attributes\",\"entity_counter\":0,\"attribute_counter\":15,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\",\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"State\",\"tag\":\"attributes\",\"entity_counter\":0,\"attribute_counter\":16,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\",\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"City\",\"tag\":\"attributes\",\"entity_counter\":0,\"attribute_counter\":17,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\",\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"ZIP\",\"tag\":\"attributes\",\"entity_counter\":0,\"attribute_counter\":18,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\",\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Latitude\",\"tag\":\"attributes\",\"entity_counter\":0,\"attribute_counter\":19,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\",\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Longitude\",\"tag\":\"attributes\",\"entity_counter\":0,\"attribute_counter\":20,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\",\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Registration Number\",\"tag\":\"attributes\",\"entity_counter\":0,\"attribute_counter\":21,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\",\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Date of Registration\",\"tag\":\"attributes\",\"entity_counter\":0,\"attribute_counter\":22,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\",\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Website Address\",\"tag\":\"attributes\",\"entity_counter\":0,\"attribute_counter\":23,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\",\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Accreditations\",\"tag\":\"attributes\",\"entity_counter\":0,\"attribute_counter\":24,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\",\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Other Certifications\",\"tag\":\"attributes\",\"entity_counter\":0,\"attribute_counter\":25,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\",\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Call Center Number\",\"tag\":\"attributes\",\"entity_counter\":0,\"attribute_counter\":26,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\",\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Smart Contract\",\"tag\":\"attributes\",\"entity_counter\":0,\"attribute_counter\":27,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\",\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Active Status\",\"tag\":\"attributes\",\"entity_counter\":0,\"attribute_counter\":28,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\",\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Actionable\",\"tag\":\"attributes\",\"entity_counter\":0,\"attribute_counter\":29,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\",\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Current Date Time\",\"tag\":\"attributes\",\"entity_counter\":0,\"attribute_counter\":30,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\",\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Tag 1\",\"tag\":\"attributes\",\"entity_counter\":0,\"attribute_counter\":31,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\",\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Tag 2\",\"tag\":\"attributes\",\"entity_counter\":0,\"attribute_counter\":32,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\",\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Tag 3\",\"tag\":\"attributes\",\"entity_counter\":0,\"attribute_counter\":33,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\",\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Tag 4\",\"tag\":\"attributes\",\"entity_counter\":0,\"attribute_counter\":34,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\",\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Tag 5\",\"tag\":\"attributes\",\"entity_counter\":0,\"attribute_counter\":35,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\",\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Tag 6\",\"tag\":\"attributes\",\"entity_counter\":0,\"attribute_counter\":36,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\",\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Tag 7\",\"tag\":\"attributes\",\"entity_counter\":0,\"attribute_counter\":37,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\",\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Tag 8\",\"tag\":\"attributes\",\"entity_counter\":0,\"attribute_counter\":38,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\",\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Tag 9\",\"tag\":\"attributes\",\"entity_counter\":0,\"attribute_counter\":39,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\"and\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Tag 10\",\"tag\":\"attributes\",\"entity_counter\":0,\"attribute_counter\":40,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\".\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"}]}",
                "triggerCULayers": [
                    {
                        "participatingItems": [
                            {
                                "id": 1632155491088,
                                "isMultiValue": false,
                                "item": {
                                    "TYPE": "GeneralEntity",
                                    "DATA": {
                                        "dsdId": "931801392236",
                                        "id": 931801392236,
                                        "nslAttributes": [
                                            {
                                                "dsdId": "545793212352",
                                                "id": 545793212352,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "memberShip": "\u003dPL.SL001.EN931801392236.AT545793212352",
                                                "memberShipName": "\u003dPL.SL001.Health System Client Database.Status",
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "contextualId": [
                                                    "physical.slot:1.Health System Client Database.Status",
                                                    "PL.SL001.Health System Client Database.Status",
                                                    "PL.SL001.EN931801392236.AT545793212352",
                                                    "GS936334308510.CU1529742297050_895068011616.PL.SL001.EN931801392236.AT545793212352"
                                                ],
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Status",
                                                "displayName": "Status",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            }
                                        ],
                                        "entityProperties": {
                                            "isGlobal": "true"
                                        },
                                        "isReserved": false,
                                        "ownerId": 80834785681,
                                        "canDownload": false,
                                        "dsdMetadataId": "f531c881-1382-4975-8fdd-85d0edd8bd15",
                                        "exportDesignSystem": true,
                                        "naqResultsForBET": {
                                            "hasChildrenErrors": false
                                        },
                                        "name": "Health System Client Database",
                                        "displayName": "Health Organization Details",
                                        "source": "CANVAS",
                                        "masterId": 408933023441,
                                        "version": "6.0",
                                        "status": "PUBLISHED",
                                        "isNameUpdated": false,
                                        "attachments": [],
                                        "minAge": 0,
                                        "maxAge": 0,
                                        "editable": false,
                                        "approvalStatus": "UnAssigned"
                                    }
                                },
                                "isInPotentiality": false,
                                "triggerConditionalPotentiality": false,
                                "isPlaceholder": false
                            }
                        ],
                        "naqResultsForBET": {
                            "hasChildrenErrors": false
                        },
                        "overrideSTEbehavior": false,
                        "type": "physical"
                    },
                    {
                        "participatingItems": [
                            {
                                "id": 1453809361017,
                                "isMultiValue": false,
                                "item": {
                                    "TYPE": "GeneralEntity",
                                    "DATA": {
                                        "dsdId": "931801392236",
                                        "id": 931801392236,
                                        "nslAttributes": [
                                            {
                                                "dsdId": "1343475399457",
                                                "id": 1343475399457,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "contextualId": [
                                                    "triggerCES.slot:1.Health System Client Database.Health System ID",
                                                    "triggerCES.SL001.Health System Client Database.Health System ID",
                                                    "triggerCES.SL001.EN931801392236.AT1343475399457",
                                                    "GS936334308510.CU1529742297050_895068011616.triggerCES.SL001.EN931801392236.AT1343475399457"
                                                ],
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Health System ID",
                                                "displayName": "Organization ID",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "1362446012556",
                                                "id": 1362446012556,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "contextualId": [
                                                    "triggerCES.slot:1.Health System Client Database.Health System Name",
                                                    "triggerCES.SL001.Health System Client Database.Health System Name",
                                                    "triggerCES.SL001.EN931801392236.AT1362446012556",
                                                    "GS936334308510.CU1529742297050_895068011616.triggerCES.SL001.EN931801392236.AT1362446012556"
                                                ],
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Health System Name",
                                                "displayName": "Organization Name",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "1805603264883",
                                                "id": 1805603264883,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "contextualId": [
                                                    "triggerCES.slot:1.Health System Client Database.Health System Email ID",
                                                    "triggerCES.SL001.Health System Client Database.Health System Email ID",
                                                    "triggerCES.SL001.EN931801392236.AT1805603264883",
                                                    "GS936334308510.CU1529742297050_895068011616.triggerCES.SL001.EN931801392236.AT1805603264883"
                                                ],
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Health System Email ID",
                                                "displayName": "Health Organization Email ID",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "545793212352",
                                                "id": 545793212352,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "contextualId": [
                                                    "triggerCES.slot:1.Health System Client Database.Status",
                                                    "triggerCES.SL001.Health System Client Database.Status",
                                                    "triggerCES.SL001.EN931801392236.AT545793212352",
                                                    "GS936334308510.CU1529742297050_895068011616.triggerCES.SL001.EN931801392236.AT545793212352"
                                                ],
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Status",
                                                "displayName": "Status",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "2088264211677",
                                                "id": 2088264211677,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "contextualId": [
                                                    "triggerCES.slot:1.Health System Client Database.Client Name",
                                                    "triggerCES.SL001.Health System Client Database.Client Name",
                                                    "triggerCES.SL001.EN931801392236.AT2088264211677",
                                                    "GS936334308510.CU1529742297050_895068011616.triggerCES.SL001.EN931801392236.AT2088264211677"
                                                ],
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Client Name",
                                                "displayName": "Client Name",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "1822525915629",
                                                "id": 1822525915629,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": [
                                                            {
                                                                "TYPE": "OptionValue",
                                                                "DATA": {
                                                                    "actualValue": "NA",
                                                                    "displayValue": "NA",
                                                                    "count": 0
                                                                }
                                                            }
                                                        ]
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "contextualId": [
                                                    "triggerCES.slot:1.Health System Client Database.Type of Legal Entity",
                                                    "triggerCES.SL001.Health System Client Database.Type of Legal Entity",
                                                    "triggerCES.SL001.EN931801392236.AT1822525915629",
                                                    "GS936334308510.CU1529742297050_895068011616.triggerCES.SL001.EN931801392236.AT1822525915629"
                                                ],
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Type of Legal Entity",
                                                "displayName": "Business Service Type",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "1576515780682",
                                                "id": 1576515780682,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "contextualId": [
                                                    "triggerCES.slot:1.Health System Client Database.Landline Number",
                                                    "triggerCES.SL001.Health System Client Database.Landline Number",
                                                    "triggerCES.SL001.EN931801392236.AT1576515780682",
                                                    "GS936334308510.CU1529742297050_895068011616.triggerCES.SL001.EN931801392236.AT1576515780682"
                                                ],
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Landline Number",
                                                "displayName": "Landline Number",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "2144414725572",
                                                "id": 2144414725572,
                                                "attributeType": {
                                                    "type": "number",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "contextualId": [
                                                    "triggerCES.slot:1.Health System Client Database.Total no of branches including main branch",
                                                    "triggerCES.SL001.Health System Client Database.Total no of branches including main branch",
                                                    "triggerCES.SL001.EN931801392236.AT2144414725572",
                                                    "GS936334308510.CU1529742297050_895068011616.triggerCES.SL001.EN931801392236.AT2144414725572"
                                                ],
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Total no of branches including main branch",
                                                "displayName": "No. of Facilities",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "536237249087",
                                                "id": 536237249087,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "contextualId": [
                                                    "triggerCES.slot:1.Health System Client Database.SPOC Name",
                                                    "triggerCES.SL001.Health System Client Database.SPOC Name",
                                                    "triggerCES.SL001.EN931801392236.AT536237249087",
                                                    "GS936334308510.CU1529742297050_895068011616.triggerCES.SL001.EN931801392236.AT536237249087"
                                                ],
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "SPOC Name",
                                                "displayName": "Contact Name",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "1242693669943",
                                                "id": 1242693669943,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "contextualId": [
                                                    "triggerCES.slot:1.Health System Client Database.SPOC Mobile Number",
                                                    "triggerCES.SL001.Health System Client Database.SPOC Mobile Number",
                                                    "triggerCES.SL001.EN931801392236.AT1242693669943",
                                                    "GS936334308510.CU1529742297050_895068011616.triggerCES.SL001.EN931801392236.AT1242693669943"
                                                ],
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "SPOC Mobile Number",
                                                "displayName": "Contact Mobile Number",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "1339452344933",
                                                "id": 1339452344933,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "contextualId": [
                                                    "triggerCES.slot:1.Health System Client Database.SPOC Email",
                                                    "triggerCES.SL001.Health System Client Database.SPOC Email",
                                                    "triggerCES.SL001.EN931801392236.AT1339452344933",
                                                    "GS936334308510.CU1529742297050_895068011616.triggerCES.SL001.EN931801392236.AT1339452344933"
                                                ],
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "SPOC Email",
                                                "displayName": "Contact Email",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "800947228038",
                                                "id": 800947228038,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": [
                                                            {
                                                                "TYPE": "OptionValue",
                                                                "DATA": {
                                                                    "actualValue": "NA",
                                                                    "displayValue": "NA",
                                                                    "count": 0
                                                                }
                                                            }
                                                        ]
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "contextualId": [
                                                    "triggerCES.slot:1.Health System Client Database.Specialty",
                                                    "triggerCES.SL001.Health System Client Database.Specialty",
                                                    "triggerCES.SL001.EN931801392236.AT800947228038",
                                                    "GS936334308510.CU1529742297050_895068011616.triggerCES.SL001.EN931801392236.AT800947228038"
                                                ],
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Specialty",
                                                "displayName": "Specialty",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "2108664590714",
                                                "id": 2108664590714,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "contextualId": [
                                                    "triggerCES.slot:1.Health System Client Database.Location",
                                                    "triggerCES.SL001.Health System Client Database.Location",
                                                    "triggerCES.SL001.EN931801392236.AT2108664590714",
                                                    "GS936334308510.CU1529742297050_895068011616.triggerCES.SL001.EN931801392236.AT2108664590714"
                                                ],
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Location",
                                                "displayName": "Location",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "40339246157",
                                                "id": 40339246157,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "contextualId": [
                                                    "triggerCES.slot:1.Health System Client Database.Address Field 1",
                                                    "triggerCES.SL001.Health System Client Database.Address Field 1",
                                                    "triggerCES.SL001.EN931801392236.AT40339246157",
                                                    "GS936334308510.CU1529742297050_895068011616.triggerCES.SL001.EN931801392236.AT40339246157"
                                                ],
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Address Field 1",
                                                "displayName": "Address Field 1",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "873948253504",
                                                "id": 873948253504,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "contextualId": [
                                                    "triggerCES.slot:1.Health System Client Database.Address Field 2",
                                                    "triggerCES.SL001.Health System Client Database.Address Field 2",
                                                    "triggerCES.SL001.EN931801392236.AT873948253504",
                                                    "GS936334308510.CU1529742297050_895068011616.triggerCES.SL001.EN931801392236.AT873948253504"
                                                ],
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Address Field 2",
                                                "displayName": "Address Field 2",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "2107517331537",
                                                "id": 2107517331537,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "contextualId": [
                                                    "triggerCES.slot:1.Health System Client Database.Country",
                                                    "triggerCES.SL001.Health System Client Database.Country",
                                                    "triggerCES.SL001.EN931801392236.AT2107517331537",
                                                    "GS936334308510.CU1529742297050_895068011616.triggerCES.SL001.EN931801392236.AT2107517331537"
                                                ],
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Country",
                                                "displayName": "Zip",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "1258580474758",
                                                "id": 1258580474758,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "contextualId": [
                                                    "triggerCES.slot:1.Health System Client Database.State",
                                                    "triggerCES.SL001.Health System Client Database.State",
                                                    "triggerCES.SL001.EN931801392236.AT1258580474758",
                                                    "GS936334308510.CU1529742297050_895068011616.triggerCES.SL001.EN931801392236.AT1258580474758"
                                                ],
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "State",
                                                "displayName": "State",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "700676060098",
                                                "id": 700676060098,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "contextualId": [
                                                    "triggerCES.slot:1.Health System Client Database.City",
                                                    "triggerCES.SL001.Health System Client Database.City",
                                                    "triggerCES.SL001.EN931801392236.AT700676060098",
                                                    "GS936334308510.CU1529742297050_895068011616.triggerCES.SL001.EN931801392236.AT700676060098"
                                                ],
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "City",
                                                "displayName": "City",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "799461171309",
                                                "id": 799461171309,
                                                "attributeType": {
                                                    "type": "number",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "contextualId": [
                                                    "triggerCES.slot:1.Health System Client Database.ZIP",
                                                    "triggerCES.SL001.Health System Client Database.ZIP",
                                                    "triggerCES.SL001.EN931801392236.AT799461171309",
                                                    "GS936334308510.CU1529742297050_895068011616.triggerCES.SL001.EN931801392236.AT799461171309"
                                                ],
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "ZIP",
                                                "displayName": "ZIP",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "375895471029",
                                                "id": 375895471029,
                                                "attributeType": {
                                                    "type": "decimalnumber",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "contextualId": [
                                                    "triggerCES.slot:1.Health System Client Database.Latitude",
                                                    "triggerCES.SL001.Health System Client Database.Latitude",
                                                    "triggerCES.SL001.EN931801392236.AT375895471029",
                                                    "GS936334308510.CU1529742297050_895068011616.triggerCES.SL001.EN931801392236.AT375895471029"
                                                ],
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Latitude",
                                                "displayName": "Latitude",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "1654714795621",
                                                "id": 1654714795621,
                                                "attributeType": {
                                                    "type": "decimalnumber",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "contextualId": [
                                                    "triggerCES.slot:1.Health System Client Database.Longitude",
                                                    "triggerCES.SL001.Health System Client Database.Longitude",
                                                    "triggerCES.SL001.EN931801392236.AT1654714795621",
                                                    "GS936334308510.CU1529742297050_895068011616.triggerCES.SL001.EN931801392236.AT1654714795621"
                                                ],
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Longitude",
                                                "displayName": "Longitude",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "993386191578",
                                                "id": 993386191578,
                                                "attributeType": {
                                                    "type": "number",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "contextualId": [
                                                    "triggerCES.slot:1.Health System Client Database.Registration Number",
                                                    "triggerCES.SL001.Health System Client Database.Registration Number",
                                                    "triggerCES.SL001.EN931801392236.AT993386191578",
                                                    "GS936334308510.CU1529742297050_895068011616.triggerCES.SL001.EN931801392236.AT993386191578"
                                                ],
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Registration Number",
                                                "displayName": "Registration Number",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "1633385529922",
                                                "id": 1633385529922,
                                                "attributeType": {
                                                    "type": "date",
                                                    "properties": {
                                                        "timeFormat": "24-hr",
                                                        "format": "MM/dd/yyyy"
                                                    },
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "contextualId": [
                                                    "triggerCES.slot:1.Health System Client Database.Date of Registration",
                                                    "triggerCES.SL001.Health System Client Database.Date of Registration",
                                                    "triggerCES.SL001.EN931801392236.AT1633385529922",
                                                    "GS936334308510.CU1529742297050_895068011616.triggerCES.SL001.EN931801392236.AT1633385529922"
                                                ],
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Date of Registration",
                                                "displayName": "Active Since",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "1802194687490",
                                                "id": 1802194687490,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "contextualId": [
                                                    "triggerCES.slot:1.Health System Client Database.Website Address",
                                                    "triggerCES.SL001.Health System Client Database.Website Address",
                                                    "triggerCES.SL001.EN931801392236.AT1802194687490",
                                                    "GS936334308510.CU1529742297050_895068011616.triggerCES.SL001.EN931801392236.AT1802194687490"
                                                ],
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Website Address",
                                                "displayName": "Website Address",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "1078620835784",
                                                "id": 1078620835784,
                                                "attributeType": {
                                                    "type": "list",
                                                    "nestedNslDataTypeProperties": {
                                                        "item_type": {
                                                            "type": "string"
                                                        }
                                                    },
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": [
                                                            {
                                                                "TYPE": "OptionValue",
                                                                "DATA": {
                                                                    "actualValue": "NA",
                                                                    "displayValue": "NA",
                                                                    "count": 0
                                                                }
                                                            }
                                                        ]
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "contextualId": [
                                                    "triggerCES.slot:1.Health System Client Database.Accreditations",
                                                    "triggerCES.SL001.Health System Client Database.Accreditations",
                                                    "triggerCES.SL001.EN931801392236.AT1078620835784",
                                                    "GS936334308510.CU1529742297050_895068011616.triggerCES.SL001.EN931801392236.AT1078620835784"
                                                ],
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Accreditations",
                                                "displayName": "Accreditations",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "1802631946093",
                                                "id": 1802631946093,
                                                "attributeType": {
                                                    "type": "list",
                                                    "nestedNslDataTypeProperties": {
                                                        "item_type": {
                                                            "type": "string"
                                                        }
                                                    },
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": [
                                                            {
                                                                "TYPE": "OptionValue",
                                                                "DATA": {
                                                                    "actualValue": "NA",
                                                                    "displayValue": "NA",
                                                                    "count": 0
                                                                }
                                                            }
                                                        ]
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "contextualId": [
                                                    "triggerCES.slot:1.Health System Client Database.Other Certifications",
                                                    "triggerCES.SL001.Health System Client Database.Other Certifications",
                                                    "triggerCES.SL001.EN931801392236.AT1802631946093",
                                                    "GS936334308510.CU1529742297050_895068011616.triggerCES.SL001.EN931801392236.AT1802631946093"
                                                ],
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Other Certifications",
                                                "displayName": "Other Certifications",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "1211945540932",
                                                "id": 1211945540932,
                                                "attributeType": {
                                                    "type": "number",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "contextualId": [
                                                    "triggerCES.slot:1.Health System Client Database.Call Center Number",
                                                    "triggerCES.SL001.Health System Client Database.Call Center Number",
                                                    "triggerCES.SL001.EN931801392236.AT1211945540932",
                                                    "GS936334308510.CU1529742297050_895068011616.triggerCES.SL001.EN931801392236.AT1211945540932"
                                                ],
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Call Center Number",
                                                "displayName": "Call Center Number",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "742879537717",
                                                "id": 742879537717,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "contextualId": [
                                                    "triggerCES.slot:1.Health System Client Database.Smart Contract",
                                                    "triggerCES.SL001.Health System Client Database.Smart Contract",
                                                    "triggerCES.SL001.EN931801392236.AT742879537717",
                                                    "GS936334308510.CU1529742297050_895068011616.triggerCES.SL001.EN931801392236.AT742879537717"
                                                ],
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Smart Contract",
                                                "displayName": "Smart Contract",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "70245784847",
                                                "id": 70245784847,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "contextualId": [
                                                    "triggerCES.slot:1.Health System Client Database.Active Status",
                                                    "triggerCES.SL001.Health System Client Database.Active Status",
                                                    "triggerCES.SL001.EN931801392236.AT70245784847",
                                                    "GS936334308510.CU1529742297050_895068011616.triggerCES.SL001.EN931801392236.AT70245784847"
                                                ],
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Active Status",
                                                "displayName": "Active Status",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "1629413337027",
                                                "id": 1629413337027,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": [
                                                            {
                                                                "TYPE": "OptionValue",
                                                                "DATA": {
                                                                    "actualValue": "Please Select",
                                                                    "displayValue": "Please Select",
                                                                    "count": 0
                                                                }
                                                            }
                                                        ]
                                                    }
                                                },
                                                "constraints": [],
                                                "defaultValue": "Please Select",
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "contextualId": [
                                                    "triggerCES.slot:1.Health System Client Database.Actionable",
                                                    "triggerCES.SL001.Health System Client Database.Actionable",
                                                    "triggerCES.SL001.EN931801392236.AT1629413337027",
                                                    "GS936334308510.CU1529742297050_895068011616.triggerCES.SL001.EN931801392236.AT1629413337027"
                                                ],
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Actionable",
                                                "displayName": "Action",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "1767631464160",
                                                "id": 1767631464160,
                                                "attributeType": {
                                                    "type": "datetime",
                                                    "properties": {
                                                        "timeFormat": "24-hr",
                                                        "format": "MM/dd/yyyy"
                                                    },
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "contextualId": [
                                                    "triggerCES.slot:1.Health System Client Database.Current Date Time",
                                                    "triggerCES.SL001.Health System Client Database.Current Date Time",
                                                    "triggerCES.SL001.EN931801392236.AT1767631464160",
                                                    "GS936334308510.CU1529742297050_895068011616.triggerCES.SL001.EN931801392236.AT1767631464160"
                                                ],
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Current Date Time",
                                                "displayName": "Registration Date",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "205418889074",
                                                "id": 205418889074,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "contextualId": [
                                                    "triggerCES.slot:1.Health System Client Database.Tag 1",
                                                    "triggerCES.SL001.Health System Client Database.Tag 1",
                                                    "triggerCES.SL001.EN931801392236.AT205418889074",
                                                    "GS936334308510.CU1529742297050_895068011616.triggerCES.SL001.EN931801392236.AT205418889074"
                                                ],
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Tag 1",
                                                "displayName": " Missing Information",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "1474092017988",
                                                "id": 1474092017988,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "contextualId": [
                                                    "triggerCES.slot:1.Health System Client Database.Tag 2",
                                                    "triggerCES.SL001.Health System Client Database.Tag 2",
                                                    "triggerCES.SL001.EN931801392236.AT1474092017988",
                                                    "GS936334308510.CU1529742297050_895068011616.triggerCES.SL001.EN931801392236.AT1474092017988"
                                                ],
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Tag 2",
                                                "displayName": "Note",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "1679350673960",
                                                "id": 1679350673960,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "contextualId": [
                                                    "triggerCES.slot:1.Health System Client Database.Tag 3",
                                                    "triggerCES.SL001.Health System Client Database.Tag 3",
                                                    "triggerCES.SL001.EN931801392236.AT1679350673960",
                                                    "GS936334308510.CU1529742297050_895068011616.triggerCES.SL001.EN931801392236.AT1679350673960"
                                                ],
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Tag 3",
                                                "displayName": "Smart Contract Validity",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "1615392101321",
                                                "id": 1615392101321,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "contextualId": [
                                                    "triggerCES.slot:1.Health System Client Database.Tag 4",
                                                    "triggerCES.SL001.Health System Client Database.Tag 4",
                                                    "triggerCES.SL001.EN931801392236.AT1615392101321",
                                                    "GS936334308510.CU1529742297050_895068011616.triggerCES.SL001.EN931801392236.AT1615392101321"
                                                ],
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Tag 4",
                                                "displayName": "Tag 4",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "1709906160294",
                                                "id": 1709906160294,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "contextualId": [
                                                    "triggerCES.slot:1.Health System Client Database.Tag 5",
                                                    "triggerCES.SL001.Health System Client Database.Tag 5",
                                                    "triggerCES.SL001.EN931801392236.AT1709906160294",
                                                    "GS936334308510.CU1529742297050_895068011616.triggerCES.SL001.EN931801392236.AT1709906160294"
                                                ],
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Tag 5",
                                                "displayName": "Tag 5",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "2111557717233",
                                                "id": 2111557717233,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "contextualId": [
                                                    "triggerCES.slot:1.Health System Client Database.Tag 6",
                                                    "triggerCES.SL001.Health System Client Database.Tag 6",
                                                    "triggerCES.SL001.EN931801392236.AT2111557717233",
                                                    "GS936334308510.CU1529742297050_895068011616.triggerCES.SL001.EN931801392236.AT2111557717233"
                                                ],
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Tag 6",
                                                "displayName": "Tag 6",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "551586123719",
                                                "id": 551586123719,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "contextualId": [
                                                    "triggerCES.slot:1.Health System Client Database.Tag 7",
                                                    "triggerCES.SL001.Health System Client Database.Tag 7",
                                                    "triggerCES.SL001.EN931801392236.AT551586123719",
                                                    "GS936334308510.CU1529742297050_895068011616.triggerCES.SL001.EN931801392236.AT551586123719"
                                                ],
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Tag 7",
                                                "displayName": "Tag 7",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "81004395646",
                                                "id": 81004395646,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "contextualId": [
                                                    "triggerCES.slot:1.Health System Client Database.Tag 8",
                                                    "triggerCES.SL001.Health System Client Database.Tag 8",
                                                    "triggerCES.SL001.EN931801392236.AT81004395646",
                                                    "GS936334308510.CU1529742297050_895068011616.triggerCES.SL001.EN931801392236.AT81004395646"
                                                ],
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Tag 8",
                                                "displayName": "Tag 8",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "814586534544",
                                                "id": 814586534544,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "contextualId": [
                                                    "triggerCES.slot:1.Health System Client Database.Tag 9",
                                                    "triggerCES.SL001.Health System Client Database.Tag 9",
                                                    "triggerCES.SL001.EN931801392236.AT814586534544",
                                                    "GS936334308510.CU1529742297050_895068011616.triggerCES.SL001.EN931801392236.AT814586534544"
                                                ],
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Tag 9",
                                                "displayName": "Tag 9",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "1252305919240",
                                                "id": 1252305919240,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "contextualId": [
                                                    "triggerCES.slot:1.Health System Client Database.Tag 10",
                                                    "triggerCES.SL001.Health System Client Database.Tag 10",
                                                    "triggerCES.SL001.EN931801392236.AT1252305919240",
                                                    "GS936334308510.CU1529742297050_895068011616.triggerCES.SL001.EN931801392236.AT1252305919240"
                                                ],
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Tag 10",
                                                "displayName": "Tag 10",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            }
                                        ],
                                        "entityProperties": {
                                            "isGlobal": "true"
                                        },
                                        "isReserved": false,
                                        "ownerId": 80834785681,
                                        "canDownload": false,
                                        "dsdMetadataId": "f531c881-1382-4975-8fdd-85d0edd8bd15",
                                        "exportDesignSystem": true,
                                        "naqResultsForBET": {
                                            "hasChildrenErrors": false
                                        },
                                        "name": "Health System Client Database",
                                        "displayName": "Health Organization Details",
                                        "source": "CANVAS",
                                        "masterId": 408933023441,
                                        "version": "6.0",
                                        "status": "PUBLISHED",
                                        "isNameUpdated": false,
                                        "attachments": [],
                                        "minAge": 0,
                                        "maxAge": 0,
                                        "editable": false,
                                        "approvalStatus": "UnAssigned"
                                    }
                                },
                                "isInPotentiality": false,
                                "triggerConditionalPotentiality": false,
                                "isPlaceholder": false
                            }
                        ],
                        "naqResultsForBET": {
                            "hasChildrenErrors": false
                        },
                        "overrideSTEbehavior": false,
                        "type": "triggerCES"
                    }
                ],
                "disableSTEs": false,
                "dsdId": "1529742297050",
                "id": 1529742297050,
                "layers": [
                    {
                        "id": 644077623492,
                        "ownerId": 80834785681,
                        "participatingItems": [
                            {
                                "id": 1632155491088,
                                "ownerId": 80834785681,
                                "isMultiValue": false,
                                "item": {
                                    "TYPE": "GeneralEntity",
                                    "DATA": {
                                        "dsdId": "931801392236",
                                        "id": 931801392236,
                                        "nslAttributes": [
                                            {
                                                "dsdId": "545793212352",
                                                "id": 545793212352,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "memberShip": "\u003dPL.SL001.EN931801392236.AT545793212352",
                                                "memberShipName": "\u003dPL.SL001.Health System Client Database.Status",
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Status",
                                                "displayName": "Status",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            }
                                        ],
                                        "entityProperties": {
                                            "isGlobal": "true"
                                        },
                                        "isReserved": false,
                                        "ownerId": 80834785681,
                                        "canDownload": false,
                                        "dsdMetadataId": "f531c881-1382-4975-8fdd-85d0edd8bd15",
                                        "exportDesignSystem": true,
                                        "naqResultsForBET": {
                                            "hasChildrenErrors": false
                                        },
                                        "name": "Health System Client Database",
                                        "displayName": "Health Organization Details",
                                        "source": "CANVAS",
                                        "masterId": 408933023441,
                                        "version": "6.0",
                                        "status": "PUBLISHED",
                                        "isNameUpdated": false,
                                        "attachments": [],
                                        "minAge": 0,
                                        "maxAge": 0,
                                        "editable": false,
                                        "approvalStatus": "UnAssigned"
                                    }
                                },
                                "isInPotentiality": false,
                                "triggerConditionalPotentiality": false,
                                "isPlaceholder": false
                            }
                        ],
                        "naqResultsForBET": {
                            "hasChildrenErrors": false
                        },
                        "overrideSTEbehavior": false,
                        "type": "physical"
                    },
                    {
                        "id": 1377422639077,
                        "ownerId": 80834785681,
                        "participatingItems": [
                            {
                                "id": 1453809361017,
                                "ownerId": 80834785681,
                                "isMultiValue": false,
                                "item": {
                                    "TYPE": "GeneralEntity",
                                    "DATA": {
                                        "dsdId": "931801392236",
                                        "id": 931801392236,
                                        "nslAttributes": [
                                            {
                                                "dsdId": "1343475399457",
                                                "id": 1343475399457,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Health System ID",
                                                "displayName": "Organization ID",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "1362446012556",
                                                "id": 1362446012556,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Health System Name",
                                                "displayName": "Organization Name",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "1805603264883",
                                                "id": 1805603264883,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Health System Email ID",
                                                "displayName": "Health Organization Email ID",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "545793212352",
                                                "id": 545793212352,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Status",
                                                "displayName": "Status",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "2088264211677",
                                                "id": 2088264211677,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Client Name",
                                                "displayName": "Client Name",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "1822525915629",
                                                "id": 1822525915629,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": [
                                                            {
                                                                "TYPE": "OptionValue",
                                                                "DATA": {
                                                                    "actualValue": "NA",
                                                                    "displayValue": "NA",
                                                                    "count": 0
                                                                }
                                                            }
                                                        ]
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Type of Legal Entity",
                                                "displayName": "Business Service Type",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "1576515780682",
                                                "id": 1576515780682,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Landline Number",
                                                "displayName": "Landline Number",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "2144414725572",
                                                "id": 2144414725572,
                                                "attributeType": {
                                                    "type": "number",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Total no of branches including main branch",
                                                "displayName": "No. of Facilities",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "536237249087",
                                                "id": 536237249087,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "SPOC Name",
                                                "displayName": "Contact Name",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "1242693669943",
                                                "id": 1242693669943,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "SPOC Mobile Number",
                                                "displayName": "Contact Mobile Number",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "1339452344933",
                                                "id": 1339452344933,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "SPOC Email",
                                                "displayName": "Contact Email",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "800947228038",
                                                "id": 800947228038,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": [
                                                            {
                                                                "TYPE": "OptionValue",
                                                                "DATA": {
                                                                    "actualValue": "NA",
                                                                    "displayValue": "NA",
                                                                    "count": 0
                                                                }
                                                            }
                                                        ]
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Specialty",
                                                "displayName": "Specialty",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "2108664590714",
                                                "id": 2108664590714,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Location",
                                                "displayName": "Location",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "40339246157",
                                                "id": 40339246157,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Address Field 1",
                                                "displayName": "Address Field 1",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "873948253504",
                                                "id": 873948253504,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Address Field 2",
                                                "displayName": "Address Field 2",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "2107517331537",
                                                "id": 2107517331537,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Country",
                                                "displayName": "Zip",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "1258580474758",
                                                "id": 1258580474758,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "State",
                                                "displayName": "State",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "700676060098",
                                                "id": 700676060098,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "City",
                                                "displayName": "City",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "799461171309",
                                                "id": 799461171309,
                                                "attributeType": {
                                                    "type": "number",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "ZIP",
                                                "displayName": "ZIP",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "375895471029",
                                                "id": 375895471029,
                                                "attributeType": {
                                                    "type": "decimalnumber",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Latitude",
                                                "displayName": "Latitude",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "1654714795621",
                                                "id": 1654714795621,
                                                "attributeType": {
                                                    "type": "decimalnumber",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Longitude",
                                                "displayName": "Longitude",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "993386191578",
                                                "id": 993386191578,
                                                "attributeType": {
                                                    "type": "number",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Registration Number",
                                                "displayName": "Registration Number",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "1633385529922",
                                                "id": 1633385529922,
                                                "attributeType": {
                                                    "type": "date",
                                                    "properties": {
                                                        "timeFormat": "24-hr",
                                                        "format": "MM/dd/yyyy"
                                                    },
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Date of Registration",
                                                "displayName": "Active Since",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "1802194687490",
                                                "id": 1802194687490,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Website Address",
                                                "displayName": "Website Address",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "1078620835784",
                                                "id": 1078620835784,
                                                "attributeType": {
                                                    "type": "list",
                                                    "nestedNslDataTypeProperties": {
                                                        "item_type": {
                                                            "type": "string"
                                                        }
                                                    },
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": [
                                                            {
                                                                "TYPE": "OptionValue",
                                                                "DATA": {
                                                                    "actualValue": "NA",
                                                                    "displayValue": "NA",
                                                                    "count": 0
                                                                }
                                                            }
                                                        ]
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Accreditations",
                                                "displayName": "Accreditations",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "1802631946093",
                                                "id": 1802631946093,
                                                "attributeType": {
                                                    "type": "list",
                                                    "nestedNslDataTypeProperties": {
                                                        "item_type": {
                                                            "type": "string"
                                                        }
                                                    },
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": [
                                                            {
                                                                "TYPE": "OptionValue",
                                                                "DATA": {
                                                                    "actualValue": "NA",
                                                                    "displayValue": "NA",
                                                                    "count": 0
                                                                }
                                                            }
                                                        ]
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Other Certifications",
                                                "displayName": "Other Certifications",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "1211945540932",
                                                "id": 1211945540932,
                                                "attributeType": {
                                                    "type": "number",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Call Center Number",
                                                "displayName": "Call Center Number",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "742879537717",
                                                "id": 742879537717,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Smart Contract",
                                                "displayName": "Smart Contract",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "70245784847",
                                                "id": 70245784847,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Active Status",
                                                "displayName": "Active Status",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "1629413337027",
                                                "id": 1629413337027,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": [
                                                            {
                                                                "TYPE": "OptionValue",
                                                                "DATA": {
                                                                    "actualValue": "Please Select",
                                                                    "displayValue": "Please Select",
                                                                    "count": 0
                                                                }
                                                            }
                                                        ]
                                                    }
                                                },
                                                "constraints": [],
                                                "defaultValue": "Please Select",
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Actionable",
                                                "displayName": "Action",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "1767631464160",
                                                "id": 1767631464160,
                                                "attributeType": {
                                                    "type": "datetime",
                                                    "properties": {
                                                        "timeFormat": "24-hr",
                                                        "format": "MM/dd/yyyy"
                                                    },
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Current Date Time",
                                                "displayName": "Registration Date",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "205418889074",
                                                "id": 205418889074,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Tag 1",
                                                "displayName": " Missing Information",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "1474092017988",
                                                "id": 1474092017988,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Tag 2",
                                                "displayName": "Note",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "1679350673960",
                                                "id": 1679350673960,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Tag 3",
                                                "displayName": "Smart Contract Validity",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "1615392101321",
                                                "id": 1615392101321,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Tag 4",
                                                "displayName": "Tag 4",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "1709906160294",
                                                "id": 1709906160294,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Tag 5",
                                                "displayName": "Tag 5",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "2111557717233",
                                                "id": 2111557717233,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Tag 6",
                                                "displayName": "Tag 6",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "551586123719",
                                                "id": 551586123719,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Tag 7",
                                                "displayName": "Tag 7",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "81004395646",
                                                "id": 81004395646,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Tag 8",
                                                "displayName": "Tag 8",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "814586534544",
                                                "id": 814586534544,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Tag 9",
                                                "displayName": "Tag 9",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            },
                                            {
                                                "dsdId": "1252305919240",
                                                "id": 1252305919240,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Tag 10",
                                                "displayName": "Tag 10",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            }
                                        ],
                                        "entityProperties": {
                                            "isGlobal": "true"
                                        },
                                        "isReserved": false,
                                        "ownerId": 80834785681,
                                        "canDownload": false,
                                        "dsdMetadataId": "f531c881-1382-4975-8fdd-85d0edd8bd15",
                                        "exportDesignSystem": true,
                                        "naqResultsForBET": {
                                            "hasChildrenErrors": false
                                        },
                                        "name": "Health System Client Database",
                                        "displayName": "Health Organization Details",
                                        "source": "CANVAS",
                                        "masterId": 408933023441,
                                        "version": "6.0",
                                        "status": "PUBLISHED",
                                        "isNameUpdated": false,
                                        "attachments": [],
                                        "minAge": 0,
                                        "maxAge": 0,
                                        "editable": false,
                                        "approvalStatus": "UnAssigned"
                                    }
                                },
                                "isInPotentiality": false,
                                "triggerConditionalPotentiality": false,
                                "isPlaceholder": false
                            }
                        ],
                        "naqResultsForBET": {
                            "hasChildrenErrors": false
                        },
                        "overrideSTEbehavior": false,
                        "type": "triggerCES"
                    }
                ],
                "gsiList": [],
                "isFaceted": false,
                "agents": [
                    {
                        "agentType": "machine"
                    }
                ],
                "isReserved": true,
                "reservedCUType": "search",
                "propertiesMap": {
                    "customizedIds": [],
                    "specialFeatures": [],
                    "currentDateTime": [],
                    "optionalAlternative": [],
                    "defaultValues": [
                        {
                            "participatingLayer": "triggerCES",
                            "entityAttributeKey": "Health System Client Database.Actionable",
                            "entityAttributeIdKey": "EN931801392236.AT1629413337027",
                            "slotIndex": 0,
                            "attributeType": "string",
                            "isMultiValueSlot": false
                        }
                    ],
                    "currentDate": [],
                    "currency": []
                },
                "cuSystemProperties": {},
                "ownerId": 80834785681,
                "designTimeRights": [],
                "txnTimeRights": [],
                "dsdMetadataId": "f5d2fa58-97eb-4bfd-b49b-d59a82405a2f",
                "exportDesignSystem": true,
                "naqResultsForBET": {
                    "hasChildrenErrors": false
                },
                "name": "Search For Health System Client",
                "displayName": "Search For Health System Client",
                "description": "search reserved cu",
                "source": "CANVAS",
                "masterId": 276312912181,
                "version": "4.0",
                "status": "PUBLISHED",
                "isNameUpdated": false,
                "attachments": [],
                "minAge": 0,
                "maxAge": 0,
                "editable": false,
                "approvalStatus": "UnAssigned"
            },
            {
                "condition": "PL.SL001.EN1443592287651.AT95605554834 \u003d\u003d \u0027random\u0027",
                "conditionName": "PL.SL001.Random 1818.random \u003d\u003d \u0027random\u0027",
                "index": 70,
                "dcd": [],
                "nextTriggerSet": [],
                "entityDesignRights": {},
                "referencedChangeUnit": 1902495148686,
                "attributeDesignRights": {},
                "dsdReferencedChangeUnit": "1902495148686",
                "isParallel": false,
                "exceptionCUList": [],
                "slotItemProperties": {},
                "entityTransactionRights": {},
                "tCUConditionalPotentiality": [],
                "pathwaysCountFromCurrentCU": 0,
                "nestedOutgoingDCDs": {},
                "eventCUList": [],
                "tCUConditionalPotentialityNames": [],
                "cuType": "BASIC",
                "attributeTransactionRights": {},
                "mindCUList": [],
                "tCUsentenceName": "{\"physical\":[{\"token\":\"NSL Admin\",\"tag\":\"Hum.\",\"tf_id\":\"\u003cagents TF ID\u003e\",\"dsd_id\":\"\u003cagents DSD ID\u003e\"},{\"token\":\"or\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Mx CRM\",\"tag\":\"Hum.\",\"tf_id\":\"\u003cagents TF ID\u003e\",\"dsd_id\":\"\u003cagents DSD ID\u003e\"},{\"token\":\"Proceed to End\",\"tag\":\"Int.\",\"tf_id\":\"\u003ccu TF ID\u003e\",\"dsd_id\":\"\"},{\"token\":\"using\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Random 1818\",\"tag\":\"Obj.\",\"entity_counter\":0,\"tf_id\":\"\u003centity1 TF ID\u003e\",\"dsd_id\":\"1443592287651\"},{\"token\":\"such as\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"random\",\"tag\":\"Att.\",\"entity_counter\":0,\"attribute_counter\":0,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\".\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"}],\"information\":[],\"nested_response\":{}}",
                "triggerCULayers": [
                    {
                        "participatingItems": [
                            {
                                "id": 662192811779,
                                "isMultiValue": false,
                                "item": {
                                    "TYPE": "GeneralEntity",
                                    "DATA": {
                                        "dsdId": "1443592287651",
                                        "id": 1443592287651,
                                        "nslAttributes": [
                                            {
                                                "dsdId": "95605554834",
                                                "id": 95605554834,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "nslAttributeProperties": {
                                                    "isTraceable": "false"
                                                },
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "contextualId": [
                                                    "physical.slot:1.Random 1818.random",
                                                    "PL.SL001.Random 1818.random",
                                                    "PL.SL001.EN1443592287651.AT95605554834",
                                                    "GS936334308510.CU137917345928_1902495148686.PL.SL001.EN1443592287651.AT95605554834"
                                                ],
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "random",
                                                "displayName": "random",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            }
                                        ],
                                        "isReserved": false,
                                        "ownerId": 80834785681,
                                        "canDownload": false,
                                        "dsdMetadataId": "1b2f06fe-a0e6-41c3-a4b9-663cc7030a9c",
                                        "exportDesignSystem": true,
                                        "naqResultsForBET": {
                                            "hasChildrenErrors": false
                                        },
                                        "name": "Random 1818",
                                        "displayName": "Random 1818",
                                        "source": "CANVAS",
                                        "masterId": 1443592287651,
                                        "version": "1.0",
                                        "status": "PUBLISHED",
                                        "isNameUpdated": true,
                                        "attachments": [],
                                        "minAge": 0,
                                        "maxAge": 0,
                                        "editable": false,
                                        "approvalStatus": "UnAssigned"
                                    }
                                },
                                "isInPotentiality": false,
                                "triggerConditionalPotentiality": false,
                                "isPlaceholder": false
                            }
                        ],
                        "naqResultsForBET": {
                            "hasChildrenErrors": false
                        },
                        "overrideSTEbehavior": false,
                        "type": "physical"
                    }
                ],
                "disableSTEs": false,
                "dsdId": "137917345928",
                "id": 137917345928,
                "layers": [
                    {
                        "id": 295320824604,
                        "ownerId": 80834785681,
                        "participatingItems": [
                            {
                                "id": 662192811779,
                                "ownerId": 80834785681,
                                "isMultiValue": false,
                                "item": {
                                    "TYPE": "GeneralEntity",
                                    "DATA": {
                                        "dsdId": "1443592287651",
                                        "id": 1443592287651,
                                        "nslAttributes": [
                                            {
                                                "dsdId": "95605554834",
                                                "id": 95605554834,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "nslAttributeProperties": {
                                                    "isTraceable": "false"
                                                },
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "random",
                                                "displayName": "random",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            }
                                        ],
                                        "isReserved": false,
                                        "ownerId": 80834785681,
                                        "canDownload": false,
                                        "dsdMetadataId": "1b2f06fe-a0e6-41c3-a4b9-663cc7030a9c",
                                        "exportDesignSystem": true,
                                        "naqResultsForBET": {
                                            "hasChildrenErrors": false
                                        },
                                        "name": "Random 1818",
                                        "displayName": "Random 1818",
                                        "source": "CANVAS",
                                        "masterId": 1443592287651,
                                        "version": "1.0",
                                        "status": "PUBLISHED",
                                        "isNameUpdated": true,
                                        "attachments": [],
                                        "minAge": 0,
                                        "maxAge": 0,
                                        "editable": false,
                                        "approvalStatus": "UnAssigned"
                                    }
                                },
                                "isInPotentiality": false,
                                "triggerConditionalPotentiality": false,
                                "isPlaceholder": false
                            }
                        ],
                        "naqResultsForBET": {
                            "hasChildrenErrors": false
                        },
                        "overrideSTEbehavior": false,
                        "type": "physical"
                    }
                ],
                "gsiList": [],
                "isFaceted": false,
                "agents": [
                    {
                        "agentType": "human"
                    }
                ],
                "membershipList": [],
                "isReserved": false,
                "reservedCUType": "",
                "propertiesMap": {
                    "customizedIds": [],
                    "specialFeatures": [],
                    "measures": [],
                    "NSL_User": [],
                    "currentDateTime": [],
                    "optionalAlternative": [],
                    "defaultValues": [],
                    "currentDate": [],
                    "currency": []
                },
                "cuSystemProperties": {
                    "betStoreTCULayer": "true"
                },
                "ownerId": 80834785681,
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
                "querySentence": "{\"physical\":[{\"token\":\"NSL Admin\",\"tag\":1,\"tf_id\":\"\u003cagents TF ID\u003e\",\"dsd_id\":\"\u003cagents DSD ID\u003e\"},{\"token\":\"or\",\"tag\":0,\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Mx CRM\",\"tag\":1,\"tf_id\":\"\u003cagents TF ID\u003e\",\"dsd_id\":\"\u003cagents DSD ID\u003e\"},{\"token\":\"Proceed to End\",\"tag\":4,\"tf_id\":\"\u003ccu TF ID\u003e\",\"dsd_id\":\"\"},{\"token\":\"using\",\"tag\":0,\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Random 1818\",\"tag\":5,\"entity_counter\":0,\"tf_id\":\"\u003centity1 TF ID\u003e\",\"dsd_id\":\"1443592287651\"},{\"token\":\"such as\",\"tag\":0,\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"random\",\"tag\":6,\"entity_counter\":0,\"attribute_counter\":0,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\".\",\"tag\":0,\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"}],\"information\":[],\"nested_response\":{}}",
                "dsdMetadataId": "cfad6d99-9ac6-427b-9fd9-7806d36a86ef",
                "exportDesignSystem": true,
                "naqResultsForBET": {
                    "hasChildrenErrors": false
                },
                "name": "Proceed to End",
                "displayName": "Proceed to End",
                "description": "Authenticate Health System Client",
                "source": "CANVAS",
                "masterId": 1902495148686,
                "version": "1.0",
                "status": "PUBLISHED",
                "isNameUpdated": false,
                "attachments": [],
                "minAge": 0,
                "maxAge": 0,
                "editable": false,
                "approvalStatus": "UnAssigned"
            },
            {
                "solutionLogic": [],
                "constrainedToReportingTree": false,
                "constrainedToTeam": false,
                "allowPreviouCUView": false,
                "isNavigableCu": false,
                "enableBot": false,
                "isGSILayerBasedRecursion": false,
                "preRecursiveConditionCheck": false,
                "condition": "",
                "conditionName": "",
                "index": 74,
                "dcd": [],
                "nextTriggerSet": [
                    {
                        "index": 30,
                        "nextCUId": 1020110137387,
                        "dsdNextCUId": "1020110137387",
                        "nextCUName": "How Would You Like To Proceed MxCRM",
                        "isParallel": false
                    }
                ],
                "entityDesignRights": {},
                "referencedChangeUnit": 1442228104286,
                "attributeDesignRights": {},
                "dsdReferencedChangeUnit": "1442228104286",
                "isParallel": false,
                "exceptionCUList": [],
                "entityTransactionRights": {},
                "pathwaysCountFromCurrentCU": 0,
                "eventCUList": [],
                "cuType": "GSI",
                "attributeTransactionRights": {},
                "mindCUList": [],
                "disableSTEs": false,
                "dsdId": "328636348468",
                "id": 328636348468,
                "layers": [],
                "gsiList": [],
                "isFaceted": false,
                "agents": [
                    {
                        "agentType": "human"
                    }
                ],
                "isReserved": false,
                "cuSystemProperties": {},
                "ownerId": 1802959306829,
                "designTimeRights": [],
                "txnTimeRights": [],
                "dsdMetadataId": "7f6c2536-d06b-42c5-89fd-7e56f99a570f",
                "exportDesignSystem": true,
                "naqResultsForBET": {
                    "hasChildrenErrors": false
                },
                "name": "Deactivate Health System Subscription",
                "displayName": "Deactivate Health Organization Subscription",
                "description": "",
                "source": "CANVAS",
                "masterId": 1436020470650,
                "version": "22.0",
                "status": "PUBLISHED",
                "isNameUpdated": false,
                "attachments": [],
                "minAge": 0,
                "maxAge": 0,
                "editable": false,
                "approvalStatus": "UnAssigned"
            },
            {
                "condition": "PL.SL001.EN931801392236.AT545793212352 IN POTENTIALITY",
                "conditionName": "PL.SL001.Health System Client Database.Status IN POTENTIALITY",
                "index": 76,
                "dcd": [],
                "nextTriggerSet": [
                    {
                        "index": 78,
                        "nextCUId": 231533854039,
                        "dsdNextCUId": "231533854039",
                        "nextCUName": "Show the Note for Absent Status",
                        "isParallel": false
                    }
                ],
                "entityDesignRights": {},
                "referencedChangeUnit": 625601279758,
                "attributeDesignRights": {},
                "dsdReferencedChangeUnit": "625601279758",
                "isParallel": false,
                "exceptionCUList": [],
                "slotItemProperties": {},
                "entityTransactionRights": {},
                "tCUConditionalPotentiality": [],
                "pathwaysCountFromCurrentCU": 1,
                "nestedOutgoingDCDs": {},
                "eventCUList": [],
                "tCUConditionalPotentialityNames": [],
                "cuType": "BASIC",
                "attributeTransactionRights": {},
                "mindCUList": [],
                "tCUsentenceName": "{\"physical\":[{\"token\":\"NSL Admin\",\"tag\":\"Hum.\",\"tf_id\":\"\u003cagents TF ID\u003e\",\"dsd_id\":\"\u003cagents DSD ID\u003e\"},{\"token\":\"or\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Mx CRM\",\"tag\":\"Hum.\",\"tf_id\":\"\u003cagents TF ID\u003e\",\"dsd_id\":\"\u003cagents DSD ID\u003e\"},{\"token\":\"Get this path if status is absent\",\"tag\":\"Int.\",\"tf_id\":\"\u003ccu TF ID\u003e\",\"dsd_id\":\"625601279758\"},{\"token\":\"using\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Health System Client Database\",\"tag\":\"Obj.\",\"entity_counter\":0,\"tf_id\":\"\u003centity1 TF ID\u003e\",\"dsd_id\":\"931801392236\"},{\"token\":\"such as\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Status\",\"tag\":\"Att.\",\"entity_counter\":0,\"attribute_counter\":0,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\".\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"}],\"information\":[],\"nested_response\":{}}",
                "triggerCULayers": [
                    {
                        "participatingItems": [
                            {
                                "id": 1177625186196,
                                "isMultiValue": false,
                                "item": {
                                    "TYPE": "GeneralEntity",
                                    "DATA": {
                                        "dsdId": "931801392236",
                                        "id": 931801392236,
                                        "nslAttributes": [
                                            {
                                                "dsdId": "545793212352",
                                                "id": 545793212352,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "contextualId": [
                                                    "physical.slot:1.Health System Client Database.Status",
                                                    "PL.SL001.Health System Client Database.Status",
                                                    "PL.SL001.EN931801392236.AT545793212352",
                                                    "GS936334308510.CU248126306118_625601279758.PL.SL001.EN931801392236.AT545793212352"
                                                ],
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Status",
                                                "displayName": "Status",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            }
                                        ],
                                        "entityProperties": {
                                            "isGlobal": "true"
                                        },
                                        "isReserved": false,
                                        "ownerId": 80834785681,
                                        "canDownload": false,
                                        "dsdMetadataId": "f531c881-1382-4975-8fdd-85d0edd8bd15",
                                        "exportDesignSystem": true,
                                        "naqResultsForBET": {
                                            "hasChildrenErrors": false
                                        },
                                        "name": "Health System Client Database",
                                        "displayName": "Health Organization Details",
                                        "source": "CANVAS",
                                        "masterId": 408933023441,
                                        "version": "6.0",
                                        "status": "PUBLISHED",
                                        "isNameUpdated": false,
                                        "attachments": [],
                                        "minAge": 0,
                                        "maxAge": 0,
                                        "editable": false,
                                        "approvalStatus": "UnAssigned"
                                    }
                                },
                                "changeDriverMetaData": {
                                    "changeDriverType": "OPTIONAL"
                                },
                                "isInPotentiality": false,
                                "triggerConditionalPotentiality": false,
                                "isPlaceholder": false
                            }
                        ],
                        "naqResultsForBET": {
                            "hasChildrenErrors": false
                        },
                        "overrideSTEbehavior": false,
                        "type": "physical"
                    }
                ],
                "disableSTEs": false,
                "dsdId": "248126306118",
                "id": 248126306118,
                "layers": [
                    {
                        "id": 143967096512,
                        "ownerId": 80834785681,
                        "participatingItems": [
                            {
                                "id": 1177625186196,
                                "ownerId": 80834785681,
                                "isMultiValue": false,
                                "item": {
                                    "TYPE": "GeneralEntity",
                                    "DATA": {
                                        "dsdId": "931801392236",
                                        "id": 931801392236,
                                        "nslAttributes": [
                                            {
                                                "dsdId": "545793212352",
                                                "id": 545793212352,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Status",
                                                "displayName": "Status",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            }
                                        ],
                                        "entityProperties": {
                                            "isGlobal": "true"
                                        },
                                        "isReserved": false,
                                        "ownerId": 80834785681,
                                        "canDownload": false,
                                        "dsdMetadataId": "f531c881-1382-4975-8fdd-85d0edd8bd15",
                                        "exportDesignSystem": true,
                                        "naqResultsForBET": {
                                            "hasChildrenErrors": false
                                        },
                                        "name": "Health System Client Database",
                                        "displayName": "Health Organization Details",
                                        "source": "CANVAS",
                                        "masterId": 408933023441,
                                        "version": "6.0",
                                        "status": "PUBLISHED",
                                        "isNameUpdated": false,
                                        "attachments": [],
                                        "minAge": 0,
                                        "maxAge": 0,
                                        "editable": false,
                                        "approvalStatus": "UnAssigned"
                                    }
                                },
                                "changeDriverMetaData": {
                                    "changeDriverType": "OPTIONAL"
                                },
                                "isInPotentiality": false,
                                "triggerConditionalPotentiality": false,
                                "isPlaceholder": false
                            }
                        ],
                        "naqResultsForBET": {
                            "hasChildrenErrors": false
                        },
                        "overrideSTEbehavior": false,
                        "type": "physical"
                    }
                ],
                "gsiList": [],
                "isFaceted": false,
                "agents": [
                    {
                        "agentType": "machine"
                    }
                ],
                "membershipList": [],
                "isReserved": false,
                "reservedCUType": "",
                "propertiesMap": {
                    "currentTime": [],
                    "customizedIds": [],
                    "specialFeatures": [],
                    "measures": [],
                    "NSL_User": [],
                    "currentDateTime": [],
                    "optionalAlternative": [],
                    "defaultValues": [],
                    "currentDate": [],
                    "currency": []
                },
                "cuSystemProperties": {
                    "betStoreTCULayer": "true"
                },
                "ownerId": 80834785681,
                "designTimeRights": [],
                "txnTimeRights": [],
                "querySentence": "{\"physical\":[{\"token\":\"NSL Admin\",\"tag\":1,\"tf_id\":\"\u003cagents TF ID\u003e\",\"dsd_id\":\"\u003cagents DSD ID\u003e\"},{\"token\":\"or\",\"tag\":0,\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Mx CRM\",\"tag\":1,\"tf_id\":\"\u003cagents TF ID\u003e\",\"dsd_id\":\"\u003cagents DSD ID\u003e\"},{\"token\":\"Get this path if status is absent\",\"tag\":4,\"tf_id\":\"\u003ccu TF ID\u003e\",\"dsd_id\":\"625601279758\"},{\"token\":\"using\",\"tag\":0,\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Health System Client Database\",\"tag\":5,\"entity_counter\":0,\"tf_id\":\"\u003centity1 TF ID\u003e\",\"dsd_id\":\"931801392236\"},{\"token\":\"such as\",\"tag\":0,\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Status\",\"tag\":6,\"entity_counter\":0,\"attribute_counter\":0,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\".\",\"tag\":0,\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"}],\"information\":[],\"nested_response\":{}}",
                "dsdMetadataId": "b644aa67-4c63-4b50-a711-9563e9aadc59",
                "exportDesignSystem": true,
                "naqResultsForBET": {
                    "hasChildrenErrors": false
                },
                "name": "Get this path if status is absent",
                "displayName": "Get this path if status is absent",
                "description": "Get this path if status is absent",
                "source": "CANVAS",
                "masterId": 625601279758,
                "version": "1.0",
                "status": "PUBLISHED",
                "isNameUpdated": false,
                "attachments": [],
                "minAge": 0,
                "maxAge": 0,
                "editable": false,
                "approvalStatus": "UnAssigned"
            },
            {
                "condition": "PL.SL001.EN931801392236.AT545793212352 IN REALITY",
                "conditionName": "PL.SL001.Health System Client Database.Status IN REALITY",
                "index": 77,
                "dcd": [],
                "nextTriggerSet": [
                    {
                        "index": 4,
                        "nextCUId": 240798752206,
                        "dsdNextCUId": "240798752206",
                        "nextCUName": "Display Health System Client",
                        "isParallel": false
                    }
                ],
                "entityDesignRights": {},
                "referencedChangeUnit": 2047670682533,
                "attributeDesignRights": {},
                "dsdReferencedChangeUnit": "2047670682533",
                "isParallel": false,
                "exceptionCUList": [],
                "slotItemProperties": {},
                "entityTransactionRights": {},
                "tCUConditionalPotentiality": [],
                "pathwaysCountFromCurrentCU": 2141599193,
                "nestedOutgoingDCDs": {},
                "eventCUList": [],
                "tCUConditionalPotentialityNames": [],
                "cuType": "BASIC",
                "attributeTransactionRights": {},
                "mindCUList": [],
                "tCUsentenceName": "{\"physical\":[{\"token\":\"NSL Admin\",\"tag\":\"Hum.\",\"tf_id\":\"\u003cagents TF ID\u003e\",\"dsd_id\":\"\u003cagents DSD ID\u003e\"},{\"token\":\"or\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Mx CRM\",\"tag\":\"Hum.\",\"tf_id\":\"\u003cagents TF ID\u003e\",\"dsd_id\":\"\u003cagents DSD ID\u003e\"},{\"token\":\"Get this path if status is present\",\"tag\":\"Int.\",\"tf_id\":\"\u003ccu TF ID\u003e\",\"dsd_id\":\"2047670682533\"},{\"token\":\"using\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Health System Client Database\",\"tag\":\"Obj.\",\"entity_counter\":0,\"tf_id\":\"\u003centity1 TF ID\u003e\",\"dsd_id\":\"931801392236\"},{\"token\":\"such as\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Status\",\"tag\":\"Att.\",\"entity_counter\":0,\"attribute_counter\":0,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\".\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"}],\"information\":[],\"nested_response\":{}}",
                "triggerCULayers": [
                    {
                        "participatingItems": [
                            {
                                "id": 2040909607293,
                                "isMultiValue": false,
                                "item": {
                                    "TYPE": "GeneralEntity",
                                    "DATA": {
                                        "dsdId": "931801392236",
                                        "id": 931801392236,
                                        "nslAttributes": [
                                            {
                                                "dsdId": "545793212352",
                                                "id": 545793212352,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "contextualId": [
                                                    "physical.slot:1.Health System Client Database.Status",
                                                    "PL.SL001.Health System Client Database.Status",
                                                    "PL.SL001.EN931801392236.AT545793212352",
                                                    "GS936334308510.CU717093099406_2047670682533.PL.SL001.EN931801392236.AT545793212352"
                                                ],
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Status",
                                                "displayName": "Status",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            }
                                        ],
                                        "entityProperties": {
                                            "isGlobal": "true"
                                        },
                                        "isReserved": false,
                                        "ownerId": 80834785681,
                                        "canDownload": false,
                                        "dsdMetadataId": "f531c881-1382-4975-8fdd-85d0edd8bd15",
                                        "exportDesignSystem": true,
                                        "naqResultsForBET": {
                                            "hasChildrenErrors": false
                                        },
                                        "name": "Health System Client Database",
                                        "displayName": "Health Organization Details",
                                        "source": "CANVAS",
                                        "masterId": 408933023441,
                                        "version": "6.0",
                                        "status": "PUBLISHED",
                                        "isNameUpdated": false,
                                        "attachments": [],
                                        "minAge": 0,
                                        "maxAge": 0,
                                        "editable": false,
                                        "approvalStatus": "UnAssigned"
                                    }
                                },
                                "changeDriverMetaData": {
                                    "changeDriverType": "OPTIONAL"
                                },
                                "isInPotentiality": false,
                                "triggerConditionalPotentiality": false,
                                "isPlaceholder": false
                            }
                        ],
                        "naqResultsForBET": {
                            "hasChildrenErrors": false
                        },
                        "overrideSTEbehavior": false,
                        "type": "physical"
                    }
                ],
                "disableSTEs": false,
                "dsdId": "717093099406",
                "id": 717093099406,
                "layers": [
                    {
                        "id": 819684493930,
                        "ownerId": 80834785681,
                        "participatingItems": [
                            {
                                "id": 2040909607293,
                                "ownerId": 80834785681,
                                "isMultiValue": false,
                                "item": {
                                    "TYPE": "GeneralEntity",
                                    "DATA": {
                                        "dsdId": "931801392236",
                                        "id": 931801392236,
                                        "nslAttributes": [
                                            {
                                                "dsdId": "545793212352",
                                                "id": 545793212352,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Status",
                                                "displayName": "Status",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            }
                                        ],
                                        "entityProperties": {
                                            "isGlobal": "true"
                                        },
                                        "isReserved": false,
                                        "ownerId": 80834785681,
                                        "canDownload": false,
                                        "dsdMetadataId": "f531c881-1382-4975-8fdd-85d0edd8bd15",
                                        "exportDesignSystem": true,
                                        "naqResultsForBET": {
                                            "hasChildrenErrors": false
                                        },
                                        "name": "Health System Client Database",
                                        "displayName": "Health Organization Details",
                                        "source": "CANVAS",
                                        "masterId": 408933023441,
                                        "version": "6.0",
                                        "status": "PUBLISHED",
                                        "isNameUpdated": false,
                                        "attachments": [],
                                        "minAge": 0,
                                        "maxAge": 0,
                                        "editable": false,
                                        "approvalStatus": "UnAssigned"
                                    }
                                },
                                "changeDriverMetaData": {
                                    "changeDriverType": "OPTIONAL"
                                },
                                "isInPotentiality": false,
                                "triggerConditionalPotentiality": false,
                                "isPlaceholder": false
                            }
                        ],
                        "naqResultsForBET": {
                            "hasChildrenErrors": false
                        },
                        "overrideSTEbehavior": false,
                        "type": "physical"
                    }
                ],
                "gsiList": [],
                "isFaceted": false,
                "agents": [
                    {
                        "agentType": "machine"
                    }
                ],
                "membershipList": [],
                "isReserved": false,
                "reservedCUType": "",
                "propertiesMap": {
                    "currentTime": [],
                    "customizedIds": [],
                    "specialFeatures": [],
                    "measures": [],
                    "NSL_User": [],
                    "currentDateTime": [],
                    "optionalAlternative": [],
                    "defaultValues": [],
                    "currentDate": [],
                    "currency": []
                },
                "cuSystemProperties": {
                    "betStoreTCULayer": "true"
                },
                "ownerId": 80834785681,
                "designTimeRights": [],
                "txnTimeRights": [],
                "querySentence": "{\"physical\":[{\"token\":\"NSL Admin\",\"tag\":1,\"tf_id\":\"\u003cagents TF ID\u003e\",\"dsd_id\":\"\u003cagents DSD ID\u003e\"},{\"token\":\"or\",\"tag\":0,\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Mx CRM\",\"tag\":1,\"tf_id\":\"\u003cagents TF ID\u003e\",\"dsd_id\":\"\u003cagents DSD ID\u003e\"},{\"token\":\"Get this path if status is present\",\"tag\":4,\"tf_id\":\"\u003ccu TF ID\u003e\",\"dsd_id\":\"2047670682533\"},{\"token\":\"using\",\"tag\":0,\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Health System Client Database\",\"tag\":5,\"entity_counter\":0,\"tf_id\":\"\u003centity1 TF ID\u003e\",\"dsd_id\":\"931801392236\"},{\"token\":\"such as\",\"tag\":0,\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Status\",\"tag\":6,\"entity_counter\":0,\"attribute_counter\":0,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\".\",\"tag\":0,\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"}],\"information\":[],\"nested_response\":{}}",
                "dsdMetadataId": "e6a752eb-9253-4ce8-87b6-5339df1cd6cd",
                "exportDesignSystem": true,
                "naqResultsForBET": {
                    "hasChildrenErrors": false
                },
                "name": "Get this path if status is present",
                "displayName": "Get this path if status is present",
                "description": "Get this path if status is present",
                "source": "CANVAS",
                "masterId": 2047670682533,
                "version": "1.0",
                "status": "PUBLISHED",
                "isNameUpdated": false,
                "attachments": [],
                "minAge": 0,
                "maxAge": 0,
                "editable": false,
                "approvalStatus": "UnAssigned"
            },
            {
                "index": 78,
                "dcd": [],
                "nextTriggerSet": [],
                "entityDesignRights": {},
                "referencedChangeUnit": 2130191204444,
                "attributeDesignRights": {},
                "dsdReferencedChangeUnit": "2130191204444",
                "isParallel": false,
                "exceptionCUList": [],
                "slotItemProperties": {
                    "PL_SL001": {
                        "propertyData": {
                            "CONSTANT": {
                                "id": 1088584243827,
                                "cuLayer": "physical",
                                "slotItemIndex": 0,
                                "changeDriverData": {
                                    "TYPE": "TxnGeneralEntity",
                                    "DATA": {
                                        "name": "Show the Note for Absent Status",
                                        "dsdId": "913461150376",
                                        "generalEntityID": 913461150376,
                                        "transEntityRecords": [
                                            {
                                                "txnNslAttribute": [
                                                    {
                                                        "name": "Note",
                                                        "dsdId": "1512547380915",
                                                        "nslAttributeID": 1512547380915,
                                                        "values": [
                                                            "There are currently no health organizations for this status"
                                                        ],
                                                        "properties": [
                                                            "CONSTANT"
                                                        ]
                                                    }
                                                ]
                                            }
                                        ],
                                        "properties": [
                                            "CONSTANT"
                                        ]
                                    }
                                }
                            }
                        }
                    }
                },
                "entityTransactionRights": {},
                "tCUConditionalPotentiality": [],
                "slotItemData": {
                    "519437912365": {
                        "propertyData": {
                            "CONSTANT": 1088584243827
                        }
                    }
                },
                "pathwaysCountFromCurrentCU": 0,
                "nestedOutgoingDCDs": {},
                "eventCUList": [],
                "tCUConditionalPotentialityNames": [],
                "cuType": "BASIC",
                "attributeTransactionRights": {},
                "mindCUList": [],
                "tCUsentenceName": "{\"physical\":[{\"token\":\"NSL Admin\",\"tag\":\"Hum.\",\"tf_id\":\"\u003cagents TF ID\u003e\",\"dsd_id\":\"\u003cagents DSD ID\u003e\"},{\"token\":\"or\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Mx CRM\",\"tag\":\"Hum.\",\"tf_id\":\"\u003cagents TF ID\u003e\",\"dsd_id\":\"\u003cagents DSD ID\u003e\"},{\"token\":\"Show the Note for Absent Status\",\"tag\":\"Int.\",\"tf_id\":\"\u003ccu TF ID\u003e\",\"dsd_id\":\"2130191204444\"},{\"token\":\"using\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Show the Note for Absent Status\",\"tag\":\"Obj.\",\"entity_counter\":0,\"tf_id\":\"\u003centity1 TF ID\u003e\",\"dsd_id\":\"913461150376\"},{\"token\":\"such as\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Note\",\"tag\":\"Att.\",\"entity_counter\":0,\"attribute_counter\":0,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\".\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"}],\"information\":[],\"nested_response\":{}}",
                "triggerCULayers": [
                    {
                        "participatingItems": [
                            {
                                "id": 519437912365,
                                "isMultiValue": false,
                                "item": {
                                    "TYPE": "GeneralEntity",
                                    "DATA": {
                                        "dsdId": "913461150376",
                                        "id": 913461150376,
                                        "nslAttributes": [
                                            {
                                                "dsdId": "1512547380915",
                                                "id": 1512547380915,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "nslAttributeProperties": {
                                                    "isTraceable": "false"
                                                },
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "contextualId": [
                                                    "physical.slot:1.Show the Note for Absent Status.Note",
                                                    "PL.SL001.Show the Note for Absent Status.Note",
                                                    "PL.SL001.EN913461150376.AT1512547380915",
                                                    "GS936334308510.CU231533854039_2130191204444.PL.SL001.EN913461150376.AT1512547380915"
                                                ],
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Note",
                                                "displayName": "Note",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            }
                                        ],
                                        "isReserved": false,
                                        "ownerId": 80834785681,
                                        "canDownload": false,
                                        "dsdMetadataId": "012915fc-14ad-4054-a40a-7b28c4dcbb8b",
                                        "exportDesignSystem": true,
                                        "naqResultsForBET": {
                                            "hasChildrenErrors": false
                                        },
                                        "name": "Show the Note for Absent Status",
                                        "displayName": "Show the Note for Absent Status",
                                        "source": "CANVAS",
                                        "masterId": 913461150376,
                                        "version": "1.0",
                                        "status": "PUBLISHED",
                                        "isNameUpdated": true,
                                        "attachments": [],
                                        "minAge": 0,
                                        "maxAge": 0,
                                        "editable": false,
                                        "approvalStatus": "UnAssigned"
                                    }
                                },
                                "changeDriverMetaData": {
                                    "changeDriverType": "OPTIONAL"
                                },
                                "isInPotentiality": false,
                                "triggerConditionalPotentiality": false,
                                "isPlaceholder": false
                            }
                        ],
                        "naqResultsForBET": {
                            "hasChildrenErrors": false
                        },
                        "overrideSTEbehavior": false,
                        "type": "physical"
                    }
                ],
                "disableSTEs": false,
                "dsdId": "231533854039",
                "id": 231533854039,
                "layers": [
                    {
                        "id": 1462505365551,
                        "ownerId": 80834785681,
                        "participatingItems": [
                            {
                                "id": 519437912365,
                                "ownerId": 80834785681,
                                "isMultiValue": false,
                                "item": {
                                    "TYPE": "GeneralEntity",
                                    "DATA": {
                                        "dsdId": "913461150376",
                                        "id": 913461150376,
                                        "nslAttributes": [
                                            {
                                                "dsdId": "1512547380915",
                                                "id": 1512547380915,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "isReserved": false,
                                                "nslAttributeProperties": {
                                                    "isTraceable": "false"
                                                },
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "ownerId": 80834785681,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "Note",
                                                "displayName": "Note",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            }
                                        ],
                                        "isReserved": false,
                                        "ownerId": 80834785681,
                                        "canDownload": false,
                                        "dsdMetadataId": "012915fc-14ad-4054-a40a-7b28c4dcbb8b",
                                        "exportDesignSystem": true,
                                        "naqResultsForBET": {
                                            "hasChildrenErrors": false
                                        },
                                        "name": "Show the Note for Absent Status",
                                        "displayName": "Show the Note for Absent Status",
                                        "source": "CANVAS",
                                        "masterId": 913461150376,
                                        "version": "1.0",
                                        "status": "PUBLISHED",
                                        "isNameUpdated": true,
                                        "attachments": [],
                                        "minAge": 0,
                                        "maxAge": 0,
                                        "editable": false,
                                        "approvalStatus": "UnAssigned"
                                    }
                                },
                                "changeDriverMetaData": {
                                    "changeDriverType": "OPTIONAL"
                                },
                                "isInPotentiality": false,
                                "triggerConditionalPotentiality": false,
                                "isPlaceholder": false
                            }
                        ],
                        "naqResultsForBET": {
                            "hasChildrenErrors": false
                        },
                        "overrideSTEbehavior": false,
                        "type": "physical"
                    }
                ],
                "gsiList": [],
                "isFaceted": false,
                "agents": [
                    {
                        "agentType": "human"
                    }
                ],
                "membershipList": [],
                "isReserved": false,
                "reservedCUType": "",
                "propertiesMap": {
                    "currentTime": [],
                    "customizedIds": [],
                    "specialFeatures": [],
                    "measures": [],
                    "NSL_User": [],
                    "currentDateTime": [],
                    "optionalAlternative": [],
                    "defaultValues": [],
                    "currentDate": [],
                    "currency": []
                },
                "cuSystemProperties": {
                    "betStoreTCULayer": "true"
                },
                "ownerId": 80834785681,
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
                "querySentence": "{\"physical\":[{\"token\":\"NSL Admin\",\"tag\":1,\"tf_id\":\"\u003cagents TF ID\u003e\",\"dsd_id\":\"\u003cagents DSD ID\u003e\"},{\"token\":\"or\",\"tag\":0,\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Mx CRM\",\"tag\":1,\"tf_id\":\"\u003cagents TF ID\u003e\",\"dsd_id\":\"\u003cagents DSD ID\u003e\"},{\"token\":\"Show the Note for Absent Status\",\"tag\":4,\"tf_id\":\"\u003ccu TF ID\u003e\",\"dsd_id\":\"2130191204444\"},{\"token\":\"using\",\"tag\":0,\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Show the Note for Absent Status\",\"tag\":5,\"entity_counter\":0,\"tf_id\":\"\u003centity1 TF ID\u003e\",\"dsd_id\":\"913461150376\"},{\"token\":\"such as\",\"tag\":0,\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Note\",\"tag\":6,\"entity_counter\":0,\"attribute_counter\":0,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\".\",\"tag\":0,\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"}],\"information\":[],\"nested_response\":{}}",
                "dsdMetadataId": "ad66ef5b-c3a5-4a3b-b0d4-b1f248bf6695",
                "exportDesignSystem": true,
                "naqResultsForBET": {
                    "hasChildrenErrors": false
                },
                "name": "Show the Note for Absent Status",
                "displayName": "Note",
                "description": "Authenticate Health System Client",
                "source": "CANVAS",
                "masterId": 2130191204444,
                "version": "1.0",
                "status": "PUBLISHED",
                "isNameUpdated": false,
                "attachments": [],
                "minAge": 0,
                "maxAge": 0,
                "editable": false,
                "approvalStatus": "UnAssigned"
            },
            {
                "index": 80,
                "dcd": [
                    {
                        "sourceContextualId": "Authenticate Health System Client.Show case for reject:80.physical.slot:1.case id Dummy.case id",
                        "sourceContextualName": "Authenticate Health System Client.Show case for reject:80.physical.slot:1.case id Dummy.case id",
                        "targetContextualId": "Related for rejected new subscription.Get basic for related:1.physical.slot:1.Case Request.Case ID",
                        "targetContextualName": "Related for rejected new subscription.Get basic for related:1.physical.slot:1.Case Request.Case ID",
                        "formula": "PL.SL001.case id Dummy.case id",
                        "formulaName": "PL.SL001.case id Dummy.case id",
                        "event": "ARRIVAL",
                        "multiValueMode": "APPEND",
                        "isInDCDGroup": false,
                        "id": 633049518222,
                        "guid": "cf43f2f5-a38b-469e-86b7-3c21e95f6b03",
                        "ownerId": 1802959306829,
                        "createdAt": 1707223302008,
                        "createdBy": 1802959306829,
                        "updatedAt": 1707974276649,
                        "updatedBy": 1802959306829
                    }
                ],
                "nextTriggerSet": [
                    {
                        "index": 30,
                        "nextCUId": 1020110137387,
                        "dsdNextCUId": "1020110137387",
                        "nextCUName": "How Would You Like To Proceed MxCRM",
                        "isParallel": false
                    }
                ],
                "entityDesignRights": {},
                "referencedChangeUnit": 1539632995495,
                "attributeDesignRights": {},
                "dsdReferencedChangeUnit": "1539632995495",
                "isParallel": false,
                "exceptionCUList": [],
                "slotItemProperties": {},
                "entityTransactionRights": {},
                "tCUConditionalPotentiality": [],
                "pathwaysCountFromCurrentCU": -538342026,
                "nestedOutgoingDCDs": {},
                "eventCUList": [],
                "tCUConditionalPotentialityNames": [],
                "cuType": "BASIC",
                "attributeTransactionRights": {},
                "mindCUList": [],
                "tCUsentenceName": "{\"physical\":[{\"token\":\"NSL Admin\",\"tag\":\"Hum.\",\"tf_id\":\"\u003cagents TF ID\u003e\",\"dsd_id\":\"\u003cagents DSD ID\u003e\"},{\"token\":\"or\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Mx CRM\",\"tag\":\"Hum.\",\"tf_id\":\"\u003cagents TF ID\u003e\",\"dsd_id\":\"\u003cagents DSD ID\u003e\"},{\"token\":\"Show case for reject\",\"tag\":\"Int.\",\"tf_id\":\"\u003ccu TF ID\u003e\",\"dsd_id\":\"1539632995495\"},{\"token\":\"using\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"case id Dummy\",\"tag\":\"Obj.\",\"entity_counter\":0,\"tf_id\":\"\u003centity1 TF ID\u003e\",\"dsd_id\":\"594925012770\"},{\"token\":\"such as\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"case id\",\"tag\":\"Att.\",\"entity_counter\":0,\"attribute_counter\":0,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\".\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"}],\"information\":[],\"nested_response\":{}}",
                "triggerCULayers": [
                    {
                        "participatingItems": [
                            {
                                "id": 509928641884,
                                "isMultiValue": false,
                                "item": {
                                    "TYPE": "GeneralEntity",
                                    "DATA": {
                                        "dsdId": "594925012770",
                                        "id": 594925012770,
                                        "nslAttributes": [
                                            {
                                                "dsdId": "1148546154193",
                                                "id": 1148546154193,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "defaultValue": "FLT0019-123",
                                                "isReserved": false,
                                                "nslAttributeProperties": {
                                                    "isTraceable": "false"
                                                },
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "contextualId": [
                                                    "physical.slot:1.case id Dummy.case id",
                                                    "PL.SL001.case id Dummy.case id",
                                                    "PL.SL001.EN594925012770.AT1148546154193",
                                                    "GS936334308510.CU1656642271200_1539632995495.PL.SL001.EN594925012770.AT1148546154193"
                                                ],
                                                "ownerId": 431729033790,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "case id",
                                                "displayName": "case id",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            }
                                        ],
                                        "entityProperties": {
                                            "isGlobal": "true"
                                        },
                                        "isReserved": false,
                                        "ownerId": 431729033790,
                                        "canDownload": false,
                                        "dsdMetadataId": "9a8482a9-b648-44aa-be58-916e8fb84329",
                                        "exportDesignSystem": true,
                                        "naqResultsForBET": {
                                            "hasChildrenErrors": false
                                        },
                                        "name": "case id Dummy",
                                        "displayName": "case id Dummy",
                                        "source": "CANVAS",
                                        "masterId": 594925012770,
                                        "version": "1.0",
                                        "status": "PUBLISHED",
                                        "isNameUpdated": true,
                                        "attachments": [],
                                        "minAge": 0,
                                        "maxAge": 0,
                                        "editable": false,
                                        "approvalStatus": "UnAssigned"
                                    }
                                },
                                "changeDriverMetaData": {
                                    "changeDriverType": "OPTIONAL"
                                },
                                "isInPotentiality": false,
                                "triggerConditionalPotentiality": false,
                                "isPlaceholder": false
                            }
                        ],
                        "naqResultsForBET": {
                            "hasChildrenErrors": false
                        },
                        "overrideSTEbehavior": false,
                        "type": "physical"
                    }
                ],
                "disableSTEs": false,
                "dsdId": "1656642271200",
                "id": 1656642271200,
                "layers": [
                    {
                        "id": 945449675756,
                        "ownerId": 431729033790,
                        "participatingItems": [
                            {
                                "id": 509928641884,
                                "ownerId": 431729033790,
                                "isMultiValue": false,
                                "item": {
                                    "TYPE": "GeneralEntity",
                                    "DATA": {
                                        "dsdId": "594925012770",
                                        "id": 594925012770,
                                        "nslAttributes": [
                                            {
                                                "dsdId": "1148546154193",
                                                "id": 1148546154193,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "defaultValue": "FLT0019-123",
                                                "isReserved": false,
                                                "nslAttributeProperties": {
                                                    "isTraceable": "false"
                                                },
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "ownerId": 431729033790,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "case id",
                                                "displayName": "case id",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            }
                                        ],
                                        "entityProperties": {
                                            "isGlobal": "true"
                                        },
                                        "isReserved": false,
                                        "ownerId": 431729033790,
                                        "canDownload": false,
                                        "dsdMetadataId": "9a8482a9-b648-44aa-be58-916e8fb84329",
                                        "exportDesignSystem": true,
                                        "naqResultsForBET": {
                                            "hasChildrenErrors": false
                                        },
                                        "name": "case id Dummy",
                                        "displayName": "case id Dummy",
                                        "source": "CANVAS",
                                        "masterId": 594925012770,
                                        "version": "1.0",
                                        "status": "PUBLISHED",
                                        "isNameUpdated": true,
                                        "attachments": [],
                                        "minAge": 0,
                                        "maxAge": 0,
                                        "editable": false,
                                        "approvalStatus": "UnAssigned"
                                    }
                                },
                                "changeDriverMetaData": {
                                    "changeDriverType": "OPTIONAL"
                                },
                                "isInPotentiality": false,
                                "triggerConditionalPotentiality": false,
                                "isPlaceholder": false
                            }
                        ],
                        "naqResultsForBET": {
                            "hasChildrenErrors": false
                        },
                        "overrideSTEbehavior": false,
                        "type": "physical"
                    }
                ],
                "gsiList": [],
                "isFaceted": false,
                "agents": [
                    {
                        "agentType": "machine"
                    }
                ],
                "membershipList": [],
                "isReserved": false,
                "reservedCUType": "",
                "propertiesMap": {
                    "currentTime": [],
                    "customizedIds": [],
                    "specialFeatures": [],
                    "measures": [],
                    "NSL_User": [],
                    "currentDateTime": [],
                    "optionalAlternative": [],
                    "defaultValues": [
                        {
                            "participatingLayer": "physical",
                            "entityAttributeKey": "case id Dummy.case id",
                            "entityAttributeIdKey": "EN594925012770.AT1148546154193",
                            "slotIndex": 0,
                            "attributeType": "string",
                            "isMultiValueSlot": false
                        }
                    ],
                    "currentDate": [],
                    "currency": []
                },
                "cuSystemProperties": {
                    "betStoreTCULayer": "true"
                },
                "ownerId": 431729033790,
                "designTimeRights": [],
                "txnTimeRights": [],
                "querySentence": "{\"physical\":[{\"token\":\"NSL Admin\",\"tag\":1,\"tf_id\":\"\u003cagents TF ID\u003e\",\"dsd_id\":\"\u003cagents DSD ID\u003e\"},{\"token\":\"or\",\"tag\":0,\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Mx CRM\",\"tag\":1,\"tf_id\":\"\u003cagents TF ID\u003e\",\"dsd_id\":\"\u003cagents DSD ID\u003e\"},{\"token\":\"Show case for reject\",\"tag\":4,\"tf_id\":\"\u003ccu TF ID\u003e\",\"dsd_id\":\"1539632995495\"},{\"token\":\"using\",\"tag\":0,\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"case id Dummy\",\"tag\":5,\"entity_counter\":0,\"tf_id\":\"\u003centity1 TF ID\u003e\",\"dsd_id\":\"594925012770\"},{\"token\":\"such as\",\"tag\":0,\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"case id\",\"tag\":6,\"entity_counter\":0,\"attribute_counter\":0,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\".\",\"tag\":0,\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"}],\"information\":[],\"nested_response\":{}}",
                "dsdMetadataId": "247e7764-6978-4169-a328-954a56b9db73",
                "exportDesignSystem": true,
                "naqResultsForBET": {
                    "hasChildrenErrors": false
                },
                "name": "Show case for reject",
                "displayName": "Show case for reject",
                "description": "clone health org authentication",
                "source": "CANVAS",
                "masterId": 1539632995495,
                "version": "1.0",
                "status": "PUBLISHED",
                "isNameUpdated": false,
                "attachments": [],
                "minAge": 0,
                "maxAge": 0,
                "editable": false,
                "approvalStatus": "UnAssigned"
            },
            {
                "solutionLogic": [],
                "constrainedToReportingTree": false,
                "constrainedToTeam": false,
                "allowPreviouCUView": false,
                "isNavigableCu": false,
                "enableBot": false,
                "isGSILayerBasedRecursion": false,
                "preRecursiveConditionCheck": false,
                "condition": "",
                "conditionName": "",
                "index": 68,
                "dcd": [],
                "nextTriggerSet": [
                    {
                        "index": 80,
                        "nextCUId": 1656642271200,
                        "dsdNextCUId": "1656642271200",
                        "nextCUName": "Show case for reject",
                        "isParallel": false
                    }
                ],
                "entityDesignRights": {},
                "referencedChangeUnit": 536024609655,
                "attributeDesignRights": {},
                "dsdReferencedChangeUnit": "536024609655",
                "isParallel": false,
                "exceptionCUList": [],
                "entityTransactionRights": {},
                "pathwaysCountFromCurrentCU": 0,
                "eventCUList": [],
                "cuType": "GSI",
                "attributeTransactionRights": {},
                "mindCUList": [],
                "disableSTEs": false,
                "dsdId": "1526336794644",
                "id": 1526336794644,
                "layers": [],
                "gsiList": [],
                "isFaceted": false,
                "agents": [
                    {
                        "agentType": "human"
                    }
                ],
                "isReserved": false,
                "cuSystemProperties": {},
                "ownerId": 1802959306829,
                "designTimeRights": [],
                "txnTimeRights": [],
                "dsdMetadataId": "972fe3f6-e59a-4809-99b6-a06fdf376a4c",
                "exportDesignSystem": true,
                "naqResultsForBET": {
                    "hasChildrenErrors": false
                },
                "name": "Reject Health System Subscription",
                "displayName": "Reject Health System Subscription",
                "description": "",
                "source": "CANVAS",
                "masterId": 728483609448,
                "version": "27.0",
                "status": "PUBLISHED",
                "isNameUpdated": false,
                "attachments": [],
                "minAge": 0,
                "maxAge": 0,
                "editable": false,
                "approvalStatus": "UnAssigned"
            },
            {
                "index": 81,
                "dcd": [
                    {
                        "sourceContextualId": "Authenticate Health System Client.Show case for contract:81.physical.slot:1.case id Dummy.case id",
                        "sourceContextualName": "Authenticate Health System Client.Show case for contract:81.physical.slot:1.case id Dummy.case id",
                        "targetContextualId": "Realted for active subscription.Get basic for related:1.physical.slot:1.Case Request.Case ID",
                        "targetContextualName": "Realted for active subscription.Get basic for related:1.physical.slot:1.Case Request.Case ID",
                        "formula": "PL.SL001.case id Dummy.case id",
                        "formulaName": "PL.SL001.case id Dummy.case id",
                        "event": "ARRIVAL",
                        "multiValueMode": "APPEND",
                        "isInDCDGroup": false,
                        "id": 2023738104699,
                        "guid": "ccbbc383-421b-47ff-9b33-b7f4a2c45938",
                        "ownerId": 1802959306829,
                        "createdAt": 1707223302008,
                        "createdBy": 1802959306829,
                        "updatedAt": 1707974276649,
                        "updatedBy": 1802959306829
                    }
                ],
                "nextTriggerSet": [
                    {
                        "index": 30,
                        "nextCUId": 1020110137387,
                        "dsdNextCUId": "1020110137387",
                        "nextCUName": "How Would You Like To Proceed MxCRM",
                        "isParallel": false
                    }
                ],
                "entityDesignRights": {},
                "referencedChangeUnit": 172322174134,
                "attributeDesignRights": {},
                "dsdReferencedChangeUnit": "172322174134",
                "isParallel": false,
                "exceptionCUList": [],
                "slotItemProperties": {},
                "entityTransactionRights": {},
                "tCUConditionalPotentiality": [],
                "pathwaysCountFromCurrentCU": -538342026,
                "nestedOutgoingDCDs": {},
                "eventCUList": [],
                "tCUConditionalPotentialityNames": [],
                "cuType": "BASIC",
                "attributeTransactionRights": {},
                "mindCUList": [],
                "tCUsentenceName": "{\"physical\":[{\"token\":\"NSL Admin\",\"tag\":\"Hum.\",\"tf_id\":\"\u003cagents TF ID\u003e\",\"dsd_id\":\"\u003cagents DSD ID\u003e\"},{\"token\":\"or\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Mx CRM\",\"tag\":\"Hum.\",\"tf_id\":\"\u003cagents TF ID\u003e\",\"dsd_id\":\"\u003cagents DSD ID\u003e\"},{\"token\":\"Show case for contract\",\"tag\":\"Int.\",\"tf_id\":\"\u003ccu TF ID\u003e\",\"dsd_id\":\"172322174134\"},{\"token\":\"using\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"case id Dummy\",\"tag\":\"Obj.\",\"entity_counter\":0,\"tf_id\":\"\u003centity1 TF ID\u003e\",\"dsd_id\":\"594925012770\"},{\"token\":\"such as\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"case id\",\"tag\":\"Att.\",\"entity_counter\":0,\"attribute_counter\":0,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\".\",\"tag\":\"nlg\",\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"}],\"information\":[],\"nested_response\":{}}",
                "triggerCULayers": [
                    {
                        "participatingItems": [
                            {
                                "id": 2114602336768,
                                "isMultiValue": false,
                                "item": {
                                    "TYPE": "GeneralEntity",
                                    "DATA": {
                                        "dsdId": "594925012770",
                                        "id": 594925012770,
                                        "nslAttributes": [
                                            {
                                                "dsdId": "1148546154193",
                                                "id": 1148546154193,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "defaultValue": "FLT0019-123",
                                                "isReserved": false,
                                                "nslAttributeProperties": {
                                                    "isTraceable": "false"
                                                },
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "contextualId": [
                                                    "physical.slot:1.case id Dummy.case id",
                                                    "PL.SL001.case id Dummy.case id",
                                                    "PL.SL001.EN594925012770.AT1148546154193",
                                                    "GS936334308510.CU818029472568_172322174134.PL.SL001.EN594925012770.AT1148546154193"
                                                ],
                                                "ownerId": 431729033790,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "case id",
                                                "displayName": "case id",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            }
                                        ],
                                        "entityProperties": {
                                            "isGlobal": "true"
                                        },
                                        "isReserved": false,
                                        "ownerId": 431729033790,
                                        "canDownload": false,
                                        "dsdMetadataId": "9a8482a9-b648-44aa-be58-916e8fb84329",
                                        "exportDesignSystem": true,
                                        "naqResultsForBET": {
                                            "hasChildrenErrors": false
                                        },
                                        "name": "case id Dummy",
                                        "displayName": "case id Dummy",
                                        "source": "CANVAS",
                                        "masterId": 594925012770,
                                        "version": "1.0",
                                        "status": "PUBLISHED",
                                        "isNameUpdated": true,
                                        "attachments": [],
                                        "minAge": 0,
                                        "maxAge": 0,
                                        "editable": false,
                                        "approvalStatus": "UnAssigned"
                                    }
                                },
                                "changeDriverMetaData": {
                                    "changeDriverType": "OPTIONAL"
                                },
                                "isInPotentiality": false,
                                "triggerConditionalPotentiality": false,
                                "isPlaceholder": false
                            }
                        ],
                        "naqResultsForBET": {
                            "hasChildrenErrors": false
                        },
                        "overrideSTEbehavior": false,
                        "type": "physical"
                    }
                ],
                "disableSTEs": false,
                "dsdId": "818029472568",
                "id": 818029472568,
                "layers": [
                    {
                        "id": 1149437987405,
                        "ownerId": 431729033790,
                        "participatingItems": [
                            {
                                "id": 2114602336768,
                                "ownerId": 431729033790,
                                "isMultiValue": false,
                                "item": {
                                    "TYPE": "GeneralEntity",
                                    "DATA": {
                                        "dsdId": "594925012770",
                                        "id": 594925012770,
                                        "nslAttributes": [
                                            {
                                                "dsdId": "1148546154193",
                                                "id": 1148546154193,
                                                "attributeType": {
                                                    "type": "string",
                                                    "properties": {},
                                                    "extendedProperties": {
                                                        "sourceValues": []
                                                    }
                                                },
                                                "constraints": [],
                                                "defaultValue": "FLT0019-123",
                                                "isReserved": false,
                                                "nslAttributeProperties": {
                                                    "isTraceable": "false"
                                                },
                                                "isInPotentiality": false,
                                                "triggerConditionalPotentiality": false,
                                                "ownerId": 431729033790,
                                                "canDownload": false,
                                                "exportDesignSystem": true,
                                                "naqResultsForBET": {
                                                    "hasChildrenErrors": false
                                                },
                                                "name": "case id",
                                                "displayName": "case id",
                                                "source": "CANVAS",
                                                "status": "DRAFT",
                                                "isNameUpdated": true,
                                                "attachments": [],
                                                "minAge": 0,
                                                "maxAge": 0,
                                                "editable": false,
                                                "approvalStatus": "UnAssigned"
                                            }
                                        ],
                                        "entityProperties": {
                                            "isGlobal": "true"
                                        },
                                        "isReserved": false,
                                        "ownerId": 431729033790,
                                        "canDownload": false,
                                        "dsdMetadataId": "9a8482a9-b648-44aa-be58-916e8fb84329",
                                        "exportDesignSystem": true,
                                        "naqResultsForBET": {
                                            "hasChildrenErrors": false
                                        },
                                        "name": "case id Dummy",
                                        "displayName": "case id Dummy",
                                        "source": "CANVAS",
                                        "masterId": 594925012770,
                                        "version": "1.0",
                                        "status": "PUBLISHED",
                                        "isNameUpdated": true,
                                        "attachments": [],
                                        "minAge": 0,
                                        "maxAge": 0,
                                        "editable": false,
                                        "approvalStatus": "UnAssigned"
                                    }
                                },
                                "changeDriverMetaData": {
                                    "changeDriverType": "OPTIONAL"
                                },
                                "isInPotentiality": false,
                                "triggerConditionalPotentiality": false,
                                "isPlaceholder": false
                            }
                        ],
                        "naqResultsForBET": {
                            "hasChildrenErrors": false
                        },
                        "overrideSTEbehavior": false,
                        "type": "physical"
                    }
                ],
                "gsiList": [],
                "isFaceted": false,
                "agents": [
                    {
                        "agentType": "machine"
                    }
                ],
                "membershipList": [],
                "isReserved": false,
                "reservedCUType": "",
                "propertiesMap": {
                    "currentTime": [],
                    "customizedIds": [],
                    "specialFeatures": [],
                    "measures": [],
                    "NSL_User": [],
                    "currentDateTime": [],
                    "optionalAlternative": [],
                    "defaultValues": [
                        {
                            "participatingLayer": "physical",
                            "entityAttributeKey": "case id Dummy.case id",
                            "entityAttributeIdKey": "EN594925012770.AT1148546154193",
                            "slotIndex": 0,
                            "attributeType": "string",
                            "isMultiValueSlot": false
                        }
                    ],
                    "currentDate": [],
                    "currency": []
                },
                "cuSystemProperties": {
                    "betStoreTCULayer": "true"
                },
                "ownerId": 431729033790,
                "designTimeRights": [],
                "txnTimeRights": [],
                "querySentence": "{\"physical\":[{\"token\":\"NSL Admin\",\"tag\":1,\"tf_id\":\"\u003cagents TF ID\u003e\",\"dsd_id\":\"\u003cagents DSD ID\u003e\"},{\"token\":\"or\",\"tag\":0,\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"Mx CRM\",\"tag\":1,\"tf_id\":\"\u003cagents TF ID\u003e\",\"dsd_id\":\"\u003cagents DSD ID\u003e\"},{\"token\":\"Show case for contract\",\"tag\":4,\"tf_id\":\"\u003ccu TF ID\u003e\",\"dsd_id\":\"172322174134\"},{\"token\":\"using\",\"tag\":0,\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"case id Dummy\",\"tag\":5,\"entity_counter\":0,\"tf_id\":\"\u003centity1 TF ID\u003e\",\"dsd_id\":\"594925012770\"},{\"token\":\"such as\",\"tag\":0,\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"},{\"token\":\"case id\",\"tag\":6,\"entity_counter\":0,\"attribute_counter\":0,\"tf_id\":\"\u003cattr 1.1 TF ID\u003e\",\"dsd_id\":\"\u003cattr 1.1 DSD ID\u003e\"},{\"token\":\".\",\"tag\":0,\"tf_id\":\"n/a\",\"dsd_id\":\"n/a\"}],\"information\":[],\"nested_response\":{}}",
                "dsdMetadataId": "247e7764-6978-4169-a328-954a56b9db73",
                "exportDesignSystem": true,
                "naqResultsForBET": {
                    "hasChildrenErrors": false
                },
                "name": "Show case for contract",
                "displayName": "Show case for contract",
                "description": "clone health org authentication",
                "source": "CANVAS",
                "masterId": 172322174134,
                "version": "1.0",
                "status": "PUBLISHED",
                "isNameUpdated": false,
                "attachments": [],
                "minAge": 0,
                "maxAge": 0,
                "editable": false,
                "approvalStatus": "UnAssigned"
            },
            {
                "solutionLogic": [],
                "constrainedToReportingTree": false,
                "constrainedToTeam": false,
                "allowPreviouCUView": false,
                "isNavigableCu": false,
                "enableBot": false,
                "isGSILayerBasedRecursion": false,
                "preRecursiveConditionCheck": false,
                "condition": "",
                "conditionName": "",
                "index": 73,
                "dcd": [],
                "nextTriggerSet": [
                    {
                        "index": 81,
                        "nextCUId": 818029472568,
                        "dsdNextCUId": "818029472568",
                        "nextCUName": "Show case for contract",
                        "isParallel": false
                    }
                ],
                "entityDesignRights": {},
                "referencedChangeUnit": 1068616041477,
                "attributeDesignRights": {},
                "dsdReferencedChangeUnit": "1068616041477",
                "isParallel": false,
                "exceptionCUList": [],
                "entityTransactionRights": {},
                "pathwaysCountFromCurrentCU": 0,
                "eventCUList": [],
                "cuType": "GSI",
                "attributeTransactionRights": {},
                "mindCUList": [],
                "disableSTEs": false,
                "dsdId": "423563865915",
                "id": 423563865915,
                "layers": [],
                "gsiList": [],
                "isFaceted": false,
                "agents": [
                    {
                        "agentType": "human"
                    }
                ],
                "isReserved": false,
                "cuSystemProperties": {},
                "ownerId": 1802959306829,
                "designTimeRights": [],
                "txnTimeRights": [],
                "dsdMetadataId": "970a38bb-af4f-4e4e-be26-bd34844cb794",
                "exportDesignSystem": true,
                "naqResultsForBET": {
                    "hasChildrenErrors": false
                },
                "name": "Smart Contract For Health System Client",
                "displayName": "Smart Contract For Health System Client",
                "description": "",
                "source": "CANVAS",
                "masterId": 1109402928460,
                "version": "64.0",
                "status": "PUBLISHED",
                "isNameUpdated": false,
                "attachments": [],
                "minAge": 0,
                "maxAge": 0,
                "editable": false,
                "approvalStatus": "UnAssigned"
            },
            {
                "solutionLogic": [],
                "constrainedToReportingTree": false,
                "constrainedToTeam": false,
                "allowPreviouCUView": false,
                "isNavigableCu": false,
                "enableBot": false,
                "isGSILayerBasedRecursion": false,
                "preRecursiveConditionCheck": false,
                "condition": "",
                "conditionName": "",
                "index": 82,
                "dcd": [],
                "nextTriggerSet": [
                    {
                        "index": 30,
                        "nextCUId": 1020110137387,
                        "dsdNextCUId": "1020110137387",
                        "nextCUName": "How Would You Like To Proceed MxCRM",
                        "isParallel": false
                    }
                ],
                "entityDesignRights": {},
                "referencedChangeUnit": 384830749576,
                "attributeDesignRights": {},
                "dsdReferencedChangeUnit": "384830749576",
                "isParallel": false,
                "exceptionCUList": [],
                "entityTransactionRights": {},
                "pathwaysCountFromCurrentCU": 0,
                "eventCUList": [],
                "cuType": "GSI",
                "attributeTransactionRights": {},
                "mindCUList": [],
                "disableSTEs": false,
                "dsdId": "1748847593590",
                "id": 1748847593590,
                "layers": [],
                "gsiList": [],
                "isFaceted": false,
                "agents": [
                    {
                        "agentType": "human"
                    }
                ],
                "isReserved": false,
                "cuSystemProperties": {},
                "ownerId": 1802959306829,
                "designTimeRights": [],
                "txnTimeRights": [],
                "dsdMetadataId": "786d371a-74f8-4bd0-842a-93ac30429346",
                "exportDesignSystem": true,
                "naqResultsForBET": {
                    "hasChildrenErrors": false
                },
                "name": "Preview Health System Client Details",
                "displayName": "Preview Health System Client Details",
                "description": "",
                "source": "CANVAS",
                "masterId": 1572838958458,
                "version": "49.0",
                "status": "PUBLISHED",
                "isNameUpdated": false,
                "attachments": [],
                "minAge": 0,
                "maxAge": 0,
                "editable": false,
                "approvalStatus": "UnAssigned"
            }
        ],
        "constrainedToReportingTree": false,
        "constrainedToTeam": false,
        "allowPreviouCUView": false,
        "isNavigableCu": false,
        "enableBot": false,
        "constraint": "PL.SL001.Review Another Case MxCRM.Action \u003d\u003d \u0027Yes\u0027",
        "constraintName": "PL.SL001.Review Another Case MxCRM.Action \u003d\u003d \u0027Yes\u0027",
        "isGSILayerBasedRecursion": false,
        "preRecursiveConditionCheck": false,
        "condition": "",
        "conditionName": "",
        "index": 0,
        "dcd": [],
        "nextTriggerSet": [],
        "entityDesignRights": {},
        "attributeDesignRights": {},
        "isParallel": false,
        "exceptionCUList": [],
        "entityTransactionRights": {},
        "pathwaysCountFromCurrentCU": 0,
        "eventCUList": [],
        "cuType": "GSI",
        "attributeTransactionRights": {},
        "mindCUList": [],
        "disableSTEs": false,
        "dsdId": "936334308510",
        "id": 936334308510,
        "layers": [
            {
                "id": 1489567910048,
                "ownerId": 1802959306829,
                "participatingItems": [
                    {
                        "id": 480254216467,
                        "ownerId": 1802959306829,
                        "isMultiValue": false,
                        "item": {
                            "TYPE": "GeneralEntity",
                            "DATA": {
                                "dsdId": "894852368498",
                                "id": 894852368498,
                                "nslAttributes": [
                                    {
                                        "dsdId": "1215945199577",
                                        "id": 1215945199577,
                                        "attributeType": {
                                            "type": "string",
                                            "properties": {},
                                            "uiElement": {
                                                "name": "Drop_Down",
                                                "displayName": "Drop Down",
                                                "dataType": "string",
                                                "uiElement": "dropdown",
                                                "isMulti": true,
                                                "esDataType": "string",
                                                "defaultUiElement": false
                                            },
                                            "extendedProperties": {
                                                "sourceValues": [
                                                    {
                                                        "TYPE": "OptionValue",
                                                        "DATA": {
                                                            "actualValue": "Yes",
                                                            "displayValue": "Yes",
                                                            "count": 0
                                                        }
                                                    },
                                                    {
                                                        "TYPE": "OptionValue",
                                                        "DATA": {
                                                            "actualValue": "No",
                                                            "displayValue": "No",
                                                            "count": 0
                                                        }
                                                    }
                                                ]
                                            }
                                        },
                                        "constraints": [],
                                        "isReserved": false,
                                        "isInPotentiality": false,
                                        "triggerConditionalPotentiality": false,
                                        "contextualId": [
                                            "physical.slot:1.Authenticate Another Health System Client.Action",
                                            "PL.SL001.Authenticate Another Health System Client.Action",
                                            "PL.SL001.EN894852368498.AT1215945199577"
                                        ],
                                        "ownerId": 80834785681,
                                        "canDownload": false,
                                        "exportDesignSystem": true,
                                        "naqResultsForBET": {
                                            "hasChildrenErrors": false
                                        },
                                        "name": "Action",
                                        "displayName": "Action",
                                        "source": "CANVAS",
                                        "status": "DRAFT",
                                        "isNameUpdated": true,
                                        "attachments": [],
                                        "minAge": 0,
                                        "maxAge": 0,
                                        "editable": false,
                                        "approvalStatus": "UnAssigned"
                                    }
                                ],
                                "isReserved": false,
                                "ownerId": 80834785681,
                                "canDownload": false,
                                "dsdMetadataId": "9a12a504-253d-4626-b5e8-9a9dd72f9fd8",
                                "exportDesignSystem": true,
                                "naqResultsForBET": {
                                    "hasChildrenErrors": false
                                },
                                "name": "Authenticate Another Health System Client",
                                "displayName": "Authenticate Another Health System Client",
                                "source": "CANVAS",
                                "masterId": 894852368498,
                                "version": "1.0",
                                "status": "PUBLISHED",
                                "isNameUpdated": true,
                                "attachments": [],
                                "minAge": 0,
                                "maxAge": 0,
                                "editable": false,
                                "approvalStatus": "UnAssigned"
                            }
                        },
                        "isInPotentiality": false,
                        "triggerConditionalPotentiality": false,
                        "isPlaceholder": false
                    }
                ],
                "naqResultsForBET": {
                    "hasChildrenErrors": false
                },
                "overrideSTEbehavior": false,
                "type": "physical"
            }
        ],
        "gsiList": [],
        "isFaceted": false,
        "agents": [
            {
                "agentType": "human"
            }
        ],
        "isReserved": false,
        "cuSystemProperties": {},
        "ownerId": 1802959306829,
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
        "tenant": {
            "id": "medaxiomstb",
            "name": "medaxiomstb"
        },
        "dsdMetadataId": "55abb9b9-18c2-4188-be95-aefc499975ae",
        "exportDesignSystem": true,
        "naqResultsForBET": {
            "hasChildrenErrors": false
        },
        "name": "Authenticate Health System Client",
        "displayName": "Authenticate Health Organization Client",
        "description": "Authenticate Health Organization Client",
        "source": "CANVAS",
        "masterId": 980973205354,
        "version": "126.0",
        "status": "DRAFT",
        "isNameUpdated": false,
        "ontology": [
            {
                "id": "common",
                "name": "common",
                "displayName": "Common",
                "level": 1,
                "isValidated": false
            }
        ],
        "attachments": [],
        "publisher": {
            "id": "medaxiomstb",
            "name": "medaxiomstb"
        },
        "author": {
            "id": "1802959306829",
            "name": "mxcrm1pruat@gmail.com",
            "email": [
                "mxcrm1pruat@gmail.com"
            ]
        },
        "minAge": 0,
        "maxAge": 0,
        "editable": false,
        "approvalStatus": "UnAssigned"
    }
}