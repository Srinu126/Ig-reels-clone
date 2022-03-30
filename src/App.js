import './App.css';
import Logo from './images/logo.jpg'
import Avatar from './images/Avatar.jpg'
import VideoCard from './components/VideoCard';

function App() {
  return (
    <div className="app">
      <div className='app__top'>
        <img className='app__logo' src={Logo} alt='Logo' />
        <h1>Reels</h1>
        {/* image at the top-logo */}
        {/* Reels text */}
      </div>
      <div className='app__videos'>
        <VideoCard channel='srinu_r'
          avatarSrc={Avatar}
          song='Test Song - sassaassanga'
          likes={900}
          shares={350} />
        <VideoCard channel='srinu_r'
          avatarSrc={Avatar}
          song='Test Song - sassaassanga'
          likes={900}
          shares={350} />
        <VideoCard
          channel='srinu_r'
          avatarSrc={Avatar}
          song='Test Song - sassaassanga'
          likes={900}
          shares={350}
        />
        {/* container of app videos(Scrollable container) */}
        {/* <Video/> */}
        {/* <Video/> */}
      </div>
    </div>
  );
}

export default App;
