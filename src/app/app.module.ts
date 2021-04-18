import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ListaRepositoriosComponent } from './lista-repositorios/lista-repositorios.component';
import { FilterPipePipe } from './filter-pipe.pipe'
import { MaterialModule } from './core/material.module';
import { NavBarComponent } from './core/nav-bar/nav-bar.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PerfilComponent,
    ListaRepositoriosComponent,
    FilterPipePipe,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
