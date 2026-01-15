import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Service } from '@/data/services';

interface ServiceCardProps {
    service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
    const Icon = service.icon;

    return (
        <div className="group relative bg-white dark:bg-slate-800 p-6 rounded-sm border border-slate-200 dark:border-slate-700 hover:border-industrial-orange/50 transition-all duration-300 hover:shadow-xl hover:shadow-industrial-slate/10 overflow-hidden">
            {/* Hover Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-industrial-steel/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 group-hover:bg-industrial-orange/5 transition-all duration-500 ease-in-out" />

            <div className="relative z-10">
                <div className="inline-flex items-center justify-center p-3 rounded-sm bg-slate-100 dark:bg-slate-900 group-hover:bg-industrial-orange group-hover:text-white transition-colors duration-300 mb-6 text-industrial-slate dark:text-gray-200">
                    <Icon className="h-8 w-8" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-industrial-orange transition-colors">
                    {service.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-2 min-h-[3rem]">
                    {service.shortDescription}
                </p>

                <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center text-sm font-semibold text-industrial-blue hover:text-industrial-orange transition-colors"
                >
                    Learn detailed specs <ArrowUpRight className="ml-1 h-4 w-4" />
                </Link>
            </div>
        </div>
    );
}
