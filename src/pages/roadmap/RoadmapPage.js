import { useEffect, useState } from 'react';
import { scroller } from 'react-scroll';
import handleViewport from 'react-in-viewport';
import AppLayout from 'layout/AppLayout';

const roadmap = [
  {
    name: 'phase 1',
    title: 'building the community',
    descriptions: [
      'Our community is our greatest asset: we want to earn your trust, and reward supporters from day one. We are staffed with alpha callers ready to help you increase your stacks and tools to help you thrive.',
      'An engaged moderation team is ready to keep things lively in the discord. Server games? Art competitions? Witty Banter? Something in-between? You’ll find it in our discord.',
      'So come relax with us today and network while also receiving allow-list opportunities and NFT giveaways to exciting and innovative collections.',
    ],
    image: 'roadmap1.png',
  },
  {
    name: 'phase 2',
    title: 'launching the collection',
    descriptions: [
      'Our collection of 8888 Genesis Baboons will be born on the Solana network. Welcome to the beginning of everything.',
      'Owning this NFT will give you access to our partner projects, the bulk of our roadmap, exceptional utilities, and unique claims.',
      'We will always provide additional utilities to our Genesis Baboons and without one you will not be able to access the rest of the roadmap and all that Baboon Labs has to offer.',
    ],
    image: 'roadmap2.png',
  },
  {
    name: 'phase 3',
    title: 'introducing tokenomics',
    descriptions: [
      'Our $BABN token is coming—but fair warning! Holders only.',
      'You will need to stake your Baboon(s) to claim $BABN, which is the only currency usable within the Baboon Labs universe.',
      'We will provide holders with a detailed article outlining the mathematics and mechanics behind $BABN before going live.',
    ],
    image: 'roadmap3.png',
  },
  {
    name: 'phase 4',
    title: 'introducing staking',
    descriptions: [
      'We know you’re going to diamond hand your Baboons anyway—but let’s reward you for it! Staking will be available for holders and is the only way to earn $BABN.',
      'You’ll have to stake at least one Baboon to accrue $BABN, but you’ll only have to pay gas one-time per Baboon.',
      'There will be daily opportunities to use $BABN and we want to make sure our holders don’t have excessive transaction fees cutting into their $BABN ROI. ',
    ],
    image: 'roadmap4.png',
  },
  {
    name: 'phase 5',
    title: 'marketplace launch',
    descriptions: [
      'So, you’ve got $BABN, now what? Well, you’ve got options at Baboon Labs.',
      'NFT’s? Allow-lists? Merchandise? Real-life experiences? We got ‘em. And you’ll need $BABN to get them from us.',
      'We will balance and re-balance the marketplace based off $BABN supply to reward holders and make sure items are available and equitably distributed.',
    ],
    image: 'roadmap5.png',
  },
  {
    name: 'phase 6',
    title: 'introducing baboonbank',
    descriptions: [
      'The Baboon Bank is the treasury of our ecosystem. With a reserve of over Three Million Dollars the Baboon Bank is accessible by holding a Genesis and will provide fresh, innovative, and unique opportunities to our holders. ',
      'Minting revenue and 75% of all secondary sales will be rebalanced and redistributed into this community treasury.',
      'This treasury will also serve as a launchpad for emergent artists and projects looking for funding. The community will play an essential role in the selection of these projects via a DAO.',
    ],
    image: 'roadmap6.png',
  },
  {
    name: 'phase 7',
    title: 'merchandise',
    descriptions: [
      'Repping your Baboon as your PFP? Smart. Repping your Baboon on your body? Next-Level smart.',
      'We will release exclusive holder only items: t-shirts, hoodies, cups, boards, stickers and whatever else our passionate and creative community can come up with.',
      'Baboon Labs has contracted one of Turkey’s best textile companies to provide our merchandise—no cardboard sweatshirts here.',
    ],
    image: 'roadmap7.png',
  },
  {
    name: 'phase 8',
    title: 'bridge',
    descriptions: [
      'A bridge-- but no tolls here.',
      'V2 Baboons will be claimable by Genesis Holders(FREE). V2 Baboons will increase the $BABN earing rates of the genesis token. In addition, our V2 Baboons will airdrop balloons that further increase $BABN earning rates.',
      'Come load into our custom Minecraft server--just for Baboon Holders--and join our treasure hunts. Race to find and claim the prizes before your fellow baboons beat you to our extensive prize list: $ETH, $SOL, NFT’s, badges and IRL experiences are just some of the goodies we’ve hidden within the server. ',
    ],
    image: 'roadmap8.png',
  },
  {
    name: 'phase 9',
    title: 'baboonverse',
    descriptions: [
      'Baboons invade the metaverse as Masters of our own universe and legends roaming our own unique lands. ',
      'A great place to hang out with Baboons and our partnered projects but only guaranteed to Genesis holders!',
      '<strong>PVP Game:</strong><br/>Come battle against your fellow holders with unique characters, weapons and outfits all designed by our in-house game developers on custom maps meticulously crafted by our design team.',
    ],
    image: 'roadmap9.png',
  },
];

