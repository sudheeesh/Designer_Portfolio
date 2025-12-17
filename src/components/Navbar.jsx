import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mail, MessageCircle, ArrowRight } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showHireOptions, setShowHireOptions] = useState(false);

    const navLinks = [
        { name: 'Work', href: '#work' },
        { name: 'Experience', href: '#experience' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    // Close menu when resizing to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const menuVariants = {
        closed: {
            x: '100%',
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        },
        open: {
            x: 0,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40,
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        closed: { opacity: 0, x: 20 },
        open: { opacity: 1, x: 0 }
    };

    return (
        <nav className="relative w-full top-0 z-50">
            {/* Background Layer - Moved here to prevent "fixed" children containment issues */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-xl z-0 border-b border-white/5" />

            <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <motion.a
                        href="#"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-lg font-bold text-white tracking-widest hover:opacity-80 transition-opacity uppercase shrink-0"
                    >
                        GOWTHAM B
                    </motion.a>

                    {/* Centered Desktop Menu */}
                    <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="flex space-x-8">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * index }}
                                    className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Right Button */}
                    <div className="hidden md:block shrink-0 relative">
                        <motion.button
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 }}
                            onClick={() => setShowHireOptions(!showHireOptions)}
                            className="px-6 py-2 bg-white text-black text-sm font-medium rounded-full hover:bg-gray-200 transition-colors flex items-center gap-2"
                        >
                            Hire Me
                        </motion.button>

                        <AnimatePresence>
                            {showHireOptions && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    className="absolute right-0 top-full mt-2 w-56 bg-zinc-900 border border-white/10 rounded-2xl shadow-xl p-2 flex flex-col gap-2"
                                >
                                    <a
                                        href="mailto:gowthamboothal22@gmail.com"
                                        onClick={() => setShowHireOptions(false)}
                                        className="w-full px-4 py-3 flex items-center gap-3 text-sm text-gray-300 bg-black/40 border border-white/5 rounded-xl hover:bg-white/10 hover:text-white transition-all group"
                                    >
                                        <div className="p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
                                            <Mail size={16} />
                                        </div>
                                        <span className="font-medium">Email</span>
                                    </a>
                                    <a
                                        href="https://wa.me/916379148128"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => setShowHireOptions(false)}
                                        className="w-full px-4 py-3 flex items-center gap-3 text-sm text-gray-300 bg-black/40 border border-white/5 rounded-xl hover:bg-white/10 hover:text-white transition-all group"
                                    >
                                        <div className="p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
                                            <MessageCircle size={16} />
                                        </div>
                                        <span className="font-medium">WhatsApp</span>
                                    </a>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-white p-2"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/80 z-[60] md:hidden backdrop-blur-sm"
                        />

                        {/* Slide-in Menu */}
                        <motion.div
                            variants={menuVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            className="fixed top-0 right-0 h-full w-[280px] bg-[#0a0a0a] border-l border-white/10 z-[70] md:hidden shadow-2xl flex flex-col"
                        >
                            <div className="flex justify-between items-center p-6 border-b border-white/5">
                                <span className="text-sm font-bold tracking-widest text-white/50 uppercase">Menu</span>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="flex flex-col gap-1 p-4 overflow-y-auto h-full">
                                {navLinks.map((link) => (
                                    <motion.a
                                        key={link.name}
                                        variants={itemVariants}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-lg font-medium text-gray-300 hover:text-white hover:pl-2 px-4 py-4 rounded-xl hover:bg-white/5 transition-all duration-300 flex items-center justify-between group"
                                    >
                                        {link.name}
                                        <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-purple-400" />
                                    </motion.a>
                                ))}

                                <motion.div variants={itemVariants} className="my-4 h-px bg-white/5" />

                                {/* Hire Me Section in Mobile */}
                                <motion.div variants={itemVariants} className="mt-2">
                                    <h3 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4 px-4">Contact</h3>
                                    <div className="flex flex-col gap-3">
                                        <a
                                            href="mailto:gowthamboothal22@gmail.com"
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all text-gray-300 hover:text-white group"
                                        >
                                            <div className="p-2 bg-black/40 rounded-lg group-hover:scale-110 transition-transform text-purple-400">
                                                <Mail size={18} />
                                            </div>
                                            <span className="font-medium">Email Me</span>
                                        </a>
                                        <a
                                            href="https://wa.me/916379148128"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all text-gray-300 hover:text-white group"
                                        >
                                            <div className="p-2 bg-black/40 rounded-lg group-hover:scale-110 transition-transform text-green-400">
                                                <MessageCircle size={18} />
                                            </div>
                                            <span className="font-medium">WhatsApp</span>
                                        </a>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
