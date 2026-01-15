import { Suspense } from 'react';
import { Metadata } from 'next';
import QuoteForm from '@/components/QuoteForm';
import LocationMap from '@/components/LocationMap';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Contact Us | Alan Engineering Works',
    description: 'Get in touch for a free quote. Visit our workshop in Mulavukad, Ernakulam or contact us via phone/email.',
};

export default function ContactPage() {
    return (
        <div className="bg-slate-50 dark:bg-slate-900 min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-industrial-slate dark:text-white mb-12 text-center">
                    Contact Us
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Contact Content & Map */}
                    <div className="space-y-8">
                        <div className="bg-white dark:bg-slate-800 p-8 rounded-sm shadow-sm border border-slate-200 dark:border-slate-700">
                            <h2 className="text-2xl font-bold text-industrial-slate dark:text-white mb-6">Contact Information</h2>
                            <ul className="space-y-6">
                                <li className="flex items-start space-x-4">
                                    <div className="bg-industrial-blue/10 p-3 rounded-sm">
                                        <MapPin className="h-6 w-6 text-industrial-blue" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white">Visit Us</h4>
                                        <p className="text-gray-600 dark:text-gray-400 mt-1">
                                            Alan Engineering Works<br />
                                            27G4+C5Q, Mulavukad,<br />
                                            Ernakulam, Kerala 682504, India
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start space-x-4">
                                    <div className="bg-industrial-blue/10 p-3 rounded-sm">
                                        <Phone className="h-6 w-6 text-industrial-blue" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white">Call Us</h4>
                                        <p className="text-gray-600 dark:text-gray-400 mt-1">
                                            +91 70254 24749<br />
                                            <span className="text-sm text-gray-500">Mon-Sat 9am-6pm</span>
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start space-x-4">
                                    <div className="bg-industrial-blue/10 p-3 rounded-sm">
                                        <Mail className="h-6 w-6 text-industrial-blue" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white">Email Us</h4>
                                        <p className="text-gray-600 dark:text-gray-400 mt-1">
                                            info@alanengineering.com
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Map */}
                        <div>
                            <LocationMap />
                        </div>
                    </div>

                    {/* Quote Form */}
                    <div>
                        <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse rounded-sm"></div>}>
                            <QuoteForm />
                        </Suspense>
                    </div>
                </div>
            </div>
        </div>
    );
}
