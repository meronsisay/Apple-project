import React from 'react'
import SectionOne from './SectionOne';
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import SectionFifth from "./SectionFifth";
import SectionSixth from "./SectionSixth";
import YouTubeVideos from '../YouTubeVideos';
export default function MainAll() {
  return (
    <div>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFifth />
      <SectionSixth />
      {/* <YouTubeVideos/> */}
    </div>
  );
}
