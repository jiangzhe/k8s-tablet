import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
    ConfigmapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
