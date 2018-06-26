import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NamespaceComponent} from './namespace/namespace.component';
import {NamespacesComponent} from './namespaces/namespaces.component';
import { DeploymentsComponent } from './deployments/deployments.component';
import { StatefulsetsComponent } from './statefulsets/statefulsets.component';
import { ConfigmapsComponent } from './configmaps/configmaps.component';
const routes: Routes = [
  {path: "", redirectTo: "namespaces", pathMatch: "full"},
  {path: "namespaces", component: NamespacesComponent},
  {path: "namespaces/:name", component: NamespaceComponent},
  {path: "deployments", component: DeploymentsComponent},
  {path: "statefulsets", component: StatefulsetsComponent},
  {path: "configmaps", component: ConfigmapsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
