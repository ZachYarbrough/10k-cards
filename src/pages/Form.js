import { Fragment, useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link } from 'react-router-dom'
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

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

const Form = ({ slotsPurchased }) => {
    const [inputField, setInputField] = useState('');
    const [formState, setFormState] = useState({});
    const [currentColor, setCurrentColor] = useState('primary');

    const handleInputField = (event, i) => {
        if (event.currentTarget.classList.contains(`${i}`) || i === 'name') {
            setInputField(i)
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
        console.log(formState);
    }

    const handleProfilePicture = (event) => {
        console.log(event.target.files);
        const selectedFile = event.target.files[0];
        const reader = new FileReader();

        const imgtag = document.getElementById("profile-pic").firstChild;
        imgtag.title = selectedFile.name;
        console.log(imgtag);

        reader.onload = function (event) {
            imgtag.src = event.target.result;
        };

        reader.readAsDataURL(selectedFile);
        setFormState({
            ...formState,
            [`profileImage`]: selectedFile
        })
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit} onKeyPress={(e) => { if (e.key === 'Enter') { e.preventDefault(); setInputField(''); } }}>
                <Box sx={{ bgcolor: `${currentColor}.main`, width: '100%', height: '35vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <input type="file" accept="image/*" style={{ visibility: 'hidden' }} onChange={(event) => handleProfilePicture(event)} id="icon-button-file" />
                    <label htmlFor="icon-button-file">
                        <IconButton component="span" disableRipple>
                            <Avatar src={require('../assets/images/profile_image.jpeg')} id="profile-pic" sx={{ border: 5, borderColor: `${currentColor}.light`, width: '15vh', height: '15vh', mb: 1 }}>
                            </Avatar>
                        </IconButton>
                    </label>
                    {inputField === "name" ?
                        <Box sx={{ mx: 1, display: 'flex' }}>
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
                            <WhiteTextField sx={{ my: 1 }} size='small' onChange={handleChange} value={formState[`title`] || ''} name={`title`} label="Title" placeholder='Enter Title' />
                        </Box>
                        :
                        <Button onClick={(event) => handleInputField(event, 'title')} className='title'>
                            <Typography variant='h2' sx={{ fontSize: '2vh', color: 'white' }}>{formState['title'] || 'Enter Title'}</Typography>
                        </Button>
                    }
                </Box>
                <Grid container sx={{ width: '100%' }}>
                    {[...Array(slotsPurchased)].map((e, i) => (
                        <Grid key={i} item xs={6} sx={{ bgcolor: 'grey.200', border: .5, borderColor: 'grey.300' }}>
                            {inputField === i ?
                                <Box className={`${i}`} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '80%', m: 'auto', height: '105%', color: 'black' }}>
                                    <FormControl sx={{ minWidth: {md: 195, xs: 155 } }}>
                                        <InputLabel id={`icon-label${i}`}>Icon</InputLabel>
                                        <Select
                                            labelId={`icon-label${i}`}
                                            id={`icon${i}`}
                                            value={formState[`icon${i}`] || ''}
                                            label="icon"
                                            autowidth
                                            size="small"
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
                                                <AddCircleIcon sx={{ width: '5vh', height: '5vh', color: 'grey.600', pb: 1 }} />
                                    }
                                    <div style={{overflow: "hidden", textOverflow: "ellipsis", width: '11rem'}}> 
                                    <Typography variant='h3' sx={{ fontWeight: 'bold', fontSize: '1.8vh', pb: .2, overflowWrap: 'break-word' }}>{formState[`textFieldTitle${i}`] || 'Enter Card Title'}</Typography>
                                    </div>
                                    <div style={{overflow: "hidden", textOverflow: "ellipsis", width: '11rem'}}> 
                                    <Typography variant='h4' sx={{ fontSize: '1.5vh', overflowWrap: 'break-word' }}>{formState[`textFieldLink${i}`] || 'Enter Card Link'}</Typography>
                                    </div>
                                </Button>
                            }
                        </Grid>
                    ))}
                </Grid>
                <Button variant='contained' type='submit' color={currentColor} sx={{ width: '90%', mx: '5%', mt: 2, p: 1.5, mb: 2 }}>Submit</Button>
            </form>
            <Typography sx={{ mx: 'auto', textAlign: 'center', fontSize: '2.5vh', width: '80%', borderTop: 1, py: 2, my: 1, borderColor: 'grey.300' }}>Want to buy more slots? Purchase one of our premium options instead.</Typography>
            <Link to='/' style={{ textDecoration: "none" }}>
                <Button variant='contained' type='submit' color={currentColor} sx={{ width: '90%', mx: '5%', mb: 2, p: 1.5 }}>Buy Now</Button>
            </Link>
        </Fragment>
    );
}

export default Form;
