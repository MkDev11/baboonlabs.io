import { useNavigate } from 'react-router-dom';

import AppLayout from 'layout/AppLayout';
import Button from 'components/button';

const contents = [
  {
    content:
      'War and illness have been solved, and technology allows for endless clean energy and inexpensive travel to habitable universes. Eldest baboon is a physicist, and over the past few years he has become obsessed with a realm he calls the "Baboonverse". One night over dinner, he attempts to convince everyone that he has found a portal into this realm and that he plans to go and explore this alternative reality soon.',
  },
  {
    content: `After he has not returned calls for over a week, his tribe decides to go to his house and check on him. He's gone, but he has left a note behind: "I found the portal." He also provides directions for someone-such as you-to access the realm and come after him if he does not return.`,
  },
  {
    content:
      'The portal was feared at first, but it has turned out to be a blessing. With the correct electrical impulse, it has provided whatever material items baboons has needed for centuries. In this utopia, Baboonverse, the only thing left for baboons to do is pursue their wildest dreams. For history buffs, these dreams include reconstructing lost worlds like ancient Ethereum or the Solana Empire-complete with historical figures cloned from reconstructed DNA samples.',
  },
  {
    content: `What they don't realize is that these sequences contain viral DNA that the baboon race has not seen for thousands of years.`,
  },
];

const LorePage = () => {
  const navigate = useNavigate();

  return (
    <AppLayout>
      <div className='px-4 lg:px-8 md:px-5 relative'>
        <div className='flex max-w-11xl mx-auto text-[#171717] flex-col'>
          <div className='lg:pl-24 pl-0'>
            <div className='min-h-screen flex flex-col pt-24 mb-96 sm:mb-0 md:pt-32 lg:pt-24 md:pb-8 lg:py-16 lg:justify-center'>
              <h1 className='font-[SB] w-full tracking-tighter lg:pb-6 pb-3 -ml-0.5 2xl:text-6xl xl:text-5xl lg:text-4xl text-2xl text-black uppercase font-900 whitespace-pre-line'>
                Baboon
                <br /> <span className='text-[#7c5e49]'>Lore</span>
              </h1>
              <div className='text-gray-800 lg:text-sm text-xs lg:leading-6 leading-4 lg:w-5/12 w-full'>
                {contents.map((item, index) => {
                  return (
                    <p
                      key={`home-content-${index}`}
                      className='text-sm md:text-base'
                    >
                      {item.content}
                    </p>
                  );
                })}
              </div>
              <div className='mt-8 flex gap-8'>
                <Button
                  styleName='bg-red-500 text-white uppercase brightness-90 transition-auto hover:brightness-100'
                  text='roadmap'
                  handleClick={() => {
                    navigate('/roadmap');
                  }}
                />
              </div>
            </div>
          </div>
          <img
            className='absolute bottom-0 right-0 sm:w-1/2'
            src='./assets/images/arts/Wagmi.png'
            alt='twobaboon.png'
          />
        </div>
      </div>
      {/* <div className='relative'>
        <div className='min-h-screen pt-20 sm:pt-32 md:pt-48 w-full md:w-8/12 lg:w-6/12 px-8 md:pl-[60px] lg:pl-[120px] xl:pl-[220px] text-[#171717] flex flex-col relative'>
          <h2 className='2xl:text-6xl xl:text-5xl lg:text-4xl text-2xl uppercase whitespace-pre-line tracking-tighter'>
            Baboon <div className='text-[#7c5e49] mt-2'>lore</div>
          </h2>
          <div className='mt-4 flex flex-col gap-4 z-10 mb-8'>
            {contents.map((item, index) => {
              return (
                <p
                  key={`home-content-${index}`}
                  className='text-sm md:text-base'
                >
                  {item.content}
                </p>
              );
            })}
            <div className='mt-8 flex gap-8'></div>
          </div>
        </div>
        <div className='absolute bottom-0 md:right-32 md:w-auto max-w-[420px] lg:max-w-[540px] xl:max-w-[690px] z-0 opacity-50 md:opacity-80'>
          <img src='./assets/images/arts/Wagmi.png' alt='lore-baboon' />
        </div>
      </div> */}
    </AppLayout>
  );
};

export default LorePage;
