import React from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import styles from './Cart.module.css';
import { getTotalPrice } from '../cart/cartSelectors';
import { removeFromCart, updateCount } from './cartSlice';

export function Cart() {
    const dispatch = useAppDispatch();
    const items = useAppSelector((state) => state.cart.items);
    const products = useAppSelector((state) => state.products.products);
    const total = useAppSelector(getTotalPrice);

    const handleCartRemove = (id: string) => {
        dispatch(removeFromCart(id));
    };

    const handleCountChange = (e: React.FocusEvent<HTMLInputElement>, id: string) => {
        const count = Number(e.target.value);
        dispatch(updateCount({ id, count }));
    };

    return (
        <main className="page">
            <h1>Shopping Cart</h1>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(items).map(([id, count]) => {
                        const { name, price } = products[id];
                        return (
                            <tr key={id}>
                                <td>{name}</td>
                                <td>
                                    <input
                                        type="text"
                                        className={styles.input}
                                        defaultValue={count}
                                        onBlur={(e) => handleCountChange(e, id)}
                                    />
                                </td>
                                <td>${price}</td>
                                <td>
                                    <button
                                        aria-label={`Remove ${name} from Shopping Cart`}
                                        onClick={() => handleCartRemove(id)}
                                    >
                                        X
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <td>Total</td>
                        <td></td>
                        <td className={styles.total}>${total}</td>
                        <td></td>
                    </tr>
                </tfoot>
            </table>
            <form>
                <button className={styles.button} type="submit">
                    Checkout
                </button>
            </form>
        </main>
    );
}
