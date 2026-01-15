"use client";

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { services } from '@/data/services';

export default function QuoteForm() {
    const searchParams = useSearchParams();
    const preselectedService = searchParams.get('service') || '';

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        service: preselectedService,
        message: '',
    });

    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;

            if (!webhookUrl) {
                console.warn('N8N Webhook URL not configured. Simulating success.');
                // Simulate API call delay
                await new Promise(resolve => setTimeout(resolve, 1000));
                setStatus('success');
                return;
            }

            const response = await fetch(webhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', phone: '', email: '', service: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error("Submission error:", error);
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-sm p-8 text-center">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-800 dark:text-green-300 mb-2">Quote Requested!</h3>
                <p className="text-green-700 dark:text-green-400">
                    Thank you for reaching out. Our team will review your requirements and get back to you shortly.
                </p>
                <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-sm font-semibold text-green-600 dark:text-green-400 hover:text-green-800 underline"
                >
                    Send another request
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-slate-800 p-8 rounded-sm shadow-sm border border-slate-200 dark:border-slate-700">
            <h3 className="text-2xl font-bold text-industrial-slate dark:text-white mb-6">Request a Quote</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-sm border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-industrial-orange focus:border-transparent outline-none transition-all"
                        placeholder="John Doe"
                    />
                </div>
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-sm border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-industrial-orange focus:border-transparent outline-none transition-all"
                        placeholder="+91 70254 24749"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-sm border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-industrial-orange focus:border-transparent outline-none transition-all"
                        placeholder="john@example.com"
                    />
                </div>
                <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Service Required</label>
                    <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-sm border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-industrial-orange focus:border-transparent outline-none transition-all"
                    >
                        <option value="">Select a Service...</option>
                        {services.map(s => (
                            <option key={s.id} value={s.slug}>{s.title}</option>
                        ))}
                        <option value="other">Other / General Inquiry</option>
                    </select>
                </div>
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message / Requirements</label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-sm border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-industrial-orange focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Please describe your requirements..."
                />
            </div>

            {status === 'error' && (
                <div className="flex items-center text-red-600 text-sm">
                    <AlertCircle className="h-4 w-4 mr-2" />
                    Something went wrong. Please try again.
                </div>
            )}

            <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-industrial-orange hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-sm transition-colors flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {status === 'submitting' ? (
                    <span className="flex items-center"><div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div> Sending...</span>
                ) : (
                    <span className="flex items-center">Submit Request <Send className="ml-2 h-4 w-4" /></span>
                )}
            </button>
        </form>
    );
}
