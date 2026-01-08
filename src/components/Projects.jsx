import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Eye, Plus, Share2, Globe, User, Search, MapPin, Bell, ArrowRight, Layers, PenTool, Box, Shirt } from 'lucide-react';
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
import instagroceryLogo from '../assets/instagrocery_logo.png';
import instagrocery1 from '../assets/instagrocery_1.jpg';
import instagrocery3 from '../assets/instagrocery_3.jpg';
import instagrocery6 from '../assets/instagrocery_6.jpg';
import instagrocery7 from '../assets/instagrocery_7.jpg';
import instagrocery8 from '../assets/instagrocery_8.jpg';
import instagrocery9 from '../assets/instagrocery_9.jpg';
import wireframing from '../assets/wireframing.png';
import logoDesigns from '../assets/logo_designs.png';
import productDesign from '../assets/product_design.png';
import tshirtDesigns from '../assets/tshirt_designs.png';

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
        link: 'https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2IvYy8zZjczMjRhMjRkZjVhN2M0L0lRQkJISTAyRVdCX1NxZW9MZDFJUkJqV0FiT0FHcTV1WV9hRzdka3hMWVJyM0VjP2U9MFFZWGY1&cid=3F7324A24DF5A7C4&id=3F7324A24DF5A7C4%21s368d1c4160114a7fa7a82ddd484418d6&parId=3F7324A24DF5A7C4%21s4617f7297a2a448383e612c55cac7f1f&o=OneUp',
        caseStudyUrl: 'https://www.figma.com/proto/cWyEeTr2NMsnmVWUXHNWC2/Urban-Company--Replica-?page-id=0%3A1&node-id=124-312&viewport=3598%2C665%2C0.3&t=dyDV6hRncvyUu7Eb-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=124%3A312',
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
        link: 'https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2IvYy8zZjczMjRhMjRkZjVhN2M0L0lRQk84QXZXSlFDYVE2UkMtNklrT3RPLUFjQm1fdlAtUENUZWx2cWxIUkgzNGVjP2U9NDNsdE1W&cid=3F7324A24DF5A7C4&id=3F7324A24DF5A7C4%21sd60bf04e0025439aa442fba2243ad3be&parId=3F7324A24DF5A7C4%21s4617f7297a2a448383e612c55cac7f1f&o=OneUp',
        caseStudyUrl: 'https://www.figma.com/proto/gIBZJv8F6zSg3tdDUhqj9n/project2?page-id=1%3A2&node-id=426-999&viewport=4378%2C640%2C0.24&t=pbo0F76jezkb4i7n-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=593%3A1091',
        images: [booking1, booking2, booking3, booking4, booking5],
    },
    {
        id: 3,
        title: 'Instagrocery IOS Mobile App',
        company: 'Insta Grocery',
        description: 'Instagrocery is a social-driven food and grocery ordering app that blends the experience of scrolling social media with instant purchasing',
        type: 'mobile',
        theme: {
            bg: 'bg-gradient-to-br from-[#787228] via-[#a39a2d] to-[#d4ca47]',
            logo: 'bg-white text-black',
            textTitle: 'text-white',
            textDesc: 'text-white/95'
        },
        logoText: 'Instagrocery',
        logoImg: instagroceryLogo,
        link: 'https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2IvYy8zZjczMjRhMjRkZjVhN2M0L0lRRFhDc0V0aGhBRlNiZzZmY2RwX0wxQ0FaazZaTV9EUWt3RDc0OVlYNHZYcUxBP2U9bklOOE1U&cid=3F7324A24DF5A7C4&id=3F7324A24DF5A7C4%21s2dc10ad710864905b83a7dc769fcbd42&parId=3F7324A24DF5A7C4%21s4617f7297a2a448383e612c55cac7f1f&o=OneUp',
        caseStudyUrl: 'https://www.figma.com/proto/cWyEeTr2NMsnmVWUXHNWC2/Projects?page-id=482%3A7039&node-id=489-8069&viewport=265%2C447%2C0.36&t=3HFXvc8o9jKWkYAB-1&scaling=min-zoom&content-scaling=fixed',
        images: [instagrocery1, instagrocery3, instagrocery6, instagrocery7, instagrocery8, instagrocery9],
    }
];

