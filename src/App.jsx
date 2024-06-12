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
    Position: "Managing Quality Engineer",
    Date: "April 2018–July 2020",
    company: 'QualiTest Group',
    Location: "Bridgewater, NJ",
    Bullets: [
      "On-site, hands-on consultant at client in Richmond, VA responsible for overall delivery of full software quality assurance lifecycle services as well as performing responsibilities of a QA Lead.",
      "Participated in all phases of quality assurance operations, including developing the overall test strategy for each given project, providing estimates to leadership, writing and executing test cases (ALM/UFT), managing KPIs, leading defect triage meetings, performing ALM Site Administration, and reporting progress to key stakeholders.",
      "Developed performance testing scripts with jMeter and executed them with BlazeMeter.",
      "Functional testing projects completed: data center migration testing for a major online retailer, delivery of automated regression suites in both Selenium and UFT, extensive integration testing of mainframe enterprise resource planning system, and end-2-end testing of several web-based, customer-facing order entry systems.",

    ]
  },
  {
    Position: "Sr. Software Test Engineer",
    Date: "May 2017–March 2018",
    company: 'Fiserv',
    Location: "Parsippany, NJ",
    Bullets: [
      "Designed and executed tests for native iOS and Android mobile banking applications, web services, and web applications.",
      "Led efforts to design regression test suite for high profile applications, which included writing automated tests in SilkTest, reviewing code of junior team members, and supervising completion of projects.",
    ]
  },
  {
    Position: "SAP Test Manager & Automation Engineer",
    Date: "May 2011 – May 2017 ",
    company: 'BASF Corporation',
    Location: "Florham Park, NJ",
    Bullets: [
      "Developed and executed automated tests to validate BASF’s most critical, end-to-end, global business processes using UFT and Worksoft Certify.",
      "Coordinated User Acceptance Testing for 15 business units and 12 service functions in North and Central America during quarterly SAP updates and regional IT projects.",
      "Ensured all test systems and tools were correctly configured and accessible by UAT testers",
      "Lead training sessions on topics such as test script creation, testing tool usage, and Quality Assurance best practices.",
    ]
  },
  {
    Position: "Programmer/SDET",
    Date: "May 2007 – May 2011",
    company: 'United Parcel Service, Inc.',
    Location: "Mahwah, NJ",
    Bullets: [
      "Served as internal consultant to testing teams by assisting them with finding opportunities for test automation and providing testing tool training, technical support, POC automation, and framework setup during their automation efforts.",
      "Designed and developed Performance Testing scripts and scenarios using LoadRunner",
      "Developed proprietary testing tools using Visual Basic and C# to enable the manual testing team to capture important system configuration information during test execution.",
      "Performed manual testing of UPS hardware and software systems used in package distribution centers and aboard delivery trucks.",
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
