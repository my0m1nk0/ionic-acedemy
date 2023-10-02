import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {

  constructor(private router:Router,private navController:NavController) { }

  ngOnInit() {
  }
  openDetails() {
    // Both of these would work!
    // But the standard Router is recommended.
    // this.navController.navigateForward(`/tabs/films/42`);
    this.router.navigateByUrl(`/tabs/films/42`);
  }
 
  goToPlanets() {
    this.navController.navigateRoot(`/tabs/planets`)
  }

}
