/**
 * Created by flangloi on 10/25/2016.
 */
import { Component }        from '@angular/core';
import { Observable }       from 'rxjs/Observable';
import { Subject }          from 'rxjs/Subject';
import { WikipediaService } from '../services/wikipedia.service';

@Component({
  selector: 'my-wiki-smart',
  templateUrl: './wiki.component.html',
  providers: [ WikipediaService ]
})
export class WikiSmartComponent {
  title   = 'Smarter Wikipedia Demo';
  items: Observable<string[]>;
  private searchTermStream = new Subject<string>();

  search(term: string) { this.searchTermStream.next(term); }

  constructor (private wikipediaService: WikipediaService) {


    this.items = this.searchTermStream
      .debounceTime(600)  // wait for the user to stop typing for 600 milliseconds.
      .distinctUntilChanged() // only changed search values make it through to the service
      .switchMap((term: string) => this.wikipediaService.search(term));
    // swithcmap:
    //    returns a new observable that combines these WikipediaService observables,
    //    re-arranges them in their original request order,
    //    and delivers to subscribers only the most recent search results.
  }
}
