import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NamespaceComponent} from './namespace/namespace.component';
import {NamespacesComponent} from './namespaces/namespaces.component';
import { DeploymentsComponent } from './deployments/deployments.component';
import { StatefulsetsComponent } from './statefulsets/statefulsets.component';
import { ConfigmapsComponent } from './configmaps/configmaps.component';
import { DaemonsetsComponent } from './daemonsets/daemonsets.component';
import { DeploymentComponent } from './deployment/deployment.component';
import { StatefulsetComponent } from './statefulset/statefulset.component';
import { ConfigmapComponent } from './configmap/configmap.component';
import { DaemonsetComponent } from './daemonset/daemonset.component';
import { ServicesComponent } from './services/services.component';
import { ServiceComponent } from './service/service.component';
import { EndpointComponent } from './endpoint/endpoint.component';
const routes: Routes = [
  {path: "", redirectTo: "namespaces", pathMatch: "full"},
  {path: "namespaces", component: NamespacesComponent},
  {path: "namespaces/:name", component: NamespaceComponent},
  {path: "deployments", component: DeploymentsComponent},
  {path: "namespaces/:namespace/deployments/:name", component: DeploymentComponent},
  {path: "statefulsets", component: StatefulsetsComponent},
  {path: "namespaces/:namespace/statefulsets/:name", component: StatefulsetComponent},
  {path: "configmaps", component: ConfigmapsComponent},
  {path: "namespaces/:namespace/configmaps/:name", component: ConfigmapComponent},
  {path: "daemonsets", component: DaemonsetsComponent},
  {path: "namespaces/:namespace/daemonsets/:name", component: DaemonsetComponent},
  {path: "services", component: ServicesComponent},
  {path: "namespaces/:namespace/services/:name", component: ServiceComponent},
  {path: "namespaces/:namespace/endpoints/:name", component: EndpointComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
