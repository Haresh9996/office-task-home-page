// @mui
import { Badge, Button } from '@mui/base';
import { AppBar, Typography, Grid, Slider, Stack, TextField, Chip } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// _mock
import { _mapContact } from 'src/_mock';
import { SettingsButton } from 'src/layouts/_common';

// ----------------------------------------------------------------------

const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 100,
    label: '10',
  },
];

const marks2 = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 100,
    label: '80',
  },
];
const marks3 = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 100,
    label: '400',
  },
];

function valuetext(value: number) {
  return `${value}`;
}
function valuetext2(value: number) {
  return `${value}`;
}
function valuetext3(value: number) {
  return `${value}`;
}


export default function EvView() {
  const [value, setValue] = useState(10)
  const [value2, setValue2] = useState(70)
  const [value3, setValue3] = useState(30)
  const [value4, setValue4] = useState(30)

  const handleChange = (e: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  }
  const handleChange2 = (e: Event, newValue: number | number[]) => {
    setValue2(newValue as number);
  }
  const handleChange3 = (e: Event, newValue: number | number[]) => {
    setValue3(newValue as number);
  }
  const handleChange4 = (e: Event, newValue: number | number[]) => {
    setValue4(newValue as number);
  }
  return (
    <>
      <Container>
        <AppBar position="static" sx={{ backgroundColor: 'transparent', color: 'black', boxShadow: 'none' }}>
          <Container maxWidth="xl">
            <Typography variant="h4" sx={{ my: 4, backgroundColor: 'gainsboro', p: 2, borderRadius: 2, textAlign: 'center', color: '#0578a9' }}>
              XX Chargers tracked ++ Across the whole UK
            </Typography>
          </Container>
        </AppBar>
        <Container>
          <Box sx={{ display: 'flex', gap: 3, justifyContent: 'space-between', mt: 4 }}>
            <Box sx={{ width: '48%', height: '200px', backgroundColor: 'lightgrey', p: 2, borderRadius: 3 }}>
              <Typography variant="h6" sx={{ color: '#0578a9', textAlign: 'center' }}>Pick your next location</Typography>
              <Typography sx={{ fontSize: '1rem', mt: 1 }}>Use our historical utilization database of comprehensive EV point
                data to make informed decision on siting new chargers
              </Typography>
            </Box>
            <Box sx={{ width: '48%', height: '200px', backgroundColor: 'lightgrey', p: 2, borderRadius: 3 }}>
              <Typography variant="h6" sx={{ color: '#0578a9', textAlign: 'center' }}>Understand your estate</Typography>
              <Typography sx={{ fontSize: '1rem', mt: 1 }}>If you have a portfolio of sites / land, understand its value to network operates by comparing and contrasting with similar locations</Typography>
            </Box>
            <Box sx={{ width: '48%', height: '200px', backgroundColor: 'lightgrey', p: 2, borderRadius: 3 }}>
              <Typography variant="h6" sx={{ color: '#0578a9', textAlign: 'center' }}>Analysis and report</Typography>
              <Typography sx={{ fontSize: '1rem', mt: 1 }}>Use our data to benchmark your network’s performance against competitors</Typography>
            </Box>
          </Box>
        </Container>
        <Container>
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" sx={{ my: 4, backgroundColor: 'gainsboro', p: 2, borderRadius: 2, textAlign: 'center', color: '#0578a9' }}>
              Understand how our product can give you the insights you need to drive utilization and financial performance:
            </Typography>
          </Box>
          <Grid container mt={3} sx={{ gap: 4, p: 3, justifyContent: 'space-between' }}>
            <Grid item xs={12} md={5} sx={{ backgroundColor: 'gainsboro', p: 3, borderRadius: 3 }}>
              <Typography variant="h3" sx={{ color: '#0578a9' }}>Input:</Typography>
              <Box>
                <Box>
                  <Typography variant='body2'>Utilization (%):</Typography>
                  <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                    <Slider value={value} getAriaValueText={valuetext} marks={marks} onChange={handleChange} />
                    <TextField type='number' size='small' variant='outlined' sx={{ backgroundColor: '#fff', borderRadius: 2, maxWidth: 45, }} />
                  </Stack>
                </Box>
                <Box>
                  <Typography variant='body2'>Margin (p/kWh):</Typography>
                  <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                    <Slider value={value2} getAriaValueText={valuetext2} marks={marks2} onChange={handleChange2} />
                    <TextField type='number' size='small' variant='outlined' sx={{ backgroundColor: '#fff', borderRadius: 2, maxWidth: 45, }} />
                  </Stack>
                </Box>
                <Box>
                  <Typography variant='body2'>Average charge speed (kW):</Typography>
                  <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                    <Slider value={value3} getAriaValueText={valuetext3} marks={marks3} onChange={handleChange3} />
                    <TextField type='number' size='small' variant='outlined' sx={{ backgroundColor: '#fff', borderRadius: 2, maxWidth: 45, }} />
                  </Stack>
                </Box>
                <Box>
                  <Typography variant='body2'>Discount rate (%):</Typography>
                  <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                    <Slider value={value4} onChange={handleChange4} />
                    <TextField type='number' size='small' variant='outlined' sx={{ backgroundColor: '#fff', borderRadius: 2, maxWidth: 45, }} />
                  </Stack>
                </Box>
                <Box mt={2}>
                  <Stack direction="row" spacing={1} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography variant='body2'># of chargers :</Typography>
                    <TextField type='number' size='small' variant='outlined' sx={{ backgroundColor: '#cceee8', maxWidth: 45, borderRadius: 2 }} />
                  </Stack>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} sx={{ backgroundColor: '#0578a9', p: 3, borderRadius: 3 }}>
              <Typography variant="h3" sx={{ color: '#fff' }}>Output:</Typography>
              <Box mt={2}>
                {[
                  { label: "Extra revenue / charger:", value: "£5,000" },
                  { label: "Extra value over lifetime / charger:", value: "£50,000" },
                  { label: "Extra revenue:", value: "£5.0m" },
                  { label: "Extra value over lifetime:", value: "£50.0m" }
                ].map((item, index) => (
                  <Stack key={index} direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between', mt: index > 0 ? 2 : 0 }}>
                    <Typography variant='h6' sx={{ color: '#fff' }}>{item.label}</Typography>
                    <Chip label={item.value} sx={{ backgroundColor: '#fff', color: '#0578a9' }} />
                  </Stack>
                ))}

              </Box>

            </Grid>
          </Grid>
        </Container>
      </Container>
    </>
  );
}
