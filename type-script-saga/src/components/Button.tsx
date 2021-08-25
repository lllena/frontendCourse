import React from 'react';
import {FC} from 'react';

interface ButtonProps {
  title: string
  onClick: () => void
  classNames?: Array<string>
}

const Button: FC<ButtonProps> = ({title, onClick, classNames}) => {
  return <button className={`btn ${classNames?.join(' ')}`} onClick={onClick}>{title}</button>;
};

export default Button;
