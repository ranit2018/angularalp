import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'alp';

  constructor(
    private UserService: UserService,   
  ) {
    this.getCurrent();
  }

  getCurrent(){
    

    this.UserService.login('demo@test.com','123456').subscribe((data)=>{
      console.log(data);
    });
  }
  
}
