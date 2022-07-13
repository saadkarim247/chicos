class BillingDetails {
  constructor(
    obj
  ) {
    this.firstName = obj.firstName;
    this.lastName = obj.lastName;
    this.email = obj.email;
    this.addressLine1 = obj.addressLine1;
    this.addressLine2 = obj.addressLine2;
    this.city = obj.city;
    this.state = obj.state;
    this.country = obj.country;
    this.zip = obj.zip;
    this.phone = obj.phone;
  }

  get_firstName() {
    return this.firstName || "";
  }
  get_lastName() {
    return this.lastName || "";
  }
  get_email() {
    return this.email || "";
  }
  get_addressLine1() {
    return this.addressLine1 || "";
  }
  get_addressLine2() {
    return this.addressLine2 || "";
  }
  get_city() {
    return this.city || "";
  }
  get_country() {
    return this.country || "";
  }
  get_zip() {
    return this.zip || "";
  }
  get_phone() {
    return this.phone || "";
  }
}

export default BillingDetails;