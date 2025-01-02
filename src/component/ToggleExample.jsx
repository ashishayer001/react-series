import { Box, Button } from '@mui/material'
import React, { useState } from 'react'

const ToggleExample = () => {
    const[light,setLight]=useState(false)
  return (
    <div>
        <Box sx={{ width:"200px", height:"300px",textAlign:"center",padding:"20px" ,background:light? "red":"black"}}>
            toggle light
        </Box>
        <Button variant="contained" color="primary" onClick={()=>{
            setLight(!light)
        }}>
          on/off
        </Button>
    </div>
  )
}

export default ToggleExample