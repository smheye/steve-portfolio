import {Box, Button, Typography} from '@mui/material';
import PropTypes from 'prop-types';
import ProfileHeadshot from './ProfileHeadshot';
import './Profile.css'
export default function Profile({name, role, githubUrl}) {
    return (
      <Box
        id="profile"
        sx={{
          pt: { xs: 4, sm: 12 },
          pb: { xs: 8, sm: 16 },
          // color: 'white',
          // bgcolor: '#06090a',
        }}
      >
        <div className='profile-section mt-5'>
          <div className='flex flex-col justify-content-center mr-5'>
            <ProfileHeadshot/>
          </div>
          <div className='flex flex-col'>
            <Typography variant='h3'>{name}</Typography>
            <Typography variant='h4'>{role}</Typography>
            <Typography variant='paragraph'>
              Welcome to my portfolio site! Feel free to look around at my projects and experience.
            </Typography>
            <Button variant='outlined' href="/resume.pdf">View Resume</Button>
            <Button variant='contained' href={githubUrl}>Visit GitHub</Button>
          </div>
          
      </div>
    </Box>
  )
}

Profile.propTypes = {
  name: PropTypes.string,
  role: PropTypes.string,
  githubUrl: PropTypes.string
};