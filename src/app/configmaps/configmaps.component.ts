import { Component, OnInit } from '@angular/core';
import { KubeService } from '../kube.service';
import { ConfigMap } from '../kubernetes/corev1/config-map';
import { ListFilter } from '../utils/list-filter';

@Component({
  selector: 'app-configmaps',
  templateUrl: './configmaps.component.html',
  styleUrls: ['./configmaps.component.css']
})
export class ConfigmapsComponent implements OnInit {
  configmaps: ConfigMap[] = [];
  fullConfigmaps: ConfigMap[] = [];
  filter: ListFilter = new ListFilter();
  showNamespaceFilter = false;
  showInstanceFilter = false;
  
  instanceEnabled = KubeService.getInstanceEnabled;
  instanceName = KubeService.getInstanceNameFromMetadata;

  constructor(private kubeService: KubeService) { }

  ngOnInit() {
    this.kubeService.getConfigMaps().subscribe(cms => {
      this.fullConfigmaps = cms.items;
      this.doFilter();
    })
  }

  doFilter(): void {
    this.configmaps = this.fullConfigmaps.filter(cm => this.filter.check(cm.metadata));
  }

  summarize(data: {[name: string]: string}): string {
    if (!data) {
      return "";
    }
    const json = JSON.stringify(data);
    if (json.length >= 50) {
      return json.substring(0, 47) + "...";
    }
    return json;
  }
}
