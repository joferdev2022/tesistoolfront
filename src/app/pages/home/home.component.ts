import { Component, OnInit } from '@angular/core';
import { AnswersService } from '../../services/answers.service';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  youtubeUrl = 'https://www.youtube.com';

  constructor(private answersService : AnswersService) { }
  

  ngOnInit(): void {

  }

  onStart() {
    this.answersService.setError(false);
    this.answersService.setSuccessful(false);
    console.log(this.answersService.isError$);
    
  }
  
}
