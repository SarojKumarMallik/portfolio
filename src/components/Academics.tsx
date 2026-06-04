import { motion } from "framer-motion";
import { GraduationCap, School, BookOpen, Award } from "lucide-react";
import { SectionWrapper } from "../hoc";

const academics = [
  {
    year: "2025 - Present",
    degree: "M.Tech in Computer Science & Engineering",
    institute: "Gandhi Institute for Education & Technology",
    board: "Biju Patnaik University of Technology",
    icon: GraduationCap,
  },
  {
    year: "2019 - 2023",
    degree: "B.Tech in Computer Science & Engineering",
    institute: "Raajdhani Engineering College",
    board: "Biju Patnaik University of Technology",
    icon: Award,
  },
  {
    year: "2017 - 2019",
    degree: "Higher Secondary (+2 Science)",
    institute: "Indigo H.S. School of Science & Commerce",
    board: "Council of Higher Secondary Education, Odisha",
    icon: BookOpen,
  },
  {
    year: "2017",
    degree: "Secondary Education (10th)",
    institute: "Raisar Kharisan High School",
    board: "Board of Secondary Education, Odisha",
    icon: School,
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.9,
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

const Academics = () => {
  return (
    <SectionWrapper idName="education">
      <div className="relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-left mb-20"
        >
          <p className="uppercase tracking-[6px] text-cyan-400 text-sm">
            Academic Journey
          </p>

          <h2 className="text-white text-5xl md:text-7xl font-black mt-3">
            Education
          </h2>

          {/* <div className="w-32 h-1 mx-auto mt-5 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500" /> */}
        </motion.div>

        {/* Timeline Line */}
        <div className="absolute left-1/2 top-44 bottom-0 w-[4px] bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 hidden md:block -translate-x-1/2 rounded-full" />

        <div className="space-y-16">
          {academics.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0
                    ? "md:justify-start"
                    : "md:justify-end"
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-20">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 p-[2px] shadow-[0_0_35px_rgba(168,85,247,0.7)]">
                    <div className="w-full h-full rounded-full bg-[#0f172a] flex items-center justify-center">
                      <Icon size={26} className="text-cyan-400" />
                    </div>
                  </div>
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{
                    rotateY: 10,
                    rotateX: 5,
                    scale: 1.05,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                  }}
                  className="group w-full md:w-[46%] perspective-1000"
                >
                  <div className="relative overflow-hidden rounded-[32px] border border-white/10 backdrop-blur-xl bg-white/5 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.4)]">

                    {/* Glow Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
                    </div>

                    {/* Floating Orb */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-cyan-500/20 blur-3xl" />
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-purple-500/20 blur-3xl" />

                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center">
                          <Icon size={24} className="text-white" />
                        </div>

                        <span className="px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500">
                          {item.year}
                        </span>
                      </div>

                      <h3 className="text-white text-2xl font-bold leading-snug">
                        {item.degree}
                      </h3>

                      <p className="text-slate-300 mt-4 text-lg">
                        {item.institute}
                      </p>

                      <div className="mt-5 flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
                        <p className="text-cyan-400 font-medium">
                          {item.board}
                        </p>
                      </div>
                    </div>

                    {/* Border Glow */}
                    <div className="absolute inset-0 rounded-[32px] border border-cyan-500/10 group-hover:border-cyan-400/40 transition-all duration-500" />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Academics;