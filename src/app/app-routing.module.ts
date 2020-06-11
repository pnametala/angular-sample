import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MatchComponent} from "./match/match.component";

// no need for lazy loading given the complexity of the app
const routes: Routes = [
  {path: 'match', component: MatchComponent},
  { path: '',   redirectTo: '/match', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
