import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BrowserModule} from "@angular/platform-browser";

import {IndexComponent} from "./components/index/index.component";


import {StoreModule} from "@ngrx/store";
import {UserReducer} from "./store/user.reducer";


const routes: Routes = [
  {path: '', redirectTo: "home", pathMatch: "full"},
  {path: 'home', component: IndexComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [

    BrowserModule,
    RouterModule.forRoot(routes, {enableTracing: true}),
    StoreModule.forRoot({users: UserReducer}),



  ],
  exports: [
    RouterModule,
    StoreModule
  ],
})
export class AppRoutingModule {
}
