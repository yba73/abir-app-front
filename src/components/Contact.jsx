import React from 'react';
import { Send } from '@mui/icons-material';
import { Stack, TextField, Button } from '@mui/material';

const Contact = () => {
  return (
    <section className='bg-[#FDF5F6] py-32 px-8'>
      <h2 className='font-bold text-5xl sm:text-6xl md:text-7xl mb-10 text-center'>
        Contact Us
      </h2>
      
      <form
        action=''
        className=' overflow-hidden flex flex-col items-center'
      >
        <Stack spacing={2} width='400px'>
          <TextField
            label='Your Name'
            variant='outlined'
            size='small'
            className='px-6 py-2'
          />
          <TextField
            label='Your Email'
            variant='outlined'
            size='small'
            className='px-6 py-2'
          />
          <TextField
            label='Your Message'
            variant='outlined'
            size='small'
            multiline
            rows={4}
            className='px-6 py-2'
          />
          <Button
            variant='contained'
            color='primary'
            startIcon={<Send />}
            className='px-6 py-2'
          >
            Send
          </Button>
        </Stack>
      </form>
    </section>
  );
};

export default Contact;