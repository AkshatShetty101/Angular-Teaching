import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ItemsComponent } from './home/items/items.component';
import { DetailsComponent } from './home/details/details.component';
import { BookComponent } from './home/items/book/book.component';
import { HomeComponent } from './home/home.component';
import { BookService } from './shared/services/book.service';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { AddPageComponent } from './add-page/add-page.component';
import { FormsModule } from '@angular/forms';
import { ObservablesComponent } from './observables/observables.component';

import { ROUTES } from './app.routing';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { HttpClientModule } from '@angular/common/http';
import { ConnectService } from './shared/services/connect.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItemsComponent,
    DetailsComponent,
    BookComponent,
    HomeComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    AddPageComponent,
    ObservablesComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ROUTES
  ],
  providers: [
    BookService,
    ConnectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
