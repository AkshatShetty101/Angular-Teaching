import { Mockup } from "../home/items/items.mockup";
import { Book } from './book.model'
import { Injectable } from "@angular/core";
@Injectable()
export class BookService {
    private books: { Book }[] = Mockup;
    getList() {
        let x: { name: string, author: string }[] = [];
        console.log(this.books);
        for (let val of this.books) {
            x.push({ name: val['name'], author: val['author'] });
        }
        return x;
    }
    getBook(name: string) {
        for (let val of this.books) {
            if (val['name'] == name) {
                return val;
            }
        }
    }
}
