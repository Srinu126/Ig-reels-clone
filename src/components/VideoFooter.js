import React from 'react';
import './VideoFooter.css';
import { Button, Avatar } from '@material-ui/core';
import MusicNoteIcon from '@material-ui/icons/MusicNote'
import Ticker from 'react-ticker'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ModeCommentIcon from '@material-ui/icons/ModeComment'
import SendIcon from '@material-ui/icons/Send'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
function VideoFooter({ channel, avatarSrc, song, likes, shares }) {
    return (
        <div className='videoFooter'>
            <div className='videoFooter__text'>
                <Avatar src={avatarSrc} />
                <h3>
                    {channel} . <Button>Follow</Button>
                </h3>

            </div>
            <div className='videoFooter__ticker'>
                <MusicNoteIcon className='videoFooter__icon' />
                <Ticker mode='smooth'>
                    {({index}) => (  
                        <>
                        <h1>{song}</h1>
                        </>
                    )}
                </Ticker>
            </div>
            <div className='videoFooter__actions'>
                <div className='videoFooter__actionsLeft'>
                    <FavoriteIcon fontSize='small' />
                    <ModeCommentIcon fontSize='small' />
                    <SendIcon fontSize='small'/>
                    <MoreHorizIcon fontSize='small' />


                </div>
                <div className='videoFooter__actionsRight'>
                    <div className='videoFooter__stat'>
                        <FavoriteIcon fontSize='small' />
                        <p>{likes}</p>
                    </div>
                    <div className='videoFooter__stat'>
                        <ModeCommentIcon fontSize='small' />
                        <p>{shares}</p>
                    </div>
                    
                </div>
            </div>


        </div>
    )
}
export default VideoFooter;