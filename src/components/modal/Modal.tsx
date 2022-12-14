import * as React from 'react';

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
export type ModalTypeProps = {
    children: React.ReactNode
    open: boolean

}
export const BasicModal: React.FC<ModalTypeProps> = ({children, open}) => {

    return (
        <div>
            <Modal
                open={open}
            >
                <Box sx={style}>
                    {children}
                </Box>
            </Modal>
        </div>
    );
}