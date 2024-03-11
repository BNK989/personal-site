"use client";

import React from 'react';
import Link from 'next/link';

// import Main from '../layouts/Main';

import Education from '../../components/Resume/Education';
import Experience from '../../components/Resume/Experience';
import Skills from '../../components/Resume/Skills';
import Courses from '../../components/Resume/Courses';
import References from '../../components/Resume/References';

import courses from '../../src/data/resume/courses';
import degrees from '../../src/data/resume/degrees';
import work from '../../src/data/resume/work';
import { skills, categories } from '../../src/data/resume/skills';

// NOTE: sections are displayed in order defined.
const sections = {
  Education: () => <Education data={degrees} />,
  Experience: () => <Experience data={work} />,
  Skills: () => <Skills skills={skills} categories={categories} />,
  Courses: () => <Courses data={courses} />,
  References: () => <References />,
};

const Resume = () => (
  <div
    title="Resume"
    description="Michael D'Angelo's Resume. Smile Identity, Arthena, Matroid, YC, Skeptical Investments, Stanford ICME, Planet, and Facebook."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2><Link href="resume">Resume</Link></h2>
          <div className="link-container">
            {Object.keys(sections).map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>
        </div>
      </header>
      {Object.entries(sections).map(([name, Section]) => (
        <Section key={name} />
      ))}
    </article>
  </div>
);

export default Resume;