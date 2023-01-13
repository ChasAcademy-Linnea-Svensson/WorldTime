import { AiFillGithub } from 'react-icons/ai';

function Contact() {
  return (
    <div className='w-full flex flex-col justify-center items-center mt-6 gap-4'>
      <h1 className='text-3xl'>Contact</h1>
      <h2>Name: Linnea Svensson</h2>
      <h2>Email: Linnea.Svensson@ChasAcademy.se</h2>

      <div>
        <a
          target='_blank'
          href='https://github.com/ChasAcademy-Linnea-Svensson'
        >
          <AiFillGithub className='text-5xl' />
        </a>
      </div>
    </div>
  );
}

export default Contact;
