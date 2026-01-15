import { Metadata } from 'next';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/data/services';

export const metadata: Metadata = {
    title: 'Our Services | Alan Engineering Works',
    description: 'Explore our comprehensive range of industrial services including Lathe Machining, Drilling, Welding, and Custom Fabrication.',
};

export default function ServicesPage() {
    return (
        <div className="bg-slate-50 dark:bg-slate-900 min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-industrial-slate dark:text-white mb-6">
                        Our Engineering <span className="text-industrial-orange">Services</span>
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        We offer a versatile range of machining and fabrication services tailored to meet the rigorous demands of modern industry. From single prototypes to mass production, we have the capabilities to deliver.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>
            </div>
        </div>
    );
}
