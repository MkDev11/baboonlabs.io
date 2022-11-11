const Link = ({ name, link }) => {
  return (
    <li className='px-4 relative hover:opacity-80 transition-all ease-in-out duration-300'>
      <a href={link} target='_blank' rel='noreferrer'>
        <img className='w-4' src={`./assets/icons/${name}`} alt='SocialIcon' />
      </a>
    </li>
  );
};

export default Link;
