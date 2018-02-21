import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DummyComponent } from './dummy/dummy.component';
import { PurewsComponent } from './purews/purews.component';


@NgModule({
  declarations: [
    AppComponent,
    DummyComponent,
    PurewsComponent
  ],
  imports: [
    BrowserModule, FormsModule, NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
