// src/hooks/useInView.js
import { useEffect, useRef, useState } from "react";

export default function useInView({ root = null, rootMargin = "200px", threshold = 0.01 } = {}) {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        if (!ref.current || inView) return; // already viewed → don't observe again

        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    obs.disconnect(); // stop observing once triggered
                }
            },
            { root, rootMargin, threshold }
        );

        obs.observe(ref.current);
        return () => obs.disconnect();
    }, [root, rootMargin, threshold, inView]);

    return { ref, inView };
}
