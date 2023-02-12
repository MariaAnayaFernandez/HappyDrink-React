import React from 'react'
import ReactPlayer from 'react-player'


export const Video = () => {
    return(
        <div className="Video" style={{ width:'100%', height:'100%', position:'relative', zIndex:'-1', backgroundColor: 'rgb(11, 43, 51)'}}>
        <ReactPlayer
        url={require('../../../imagenes/video.mp4')}
        width='100%'
        height='100%'
        playing
        loop
        muted
        ></ReactPlayer>
        </div>
        
    )
}