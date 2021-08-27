import React from 'react';
import Button from './Button';

const Form = () => {
  return (
    <div className="form">
      <input className="input form-input"/>
      <Button
        title={'Create'}
        onClick={() => null}
        classNames={['form-button']}
      />
    </div>
  );
};


export default Form;