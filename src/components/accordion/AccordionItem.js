import React, { useRef } from 'react';
import { ReactComponent as ArrowUpIcon } from 'assets/icons/icon-arrow-up.svg';
import { ReactComponent as ArrowDownIcon } from 'assets/icons/icon-arrow-down.svg';
import { ReactComponent as StarIcon } from 'assets/icons/icon-star.svg';

const AccordionItem = (props) => {
  const { faq, active, onToggle } = props;
  const { title, content } = faq;

  const contentEl = useRef();

  return (
    <li className={`accordion-item ${active ? 'active' : ''}`}>
      <button className='accordion-item-button' onClick={onToggle}>
        <span className={`${active ? 'text-yellow-300' : 'text-white'}`}>
          {title}
        </span>
        <span className='accordion-item-control'>
          {!active ? <ArrowDownIcon /> : <ArrowUpIcon />}{' '}
        </span>
      </button>
      <div
        ref={contentEl}
        className='accordion-item-wrapper'
        style={
          active
            ? { height: contentEl?.current?.scrollHeight }
            : { height: '0px' }
        }
      >
        <div className='accordion-item-content'>
          <span>
            <StarIcon />
          </span>
          <span dangerouslySetInnerHTML={{ __html: '' + content }} />
        </div>
      </div>
    </li>
  );
};

export default AccordionItem;
