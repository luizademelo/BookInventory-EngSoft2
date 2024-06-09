import { Book, BookInventory } from ".";


describe('Book', () => {
    it('criacao de um livro', () => {
        const book = new Book('The Great Gatsby', 'A novel by F. Scott Fitzgerald', 1925);
        expect(book.title).toEqual('The Great Gatsby');
        expect(book.description).toEqual('A novel by F. Scott Fitzgerald');
        expect(book.year).toEqual(1925);
    });
});

describe('BookInventory', () => {
    let inventory;

    beforeEach(() => { inventory = new BookInventory(); })

    it('adicao de um livro', () => {
        inventory.addBook('The Great Gatsby', 'A novel by F. Scott Fitzgerald', 1925);
        expect(inventory.getSize()).toBe(1);
        expect(inventory.getBook('The Great Gatsby')).toEqual(
            new Book('The Great Gatsby', 'A novel by F. Scott Fitzgerald', 1925)
        );
    });
});
