export default function LocationMap() {
    return (
        <div className="w-full h-[400px] bg-gray-200 rounded-sm overflow-hidden shadow-inner border border-industrial-steel/20 relative group">
            <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src="https://maps.google.com/maps?q=10.0261027,76.2528949&z=15&output=embed"
                className="grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                title="Alan Engineering Works Location"
            >
            </iframe>
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-sm shadow text-xs font-semibold text-industrial-slate">
                Mulavukad, Ernakulam
            </div>
        </div>
    );
}
