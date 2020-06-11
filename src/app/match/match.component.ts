import { Component, OnInit } from '@angular/core';
import {MatchInput} from "./match-input";
import {MatchService} from "./match.service";
import {MatchResult} from "./match-result";
import {MatchErrors} from "./match-errors";

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {

  matchInput: MatchInput;
  matchResult: MatchResult;
  matchErrors: MatchErrors;


  constructor(private service: MatchService) {
    this.matchInput = new MatchInput();
  }

  ngOnInit(): void {
  }

  match() {
    this.matchErrors = null;
    this.service.findOccurrences(this.matchInput)
      .subscribe(
        res => {
          this.matchResult = res;
        },
        res => {
          console.log(res.error.errors);
          this.matchErrors = res.error.errors
          }
        );
  }

}
