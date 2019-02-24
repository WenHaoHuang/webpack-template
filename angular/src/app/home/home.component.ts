import { Component, OnInit } from '@angular/core'
import { Home } from '../home'
// import { HEROES } from './../mock/heroes'
import { HeroService } from './../hero.service'
import { MessageService } from './../message.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  constructor(private heroService: HeroService, private messageService: MessageService) {}
  heroes: Home[]
  selectedHero: Home = {
    id: 1,
    name: 'Windstorm'
  }
  onselect(item: Home): void {
    this.messageService.add(`HeroService: ${item.name}`)
    this.selectedHero = item
  }
  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes()
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes))
  }
  ngOnInit() {
    this.getHeroes()
  }
}
