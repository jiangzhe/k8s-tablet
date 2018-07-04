import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { ConfigMap } from '../kubernetes/corev1/config-map';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { KubeService } from '../kube.service';
import * as jsyaml from 'js-yaml';
// import { HighlightJsService } from 'angular2-highlight-js';

@Component({
  selector: 'app-configmap',
  templateUrl: './configmap.component.html',
  styleUrls: ['./configmap.component.css']
})
export class ConfigmapComponent implements OnInit, AfterViewInit {
  current: ConfigMap;
  format: string = KubeService.getDisplayFormat();
  currentJson: string;
  currentYaml: string;

  constructor(
    private route: ActivatedRoute, 
    private kubeService: KubeService,
    private location: Location,
    // private highlightJsService: HighlightJsService,
    private el: ElementRef,
  ) { }

  ngOnInit() {
    const namespace = this.route.snapshot.paramMap.get("namespace");
    const name = this.route.snapshot.paramMap.get("name");
    this.kubeService.getNamespacedConfigMap(namespace, name)
      .subscribe(ss => {
        this.current = ss;
        this.currentJson = JSON.stringify(ss, null, 2);
        this.currentYaml = jsyaml.safeDump(ss, {indent: 2});
      });
  }

  ngAfterViewInit() {
    // this.highlightJsService.highlight(this.el.nativeElement.querySelector("code"));
  }

  // highlightByService(target: ElementRef) {
  //   this.highlightJsService.highlight(target);
  // }

  text(): string {
    if (this.format === "json") {
      return this.currentJson;
    }
    return this.currentYaml;
  }

}
