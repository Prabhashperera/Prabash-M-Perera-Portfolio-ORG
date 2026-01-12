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
                    title="Project ZEIDOT"
                    description="A JavaFx Management Project System to Manage And Donate Left Over Foods from Hotels to Eldery Homes, Child Homes, Homeless Peoples."
                    tags={["Java", "JavaFX", "XML", "MySQL"]}
                    stars="24" forks="8"
                />
                <ProjectCard 
                    title="FindCare WEB"
                    description="A Java EE Fullstack Network for POST found & Lost Pets, Users Can Post There Lost Pets to find, If Found Also They Can Post saying, I Found!!"
                    tags={["React JS", "SpringBoot", "Tailwind", "MySql"]}
                    stars="45" forks="12"
                />
                <ProjectCard 
                    title="BUILDME - HABIT"
                    description="Make a Good Habit in 30 Days Challenge with AI Coach and Make Fun and Gain Life Up"
                    tags={["ReactJs", "Express Js", "MongoDB", "Gemini & Groq"]}
                    stars="18" forks="4"
                />
            </div>
        </motion.div>
    )
}

export default ProjectsView