import { Component, OnInit } from '@angular/core';
import { Endpoints } from '../kubernetes/corev1/endpoints';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { KubeService } from '../kube.service';
import * as jsyaml from 'js-yaml';

@Component({
  selector: 'app-endpoint',
  templateUrl: './endpoint.component.html',
  styleUrls: ['./endpoint.component.css']
})
export class EndpointComponent implements OnInit {
  current: Endpoints;
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
    this.kubeService.getNamespacedEndpoints(namespace, name)
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
