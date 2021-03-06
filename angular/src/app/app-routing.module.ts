import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CodeFormComponent } from './code-form/code-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
const routes: Routes = [
  { path: 'share', component: CodeFormComponent },
  { path: '', component: CodeFormComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
