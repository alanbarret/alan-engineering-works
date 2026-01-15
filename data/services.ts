import { Wrench, Drill, Scissors, Hammer, Flame, Settings } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Service {
    id: string;
    slug: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    applications: string[];
    icon: LucideIcon;
}

export const services: Service[] = [
    {
        id: 'lathe-machining',
        slug: 'lathe-machining',
        title: 'Lathe Machining',
        shortDescription: 'Precision turning and shaping of metal components.',
        fullDescription: 'Our advanced lathe machining services offer high-precision turning, facing, threading, and knurling. We handle various metals including steel, aluminum, and brass, ensuring exact tolerances for your components.',
        applications: ['Shafts and Axles', 'Bushings and Bearings', 'Custom Fittings', 'Propeller Components'],
        icon: Settings,
    },
    {
        id: 'drilling',
        slug: 'drilling',
        title: 'Drilling Services',
        shortDescription: 'Accurate drilling for industrial applications.',
        fullDescription: 'We provide heavy-duty drilling services for diverse industrial needs. From small gauge holes to large bore drilling, our specialized equipment ensures accuracy and consistency across all materials.',
        applications: ['Mounting Plates', 'Structural Beams', 'Custom Flanges', 'Perforated Sheets'],
        icon: Drill,
    },
    {
        id: 'cutting',
        slug: 'cutting',
        title: 'Metal Cutting',
        shortDescription: 'Precise cutting of sheets, bars, and pipes.',
        fullDescription: 'Our metal cutting capabilities include shearing, sawing, and plasma cutting. We deliver clean, burr-free cuts on various thicknesses of metal plates, pipes, and structural profiles.',
        applications: ['Sheet Metal Fabrication', 'Pipe Fitting', 'Structural frameworks', 'Custom templates'],
        icon: Scissors,
    },
    {
        id: 'grinding',
        slug: 'grinding',
        title: 'Surface Grinding',
        shortDescription: 'Finishing services for smooth surfaces and exact dimensions.',
        fullDescription: 'Achieve the perfect finish and dimensional accuracy with our grinding services. We specialize in surface grinding to remove imperfections and achieve tight tolerances on flat surfaces.',
        applications: ['Die and Mold making', 'Machine Bed ways', 'Precision spacers', 'Wear plates'],
        icon: Hammer, // Using Hammer as a placeholder for Grinding/Impact if specific icon unavailable
    },
    {
        id: 'welding',
        slug: 'welding',
        title: 'Professional Welding',
        shortDescription: 'MIG, TIG, and Arc welding for robust assembly.',
        fullDescription: 'Certified welding services covering MIG, TIG, and Arc welding. We specialize in structural welding, pressure vessel repair, and custom fabrication assembly with a focus on strength and durability.',
        applications: ['Structural Steel', 'Storage Tanks', 'Gates and Grills', 'Heavy Machinery Repair'],
        icon: Flame,
    },
    {
        id: 'fabrication',
        slug: 'custom-fabrication',
        title: 'Custom Fabrication',
        shortDescription: 'Tailored metal solutions for unique requirements.',
        fullDescription: 'From concept to creation, our custom metal fabrication team builds whatever you need. We combine cutting, bending, and welding to produce complex assemblies and bespoke metal structures.',
        applications: ['Custom Enclosures', 'Industrial Racks', 'Prototypes', 'Architectural Metalwork'],
        icon: Wrench,
    },
];
