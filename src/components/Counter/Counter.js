import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Counter.module.scss';

function Counter(props) {
  const handleIncrement = () => {
    props.setScore(props.score + 1);
  };
  const handleDecrement = () => {
    props.setScore(props.score - 1);
  };

  return (
    <div className={styles.counter}>
      <button
        type='button'
        className={cn(styles.counterBtn, styles.counterBtnDec)}
        onClick={handleDecrement}
      > </button>
      <span className={styles.score}>{props.score} шт.</span>
      <button
        type='button'
        className={cn(styles.counterBtn, styles.counterBtnInc)}
        onClick={handleIncrement}
      > </button>
    </div>
  );
}

Counter.propTypes = {
  score: PropTypes.number,
  setScore: PropTypes.func,
};

export default Counter;
