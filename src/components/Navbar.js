import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate, Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import Logo from '../assets/images/10K_Cards.jpeg';

const pages = ['Products', 'Partnership', 'News', 'Edit my 10KCard'];
const settings = ['Profile', 'Logout'];

const Navbar = ({ cart }) => {
    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [anchorElCart, setAnchorElCart] = useState(null);

    const handleOpenCartMenu = (event) => {
        setAnchorElCart(event.currentTarget);
    }

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = (btnText) => {
        setAnchorElNav(null);

        handleNavMenu(btnText);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleCloseCartMenu = () => {
        setAnchorElCart(null);
    }

    const handleNavMenu = (btnText) => {
        switch (btnText) {
            case 'Products':
                navigate('/');
                handleCloseUserMenu();
                break;
            case 'Partnership':
                navigate('/partnership');
                handleCloseUserMenu();
                break;
            case 'News':
                navigate('/news');
                handleCloseNavMenu();
                break;
            case 'Edit my 10KCard':
                navigate('/edit');
                handleCloseNavMenu();
                break;
        }
    }

    return (
        <AppBar position="static" sx={{ bgcolor: 'white' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Link to="/" style={{ textDecoration: "none", display: { xs: 'none', md: 'flex' }, }}>
                        <Box
                            component="img"
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                maxHeight: 40,
                                maxWidth: 200,
                            }}
                            alt="10K Cards Logo"
                            src={Logo}
                        />
                    </Link>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, color: 'grey.900', justifyContent: 'space-between', alignItems: 'center' }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' }, color: 'grey.900'
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Link to="/" style={{ textDecoration: "none", flexGrow: 1, display: { xs: 'flex', md: 'none' }, }}>
                        <Box
                            component="img"
                            sx={{
                                display: { xs: 'flex', md: 'none' },
                                maxHeight: 40,
                                maxWidth: 200,
                            }}
                            alt="10K Cards Logo"
                            src={Logo}
                        />
                    </Link>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={() => handleCloseNavMenu(page)}
                                sx={{ my: 2, color: 'grey.900', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0, color: 'grey.900', ml: { xs: 0, sm: 5, md: 10 } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenUserMenu}
                            color="inherit"
                        >
                            <PersonIcon transform='scale(1.2)' />
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenCartMenu}
                            color="inherit"
                        >
                            <ShoppingCartIcon transfomr='scale(1.2)' />
                        </IconButton>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElCart}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={anchorElCart}
                            onClose={handleCloseCartMenu}
                        >
                            {cart.map((cartItem) => (
                                <Box sx={{ mx: 1 }} key={cartItem.name}>
                                    {cartItem.name === 'Your Cart is Empty' ?
                                        <Typography textAlign="center" color='grey.500'>{cartItem.name}</Typography>
                                        :
                                        cartItem.amount > 1 ?
                                            <Typography textAlign="center">{cartItem.name} {cartItem.amount}</Typography>
                                            :
                                            <Typography textAlign="center">{cartItem.name}</Typography>
                                    }
                                </Box>
                            ))}
                            <MenuItem sx={{ borderTop: 1, borderColor: 'grey.500', mx: 1, mt: 1 }} onClick={() => navigate('/cart')}>
                                <Typography textAlign="center" color='grey.900' mx='auto'>Checkout</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Navbar;