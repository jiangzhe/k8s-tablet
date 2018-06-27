import { Handler } from "./handler";

export interface Lifecycle {
  postStart: Handler;
  preStop: Handler;
}