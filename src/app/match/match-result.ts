import {MatchInput} from "./match-input";

export class MatchResult {
  match: MatchInput;
  occurrences: MatchOccurrence[];
}

export class MatchOccurrence {
  index: number;
  length: number;
  value: string;
}
