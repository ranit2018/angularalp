import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';





@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(    
    private httpClient: HttpClient,    
  ) { }

  login(email: string, password: string): Observable<Account> {

    const auth = {
        accessToken: '_oxW1qH037f2pomvX_LfEA',
        client: 'q1R--SDkfQd1yjsiYiu4Rw',
        expiry : 1537025239,
        tokenType : 'Bearer',
        uid: 'yoolk_admin@yoolk.com'
      };  
    return of({ data: auth })
      .pipe(
        map((res: any) => <Account>res.data),
        tap(account => {
          const auth = {
            accessToken: '_oxW1qH037f2pomvX_LfEA',
            client: 'q1R--SDkfQd1yjsiYiu4Rw',
            expiry : 1537025239,
            tokenType : 'Bearer',
            uid: 'yoolk_admin@yoolk.com'
          };         
          
        })
      );


    // return this.httpClient
    //   .post('/auth/sign_in', { email, password })
    //   .pipe(
    //     map((res: any) => <Account>res.data),
    //     tap(account => {
    //       this.afterLoggedIn$.next();
    //     })
    //   );
  }




}
