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

    return (
        <nav className="static w-full top-0 z-50 bg-black backdrop-blur-xl">
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
                                    className="absolute right-0 top-full mt-2 w-48 bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden shadow-xl"
                                >
                                    <button
                                        onClick={() => {
                                            window.location.href = 'mailto:gowthamboothal22@gmail.com';
                                            setShowHireOptions(false);
                                        }}
                                        className="w-full px-4 py-3 flex items-center gap-3 text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors text-left"
                                    >
                                        <Mail size={16} />
                                        Email
                                    </button>
                                    <button
                                        onClick={() => {
                                            window.open('https://wa.me/916379148128', '_blank');
                                            setShowHireOptions(false);
                                        }}
                                        className="w-full px-4 py-3 flex items-center gap-3 text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors text-left"
                                    >
                                        <MessageCircle size={16} />
                                        WhatsApp
                                    </button>
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
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden bg-black/90 backdrop-blur-xl border-b border-white/10 overflow-hidden"
                    >
                        <div className="px-6 py-4 space-y-4 flex flex-col items-center">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg text-gray-300 hover:text-white w-full text-center py-2"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