const sectionStickers = [
  { id: 0, target: 'section0' },
  { id: 1, target: 'section1' },
  { id: 2, target: 'section2' },
  { id: 3, target: 'section3' },
  { id: 4, target: 'section4' },
  { id: 5, target: 'section5' },
  { id: 6, target: 'section6' },
  { id: 7, target: 'section7' },
  { id: 8, target: 'section8' },
];

const RoadmapSection = ({ phase, index, ...props }) => {
  const { inViewport, forwardedRef, setActive } = props;
  const [slide, setSlide] = useState(false);

  useEffect(() => {
    // const doSlide = () => {
    if (inViewport) {
      setActive(index);
      setSlide(true);
    } else {
      setSlide(false);
    }
    // };

    // return () => doSlide();
  }, [inViewport]); //eslint-disable-line

  return (
    <div
      key={`section_${index}`}
      id={`section${index}`}
      className={`lg:pl-24 pl-0 relative ${slide && 'slide'}`}
      ref={forwardedRef}
      style={{
        transform: 'translate3d(0px, 0px, 0px)',
        opacity: 1,
      }}
    >
      <div className='min-h-screen flex flex-col pt-24 sm:mb-0 md:pt-24 lg:py-16 lg:justify-center'>
        <h1 className='font-[SB] w-full tracking-tighter lg:pb-6 pb-3 -ml-0.5 2xl:text-6xl xl:text-5xl lg:text-4xl text-2xl text-black uppercase font-900 whitespace-pre-line'>
          {phase.name}
          <br /> <div className='text-[#7c5e49] max-w-lg'>{phase.title}</div>
        </h1>
        <div className='text-gray-800 lg:text-sm text-xs lg:leading-6 leading-4 lg:w-5/12 w-full'>
          {phase.descriptions.map((content, indexj) => {
            return (
              <p
                key={`${phase.name}-${indexj}`}
                className='text-sm md:text-base mt-4 md:mt-8'
                dangerouslySetInnerHTML={{ __html: content }}
              />
            );
          })}
        </div>
        <img
          className='relative md:absolute bottom-0 right-0 md:w-1/2'
          src={`./assets/images/arts/${phase.image}`}
          alt={`section_image${index}`}
        />
      </div>
    </div>
  );
};

const ViewportSection = handleViewport(RoadmapSection);

const RoadmapPage = () => {
  const [numberOfSection, setNumberOfSection] = useState(0);

  // const scrollToPage = (id) => {
  //   setNumberOfSection(id);
  // };

  return (
    <AppLayout>
      <div className='px-4 lg:px-8 md:px-5 relative'>
        <div className='flex max-w-11xl mx-auto text-[#171717] flex-col'>
          <div className='fixed top-0 w-1 h-screen flex items-center z-100'>
            <div className='grid gird-cols-1 h-full gap-2 lg:max-h-[36rem] py-32 lg:py-0 '>
              {sectionStickers.map((item, index) => {
                return (
                  <a
                    key={`sticky-${index}`}
                    href={`#section${index}`}
                    className={`transition-all duration-700 ease-in-out opacity-100 h-full rounded-sm relative w-1 bg-[#a0a0a0] hover:bg-[#c03540]`}
                    // className={`transition-all duration-700 ease-in-out opacity-100 h-full rounded-sm relative w-1 ${
                    //   index === numberOfSection - 1
                    //     ? 'bg-[#c03540]'
                    //     : 'bg-[#d9d9d9]'
                    // }`}
                    // onClick={() => scrollToPage(item.id)}
                  >
                    {''}
                  </a>
                );
              })}
            </div>
          </div>
          <div className='pl-4'>
            {roadmap.map((phase, index) => {
              return (
                <ViewportSection
                  key={`view-section-${index}`}
                  phase={phase}
                  index={index}
                  setActive={(index) => {
                    setNumberOfSection(index);
                  }}
                  // onEnterViewport={() => {
                  //   setNumberOfSection(index);
                  //   console.log('enter => ', index);
                  // }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default RoadmapPage;
