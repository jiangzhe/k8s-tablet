import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import { KubeService } from '../kube.service';
import { Namespace } from '../kubernetes/corev1/namespace';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-namespace',
  templateUrl: './namespace.component.html',
  styleUrls: ['./namespace.component.css']
})
export class NamespaceComponent implements OnInit {
  name: string;

  constructor(
    private route: ActivatedRoute,
    private kubeService: KubeService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getNamespace();
  }
  
  getNamespace(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.kubeService.getNamespace(name)
    .subscribe(ns => {
      this.name = ns.metadata["name"];
    });
  }

  goBack(): void {
    this.location.back();
  }
}
