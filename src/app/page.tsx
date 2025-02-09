// import Education from "@/components/education";
// import Experience from "@/components/experience";
// import Photo from "@/components/photo";
// import Skills from "@/components/skills";
// import SNSButtons from "@/components/sns-buttons";
// import Stats from "@/components/stats";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:pb-24 lg:pt-8">
          {/* <div className="lg:hidden">
            <Photo />
          </div> */}
          <div className="text-center lg:text-left">
            {/* <h2 className="h2 mb-6">
              Hi, It&apos;s <span className="text-accent">Jiss Joy</span>
            </h2>
            <span className="text-xl">I&apos;m a Full-stack Developer</span>
            <p className="max-w-[500px] mb-9 text-white/80">
              Committed to building beautiful applications and writing clean,
              well-tested code focused on performance, scalability, and
              security.
            </p> */}
            {/* Resume and SNS */}
            {/* <div className="flex flex-col lg:flex-row items-center gap-8">
              <Link download href="./public/resume/resume.pdf">
                Download
              </Link>
              <Button
                className="uppercase flex items-center gap-2 "
                variant="outline"
              >
                <span>Resume</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 lg:mb-0">
                <SNSButtons />
              </div>
            </div> */}
          </div>
          {/* <div className="hidden lg:flex">
            <Photo />
          </div> */}
        </div>
        {/* <Stats /> */}
        {/* <div className="w-full bg-white/10 h-[1px] rounded-full mx-4 my-4 xl:my-12" /> */}
        {/* About */}
        {/* <div id="about" className="space-y-8"> */}
        {/* <h3 className="h2">
            Abo<span className="text-accent">u</span>t
          </h3> */}
        {/* <Skills /> */}
        {/* <Experience /> */}
        {/* <Education /> */}
        {/* <div>Testimonials</div> */}
      </div>
      {/* Projects */}
      {/* Contact */}
      {/* <div>Footer</div> */}
      {/* </div> */}
    </section>
  );
}
