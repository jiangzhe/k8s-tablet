import { Component, OnInit } from '@angular/core';
import { KubeService } from '../kube.service';
import { StatefulSet } from '../kubernetes/appsv1beta1/stateful-set';
import { ListFilter } from '../utils/list-filter';

@Component({
  selector: 'app-statefulsets',
  templateUrl: './statefulsets.component.html',
  styleUrls: ['./statefulsets.component.css']
})
export class StatefulsetsComponent implements OnInit {
  filter: ListFilter = new ListFilter();

  statefulsets: StatefulSet[];
  fullStatefulsets: StatefulSet[];
  showNamespaceFilter = false;
  showInstanceFilter = false;

  instanceEnabled = KubeService.getInstanceEnabled;
  instanceName = KubeService.getInstanceNameFromMetadata;

  constructor(private kubeService: KubeService) { }

  ngOnInit() {
    this.kubeService.getStatefulSets().subscribe(sss => {
      this.fullStatefulsets = sss.items;
      this.onFilter();
    })
  }

  onFilter(): void {
    console.log(this.fullStatefulsets);
    this.statefulsets = this.fullStatefulsets.filter(s => this.filter.check(s.metadata));
  }
}
