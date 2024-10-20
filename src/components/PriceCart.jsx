import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { PiCaretCircleRightDuotone } from 'react-icons/pi';
import { TbCircleDotFilled } from 'react-icons/tb';

const PriceCart = ({
  upperTitle1,
  upperTitle2 = '',
  price,
  offer,
  cutPrice,
  features = [], // Ensure features is an array
  additionalFeatures = [], // Ensure additionalFeatures is an array
  buttonText,
  backgroundColor = ""
}) => {
  // Set text color based on whether backgroundColor is provided
  const textColor = backgroundColor ? 'white' : '#03002b';  // If backgroundColor is provided, use white, else default color

  return (
    <Box
      sx={{
        border: '1px solid black',
        background: backgroundColor,
        p: 2,
        mb: 2,
        width: '250px',
        height: '125vh',
        borderRadius: '5px',
        transition: 'all 0.2s ease',  // For smooth transition effect on hover
        '&:hover': {
          boxShadow: 'rgba(0, 0, 0, 0.35) 0px 10px 20px',  // Apply shadow on hover
        },
      }}
    >
      <Box sx={{ height: '70%' }}>
        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant='subtitle1' sx={{ color: textColor }}>
            {upperTitle1}
          </Typography>
          <Typography sx={{fontSize:'12px', px:1, background:'#82ffa5', borderRadius:'5px'}}>{upperTitle2}</Typography>
        </Box>

        {/* Price and offer details */}
        <Typography variant='h4' sx={{ fontWeight: '800', color: textColor }}>
          ${price} <span style={{ fontSize: '14px' }}>/month</span>
        </Typography>

        <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center', mb: 4 }}>
          <Typography
            variant='p'
            sx={{ fontSize: '13px', color: '#004213', background: '#82ffa5', px: 2, borderRadius: '5px' }}
          >
            {offer}% off
          </Typography>
          <Typography
            variant='h6'
            sx={{ fontSize: '17px', fontWeight: '800', color: '#565c58', textDecoration: 'line-through' }}
          >
            ${cutPrice}
          </Typography>
        </Box>

        {/* Features List */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
          {features.map((feature, index) => (
            <Box key={index} sx={{ display: 'flex', gap: '10px' }}>
              <PiCaretCircleRightDuotone style={{ fontSize: '18px', color: textColor }} />
              <Typography
                variant='p'
                sx={{ flex: 1, marginTop: '-3px', fontSize: '16px', color: textColor, fontWeight: '600' }}
              >
                {feature}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Additional Features and Action Button */}
      <Box sx={{ height: '30%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Box>
          <hr
            style={{
              height: '2px',
              background: '#004213',
              borderRadius: '5px',
              boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
            }}
          />
          <br />

          {additionalFeatures.map((feature, index) => (
            <Box key={index} sx={{ display: 'flex', gap: '10px', mb: 2 }}>
              <TbCircleDotFilled style={{ color: textColor }} />
              <Typography
                variant='p'
                sx={{ flex: 1, marginTop: '-3px', fontSize: '17px', color: textColor, fontWeight: '600' }}
              >
                {feature}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Action Button */}
        <Button
          variant='contained'
          fullWidth
          color='primary'
          sx={{ textTransform: 'capitalize', fontSize: '17px' }}
        >
          {buttonText}
        </Button>
      </Box>
    </Box>
  );
};

export default PriceCart;
