import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import './About.css'
import { NavBar } from '../NavBar'
import { TextView } from './TextView'
import { HeadView } from './HeadView'

const header = "Welcome to my site!"   

const text1 = "I’m Yasoob, a recent Computer Science & Creative Writing graduate from The University of Chicago. In my career so far, I’ve been a co-founder, a software engineer, a research fellow, and a management consultant."

const text2 = "Currently, I am a full stack developer at a rapidly growing fintech startup called CardX. On a daily basis I use Node, React, Vue, and AWS. During our sprints I am building our Git repos, APIs, servers, databases, and testing."

const text3 = "I also love teaching. I run a CS and Design Thinking course for 25 students in the West Bank as a member of Stanford’s Code for Palestine. I am a technology literacy mentor for refugee students from Syria and the Congo. I am also a private tutor for over 10 of my own students."

const text4 = "Please check out my projects in the project tab, and it is my pleasure to present my poetry portfolio in the poetry tab. Thanks for being here and please don't hesitate to connect with me through LinkedIn."


export const About = () => {
  return (
    <div>
      <NavBar navType="about" variant="dark"/>
      <Jumbotron fluid id="aboutjumbo">
      </Jumbotron>
      <div className="fortext">
        <HeadView text={header}/>
        <TextView text={text1}/>
        <TextView text={text2}/>
        <TextView text={text3}/>
        <TextView text={text4}/>
      </div>
    </div>
  )
}
