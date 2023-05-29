import {Stack} from '@mui/material';
import {Link} from 'react-router-dom';
import lgo from './images/lgo.png'
import { Typography} from '@mui/material';
import React from 'react'
import SearchBar from './SearchBar';

const navbar = () => (
    <Stack 
    direction="row" 
    alignItems="center" 
    p={2} 
    sx={{position: 'sticky', background:'#000', top:0, justifyContent: 'space-between' }}>

    <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <img src={lgo} alt="logo" height='60px' />
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{color:'white',ml:'10px', mt:'15px'}}>
      WATCH IT
    </Typography>
    </Link>
    
    <SearchBar />

    </Stack>
  )

export default navbar