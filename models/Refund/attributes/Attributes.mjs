import PaymentRequests_Refund from "./paymentRequests/paymentRequests.mjs";
class Attributes_Refund {
  constructor(obj) {
    this._comment = obj._comment;
    this.amazonCaptureId = obj.amazonCaptureId;
    this.invoiceNumber = obj.invoiceNumber;
    this.refundAmount = obj.refundAmount;
    this.refundCurrencyCode = obj.refundCurrencyCode;
    this.refundReferenceId = obj.refundReferenceId;
    this.sellerRefundNote = obj.sellerRefundNote;
    this.softDescriptor = obj.softDescriptor;
    this._comment2 = obj._comment2;
    this.paymentRequests = [];
    obj.paymentRequests.forEach(element => this.paymentRequests.push(new PaymentRequests_Refund(element)));
    this._comment3 = obj._comment3;
    this.afterPayOrderNumber = obj.afterPayOrderNumber;
  }

  get__comment() {
    return this._comment || "";
  }
  get_amazonCaptureId() {
    return this.amazonCaptureId || "";
  }
  get_invoiceNumber() {
    return this.invoiceNumber || "";
  }
  get_refundAmount() {
    return this.refundAmount || "";
  }
  get_refundCurrencyCode() {
    return this.refundCurrencyCode || "";
  }
  get_refundReferenceId() {
    return this.refundReferenceId || "";
  }
  get_sellerRefundNote() {
    return this.sellerRefundNote || "";
  }
  get_softDescriptor() {
    return this.softDescriptor || "";
  }
  get__comment2() {
    return this._comment2 || "";
  }
  get_paymentRequests() {
    return this.paymentRequests || "";
  }
  get__comment3() {
    return this._comment3 || "";
  }
  get_afterPayOrderNumber() {
    return this.afterPayOrderNumber || "";
  }
}

export default Attributes_Refund;
