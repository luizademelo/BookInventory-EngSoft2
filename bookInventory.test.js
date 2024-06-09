import { Book, BookInventory } from ".";


describe('Book', () => { it('should create a new book object with title, description and year properties', () => { const book = new Book('The Great Gatsby', 'A novel by F. Scott Fitzgerald', 1925); expect(book.title).toEqual('The Great Gatsby'); expect(book.description).toEqual('A novel by F. Scott Fitzgerald'); expect(book.year).toEqual(1925); }); });

describe('BookInventory', () => {
    let inventory;

    beforeEach(() => { inventory = new BookInventory(); })
});
