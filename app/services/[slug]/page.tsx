import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { services } from '@/data/services';
import { Metadata } from 'next';

interface ServicePageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        return {
            title: 'Service Not Found',
        };
    }

    return {
        title: `${service.title} | Alan Engineering Works`,
        description: service.shortDescription,
    };
}

export default async function ServiceDetailsPage({ params }: ServicePageProps) {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    const Icon = service.icon;

    return (
        <div className="bg-white dark:bg-slate-900 min-h-screen">
            {/* Header */}
            <div className="bg-industrial-slate text-white py-16 md:py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-10">
                    <Icon className="h-64 w-64 text-white" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex items-center space-x-4 mb-4 text-industrial-blue uppercase tracking-widest font-semibold text-sm">
                        <Link href="/services" className="hover:text-white transition-colors">Services</Link>
                        <span>/</span>
                        <span className="text-white">{service.title}</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">{service.title}</h1>
                    <p className="text-xl text-gray-300 max-w-3xl">{service.shortDescription}</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold text-industrial-slate dark:text-white mb-4">Description</h2>
                            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                                {service.fullDescription}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-industrial-slate dark:text-white mb-6">Common Applications</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {service.applications.map((app) => (
                                    <div key={app} className="flex items-start space-x-3 bg-slate-50 dark:bg-slate-800 p-4 rounded-sm border border-slate-200 dark:border-slate-700">
                                        <CheckCircle className="h-5 w-5 text-industrial-blue mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-800 dark:text-gray-200 font-medium">{app}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar CTA */}
                    <div className="lg:col-span-1">
                        <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-sm border border-slate-200 dark:border-slate-700 sticky top-24">
                            <h3 className="text-xl font-bold text-industrial-slate dark:text-white mb-4">Need this Service?</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-6">
                                Contact us today for a precise quote on your {service.title} project.
                            </p>
                            <Link
                                href={`/contact?service=${service.slug}`}
                                className="block w-full text-center bg-industrial-orange hover:bg-orange-600 text-white font-bold py-4 rounded-sm transition-colors shadow-md"
                            >
                                Request Quote <ArrowRight className="inline-block ml-2 h-4 w-4" />
                            </Link>
                            <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700 text-sm text-gray-500 text-center">
                                Call us directly: <br />
                                <span className="font-bold text-industrial-slate dark:text-white text-lg">+91 70254 24749</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
