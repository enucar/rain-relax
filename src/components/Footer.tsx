const Footer = () => {
  return (
    <footer className='text-xs max-w-sm mx-auto'>
      {/* <p className='mb-4'>
        If you enjoyed Rain Relax and want to show your support, consider buying
        me a coffee. I'd greatly appreciate it!{' '}
        <a
          href='https://www.buymeacoffee.com/enucar'
          target='_blank'
          className='text-blue-400 font-bold hover:underline'
        >
          Buy Me A Coffee
        </a>
      </p> */}
      <ul>
        <li>
          <a
            href='https://www.pexels.com/video/rain-water-sliding-down-the-glass-window-surface-5197762/'
            target='_blank'
            rel='noopener'
            className='text-blue-400 hover:underline'
          >
            Video by Aleks BM
          </a>
        </li>
        <li>
          Sound Effect from{' '}
          <a
            href='https://pixabay.com/sound-effects/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=16705'
            target='_blank'
            rel='noopener'
            className='text-blue-400 hover:underline'
          >
            Pixabay
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
