import { useRef } from 'react';
import classes from './VideoPlayer.module.css';

type VideoPlayerProps = {
    src: string;
    type?: string;
    loop?: boolean;
    playsInline?: boolean;
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, type="video/mp4", loop = true, playsInline = true }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    const togglePlayPause = () => {
        const video = videoRef.current;
        if (video) {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        }
    };

    return (
        <div className={classes.video} onClick={togglePlayPause}>
            <video ref={videoRef} autoPlay muted loop={loop} playsInline={playsInline}>
                <source src={src} type={type} />
            </video>
        </div>
    );
};

export default VideoPlayer;
