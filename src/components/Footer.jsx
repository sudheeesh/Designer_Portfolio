
const Footer = () => {
    return (
        <footer className="bg-black text-white py-12 px-4 md:px-8 border-t border-white/5">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                {/* Brand & Bio */}
                <div>
                    <h3 className="text-xl font-bold mb-4 uppercase tracking-wider">Gowtham B</h3>
                    <p className="text-gray-400 text-sm leading-relaxed pr-4">
                        UI/UX & Product Designer certified from Zero Schools, with experience at Wipro. Passionate about creating intuitive, user-centered digital experiences using Figma, Adobe XD, and modern design tools.
                    </p>
                </div>

                {/* Services */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Services</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li>• UI/UX Design</li>
                        <li>• User Research & Testing</li>
                        <li>• Security-Conscious Design</li>
                        <li>• Government Portal Design</li>
                        <li>• Design Systems & Style Guides</li>
                        <li>• Prototyping & Wireframing</li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Let's Connect</h3>
                    <div className="space-y-2 text-gray-400 text-sm mb-6">
                        <p>gowthamboothal22@gmail.com</p>
                        <p>gocrafts.studio@gmail.com</p>
                        <p>+91 6379148128</p>
                        <p>Coimbatore, Tamil Nadu, India</p>
                        <p className="text-green-400">Available for remote work</p>
                    </div>
                    <a
                        href="https://wa.me/916379148128?text=Hi%20Gowtham,%20I%20want%20to%20start%20a%20project"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-bold text-sm hover:opacity-90 transition-opacity"
                    >
                        Start Project
                    </a>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-white/5 pt-8 text-center text-gray-600 text-xs">
                <p>© 2025 GOWTHAM B. All rights reserved. Designed with passion, built with care.</p>
            </div>
        </footer>
    );
};

export default Footer;
