import React from 'react';

interface IconProps {
  name: string;
}

// 声明函数组件接收的 props 的类型
const Icon: React.FunctionComponent<IconProps> = (props) => { // < > 表示类型接收一个参数
  return (
    <span>{props.name}</span>
  );
}

export default Icon;