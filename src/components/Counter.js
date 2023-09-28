import classes from './Counter.module.css';

const Counter = () => {
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>My Counter</h1>
      <div className={classes.value}>0</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
