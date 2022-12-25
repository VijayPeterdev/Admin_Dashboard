import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React from 'react'
import './ProductInputEdit.css'
import { Button } from '@mui/material';
import { IconButton } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
const ProductInputEdit = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
  return (
    <div className='productinputedit'>
        <div className='product__right'>
    <TextField required id="outlined-basic" label="product Name" variant="outlined" />

            <div className='product__row'>
            <TextField required id="outlined-basic" label="Product Price" variant="outlined" />
        <TextField  required id="outlined-basic" label="Stock" variant="outlined" />


            </div>
        <TextField required id="outlined-basic" label="Product Description" variant="outlined" />

       

        <Box sx={{ minWidth: 30 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Active</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Active"
          onChange={handleChange}
        >
          <MenuItem value={true}>YES</MenuItem>
          <MenuItem value={false}>NO</MenuItem>
       
        </Select>
      </FormControl>
    </Box>

    {/* ====================== */}
    <Box sx={{ minWidth: 30 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Active"
          onChange={handleChange}
        >
          <MenuItem value={true}>Electranic</MenuItem>
          <MenuItem value={false}>Mobile</MenuItem>
       
        </Select>
      </FormControl>
    </Box>


        </div>
      <div className='upload__section'>
        <img  className='upload_section_img' src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTFTUa3iqDd041N9DqSTITseg3CNo-Tlj3QvywVfLNudkzvweiCUoON7OWjSKeIXvG0VyY2YRaOl6VQCQ&usqp=CAc" alt="productimg" />
        
        <div>
        <Button  className="button__color" variant="contained" component="label">
              Upload
              <input hidden accept="image/*" multiple type="file" />
            </Button>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
            >
              <input hidden accept="image/*" type="file" />
              <PhotoCamera />
            </IconButton>


        </div>
       
      </div>
      

        </div>
  )
}

export default ProductInputEdit