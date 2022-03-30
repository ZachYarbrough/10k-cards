import { Fragment, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

const Form = () => {
    let fieldAmount = 4;
    const [inputField, setInputField] = useState('');
    const [formState, setFormState] = useState({})

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

    const handleSubmit = (event) => {
        event.preventDefault();
        setInputField('');
        console.log(formState);
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit} onKeyPress={(e) => { if (e.key === 'Enter') { e.preventDefault(); setInputField(''); } }}>
                <Box sx={{ bgcolor: "error.main", width: '100%', height: '35vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Avatar sx={{ border: 5, borderColor: "error.light", width: '15vh', height: '15vh', mb: 1 }} />
                    {inputField === "name" ?
                        <Box>
                            <TextField sx={{ my: 1, mx: 1 }} size='small' onChange={handleChange} value={formState[`firstName`] || ''} name={`firstName`} label="First Name" placeholder='Enter First Name' />
                            <TextField sx={{ my: 1, mx: 1 }} size='small' onChange={handleChange} value={formState[`lastName`] || ''} name={`lastName`} label="Last Name" placeholder='Enter Last Name' />
                        </Box>
                        :
                        <Button onClick={(event) => handleInputField(event, 'name')} className='name'>
                            <Typography variant='h1' sx={{ fontWeight: 'bold', fontSize: '4vh', color: 'white' }}>{formState['firstName'] || 'Enter Name'} {formState['lastName'] || ''}</Typography>
                        </Button>
                    }
                    {inputField === "title" ?
                        <Box>
                            <TextField sx={{ my: 1 }} size='small' onChange={handleChange} value={formState[`title`] || ''} name={`title`} label="Title" placeholder='Enter Title' />
                        </Box>
                        :
                        <Button onClick={(event) => handleInputField(event, 'title')} className='title'>
                            <Typography variant='h2' sx={{ fontSize: '2vh', color: 'white' }}>{formState['title'] || 'Enter Title'}</Typography>
                        </Button>
                    }
                </Box>
                <Grid container sx={{ width: '100%' }}>
                    {[...Array(fieldAmount)].map((e, i) => (
                        <Grid key={i} item xs={6} sx={{ bgcolor: 'grey.200', border: .5, borderColor: 'grey.300' }}>
                            {inputField === i ?
                                <Box className={`${i}`} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', color: 'black' }}>
                                    <TextField sx={{ my: 1 }} onChange={handleChange}   size="small" value={formState[`textFieldTitle${i}`] || ''} name={`textFieldTitle${i}`} label="Title" placeholder='Enter Title' />
                                    <TextField sx={{ mb: 1 }} onChange={handleChange}   size="small" value={formState[`textFieldLink${i}`] || ''} name={`textFieldLink${i}`} label="Link" placeholder='Enter Link' />
                                </Box>
                                :
                                <Button className={`${i}`} onClick={(event) => handleInputField(event, i)} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', p: 4, width: '100%', height: '100%', color: 'black' }}>
                                    <InsertEmoticonIcon sx={{ width: '5vh', height: '5vh', pb: 1 }} />
                                    <Typography variant='h3' sx={{ fontWeight: 'bold', fontSize: '1.8vh', pb: .2 }}>{formState[`textFieldTitle${i}`] || 'Enter Card Title'}</Typography>
                                    <Typography variant='h4' sx={{ fontSize: '1.5vh' }}>{formState[`textFieldLink${i}`] || 'Enter Card Link'}</Typography>
                                </Button>
                            }
                        </Grid>
                    ))}
                </Grid>
                <Button variant='contained' type='submit' color='error' sx={{ width: '90%', mx: '5%', mt: 2, p: 1.5, mb: 2 }}>Submit</Button>
            </form>
            <Typography sx={{ mx: 'auto', textAlign: 'center', fontSize: '2.5vh' }}>Want to buy more slots? Buy one of our premium options instead.</Typography>
            <Button variant='contained' type='submit' color='error' sx={{ width: '90%', mx: '5%', mt: 2, p: 1.5 }}>Buy Now</Button>
        </Fragment>
    );
}

export default Form;
