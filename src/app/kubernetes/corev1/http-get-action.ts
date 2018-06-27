import { HTTPHeader } from "./http-header";

export interface HttpGetAction {
  path: string;
  port: number | string;
  host: string;
  scheme: string;
  httpHeaders: HTTPHeader[];
}