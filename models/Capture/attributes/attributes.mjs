import PaymentRequests_Capture from "./paymentRequests/paymentRequests.mjs";
class Attributes_Capture {
  constructor(obj) {
    this._comment = obj._comment;
    this.amazonAuthorizationId = obj.amazonAuthorizationId;
    this.amazonOrderReferenceId = obj.amazonOrderReferenceId;
    this.authorizationReferenceId = obj.authorizationReferenceId;
    this.authorizedAmount = obj.authorizedAmount;
    this.captureAmount = obj.captureAmount;
    this.captureCurrencyCode = obj.captureCurrencyCode;
    this.captureReferenceId = obj.captureReferenceId;
    this.sellerAuthorizationNote = obj.sellerAuthorizationNote;
    this.sellerCaptureNote = obj.sellerCaptureNote;
    this.softDescriptor = obj.softDescriptor;
    this.transactionTimeout = obj.transactionTimeout;
    this._comment2 = obj._comment2;
    this.paymentRequests = [];
    obj.paymentRequests.forEach((element) =>
      this.paymentRequests.push(new PaymentRequests_Capture(element))
    );
    this._comment3 = obj._comment3;
    this.afterPayOrderNumber = obj.afterPayOrderNumber;
  }

  get_amazonAuthorizationId() {
    return this.amazonAuthorizationId || "";
  }
  get_amazonOrderReferenceId() {
    return this.amazonOrderReferenceId || "";
  }
  get_authorizationReferenceId() {
    return this.authorizationReferenceId || "";
  }
  get_authorizedAmount() {
    return this.authorizedAmount || "";
  }
  get_captureAmount() {
    return this.captureAmount || "";
  }
  get_captureCurrencyCode() {
    return this.captureCurrencyCode || "";
  }
  get_captureReferenceId() {
    return this.captureReferenceId || "";
  }
  get_sellerAuthorizationNote() {
    return this.sellerAuthorizationNote || "";
  }
  get_sellerCaptureNote() {
    return this.sellerCaptureNote || "";
  }
  get_softDescriptor() {
    return this.softDescriptor || "";
  }
  get_transactionTimeout() {
    return this.transactionTimeout || "";
  }
  get_paymentRequests() {
    return this.paymentRequests || "";
  }
  get_afterPayOrderNumber() {
    return this.afterPayOrderNumber || "";
  }
}
export default Attributes_Capture;
