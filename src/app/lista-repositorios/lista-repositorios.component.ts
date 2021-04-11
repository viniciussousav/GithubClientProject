import { Component, OnInit } from '@angular/core';
import { Repository } from '../classes/repository';
import { ListaRepositoriosService } from './lista-repositorios.service';

@Component({
  selector: 'app-lista-repositorios',
  templateUrl: './lista-repositorios.component.html',
  styleUrls: ['./lista-repositorios.component.css']
})
export class ListaRepositoriosComponent implements OnInit {

  repositories: Repository[] = [];
  _searchText: string = ''
  _page: number = 1;

  constructor(private listaRepositoriosService: ListaRepositoriosService) { }

  ngOnInit(): void {
    this.getRepositoriesByPage(this._page);
  }

  getRepositories(): void {
    this.listaRepositoriosService.getAllListRepositories().subscribe({
      next: repos => {
        this.repositories = repos;
      },
      error: err => {
        console.log('Error getting repositories', err);
      }
    })
  }

  getRepositoriesByPage(page: number): void {
    this.listaRepositoriosService.getListRepositoriesByPage(page).subscribe(
      {
        next: repos => {
          if (repos.length > 0 && page > 0) {
            this.repositories = repos;
            this._page = page;
          }
        },
        error: err => {
          console.log(`Error getting repositories from page ${page}`, err);
        }
      });
  }

  set filter(value: string) {
    this._searchText = value;
  }

  get filter(): string {
    return this._searchText;
  }
}
