import { motion } from "framer-motion";
import { Play, Image, Film } from "lucide-react";

const mediaItems = [
  { type: "video", title: "Tech Tutorial: Building Microservices", icon: Play, aspect: "aspect-video" },
  { type: "film", title: "Short Film: Digital Horizons", icon: Film, aspect: "aspect-video" },
  { type: "photo", title: "Portrait Series: Code & Craft", icon: Image, aspect: "aspect-[3/4]" },
  { type: "video", title: "React Native Crash Course", icon: Play, aspect: "aspect-video" },
  { type: "photo", title: "Generative Art Collection", icon: Image, aspect: "aspect-square" },
  { type: "film", title: "Behind the Build: App Launch", icon: Film, aspect: "aspect-video" },
];

const CreatorSection = () => {
  return (
    <section id="creator" className="relative py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">The Creator Feed</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Content & Media
          </h2>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {mediaItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-2xl border border-border bg-card overflow-hidden break-inside-avoid cursor-pointer"
            >
              <div className={`relative ${item.aspect} bg-gradient-to-br from-secondary to-muted overflow-hidden`}>
                <div className="absolute inset-0 bg-grid opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <item.icon size={36} className="text-muted-foreground/30" />
                </div>
                {/* Hover */}
                <div className="absolute inset-0 bg-background/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center">
                    <item.icon size={20} className="text-primary" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm font-medium text-foreground">{item.title}</p>
                <p className="text-xs text-muted-foreground capitalize mt-1">{item.type}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreatorSection;
