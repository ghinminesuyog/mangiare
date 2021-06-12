import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { PlaceComponent } from './pages/place/place.component';
import { TeamComponent } from './pages/team/team.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { IntroComponent } from './components/intro/intro.component';
import { AboutComponent } from './components/about/about.component';
import { ConnectComponent } from './components/connect/connect.component';
import { DiscoverComponent } from './components/discover/discover.component';
import { BookComponent } from './pages/book/book.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    PlaceComponent,
    TeamComponent,
    HeaderComponent,
    FooterComponent,
    IntroComponent,
    AboutComponent,
    ConnectComponent,
    DiscoverComponent,
    BookComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
