import { PodDNSConfigOption } from "./pod-dns-config-option";

export interface PodDNSConfig {
  nameservers: string[];
  searches: string[];
  options: PodDNSConfigOption[];
}