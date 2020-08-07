import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CodeViewComponent } from './code-view/code-view.component';
import { AutosizeModule } from 'ngx-autosize';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CodeViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AutosizeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
