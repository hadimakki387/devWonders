import Link from "next/link";
import React from "react";
import NextButton from "../NextButton";
import Reveal from "react-awesome-reveal";
import { customAnimation } from "@/utils/constants";

function Title() {
  return (
    <p className="glitch">
      <span aria-hidden="true">I&apos;M HADI MAKKi</span>
      I&apos;M HADI MAKKi
      <span aria-hidden="true">I&apos;M HADI MAKKi</span>
    </p>
  );
}
function Body1() {
  return (
    <p className="AboutMeArticle">
      Experienced and passionate frontend developer skilled in creating dynamic
      and engaging websites. With a proven track record in successful &nbsp;
      <Link href="/projects" className="intermediateLinks">
        projects
      </Link>
      &nbsp; and an internship at XpertBot, I deliver effective solutions that
      captivate users.
    </p>
  );
}
function Body2() {
  return (
    <p className="AboutMeArticle">
      Constantly staying ahead of the curve, I embrace continuous learning and
      keep myself updated with the latest industry trends. By actively exploring
      new technologies, frameworks, and insights, I bring cutting-edge resources
      to every project, pushing the boundaries of what&apos;s possible in the
      digital realm.
    </p>
  );
}

function AboutMeArticle() {
  return (
    <article>
      <Reveal
        triggerOnce
        cascade
        keyframes={customAnimation}
        duration={400}
        delay={700}
      >
        <Title />
        <Body1 />
        <Body2 />
        <NextButton URI="/about" Content="See More About Me" />
      </Reveal>
    </article>
  );
}

export default AboutMeArticle;
