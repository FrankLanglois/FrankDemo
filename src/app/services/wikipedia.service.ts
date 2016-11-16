/**
 * Created by flangloi on 10/20/2016.
 */
import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import {  Observable } from 'rxjs';

@Injectable()
export class WikipediaService {
  constructor(private jsonp: Jsonp) {}

  search (term: string) {
    let wikiUrl = 'http://en.wikipedia.org/w/api.php';

    let params = new URLSearchParams();
    params.set('search', term); // the user's search value
    params.set('action', 'opensearch');
    params.set('format', 'json');
    params.set('callback', 'JSONP_CALLBACK');

    return this.jsonp
      .get(wikiUrl, { search: params })
      .map(response => <string[]> response.json()[1])
      .catch((error:any) => Observable.throw(error[1] || 'Server Error'));
  }
}
