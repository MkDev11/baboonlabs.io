import React, { useState } from 'react';
import AccordionItem from './AccordionItem';
import './Accordion.scss';

const Accordion = (props) => {
  const [clicked, setClicked] = useState(-1);

  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked(-1);
    }
    setClicked(index);
  };

  return (
    <ul className='accordion'>
      {props.data.map((item, index) => (
        <AccordionItem
          onToggle={() => handleToggle(index)}
          active={clicked === index}
          key={index}
          faq={item}
        />
      ))}
    </ul>
  );
};

export default Accordion;
