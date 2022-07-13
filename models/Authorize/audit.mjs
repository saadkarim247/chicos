class Audit {
  constructor(obj) {
    this.source = obj.source;
    this.traceId = obj.traceId;
  }

  get_source() {
    return this.source || "";
  }
  get_traceId() {
    return this.traceId || "";
  }
}

export default Audit;