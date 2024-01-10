import { useMemo, useRef } from 'react';
import classes from './VideoPlayer.module.css';

type VideoPlayerProps = {
    src: string;
    src2x?: string;
    freeSrc?: string;
    type?: string;
    freeSrcType?:string,
    loop?: boolean;
    playsInline?: boolean;
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, src2x, freeSrc, freeSrcType, type="video/mp4", loop = true, playsInline = true }) => {
    const videoRef = useRef<HTMLVideoElement>(null);


    const selectedSrc = useMemo(() => {
        const isLargeScreen = window.matchMedia('(min-width: 768px)').matches;
        const canPlayMp4 = videoRef.current?.canPlayType(type) === "probably" || videoRef.current?.canPlayType(type) === "maybe";
        if (window.devicePixelRatio > 1 && src2x && isLargeScreen) {
            return src2x;
        } else if (canPlayMp4 || !freeSrc){
            return src;
        }
        return freeSrc;
    }, [src, src2x, freeSrc, type]);


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
        <div className={classes.videoContainer} onClick={togglePlayPause}>
            <video className={classes.video} ref={videoRef} autoPlay muted loop={loop} playsInline={playsInline}>
                <source src={selectedSrc} type={type} />
                {freeSrc && <source src={freeSrc} type={freeSrcType} />}
                Download the video from <a href = {src}>the original link.</a>
            </video>
        </div>
    );
};

export default VideoPlayer;
