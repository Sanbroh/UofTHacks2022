import React from 'react';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';

const marks = [
  {
    value: 0,
    label: 'Now',
  },
  {
    value: 10,
    label: '+1 Hour',
  },
  {
    value: 20,
    label: '+2 Hours',
  },
  {
    value: 30,
    label: '+3 Hours',
  },
  {
    value: 40,
    label: '+4 Hours',
  },
  {
    value: 50,
    label: '+5 Hours',
  },
  {
    value: 60,
    label: '+6 Hours',
  },
  {
    value: 70,
    label: '+7 Hours',
  },
  {
    value: 80,
    label: '+8 Hours',
  },
  {
    value: 100,
    label: '> 8 Hours',
  },
];

function valuetext(value) {
  return `${value}°C`;
}

function valueLabelFormat(value) {
  return marks.findIndex((mark) => mark.value === value) + 1;
}

const MapTimeLine = () => {
  return (
    <Box sx={{ width: '65vw', margin: 'auto', display: 'block' }}>
      <Slider
        aria-label="Restricted values"
        defaultValue={20}
        valueLabelFormat={valueLabelFormat}
        getAriaValueText={valuetext}
        step={null}
        marks={marks}
        color="secondary"
      />
    </Box>
  );
};

export default MapTimeLine;
