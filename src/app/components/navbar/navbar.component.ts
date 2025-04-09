import { Component } from '@angular/core';
import { AnswersService } from 'src/app/services/answers.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private answersService : AnswersService) { }


  onStart() {
    this.answersService.setError(false);
    this.answersService.setSuccessful(false);
    console.log(this.answersService.isError$);
    
  }
}
