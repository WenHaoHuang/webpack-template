import { Component, OnInit } from '@angular/core'
import { Home } from '../home'
import { HeroService } from '../hero.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Home[] = []

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes()
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes.slice(1, 5)))
  }
}
