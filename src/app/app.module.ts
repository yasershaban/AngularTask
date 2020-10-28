import { ContactService } from './services/contact.service';
import { ServicesService } from './services/services.service';
import { NavbarComponent } from './component/navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './component/home/home.component';
import { ServiceComponent } from './component/service/service.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConnectComponent } from './component/connect/connect.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ServiceComponent,
    HomeComponent,
    ConnectComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ServicesService, ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
