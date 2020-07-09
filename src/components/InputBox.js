import React, { useRef, useState } from 'react';
import { TweenMax, Power3 } from 'gsap';

const InputBox = (props) => {
  const [input, setInput] = useState('');
  const formRef = useRef();
  const buttonRef = useRef();

  function handleInput(e) {
    setInput(e.target.value);
  }

  function handleClick(e) {
    input !== '' && props.onAdd(input);
    e.preventDefault();
    setInput('');
  }

  function handleFocus() {
    TweenMax.to(formRef.current, 0.2, {
      css: { fontSize: '1.6rem' },
      ease: Power3.easeOut,
    });
    TweenMax.to(buttonRef.current, 0.2, {
      css: { fontSize: '1.6rem' },
      ease: Power3.easeOut,
    });
  }

  function handleFocusOut() {
    TweenMax.to(formRef.current, 0.2, {
      css: { fontSize: '1.4rem' },
      ease: Power3.easeOut,
    });
    TweenMax.to(buttonRef.current, 0.2, {
      css: { fontSize: '1.4rem' },
      ease: Power3.easeOut,
    });
  }

  return (
    <div className="inputBox">
      <form>
        <input
          ref={formRef}
          className="todoInput"
          type="text"
          placeholder="What do you need to do?"
          onInput={handleInput}
          value={input}
          onFocus={handleFocus}
          onBlur={handleFocusOut}
        />
        <button ref={buttonRef} className="todoButton" onClick={handleClick}>
          Get it!
        </button>
      </form>
    </div>
  );
};

export default InputBox;
