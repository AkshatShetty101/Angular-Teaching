import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ItemsComponent } from './home/items/items.component';
import { DetailsComponent } from './home/details/details.component';
import { BookComponent } from './home/items/book/book.component';
import { HomeComponent } from './home/home.component';
import { BookService } from './shared/book.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItemsComponent,
    DetailsComponent,
    BookComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
