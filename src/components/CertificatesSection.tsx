import { motion } from "framer-motion";
import { Award, ExternalLink, Shield, Star } from "lucide-react";

const certificates = [
  {
    title: "AWS Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2024",
    icon: Shield,
    accent: "primary",
  },
  {
    title: "Meta Front-End Developer",
    issuer: "Meta / Coursera",
    date: "2024",
    icon: Star,
    accent: "accent",
  },
  {
    title: "Spring Boot Microservices",
    issuer: "Udemy",
    date: "2023",
    icon: Award,
    accent: "primary",
  },
  {
    title: "React Native Specialization",
    issuer: "Meta / Coursera",
    date: "2023",
    icon: Star,
    accent: "accent",
  },
  {
    title: "MongoDB Developer Path",
    issuer: "MongoDB University",
    date: "2023",
    icon: Shield,
    accent: "primary",
  },
  {
    title: "Google UX Design",
    issuer: "Google / Coursera",
    date: "2024",
    icon: Award,
    accent: "accent",
  },
];

const CertificatesSection = () => {
  return (
    <section id="certificates" className="relative py-28 md:py-36 overflow-hidden">
      {/* Decorative side line */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Credentials</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Certificates & Awards
          </h2>
        </motion.div>

        {/* Timeline-ribbon layout */}
        <div className="relative">
          {certificates.map((cert, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: "easeOut" as const }}
                className={`relative flex items-center mb-6 md:mb-4 ${
                  isLeft ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Center node (desktop) */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 z-10">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      cert.accent === "primary" ? "bg-primary" : "bg-accent"
                    } ring-4 ring-background`}
                  />
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ duration: 0.2 }}
                  className={`group relative w-full md:w-[calc(50%-3rem)] rounded-2xl border border-border bg-card overflow-hidden cursor-pointer ${
                    isLeft ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  {/* Top accent strip */}
                  <div
                    className={`h-1 w-full ${
                      cert.accent === "primary"
                        ? "bg-gradient-to-r from-primary/60 to-primary/10"
                        : "bg-gradient-to-r from-accent/60 to-accent/10"
                    }`}
                  />

                  <div className="p-5 md:p-6 flex items-start gap-4">
                    {/* Icon */}
                    <div
                      className={`shrink-0 w-11 h-11 rounded-xl flex items-center justify-center ${
                        cert.accent === "primary"
                          ? "bg-primary/10 text-primary"
                          : "bg-accent/10 text-accent"
                      }`}
                    >
                      <cert.icon size={20} />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="font-display font-semibold text-foreground text-base truncate">
                          {cert.title}
                        </h3>
                        <ExternalLink
                          size={14}
                          className="shrink-0 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all duration-200"
                        />
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-sm text-muted-foreground">{cert.issuer}</span>
                        <span className="text-muted-foreground/40">·</span>
                        <span
                          className={`text-xs font-medium ${
                            cert.accent === "primary" ? "text-primary/70" : "text-accent/70"
                          }`}
                        >
                          {cert.date}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Hover glow */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
                      cert.accent === "primary"
                        ? "bg-gradient-to-br from-primary/5 to-transparent"
                        : "bg-gradient-to-br from-accent/5 to-transparent"
                    }`}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
