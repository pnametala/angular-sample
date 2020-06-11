import { Injectable } from '@angular/core';
import {MatchInput} from "./match-input";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {MatchResult} from "./match-result";

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(private http: HttpClient) { }

  findOccurrences(match: MatchInput): Observable<MatchResult> {
    return this.http.post<MatchResult>(`${environment.baseUrl}/api/Match`, match);
  }
}
