import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Привет я
        <span className='font-semibold mx-2 text-white'>Илья</span>
        👋
        <br />
        front-end разработчик
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          сделал много собственных проектов <br /> узнайтее о моих навыках
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          обо мне
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          Узнайте о моих работах <br />
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          портфолио
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          Нужен проект? <br /> сделаю любой понравившийся проект из моего портфолио
        </p>

        <Link to='/contact' className='neo-brutalism-white neo-btn'>
          мои контакты
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;
