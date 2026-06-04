import { motion } from "framer-motion";

import { TECHNOLOGIES } from "../constants";
import { SectionWrapper } from "../hoc";

export const Tech = () => {
  return (
    <SectionWrapper idName="skills">
      <div className="flex flex-row flex-wrap justify-center gap-8">
        {TECHNOLOGIES.map((technology, index) => (
          <motion.div
            key={technology.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.05,
            }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.08,
              y: -5,
            }}
            className="group w-28"
          >
            <div className="bg-tertiary rounded-2xl p-4 flex flex-col items-center justify-center border border-white/10 backdrop-blur-sm transition-all duration-300 hover:border-[#915eff] hover:shadow-[0_0_25px_rgba(145,94,255,0.4)]">
              <img
                src={technology.icon}
                alt={technology.name}
                className="w-14 h-14 object-contain transition-transform duration-300 group-hover:scale-110"
              />

              <p className="mt-3 text-sm text-white text-center font-medium">
                {technology.name}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Tech;