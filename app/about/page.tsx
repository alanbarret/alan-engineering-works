import { Metadata } from 'next';
import Image from 'next/image';
import Gallery from '@/components/Gallery';

export const metadata: Metadata = {
    title: 'About Us | Alan Engineering Works',
    description: 'Learn about Alan Engineering Works, our history, machinery, and commitment to precision engineering in Ernakulam.',
};

export default function AboutPage() {
    return (
        <div className="bg-white dark:bg-slate-900 min-h-screen">
            <div className="bg-industrial-slate text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">About Alan Engineering Works</h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Providing top-tier metalwork solutions with a legacy of trust and quality.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">

                {/* Story Section */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-industrial-slate dark:text-white mb-6">Our Story</h2>
                        <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            <p>
                                Established in Mulavukad, Ernakulam, Alan Engineering Works has grown from a modest workshop to a comprehensive industrial engineering facility. Our journey is defined by a relentless pursuit of accuracy and customer satisfaction.
                            </p>
                            <p>
                                Over the years, we have expanded our capabilities to include diverse services ranging from basic lathe work to complex custom fabrications, serving clients across various sectors including construction, automotive, and marine industries.
                            </p>
                        </div>
                    </div>
                    <div className="w-full">
                        <Gallery />
                    </div>
                </section>

                {/* Machinery */}
                <section>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-industrial-slate dark:text-white mb-4">Our Machinery & Tools</h2>
                        <p className="text-gray-600 dark:text-gray-400">Equipped with robust tools to handle any challenge.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {['Heavy Duty Lathes', 'Radial Drilling Machines', 'MIG/TIG Welding Units', 'Plasma Cutters', 'Surface Grinders', 'Hydraulic Presses', 'Bending Machines', 'Precision Measuring Tools'].map((item) => (
                            <div key={item} className="bg-slate-50 dark:bg-slate-800 p-6 rounded-sm text-center border border-slate-200 dark:border-slate-700 font-semibold text-industrial-slate dark:text-white hover:border-industrial-orange transition-colors">
                                {item}
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
}
