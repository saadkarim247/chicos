import Audit from "../Authorize/audit.mjs";
import Attributes_Void from "./attributes/attributes.mjs";
class Void {
  constructor(obj) {
    this.amount = obj.amount;
    this.audit = new Audit(obj.audit);
    this.channel = obj.channel;
    this.currencyCode = obj.currencyCode;
    this.customerId = obj.customerId;
    this.locale = obj.locale;
    this.orderId = obj.orderId;
    this.orderNumber = obj.orderNumber;
    this.orderSource = obj.orderSource;
    this.paymentId = obj.paymentId;
    this.paymentMethod = obj.paymentMethod;
    this.paymentType = obj.paymentType;
    this.siteId = obj.siteId;
    this.transactionId = obj.transactionId;
    this.transactionTimestamp = obj.transactionTimestamp;
    this.attributes = new Attributes_Void(obj.attributes);
  }
}

export default Void;

// const testobj = {
//     "amount": 0,
//     "audit": {
//     "source": "string",
//     "traceId": "string"
//     },
//     "channel": "string",
//     "currencyCode": "string",
//     "customerId": "string",
//     "locale": "string",
//     "orderId": "string",
//     "orderNumber": "string",
//     "orderSource": "string",
//     "paymentId": "string",
//     "paymentMethod": "string",
//     "paymentType": "string",
//     "siteId": "string",
//     "transactionId": "string",
//     "transactionTimestamp": "string",
//     "attributes": {
//     "_comment": "Fields related to amazon",
//     "amazonOrderReferanceId": "string",
//     "_comment1": "Fields related to credit card",
//     "cnpTxnId": "string",
//     "_comment2": "Fields related to gift card",
//     "paymentRequests": [
//     {
//     "transactionId": "string",
//     "paymentId": "string",
//     "gatewaySettings": {
//     "paymentMethodTypes": "string"
//     },
//     "cardDetails": {
//     "giftCardNumber": "string",
//     "giftCardPin": "string"
//     },
//     "amount": "string",
//     "transactionTimestamp": "string",
//     "paymentMethod": "string",
//     "gatewayId": "string"
//     }
//     ],
//     "_comment3": "Fields related to afterPay card",
//     "afterPayOrderNumber": "string"
//     }
//    }
   
// const createVoid = async() => {
//     const test = await new Void(testobj);
//     console.log(test);
//     }
// createVoid();