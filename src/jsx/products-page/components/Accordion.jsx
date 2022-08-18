import { Icon } from '@iconify/react';
import { useState } from 'react';
import CheckBoxInput from './CheckBoxInput';
import RangeInput from './RangeInput';
import { useRef } from 'react';
import ToggleInput from './ToggleInput';


const Accordion = (props) => {
  const [toggle, setToggle] = useState(false)

  const accordionRef = useRef()



  const arrowExpandStyle = {
    transform: 'rotate(180deg)'
  }

  function returnInput(type, option, key) {
    switch (type) {
      case "check": {
        return < CheckBoxInput option={option} key={key} />
      }
      case "range": {
        return <RangeInput option={option} key={Math.random() * 10000} />
      }
      case "toggle": {
        return <ToggleInput option={option} key={Math.random() * 10000} />
      }
    }
  }




  return (
    <div className='accordion'
      ref={accordionRef}
    >
      <h1 className='accordion-header'
        onClick={() => {
          if (toggle === false) {
            window.scrollTo({ top: accordionRef.current.offsetTop - 200, behavior: 'smooth' })
          }
          setToggle(!toggle)
        }}>
        <span>
          {props.input.header} {< Icon icon={props.input.svg} color="black" />}
        </span>

        <Icon style={toggle ? arrowExpandStyle : ''} icon="ep:caret-bottom" color="black" />
      </h1>
      <div className={`accordion-body ${toggle ? 'expand' : ''}`}
      >
        {props.input.body.options.map((option, index) => {
          return (
            returnInput(props.input.body.type, option, index)
          )
        })}
      </div>
    </div>
  );
}

export default Accordion
