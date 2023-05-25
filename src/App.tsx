import {useEffect, useState} from 'react';

import BackgroundController from './components/BackgroundController';
import SoundController from './components/SoundController';
import Container from './components/Container';
import Header from './components/Header';
import Instruction from './components/Instruction';
import GettingStarted from './components/GettingStarted';
import Footer from './components/Footer';
import LoadingIndicator from './components/LoadingIndicator';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [soundLoaded, setSoundLoaded] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'Space') {
        setIsActive((prevState) => !prevState);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (isActive) {
      document.documentElement.requestFullscreen();
    } else if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  }, [isActive]);

  useEffect(() => {
    if (soundLoaded && videoLoaded) {
      setIsLoading(false);
      console.log('ready');
    }
  }, [videoLoaded, soundLoaded]);

  return (
    <div
      className='fullpage relative w-full flex justify-center items-center px-4'
      onDoubleClick={() => setIsActive((prevState) => !prevState)}
    >
      {soundLoaded && (
        <BackgroundController
          active={isActive}
          onLoadedData={() => setVideoLoaded(true)}
        />
      )}
      <SoundController
        active={isActive}
        onLoadedData={() => setSoundLoaded(true)}
      />
      {!isActive && !isLoading && (
        <Container className='text-center text-white space-y-4 md:space-y-12 bg-black bg-opacity-80 py-8 md:py-24 px-8 md:px-32 rounded-2xl overflow-hidden'>
          <Header />
          <hr />
          <Instruction />
          <hr />
          <GettingStarted />
          <Footer />
        </Container>
      )}
      {isLoading && <LoadingIndicator />}
    </div>
  );
}

export default App;
