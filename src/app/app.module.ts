import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ListaRepositoriosComponent } from './lista-repositorios/lista-repositorios.component'

import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatCardModule } from '@angular/material/card'
import { MatRippleModule } from '@angular/material/core';
import { MatListModule  } from '@angular/material/list';
import { FilterPipePipe } from './filter-pipe.pipe'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PerfilComponent,
    ListaRepositoriosComponent,
    FilterPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    MatCardModule,
    MatRippleModule,
    MatListModule,
    
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
