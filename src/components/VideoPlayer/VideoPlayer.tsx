import { useMemo, useRef, useState } from 'react';
import { LoadingOverlay, useMantineColorScheme } from '@mantine/core'
import classes from './VideoPlayer.module.css';

type VideoPlayerProps = {
    src: string;
    src2x?: string;
    freeSrc?: string;
    type?: string;
    freeSrcType?:string,
    loop?: boolean;
    playsInline?: boolean;
    allowDimming?:boolean;
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, src2x, freeSrc, freeSrcType, allowDimming: allowDimming=false, type="video/mp4", loop = true, playsInline = true }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isLoading, setIsLoading] = useState(true);


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

    const onVideoLoadStart = () =>{
        setIsLoading(true);
    };

    const onVideoCanPlay = () =>{
        setIsLoading(false);
    };

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
    const {colorScheme } = useMantineColorScheme();
    const isDark = colorScheme === 'dark';
    

    return (
        <div className={classes.videoContainer} onClick={togglePlayPause}>
            <LoadingOverlay 
            visible={isLoading}
            loaderProps={{ type: 'dots' }}
            />
            <video 
            className={`${(isDark && allowDimming) ? classes.dimmedVideo : ''}`} 
            ref={videoRef} 
            autoPlay 
            muted 
            loop={loop}
            playsInline={playsInline}
            onLoadStart={onVideoLoadStart}
            onCanPlay={onVideoCanPlay}
            >
                <source src={selectedSrc} type={type} />
                {freeSrc && <source src={freeSrc} type={freeSrcType} />}
                Download the video from <a href = {src}>the original link.</a>
            </video>
        </div>
    );
};

export default VideoPlayer;
