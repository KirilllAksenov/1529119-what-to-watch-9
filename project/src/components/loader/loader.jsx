import classes from './loader.module.css';

function Loader() {
  return (
    <div className={classes.loader__wrapper}>
      <div className={classes.loader__text}>Loading...</div>
      <div className={classes.loader}></div>
    </div>
  );
}

export default Loader;
