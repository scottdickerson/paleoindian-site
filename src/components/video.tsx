// responsive video component with src prop
import styles from "@/styles/Video.module.scss";
import { useRef, useState } from "react";
import Image from "next/image";

const PlayButton = () => {
  return (
    <div className={styles.playButton}>
      <Image src="../images/video/playButton.svg" alt="Play video" fill />
    </div>
  );
};

export const Video = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isStarted, setIsStarted] = useState(false);

  const handleClick = () => {
    if (isStarted) {
      videoRef.current?.pause();
    } else {
      videoRef.current?.play();
    }
    setIsStarted((isStarted) => !isStarted);
  };

  return (
    <>
      {!isStarted && <PlayButton onClick={handleClick} />}
      <video
        src={src}
        preload="metadata"
        className={styles.video}
        ref={videoRef}
        onClick={handleClick}
        onEnded={() => setIsStarted(false)}
      ></video>
    </>
  );
};
