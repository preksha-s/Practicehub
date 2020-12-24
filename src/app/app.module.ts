import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivesModule } from './directives/directives.module';
import { AuthModule } from './auth/auth.module';
import { RouterModule } from '@angular/router';

import { HomeModule } from './home/home.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { CardsComponent } from './cards/cards.component';
import { DisplayComponent } from './display/display.component';


@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    HeaderComponent,
    FooterComponent,
    BootstrapComponent,
    CardsComponent,
    DisplayComponent,
 
  
  ],
  imports: [
    BrowserModule,
    DirectivesModule,
    AuthModule,
    HomeModule,
    RouterModule,
    AppRoutingModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
