import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Youtube, Send, Terminal } from "lucide-react";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/Prabashperera" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com" },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder submit
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-28 md:py-36">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 text-primary text-sm font-medium tracking-widest uppercase mb-3">
            <Terminal size={14} />
            The Terminal
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Let's Connect
          </h2>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-border bg-card p-8 md:p-10 mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm text-muted-foreground mb-2 font-medium">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-2 font-medium">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                placeholder="you@email.com"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-sm text-muted-foreground mb-2 font-medium">Message</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={5}
              className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none"
              placeholder="Your message..."
              required
            />
          </div>
          <button
            type="submit"
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-display font-semibold text-sm transition-all duration-300 glow-primary hover:shadow-[0_0_40px_hsl(175,100%,50%,0.4)]"
          >
            Send Message
            <Send size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </motion.form>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4">
          {socials.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="w-12 h-12 rounded-xl border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors duration-200"
              aria-label={social.label}
            >
              <social.icon size={18} />
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Prabash M Perera. Built with precision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
