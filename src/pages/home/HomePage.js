import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AppLayout from 'layout/AppLayout';
import Button from 'components/button';
import './HomePage.scss';

const contents = [
  {
    content:
      'Baboons are a collection of 8888 NFTs (non-fungible tokens) that are made up of hundreds of unique and refreshing visual traits, providing valuable utility and education for the community. Baboons will be born on Solana, then conquer Ethereum Network.',
  },
  {
    content:
      'BaboonLabs will never stop expanding its universe and introducing new experiences that will be only available to collectors. We are a Multi-Chain Community that completely transcends a simple PFP offering.',
  },
  {
    content:
      'Owning a Baboon will grant you access to every utility that we are presenting. Being a holder will precisely give you the access membership to the coolest brand, and will allow you to vote on community-driven features, projects, products, and events.',
  },
  {
    content:
      'Cross-Chain Integration | $BABN | Metaverse Expansion | Airdrops | Alpha | Utility | Staking | Funding | DAO | PVP Game',
  },
];

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <AppLayout>
      <div className='px-4 lg:px-8 md:px-5 relative'>
        <div className='flex max-w-11xl mx-auto text-[#171717] flex-col'>
          <div className='lg:pl-24 pl-0'>
            <div className='min-h-screen flex flex-col pt-24 mb-48 sm:mb-0 md:pt-32 lg:pt-24 md:pb-8 lg:justify-center'>
              <h1 className='font-[SB] w-full tracking-tighter lg:pb-6 pb-3 -ml-0.5 2xl:text-6xl xl:text-5xl lg:text-4xl text-2xl text-black uppercase font-900 whitespace-pre-line'>
                Baboon
                <br /> <span className='text-[#7c5e49]'>Labs</span>
              </h1>
              <div className='text-gray-800 lg:text-sm text-xs lg:leading-6 leading-4 lg:w-5/12 w-full'>
                {contents.map((item, index) => {
                  return (
                    <p
                      key={`home-content-${index}`}
                      className='text-sm md:text-base mt-4'
                    >
                      {item.content}
                    </p>
                  );
                })}
              </div>
              <div className='mt-8 flex gap-4 sm:gap-8 flex-col sm:flex-row'>
                <Button
                  styleName='bg-red-500 text-white uppercase brightness-90 transition-auto hover:brightness-100'
                  text='minting soon'
                  handleClick={() => {
                    toast.info('Coming Soon');
                  }}
                />
                <Button
                  styleName='bg-gray-700 text-white uppercase brightness-75 transition-auto hover:brightness-100'
                  text='baboon-lore'
                  handleClick={() => {
                    navigate('/lore');
                  }}
                />
              </div>
            </div>

            <div className='absolute bottom-0 -left-8 w-48 z-0'>
              <img src='./assets/images/home-small.png' alt='bottom-baboon' />
            </div>
          </div>
          <img
            className='absolute bottom-0 right-0 w-1/2'
            src='./assets/images/twobaboons.png'
            alt='twobaboon.png'
          />
        </div>
      </div>
    </AppLayout>
  );
};

export default HomePage;
