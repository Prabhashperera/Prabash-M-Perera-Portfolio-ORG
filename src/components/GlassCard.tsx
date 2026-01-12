const GlassCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] ${className}`}>
    {children}
  </div>
);

export default GlassCard