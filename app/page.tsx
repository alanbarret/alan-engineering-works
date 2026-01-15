import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import LocationMap from '@/components/LocationMap';
import { services } from '@/data/services';

export default function Home() {
  const featuredServices = services.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />

      {/* Services Overview */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-industrial-slate dark:text-white mb-4">
              Our Expertise
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Delivering high-precision engineering solutions with state-of-the-art machinery and experienced craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center text-industrial-orange font-bold hover:text-orange-700 transition-colors"
            >
              View All Services <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-industrial-slate text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 p-20 opacity-5">
          <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FFFFFF" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-4.9C93.5,9.4,82.2,23.1,70.8,34.3C59.4,45.5,47.9,54.2,35.6,60.7C23.3,67.2,10.2,71.5,-2.1,75.1C-14.4,78.7,-25.9,81.6,-36.5,77C-47.1,72.4,-56.8,60.3,-65.4,47.6C-74,34.9,-81.5,21.6,-83.4,7.4C-85.3,-6.8,-81.6,-21.9,-73.4,-34.4C-65.2,-46.9,-52.5,-56.8,-39.3,-64.5C-26.1,-72.2,-12.4,-77.7,1.8,-80.8C16,-83.9,30.5,-63.6,44.7,-76.4Z" transform="translate(100 100)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose <span className="text-industrial-orange">Alan Engineering?</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                With decades of experience in metal fabrication and machining, we combine traditional craftsmanship with modern technology to deliver results that exceed expectations.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  'Precision Engineering',
                  'Timely Delivery',
                  'Expert Craftsmanship',
                  'Custom Solutions',
                  'ISO Standards',
                  'Competitive Pricing'
                ].map((item) => (
                  <div key={item} className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-industrial-blue" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-md border border-white/10">
                <div className="grid grid-cols-2 gap-8 text-center">
                  <div className="p-4">
                    <div className="text-4xl font-bold text-industrial-blue mb-2">15+</div>
                    <div className="text-sm text-gray-400 uppercase tracking-widest">Years Experience</div>
                  </div>
                  <div className="p-4">
                    <div className="text-4xl font-bold text-industrial-blue mb-2">500+</div>
                    <div className="text-sm text-gray-400 uppercase tracking-widest">Projects Completed</div>
                  </div>
                  <div className="p-4">
                    <div className="text-4xl font-bold text-industrial-blue mb-2">100%</div>
                    <div className="text-sm text-gray-400 uppercase tracking-widest">Client Satisfaction</div>
                  </div>
                  <div className="p-4">
                    <div className="text-4xl font-bold text-industrial-blue mb-2">24/7</div>
                    <div className="text-sm text-gray-400 uppercase tracking-widest">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location / CTA */}
      <section className="py-20 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-industrial-slate dark:text-white mb-6">
                Visit Our Industrial Workshop
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8 mb-6">
                We are conveniently located in Mulavukad, Ernakulam. Drop by for a consultation on your next project.
              </p>
              <div className="space-y-4">
                <div className="bg-white dark:bg-slate-700 p-6 rounded-l border-l-4 border-industrial-orange shadow-sm">
                  <h4 className="font-bold text-lg mb-1">Working Hours</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Mon - Sat: 09:00 AM - 06:00 PM</p>
                </div>
                <div className="bg-white dark:bg-slate-700 p-6 rounded-l border-l-4 border-industrial-blue shadow-sm">
                  <h4 className="font-bold text-lg mb-1">Direct Contact</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">+91 70254 24749 | info@alanengineering.com</p>
                </div>
              </div>
              <div className="mt-8">
                <Link href="/contact" className="px-6 py-3 bg-industrial-slate text-white font-bold rounded-sm hover:bg-slate-700 transition-colors">
                  Get Directions & Quote
                </Link>
              </div>
            </div>

            <div className="h-full">
              <LocationMap />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
