
export class Book {
    constructor(title, description, year){
        this.title = title; 
        this.description = description; 
        this.year = year; 
    }
}

export class BookInventory{
    constructor(){
        this.items = {}; 
        this.size = 0;
    }

    addBook(title, description, year){
        this.items[title] = new Book(title, description, year); 
        this.size += 1; 
    }

    deleteBook(title){
        if(this.items[title]) {
            this.size -= 1; 
        }
        delete this.items[title];
    }

    updateBook(title, description, year){
        delete this.items[title]; 
        this.items[title] = new Book(title, description, year);
    }

    getBook(title){
        return this.items[title]; 
    }   


    getSize(){
        return this.size; 
    }

}