import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CodeFormComponent } from './code-form/code-form.component';
import { CodePresenterComponent } from './code-presenter/code-presenter.component';
const routes: Routes = [
  { path: 'ci-api', component: CodePresenterComponent },
  { path: '', component: CodeFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
