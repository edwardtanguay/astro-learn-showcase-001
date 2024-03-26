export type Book = {
	id: number;
	idcode: string;
	title: string;
	description: string;
	buyurl: string;
	price: number;
}

export type CartStore = {
	quantity: number;
	item: Book;
};