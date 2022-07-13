import cardDetails_Refund from "./cardDetails.mjs";

import gatewaySettings_Refund from "./gatewaySettings.mjs";
class PaymentRequests_Refund {
  constructor(obj) {
    this.transactionId = obj.transactionId;
    this.paymentId = obj.paymentId;
    this.invoiceNumber = obj.invoiceNumber;
    this.gatewaySettings = new gatewaySettings_Refund(obj.gatewaySettings);
    this.cardDetails = new cardDetails_Refund(obj.cardDetails);
    this.amount = obj.amount;
    this.transactionTimestamp = obj.transactionTimestamp;
    this.paymentMethod = obj.paymentMethod;
    this.gatewayId = obj.gatewayId;
  }

  get_transactionId() {
    return this.transactionId || "";
  }
  get_paymentId() {
    return this.paymentId || "";
  }
  get_invoiceNumber() {
    return this.invoiceNumber || "";
  }
  get_gatewaySettings() {
    return this.gatewaySettings || "";
  }
  get_cardDetails() {
    return this.cardDetails || "";
  }
  get_amount() {
    return this.amount || "";
  }
  get_transactionTimestamp() {
    return this.transactionTimestamp || "";
  }
  get_paymentMethod() {
    return this.paymentMethod || "";
  }
  get_gatewayId() {
    return this.gatewayId || "";
  }
}

export default PaymentRequests_Refund;
