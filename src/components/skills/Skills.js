import React from 'react'
import Reactjs from '../../assets/tech/reactjs.png'
import CSS from '../../assets/tech/css.png'
import JavaScript from '../../assets/tech/javascript.png'
import Nodejs from '../../assets/tech/nodejs.png'

import './skills.css'

function Skills() {
  return (
    <div className='skillBackground'>
    <section id='skills'>
      <span className='subTitle'>What i do</span>
      <span className='skillsDetails'>I am a skilled developer with experience in creating visually appealing and user friendly app and websites.
      I have a strong understanding of designs and a desire to make the world a better place with my skills.
      I am proficient in HTML, CSS, ReactJs, React Native and little knowledge on nodejs, MongoDB, Figma.</span>
      <div className='skillsBars'>
        <div className='skillbar'>
            <img className='skillBarImg' src={JavaScript} alt='skill' />
            <div className='skillBarText'>
                <h2>JavaScript</h2>
                <p>I am a skilled developer with experience in creating visually appealing and user friendly app and websites with my javascript experience.</p>
            </div>
        </div>
        <div className='skillbar'>
            <img className='skillBarImg'  src={Reactjs} alt='skill' />
            <div className='skillBarText'>
                <h2>ReactJs</h2>
                <p>I am a skilled developer with experience in creating visually appealing and user friendly app and websites with my reactjs</p>
            </div>
        </div>
        <div className='skillbar'>
            <img className='skillBarImg' src={CSS} alt='skill' />
            <div className='skillBarText'>
                <h2>HTML/CSS</h2>
                <p>I am a skilled developer with experience in creating visually appealing and user friendly app and websites with my HTML skill</p>
            </div>
        </div>
        <div className='skillbar'>
            <img className='skillBarImg' src={Nodejs} alt='skill' />
            <div className='skillBarText'>
                <h2>NodeJs</h2>
                <p>I am a skilled developer with experience in creating visually appealing and user friendly app and websites with my nodejs skill</p>
            </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Skills