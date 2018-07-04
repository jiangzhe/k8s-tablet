import { Component, OnInit } from '@angular/core';
import { DaemonSet } from '../kubernetes/extensionsv1beta1/daemon-set';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { KubeService } from '../kube.service';
import * as jsyaml from 'js-yaml';

@Component({
  selector: 'app-daemonset',
  templateUrl: './daemonset.component.html',
  styleUrls: ['./daemonset.component.css']
})
export class DaemonsetComponent implements OnInit {
  current: DaemonSet;
  format: string = KubeService.getDisplayFormat();
  currentJson: string;
  currentYaml: string;

  constructor(
    private route: ActivatedRoute, 
    private kubeService: KubeService,
    private location: Location,
  ) { }

  ngOnInit() {
    const namespace = this.route.snapshot.paramMap.get("namespace");
    const name = this.route.snapshot.paramMap.get("name");
    this.kubeService.getNamespacedDaemonSet(namespace, name)
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
