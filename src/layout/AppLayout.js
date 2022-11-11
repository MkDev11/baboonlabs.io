import { useState, useEffect } from 'react';
import Header from 'layout/header';
import Footer from 'layout/footer';
import './AppLayout.scss';

const AppLayout = (props) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window?.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleScroll = () => {
    let lastScrollTop = 0;
    const currentScrollTop = window?.pageYOffset;

    if (!visible && currentScrollTop > lastScrollTop) {
      setVisible(true);
    } else if (currentScrollTop === 0) {
      setVisible(false);
    }
    lastScrollTop = currentScrollTop;
  };

  return (
    <div className='app-layout'>
      <Header blackBanner={visible} />
      {props.children}
      <Footer visible={visible} />
    </div>
  );
};

export default AppLayout;
