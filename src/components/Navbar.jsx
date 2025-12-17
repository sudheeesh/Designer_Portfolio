import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mail, MessageCircle } from 'lucide-react';

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
    if (typeof window !== 'undefined') {
        window.onresize = () => window.innerWidth >= 768 && setIsOpen(false);
    }

    return (
        <nav className="relative w-full top-0 z-50 bg-black backdrop-blur-xl">
            <div className="max-w-7xl mx-auto px-6 sm:px-12 relative">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <motion.a
                        href="#"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-lg font-bold text-white tracking-widest hover:opacity-80 transition-opacity uppercase shrink-0 z-50"
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
                    <div className="hidden md:block shrink-0 z-50 relative">
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
                    <div className="md:hidden z-50">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-white"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {/* Mobile Menu Overlay & Slide-in */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/60 z-40 md:hidden backdrop-blur-sm"
                        />

                        {/* Slide-in Menu */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-[280px] bg-black/80 backdrop-blur-2xl border-l border-white/10 z-50 md:hidden shadow-2xl flex flex-col"
                        >
                            <div className="flex justify-end p-6">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="flex flex-col gap-2 px-6 pb-6 overflow-y-auto h-full">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-lg font-medium text-gray-300 hover:text-white py-4 border-b border-white/5 transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                ))}

                                {/* Hire Me Section in Mobile */}
                                <div className="mt-8">
                                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">Hire Me</h3>
                                    <div className="flex flex-col gap-3">
                                        <a
                                            href="mailto:gowthamboothal22@gmail.com"
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors text-gray-300 hover:text-white"
                                        >
                                            <div className="p-2 bg-white/5 rounded-lg">
                                                <Mail size={18} />
                                            </div>
                                            <span className="font-medium">Email</span>
                                        </a>
                                        <a
                                            href="https://wa.me/916379148128"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors text-gray-300 hover:text-white"
                                        >
                                            <div className="p-2 bg-white/5 rounded-lg">
                                                <MessageCircle size={18} />
                                            </div>
                                            <span className="font-medium">WhatsApp</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
