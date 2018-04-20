import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppHeader } from '../pt/header/header';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home';
import { EmpresaComponent } from './institucional/empresa/empresa';


@NgModule({
  declarations: [
    AppComponent,
    AppHeader,
    HomeComponent,
    EmpresaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
