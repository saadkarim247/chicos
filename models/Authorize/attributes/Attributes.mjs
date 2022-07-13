import PaymentRequests from "./paymentRequests/paymentRequests.mjs";

class Attributes {
  constructor(
    obj
  ) {
    this._comment = obj._comment;
    this.amazonOrderReferenceId = obj.amazonOrderReferenceId;
    this.authorizationCurrencyCode = obj.authorizationCurrencyCode;
    this.authorizationReferenceId = obj.authorizationReferenceId;
    this.captureNow = obj.captureNow;
    this.sellerAuthorizationNote = obj.sellerAuthorizationNote;
    this.softDescriptor = obj.softDescriptor;
    this.transactionTimeout = obj.transactionTimeout;
    this._comment1 = obj._comment1;
    this.accountNumber = obj.accountNumber;
    this.cardType = obj.cardType;
    this.checkoutId = obj.checkoutId;
    this.expirationDate = obj.expirationDate;
    this.omniToken = obj.omniToken;
    this.orderSource = obj.orderSource;
    this.payPageRegId = obj.payPageRegId;
    this._comment2 = obj._comment2;
    this.paymentRequests = [];
    obj.paymentRequests.forEach(element => {
      this.paymentRequests.push(new PaymentRequests(element))
    })
    this._comment3 = obj._comment3;
    this.token = obj.token;
  }

  get_amazonOrderReferenceId() {
    return this.amazonOrderReferenceId || "";
  }
  get_authorizationCurrencyCode() {
    return this.authorizationCurrencyCode || "";
  }
  get_authorizationReferenceId() {
    return this.authorizationReferenceId || "";
  }
  get_captureNow() {
    return this.captureNow || "";
  }
  get_sellerAuthorizationNote() {
    return this.sellerAuthorizationNote || "";
  }
  get_softDescriptor() {
    return this.softDescriptor || "";
  }
  get_transactionTimeout() {
    return this.transactionTimeout || "";
  }
  get_accountNumber() {
    return this.accountNumber || "";
  }
  get_cardType() {
    return this.cardType || "";
  }
  get_checkoutId() {
    return this.checkoutId || "";
  }
  get_expirationDate() {
    return this.expirationDate || "";
  }
  get_omniToken() {
    return this.omniToken || "";
  }
  get_orderSource() {
    return this.orderSource || "";
  }
  get_payPageRegId() {
    return this.payPageRegId || "";
  }
  get_paymentRequests() {
    return this.paymentRequests || "";
  }
  get_token() {
    return this.token || "";
  }
}

export default Attributes;