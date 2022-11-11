import { animateScroll as scroll } from 'react-scroll';
import { ReactComponent as ScrollTopIcon } from 'assets/icons/icon-scrolltop.svg';
import './Footer.scss';

const Footer = ({ visible }) => {
  const handleScrollTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      {visible && (
        <div className='scrolltop'>
          <span onClick={handleScrollTop}>
            <ScrollTopIcon />
          </span>
        </div>
      )}
    </>
  );
};

export default Footer;
