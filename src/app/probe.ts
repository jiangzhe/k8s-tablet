import { ExecAction } from "./exec-action";
import { HttpGetAction } from "./http-get-action";
import { TCPSocketAction } from "./tcp-socket-action";

export class Probe {
  constructor(
    public exec: ExecAction,
    public httpGet: HttpGetAction,
    public tcpSocket: TCPSocketAction,
    public initialDelaySeconds: number,
    public timeoutSeconds: number,
    public periodSeconds: number,
    public successThreshold: number,
    public failureThreshold: number
  ) {}
}