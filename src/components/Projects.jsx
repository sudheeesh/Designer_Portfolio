import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Eye, Plus, Share2, Globe, User, Search, MapPin, Bell } from 'lucide-react';
import uc1 from '../assets/uc_1.png';
import uc2 from '../assets/uc_2.png';
import uc3 from '../assets/uc_3.png';
import uc4 from '../assets/uc_4.png';
import uc5 from '../assets/uc_5.png';
import booking1 from '../assets/booking_1.jpg';
import booking2 from '../assets/booking_2.jpg';
import booking3 from '../assets/booking_3.jpg';
import booking4 from '../assets/booking_4.jpg';
import booking5 from '../assets/booking_5.jpg';

const projects = [
    {
        id: 1,
        title: 'Urban Company Replica',
        company: 'Urban Company',
        description: 'The goal of this project was to design a service management dashboard for a platform similar to Urban Company, where users book home services such as AC repair, salon at home, appliance services, cleaning, and beauty.',
        type: 'mobile',
        theme: {
            bg: 'bg-gradient-to-b from-gray-200 via-zinc-900 to-black', // Light top, dark bottom
            logo: 'bg-black text-white',
            textTitle: 'text-zinc-900', // Dark title on light bg
            textDesc: 'text-gray-300'   // Light text on dark bg
        },
        logoText: 'UC',
        images: [uc1, uc2, uc3, uc4, uc5],
    },
    {
        id: 2,
        title: 'Booking.com Re-Design',
        company: 'Booking.com',
        description: 'is a website for booking hotel rooms. It helps anyone who wants to stay at their desired hotel by simply booking a room through the website, without needing to go to the hotel first.',
        type: 'web',
        theme: {
            bg: 'bg-gradient-to-b from-[#b4c6e7] via-[#2855c7] to-[#001f5c]',
            logo: 'bg-[#003580] text-white',
            textTitle: 'text-white',
            textDesc: 'text-white/90'
        },
        logoText: 'Booking.com',
        images: [booking1, booking2, booking3, booking4, booking5],
    }
];

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [mobileScreenIndex, setMobileScreenIndex] = useState(0);

    // Main Project Slider
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % projects.length);
        }, 8000); // Slower main slide to allow viewing internal animations
        return () => clearInterval(timer);
    }, [currentIndex]);

    // Internal Mobile Screen Slider
    useEffect(() => {
        const currentProject = projects[currentIndex];
        const slideCount = currentProject.images ? currentProject.images.length : 3;

        const timer = setInterval(() => {
            setMobileScreenIndex((prev) => (prev + 1) % slideCount);
        }, 2000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    // Reset mobile screen index when project changes
    useEffect(() => {
        setMobileScreenIndex(0);
    }, [currentIndex]);

    const cardVariants = {
        initial: { opacity: 0, scale: 0.95, y: 20 },
        animate: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.95, y: -20 }
    };

    const contentVariants = {
        initial: { opacity: 0, x: -20 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 20 }
    };

    const imageVariants = {
        initial: { scale: 1.1, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        exit: { opacity: 0 }
    };

    return (
        <section id="work" className="py-24 px-4 md:px-12 bg-zinc-950 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Work</h2>
                    <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
                        A curated selection of projects showcasing UI/UX design, product design, and visual design solutions ranging from government portals to e-commerce platforms and creative templates.
                    </p>
                </motion.div>

                <div className="relative h-[850px] md:h-[480px] w-full max-w-5xl mx-auto">
                    <AnimatePresence initial={false} mode="wait">
                        <motion.div
                            key={currentIndex}
                            variants={cardVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.6, ease: "circOut" }}
                            className={`absolute inset-0 w-full h-full rounded-[2.5rem] overflow-hidden ${projects[currentIndex].theme.bg} shadow-2xl `}
                        >
                            <div className="flex flex-col md:flex-row h-full">
                                {/* Left Content */}
                                <div className="w-full md:w-[50%] p-8 md:pl-10 flex flex-col justify-center relative z-10">
                                    {/* Header Group */}
                                    <motion.div
                                        className="flex flex-row items-center gap-6 mb-8"
                                        variants={contentVariants}
                                        transition={{ delay: 0.1 }}
                                    >
                                        {projects[currentIndex].logoText === 'UC' ? (
                                            // Urban Company: Big Black Card Logo
                                            <div className="w-32 h-32 md:w-40 md:h-40 bg-black rounded-[2rem] flex items-center justify-center gap-3 md:gap-4 shrink-0 shadow-2xl">
                                                <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl flex items-center justify-center shrink-0">
                                                    <span className="text-black font-bold text-sm md:text-base">UC</span>
                                                </div>
                                                <div className="text-white text-left leading-tight">
                                                    <div className="font-bold text-sm md:text-base">Urban</div>
                                                    <div className="font-medium text-sm md:text-base">Company</div>
                                                </div>
                                            </div>
                                        ) : (
                                            // Booking.com: Big Blue Card Logo
                                            <div className="w-32 h-32 md:w-40 md:h-40 bg-[#003580] rounded-[2rem] flex items-center justify-center shrink-0 shadow-2xl">
                                                <span className="text-white font-bold text-lg md:text-xl text-center leading-tight">Booking.com</span>
                                            </div>
                                        )}

                                        <h2 className={`text-3xl md:text-4xl font-bold leading-tight ${projects[currentIndex].theme.textTitle} max-w-[200px]`}>
                                            {projects[currentIndex].title}
                                        </h2>
                                    </motion.div>

                                    <motion.p
                                        className={`text-base md:text-lg leading-relaxed mb-8 max-w-sm font-medium ${projects[currentIndex].theme.textDesc}`}
                                        variants={contentVariants}
                                        transition={{ delay: 0.2 }}
                                    >
                                        {projects[currentIndex].description}
                                    </motion.p>

                                    <motion.div
                                        className="flex gap-3 md:gap-4 mt-auto md:mt-0"
                                        variants={contentVariants}
                                        transition={{ delay: 0.3 }}
                                    >
                                        {[Heart, Eye, Plus, Share2].map((Icon, idx) => (
                                            <motion.button
                                                key={idx}
                                                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.3)" }}
                                                whileTap={{ scale: 0.95 }}
                                                className="w-12 h-12 md:w-14 md:h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white transition-colors"
                                            >
                                                <Icon size={24} />
                                            </motion.button>
                                        ))}
                                    </motion.div>
                                </div>

                                {/* Right Visual - Dynamic Mockups */}
                                <div className="w-full md:w-[50%] relative flex items-center justify-center p-4 md:p-0">

                                    {projects[currentIndex].type === 'mobile' ? (
                                        // Urban Company Mobile Mockup with Internal Slideshow
                                        <motion.div
                                            animate={{ y: [0, -10, 0] }}
                                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                            className="relative w-[180px] h-[360px] md:w-[220px] md:h-[440px] bg-white rounded-[2.5rem] border-[6px] border-white shadow-xl transform rotate-0 overflow-hidden"
                                        >
                                            {/* Dynamic Notch */}
                                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-b-lg z-30" />

                                            {/* Screen Content Slider */}
                                            <div className="w-full h-full relative font-sans bg-gray-100">
                                                <AnimatePresence mode="wait">
                                                    <motion.img
                                                        key={mobileScreenIndex}
                                                        src={projects[currentIndex].images[mobileScreenIndex]}
                                                        alt="Urban Company Screen"
                                                        variants={imageVariants}
                                                        initial="initial"
                                                        animate="animate"
                                                        exit="exit"
                                                        transition={{ duration: 0.8 }}
                                                        className="absolute inset-0 w-full h-full object-cover"
                                                    />
                                                </AnimatePresence>
                                            </div>
                                        </motion.div>
                                    ) : (
                                        // Booking.com Web Mockup - Resized to fit
                                        <motion.div
                                            animate={{ y: [0, -8, 0] }}
                                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                            className="relative w-[260px] md:w-[380px] aspect-[4/3] bg-white rounded-2xl shadow-2xl overflow-hidden transform md:translate-x-0"
                                        >
                                            {/* App Header */}
                                            <div className="h-8 bg-[#003580] flex items-center justify-between px-3 z-20 relative">
                                                <span className="text-white font-bold text-[10px]">Booking.com</span>
                                                <div className="flex gap-2 text-white text-[8px] items-center">
                                                    <span>INR</span> <span>?</span> <div className="border border-white/50 px-1 rounded">List property</div>
                                                </div>
                                            </div>

                                            <div className="w-full h-full relative bg-gray-100">
                                                <AnimatePresence mode="wait">
                                                    <motion.img
                                                        key={mobileScreenIndex}
                                                        src={projects[currentIndex].images[mobileScreenIndex]}
                                                        alt="Booking.com Screen"
                                                        variants={imageVariants}
                                                        initial="initial"
                                                        animate="animate"
                                                        exit="exit"
                                                        transition={{ duration: 0.8 }}
                                                        className="absolute inset-0 w-full h-full object-cover origin-top"
                                                    />
                                                </AnimatePresence>
                                            </div>
                                        </motion.div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Dots */}
                    <div className="absolute -bottom-10 left-0 right-0 flex justify-center gap-3">
                        {projects.map((_, idx) => (
                            <div
                                key={idx}
                                className="relative flex flex-col items-center"
                            >
                                <button
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`h-2 rounded-full transition-all duration-300 z-10 ${idx === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/20'}`}
                                />
                                {idx === currentIndex && (
                                    <motion.div
                                        className="absolute -top-1 w-full h-0.5 bg-blue-500 blur-[1px]"
                                        layoutId="activeGlow"
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
