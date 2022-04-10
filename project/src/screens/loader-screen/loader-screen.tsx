import '../loader-screen/loader-screen-style.css';

function LoaderScreen() {
  return (
    <div className='loader__wrapper'>
      <div className='loader__text'>Loading...</div>
      <div className='loader'/>
    </div>
  );
}

export default LoaderScreen;
