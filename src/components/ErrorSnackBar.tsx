import Snackbar from '@mui/material/Snackbar';
import React from 'react';
import MuiAlert, {AlertProps} from "@mui/material/Alert";
import {useAppDispatch, useAppSelector} from "../bll/store";

import {setAppErrorAC} from "../bll/appReducer";
import { appStatus } from '../types/appReducerTypes';


const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const ErrorSnackBar = () => {
    const error = useAppSelector<string | null>((state)=>state.app.error)
    const status = useAppSelector<appStatus>(state=>state.app.status)
    const dispatch = useAppDispatch()

    const handleErrorClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        dispatch(setAppErrorAC(null))
    };
    const handleSuccessClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
    };

    return (
        <>
            <Snackbar open={error !== null} autoHideDuration={6000} onClose={handleErrorClose}>
                <Alert onClose={handleErrorClose} severity="error" sx={{width: '100%'}}>
                    {error} 😠
                </Alert>
            </Snackbar>
            <Snackbar open={status === appStatus.success} autoHideDuration={6000} onClose={handleSuccessClose}>
                <Alert onClose={handleSuccessClose} severity="success" sx={{width: '100%'}}>
                    {status} 😁
                </Alert>
            </Snackbar>
        </>

    )
};