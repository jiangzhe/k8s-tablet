import { Component, OnInit } from '@angular/core';
import { KubeService } from '../kube.service';
import { ConfigMap } from '../kubernetes/corev1/config-map';

@Component({
  selector: 'app-configmaps',
  templateUrl: './configmaps.component.html',
  styleUrls: ['./configmaps.component.css']
})
export class ConfigmapsComponent implements OnInit {
  instanceName = KubeService.getInstanceNameFromMetadata;

  configmaps: ConfigMap[] = [];
  fullConfigmaps: ConfigMap[] = [];
  

  constructor(private kubeService: KubeService) { }

  ngOnInit() {
    this.kubeService.getConfigMaps().subscribe(cms => {
      this.fullConfigmaps = cms.items;
      this.doFilter();
    })
  }

  doFilter(): void {

  }

  onFilter(): void {
    this.doFilter();
  }
}
