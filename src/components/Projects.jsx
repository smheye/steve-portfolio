import {Box,Button, Card, Typography} from '@mui/material';
import Carousel from 'react-material-ui-carousel'
import PropTypes from 'prop-types';
export default function Projects({projects}) {
    return (
      <Box
        id="projects"
        sx={{
          pt: { xs: 4, sm: 12 },
          pb: { xs: 8, sm: 16 },
          // color: 'white',
          // bgcolor: '#06090a',
        }}
      >            
        <Typography component="h2" variant="h4">
          Projects
        </Typography>
        
          <Carousel animation='slide' duration={750}>
            {projects.map((p, i) => 
              <ProjectCard key={i}
                {...p}
              />
            )}
          </Carousel>
    </Box>
    )
}
Projects.propTypes = {
  projects: PropTypes.array
}

function ProjectCard({imgUrl,projectName, projectDescription, skillsUsed, linkUrl, linkCta}){
  return (
    <Card className='flex flex-col'>
      <img src={imgUrl} alt="image of project" width={"100%"}/>
      <Typography variant='h3'>{projectName}</Typography>
      <Typography>{projectDescription}</Typography>
      {skillsUsed && <Typography>Skills Used: {skillsUsed}</Typography>}
      <Button variant="outlined" href={linkUrl}>
        {linkCta}
      </Button>
    </Card>
  )
}
ProjectCard.propTypes = {
  imgUrl: PropTypes.string,
  projectName: PropTypes.string,
  projectDescription: PropTypes.string,
  skillsUsed: PropTypes.string,
  linkUrl: PropTypes.string,
  linkCta: PropTypes.string
};
