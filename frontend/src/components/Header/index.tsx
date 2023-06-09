import {AppBar, Box, Typography, Toolbar } from '@mui/material';
import Link from '@mui/material/Link';
import Links from './NavLinks';

export default function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant='h6' sx={{flexGrow: 1}}>
                    <Link href="/" color="white" underline="hover" >Leading</Link>
                </Typography>
                <Box sx={{display: "block"}}>
                    <Links />
                </Box>
            </Toolbar>
        </AppBar>
    );
}