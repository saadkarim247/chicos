//Refund Requests model
import Audit from "../Authorize/audit.mjs";
import Attributes_Refund from "./attributes/Attributes.mjs";
class Refund {
  constructor(obj) {
    this.amount = obj.amount;
    this.audit = new Audit(obj.audit)
    this.channel = obj.channel;
    this.currencyCode = obj.currencyCode;
    this.customerId = obj.customerId;
    this.existingRefundedAmtforCaptureId = obj.existingRefundedAmtforCaptureId;
    this.locale = obj.locale;
    this.orderId = obj.orderId;
    this.orderNumber = obj.orderNumber;
    this.paymentId = obj.paymentId;
    this.paymentType = obj.paymentType;
    this.settlementId = obj.settlementId;
    this.siteId = obj.siteId;
    this.transactionId = obj.transactionId;
    this.transactionTimestamp = obj.transactionTimestamp;
    this.attributes = new Attributes_Refund(obj.attributes);
  }

  get_amount() {
    return this.amount || "";
  }
  get_audit() {
    return this.audit || "";
  }

  get_channel() {
    return this.channel || "";
  }
  get_currencyCode() {
    return this.currencyCode || "";
  }
  get_customerId() {
    return this.customerId || "";
  }
  get_existingRefundAmtforCaptureId() {
    return this.existingRefundedAmtforCaptureId || "";
  }
  get_locale() {
    return this.locale || "";
  }
  get_orderId() {
    return this.orderId || "";
  }
  get_orderNumber() {
    return this.orderNumber || "";
  }
  get_paymentId() {
    return this.paymentId || "";
  }
  get_paymentType() {
    return this.paymentType || "";
  }
  get_settlementId() {
    return this.settlementId || "";
  }
  get_siteId() {
    return this.siteId || "";
  }
  get_transactionId() {
    return this.transactionId || "";
  }
  get_transactionTimestamp() {
    return this.transactionTimestamp || "";
  }
  get_attributes() {
    return this.attributes || "";
  }
}

export default Refund;

// const testobj = {
//   "amount": 0,
//   "audit": {
//   "source": "string",
//   "traceId": "string"
//   },
//   "channel": "string",
//   "currencyCode": "string",
//   "customerId": "string",
//   "existingRefundedAmtforCaptureId": "string",
//   "locale": "string",
//   "orderId": "string",
//   "orderNumber": "string",
//   "paymentId": "string",
//   "paymentType": "string",
//   "settlementId": "string",
//   "siteId": "string",
//   "transactionId": "string",
//   "transactionTimestamp": "string",
//   "attributes": {
//   "_comment": "Fields related to amazon",
//   "amazonCaptureId": "string",
//   "invoiceNumber": "string",
//   "refundAmount": "string",
//   "refundCurrencyCode": "string",
//   "refundReferenceId": "string",
//   "sellerRefundNote": "string",
//   "softDescriptor": "string",
//   "_comment2": "Fields related to gift card",
//   "paymentRequests": [
//   {
//   "transactionId": "string",
//   "paymentId": "string",
//   "invoiceNumber": "string",
//   "gatewaySettings": {
//   "paymentMethodTypes": "string"
//   },
//   "cardDetails": {
//   "giftCardNumber": "string"
//   },
//   "amount": "string",
//   "transactionTimestamp": "string",
//   "paymentMethod": "string",
//   "gatewayId": "string"
//   }
//   ],
//   "_comment3": "Fields related to afterPay card",
//   "afterPayOrderNumber": "string"
//   }
//  }
 
// const createRefund = async() => {
//   const test = await new Refund(testobj);
//   console.log(test);
//   }
  
//   createRefund();