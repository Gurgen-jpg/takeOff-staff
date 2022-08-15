import React, {ChangeEvent, useState} from 'react';
import {Button, InputAdornment, TextField} from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

interface IInput {
    value?: string
    onChange?: (value: string) => void
    label?: string
    type?: string
}

export const Input: React.FC<IInput> = ({value, onChange, label, type}) => {

    const [showHide, setShowHide] = useState<boolean>(true) // стейт состояния отображения кнопки

    const onClickHandler = (event: ChangeEvent<HTMLInputElement>) => { //контроль инпута
        onChange && onChange(event.currentTarget.value)
    }
    const toggleIcon = () => { // переключение отображения кнопки
        setShowHide(!showHide)
    }

    return (
        <div>
            <TextField
                sx={style}
                value={value}
                onChange={onClickHandler}
                label={label}
                variant="outlined"
                type={showHide ? type : "text"}
                InputProps={{
                    endAdornment: type === "password"
                        ? <InputAdornment position="start">
                            <Button onClick={toggleIcon}>{
                                showHide
                                    ? <VisibilityIcon/>
                                    : <VisibilityOffIcon/>
                            }</Button>

                        </InputAdornment>
                        : null,
                }}
            />
        </div>
    );
};

export default Input;

const style = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "stretch",
}
