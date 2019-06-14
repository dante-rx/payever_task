import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { CoreModule } from '../modules/core.module';
// import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UsersListModule } from 'src/modules/users-list/users-list.module';
import { CoreModule } from 'src/modules/core/core.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule.forRoot(),
    RouterModule,
    AppRoutingModule,
    UsersListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
