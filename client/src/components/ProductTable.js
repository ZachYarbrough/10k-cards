import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CheckCircleOutlineIcon from '@mui/icons-material/Check';
import { Fragment } from 'react';

const ProductTable = () => {

    return (
        <Fragment>
            <Paper elevate={10} sx={{ width: '80%' }}>
                <Grid container sx={{ width: '100%' }}>
                    <Grid item xs={3} sx={{ display: 'flex' }}>
                        <Box sx={{ height: '100%', width: '100%', textAlign: 'center', borderRight: 1, borderColor: 'grey.300' }}>
                            <Typography sx={{ pr: 1, my: 1 }} >Features</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={3} sx={{ display: 'flex' }}>
                        <Box sx={{ height: '100%', width: '100%', bgcolor: 'grey.100', textAlign: 'center' }}>
                            <Typography sx={{ pr: 1, my: 1 }} >Standard</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={3} sx={{ display: 'flex' }}>
                        <Box sx={{ height: '100%', width: '100%', textAlign: 'center' }}>
                            <Typography sx={{ pr: 1, my: 1 }} >Gold</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={3} sx={{ display: 'flex' }}>
                        <Box sx={{ height: '100%', width: '100%', bgcolor: 'grey.100', textAlign: 'center' }}>
                            <Typography sx={{ pr: 1, my: 1 }} >Premium</Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container sx={{ width: '100%' }}>
                    <Grid item xs={3} sx={{ display: 'flex' }}>
                        <Box sx={{ height: '100%', width: '100%', textAlign: 'center', borderRight: 1, borderColor: 'grey.400', bgcolor: 'grey.100', boxShadow: 'inset 0 7px 9px -10px rgba(0,0,0,0.4)' }}>
                            <Typography sx={{ pr: 1, my: 1 }} >Feature</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={3} sx={{ display: 'flex' }}>
                        <Box sx={{ height: '100%', width: '100%', bgcolor: 'grey.200', textAlign: 'center', boxShadow: 'inset 0 7px 9px -10px rgba(0,0,0,0.4)' }}>
                        </Box>
                    </Grid>
                    <Grid item xs={3} sx={{ display: 'flex' }}>
                        <Box sx={{ height: '100%', width: '100%', bgcolor: 'grey.100', textAlign: 'center', boxShadow: 'inset 0 7px 9px -10px rgba(0,0,0,0.4)' }}>
                        </Box>
                    </Grid>
                    <Grid item xs={3} sx={{ display: 'flex' }}>
                        <Box sx={{ height: '100%', width: '100%', bgcolor: 'grey.200', textAlign: 'center', boxShadow: 'inset 0 7px 9px -10px rgba(0,0,0,0.4)' }}>
                            <CheckCircleOutlineIcon sx={{ mt: 1 }} />
                        </Box>
                    </Grid>
                </Grid>
                {/* Gold Table */}
                <Grid container sx={{ width: '100%' }}>
                    <Grid item xs={3} sx={{ display: 'flex' }}>
                        <Box sx={{ height: '100%', width: '100%', textAlign: 'center', borderRight: 1, borderColor: 'grey.400', bgcolor: 'grey.100' }}>
                            <Typography sx={{ pr: 1, my: 1 }} >Features</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={3} sx={{ display: 'flex' }}>
                        <Box sx={{ height: '100%', width: '100%', bgcolor: 'grey.200', textAlign: 'center' }}>
                        </Box>
                    </Grid>
                    <Grid item xs={3} sx={{ display: 'flex' }}>
                        <Box sx={{ height: '100%', width: '100%', bgcolor: 'grey.100', textAlign: 'center' }}>
                            <CheckCircleOutlineIcon sx={{ mt: 1 }} />
                        </Box>
                    </Grid>
                    <Grid item xs={3} sx={{ display: 'flex' }}>
                        <Box sx={{ height: '100%', width: '100%', bgcolor: 'grey.200', textAlign: 'center' }}>
                            <CheckCircleOutlineIcon sx={{ mt: 1 }} />
                        </Box>
                    </Grid>
                </Grid>
                {/* Premium Table */}
                <Grid container sx={{ width: '100%' }}>
                    <Grid item xs={3} sx={{ display: 'flex' }}>
                        <Box sx={{ height: '100%', width: '100%', textAlign: 'center', borderRight: 1, borderColor: 'grey.400', bgcolor: 'grey.100' }}>
                            <Typography sx={{ pr: 1, my: 1 }} >Slots</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={3} sx={{ display: 'flex' }}>
                        <Box sx={{ height: '100%', width: '100%', bgcolor: 'grey.200', textAlign: 'center' }}>
                            <Typography sx={{ mt: 1 }}>4</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={3} sx={{ display: 'flex' }}>
                        <Box sx={{ height: '100%', width: '100%', bgcolor: 'grey.100', textAlign: 'center' }}>
                            <Typography sx={{ mt: 1 }}>6</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={3} sx={{ display: 'flex' }}>
                        <Box sx={{ height: '100%', width: '100%', bgcolor: 'grey.200', textAlign: 'center' }}>
                            <Typography sx={{ mt: 1 }}>8</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, width: '100%', my: 5, py: 5, bgcolor: 'grey.100' }}>
                <Card sx={{ flexGrow: 1, width: { md: 120 }, mr: { md: 1 }, my: 1, ml: { md: '10%' }, mx: { xs: '10%' } }}>
                    <CardHeader
                        title="Standard Package"
                        subheader="$100 USD"
                    />
                    <CardContent>
                        <Button variant='contained' color='secondary' >Buy Now</Button>
                    </CardContent>
                </Card>
                <Card sx={{ flexGrow: 1, width: { md: 120 }, m: { xs: 2, md: 1 }, mx: { xs: '10%' } }}>
                    <CardHeader
                        title="Gold Package"
                        subheader="$300 USD"
                    />
                    <CardContent>
                        <Button variant='contained' color='secondary' >Buy Now</Button>
                    </CardContent>
                </Card>
                <Card sx={{ flexGrow: 1, width: { md: 120 }, ml: { md: 1 }, my: 1, mr: { md: '10%' }, mx: { xs: '10%' } }}>
                    <CardHeader
                        title="Premium Package"
                        subheader="$500 USD"
                    />
                    <CardContent>
                        <Button variant='contained' color='secondary' >Buy Now</Button>
                    </CardContent>
                </Card>
            </Box>
        </Fragment>
    );
}

export default ProductTable;