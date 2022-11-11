import AppLayout from 'layout/AppLayout';
import Carousel from 'react-multi-carousel';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import 'react-multi-carousel/lib/styles.css';
import 'react-lazy-load-image-component/src/effects/blur.css';

import './TeamPage.scss';

const responsiveRate = {
  extralarge: {
    breakpoint: { max: 2200, min: 1280 },
    items: 3,
  },
  large: {
    breakpoint: { max: 1280, min: 992 },
    items: 3,
  },
  medium: {
    breakpoint: { max: 992, min: 560 },
    items: 2,
  },
  small: {
    breakpoint: { max: 560, min: 0 },
    items: 1,
  },
};

const members = [
  {
    name: 'KAAN CAGLAR',
    role: 'Founder',
    link: 'https://twitter.com/MrScoobyDooby0',
    description:
      'Studied economics & computer science, very early adopter of crypto and NFTs, founder/co-founder of two blockchain based startups, stacking jpegs for fun.',
    avatar: '1.png',
  },
  {
    name: 'VIKTOR CHIN',
    role: 'Designer',
    link: 'https://twitter.com/VictorChiny',
    description:
      'Head of the Designing team, Passionate artist and avid NFT enthusiast. Started drawing at a young age and doesn’t plan on stopping!',
    avatar: '2.png',
  },
  {
    name: 'Jiao Chen',
    role: 'Developer',
    link: 'https://www.linkedin.com/in/jiaochen0125',
    description:
      'Head of the development team, professional full stack developer with 5+ years of experience.',
    avatar: '3.png',
  },
  {
    name: 'Kaveh Malekzadeh',
    role: 'Developer',
    link: 'https://twitter.com/Wuavo_NFT',
    description:
      'Developer of the development team, many years of experience of development and blockchain. Proficiency in making smart contracts and dapps.',
    avatar: '9.png',
  },
  {
    name: 'Daniel Ju',
    role: 'Project',
    link: '/',
    description:
      'CEO of a streetwear clothing brand, avid Web 3.0 enthusiast with a passion for aesthetics. Experienced and savvy with building brand identities and elevating businesses to reach higher highs.',
    avatar: '4.png',
  },
  {
    name: 'Matteo Giupponi',
    role: 'Community',
    link: 'https://twitter.com/TeoNFT_',
    description:
      'Specialized in Economics and Marketing, I now trade jpegs in my free time. I aim to ensure the success of the brand through my experiences and dedication.',
    avatar: '5.png',
  },
  {
    name: 'ANDRÉ GOMES',
    role: 'Moderator',
    link: 'https://twitter.com/SenseiKikuchi',
    description:
      'Head of the Moderating team, early adopter and passionate of everything NFT’s. My past moderating experience will now be put at the service of BaboonLabs. Loves brown rice.',
    avatar: '6.png',
  },
];

const MemberCard = ({ member }) => {
  const { name, role, link, description, avatar } = member;

  return (
    <div className='px-4 md:px-6 lg:px-8'>
      <p className='text-sm md:text-base text-[#3c3c3c] h-56 md:h-60 lg:h-56 xl:h-52'>
        {description}
      </p>
      {/* mt-16 md:mt-20 lg:mt-24 */}
      <div className='flex flex-col items-center text-center'>
        <a
          href={link}
          className='text-2xl md:text-2xl lg:text-3xl xl:text-4xl text-[#7C5E49] uppercase hover:text-[#c4926f] z-100'
          target='_blank'
          rel='noreferrer'
        >
          {name}
        </a>
        <h5 className='mt-4 md:mt-6 text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#3c3c3c] uppercase'>
          {role}
        </h5>
      </div>
      <LazyLoadImage
        effect='blur'
        src={`./assets/images/arts/${avatar}`}
        alt='carousel-item'
        className='-mt-20 sm:-mt-16 lg:-mt-20 xl:-mt-24'
      />
    </div>
  );
};

const TeamPage = () => {
  return (
    <AppLayout>
      <div className='mt-24 md:mt-36 lg:mt-48 xl:mt-64 px-4 md:px-8 lg:px-16 xl:px-24'>
        <Carousel
          responsive={responsiveRate}
          infinite={true}
          draggable={false}
          autoPlaySpeed={3000}
          arrows={true}
          renderButtonGroupOutside={true}
          containerClass='w-full'
        >
          {members.map((member, index) => {
            return <MemberCard key={`member_${index}`} member={member} />;
          })}
        </Carousel>
      </div>
    </AppLayout>
  );
};

export default TeamPage;
