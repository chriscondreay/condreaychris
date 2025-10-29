import React, { Suspense, lazy, useEffect, useState } from "react";
import useInView from "../../hooks/useInView";

const Portfolio = lazy(() => (import("../content/Portfolio")));

export default function Projects() {

    const { ref, inView } = useInView({ rootMargin: "0px 0px -10%", threshold: 0.15 });

    const [shouldRender, setShouldRender] = useState(false);
    const [shouldAnimate, setShouldAnimate] = useState(false);

    useEffect(() => {
        if (inView && !shouldRender) {
            setShouldRender(true);
            requestAnimationFrame(() => {
                requestAnimationFrame(() => setShouldAnimate(true));
            });
        }
    }, [inView, shouldRender]);

    useEffect(() => {
        if (inView) import("../content/Portfolio");
    }, [inView]);

    const projects = [
        {
            title: "Brewery Finder",
            description: "Find breweries using API calls",
            languages: "JavaScript | OpenBreweryDB",
            image: "images/project-cards/img-1.webp",
            repo: "https://github.com/chriscondreay/BreweryFinder",
            website: "https://chriscondreay.github.io/BreweryFinder",
        },
        {
            title: "Book Search Engine",
            description: "Find your favorite books",
            languages: "React | GraphQL",
            image: "images/project-cards/img-2.webp",
            repo: "https://github.com/chriscondreay/Book-Search-Engine",
            website: "https://chriscondreay.github.io/Book-Search-Engine",
        },
        {
            title: "Budget Tracker PWA",
            description: "Manage your spending online/offline",
            languages: "NoSQL | PWA | JS",
            image: "images/project-cards/img-3.webp",
            repo: "https://github.com/chriscondreay/Budget-Tracker",
            website: "https://budget-tracker-629af.web.app/",
        },
        {
            title: "Catworx BadgeMaker",
            description: "Create a badge using C#",
            languages: "C# | SkiaSharp",
            image: "images/project-cards/img-3.webp",
            repo: "https://github.com/chriscondreay/CatWorx.Badgemaker",
            website: null,
        },
    ];

    return (
        <div className="section" id="projects" ref={ref}>
            <div className="projects">
                <div className="container">
                    <div className="page-title">
                        <h2 className="title">Projects</h2>
                    </div>

                    {shouldRender ? (
                        <Suspense fallback={<div className="loading"></div>}>
                            <div className={`row project-items ${shouldAnimate ? "reveal" : ""}`}>
                                {projects.map((p) => (
                                    <div className="col-md-4 col-sm-6 project-card" key={p.title}>
                                        <Portfolio portfolio={p} />
                                    </div>
                                ))}
                            </div>
                        </Suspense>
                    ) : (
                        <div style={{ minHeight: 400 }} aria-hidden="true" />
                    )}
                </div>
            </div>
        </div>
    );
};