import { useEffect, useState } from 'react';

const Footer = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(timeInterval);
    };
  }, []);
  const hour = new Date().getHours();

  const openHour = 12;
  const closedHour = 22;
  const isClosed = hour >= closedHour || hour <= openHour;
  return (
    <footer className='footer'>
      {time}. We &apos;re currently {isClosed ? 'Close' : 'open'}
    </footer>
  );
  // return React.createElement('footer', null, "We 're currently open!");
};

export default Footer;
