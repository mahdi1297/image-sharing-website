import express from "express";

/**
 * @desc    This file contain Success and Error response for sending to client / user
 * @author  Mahdi Alipoor
 * @param   {object | array} express Response Handler
 * @param   {string} message the message will be shown to client
 * @param   {object | any} result or data will be shown to client
 */
export default class ResponseHandler {
  statusCode: number;
  message: string;
  result: any;

  Ok(res: any, message: string, result: any) {
    this.statusCode = 200;
    this.message = message;
    this.result = result;

    res
      .status(this.statusCode)
      .json({ status: this.statusCode, message, result });
  }

  NotFound(res: any, message: string) {
    this.statusCode = 404;
    this.message = message;
    this.result = {};

    return res
      .status(this.statusCode)
      .json({ status: this.statusCode, message, result: this.result });
  }

  BadRequest(res: any, message: string) {
    this.statusCode = 400;
    this.message = message;
    this.result = {};

    return res
      .status(this.statusCode)
      .json({ status: this.statusCode, message, result: this.result });
  }
}
