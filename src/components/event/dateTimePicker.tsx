import { DatePicker, Form } from 'antd';
import { RangePickerProps } from 'antd/es/date-picker';
import dayjs from 'dayjs';
import React from 'react';


type IProps={
    name:string;
    uppercase?:boolean;
    fontWeight?:number | string;
    req_message?:string;
    size?:'large' | 'middle' | 'small';
    margin?:string;
    whiteSpace?:boolean;
    title?:string;
    format?:string;
}

const range = (start: number, end: number) => {
    const result = [];
    for (let i = start; i < end; i++) {
        result.push(i);
    }
    return result;
};
const disabledDateTime = () => ({
    disabledHours: () => range(0, 24).splice(4, 20),
    disabledMinutes: () => range(30, 60),
    disabledSeconds: () => [55, 56],
});

const disabledDate: RangePickerProps['disabledDate'] = (current) => {
    // Can not select days before today and today
    return current && current < dayjs().endOf('day');
};


const AntDateTimePicker = (props:IProps) => {
    const {format,name,uppercase,fontWeight,req_message,margin,whiteSpace,title,size}=props;

    const style: { textTransform?: 'uppercase', fontWeight?: number | string } = { fontWeight: fontWeight || 500 }
    if (uppercase) {
        style.textTransform = 'uppercase'
    }

    const rules: { [key: string]: (string | boolean) }[] = [];
    if (req_message) {
        rules.push({
            required: true,
            message: req_message
        })
    }
    if (whiteSpace) {
        rules.push({ whitespace: true })
    }
    return (
        <div style={{ margin: margin || '0.5rem 0.5rem 0' }}>
            <label
                htmlFor={name}
                style={style}
            >
                {title}
            </label>
            <Form.Item
                name={name}
                // rules={rules}
                hasFeedback
            >
                <DatePicker
                  size={size || 'large'}
                  format={format || "YYYY-MM-DD HH:mm:ss"}
                  disabledDate={disabledDate}
                  disabledTime={disabledDateTime}
                  showTime={{ defaultValue: dayjs('00:00:00', 'HH:mm:ss') }}
                />
            </Form.Item>
        </div>
    );
};

export default AntDateTimePicker;