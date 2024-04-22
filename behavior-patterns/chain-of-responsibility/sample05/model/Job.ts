export class Job {
  private details: string;

  constructor(details: string) {
    this.details = details;
  }

  requirements() {
    return this.details;
  }
}
