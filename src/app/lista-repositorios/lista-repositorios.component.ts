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
  page: number = 1;
  repo_count = 0;

  constructor(private listaRepositoriosService: ListaRepositoriosService) { }

  ngOnInit(): void {
    this.listaRepositoriosService.getAllListRepositories().subscribe(data => {
      this.repo_count = data.length;
      console.log("total " + this.repo_count)
      
    });

    this.goToPage(this.page)


  }

  goToPage(page: number) {
    console.log("Pagina atual " + this.page)
    this.listaRepositoriosService.getListRepositoriesByPage(page).subscribe(data => {
      this.repositories = data;
    });
  }

  nextPage() {
    console.log("a");
    if ((this.page + 1) * 10 <= this.repo_count) {
      this.page += 1;
      this.goToPage(this.page)
      console.log("b");
    }
  }

  previusPage() {
    if (this.page > 0) {
      this.page -= 1;
      this.goToPage(this.page)
    }
  }
}
