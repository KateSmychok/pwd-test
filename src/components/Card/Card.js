import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames/bind';
import styles from './Card.module.scss';
import Counter from '../Counter/Counter';

function Card(props) {
  const [isProductInFavorite, setIsProductInFavorite] = React.useState(false);
  const [score, setScore] = React.useState(0);

  const cx = cn.bind(styles);

  const likeBtnStyle = cx({
    baseLikeBtn: true,
    notSavedToFavorite: !isProductInFavorite,
    savedToFavorite: isProductInFavorite,
  });

  const handleLikeOrDislike = () => {
    setIsProductInFavorite(!isProductInFavorite);
  };
  const handleBtnBuyClick = () => {
    setScore(1);
  };

  return (
    <article className={styles.card}>
      <section className={styles.imageArea}>
        <img className={styles.image} src={props.src} alt='Изображение товара'/>
        <button
          type='button'
          className={likeBtnStyle}
          onClick={handleLikeOrDislike}
        > </button>
      </section>

      <section className={styles.titleAndPrice}>
        {!props.isPriceDiscount
        && <span className={styles.price}>{props.price} &#8381;</span>
        }

        {props.isPriceDiscount
        && <div>
            <span className={cn(styles.price, styles.priceDiscount)}>{props.price} &#8381;</span>
            <span className={cn(styles.price, styles.priceOld)}>{props.priceOld} &#8381;</span>
          </div>
        }

        <p className={styles.productTitle}>{props.title}</p>
      </section>
      {score === 0
      && <button
        onClick={handleBtnBuyClick}
        className={styles.btnBuy}
      >В корзину</button>
      }

      {score >= 1
      && <Counter
        score={score}
        setScore={setScore}
      />
      }
    </article>
  );
}

Card.propTypes = {
  src: PropTypes.string,
  price: PropTypes.string,
  priceOld: PropTypes.string,
  title: PropTypes.string,
  isPriceDiscount: PropTypes.bool,
};

export default Card;
