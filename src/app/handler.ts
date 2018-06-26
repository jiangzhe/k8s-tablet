import { ExecAction } from "./exec-action";
import { HttpGetAction } from "./http-get-action";
import { TCPSocketAction } from "./tcp-socket-action";

export class Handler {
  constructor(
    public exec: ExecAction,
    public httpGet: HttpGetAction,
    public tcpSocket: TCPSocketAction
  ) {}
}