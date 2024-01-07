import React from 'react';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';



const CustomFaq = (props:any) => {

  const {data}=props;
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return <Collapse items={data} defaultActiveKey={['1']} onChange={onChange} />;
};

export default CustomFaq;