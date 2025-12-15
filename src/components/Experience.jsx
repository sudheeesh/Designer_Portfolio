import { motion } from 'framer-motion';
import { Briefcase, Award, CheckCircle2, MapPin, Calendar, Layout, TrendingUp } from 'lucide-react';

const experiences = [
    {
        id: 1,
        role: "Processor",
        company: "Wipro ltd",
        location: "Coimbatore, India",
        type: "Full-Time",
        status: "Current Position",
        theme: "blue",
        keyAchievements: [
            "90% reduction in payroll errors",
            "Multiple client account management",
            "Advanced Excel automation"
        ],
        responsibilities: [
            "Managed operational processes with accuracy and efficiency, ensuring client satisfaction and timely delivery",
            "Collaborated with internal teams to improve workflow performance and process optimization",
            "Strengthened analytical thinking, attention to detail, and communication skills in a fast-paced corporate environment",
            "Built a strong foundation in teamwork, quality assurance, and data-driven problem-solving",
            "Handle Defined Contribution plans (401K US Payroll) and manage special event processing for multiple clients",
            "Utilize IBM Mainframe systems to maintain and update participant records",
            "Prepare detailed payroll reports and audits using advanced Excel tools (PivotTables, VLOOKUP, and Macros)",
            "Achieved a 90% reduction in payroll errors by identifying gaps and implementing process improvements",
            "Manage daily operations and SLAs through JIRA and handle issue tracking and resolution using the HRX tool"
        ]
    },
    {
        id: 2,
        role: "UI/UX Designer Trainee",
        company: "Zero Schools",
        location: "Online",
        type: "Full-Stack Design",
        status: "Certification Program",
        theme: "pink",
        keyAchievements: [
            "Full-Stack Design Certification",
            "Real-time project experience",
            "Multi-platform design expertise"
        ],
        responsibilities: [
            "Completed a UI/UX Full-Stack Design Certification, mastering user research, wireframing, prototyping, and usability testing",
            "Designed responsive interfaces using Figma, Adobe XD, and Miro for web and mobile platforms",
            "Applied the Design Thinking process to create user-centered solutions for real-time projects like e-commerce and travel apps",
            "Developed wireframes and interactive prototypes to effectively communicate design concepts and improve user experience",
            "Conducted user experience analysis and usability testing to optimize mobile and web app interfaces for accessibility, engagement, and intuitiveness",
            "Designed seamless mobile app interfaces, focusing on intuitive navigation, visual hierarchy, and interactive elements",
            "Explored 3D design using Blender and icon creation in Illustrator, enhancing visual storytelling and interface aesthetics",
            "Collaborated with cross-functional teams to translate business requirements into engaging and functional UI designs",
            "Continuously iterated designs based on user feedback, analytics, and emerging design trends to improve overall product experience"
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-12 px-4 md:px-8 bg-black text-white">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-medium mb-4">
                        <Briefcase size={14} />
                        Professional Journey
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
                    <p className="text-gray-400 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
                        A unique blend of corporate operations excellence and creative design expertise, combining analytical precision with user-centered design thinking.
                    </p>
                </motion.div>

                {/* Experience Cards */}
                <div className="space-y-6">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="rounded-3xl overflow-hidden border border-white/10 bg-[#0a0a0a]"
                        >
                            {/* Card Header */}
                            <div className={`p-6 ${exp.theme === 'blue'
                                ? 'bg-gradient-to-r from-blue-700 to-blue-900'
                                : 'bg-gradient-to-r from-pink-600 to-purple-700'
                                } text-white relative overflow-hidden`}
                            >
                                <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                                        <div className="flex items-center gap-3 text-sm opacity-90 font-medium">
                                            <span>{exp.company}</span>
                                            <span className="w-1 h-1 rounded-full bg-white/60" />
                                            <div className="flex items-center gap-1">
                                                <MapPin size={14} />
                                                {exp.location}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-end gap-2 self-start md:self-center">
                                        <div className="px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-lg flex items-center gap-2 font-medium border border-white/20 text-xs">
                                            {exp.theme === 'blue' ? <Calendar size={14} /> : <Award size={14} />}
                                            {exp.status}
                                        </div>
                                        <span className="font-bold opacity-80 text-xs">{exp.type}</span>
                                    </div>
                                </div>

                                <div className="absolute -right-20 -top-40 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
                            </div>

                            {/* Card Body */}
                            <div className="p-6 bg-[#0c0c0c]">
                                {/* Key Achievements */}
                                <div className="mb-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Award className={`w-5 h-5 ${exp.theme === 'blue' ? 'text-blue-400' : 'text-pink-400'}`} />
                                        <h4 className="text-base font-bold">Key Achievements</h4>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.keyAchievements.map((achievement, i) => (
                                            <motion.span
                                                key={i}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.2 + (i * 0.1) }}
                                                className={`px-3 py-1.5 rounded-lg text-xs font-medium border ${exp.theme === 'brown'
                                                    ? 'bg-blue-500/10 text-blue-200 border-blue-500/20'
                                                    : 'bg-pink-500/10 text-pink-200 border-pink-500/20'
                                                    }`}
                                            >
                                                {achievement}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>

                                {/* Responsibilities Grid */}
                                <div>
                                    <div className="flex items-center gap-2 mb-3">
                                        <TrendingUp className={`w-5 h-5 ${exp.theme === 'blue' ? 'text-blue-400' : 'text-pink-400'}`} />
                                        <h4 className="text-base font-bold">Responsibilities & Achievements</h4>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                                        {exp.responsibilities.map((item, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.3 + (i * 0.05) }}
                                                className="flex gap-2 items-start group"
                                            >
                                                <CheckCircle2
                                                    className={`w-4 h-4 shrink-0 mt-0.5 ${exp.theme === 'blue'
                                                        ? 'text-blue-500 group-hover:text-blue-400'
                                                        : 'text-pink-500 group-hover:text-pink-400'
                                                        } transition-colors`}
                                                />
                                                <p className="text-gray-400 text-xs leading-relaxed group-hover:text-gray-300 transition-colors">
                                                    {item}
                                                </p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
