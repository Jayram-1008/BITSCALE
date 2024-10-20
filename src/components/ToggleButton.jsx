import React, { useState } from 'react';
import { Box, Button, Typography, Grid } from '@mui/material';

function ToggleButton({activeButton, setActiveButton}) {
  // State to track active button
console.log(activeButton)
  return (
    <Box>
      <Typography variant="h4" align="center" color="#03002b" sx={{fontWeight:'700'}}>
        Package to suit your plan
      </Typography>
      <Typography variant="subtitle1" align="center" gutterBottom>
        Choose a plan that fits your needs best
      </Typography>

      <Grid container justifyContent="center">
        <Box
          sx={{
            background: '#1976d2',      // Background color for the box
            display: 'inline-flex',      // Keep the box to fit the content
            justifyContent: 'center',    // Center content inside the box
            alignItems: 'center',        // Vertically align content
            padding: '10px',             // Add padding around the buttons
            borderRadius: '8px',         // Rounded corners
          }}
        >
          {/* Monthly Button */}
          <Button
            sx={{
              backgroundColor: activeButton === 'monthly' ? '#fff' : 'transparent',   // Solid if active, transparent if not
              color: activeButton === 'monthly' ? '#1976d2' : '#fff',                 // Text color changes accordingly
              border: '1px solid #fff',                                               // Border to make inactive button visible
              marginRight: '8px',
              '&:hover': {
                backgroundColor: activeButton === 'monthly' ? '#e0e0e0' : 'rgba(255, 255, 255, 0.2)', // Hover effects
              },
            }}
            onClick={() => setActiveButton('monthly')}  // Set active button to 'monthly'
          >
            Monthly
          </Button>

          {/* Annual Button */}
          <Button
            sx={{
              backgroundColor: activeButton === 'annual' ? '#fff' : 'transparent',    // Solid if active, transparent if not
              color: activeButton === 'annual' ? '#1976d2' : '#fff',                  // Text color changes accordingly
              border: '1px solid #fff',                                               // Border for the inactive button
              '&:hover': {
                backgroundColor: activeButton === 'annual' ? '#e0e0e0' : 'rgba(255, 255, 255, 0.2)',  // Hover effects
              },
            }}
            onClick={() => setActiveButton('annual')}  // Set active button to 'annual'
          >
            Annual
          </Button>
        </Box>
      </Grid>
    </Box>
  );
}

export default ToggleButton;
