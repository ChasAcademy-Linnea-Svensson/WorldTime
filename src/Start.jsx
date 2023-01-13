import Clock from './Clock';

function Start() {
  return (
    <main className='p-8'>
      <div className='flex flex-col md:flex-row items-center space-x-0 md:space-x-4'>
        <Clock city='Tokyo' timeZone='Asia/Tokyo' />
        <Clock city='Stockholm' timeZone='Europe/Stockholm' />
        <Clock city='Bangkok' timeZone='Asia/Bangkok' />
        <Clock city='Melbourne' timeZone='Australia/Melbourne' />
      </div>
    </main>
  );
}

export default Start;
