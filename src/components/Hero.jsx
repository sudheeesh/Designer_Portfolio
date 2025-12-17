import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Sparkles, ArrowRight, Palette, Layers, MousePointer2 } from 'lucide-react';
import { useEffect } from 'react';

const Hero = () => {
    // Mouse position for parallax effects
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring animation for mouse values
    const springConfig = { damping: 25, stiffness: 150 };
    const mouseXSpring = useSpring(mouseX, springConfig);
    const mouseYSpring = useSpring(mouseY, springConfig);

    // Calculate rotation based on mouse position (for 3D tilt)
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

    // Parallax movement for different layers
    const layer1X = useTransform(mouseXSpring, [-0.5, 0.5], ["-20px", "20px"]);
    const layer1Y = useTransform(mouseYSpring, [-0.5, 0.5], ["-20px", "20px"]);

    const layer2X = useTransform(mouseXSpring, [-0.5, 0.5], ["-40px", "40px"]);
    const layer2Y = useTransform(mouseYSpring, [-0.5, 0.5], ["-40px", "40px"]);

    const handleMouseMove = (e) => {
        // Normalize mouse coordinates to -0.5 to 0.5
        const { innerWidth, innerHeight } = window;
        const x = (e.clientX / innerWidth) - 0.5;
        const y = (e.clientY / innerHeight) - 0.5;
        mouseX.set(x);
        mouseY.set(y);
    };

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section id="home" className="min-h-[45rem] landscape:min-h-screen flex flex-col md:flex-row items-center justify-between px-6 sm:px-12 pt-32 max-w-7xl mx-auto overflow-hidden perspective-1000">

            {/* Background Decorative Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-20 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px]" />
            </div>

            {/* Left Column: Content */}
            <div className="flex-1 z-10 md:pr-12 md:mt-[-50px]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-8 backdrop-blur-sm"
                >
                    <Sparkles size={14} className="text-purple-400" />
                    <span>UI/UX Designer & Product Designer</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-light tracking-tight mb-2 text-white"
                >
                    Hi, I'm
                </motion.h1>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter mb-8 pb-2"
                >
                    <span className="sr-only">GOWTHAM B</span>
                    <motion.div aria-hidden="true" className="flex overflow-hidden">
                        {Array.from("GOWTHAM B").map((char, index) => (
                            <motion.span
                                key={index}
                                initial={{ y: 100 }}
                                animate={{ y: 0 }}
                                transition={{
                                    delay: 0.3 + index * 0.05,
                                    type: "spring",
                                    stiffness: 150,
                                    damping: 15
                                }}
                                className={`inline-block whitespace-pre bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient`}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </motion.div>
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-2xl md:text-3xl font-medium text-white mb-6"
                >
                    Designing experiences that <span className="text-purple-400 italic">inspire</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-gray-400 text-lg leading-relaxed max-w-xl mb-10"
                >
                    Combining analytical precision with creative flair. I turn complex problems into elegant, user-centric interfaces that leave a lasting impression.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex flex-wrap gap-4"
                >
                    <motion.button
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-[0_0_20px_rgba(192,38,211,0.5)] transition-all flex items-center gap-2 group relative overflow-hidden"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            View My Work
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full" />
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.open('https://drive.google.com/file/d/1InODo8ye_qIaDJvPUYcIn0ZbPi_WSFZ6/view?usp=drive_link', '_blank')}
                        className="px-8 py-4 relative overflow-hidden group rounded-full text-white font-semibold"
                    >
                        {/* Rainbow Background */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ef4444,#f97316,#eab308,#22c55e,#3b82f6,#a855f7)]" />

                        {/* Hover Black Overlay */}
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <span className="relative z-10">Resume</span>
                    </motion.button>
                </motion.div>
            </div>

            {/* Right Column: Interactive 3D Image */}
            <motion.div
                className="flex-1 relative mt-16 md:mt-0 flex justify-center perspective-[2000px]"
                style={{ perspective: 1000 }}
            >
                {/* 3D Container that tilts */}
                <motion.div
                    style={{
                        rotateX,
                        rotateY,
                        transformStyle: "preserve-3d"
                    }}
                    className="relative w-full max-w-lg aspect-square flex justify-center items-center"
                >
                    {/* Floating Background Text (Furthest back) */}
                    <motion.div
                        style={{ x: layer1X, y: layer1Y, translateZ: -100 }}
                        className="absolute inset-0 flex items-center justify-center select-none pointer-events-none"
                    >
                        <span className="text-[20rem] font-black text-white/[0.03] leading-none tracking-tighter">
                            GB
                        </span>
                    </motion.div>

                    {/* Hover-only Spotlight/Glow (The "3rd colour" effect) */}
                    <motion.div
                        variants={{
                            initial: { opacity: 0, scale: 0.8 },
                            hover: { opacity: 1, scale: 1.2 }
                        }}
                        transition={{ duration: 0.5 }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-white/10 rounded-full blur-[80px] -z-10"
                    />

                    {/* Main Character Image */}
                    <motion.div
                        style={{ translateZ: 50 }}
                        className="relative z-10 w-[85%] h-full flex items-center justify-center pointer-events-none"
                    >
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="relative w-full"
                        >
                            <img
                                src="/hero_avatar_final_studio.png"
                                alt="3D Creative Designer"
                                className="w-full h-auto object-contain drop-shadow-2xl"
                            />

                            {/* Reflection/Shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-full" />
                        </motion.div>
                    </motion.div>

                    {/* Floating Creative Elements (Floating in front) */}

                    {/* Card 1: Palette */}
                    <motion.div
                        style={{ x: layer2X, y: layer2Y, translateZ: 100 }}
                        className="absolute top-[10%] left-[-5%] sm:left-[5%] p-3 bg-gray-900/80 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl animate-float"
                    >
                        <div className="p-2 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg">
                            <Palette size={24} className="text-white" />
                        </div>
                    </motion.div>

                    {/* Card 2: Mouse/Interaction */}
                    <motion.div
                        style={{ x: layer2X, y: layer2Y, translateZ: 80 }}
                        className="absolute bottom-[20%] right-[-5%] sm:right-[5%] p-3 bg-gray-900/80 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl animate-float-delayed"
                    >
                        <div className="flex items-center gap-3 px-2">
                            <div className="p-2 bg-blue-500/20 rounded-lg">
                                <MousePointer2 size={20} className="text-blue-400" />
                            </div>
                            <div>
                                <div className="text-xs text-gray-400">Interactions</div>
                                <div className="text-sm font-bold text-white">Advanced</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 3: Layers/UI */}
                    <motion.div
                        style={{ x: layer1X, y: layer1Y, translateZ: 60 }}
                        className="absolute top-[40%] right-[-10%] sm:right-[0%] hidden sm:block p-3 bg-gray-900/80 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                    >
                        <div className="p-2 bg-indigo-500/20 rounded-lg">
                            <Layers size={24} className="text-indigo-400" />
                        </div>
                    </motion.div>

                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
