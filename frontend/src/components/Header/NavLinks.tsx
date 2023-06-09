import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import LinkMaps from "./LinkMaps";

const NavLink = ({to, text}: {to: string, text: string}) => {
    return (
        <Link href={to} color="white" underline="hover">{text}</Link>
    )
}

const NavLinks = () => {
    return (
        <List sx={{ display: 'flex'}}>
            {LinkMaps.map((link, index) => (
                <ListItem key={index}>
                    <NavLink to={link.to} text={link.text} />
                </ListItem>
            ))}
        </List>
    )
}

export default NavLinks;