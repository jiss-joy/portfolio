import Skills from "@/components/skills";

import SNSButtons from "@/components/sns-buttons";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

import RolesTypingText from "@/components/roles-typing-text";
import Photo from "@/components/photo";
import Stats from "@/components/stats";
import ExperienceEducationTimeline from "@/components/experience-education-timeline";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:pb-8 lg:pt-8">
          <div className="lg:hidden">
            <Photo />
          </div>
          <div className="text-center lg:text-left">
            <h2 className="h2 mb-6">
              Hi, It&apos;s <span className="text-primary">Jiss Joy</span>
            </h2>
            <RolesTypingText />
            <p className="max-w-[500px] mt-5 mb-9">
              Committed to building beautiful applications and writing clean,
              well-tested code focused on performance, scalability, and
              security.
            </p>
            {/* Resume and SNS */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <Button className="uppercase flex items-center gap-2 ">
                <span className="font-medium">Download Resume</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 lg:mb-0">
                <SNSButtons />
              </div>
            </div>
          </div>
          <div className="hidden lg:flex">
            <Photo />
          </div>
        </div>
        <Stats />
        <div className="w-full bg-slate-900/10 dark:bg-white/10 h-[1px] rounded-full mx-4 my-4 lg:my-14" />
        {/* About */}
        <div id="about" className="space-y-8">
          <h3 className="h3">About Me</h3>
          <Skills />
          <ExperienceEducationTimeline />
        </div>
        <div className="w-full bg-slate-900/10 dark:bg-white/10 h-[1px] rounded-full mx-4 my-4 lg:my-14" />
        {/* Projects */}
        <div id="projects" className="space-y-8">
          <h3 className="h3">Projects</h3>
          <Projects />
        </div>
        {/* <div>Testimonials</div> */}
        {/* Contact */}
      </div>
    </section>
  );
}
