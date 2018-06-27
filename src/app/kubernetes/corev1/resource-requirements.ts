export interface ResourceRequirements {
  limits: {[name: string]: string | number};
  requests: {[name: string]: string | number};
}