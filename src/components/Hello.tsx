import React from 'react';

// 组件要用到的属性
export interface Props {
  name: string;
  enthusiasmLevel?: number;
  onDecrement?: ()=> void;
  onIncrement?: ()=> void;
  location: any;
}

export default function Hello({name, enthusiasmLevel = 1, onDecrement, onIncrement, location}: Props) {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D')
  }
  console.log('hello',location)
  return (
    <div>
      <h2>{name + getExclamationMarks(enthusiasmLevel)}</h2>
      <div>
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
      </div>
    </div>
  );
}

// 类组件实现

/* export default class Hello extends React.Component<Props, object> {
  render() {
    const { name, enthusiasmLevel = 1 } = this.props;
    if (enthusiasmLevel <= 0) {
      throw new Error('You could be a little more enthusiastic. :D')
    }
    return (
      <div>
       <h2>{name + getExclamationMarks(enthusiasmLevel)}</h2>
      </div>
    );
  }
} */

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!')
}