import { Component, OnInit } from '@angular/core';
import { Deployment } from '../kubernetes/extensionsv1beta1/deployment';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { KubeService } from '../kube.service';
import * as jsyaml from 'js-yaml';

@Component({
  selector: 'app-deployment',
  templateUrl: './deployment.component.html',
  styleUrls: ['./deployment.component.css']
})
export class DeploymentComponent implements OnInit {
  current: Deployment;
  format: string = KubeService.getDisplayFormat();
  currentJson: string;
  currentYaml: string;

  constructor(
    private route: ActivatedRoute, 
    private kubeService: KubeService,
    private location: Location,
  ) { }

  ngOnInit() {
    console.log("enter deployment component");
    const namespace = this.route.snapshot.paramMap.get("namespace");
    const name = this.route.snapshot.paramMap.get("name");
    this.kubeService.getNamespacedDeployment(namespace, name)
      .subscribe(ss => {
        this.current = ss;
        this.currentJson = JSON.stringify(ss, null, 2);
        this.currentYaml = jsyaml.safeDump(ss, {indent: 2});
      });
  }

  text(): string {
    if (this.format === "json") {
      return this.currentJson;
    }
    return this.currentYaml;
  }

}
