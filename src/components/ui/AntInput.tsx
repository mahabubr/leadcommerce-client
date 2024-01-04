import { Form, Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React from 'react';


type IProps={
    name:string;
    uppercase?:boolean;
    fontWeight?:number | string;
    req_message?:string;
    placeholder:string;
    type?:string;
    size?:'large' | 'middle' | 'small';
    margin?:string;
    whiteSpace?:boolean;
    title?:string;
    textarea?:boolean;
}
const AntInput = (props:IProps) => {
    const {name,uppercase,fontWeight,req_message,placeholder,type,size,margin,whiteSpace,title,textarea}=props;

    const style:{textTransform?:'uppercase',fontWeight?:number|string}={fontWeight:fontWeight || 500}
    if(uppercase){
        style.textTransform='uppercase'
    }

    const rules:{[key:string]:(string | boolean)}[]=[];
    if(req_message){
        rules.push({required: true,
                        message: req_message})
    }
    if(whiteSpace){
        rules.push({ whitespace: true})
    }
    return (
        <div style={{ margin:margin || '0.5rem 0.5rem 0' }}>
            <label
                htmlFor={name}
                style={style}
            >
                {title}
            </label>
            <Form.Item
                name={name}
                rules={rules}
                hasFeedback
            >
                {textarea?(
                    <TextArea size={size || "small"}  placeholder={placeholder}/>
                ):(
                    <Input size={size || "large"}  placeholder={placeholder} type={type || 'text'} />
                )}
            </Form.Item>
        </div>
    );
};

export default AntInput;