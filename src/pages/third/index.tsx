import { createContext, useState, useEffect, useRef } from 'react';
import ThemeContext from '../../components/MyContext';

interface ITheme {
  color: string;
}
export const themeContext = createContext<ITheme>({color: 'red'});

export default function Third() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);

  let inputRef = useRef<HTMLInputElement>(null);
  // useRef也可以用作实例变量。如果我们需要能够更新当前属性，我们需要使用useRef的泛型类型Type || null
  let timeoutRefId = useRef<any | null>();
  /* const changeNum = (way:boolean) => () => {
    if (way) {
      setCount(count + 1)
    } else {
      setCount(count - 1)
    }
  } */
  // 初始化以及有状态更新都会执行，如果第二个参数为[]，则类似于class组件的componentDidMount和componentWillUnmount生命周期函数了；
  useEffect(()=> {
    console.log('你好')
    return ()=> {
      console.log("取消监听")
    }
  })
  // 初始化以及仅有show变化时，才会执行
  useEffect(()=> {
    console.log('show')
  }, [show])

  useEffect(()=> {
    const id = setTimeout(() => {
      console.log('执行了')
    }, 2000);
    if (timeoutRefId.current) {
      timeoutRefId.current = id
    }
    return () => {
      if (timeoutRefId.current) {
        clearTimeout(timeoutRefId.current)
      }
    }
    
  })
  function changeNum(way:boolean) {
    if (way) {
      setCount(count + 1)
    } else {
      setCount(count - 1)
    }
  }

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }
  return (
    <div>
      <h2>当前数：{count}</h2>
      <ThemeContext/>
      <div>
        <button onClick={()=>changeNum(true)}>+</button>
        <button onClick={()=>changeNum(false)}>-</button>
        <button onClick={()=> setShow(!show)}>{show ? 'show' : 'hidden'}</button>
      </div>
      <div>
        <input type="text" ref={inputRef}/>
        <button onClick={focusInput}>按钮</button>
      </div>
    </div>
  )
}