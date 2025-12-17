import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Send, Instagram } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-12 px-4 md:px-8 bg-black text-white relative overflow-hidden">
            {/* Background Decoration */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.3, 0.2]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] pointer-events-none"
            />
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.1, 0.2, 0.1]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
                className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px] pointer-events-none"
            />

            <div className="max-w-5xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
                        Let’s Create Something <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Amazing Together</span>
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                        Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your Vision to life through thoughtful design and seamless user experiences.
                    </p>
                </motion.div>


                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                    {/* Left: Contact Info Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-1 space-y-6"
                    >
                        {/* Info Card */}
                        <div className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 p-6 rounded-3xl h-full flex flex-col justify-between">
                            <div>
                                <h3 className="text-lg font-bold mb-6">Get in Touch</h3>
                                <div className="space-y-5">
                                    <a href="mailto:gowthamboothal22@gmail.com" className="flex items-start gap-3 group">
                                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-purple-500/20 group-hover:text-purple-400 transition-colors shrink-0">
                                            <Mail size={16} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-500 mb-0.5">Personal Mail</p>
                                            <p className="text-xs font-medium group-hover:text-purple-300 transition-colors break-all">gowthamboothal22@gmail.com</p>
                                        </div>
                                    </a>

                                    <a href="mailto:gocrafts.studio@gmail.com" className="flex items-start gap-3 group">
                                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-pink-500/20 group-hover:text-pink-400 transition-colors shrink-0">
                                            <Mail size={16} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-500 mb-0.5">Studio Mail</p>
                                            <p className="text-xs font-medium group-hover:text-pink-300 transition-colors break-all">gocrafts.studio@gmail.com</p>
                                        </div>
                                    </a>

                                    <a href="tel:+916379148128" className="flex items-start gap-3 group">
                                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-green-500/20 group-hover:text-green-400 transition-colors shrink-0">
                                            <Phone size={16} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-500 mb-0.5">Phone</p>
                                            <p className="text-xs font-medium group-hover:text-green-300 transition-colors">+91 6379 148 128</p>
                                        </div>
                                    </a>

                                    <div className="flex items-start gap-3 group">
                                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-colors shrink-0">
                                            <MapPin size={16} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-500 mb-0.5">Office</p>
                                            <p className="text-xs font-medium group-hover:text-blue-300 transition-colors">Coimbatore, Tamil Nadu, India</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Socials */}
                            <div className="mt-8 pt-6 border-t border-white/5">
                                <p className="text-[10px] text-gray-500 mb-3 uppercase tracking-wider">Socials</p>
                                <div className="flex gap-2">
                                    <a href="https://www.linkedin.com/in/gowtham-boothal-84b672266/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                                        <Linkedin size={14} />
                                    </a>
                                    <a href="https://www.behance.net/gocraftsstudios" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all font-bold text-[10px]">
                                        Be
                                    </a>
                                    <a href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                                        <Instagram size={14} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="lg:col-span-2"
                    >
                        <form
                            action="https://formsubmit.co/gowthamboothal22@gmail.com"
                            method="POST"
                            className="bg-white rounded-3xl p-6 md:p-8 text-black shadow-2xl"
                        >
                            {/* FormSubmit Configuration */}
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_template" value="table" />
                            <input type="hidden" name="_subject" value="New Portfolio Contact Message!" />

                            <h3 className="text-xl font-bold mb-6">Send a Message</h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-semibold text-gray-600 block">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        placeholder="Name"
                                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black/10 transition-colors"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-semibold text-gray-600 block">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="Email"
                                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black/10 transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5 mb-4">
                                <label className="text-xs font-semibold text-gray-600 block">Subject</label>
                                <div className="relative">
                                    <select
                                        name="subject"
                                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black/10 transition-colors appearance-none cursor-pointer"
                                    >
                                        <option>Project Inquiry</option>
                                        <option>Freelance Work</option>
                                        <option>Collaboration</option>
                                        <option>Other</option>
                                    </select>
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-1.5 mb-6">
                                <label className="text-xs font-semibold text-gray-600 block">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows={3}
                                    placeholder="Tell me about your project..."
                                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black/10 transition-colors resize-none"
                                />
                            </div>

                            <div className="flex justify-end">
                                <button type="submit" className="group relative inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg font-bold text-xs tracking-wide overflow-hidden hover:bg-gray-900 transition-colors">
                                    <span>SEND MESSAGE</span>
                                    <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Contact;
