/**
 * Created by flangloi on 10/24/2016.
 */
import { InMemoryDbService } from 'angular2-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let demos = [
      {id: 1, name: 'Pipes'},
      {id: 2, name: 'Structure Directives'},
      {id: 3, name: 'Attribute Directives'},
      {id: 4, name: 'Http Client'}
    ];

    return {demos};
  }
}
