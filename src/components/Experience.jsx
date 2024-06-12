import { Box, Card, Typography } from '@mui/material';
import PropTypes from 'prop-types'
export default function Experience({jobSummaries, technicalSkills}) {
  return (
    <Box
        id="experience"
        sx={{
          pt: { xs: 4, sm: 12 },
          pb: { xs: 8, sm: 16 },
          // color: 'white',
          // bgcolor: '#06090a',
        }}
        >

      <Typography component="h2" variant="h4">
        Experience
      </Typography>
      <TechnicalSkills 
        technicalSkills={technicalSkills}
      />
      <WorkExperience 
        jobSummaries={jobSummaries}
      />
      
    </Box>
  )
}
Experience.propTypes = {
  jobSummaries: PropTypes.array,
  technicalSkills: PropTypes.array
}

function TechnicalSkills({technicalSkills}) {
  return (

    <div className='flex flex-col rounded-tl-3xl rounded-br-3xl bg-slate-500 border-b-gray-300 border-4 p-5 text-left md:w-[50%] w-full mx-auto'>
      {technicalSkills.map((ts, i) => 
        <div className='text-white pb-2' key={i}>
          <Typography component='h3' variant='h5'>{ts.category}:</Typography>
          <Typography component='p'>{ts.skills.join(', ')}</Typography>
        </div>
      )}
    </div>
  )
}
TechnicalSkills.propTypes = {
  technicalSkills: PropTypes.array
}

function WorkExperience({jobSummaries}) {
  return (
    <div>
      <h1 className='my-3'>Job Experience</h1>
      <div className='flex flex-wrap w-full gap-10'>
        {jobSummaries.map((job, i) => (
          <div 
            key={i}
            className='border-2 border-slate-700 bg-gray-200 rounded-2xl p-4 shadow-lg shadow-slate-500 col-span-1'
          >
            {/* <div className='flex flex-wrap gap-4'> */}
              <h2 className='font-semibold uppercase underline'>
                {job.Position}
              </h2>
              <h2>{job.company}</h2>
            
              <h3 className='italic font-semibold'>{job.Date}</h3>
              <p className='underline'>{job.Location}</p>
            {/* </div> */}
            <div className='text-left'>
              
              {job.Bullets.map((bullets, ji) => (
                <p key={ji} className='mt-5 font-thin text-md text-slate-800'>{bullets}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

  )
}
WorkExperience.propTypes = {
  jobSummaries: PropTypes.array
}