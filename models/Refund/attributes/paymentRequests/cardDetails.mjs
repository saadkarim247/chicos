class cardDetails_Refund {
  constructor(obj) {
    this.giftCardNumber = obj.giftCardNumber;
  }
  get_giftCardNumber() {
    return this.giftCardNumber || "";
  }
}

export default cardDetails_Refund;
