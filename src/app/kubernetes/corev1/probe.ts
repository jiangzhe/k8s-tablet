import { ExecAction } from "./exec-action";
import { HttpGetAction } from "./http-get-action";
import { TCPSocketAction } from "./tcp-socket-action";

export interface Probe {
  exec: ExecAction;
  httpGet: HttpGetAction;
  tcpSocket: TCPSocketAction;
  initialDelaySeconds: number;
  timeoutSeconds: number;
  periodSeconds: number;
  successThreshold: number;
  failureThreshold: number;
}