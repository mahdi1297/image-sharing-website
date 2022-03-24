export class BaseError {
  message!: string;
  status!: number;
  result!: any;

  constructor(message: string, status: number = 500, result: any = {}) {
    this.status = status;
    this.message = message;
    this.result = result;
  }
}
