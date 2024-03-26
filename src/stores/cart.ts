import { computed, map } from 'nanostores';
import type { Book, CartStore } from '../types';

export const $cart = map < Record < number, CartStore | undefined>>({});


export const addItemToCart = (item: Book) => {
	const cartItem = $cart.get()[item.id];
	const quantity = cartItem ? cartItem.quantity : 0;

	$cart.setKey(item.id, {
		item,
		quantity: quantity + 1
	})
}

export function removeItemFromCart(itemId: number) {
	$cart.setKey(itemId, undefined);
}

export const subtotal = computed($cart, (entries) => {
	let subtotal = 0;
	Object.values(entries).forEach(entry => {
		if (!entry) {
			return;
		}
		subtotal += entry.quantity * entry.item.price;
	})

	return subtotal;
})