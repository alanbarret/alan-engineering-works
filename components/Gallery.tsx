"use client";

import Image from 'next/image';

const images = [
    { src: '/workshop-lathe.png', alt: 'Heavy Duty Lathe Machine' },
    { src: '/workshop-welding.png', alt: 'Professional Welding' },
    { src: '/workshop-drilling.png', alt: 'Precision Drilling' },
];

export default function Gallery() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {images.map((img, index) => (
                <div key={index} className="relative aspect-video overflow-hidden rounded-sm group shadow-lg">
                    <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">{img.alt}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}
