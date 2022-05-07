// eslint-disable-next-line no-undef
sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.m.MessageToast} MessageToast 
 */
    function (Controller) {
        "use strict";
        return Controller.extend("smartformprint.controller.View1", {
            onInit: function () {
            },
            onSubmit: function () {
                // @ts-ignore
                var vbeln_val = this.getView().byId("idInp1").getValue();
                var opdfViewer = this.getView().byId("idPDF");
                // this.getView().addDependent(opdfViewer);
                var sServiceURL = "/sap/opu/odata/sap/ZSHREE_SF_SRV/";
                var sSource = sServiceURL + "soPrintSet('" + vbeln_val + "')/$value";
                // @ts-ignore
                opdfViewer.setSource(sSource);
                // @ts-ignore
                opdfViewer.setTitle("My PDF");
                // @ts-ignore
                // opdfViewer.open();
            }
        });
    });
