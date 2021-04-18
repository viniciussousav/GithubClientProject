import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaRepositoriosComponent } from './lista-repositorios/lista-repositorios.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'profile', component: PerfilComponent
  },
  {
    path: 'repositories', component: ListaRepositoriosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
