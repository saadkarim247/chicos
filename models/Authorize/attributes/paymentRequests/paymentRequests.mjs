import GatewaySettings from "./gatewaySettings.mjs";
import CardDetails from "./cardDetails.mjs";
class PaymentRequests {
  constructor(obj) {
    this.transactionId = obj.transactionId;
    this.paymentId = obj.paymentId;
    this.gatewaySettings = new GatewaySettings(obj.GatewaySettings);
    this.cardDetails = new CardDetails(obj.cardDetails);
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

export default PaymentRequests;
