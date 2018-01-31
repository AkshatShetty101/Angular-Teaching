import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ItemsComponent } from './home/items/items.component';
import { DetailsComponent } from './home/details/details.component';
import { BookComponent } from './home/items/book/book.component';
import { HomeComponent } from './home/home.component';
import { BookService } from './shared/book.service';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { AddPageComponent } from './add-page/add-page.component';
import { FormsModule } from '@angular/forms';


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
    AddPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
