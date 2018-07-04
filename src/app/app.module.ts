import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HighlightJsModule, HighlightJsService } from 'angular2-highlight-js';

import { AppComponent } from './app.component';
import { NamespacesComponent } from './namespaces/namespaces.component';
import { AppRoutingModule } from './/app-routing.module';
import { NamespaceComponent } from './namespace/namespace.component';
import { DeploymentsComponent } from './deployments/deployments.component';
import { StatefulsetsComponent } from './statefulsets/statefulsets.component';
import { ConfigmapsComponent } from './configmaps/configmaps.component';
import { DaemonsetsComponent } from './daemonsets/daemonsets.component';
import { DaemonsetComponent } from './daemonset/daemonset.component';
import { StatefulsetComponent } from './statefulset/statefulset.component';
import { ConfigmapComponent } from './configmap/configmap.component';
import { DeploymentComponent } from './deployment/deployment.component';
import { ServiceComponent } from './service/service.component';
import { ServicesComponent } from './services/services.component';
import { EndpointComponent } from './endpoint/endpoint.component';

@NgModule({
  declarations: [
    AppComponent,
    NamespacesComponent,
    NamespaceComponent,
    DeploymentsComponent,
    StatefulsetsComponent,
    ConfigmapsComponent,
    DaemonsetsComponent,
    DaemonsetComponent,
    StatefulsetComponent,
    ConfigmapComponent,
    DeploymentComponent,
    ServiceComponent,
    ServicesComponent,
    EndpointComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    HighlightJsModule,
  ],
  providers: [
    HighlightJsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
