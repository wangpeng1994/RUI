import React from 'react';
import './importIcons';
import './icon.scss';

interface IconProps {
  name: string;
  // onClick: React.MouseEventHandler<SVGElement> // svg 元素的鼠标处理函数
  onClick: () => void
}

// 声明函数组件接收的 props 的类型
const Icon: React.FunctionComponent<IconProps> = (props) => { // < > 表示类型接收一个参数
  return (
    <svg className="rui-icon" onClick={props.onClick}>
      <use xlinkHref={`#${props.name}`} />
    </svg>
  );
}

export default Icon;