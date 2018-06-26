import { HTTPHeader } from "./http-header";

export class HttpGetAction {
  constructor(
    public path: string,
    public port: number | string,
    public host: string,
    public scheme: string,
    public httpHeaders: HTTPHeader[]
  ) {}
}