const expertiseItems = [
    {
        title: "Wireframing",
        icon: Layers,
        color: "bg-blue-500/10 text-blue-500",
        placeholderColor: "bg-zinc-800",
        image: wireframing,
        link: "https://www.figma.com/design/gIBZJv8F6zSg3tdDUhqj9n/wireframe?node-id=0-1&t=mgRIEL8JH1UjDVAD-1"
    },
    {
        title: "Logo Designs",
        icon: PenTool,
        color: "bg-purple-500/10 text-purple-500",
        placeholderColor: "bg-zinc-800",
        image: logoDesigns,
        link: "https://www.figma.com/design/wjRdJRieXulR6Rep0v9OWh/Portfolio-Design?node-id=273-228&t=tMLNJ2twdHrwX8U3-1"
    },
    {
        title: "Product Design",
        icon: Box,
        color: "bg-orange-500/10 text-orange-500",
        placeholderColor: "bg-zinc-800",
        image: productDesign,
        link: "https://www.figma.com/design/wjRdJRieXulR6Rep0v9OWh/Portfolio-Design?node-id=264-182&t=tMLNJ2twdHrwX8U3-1"
    },
    {
        title: "T-Shirt Designs",
        icon: Shirt,
        color: "bg-green-500/10 text-green-500",
        placeholderColor: "bg-zinc-800",
        image: tshirtDesigns,
        link: "https://www.figma.com/design/wjRdJRieXulR6Rep0v9OWh/Portfolio-Design?node-id=264-183&t=tMLNJ2twdHrwX8U3-1"
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
                            className={`absolute inset-0 w-full h-full rounded-[2.5rem] overflow-hidden ${projects[currentIndex].theme.bg} shadow-2xl ${projects[currentIndex].link ? 'cursor-pointer' : ''}`}
                            onClick={() => projects[currentIndex].link && window.open(projects[currentIndex].link, '_blank')}
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
                                        {projects[currentIndex].logoImg ? (
                                            // Custom Logo Image (Instagrocery)
                                            // Custom Logo Image (Instagrocery)
                                            <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-[2rem] flex flex-col items-center justify-center gap-2 shrink-0 shadow-2xl p-3">
                                                <img
                                                    src={projects[currentIndex].logoImg}
                                                    alt="Logo"
                                                    className="w-20 h-20 md:w-24 md:h-24 object-contain"
                                                />
                                                <span className="font-bold text-[16px] md:text-[20px] bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent tracking-tight">
                                                    Instagrocery
                                                </span>
                                            </div>
                                        ) : projects[currentIndex].logoText === 'UC' ? (
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
                                            {/* View Prototype CTA */}
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.5 }}
                                                className="absolute bottom-6 left-0 right-0 z-20 flex justify-center pointer-events-auto"
                                            >
                                                <motion.button
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        if (projects[currentIndex].caseStudyUrl) {
                                                            window.open(projects[currentIndex].caseStudyUrl, '_blank');
                                                        }
                                                    }}
                                                    className="group flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-md rounded-full border border-white/10 shadow-lg hover:bg-black transition-all"
                                                >
                                                    <span className="text-[10px] md:text-xs font-semibold text-white tracking-wide">View Prototype</span>
                                                    <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                                                        <ArrowRight size={8} className="text-white" />
                                                    </div>
                                                </motion.button>
                                            </motion.div>
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

                                            {/* View Prototype CTA */}
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.5 }}
                                                className="absolute bottom-6 left-0 right-0 z-20 flex justify-center pointer-events-auto"
                                            >
                                                <motion.button
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        if (projects[currentIndex].caseStudyUrl) {
                                                            window.open(projects[currentIndex].caseStudyUrl, '_blank');
                                                        } else {
                                                            console.log("Navigate to Booking Case Study");
                                                        }
                                                    }}
                                                    className="group flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-md rounded-full border border-white/10 shadow-lg hover:bg-black transition-all"
                                                >
                                                    <span className="text-[10px] md:text-xs font-semibold text-white tracking-wide">View Prototype</span>
                                                    <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                                                        <ArrowRight size={8} className="text-white" />
                                                    </div>
                                                </motion.button>
                                            </motion.div>
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

                {/* Technical Expertise Grid */}
                <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                    {expertiseItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col items-center gap-4 group cursor-pointer"
                            onClick={() => item.link && window.open(item.link, '_blank')}
                        >
                            {/* Card Container */}
                            <div className={`w-full aspect-square rounded-[2rem] border border-white/10 ${item.placeholderColor} overflow-hidden relative flex items-center justify-center transition-all duration-500 group-hover:border-white/30 group-hover:shadow-2xl group-hover:shadow-purple-500/10`}>

                                {/* Content: Image if available, else Placeholder */}
                                {item.image ? (
                                    <>
                                        {/* Blurred Background Layer */}
                                        <div className="absolute inset-0 w-full h-full">
                                            <img
                                                src={item.image}
                                                alt=""
                                                className="w-full h-full object-cover blur-xl scale-125 opacity-100 contrast-125 transition-transform duration-700 group-hover:scale-150"
                                            />
                                        </div>

                                        {/* Inner Main Image - Smaller & Centered */}
                                        <div className="relative z-10 w-[85%] h-[85%] flex items-center justify-center">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover rounded-[2rem] shadow-xl transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                    </>
                                ) : (
                                    <div className="relative z-10 flex flex-col items-center justify-center gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
                                        <item.icon size={48} className="text-white/20" />
                                        <span className="text-xs text-white/20 font-medium tracking-widest uppercase">Placeholder</span>
                                    </div>
                                )}

                                {/* Hover Overlay Effect */}
                                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            {/* Title */}
                            <h3 className="text-lg md:text-xl font-medium text-gray-200 group-hover:text-white transition-colors">
                                {item.title}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section >
    );
};

export default Projects;
