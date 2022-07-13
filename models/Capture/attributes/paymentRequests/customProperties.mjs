class CustomProperties {
  constructor(obj) {
    this.invoiceNumber = obj.invoiceNumber;
    this.authCode = obj.authCode;
  }

  get_invoiceNumber() {
    return this.invoiceNumber || "";
  }
  get_authCode() {
    return this.authCode || "";
  }
}

export default CustomProperties;