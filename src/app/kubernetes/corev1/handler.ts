import { ExecAction } from "./exec-action";
import { HttpGetAction } from "./http-get-action";
import { TCPSocketAction } from "./tcp-socket-action";

export interface Handler {
  exec: ExecAction;
  httpGet: HttpGetAction;
  tcpSocket: TCPSocketAction;
}