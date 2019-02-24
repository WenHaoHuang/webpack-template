import { Injectable } from '@angular/core'
import { Home } from './home'
import { HEROES } from './mock/heroes'
import { Observable, of } from 'rxjs'
import { MessageService } from './message.service'

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Home[]> {
    this.messageService.add('HeroService: fetched heroes')
    return of(HEROES)
  }
}
