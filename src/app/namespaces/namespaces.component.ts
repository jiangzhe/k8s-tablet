import { Component, OnInit } from '@angular/core';
import { NamespaceList } from '../namespace-list';
import { Namespace } from '../namespace';
import { KubeService } from '../kube.service';
@Component({
  selector: 'app-namespaces',
  templateUrl: './namespaces.component.html',
  styleUrls: ['./namespaces.component.css']
})
export class NamespacesComponent implements OnInit {
  namespaces: Namespace[] =[];

  constructor(private kubeService: KubeService) { }

  ngOnInit() {
    this.getNamespaces();
  }

  getNamespaces(): void {
    this.kubeService.getNamespaces()
    .subscribe(nsList => {
      this.namespaces = nsList.items;
    })
  }
}
