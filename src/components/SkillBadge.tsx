const SkillBadge = ({ name, icon: Icon }: { name: string, icon: any }) => (
  <div className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-cyan-300 bg-cyan-950/30 border border-cyan-800/50 rounded-full hover:bg-cyan-900/50 transition-colors duration-300 cursor-default">
    <Icon size={16} className="text-cyan-400" />
    {name}
  </div>
);

export default SkillBadge