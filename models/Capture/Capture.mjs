//Capture requests model
import Audit from "../Authorize/audit.mjs";
import Attributes_Capture from "./attributes/attributes.mjs";
class Capture {
  constructor(obj) {
    this.amount = obj.amount;
    this.audit = new Audit(obj.audit);
    this.channel = obj.channel;
    this.currencyCode = obj.currencyCode;
    this.customerId = obj.customerId;
    this.locale = obj.locale;
    this.orderId = obj.orderId;
    this.orderNumber = obj.orderNumber;
    this.partialCapture = obj.partialCapture;
    this.paymentType = obj.paymentType;
    this.paymentMethod = obj.paymentMethod;
    this.siteId = obj.siteId;
    this.settlementId = obj.settlementId;
    this.transactionId = obj.transactionId;
    this.attributes = new Attributes_Capture(obj.attributes);
  }

  get_amount() {
    return this.amount || "";
  }
  get_audit() {
    return this.audit || "";
  }
  get_authorizationAmount() {
    return this.authorizationAmount || "";
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
  get_locale() {
    return this.locale || "";
  }
  get_orderId() {
    return this.orderId || "";
  }
  get_orderNumber() {
    return this.orderNumber || "";
  }
  get_partialCapture() {
    return this.partialCapture || "";
  }
  get_paymentType() {
    return this.paymentType || "";
  }
  get_paymentMethod() {
    return this.paymentMethod || "";
  }
  get_siteId() {
    return this.siteId || "";
  }
  get_settlementId() {
    return this.settlementId || "";
  }
  get_transactionId() {
    return this.transactionId || "";
  }
  get_attributes() {
    return this.attributes || "";
  }
}

export default Capture;

// const testobj2 = {
//   "amount": 0,
//   "audit": {
//   "source": "string",
//   "traceId": "string"
//   },
//   "channel": "string",
//   "currencyCode": "string",
//   "customerId": "string",
//   "locale": "string",
//   "orderId": "string",
//   "orderNumber": "string",
//   "partialCapture": "string",
//   "paymentType": "string",
//   "paymentMethod": "string",
//   "siteId": "string",
//   "settlementId": "string",
//   "transactionId": "string",
//   "attributes": {
//   "_comment": "Fields related to amazon",
//   "amazonAuthorizationId": "string",
//   "amazonOrderReferenceId": "string",
//   "authorizationReferenceId": "string",
//   "authorizedAmount": "string",
//   "captureAmount": "string",
//   "captureCurrencyCode": "string",
//   "captureReferenceId": "string",
//   "sellerAuthorizationNote": "string",
//   "sellerCaptureNote": "string",
//   "softDescriptor": "string",
//   "transactionTimeout": "string",
//   "_comment2": "Fields related to gift card",
//   "paymentRequests": [
//   {
//   "transactionId": "string",
//   "paymentId": "string",
//   "customProperties": {
//   "invoiceNumber": "string",
//   "authCode": "string"
//   },
//   "gatewaySettings": {
//   "paymentMethodTypes": "string"
//   },
//   "cardDetails": {
//   "giftCardNumber": "string",
//   "giftCardPin": "string"
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

// const createCapture = async() => {
//   const test = await new Capture(testobj2);
//   console.log(test);
//   }
  
//   createCapture();