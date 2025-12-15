import { motion } from 'framer-motion';

const skills = {
    designTools: {
        title: "Design Tools",
        items: [
            "Figma, Adobe XD, Miro",
            "Blender (3D Design)",
            "Canva, Illustrator"
        ]
    },
    technicalSkills: {
        title: "Technical Skills",
        items: [
            "HTML, CSS, Java",
            "IBM Mainframe Systems",
            "Advanced Excel (Macros, VLOOKUP)",
            "JIRA, HRX Tool"
        ]
    },
    coreCompetencies: {
        title: "Core Competencies",
        items: [
            "User Research & Testing",
            "Design Thinking",
            "Information Architecture (IA) & Wireframing",
            "Prototyping & Interaction Design"
        ]
    }
};

const TechnicalExpertise = () => {
    return (
        <section className="pt-24 pb-48 px-4 md:px-8 bg-black text-white relative">
            {/* Top Wavy Divider */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[40px] md:h-[60px]">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-[#0a0a0a]"></path>
                </svg>
            </div>

            <div className="max-w-6xl mx-auto pt-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-[#0f0518] rounded-[3rem] p-8 md:p-12 border border-purple-500/10 shadow-2xl relative overflow-hidden"
                >
                    {/* Background Glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-purple-900/5 blur-3xl rounded-full pointer-events-none" />

                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative z-10">Technical Expertise</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10">
                        {/* Design Tools */}
                        <div className="space-y-4">
                            <h3 className="text-purple-400 font-bold text-lg mb-2">{skills.designTools.title}</h3>
                            <ul className="space-y-3">
                                {skills.designTools.items.map((item, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-start text-sm text-gray-300"
                                    >
                                        <span className="mr-2 mt-1.5 w-1 h-1 bg-gray-400 rounded-full shrink-0" />
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        {/* Technical Skills */}
                        <div className="space-y-4">
                            <h3 className="text-purple-400 font-bold text-lg mb-2">{skills.technicalSkills.title}</h3>
                            <ul className="space-y-3">
                                {skills.technicalSkills.items.map((item, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + (i * 0.1) }}
                                        className="flex items-start text-sm text-gray-300"
                                    >
                                        <span className="mr-2 mt-1.5 w-1 h-1 bg-gray-400 rounded-full shrink-0" />
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        {/* Core Competencies */}
                        <div className="space-y-4">
                            <h3 className="text-purple-400 font-bold text-lg mb-2">{skills.coreCompetencies.title}</h3>
                            <ul className="space-y-3">
                                {skills.coreCompetencies.items.map((item, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4 + (i * 0.1) }}
                                        className="flex items-start text-sm text-gray-300"
                                    >
                                        <span className="mr-2 mt-1.5 w-1 h-1 bg-gray-400 rounded-full shrink-0" />
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Wavy Divider - Optional if needed, but the image shows a separation */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[40px] md:h-[60px]">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-[#0a0a0a]"></path>
                </svg>
            </div>
        </section>
    );
};

export default TechnicalExpertise;
