import {useEffect, useRef, useCallback} from 'react';
import BackgroundVideo from '../assets/background.mp4';

type Props = {
  active: boolean;
  onLoadedData: () => void;
};

const BackgroundController = ({active, onLoadedData}: Props) => {
  const bgRef = useRef<HTMLDivElement | null>(null);
  const lightningTimeoutId = useRef<number | null>(null);

  const createLightning = useCallback(() => {
    if (!bgRef.current) return;

    const strikes = Math.floor(Math.random() * 3) + 1;

    for (let i = 0; i < strikes; i++) {
      setTimeout(() => {
        if (bgRef.current) {
          bgRef.current.style.backgroundColor = 'white';
        }
        setTimeout(() => {
          if (bgRef.current) {
            bgRef.current.style.backgroundColor = 'rgba(0, 0, 0, 1)';
          }
        }, Math.random() * 300);
      }, i * 200);
    }

    lightningTimeoutId.current = window.setTimeout(
      createLightning,
      Math.random() * 15000 + 3000
    );
  }, []);

  useEffect(() => {
    if (active) {
      if (bgRef.current) {
        bgRef.current.style.backgroundColor = 'rgba(0, 0, 0, 1)';
      }

      createLightning();
    } else {
      if (bgRef.current) {
        bgRef.current.style.backgroundColor = 'rgba(0, 0, 0, 0)';
      }

      if (lightningTimeoutId.current !== null) {
        window.clearTimeout(lightningTimeoutId.current);
        lightningTimeoutId.current = null;
      }
    }
  }, [active, createLightning]);

  return (
    <>
      <video autoPlay loop muted className='background-video' onLoadedData={onLoadedData}>
        <source src={BackgroundVideo} type='video/mp4' />
      </video>
      <div ref={bgRef} className='background-overlay'></div>
    </>
  );
};

export default BackgroundController;
