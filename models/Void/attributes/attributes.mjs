import PaymentRequests from "../../Authorize/attributes/paymentRequests/paymentRequests.mjs";
class Attributes_Void {
  constructor(obj) {
    this._comment = obj._comment;
    this.amazonOrderReferanceId = obj.amazonOrderReferanceId;
    this._comment1 = obj._comment1;
    this.cnpTxnId = obj.cnpTxnId;
    this._comment2 = obj._comment2;
    this.paymentRequests = [];
    obj.paymentRequests.forEach(element => this.paymentRequests.push(new PaymentRequests(element)));
    this._comment3 = obj._comment3;
    this.afterPayOrderNumber = obj.afterPayOrderNumber;
  }
}

export default Attributes_Void;