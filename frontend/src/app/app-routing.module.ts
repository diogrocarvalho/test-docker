import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TestApiComponent} from "./test-api/test-api.component";

const routes: Routes = [
  {path: 'test', component: TestApiComponent },
  {path: '', redirectTo: 'test', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
