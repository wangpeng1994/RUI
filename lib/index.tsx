import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './icon';

const fn: React.MouseEventHandler = e => {
  console.log('e.target');
  console.log(e.target);
  console.log('断言');
  console.log((e.target as SVGUseElement).href);
}

ReactDOM.render(
  <div>
    <Icon name="wechat" onClick={fn} />
  </div>,
  document.getElementById('root')
);