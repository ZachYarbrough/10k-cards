import { Fragment, useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

const Form = () => {
    let fieldAmount = 4;

    return (
        <Fragment>
            <Box sx={{ bgcolor: "error.main", width: '100%', height: '35vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Avatar sx={{ border: 5, borderColor: "error.light", width: '15vh', height: '15vh', mb: 1 }} />
                <Typography variant="h1" sx={{ fontWeight: 'bold', fontSize: '4vh', color: 'white' }}>Zach Yarbrough</Typography>
                <Typography variant="h2" sx={{ fontSize: '2vh', color: 'white' }}>Full Stack Web Developer</Typography>
            </Box>
            <Grid container sx={{ width: '100%' }}>
                {[...Array(fieldAmount)].map((e, i) => (
                    <Grid key={i} item xs={6} sx={{ bgcolor: 'grey.200', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', p: 4, border: .5, borderColor: 'grey.300' }}>
                        <InsertEmoticonIcon sx={{ width: '5vh', height: '5vh', pb: 1 }} />
                        <Typography variant="h3" sx={{ fontWeight: 'bold', fontSize: '1.8vh', pb: .2 }}>Test Field</Typography>
                        <Typography variant="h4" sx={{ fontSize: '1.5vh' }}>Test Field</Typography>
                    </Grid>
                ))}
            </Grid>
        </Fragment>
    );
}

export default Form;
