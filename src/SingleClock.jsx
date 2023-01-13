import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { timeZones } from './timeZones';
import { Link } from 'react-router-dom';
import { MdArrowForwardIos } from 'react-icons/md';

function SingleClock() {
  const params = useParams();

  const [zone, setZone] = useState(timeZones);

  const city = zone[params.cityKey].city;
  const tZone = zone[params.cityKey].timeZone;
  const country = zone[params.cityKey].country;

  const [newTime, setNewTime] = useState(
    new Date().toLocaleTimeString('sv-SE', { timeZone: tZone })
  );

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setNewTime(date.toLocaleTimeString('sv-SE', { timeZone: tZone }));
    }, 1000);
  }, []);

  return (
    <div className='mr-12 md:items-center md:flex md:flex-col md:justify-center'>
      <div className='md:ml-0 ml-8 mt-4 flex items-center gap-4'>
        <Link exact='/' to='/'>
          <h5>Start</h5>
        </Link>
        <MdArrowForwardIos />
        <Link>{city}</Link>
      </div>
      <div
        className='flex  md:flex-col justify-between items-center 
    md:items-center p-6 bg-slate-200 rounded-md w-full md:w-96 md:h-60 m-6 md:mt-10
    '
      >
        <div className='md:text-6xl text-4xl text-gray-600'>{city}</div>
        <div className='md:text-2xl text-lg text-blue-700 font-bold'>
          {country.toUpperCase()}
        </div>

        <div className='md:text-6xl text-3xl text-gray-900 font-black font-mono'>
          {newTime}
        </div>
      </div>
    </div>
  );
}
export default SingleClock;
