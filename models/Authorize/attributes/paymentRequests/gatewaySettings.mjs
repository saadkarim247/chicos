class GatewaySettings {
  constructor(paymentMethodTypes) {
    this.paymentMethodTypes = paymentMethodTypes;
  }

  get_paymentMethodTypes() {
    return this.paymentMethodTypes || "";
  }
}

export default GatewaySettings;
