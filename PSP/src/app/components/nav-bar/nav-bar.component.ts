import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  btnSubscriptions: boolean = true;
  btnHome: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToSubscriptions() {
    this.router.navigateByUrl('/subscriptions');
    this.btnSubscriptions = false;
    this.btnHome = true;
  }

  goToHome() {
    this.router.navigateByUrl('');
    this.btnSubscriptions = true;
    this.btnHome = false;
  }

}
