// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {
  CssBaseline,
  Box,
  Divider
}
from '@mui/material';
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

const technicalSkills = [
  {
    category: 'Test Management Tools',
    skills: ["Jira", "Micro Focus ALM", "Axure Devops/TFS"]
  },
  {
    category: 'Test Automation',
    skills: ["Selenium, Robot "]
  },
  {
    category: 'Performance Testing Tools',
    skills: ["jMeter, LoadRunner, Blazemeter"]
  },
  {
    category: 'API Testing Tools',
    skills: ["PostMan, SoapUI"]
  },
  { 
    category: 'Programming Languages',
    skills: ['C#, Python, Java, JavaScript, SQL, XML']
  },
  {
    category: 'Other',
    skills: ['Jenkins, SpecFlow, Gherkin, NUnit, Rest, BrowserStack, PowerBI']
  }
]
const jobSummaries = [
  {
    Position: "Assistant Director/Senior Test Automation Manager",
    Date: "July 2021– July 2023",
    company: 'Ernst & Young',
    Location: "Denver, CO",
    Bullets: [
      "Led 15 QA automation projects with 100+ automation engineers within EY Global Tax developing UI, API, SDK, in-sprint, feature, smoke, and regression automation using Selenium with Page Object Model pattern framework written in C#.",
      "Engage with new projects and deliver automation estimates with return on investment (ROI)",
      "Manage multiple internal and external PoC’s including new automation tools, Azure DevOps Scale Set agents, BDD, SpecFlow and data obfuscation technology to determine viability for EY Global Tax",
      "Plan and deploy automation infrastructure upgrades on tax projects",
      "Drove initiatives to drive a shift left mentality to deliver quality initiatives.",
      "Coached Automation Engineers to work across projects building standardized automation processes for EY Global Tax and expanding test automation coverage to over 75%.",
      "Achieved 50% reduction in deployment time after developing CI/CD processes for smoke and regression testing.",
      "Self-trained on PowerBi, and built real-time metrics reporting delivering coverage, execution, and pass / fail results metrics.",
      "Led Automation Community of Practice across EY business units, collaborating on POC and automation design techniques and building knowledge across organizations."
    ]
  },
  {
    Position: "Senior QA Manager",
    Date: "July 2018–June 2021",
    company: 'PriceWaterhouseCoopers',
    Location: "Denver, CO",
    Bullets: [
      "Built and mentored team of 20+ engineers testing applications used in digital transformation of auditing practice.", 
      "Worked with cloud-based applications written in Python, using Airflow for orchestration and Memsql clusters for data storage.",
      "Deployed product performance/stress/load testing using Jmeter.",
      "Implemented Agile automated testing strategy for API and UI testing through Ready API, Qualitia, scriptless test automation platform, deployed via Github and Jenkins.",
      "Increased production deployment of new features from 3-6 months to 2-week cadence and increased throughput and efficiencies in software development and design cycle after implementing SAFe Agile QA methodologies.",
      "Served as Scrum Master and Release Manager while assisting development team in implementing SAFe Agile which built sustainable release model to implement CI/CD through test and release automation.",
      ]
  },
  {
    Position: "Software QA Manager/Test Strategist",
    Date: "August 2010–June 2018",
    company: 'Hewlett Packard Enterprise',
    Location: "Ft. Collins, CO",
    Bullets: [
      "Built and led a team of 20+ engineers ensuring all strategic business commitments were on time, within budget, and with high degree of quality.",
      "Created execution plans based on critical customer problems and drove quality to meet upper management goals. ",
      "Conducted salary and promotion planning based on performance ratings. ",
      "Managed budget for lab equipment and contingent workers. ",
      "Represented QA with cross-functional teams, determining project requirements and test schedules and negotiating deliverables in alignment with strategic goals.",
      "Identified risks and dependencies, ensuring backlog was prioritized and achieving team commitment to PI Plan.",
      "Fostered environment where teams were self-organized and promoted learning through using SAFe Agile processes to embed QA team members into dev feature teams allowing teams to build and deliver features on biweekly cadence.",
      "Decreased 3-6 month delivery cycles to 2-week quarterly process after architecting transition of QA and Development Teams from Waterfall to SAFe Scrum methodologies at sustainable pace. ",
      "Architected and executed automation strategy to transition to CI/CD DevOps methodologies therefore creating automated smoke results immediately upon completion of builds.",
      "Developed and executed plans to transition developer-based testing to Quality Engineering methodology to drive higher quality and sustainable results to business unit. Created test strategies and drove test plan execution. Presented test results at project milestone meetings to quantify release confidence. Provided lab management for hardware and virtualized systems. ",
      "Gathered and analyzed key performance data to identify strengths and weaknesses therefore matching test features to requirements and providing mentorship on areas that lacked expertise. ",
    ]
  },
  {
    Position: "Test Product Support Manager/Lead QA Engineer",
    Date: "August 1997 – July 2010 ",
    company: 'Sun/Oracle',
    Location: "Broomfield, CO",
    Bullets: [
      "Managed team that conducted embedded system testing for virtual tape and storage products. Gathered and analyzed project metrics for internal and partner groups for process improvement implementation. Offered test project leadership on all midrange, low-cost arrays, and Array Manager Software. Facilitated QA presentations and messages at business unit reviews. Developed program requirements, functional specs, white papers and user docs for QA. ",
      "Directed functional and system test on storage and SAN management development projects. Generated comprehensive standardized test plans and test cases based on product design requirements. Recognized as instrumental in setup and qualification of test configurations along with internal lab infrastructure.",
      "Served as Product Engineer for Veritas Volume Manager, FileSystems. Provided sustaining engineering for products by assisting vendors in diagnostics of bugs and escalations. Worked with management and test organizations to release quality products. ",
      "Provided technical support to mission critical, storage customers and Field Engineers. Worked with customers on high availability platforms, ensuring quick resolution of problems. Received award based on customer satisfaction survey",
    ]
  },
  {
    Position: "Programmer/Network Analyst",
    Date: "January 1992 – February 1995",
    company: 'Antarctic Support Associates',
    Location: "Englewood, CO / McMurdo Station Antarctica",
    Bullets: [
      
    ]
  },
  {
    Position: "Lance Corporal",
    Date: "December 1983 – November 1987",
    company: 'United States Marine Corps',
    Location: "California / Okinawa, Japan",
    Bullets: [
      
    ]
  },
]
function App() {
  return (
    <>
      <CssBaseline />
      <Navbar 
        mode="light"
        navbarLinks={["Profile", "About","Experience","Projects","Contact"]}
      />
      <Box sx={{ bgcolor: 'background.default' }}>
        <Profile
          name="Steve Heye"
          role="Delivery Manager"
          githubUrl="https://github.com/smheye"
        />
        <About
          certifications={[
            'Certified Tester – ISTQB Foundation Level 2017',
            'Certified Scrum Master (CSM) 2016'
          ]}
          education={{
            educationOrganization:"New Jersey Institute of Technology",
            degreee:"B.A. Information Systems",
            date:"2008"
          }}
          summary={"Collaborative, flexible, and business-focused Software Quality Specialist with a strong leadership background.  Detail-oriented with the ability to thoroughly analyze systems, identify risks, and formulate testing strategies to satisfy business requirements.  Proven track record of utilizing automation and prioritizing deliverables in order to eliminate test coverage gaps and meet aggressive deadlines while meticulously exercising the application under test."}
        />
        <Experience
          technicalSkills={technicalSkills}
          jobSummaries={jobSummaries}
        />
        <Projects
          projects={[
            {
              imgUrl:"/stu-image.png",
              projectName:"STU Premium",
              projectDescription: "Get a job in less than 30 days",
              linkCta: "Join Now",
              linkUrl: "https://www.skool.com/testerjobs/about"
            },
            {
              imgUrl:"/stu-image.png",
              projectName:"STU Standard",
              projectDescription: "Join the STU Community",
              linkCta: "Join Now",
              linkUrl: "https://www.skool.com/stu/about"
            },
            {
              imgUrl:"/stu-image.png",
              projectName:"STU Lite",
              projectDescription: "Join the Free STU Community",
              linkCta: "Join Now",
              linkUrl: "https://www.skool.com/testers/about"
            }
          ]}
        />
        <Divider/>
        <Contact
          email={"smheye@gmail.com"}
          linkedInUrl={"https://www.linkedin.com/in/steve-heye"}
        />
        
      </Box>
    </>
  )
}

export default App
