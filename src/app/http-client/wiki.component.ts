/**
 * Created by flangloi on 10/25/2016.
 */
import { Component }        from '@angular/core';
import { Observable }       from 'rxjs/Observable';
import { WikipediaService } from '../services/wikipedia.service';

@Component({

  selector: 'my-wiki',
  templateUrl: './wiki.component.html',
  providers: [ WikipediaService ]
})

export class WikiComponent {
  title   = 'Wikipedia Demo';
  items: Observable<string[]>;

  constructor (private wikipediaService: WikipediaService) { }

  search (term: string) {
    this.items = this.wikipediaService.search(term);
  }

}
