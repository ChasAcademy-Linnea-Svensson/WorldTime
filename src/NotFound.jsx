import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className='mt-48 w-full flex flex-col items-center justify-center gap-10'>
      <h1 className='text-6xl'>Oops you seem to be lost</h1>
      <p>Let me help you with these links:</p>
      <div className='flex items-center justify-center px-10 py-6 rounded-lg gap-10 bg-blue-200'>
        <Link exact='true' to='/'>
          Start
        </Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    </div>
  );
}

export default NotFound;
