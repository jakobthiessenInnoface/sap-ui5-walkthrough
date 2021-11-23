sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment"
], function(Controller, MessageToast, Fragment) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
        onShowHello: function() {
            // read message from i18n model
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sRecipient2 = this.getView().getModel().getProperty("/test/test1");
            var sMsg = oBundle.getText("helloMsg", [sRecipient, sRecipient2]);

            // Show message
            MessageToast.show(sMsg);
        },
        onOpenDialog: function() {
            this.getOwnerComponent().openHelloDialog();
        }
    });
});