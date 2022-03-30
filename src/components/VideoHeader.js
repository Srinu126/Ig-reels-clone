import React from 'react';
import './VideoHeader.css';
import CameraAltOutLinedIcon from '@material-ui/icons/CameraAltOutlined'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
function VideoHeader(){
    return(
        <div className='videoHeader'>
            <ArrowBackIosIcon />
            <h3>Reels</h3>
            <CameraAltOutLinedIcon />

        </div>
    )
}

export default VideoHeader;