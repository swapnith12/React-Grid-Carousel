import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

function Samplecard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 24 }} color="black" gutterBottom>
          Schedule
        </Typography>
        <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
          24 Nov 2016 &nbsp;&nbsp;&nbsp; Vestibullium Veverra
        </Typography>
        <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
        24 Nov 2016 &nbsp;&nbsp;&nbsp; Vestibullium Veverra
        </Typography>
        <Typography sx={{ fontSize: 12}} color="text.secondary" gutterBottom>
        24 Nov 2016 &nbsp;&nbsp;&nbsp; Vestibullium Veverra
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Samplecard