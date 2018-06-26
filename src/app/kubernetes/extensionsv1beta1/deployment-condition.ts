export class DeploymentCondition {
  constructor(
    public type: string,
    public status: string,
    public lastUpdateTime: string,
    public lastTransactionTime: string,
    public reason: string,
    public message: string
  ) {}
}