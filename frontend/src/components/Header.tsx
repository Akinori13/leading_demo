import {AppBar, Typography } from '@mui/material';

export default function Header() {
    return (
        <AppBar position="static">
            <Typography variant='h6'>
                Header
            </Typography>
        </AppBar>
    );
}