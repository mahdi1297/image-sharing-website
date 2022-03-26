import express from "express";

/**
 * @desc    This file contain Success and Error response for sending to client / user
 * @author  Mahdi Alipoor
 * @param   {object | array} express Response Handler
 * @param   {string} message the message will be shown to client
 * @param   {object | any} result or data will be shown to client
 * @param   {number | null} count length of result
 */
export default class ResponseHandler {
  statusCode: number;
  message: string;
  result: any;
  count: number = 0;

  Ok(res: any, message: string, result: any, count?: number) {
    this.statusCode = 200;
    this.message = message;
    this.result = result;
    this.count = count;

    res
      .status(this.statusCode)
      .json({ status: this.statusCode, message, result, count });
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
