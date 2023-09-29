import HoverVideoPlayer from 'react-hover-video-player';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
interface IMovementVideoProps {
  videoSrc: string;
  title: string;
  description?: string;
  pausedOverlay?: string;
  style?: React.CSSProperties;
}

export const MovementVideo: FC<IMovementVideoProps> = ({
  videoSrc,
  title,
  description,
  pausedOverlay,
  style,
}) => {
  return (
    <Link to="/speed">
      <div style={style}>
        <HoverVideoPlayer
          sizingMode="overlay"
          loadingOverlay={
            <div className="loading-overlay">
              <div className="lds-ripple">
                <div></div>
                <div></div>
              </div>
            </div>
          }
          preload="metadata"
          unloadVideoOnPaused={true}
          videoSrc={videoSrc}
          style={{ width: '100%', height: '100%' }}
          videoStyle={{ width: '100%', height: '100%', cursor: 'pointer' }}
          pausedOverlay={
            <div style={{ backgroundColor: '#171717', margin: 0, padding: 0 }}>
              <img
                src={pausedOverlay}
                alt=""
                style={{
                  // Make the image expand to cover the video's dimensions
                  width: '100%',
                  height: '100%',
                  //  objectFit: 'cover',
                  opacity: 0.6,
                  display: 'block',
                }}
              />
            </div>
          }
        />
      </div>
    </Link>
  );
};
