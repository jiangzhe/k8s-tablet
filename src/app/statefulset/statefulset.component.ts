import { Component, OnInit } from '@angular/core';
import { StatefulSet } from '../kubernetes/appsv1beta1/stateful-set';
import { KubeService } from '../kube.service';
import { ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import * as jsyaml from 'js-yaml';

@Component({
  selector: 'app-statefulset',
  templateUrl: './statefulset.component.html',
  styleUrls: ['./statefulset.component.css']
})
export class StatefulsetComponent implements OnInit {
  current: StatefulSet;
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
    this.kubeService.getNamespacedStatefulSet(namespace, name)
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
