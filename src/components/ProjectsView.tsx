import { motion } from "framer-motion"
import { Terminal } from "lucide-react"
import ProjectCard from "./ProjectCard"

const ProjectsView = () => {
    return (
        <motion.div 
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}
            className="pt-8"
        >
             <div className="flex items-center gap-4 mb-12">
                <Terminal className="text-purple-400" size={28}/>
                <h3 className="text-3xl font-bold text-white">Deployed Units (Projects)</h3>
                <div className="h-px bg-linear-to-r from-purple-500/50 to-transparent flex-1 ml-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ProjectCard 
                    title="E-Commerce Core"
                    description="A full-stack microservices based e-commerce platform built with Spring Boot and React. Features include secure payments, inventory tracking, and admin dashboard."
                    tags={["Java", "Spring Boot", "React", "MySQL"]}
                    stars="24" forks="8"
                />
                <ProjectCard 
                    title="TaskOS AI"
                    description="Productivity application utilizing OpenAI API for intelligent task prioritization and summarizing. Built with Next.js 14 and Tailwind for optimal performance."
                    tags={["Next.js", "TypeScript", "Tailwind", "OpenAI API"]}
                    stars="45" forks="12"
                />
                <ProjectCard 
                    title="Native Fitness Tracker"
                    description="Cross-platform mobile application for tracking workouts and nutrition data in real-time. Syncs with health APIs and visualizes progress."
                    tags={["React Native", "Redux", "Firebase"]}
                    stars="18" forks="4"
                />
            </div>
        </motion.div>
    )
}

export default ProjectsView