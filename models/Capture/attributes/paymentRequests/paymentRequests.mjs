import cardDetails_Capture from "./cardDetails.mjs";
import CustomProperties from "./customProperties.mjs";
import gatewaySettings_Capture from "./gatewaySettings.mjs";
class PaymentRequests_Capture {
  constructor(obj) {
    this.transactionId = obj.transactionId;
    this.paymentId = obj.paymentId;
    this.customProperties = new CustomProperties(obj.customProperties);
    this.gatewaySettings = new gatewaySettings_Capture(obj.gatewaySettings);
    this.cardDetails = new cardDetails_Capture(obj.cardDetails);
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
  get_customProperties() {
    return this.customProperties || "";
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

export default PaymentRequests_Capture;
