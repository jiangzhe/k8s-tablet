import { Component, OnInit } from '@angular/core';
import { KubeService } from '../kube.service';
import { DaemonSet } from '../kubernetes/extensionsv1beta1/daemon-set';

@Component({
  selector: 'app-daemonsets',
  templateUrl: './daemonsets.component.html',
  styleUrls: ['./daemonsets.component.css']
})
export class DaemonsetsComponent implements OnInit {
  daemonsets: DaemonSet[];

  constructor(private kubeService: KubeService) { }

  ngOnInit() {
    this.kubeService.getDaemonSets().subscribe(dss => {
      this.daemonsets = dss.items;
    })
  }

}
