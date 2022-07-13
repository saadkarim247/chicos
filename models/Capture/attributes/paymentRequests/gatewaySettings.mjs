class gatewaySettings_Capture {
  constructor(paymentMethodTypes) {
    this.paymentMethodTypes = paymentMethodTypes;
  }

  get_paymentMethodTypes() {
    return this.paymentMethodTypes || "";
  }
}
export default gatewaySettings_Capture;