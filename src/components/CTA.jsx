import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
        У вас есть на примете какой-нибудь проект? <br className='sm:block hidden' />
        Давайте создадим что-нибудь вместе!
      </p>
      <Link to='/contact' className='btn'>
        контакты
      </Link>
    </section>
  );
};

export default CTA;
