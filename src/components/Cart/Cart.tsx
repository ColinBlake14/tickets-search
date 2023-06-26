'use client';

import { FunctionComponent } from "react";
import styles from "./Cart.module.css";
import { useSelector } from "react-redux";
import { selectCartProducts, selectProductsAmount } from "@/redux/features/cart/selector";
import { LoadingFiller } from "../Loading-filler/Loading-filler";
import { FilmCard } from "../Films-list/Films-list";

export const Cart: FunctionComponent = () => {
  const cartData: Array<CartElemI> = useSelector(state => selectCartProducts(state));
  const productAmount: number = useSelector(state => selectProductsAmount(state));

  if (cartData.length < 1 || !productAmount) {
    return <LoadingFiller loadingText={"Корзина пуста!"}/>
  }

  return (
    <div className={styles.cart_container}>
      <div className={styles.cart_films_container}>
        { cartData.map(item => <FilmCard {...item} key={item.id}/>)}
      </div>

      <div className={styles.cart_cost}>
        <div className={styles.cost_container}>
          <span className={styles.cost_text}>
            Итого билетов:
          </span>

          <span className={styles.cost_text}>
            {productAmount}
          </span>
        </div>
      </div>
    </div>
  );
}
