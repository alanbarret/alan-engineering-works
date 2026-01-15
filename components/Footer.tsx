import Link from 'next/link';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-industrial-slate text-gray-300 border-t border-industrial-steel/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Company Info */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-white uppercase tracking-wider">Alan Engineering Works</h3>
                        <p className="text-sm leading-relaxed text-gray-400">
                            Precision metalwork and fabrication specialists in Ernakulam. Delivering high-quality industrial solutions since inception.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/" className="hover:text-industrial-orange transition-colors">Home</Link></li>
                            <li><Link href="/services" className="hover:text-industrial-orange transition-colors">Services</Link></li>
                            <li><Link href="/about" className="hover:text-industrial-orange transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-industrial-orange transition-colors">Contact Quote</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">Our Services</h3>
                        <ul className="space-y-2 text-sm">
                            <li>Lathe Machining</li>
                            <li>Drilling & Cutting</li>
                            <li>Surface Grinding</li>
                            <li>Professional Welding</li>
                            <li>Custom Fabrication</li>
                            <li>Machine Repairs</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-3">
                                <MapPin className="h-5 w-5 text-industrial-orange mt-0.5 flex-shrink-0" />
                                <span className="text-sm">
                                    27G4+C5Q, Mulavukad,<br />
                                    Ernakulam, Kerala 682504,<br />
                                    India
                                </span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="h-5 w-5 text-industrial-orange flex-shrink-0" />
                                <span className="text-sm">+91 70254 24749</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="h-5 w-5 text-industrial-orange flex-shrink-0" />
                                <span className="text-sm">info@alanengineering.com</span> {/* Placeholder */}
                            </li>
                            <li className="flex items-start space-x-3">
                                <Clock className="h-5 w-5 text-industrial-orange mt-0.5 flex-shrink-0" />
                                <span className="text-sm">
                                    Mon - Sat: 9:00 AM - 6:00 PM<br />
                                    Sunday: Closed
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-industrial-steel/20 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Alan Engineering Works. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
