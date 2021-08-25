import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";

@Component({
  selector: "app-create-quiz",
  templateUrl: "./create-quiz.component.html",
  styleUrls: ["./create-quiz.component.scss"]

})
export class CreateQuizComponent implements OnInit {

  @Input() quizData: any;

  constructor() {}
  
  ngOnInit() {
    
  }
}
