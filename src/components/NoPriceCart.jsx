import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { LiaArrowCircleRightSolid, LiaDotCircleSolid } from 'react-icons/lia'
import { PiCaretCircleRightDuotone } from 'react-icons/pi'
import { TbCircleDotFilled } from 'react-icons/tb'

const NoPriceCart = ({upperTitle1, upperTitle2='', headingText, headingSummery, features, additionalFeatures, buttonText}) => {
    
    return (
    <Box  
        sx={{
            border:'1px solid black', 
            p:2, 
            mb:2,
            width:'250px',
            height:'125vh', 
            borderRadius:'5px',
            transition: 'all 0.2s ease',  // For smooth transition effect on hover
            '&:hover': {
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 10px 20px',  // Apply shadow on hover
            }
        }}
    >
        <Box sx={{height:'70%',}}>
            <Typography variant='subtitle1'>{upperTitle1}</Typography> 
            <Typography variant='h4' sx={{fontWeight:'800', mt:1}}>{headingText}</Typography>   
            <Typography variant='p' sx={{}}>{headingSummery}</Typography>   
            
            <Box sx={{display:'flex', flexDirection:'column', gap:'25px', mt:5}}>
                {features.map((feature, index) => (
                    <Box key={index} sx={{ display: 'flex', gap: '10px' }}>
                        <PiCaretCircleRightDuotone style={{ fontSize: '18px',  }} />
                        <Typography
                            variant='p'
                            sx={{ flex: 1, marginTop: '-3px', fontSize: '16px', fontWeight: '600' }}
                        >
                            {feature}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
        <Box sx={{height:'30%', display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
            <Box sx={{}}>
                <hr style={{height:'2px', background:'#004213', borderRadius:'5px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}/>
                <br />
                <Box sx={{display:'flex', gap:'10px', mb:2}}>
                    <TbCircleDotFilled    />
                    <Typography variant='p' sx={{flex:1, marginTop:'-3px', fontSize:'17px', color:'#585959', fontWeight:'600'}}>Explore product capabilities.</Typography>
                </Box>
                <br />
                
            </Box>
            <Button variant='contained' fullWidth color='primary' sx={{textTransform:'capitalize', fontSize:'17px'}}>{buttonText}</Button>
        </Box>
    </Box>
  )
}

export default NoPriceCart