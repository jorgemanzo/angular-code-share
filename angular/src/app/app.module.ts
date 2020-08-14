import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CodeViewComponent } from './code-view/code-view.component';
import { AutosizeModule } from 'ngx-autosize';
import { FormsModule } from '@angular/forms';
import { CodeFormComponent } from './code-form/code-form.component';
import { CodeViewOptionsComponent } from './code-view-options/code-view-options.component';
import { CodePresenterComponent } from './code-presenter/code-presenter.component';
@NgModule({
  declarations: [
    AppComponent,
    CodeViewComponent,
    CodeFormComponent,
    CodeViewOptionsComponent,
    CodePresenterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AutosizeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
