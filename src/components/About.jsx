import {Box} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import PropTypes from 'prop-types';

export default function About({certifications, education, summary}) {
    return (
        <Box
          id="about"
          sx={{
            pt: { xs: 4, sm: 12 },
            pb: { xs: 8, sm: 16 },
            // color: 'white',
            // bgcolor: '#06090a',
          }}
        >
          {/* full  */}
          <div className='md:flex md:flex-col grid grid-col-1 gap-4 md:gap-10 pb-10'>
            <h2 className='relative md:top-10 top-5'>{"Here's something"}</h2>
            <h1 className='flex justify-center items-center'>
                About Me
            </h1>
          </div>
          {/* avatar and badges */}
          <div className='grid xl:grid-cols-12 grid-cols-1 place-items-center xl:ml-[16%] xl:w-full gap-3'>
          
            <Certification 
              certifications={certifications}
            />
            
            <Education 
              education={education}
            />
            
            </div>    
            {/* underbody text */}
              <div className='mt-5'>
                <p className=''>
                  {summary}
                </p>
              </div>
        </Box>    
    )
}
About.propTypes = {
  certifications: PropTypes.array,
  education: PropTypes.object,
  summary: PropTypes.string
  }
  
  function Certification({certifications}){
    return (
      <div 
        className='rounded-br-3xl rounded-tl-3xl border-black border-dashed border-2 w-full md:w-[75%] xl:w-full col-span-4 self-center h-[6.5em]'
      > 
        < WorkspacePremiumIcon /> 
        {certifications.map((c,i) => <p key={i}>{c}</p>)}
      </div>
    )
  }
  Certification.propTypes = {
    certifications: PropTypes.array
  }

function Education({education}){
  return (
    <div className='rounded-br-3xl rounded-tl-3xl border-black border-2 w-full md:w-[75%] xl:w-full self-center mx-4 col-span-4 my-5 h-[6.5em] '> 
      <SchoolIcon /> 
      <p>{education.organization}</p>
      <p className='pt-[5%] md:pt-5'>{education.degreee} {education.date}</p>
    </div>
  )
}
Education.propTypes = {
  education: PropTypes.object
}