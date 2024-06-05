
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
    }

    deleteBook(title){
        delete this.items[title];
    }

    updateBook(title, description, year){

    }

    getBook(title){
        return this.items[title]; 
    }   


    getSize(){
        return this.size; 
    }

}