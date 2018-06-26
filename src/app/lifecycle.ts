import { Handler } from "./handler";

export class Lifecycle {
  constructor(
    public postStart: Handler,
    public preStop: Handler
  ) {}
}