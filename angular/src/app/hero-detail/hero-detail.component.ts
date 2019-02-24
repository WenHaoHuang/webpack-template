import { Component, OnInit, Input } from '@angular/core'
import { Home } from '../home'

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() selectedHero: Home
  constructor() {}

  ngOnInit() {}
}
