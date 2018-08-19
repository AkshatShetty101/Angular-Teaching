import { ConnectService } from './shared/services/connect.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './home/details/details.component';
import { ItemsComponent } from './home/items/items.component';
import { BookComponent } from './home/items/book/book.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BookService } from './shared/services/book.service';
import { RoutingDemoComponent } from './routing-demo/routing-demo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ObservablesComponent } from './observables/observables.component';
import { ROUTES } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    ItemsComponent,
    BookComponent,
    NavbarComponent,
    RoutingDemoComponent,
    PageNotFoundComponent,
    ObservablesComponent
  ],
  imports: [
    BrowserModule,
    ROUTES
  ],
  providers: [
    BookService,
    ConnectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
