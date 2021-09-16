import React from 'react';
import styles from './CardsList.module.scss';
import Card from '../Card/Card';
import { prices, titles } from '../../utils/exampleValues';
import image1 from '../../images/goods/image-1.png';
import image2 from '../../images/goods/image-2.png';
import image3 from '../../images/goods/image-3.png';
import image4 from '../../images/goods/image-4.png';

function CardsList() {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>С этим товаром покупают</h1>
      <ul className={styles.cardsList}>
        <li>
          <Card
            src={image1}
            title={titles.title1}
            price={prices.price1}
            isPriceDiscount={false}
          />
        </li>
        <li>
          <Card
            src={image2}
            title={titles.title2}
            price={prices.price2}
            isPriceDiscount={false}
          />
        </li>
        <li>
          <Card
            src={image3}
            title={titles.title3}
            price={prices.price3}
            isPriceDiscount={false}
          />
        </li>
        <li>
          <Card
            src={image4}
            title={titles.title4}
            price={prices.price4}
            priceOld={prices.price5}
            isPriceDiscount={true}
          />
        </li>
      </ul>
    </section>
  );
}

export default CardsList;
