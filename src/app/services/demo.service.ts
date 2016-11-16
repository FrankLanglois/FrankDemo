/**
 * Created by flangloi on 10/24/2016.
 */
/**
 * Created by flangloi on 2016-09-21.
 */
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import {  Observable } from 'rxjs';

import 'rxjs/Rx';

import { Demo } from '../shared/demo';

declare interface Promise<T> {
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult>(onfulfilled?: (value: T) => TResult | PromiseLike<TResult>, onrejected?: (reason: any) => TResult | PromiseLike<TResult>): Promise<TResult>;
  then<TResult>(onfulfilled?: (value: T) => TResult | PromiseLike<TResult>, onrejected?: (reason: any) => void): Promise<TResult>;

  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch(onrejected?: (reason: any) => T | PromiseLike<T>): Promise<T>;
  catch(onrejected?: (reason: any) => void): Promise<T>;
}

declare interface PromiseConstructor {
  /**
   * A reference to the prototype.
   */
  prototype: Promise<any>;

  /**
   * Creates a new Promise.
   * @param executor A callback used to initialize the promise. This callback is passed two arguments:
   * a resolve callback used resolve the promise with a value or the result of another promise,
   * and a reject callback used to reject the promise with a provided reason or error.
   */
  new <T>(executor: (resolve: (value?: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void): Promise<T>;

  /**
   * Creates a Promise that is resolved with an array of results when all of the provided Promises
   * resolve, or rejected when any Promise is rejected.
   * @param values An array of Promises.
   * @returns A new Promise.
   */
  all<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike <T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>, T9 | PromiseLike<T9>, T10 | PromiseLike<T10>]): Promise<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10]>;
  all<T1, T2, T3, T4, T5, T6, T7, T8, T9>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike <T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>, T9 | PromiseLike<T9>]): Promise<[T1, T2, T3, T4, T5, T6, T7, T8, T9]>;
  all<T1, T2, T3, T4, T5, T6, T7, T8>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike <T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>]): Promise<[T1, T2, T3, T4, T5, T6, T7, T8]>;
  all<T1, T2, T3, T4, T5, T6, T7>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike <T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>]): Promise<[T1, T2, T3, T4, T5, T6, T7]>;
  all<T1, T2, T3, T4, T5, T6>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike <T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>]): Promise<[T1, T2, T3, T4, T5, T6]>;
  all<T1, T2, T3, T4, T5>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike <T4>, T5 | PromiseLike<T5>]): Promise<[T1, T2, T3, T4, T5]>;
  all<T1, T2, T3, T4>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike <T4>]): Promise<[T1, T2, T3, T4]>;
  all<T1, T2, T3>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>]): Promise<[T1, T2, T3]>;
  all<T1, T2>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>]): Promise<[T1, T2]>;



  /**
   * Creates a new rejected promise for the provided reason.
   * @param reason The reason the promise was rejected.
   * @returns A new rejected Promise.
   */
  reject(reason: any): Promise<void>;

  /**
   * Creates a new rejected promise for the provided reason.
   * @param reason The reason the promise was rejected.
   * @returns A new rejected Promise.
   */
  reject<T>(reason: any): Promise<T>;

  /**
   * Creates a new resolved promise for the provided value.
   * @param value A promise.
   * @returns A promise whose internal state matches the provided promise.
   */
  resolve<T>(value: T | PromiseLike<T>): Promise<T>;

  /**
   * Creates a new resolved promise .
   * @returns A resolved promise.
   */
  resolve(): Promise<void>;
}

declare var Promise: PromiseConstructor;

@Injectable()
export class DemoService {
  private demosUrl = 'app/demos'; // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http){}

  // *** WITH OBSERVABLES ***
  getObservableDemos(): Observable<Demo[]> {
    return this.http
      .get(`app/demos`)
      .map((r: Response) => r.json().data as Demo[]);
  }

  public observableCreate(newDemo: Demo): Observable<Demo> {
    return this.http
      .post(this.demosUrl, JSON.stringify(newDemo), { headers: this.headers })
      .map((r: Response) => r.json().data as Demo)
      .catch((error:any) => Observable.throw(error || 'Server Error'));;
  }

  public observableUpdate(demo: Demo): Observable<Demo> {
    const URL = `${this.demosUrl}/${demo.id}`;
    return this.http
      .put(URL, JSON.stringify(demo), { headers: this.headers })
      .map(() => demo)
      .catch(this.handleError);;
  }

  public observableDelete(id: number): Observable<void> {
    let url = `${this.demosUrl}/${id}`;
    return this.http.delete(url, { headers: this.headers })
      .map(() => null)
      .catch(this.handleError);
  }

  // *** WITH PROMISE ***
  getDemos(): Promise<Demo[]> {

    //noinspection JSUnresolvedFunction
    return this.http.get(this.demosUrl)
      .toPromise()
      .then(response => response.json().data as Demo[])
      .catch(this.handleError);
  }

  create(name: string): Promise<Demo> {
    return this.http
      .post(this.demosUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  update(demo: Demo): Promise<Demo>{
    const URL = `${this.demosUrl}/${demo.id}`;

    return this.http
      .put(URL, JSON.stringify(demo), {headers: this.headers})
      .toPromise()
      .then(() => demo)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    let url = `${this.demosUrl}/${id}`;

    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
