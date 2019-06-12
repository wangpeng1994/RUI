import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './icon/icon';

// 外部组件中的事件只是传递，而不是触发
const fn: React.MouseEventHandler = e => {
  console.log('e.target');
  console.log(e.target);
  console.log('断言');
  console.log((e.target as SVGUseElement).href);
}

ReactDOM.render(
  <div>
    <Icon name="wechat" 
          // className="qqq"
          onClick={fn}
          onMouseEnter={() => console.log('enter')}
          onMouseLeave={() => console.log('leave')}
          onTouchStart={() => console.log('touch')}
    />
  </div>,
  document.getElementById('root')
);