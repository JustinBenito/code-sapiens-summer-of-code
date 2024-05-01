import { color } from 'framer-motion';
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Schedule = () => {

const timeline = [
    {
      "date": "01.05.2024",
      "title": "Participants Registration Starts",
      "bg": "#FFE0B2",
      "icon": "#000000"
    },
    {
      "date": "07.05.2024",
      "title": "Open Source Maintainers Registration Starts",
      "bg": "#FFCC80",
      "icon": "#000000"
    },
    {
      "date": "3.06.2024",
      "title": "Finalising Maintainers",
      "bg": "#FFB74D",
      "icon": "#000000"
    },
    {
      "date": "07.06.2024",
      "title": "Notification to Participants",
      "bg": "#FFA726",
      "icon": "#000000"
    },
    {
      "date": "14.06.2024",
      "title": "Start of Summer of Code",
      "bg": "#FF9800",
      "icon": "#000000"
    },
    {
      "date": "08.07.2024",
      "title": "End of Summer of code. Top participants will be rewarded",
      "bg": "#FF8F00",
      "icon": "#000000"
    }
  ]
  
  return (
    <div className='mb-32 max-w-6xl mx-auto text-center flex items-center justify-center flex-col p-4 mt-32'>
        <h1 className='mb-16 text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-600 font-bold text-6xl'>What's in for you?</h1> 
    <VerticalTimeline lineColor="lightgray">
        {
            timeline.map((exp,index)=>(
                <React.Fragment key={index} >
                <VerticalTimelineElement
                contentStyle={{
                    background: `${exp.bg}`,
                    boxShadow: "none",
                    border: "1px solid rgba(0,0,0,0.05)",
                    textAlign:"left",
                    padding: "1.3rem",
                    color: '#ffffff'
                }}
                date={exp.date}
                
                icon={exp.day}
                iconStyle={{
                  background: `${exp.icon}`,
                  fontWeight: "bold",
                  color:"white",
                  fontSize: "5px",
                  textAlign: 'center',
                  display: 'flex',
                  width: '5px',
                  height: '5px',
                  marginLeft: "-2px",
                  justifyContent: 'center',
                  alignItems: 'center' // This is added for vertical centering
              }}
              
                contentArrowStyle={{
                    borderRight: `0.4rem solid ${exp.bg}`
                }}
                >

                    <h1 className="!mt-0  text-black font-bold text-xl">{exp.title}</h1>
                </VerticalTimelineElement>
                </React.Fragment>
            ))
        }
    </VerticalTimeline>
  
  </div>
  );
}

export default Schedule;