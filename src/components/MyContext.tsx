import { themeContext } from '../pages/third';
import { useContext } from 'react';

export default function MyContext(params:any) {
  const theme = useContext(themeContext);
  
  return (
    <div>主题色：{theme.color}</div>
  );
}