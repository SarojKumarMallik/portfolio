import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { cn } from "../utils/lib";
import { textVariant, fadeIn } from "../utils/motion";

// Feedbacks Component with Enhanced 3D Design and Smooth Delayed Transitions
export const Feedbacks = () => {
  const focusAreas = [
  {
    title: "AI Integration",
    desc: "Building AI-powered apps and automation.",
    icon: "🤖",
    color: "from-cyan-500/20 to-blue-500/20",
    border: "border-cyan-500/30",
    gradient: "from-cyan-400 to-blue-400",
    delay: 0.1,
  },
  {
    title: "Advanced React",
    desc: "Creating scalable frontend applications.",
    icon: "⚛️",
    color: "from-sky-500/20 to-indigo-500/20",
    border: "border-sky-500/30",
    gradient: "from-sky-400 to-indigo-400",
    delay: 0.2,
  },
  {
    title: "Advanced Python",
    desc: "Backend development and automation.",
    icon: "🐍",
    color: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-500/30",
    gradient: "from-emerald-400 to-teal-400",
    delay: 0.3,
  },
  {
    title: "Data Analytics",
    desc: "Data insights and visualization.",
    icon: "📈",
    color: "from-amber-500/20 to-orange-500/20",
    border: "border-amber-500/30",
    gradient: "from-amber-400 to-orange-400",
    delay: 0.4,
  },
];

  const serviceTags = [
    "CRM Systems",
    "Business Websites",
    "Admin Dashboards",
    "AI Integration",
    "Custom Web Apps",
    "E-commerce Solutions",
    "Real-time Apps",
    "API Development",
  ];

  // Staggered container variants for smooth cascading animations
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
        ease: "easeOut",
      },
    },
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 14,
        stiffness: 120,
        duration: 0.5,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
        delay: 0.5,
      },
    },
    hover: {
      scale: 1.08,
      rotateX: 5,
      rotateY: 5,
      transition: {
        type: "spring",
        damping: 8,
        stiffness: 300,
      },
    },
    tap: { scale: 0.95 },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: 50 },
    show: (custom) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.5,
        type: "spring",
        damping: 12,
      },
    }),
    hover: {
      scale: 1.02,
      x: 5,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 200,
      },
    },
  };

  return (
    <SectionWrapper>
      <div className="mt-12 relative">
        {/* Animated background orbs with delayed pulsing */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.25, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          className="absolute top-20 -left-20 w-72 h-72 bg-purple-600/20 rounded-full blur-[100px] animate-pulse-slow"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.25, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          className="absolute bottom-20 -right-20 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px] animate-pulse-slower"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2, delay: 0.8 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px]"
        />

        {/* Main Container with fade-in transition */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative bg-black-100 rounded-[32px] overflow-hidden border border-white/10 shadow-2xl"
        >
          {/* 3D Perspective Wrapper */}
          <div
            className={cn(
              styles.padding,
              "bg-gradient-to-br from-tertiary/90 to-black-200/90 rounded-2xl relative overflow-hidden transform-gpu"
            )}
            style={{
              transformStyle: "preserve-3d",
              perspective: "1000px",
            }}
          >
            {/* Floating Particles Background with staggered animation */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(30)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: [0, 0.4, 0], y: [100, -50, -200] }}
                  transition={{
                    duration: 3 + Math.random() * 4,
                    delay: Math.random() * 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute w-1 h-1 bg-cyan-400/40 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>

            {/* 3D Glow Effects with delayed appearance */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
              animate={{ opacity: 0.2, scale: 1, rotate: 12 }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-[80px] transform-gpu"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
              animate={{ opacity: 0.2, scale: 1, rotate: -12 }}
              transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
              className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-[80px] transform-gpu"
            />

            {/* Header with smooth text animation */}
            <motion.div
              variants={textVariant()}
              initial="hidden"
              animate="show"
              className="relative z-10"
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={cn(
                  styles.sectionSubText,
                  "bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent inline-block"
                )}
              >
                Let's Work Together
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className={cn(
                  styles.sectionHeadText,
                  "bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent"
                )}
              >
                Available for Freelancing
              </motion.h2>
            </motion.div>

            {/* Main Content with staggered children */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="mt-12 grid lg:grid-cols-2 gap-12 items-start relative z-10"
            >
              {/* LEFT SIDE - With 3D Card Effect */}
              <motion.div
                variants={staggerItem}
                whileHover="hover"
                initial="rest"
                animate="rest"
                className="group"
              >
                <motion.div className="relative h-full bg-gradient-to-br from-black-200/50 to-black-300/50 backdrop-blur-sm rounded-3xl border border-white/10 p-8 overflow-hidden transform-gpu transition-all duration-500 hover:border-cyan-500/30 hover:shadow-[0_0_50px_rgba(6,182,212,0.15)]">
                  {/* Inner glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="relative z-10">
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                      className="text-white text-[34px] font-bold leading-tight"
                    >
                      Have a Web Development
                      <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                        {" "}
                        Project in Mind?
                      </span>
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                      className="mt-6 text-secondary text-[18px] leading-[32px]"
                    >
                        I build fast, scalable, and user-friendly web applications for
  businesses, startups, and entrepreneurs.
                    </motion.p>

                    {/* Service Tags with staggered animation */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                      className="mt-8 flex flex-wrap gap-3"
                    >
                      {serviceTags.map((tag, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          transition={{
                            delay: 0.7 + idx * 0.05,
                            duration: 0.4,
                            type: "spring",
                            stiffness: 200,
                          }}
                          whileHover={{
                            y: -5,
                            scale: 1.08,
                            boxShadow: "0 0 25px rgba(6, 182, 212, 0.4)",
                            borderColor: "rgba(6, 182, 212, 0.6)",
                          }}
                          className="px-4 py-2 rounded-full bg-black-200/80 backdrop-blur-sm border border-cyan-500/20 text-white text-sm cursor-default transition-all duration-300"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </motion.div>

                    {/* Call to Action Buttons with smooth delayed animation */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9, duration: 0.6, type: "spring" }}
                      className="flex flex-wrap gap-5 mt-10"
                    >
                      <motion.a
                        href="tel:8117048317"
                        variants={buttonVariants}
                        initial="hidden"
                        animate="show"
                        whileHover="hover"
                        whileTap="tap"
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-2xl hover:shadow-cyan-500/40"
                      >
                        <motion.span
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ delay: 1.2, duration: 0.5 }}
                          className="text-xl"
                        >
                          📞
                        </motion.span>
                        Call Now
                      </motion.a>

                      <motion.a
                        href="https://wa.me/918117048317?text=Hello%20Saroj,%20I%20am%20interested%20in%20discussing%20a%20web%20development%20project."
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={buttonVariants}
                        initial="hidden"
                        animate="show"
                        whileHover="hover"
                        whileTap="tap"
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold transition-all duration-300 shadow-lg shadow-green-500/25 hover:shadow-2xl hover:shadow-emerald-500/40"
                      >
                        <motion.span
                          animate={{ rotate: [0, 5, -5, 0] }}
                          transition={{ delay: 1.3, duration: 0.4 }}
                          className="text-xl"
                        >
                          💬
                        </motion.span>
                        WhatsApp
                      </motion.a>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>

              {/* RIGHT SIDE - Learning Section as Clean Integrated List */}
              <motion.div
                variants={staggerItem}
                className="relative"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.7 }}
                  className="relative bg-gradient-to-br from-black-200/40 to-black-300/40 backdrop-blur-md border border-white/10 rounded-3xl p-8 overflow-hidden transform-gpu hover:border-cyan-500/30 transition-all duration-500"
                >
                  {/* Animated border gradient */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-blue-500/0 opacity-0 hover:opacity-100 transition-opacity duration-700" />

                  <div className="relative z-10">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                      className="flex items-center gap-3 mb-4"
                    >
                      <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{
                          delay: 1,
                          duration: 1.5,
                          repeat: Infinity,
                          repeatDelay: 2,
                        }}
                        className="text-4xl"
                      >
                        🚀
                      </motion.div>
                      <h3 className="text-white text-[28px] font-bold">
                        Currently{" "}
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                          Learning
                        </span>
                      </h3>
                    </motion.div>

                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                      className="text-secondary mb-8 leading-7 border-l-3 border-cyan-500 pl-4"
                    >
                      Continuously learning modern technologies to build better and smarter
  digital solutions.
                    </motion.p>

                    {/* Integrated List View - No Cards, Just Clean List Items */}
                    <div className="space-y-3">
                      {focusAreas.map((item, index) => (
                        <motion.div
                          key={index}
                          custom={index}
                          variants={listItemVariants}
                          initial="hidden"
                          animate="show"
                          whileHover="hover"
                          className={`group/list flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r ${item.color} backdrop-blur-sm border-l-4 ${item.border} transition-all duration-300 cursor-default`}
                        >
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 8 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="text-3xl"
                          >
                            {item.icon}
                          </motion.div>

                          <div className="flex-1">
                            <h4 className="text-white font-semibold text-lg">
                              {item.title}
                            </h4>
                            <p className="text-secondary text-sm mt-0.5 leading-5">
                              {item.desc}
                            </p>
                          </div>

                          {/* Progress indicator line */}
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "auto" }}
                            transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                            className="hidden sm:block w-16 h-1 bg-gradient-to-r from-cyan-500/50 to-blue-500/50 rounded-full"
                          />
                        </motion.div>
                      ))}
                    </div>

                   
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Custom animations CSS */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.15;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.05);
          }
        }
        
        @keyframes pulse-slower {
          0%, 100% {
            opacity: 0.1;
            transform: scale(1);
          }
          50% {
            opacity: 0.2;
            transform: scale(1.08);
          }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        
        .animate-pulse-slower {
          animation: pulse-slower 8s ease-in-out infinite;
        }
      `}</style>
    </SectionWrapper>
  );
};