import { Fragment, useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import BrushIcon from '@mui/icons-material/Brush';

import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link, useNavigate } from 'react-router-dom'
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import Brush from '@mui/icons-material/Brush';

const WhiteTextField = styled(TextField)({
    '& label': {
        color: 'white'
    },
    '& label.Mui-focused': {
        color: 'white'
    },
    '& input': {
        color: 'white'
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'white',
        color: 'white'
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'white',
            color: 'white'
        },
        '&:hover fieldset': {
            borderColor: 'white',
            color: 'white'
        },
        '&.Mui-focused fieldset': {
            borderColor: 'white',
            color: 'white'
        },
    }
});

const themes = ['primary', 'error'];

const Form = ({ slotsPurchased, billingFormState, setBillingFormState, setSlotsPurchased, cardType }) => {
    const navigate = useNavigate();
    const [inputField, setInputField] = useState('');
    const [formState, setFormState] = useState({});
    const [currentColor, setCurrentColor] = useState('primary');
    const [removeSlotState, setRemoveSlotState] = useState(false);

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setInputField('');
        setOpen(true);
    };
    const handleClose = () => setOpen(false);

    const handleInputField = (event, i) => {
        event.stopPropagation();
        if (event.currentTarget.classList.contains(`${i}`) || i === 'name') {
            setInputField(i);
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.currentTarget;
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const handleSelect = (event, i) => {
        const { value } = event.target;

        setFormState({
            ...formState,
            [`icon${i}`]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setInputField('');
        let header = new Headers();
        header.append('Accept', 'application/json');

        let formData = new FormData();
        let file = document.getElementById('image-file').files[0];
        if (file) formData.append('image', file, 'profile-image.jpeg');
        formData.append('firstName', formState.firstName || 'No Entry');
        formData.append('lastName', formState.lastName || 'No Entry');
        formData.append('title', formState.title || 'No Entry');
        formData.append('theme', formState.theme || 'primary');

        for (let i = 0; i < slotsPurchased; i++) {
            formData.append(`textFieldTitle${i}`, formState[`textFieldTitle${i}`] || 'No Entry');
            formData.append(`textFieldLink${i}`, formState[`textFieldLink${i}`] || 'No Entry');
            formData.append(`icon${i}`, formState[`icon${i}`] || 'No Entry');
        }

        // Remove this once paypal is integrated
        if (billingFormState !== {}) {
            formData.append('cardFirstName', billingFormState.cardFirstName);
            formData.append('cardLastName', billingFormState.cardLastName);
            formData.append('cardNumber', billingFormState.cardNumber);
            formData.append('monthYear', billingFormState.monthYear);
            formData.append('cvc', billingFormState.cvc);
            formData.append('streetAddress', billingFormState.streetAddress);
            formData.append('city', billingFormState.city);
            formData.append('state', billingFormState.state);
            formData.append('zipCode', billingFormState.zipCode);
            formData.append('phone', billingFormState.phone)
        }

        formData.append('slotNumber', slotsPurchased);

        const postData = async () => {
            const res = await fetch('http://localhost:3001/upload-mail', {
                method: 'POST',
                headers: header,
                body: formData
            });
            if (!res.ok) throw new Error(res.statusText);
        }
        postData();
    }

    const handleProfilePicture = (event) => {
        event.stopPropagation();
        const file = event.target.files[0];
        const reader = new FileReader();

        const imgtag = document.getElementById("profile-pic").firstChild;
        imgtag.title = file.name;

        reader.onload = function (event) {
            imgtag.src = event.target.result;
        };

        reader.readAsDataURL(file);
        setFormState({
            ...formState,
            ['profileImage']: file
        });
    }

    const handleColorPicker = (event, theme) => {
        event.preventDefault();
        setCurrentColor(theme);
        setOpen(false);
        setFormState({
            ...formState,
            ['theme']: theme
        })
    }

    const handleRemoveSlotToggle = event => {
        event.preventDefault();
        setInputField('');
        setRemoveSlotState(!removeSlotState);
    }

    const handleRemoveSlot = (event, i) => {
        event.preventDefault();
        setInputField('');
        let newFormState = formState.filter(data => data[i])
        setFormState({
            ...newFormState
        })
    }

    const handleCreateSlot = event => {
        event.preventDefault();
        setInputField('');
        if (cardType === 'Basic' && slotsPurchased < 10) {
            setSlotsPurchased(slotsPurchased = slotsPurchased + 1);
        } else if (cardType === 'Premium' || cardType === 'Gold') {
            setSlotsPurchased(slotsPurchased = slotsPurchased + 1);
        }
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit} onKeyPress={(e) => { if (e.key === 'Enter') { e.preventDefault(); setInputField(''); } }}>
                <Box onClick={handleOpen} sx={{ bgcolor: `${currentColor}.main`, width: '100%', height: '35vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Box sx={{ position: 'absolute', width: '98%', textAlign: 'left', height: '33%' }}>
                        <BrushIcon sx={{ width: '5vh', height: '5vh', pb: 1, opacity: '.3' }} />
                    </Box>
                    <input onClick={event => event.stopPropagation()} type="file" name='image' accept="image/*" style={{ visibility: 'hidden' }} onChange={(event) => handleProfilePicture(event)} id="image-file" />
                    <label htmlFor="image-file">
                        <IconButton component="span" disableRipple onClick={event => event.stopPropagation()}>
                            <Avatar src={require('../assets/images/profile_image.jpeg')} id="profile-pic" sx={{ border: 5, borderColor: `${currentColor}.light`, width: '15vh', height: '15vh', mb: 1 }}>
                            </Avatar>
                        </IconButton>
                    </label>
                    {inputField === "name" ?
                        <Box onClick={event => event.stopPropagation()} sx={{ mx: 1, display: 'flex' }}>
                            <WhiteTextField sx={{ my: 1, mx: 1 }} size='small' onChange={handleChange} value={formState[`firstName`] || ''} name={`firstName`} label="First Name" placeholder='Enter First Name' />
                            <WhiteTextField sx={{ my: 1, mx: 1 }} size='small' onChange={handleChange} value={formState[`lastName`] || ''} name={`lastName`} label="Last Name" placeholder='Enter Last Name' />
                        </Box>
                        :
                        <Button disableRipple onClick={(event) => handleInputField(event, 'name')} className='name'>
                            <Typography variant='h1' sx={{ fontWeight: 'bold', fontSize: '4vh', color: 'white' }}>{formState['firstName'] || 'Enter Name'} {formState['lastName'] || ''}</Typography>
                        </Button>
                    }
                    {inputField === "title" ?
                        <Box>
                            <WhiteTextField onClick={event => event.stopPropagation()} sx={{ my: 1 }} size='small' onChange={handleChange} value={formState[`title`] || ''} name={`title`} label="Title" placeholder='Enter Title' />
                        </Box>
                        :
                        <Button onClick={(event) => handleInputField(event, 'title')} className='title'>
                            <Typography variant='h2' sx={{ fontSize: '2vh', color: 'white' }}>{formState['title'] || 'Enter Title'}</Typography>
                        </Button>
                    }
                </Box>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: { md: 400, xs: 300 }, bgcolor: 'background.paper', borderRadius: '5px', boxShadow: 24, p: 4 }}>
                        <Typography id="modal-modal-title" variant="h6" component="h2" textAlign='center'>
                            Pick Theme
                        </Typography>
                        <Box sx={{ display: 'flex', width: '80%' }}>
                            {themes.map(theme => {
                                return (<Box key={theme} onClick={event => handleColorPicker(event, theme)} id="modal-modal-description" bgcolor={`${theme}.main`} sx={{ m: 2, minWidth: '60px', minHeight: '60px', border: '5px', bordercolor: 'background.paper', borderRadius: '5px', boxShadow: 8, }}>
                                </Box>);
                            })}
                        </Box>
                    </Box>
                </Modal>
                <Grid container sx={{ width: '100%' }}>
                    {[...Array(slotsPurchased)].map((e, i) => (
                        <Grid key={i} item xs={6} sx={{ bgcolor: 'grey.200', border: .5, borderColor: 'grey.300' }}>
                            {inputField === i ?
                                <Box className={`${i}`} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '80%', m: 'auto', height: '105%', color: 'black' }}>
                                    <FormControl sx={{ minWidth: { md: 195, xs: 155 } }}>
                                        <InputLabel id={`icon-label${i}`}>Icon</InputLabel>
                                        <Select
                                            labelId={`icon-label${i}`}
                                            id={`icon${i}`}
                                            value={formState[`icon${i}`] || ''}
                                            label="icon"
                                            size="small"
                                            autoWidth
                                            onChange={event => handleSelect(event, i)}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={"LinkedIn"}>LinkedIn</MenuItem>
                                            <MenuItem value={"Instagram"}>Instagram</MenuItem>
                                            <MenuItem value={"Facebook"}>Facebook</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <TextField sx={{ my: 1 }} onChange={handleChange} size="small" value={formState[`textFieldTitle${i}`] || ''} name={`textFieldTitle${i}`} label="Title" placeholder='Enter Title' />
                                    <TextField sx={{ mb: 1 }} onChange={handleChange} size="small" value={formState[`textFieldLink${i}`] || ''} name={`textFieldLink${i}`} label="Link" placeholder='Enter Link' />
                                </Box>
                                :
                                removeSlotState ?
                                    <Button disableRipple className={`${i}`} onClick={(event) => handleRemoveSlot(event, i)} sx={{ display: 'flex', flexWarp: 'wrap', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', p: 4, width: '100%', height: '100%', color: 'black' }}>
                                        {formState[`icon${i}`] === "LinkedIn" ?
                                            <LinkedInIcon sx={{ width: '5vh', height: '5vh', pb: 1 }} />
                                            :
                                            formState[`icon${i}`] === "Instagram" ?
                                                <InstagramIcon sx={{ width: '5vh', height: '5vh', pb: 1 }} />
                                                :
                                                formState[`icon${i}`] === "Facebook" ?
                                                    <FacebookIcon sx={{ width: '5vh', height: '5vh', pb: 1 }} />
                                                    :
                                                    <BuildCircleIcon sx={{ width: '5vh', height: '5vh', color: 'grey.600', pb: 1 }} />
                                        }
                                        <div style={{ overflow: "hidden", textOverflow: "ellipsis", width: '11rem' }}>
                                            <Typography variant='h3' sx={{ fontWeight: 'bold', fontSize: '1.8vh', pb: .2, overflowWrap: 'break-word' }}>{formState[`textFieldTitle${i}`] || 'Enter Card Title'}</Typography>
                                        </div>
                                        <div style={{ overflow: "hidden", textOverflow: "ellipsis", width: '11rem' }}>
                                            <Typography variant='h4' sx={{ fontSize: '1.5vh', overflowWrap: 'break-word' }}>{formState[`textFieldLink${i}`] || 'Enter Card Link'}</Typography>
                                        </div>
                                    </Button>
                                    :
                                    <Button disableRipple className={`${i}`} onClick={(event) => handleInputField(event, i)} sx={{ display: 'flex', flexWarp: 'wrap', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', p: 4, width: '100%', height: '100%', color: 'black' }}>
                                        {formState[`icon${i}`] === "LinkedIn" ?
                                            <LinkedInIcon sx={{ width: '5vh', height: '5vh', pb: 1 }} />
                                            :
                                            formState[`icon${i}`] === "Instagram" ?
                                                <InstagramIcon sx={{ width: '5vh', height: '5vh', pb: 1 }} />
                                                :
                                                formState[`icon${i}`] === "Facebook" ?
                                                    <FacebookIcon sx={{ width: '5vh', height: '5vh', pb: 1 }} />
                                                    :
                                                    <BuildCircleIcon sx={{ width: '5vh', height: '5vh', color: 'grey.600', pb: 1 }} />
                                        }
                                        <div style={{ overflow: "hidden", textOverflow: "ellipsis", width: '11rem' }}>
                                            <Typography variant='h3' sx={{ fontWeight: 'bold', fontSize: '1.8vh', pb: .2, overflowWrap: 'break-word' }}>{formState[`textFieldTitle${i}`] || 'Enter Card Title'}</Typography>
                                        </div>
                                        <div style={{ overflow: "hidden", textOverflow: "ellipsis", width: '11rem' }}>
                                            <Typography variant='h4' sx={{ fontSize: '1.5vh', overflowWrap: 'break-word' }}>{formState[`textFieldLink${i}`] || 'Enter Card Link'}</Typography>
                                        </div>
                                    </Button>
                            }
                        </Grid>
                    ))}
                    {cardType === 'Basic' && slotsPurchased >= 10 || cardType === '' ?
                        null
                        :
                        <Grid item xs={6} sx={{ bgcolor: 'grey.200', border: .5, borderColor: 'grey.300' }}>
                            <Button onClick={event => handleCreateSlot(event)} disableRipple sx={{ display: 'flex', flexWarp: 'wrap', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', p: 4, width: '100%', height: '100%', color: 'black' }}>
                                <AddCircleIcon sx={{ width: '5vh', height: '5vh', color: 'grey.600', pb: 1 }} />
                                <div style={{ overflow: "hidden", textOverflow: "ellipsis", width: '11rem' }}>
                                    <Typography variant='h3' sx={{ fontWeight: 'bold', fontSize: '1.8vh', pb: .2, overflowWrap: 'break-word' }}>Create New Link Slot</Typography>
                                </div>
                                <div style={{ overflow: "hidden", textOverflow: "ellipsis", width: '11rem' }}>
                                    <Typography variant='h4' sx={{ fontSize: '1.5vh', overflowWrap: 'break-word', mb: '1.5vh' }}></Typography>
                                </div>
                            </Button>
                        </Grid>
                    }
                </Grid>
                {slotsPurchased >= 5 ?
                    removeSlotState ?
                        <Button variant='contained' onClick={(event) => handleRemoveSlotToggle(event)} color={currentColor} sx={{ width: '90%', mx: '5%', mt: 2, p: 1.5, mb: 2 }}>Edit Slots</Button>
                        :
                        <Button variant='contained' onClick={(event) => handleRemoveSlotToggle(event)} color='error' sx={{ width: '90%', mx: '5%', mt: 2, p: 1.5, mb: 2 }}>Remove Slots</Button>
                    :
                    null
                }

                <Button variant='contained' type='submit' color={currentColor} sx={{ width: '90%', mx: '5%', mt: 2, p: 1.5, mb: 2 }}>Submit</Button>
            </form>
            <Fragment>
                <Typography sx={{ mx: 'auto', textAlign: 'center', fontSize: '2.5vh', width: '80%', borderTop: 1, py: 2, my: 1, borderColor: 'grey.300' }}>Want to buy more slots? Purchase one of our premium options instead.</Typography>
                <Link to='/' style={{ textDecoration: "none" }}>
                    <Button variant='contained' color={currentColor} sx={{ width: '90%', mx: '5%', mb: 2, p: 1.5 }}>Buy Now</Button>
                </Link>
            </Fragment>
        </Fragment>
    );
}

export default Form;
