import { motion } from 'framer-motion';
import { Figma, Image, Box, User, PenTool, Layout } from 'lucide-react';

const services = [
    {
        icon: Figma,
        title: "Design Tools",
        desc: "Expert in Figma, Adobe Illustrator, Miro for Wireframing and prototyping",
        color: "bg-pink-500"
    },
    {
        icon: Image,
        title: "Visual Design",
        desc: "Creating stunning visuals with Canva, Illustrator, and Photoshop",
        color: "bg-purple-500"
    },
    {
        icon: Box,
        title: "3D Design",
        desc: "Crafting 3D elements and mockups using Blender",
        color: "bg-blue-500"
    },
    {
        icon: User,
        title: "User Research",
        desc: "Conducting user interviews, testing, and data-driven insights",
        color: "bg-orange-500"
    },
    {
        icon: PenTool,
        title: "Product Design",
        desc: "End-to-end product design from concept to polished UI",
        color: "bg-green-500"
    }
];

const stats = [
    { value: "10+", label: "Projects Completed" },
    { value: "6+", label: "Happy Clients" },
    { value: "1+", label: "Years Experience" },
    { value: "10+", label: "Client Satisfaction" }
];

const About = () => {
    return (
        <section id="about" className="py-24 px-4 md:px-8 bg-black text-white">
            <div className="max-w-6xl mx-auto">

                {/* Header & Bio */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">About Me</h2>
                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto font-light">
                        Creative and detail-oriented UI/UX Designer & Product Designer with prior experience as a Processor at Wipro, where I developed strong analytical, process improvement, and client-handling skills. Certified in UI/UX Full-Stack Design from Zero Schools, skilled in Figma, Adobe XD, Miro, Blender, Canva, and Illustrator, with working knowledge of HTML, CSS, and Java. Passionate about crafting intuitive, user-centered, and visually engaging digital experiences. Seeking to contribute to innovative teams and grow in the field of UI/UX and product design.
                    </p>
                </motion.div>


                <motion.div
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1
                            }
                        }
                    }}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                show: { opacity: 1, y: 0 }
                            }}
                            whileHover={{
                                scale: 1.05,
                                y: -5,
                                rotateX: 5,
                                rotateY: 5,
                                z: 50,
                                transition: { type: "spring", stiffness: 300 }
                            }}
                            className="p-6 rounded-2xl border border-white/10 bg-[#0a0a0a] hover:border-white/20 transition-colors flex items-start gap-4 group perspective-1000 transform-gpu"
                        >
                            <div className={`w-12 h-12 ${service.color} rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                                <service.icon className="text-white" size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-2 font-serif">{service.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {service.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Stats Marquee (Train Loop) */}
                <div className="relative w-full overflow-hidden mask-gradient-x py-4">
                    {/* Gradient Masks */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-black to-transparent" />
                    <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-black to-transparent" />

                    <motion.div
                        className="flex gap-6 w-max"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 20
                        }}
                    >
                        {[...stats, ...stats, ...stats, ...stats].map((stat, index) => (
                            <div
                                key={index}
                                className="w-64 p-8 rounded-2xl bg-[#111] text-center border border-white/5 hover:border-purple-500/30 transition-colors flex flex-col justify-center items-center shrink-0"
                            >
                                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-gray-400 font-medium whitespace-nowrap">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default About;
