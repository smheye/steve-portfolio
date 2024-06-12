
import {Box,Card, Container, Typography} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PropTypes from 'prop-types';
export default function Contact({email, linkedInUrl}) {
    return (
      <Box
        id="contact"
        sx={{
          pt: { xs: 4, sm: 12 },
          pb: { xs: 8, sm: 16 },
          // color: 'white',
          // bgcolor: '#06090a',
        }}
      >
        <Container
          sx={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: { xs: 3, sm: 6 },
          }}
        >
          <div className='rounded-tl-3xl rounded-br-3xl bg-slate-500 border-b-gray-300 border-4 text-white text-left p-4 '>
            <Typography component="h2" variant="h4">
              Contact Me
            </Typography>
            
            <div className="my-1"><EmailIcon /> 
            <a className='text-blue-300' href={email}> {email} </a>
            </div>
            <div className="my-1" >
              < LinkedInIcon/>
              <a className='text-blue-300' href={linkedInUrl} target="_blank" rel="noopener noreferrer"> {linkedInUrl}</a>
            </div>
          </div>
        </Container>
    </Box>
    )
}

Contact.propTypes = {
  email: PropTypes.string,
  linkedInUrl: PropTypes.string
};