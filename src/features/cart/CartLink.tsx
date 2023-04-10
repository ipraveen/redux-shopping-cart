import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import styles from './CartLink.module.css';

export function CartLink() {
    const items = useAppSelector((state) => state.cart.items) ?? [];


    const itemsCount = Object.values(items).reduce((count, total) => total + count, 0);
    return (
        <Link to="/cart" className={styles.link}>
            <span className={styles.text}>🛒&nbsp;&nbsp;{itemsCount === 0 ? 'Cart' : itemsCount}</span>
        </Link>
    );
}
