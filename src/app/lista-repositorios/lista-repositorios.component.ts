import { Component, OnInit } from '@angular/core';
import { ListaRepositoriosService } from './lista-repositorios.service';

@Component({
  selector: 'app-lista-repositorios',
  templateUrl: './lista-repositorios.component.html',
  styleUrls: ['./lista-repositorios.component.css']
})
export class ListaRepositoriosComponent implements OnInit {

  repositories: any;
  searchText: string = '';

  constructor(private listaRepositoriosService: ListaRepositoriosService) {
    listaRepositoriosService.getListRepositories().subscribe(data => {
      this.repositories = data;
    });

  }

  ngOnInit(): void {

  }

}
