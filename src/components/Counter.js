import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../store/counter';
import styles from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const incrementHandler = () => {
    /* dispatch({ type: 'increment' }); */
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    /* dispatch({ type: 'decrement' }); */
    dispatch(counterActions.decrement());
  };

  const duplicateHandler = () => {
    /* dispatch({ type: 'duplicate', payload: 2 }); */
    dispatch(counterActions.duplicate(2));
  };

  const toggleCounterHandler = () => {
    /* dispatch({ type: 'toggle' }); */
    dispatch(counterActions.toggle());
  };

  return (
    <main className={styles.counter}>
      <h1>Redux Counter</h1>
      {counter.showCounter && (
        <>
          <div className={styles.value}>{counter.value}</div>
          <div>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={duplicateHandler}>Duplicate</button>
            <button onClick={decrementHandler}>Decrement</button>
          </div>
        </>
      )}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
