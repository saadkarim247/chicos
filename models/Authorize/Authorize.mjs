//Authorize Requests model
// import Audit from "./audit";
// import BillingDetails from "./billingDetails";
// import Attributes from "./attributes/attributes";

// const Attributes = require('./attributes/Attributes.mjs')
import Attributes from "./attributes/attributes.mjs";
import Audit from "./audit.mjs";
import BillingDetails from "./BillingDetails.mjs";

class Authorize {
  constructor(
    obj
  ) {
    this.amount = obj.amount;
    this.audit = new Audit(obj.audit);
    this.authorizationAmount = obj.authorizationAmount;
    this.channel = obj.channel;
    this.currencyCode = obj.currencyCode;
    this.customerId = obj.customerId;
    this.locale = obj.locale;
    this.orderId = obj.orderId;
    this.orderNumber = obj.orderNumber;
    this.paymentId = obj.paymentId;
    this.paymentType = obj.paymentType;
    this.siteId = obj.siteId;
    this.transactionId = obj.transactionId;
    this.billingDetails = new BillingDetails(obj.billingDetails);
    this.attributes = new Attributes(obj.attributes);
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
  get_paymentId() {
    return this.paymentId || "";
  }
  get_paymentType() {
    return this.paymentType || "";
  }
  get_siteId() {
    return this.siteId || "";
  }
  get_transactionId() {
    return this.transactionId || "";
  }
  get_billingDetails() {
    return this.billingDetails || "";
  }
  get_attributes() {
    return this.attributes || "";
  }
}

export default Authorize;


// const testobj = {
//     "amount": 0,
//  "audit": {
//  "source": "",
//  "traceId": ""
//  },
//  "authorizationAmount": "",
//  "channel": "",
//  "currencyCode": "",
//  "customerId": "",
//  "locale": "",
//  "orderId": "",
//  "orderNumber": "",
//  "paymentId": "",
//  "paymentType": "",
//  "siteId": "",
//  "transactionId": "",
//  "billingDetails": {
//  "firstName": "",
//  "lastName": "",
//  "email": "",
//  "addressLine1": "",
//  "addressLine2": "",
//  "city": "",
//  "state": "",
//  "country": "",
//  "zip": "",
//  "phone": ""
//  },
//  "attributes": {
//  "_comment": "Fields related to amazon",
//  "amazonOrderReferenceId": "",
//  "authorizationCurrencyCode": "",
//  "authorizationReferenceId": "",
//  "captureNow": "",
//  "sellerAuthorizationNote": "",
//  "softDescriptor": "",
//  "transactionTimeout": "",
//  "_comment1": "Fields related to credit card",
//  "accountNumber": "",
//  "cardType": "",
//  "checkoutId": "",
//  "expirationDate": "",
//  "omniToken": "",
//  "orderSource": "",
//  "payPageRegId": "",
//  "_comment2": "Fields related to gift card",
//  "paymentRequests": [
//  {
//  "transactionId": "string",
//  "paymentId": "string",
//  "gatewaySettings": {
//  "paymentMethodTypes": "string"
//  },
//  "cardDetails": {
//  "giftCardNumber": "string",
//  "giftCardPin": "string"
//  },
//  "amount": "string",
//  "transactionTimestamp": "string",
//  "paymentMethod": "string",
//  "gatewayId": "string"
//  }
//  ],
//  "_comment3": "Fields related to afterPay card",
//  "token": "string"
//  }

// }

// const createAuthorize = async() => {
//     const test = await new Authorize(testobj);
//     console.log(test);
//     }
    
//     createAuthorize();