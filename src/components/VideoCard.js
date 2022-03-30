import React ,{useState, useRef} from 'react';
import './VideoCard.css';
import IgVideo from '../images/mt_video.mp4'
import VideoHeader from './VideoHeader';
import VideoFooter from './VideoFooter';
function VideoCard({channel, avatarSrc, song, likes, shares}) {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const videoRef = useRef(null);

    const onVideoPress = () => {
        if(isVideoPlaying){
            videoRef.current.pause();
            setIsVideoPlaying(false)
            // stop
        } else {
            videoRef.current.play();
            setIsVideoPlaying(true)
            // play
        }
    }
    return(
        <div className='videoCard'>
            <VideoHeader />
            <video ref={videoRef} onClick={onVideoPress} className='video__player' src={IgVideo} loop/>
            <VideoFooter channel={channel}
          avatarSrc={avatarSrc}
          song={song}
          likes={likes}
          shares={shares} />
        </div>
    )
}

export default VideoCard;