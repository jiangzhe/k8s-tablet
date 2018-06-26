import { PodDNSConfigOption } from "./pod-dns-config-option";

export class PodDNSConfig {
  constructor(
    public nameservers: string[],
    public searches: string[],
    public options: PodDNSConfigOption[]
  ) {}
}