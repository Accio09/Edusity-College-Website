import React from 'react'
import './Streams.css'
import course_1 from '../../assets/program-1.png'
import course_2 from '../../assets/program-2.png'
import course_3 from '../../assets/program-3.png'
import course_icon_1 from '../../assets/program-icon-1.png'
import course_icon_2 from '../../assets/program-icon-2.png'
import course_icon_3 from '../../assets/program-icon-3.png'


const Streams = () => {
  return (
    <div className='courses' id= "course">
    <div className="course">
      <img src= {course_1} alt="" />
      <div className="caption">
          <img src={course_icon_1} alt="" />
          <p>Graduation Degree</p>
      </div>
    </div>
    <div className="course">
      <img src= {course_2} alt="" />
      <div className="caption">
          <img src={course_icon_2} alt="" />
          <p>Masters Degree</p>
      </div>
    </div>
    <div className="course">
      <img src= {course_3} alt="" />
      <div className="caption">
          <img src={course_icon_3} alt="" />
          <p>Post Graduation</p>
      </div>
    </div>
  </div>
  )
}

export default Streams
