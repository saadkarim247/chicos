class CardDetails {
  constructor(obj) {
    this.giftCardNumber = obj.giftCardNumber;
    this.giftCardPin = obj.giftCardPin;
  }

  get_giftCardNumber() {
    return this.giftCardNumber || "";
  }
  get_giftCardPin() {
    return this.giftCardPin || "";
  }
}

export default CardDetails;
