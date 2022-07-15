import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadPermissionsService {

  constructor(private httpClient: HttpClient) { }

  public delay() {
    return new Promise(resolve => setTimeout(resolve, 3000));
  }

  public loadPermissions() {
    return this.delay().then(() => {
      return this.httpClient.get('https://jsonplaceholder.typicode.com/todos/1')
      .toPromise()
      .then(() => {
        return ['DEVELOPER']
      })
    })
  }

}
