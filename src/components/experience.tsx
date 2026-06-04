import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { EXPERIENCES } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

import "react-vertical-timeline-component/style.min.css";

type ExperienceCardProps = {
  experience: (typeof EXPERIENCES)[number];
};

// Experience Card
const ExperienceCard = ({ experience }: ExperienceCardProps) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    {/* Title */}
    <div>
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>
    </div>

    {/* Experience Points */}
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, i) => (
        <li
          key={`experience-point-${i}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

export const Experience = () => {
  return (
    <SectionWrapper idName="work">
      <>
        {/* Internal Style */}
        <style>
          {`
            .vertical-timeline::before {
              display: none !important;
            }

            .vertical-timeline-element-content-arrow {
              display: none !important;
            }

            .vertical-timeline-element-date {
              display: none !important;
            }

            .vertical-timeline-element-icon {
              display: none !important;
            }

            .vertical-timeline-element-content {
              width: 100% !important;
              max-width: 100% !important;
              margin-left: 0 !important;
              padding: 0 !important;
              box-shadow: none !important;
              background: transparent !important;
            }

            .vertical-timeline-element {
              margin: 0 0 50px 0 !important;
            }

            .vertical-timeline {
              padding: 0 !important;
            }
          `}
        </style>

        {/* Heading */}
        <motion.div
          variants={textVariant()}
          className="text-left mb-20"
        >
          <p className="uppercase tracking-[8px] text-cyan-400 text-sm font-semibold">
            PROFESSIONAL JOURNEY
          </p>

          <h2 className="mt-4 text-white font-black text-[50px] sm:text-[70px]">
            Work Experience
          </h2>

         
        </motion.div>

        <div className="mt-24">
  {EXPERIENCES.map((experience, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="group relative"
    >
      {/* Animated Border */}
      <div className="absolute -inset-[2px] rounded-[40px] bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-40 blur-md group-hover:opacity-100 transition-all duration-700" />

      {/* Main Card */}
      <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-[#0f172a]/80 backdrop-blur-2xl p-10 md:p-14">

        {/* Background Glow */}
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />

        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>
            <span className="inline-flex rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2 text-xs font-bold tracking-[3px] uppercase text-white">
              {experience.date}
            </span>

            <h3 className="mt-6 text-4xl md:text-5xl font-black text-white leading-tight">
              {experience.title}
            </h3>

            <p className="mt-4 text-xl text-cyan-400 font-semibold">
              {experience.company_name}
            </p>

            <p className="mt-8 text-slate-300 leading-relaxed">
              Building scalable web applications, optimizing user experiences,
              and delivering high-quality digital products through modern
              technologies and collaborative development.
            </p>

            {/* Highlights */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h4 className="text-3xl font-black text-white">
                  2+
                </h4>
                <p className="text-slate-400 mt-2">
                  Years Experience
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h4 className="text-3xl font-black text-white">
                  20+
                </h4>
                <p className="text-slate-400 mt-2">
                  Projects Delivered
                </p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div>

            

            {/* Points */}
            <div className="mt-10 space-y-4">
              {experience.points.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                >
                  <div className="flex gap-3">
                    <div className="h-3 w-3 mt-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />
                    <p className="text-slate-300">
                      {point}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  ))}
</div>
      </>
    </SectionWrapper>
  );
};