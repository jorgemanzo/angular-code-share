import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContainerStatusComponent } from './container-status/container-status.component';
import { FormsModule } from '@angular/forms';

/* UI */
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { ContainerBuildComponent } from './container-build/container-build.component';
import { CommandOptionComponent } from './command-option/command-option.component'; 
@NgModule({
  declarations: [
    AppComponent,
    ContainerStatusComponent,
    ContainerBuildComponent,
    CommandOptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
