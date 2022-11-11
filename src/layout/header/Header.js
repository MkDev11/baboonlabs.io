import NavbarBrand from './NavbarBrand';
import NavbarCollapse from './NavbarCollapse';
import { useToggle } from 'hooks';
import './Header.scss';

const navs = [
  {
    link: '/',
    text: 'home',
    isComing: false,
  },
  {
    link: '/lore',
    text: 'lore',
    isComing: false,
  },
  {
    link: '/roadmap',
    text: 'roadmap',
    isComing: false,
  },
  {
    link: '/stake',
    text: 'staking',
    isComing: true,
  },
  {
    link: '/marketplace',
    text: 'marketplace',
    isComing: true,
  },
  {
    link: '/bank',
    text: 'baboonbank',
    isComing: true,
  },
  {
    link: '/team',
    text: 'team',
    isComing: false,
  },
  {
    link: 'https://baboon-labs.gitbook.io/untitled',
    text: 'docs',
    isComing: false,
  },
];

const socialLinks = [
  {
    name: 'discord.png',
    link: 'https://discord.gg/P3NrAMcb',
  },
  {
    name: 'twitter.png',
    link: 'https://twitter.com/BaboonLabs',
  },
  {
    name: 'magiceden.png',
    link: 'https://magiceden.io',
  },
  {
    name: 'opensea.png',
    link: 'https://opensea.io',
  },
];

const Header = ({ blackBanner }) => {
  const [isToggle, setIsToggle] = useToggle();

  return (
    <div className='header'>
      <nav className='navbar'>
        <div className='container w-full max-w-11xl flex flex-wrap mx-auto px-4 md:px-6 items-center'>
          <NavbarBrand setIsToggle={setIsToggle} />
          <NavbarCollapse
            isToggle={isToggle}
            navs={navs}
            socialLinks={socialLinks}
          />
        </div>
      </nav>
    </div>
  );
};

export default Header;
