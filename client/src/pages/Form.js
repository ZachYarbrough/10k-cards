import { Fragment, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
import PaletteIcon from '@mui/icons-material/Palette';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';

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

const themes = [
    {
        name: 'Orange',
        primaryColor: 'linear-gradient(45deg, rgb(255, 167, 81), rgb(255, 207, 52))',
        buttonColor: 'linear-gradient(-45deg, rgb(255, 167, 81), rgb(255, 207, 52))'
    },
    {
        name: 'Green',
        primaryColor: 'linear-gradient(45deg, rgb(67, 233, 123), rgb(56, 249, 215))',
        buttonColor: 'linear-gradient(-45deg, rgb(67, 233, 123), rgb(56, 249, 215))'
    },
    {
        name: 'Purple',
        primaryColor: 'linear-gradient(45deg, rgb(95, 114, 189), rgb(155, 35, 234))',
        buttonColor: 'linear-gradient(-45deg, rgb(95, 114, 189), rgb(155, 35, 234))'
    },
    {
        name: 'Red',
        primaryColor: 'linear-gradient(45deg, rgb(147, 41, 30), rgb(237, 33, 58))',
        buttonColor: 'linear-gradient(-45deg, rgb(147, 41, 30), rgb(237, 33, 58))'
    },
    {
        name: 'Pink',
        primaryColor: 'linear-gradient(45deg, rgb(255, 117, 140), rgb(255, 126, 179))',
        buttonColor: 'linear-gradient(-45deg, rgb(255, 117, 140), rgb(255, 126, 179))'
    },
    {
        name: 'Blue',
        primaryColor: 'linear-gradient(45deg, rgb(0, 91, 234), rgb(0, 198, 251))',
        buttonColor: 'linear-gradient(-45deg, rgb(0, 91, 234), rgb(0, 198, 251))'
    },
    {
        name: 'Dark Blue',
        primaryColor: 'linear-gradient(45deg, rgb(2, 27, 121), rgb(5, 117, 230))',
        buttonColor: 'linear-gradient(-45deg, rgb(2, 27, 121), rgb(5, 117, 230))'
    },
    {
        name: 'Black',
        primaryColor: 'linear-gradient(45deg, rgb(35, 37, 38), rgb(65, 67, 69))',
        buttonColor: 'linear-gradient(-45deg, rgb(35, 37, 38), rgb(65, 67, 69))'
    },
    {
        name: 'Silver',
        primaryColor: 'linear-gradient(45deg, rgb(189, 195, 199), rgb(44, 62, 80))',
        buttonColor: 'linear-gradient(-45deg, rgb(189, 195, 199), rgb(44, 62, 80))'
    }
];

const Form = ({ slotsPurchased, setSlotsPurchased, cardType, currentColor, setCurrentColor }) => {
    const navigate = useNavigate();
    const [inputField, setInputField] = useState('');
    const [formState, setFormState] = useState({});
    const [removeSlotState, setRemoveSlotState] = useState(false);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setInputField('');
        setOpen(true);
    };
    const handleClose = () => setOpen(false);

    useEffect(() => {
        if (slotsPurchased <= 4) setRemoveSlotState(false);
    }, [slotsPurchased]);

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
        formData.append('theme', formState.theme || 'Orange');

        for (let i = 0; i < slotsPurchased; i++) {
            formData.append(`textFieldTitle${i}`, formState[`textFieldTitle${i}`] || 'No Entry');
            formData.append(`textFieldLink${i}`, formState[`textFieldLink${i}`] || 'No Entry');
        }


        formData.append('slotNumber', slotsPurchased);

        const postData = async () => {
            const res = await fetch('http://localhost:3001/upload-mail', {
                method: 'POST',
                headers: header,
                body: formData
            });
            if (!res.ok) throw new Error(res.statusText);
            if(res.ok) {
                navigate('/form-submit');
            }
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

    const handleColorPicker = (event, themeName) => {
        event.preventDefault();
        const newTheme = themes.filter(themeEl => themeEl.name === themeName);
        setCurrentColor({ ...newTheme[0] });
        setOpen(false);
        setFormState({
            ...formState,
            ['theme']: themeName
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
        if (slotsPurchased > 4) {
            let newFormState = formState
            delete newFormState[`textFieldTitle${i}`];
            delete newFormState[`textFieldLink${i}`];
            delete newFormState[`icon${i}`];
            setSlotsPurchased(slotsPurchased = slotsPurchased - 1);
            setFormState({
                ...newFormState
            })
        }
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
                <Box onClick={handleOpen} className='colorBanner' style={{ backgroundImage: currentColor.primaryColor }} sx={{ width: '100%', height: '35vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Box sx={{ position: 'absolute', width: '98%', textAlign: 'left', height: '33%' }}>
                        <PaletteIcon sx={{ width: '5vh', height: '5vh', pb: 1, opacity: '.3' }} />
                    </Box>
                    <input onClick={event => event.stopPropagation()} type="file" name='image' accept="image/*" style={{ visibility: 'hidden' }} onChange={(event) => handleProfilePicture(event)} id="image-file" />
                    <label htmlFor="image-file">
                        <IconButton component="span" disableRipple onClick={event => event.stopPropagation()}>
                            <Avatar src={require('../assets/images/profile_image.jpeg')} id="profile-pic" style={{ borderColor: 'rgba(255, 255, 255, 0.23)' }} sx={{ border: 5, width: '15vh', height: '15vh', mb: 1 }}>
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
                        <Button disableRipple onClick={(event) => handleInputField(event, 'title')} className='title'>
                            <Typography variant='h2' sx={{ fontSize: '2vh', color: 'white' }}>{formState['title'] || 'Enter Title'}</Typography>
                        </Button>
                    }
                </Box>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    disableAutoFocus={true}
                >
                    <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 300, bgcolor: 'white', borderRadius: '5px', boxShadow: 24, p: 4 }}>
                        <Typography id="modal-modal-title" variant="h6" component="h2" textAlign='center'>
                            Pick Theme
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                            {themes.map(theme => {
                                return (<Button key={theme.name} id={theme.name} onClick={event => handleColorPicker(event, theme.name)} style={{ backgroundImage: theme.buttonColor, borderColor: theme.secondaryColor }} sx={{ m: 2, minWidth: '60px', minHeight: '60px', border: '5px', borderRadius: '5px', boxShadow: 8, }} />);
                            })}
                        </Box>
                    </Box>
                </Modal>
                <Grid container sx={{ width: '100%' }}>
                    {[...Array(slotsPurchased)].map((e, i) => (
                        <Grid key={i} id={`container${i}`} item xs={6} sx={{ bgcolor: 'grey.200', border: .5, borderColor: 'grey.300' }} onClick={() => setInputField('')}>
                            {inputField === i ?
                                <Box className={`${i}`} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '80%', m: 'auto', height: '105%', color: 'black' }}>
                                    <TextField sx={{ my: 1 }} onClick={event => event.stopPropagation()} onChange={handleChange} size="small" value={formState[`textFieldTitle${i}`] || ''} name={`textFieldTitle${i}`} label="Title" placeholder='Enter Title' />
                                    <TextField sx={{ mb: 1 }} onClick={event => event.stopPropagation()} onChange={handleChange} size="small" value={formState[`textFieldLink${i}`] || ''} name={`textFieldLink${i}`} label="Link" placeholder='Enter Link' />
                                </Box>
                                :
                                removeSlotState && slotsPurchased > 4 ?
                                    <Button disableRipple className={`${i}`} onClick={(event) => handleRemoveSlot(event, i)} sx={{ display: 'flex', flexWarp: 'wrap', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', p: 4, width: '100%', height: '100%', color: 'black' }}>
                                        <RemoveCircleIcon sx={{ width: '5vh', height: '5vh', color: 'grey.600', pb: 1 }} />
                                        <div style={{ overflow: "hidden", textOverflow: "ellipsis", width: '11rem' }}>
                                            <Typography variant='h3' sx={{ fontWeight: 'bold', fontSize: '1.8vh', pb: .2, overflowWrap: 'break-word' }}>{formState[`textFieldTitle${i}`] || 'Enter Card Title'}</Typography>
                                        </div>
                                        <div style={{ overflow: "hidden", textOverflow: "ellipsis", width: '11rem' }}>
                                            <Typography variant='h4' sx={{ fontSize: '1.5vh', overflowWrap: 'break-word' }}>{formState[`textFieldLink${i}`] || 'Enter Card Link'}</Typography>
                                        </div>
                                    </Button>
                                    :
                                    <Button disableRipple className={`${i}`} onClick={(event) => handleInputField(event, i)} sx={{ display: 'flex', flexWarp: 'wrap', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', p: 4, width: '100%', height: '100%', color: 'black' }}>
                                        {formState[`textFieldLink${i}`] ?
                                            formState[`textFieldLink${i}`].toLowerCase().includes('linkedin') ?
                                                <LinkedInIcon sx={{ width: '5vh', height: '5vh', pb: 1 }} />
                                                :
                                                formState[`textFieldLink${i}`].toLowerCase().includes('instagram') ?
                                                    <InstagramIcon sx={{ width: '5vh', height: '5vh', pb: 1 }} />
                                                    :
                                                    formState[`textFieldLink${i}`].toLowerCase().includes('facebook') ?
                                                        <FacebookIcon sx={{ width: '5vh', height: '5vh', pb: 1 }} />
                                                        :
                                                        <BuildCircleIcon sx={{ width: '5vh', height: '5vh', color: 'grey.600', pb: 1 }} />
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
                <Box onClick={() => setInputField('')}>
                    {slotsPurchased >= 5 ?
                        removeSlotState ?
                            <Button variant='contained' onClick={(event) => handleRemoveSlotToggle(event)} style={{ backgroundImage: currentColor.primaryColor }} sx={{ width: '90%', mx: '5%', mt: 2, p: 1.5, mb: 2 }}>Edit Slots</Button>
                            :
                            <Button variant='contained' onClick={(event) => handleRemoveSlotToggle(event)} style={{ backgroundImage: currentColor.primaryColor }} sx={{ width: '90%', mx: '5%', mt: 2, p: 1.5, mb: 2 }}>Remove Slots</Button>
                        :
                        null
                    }
                    <Button variant='contained' type='submit' style={{ backgroundImage: currentColor.primaryColor }} sx={{ width: '90%', mx: '5%', mt: 2, p: 1.5, mb: 2 }}>Submit</Button>
                </Box>
            </form>
            <Box onClick={() => setInputField('')}>
                <Typography sx={{ mx: 'auto', textAlign: 'center', fontSize: '2.5vh', width: '80%', borderTop: 1, py: 2, my: 1, borderColor: 'grey.300' }}>Want more slots? Purchase one of our deluxe offers instead.</Typography>
                <Button variant='contained' onClick={() => window.location.replace("/#products")} style={{ backgroundImage: currentColor.primaryColor }} sx={{ width: '90%', mx: '5%', mb: 2, p: 1.5 }}>Buy Now</Button>
            </Box>
        </Fragment>
    );
}

export default Form;
