import React, { useRef, useState } from "react";
import { Download }  from "react-feather";
import ReactToPrint from 'react-to-print';
import styles from './body.module.css';
import Editor from '../Editor/Editor';
import Resume from '../Resume/Resume';

function Body() {

  const colors = ["#239ce2", "#48bb78", "#d6ca00", "#a0aec0", "#ed8936"];

  const [activeColor,setActiveColor] =useState(colors[0]);

  const sections = {
    basicInfo: "Basic Info",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    achievement: "Achievements",
    summary: "Summary",
    other: "Other",
  };

  const resumeRef = useRef();


  const [resumeInformation, setResumeInformation] = useState({
    [sections.basicInfo]: {
      id: sections.basicInfo,
      sectionTitle: sections.basicInfo,
      detail: {},
    },
    [sections.workExp]: {
      id: sections.workExp,
      sectionTitle: sections.workExp,
      details: [],
    },
    [sections.project]: {
      id: sections.project,
      sectionTitle: sections.project,
      details: [],
    },
    [sections.education]: {
      id: sections.education,
      sectionTitle: sections.education,
      details: [],
    },
    [sections.achievement]: {
      id: sections.achievement,
      sectionTitle: sections.achievement,
      points: [],
    },
    [sections.summary]: {
      id: sections.summary,
      sectionTitle: sections.summary,
      detail: "",
    },
    [sections.other]: {
      id: sections.other,
      sectionTitle: sections.other,
      detail: "",
    },
  });


  // useEffect(() => {
  //   console.log(resumeInformation);
  // }, [resumeInformation]);

  return (
    <div className={styles.con}>
      <p className={styles.heading}>Resume Builder</p>
      <div className={styles.toolbar}>
        <div className={styles.colors}>
          {
            colors.map((value)=>(
              <span  
               key ={value}
               style={{backgroundColor:value}}

               onClick={()=>setActiveColor(value)}
               className={`${styles.color} ${activeColor===value?styles.active:""}`}/>
            ))
          }
        </div>

          <ReactToPrint
            trigger={() => {
              return (
                <button>
                  Download <Download />
                </button>
              );
            }}
            content={() => resumeRef.current}
          />
      </div>

      <div className={styles.main}>
          <Editor sections={sections}  Information= 
                {resumeInformation} setInformation= 
                  {setResumeInformation}/>

          <Resume   ref={resumeRef}
             sections={sections} activeColor={activeColor}
            Information= {resumeInformation}
          />
      </div>
      
    </div>
  )
}

export default Body;