import { ConnectComponent } from './component/connect/connect.component';
import { HomeComponent } from './component/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceComponent } from './component/service/service.component';


const routes: Routes = [

  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'connect',
    component: ConnectComponent,
  },
  {
    path: 'service',
    component: ServiceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
