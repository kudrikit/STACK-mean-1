import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {IndexComponent} from './components/index/index.component';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from "@angular/platform-browser";

import {HttpClientModule} from "@angular/common/http";



import {StoreModule} from '@ngrx/store';
import {UserReducer} from './store/user.reducer';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // StoreModule.forRoot({}, {}),
    StoreModule.forRoot({ users: UserReducer }),
  ],

  exports: [
    StoreModule,FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
