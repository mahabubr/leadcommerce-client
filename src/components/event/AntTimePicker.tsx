import { Form, TimePicker } from 'antd';
import dayjs from 'dayjs';
import React from 'react';

type IProps = {
    name: string;
    uppercase?: boolean;
    fontWeight?: number | string;
    req_message?: string;
    size?: 'large' | 'middle' | 'small';
    margin?: string;
    whiteSpace?: boolean;
    title?: string;
}

const AntTimePicker = (props: IProps) => {
    const { name, uppercase, fontWeight, req_message, margin, whiteSpace, title, size } = props;

    const style: { textTransform?: 'uppercase', fontWeight?: number | string } = { fontWeight: fontWeight || 500 }
    if (uppercase) {
        style.textTransform = 'uppercase'
    }

    // const rules: any = [];
    // if (req_message) {
    //     rules.push({
    //         required: true,
    //         message: req_message
    //     })
    // }
    // if (whiteSpace) {
    //     rules.push({ whitespace: true })
    // }
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
                <TimePicker
                    size={size || 'large'}
                    defaultValue={dayjs('12:08', 'HH:mm')}
                    format='HH:mm'
                />
            </Form.Item>
        </div>
    );
};

export default AntTimePicker;