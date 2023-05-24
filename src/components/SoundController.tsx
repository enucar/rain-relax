import {useRef, useEffect} from 'react';
import rainAudio from '../assets/rain.mp3';

type Props = {
  active: boolean;
  onLoadedData: () => void;
};

const SoundController = ({active, onLoadedData}: Props) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (active) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [active]);

  return (
    <audio loop autoPlay ref={audioRef} onLoadedData={onLoadedData}>
      <source src={rainAudio} type='audio/mpeg' />
    </audio>
  );
};

export default SoundController;
