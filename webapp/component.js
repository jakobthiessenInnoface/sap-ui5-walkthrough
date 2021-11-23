sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel"
], function (UIComponent, JSONModel) {
    "use strict";
    return UIComponent.extend("sap.ui.walkthrough.Component", {
        metadata: {
            interfaces: ["sap.ui.core-IAsyncContentCreation"],
            manifest: "json"
        },
        init: function () {
            // call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);
            // set data models
            var oData = {
                recipient: {
                    name: "UI5",
                    name_2: "UI5 . 2"
                },
                test: {
                    test1: "test1",
                    test2: "test2"
                }
            };
            var oModel = new JSONModel(oData);
            this.setModel(oModel);
        }
    });
});