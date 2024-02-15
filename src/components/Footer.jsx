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
  const isOpen = hour >= openHour && hour <= closedHour;
  return (
    <footer className='footer'>
      {isOpen ? (
        <div className='order'>
          <p>
            We &lsquo;re open untill {closedHour}:00. Come visit us or order
            online.
          </p>
          <button className='btn'>Order</button>
        </div>
      ) : (
        <p>
          We &lsquo;re happy to welcome you between {openHour}:00 and{' '}
          {closedHour}:00.
        </p>
      )}
      <p>{time}</p>
    </footer>
  );
  // return React.createElement('footer', null, "We 're currently open!");
};

export default Footer;
