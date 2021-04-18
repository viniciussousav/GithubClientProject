import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  showOptions = true;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.showOptionsIfLogeed();

    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd && event.url) {
        if (event.url == "/login" || event.url == "/") {
          this.showOptions = false;
        } else {
          this.showOptions = true;
        }
      }
    });

  }

  showOptionsIfLogeed() {
    if (!localStorage.getItem("token")) {
      this.showOptions = false;
    }
  }

  logout(): void {
    this.showOptions = false;
    this.loginService.logout();
  }

}
