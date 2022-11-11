import { useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';

const NavItem = ({ link, text, isComing }) => {
  const scrollToPage = async (e) => {
    e.preventDefault();
    // if (window.location.pathname !== '/') {
    //   await navigate('/');
    //   setTimeout(() => {
    //     scrollTarget(target);
    //   }, 300);
    // } else {
    //   scrollTarget(target);
    // }
  };

  return (
    <li className='flex'>
      {isComing ? (
        <a
          className='nav-link relative'
          href={`${link}`}
          onClick={(e) => scrollToPage(e)}
        >
          <span className='text-xs absolute top-0 right-0 -rotate-12 uppercase opacity-70 font-[Flood]'>
            coming<br></br>soon!
          </span>
          {text}
        </a>
      ) : (
        <a className='nav-link relative' href={`${link}`}>
          {text}
        </a>
      )}
    </li>
  );
};

export default NavItem;
