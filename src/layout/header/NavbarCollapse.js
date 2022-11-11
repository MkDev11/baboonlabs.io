import NavItem from 'components/navItem';
import Link from 'components/link';

const NavbarCollapse = ({ isToggle, navs, socialLinks }) => {
  return (
    <div className={`navbar-collapse ${isToggle && 'show'}`}>
      <ul className='navbar-nav'>
        {navs.map((item, index) => {
          return (
            <NavItem
              key={`nav-item-${index}`}
              link={item.link}
              text={item.text}
              isComing={item.isComing}
            />
          );
        })}
      </ul>
      <ul className='flex'>
        {socialLinks.map((item, index) => {
          return (
            <Link
              key={`social-link-${index}`}
              name={item.name}
              link={item.link}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default NavbarCollapse;
