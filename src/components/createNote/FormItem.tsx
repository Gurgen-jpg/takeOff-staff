import React from 'react';
import Input from '../Input';

type FormItemType = {
    title: string
    value: string | number
    onChange: (value: string)=>void
}
export const FormItem: React.FC<FormItemType> = ({title,value, onChange}) => {
    return (
            <Input value={String(value)} onChange={onChange} label={title} />
    );
};

