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
  searchText: string = '';
  page: number = 1;
  repo_count = 0;

  constructor(private listaRepositoriosService: ListaRepositoriosService) { }

  ngOnInit(): void {
    this.listaRepositoriosService.getAllListRepositories().subscribe(
      {
        next: repos => {
          this.getRepositoriesByPage(this.page);
          this.repo_count = repos.length;
          console.log("total " + this.repo_count);
        },
        error: err => {
          this.repo_count = 0;
          console.log('Error getting all repositories', err);
        }
      });
  }

  getRepositoriesByPage(page: number): void {
    if (this.page > 0 && page * 10 < this.repo_count) {
      this.listaRepositoriosService.getListRepositoriesByPage(page).subscribe(
        {
          next: repos => {
            this.repositories = repos;
          },
          error: err => {
            console.log(`Error getting repositories from page ${page}`, err);
          }
        });
        this.page = page;
    }
  }
}
