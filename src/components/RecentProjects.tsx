import React from 'react';
import { recentProjects } from '../data/flooringData';
import { MapPin, Layers, Clock, ArrowRight } from 'lucide-react';

interface RecentProjectsProps {
  onOpenSurveyWithProject: (projectName: string) => void;
}

export const RecentProjects: React.FC<RecentProjectsProps> = ({ onOpenSurveyWithProject }) => {
  return (
    <section id="projects" className="py-16 lg:py-24 bg-[#eee8df] border-b border-[#e1ddd7]">
      <div className="max-w-site mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#e1ddd7]">
          <div>
            <div className="eyebrow mb-2">RECENT EAST MIDLANDS WORK</div>
            <h2 className="h2-editorial text-[#302722]">Real homes, real timelines</h2>
          </div>
          <p className="mt-3 md:mt-0 text-[15px] sm:text-[16px] text-[#766f69] font-light max-w-md">
            Every project shows the exact product, area in square metres, and honest days on site
            including prep time.
          </p>
        </div>

        {/* 3 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentProjects.map((project) => (
            <article
              key={project.id}
              className="bg-[#f8f4ee] rounded-[5px] overflow-hidden border border-[#e1ddd7] flex flex-col group transition-all duration-300 hover:shadow-lg"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/11] overflow-hidden bg-[#302722]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#302722]/70 via-transparent to-transparent" />

                {/* Location Badge */}
                <div className="absolute top-3 left-3 bg-[#f8f4ee]/90 backdrop-blur-md px-2.5 py-1 rounded-[3px] text-[11px] font-medium text-[#302722] flex items-center shadow-sm border border-[#e1ddd7]">
                  <MapPin className="w-3 h-3 text-[#6f4f37] mr-1" />
                  <span>{project.location}</span>
                </div>

                {/* Tag */}
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <span className="text-[11px] font-sans text-[#faf7f2]/90 bg-[#302722]/80 backdrop-blur-sm px-2 py-0.5 rounded border border-white/10">
                    {project.tag}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-[19px] font-serif text-[#302722] leading-snug mb-2 group-hover:text-[#6f4f37] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[14px] text-[#4e433b] font-light leading-[1.68]">
                    {project.description}
                  </p>
                </div>

                {/* Project Specs Table */}
                <div className="pt-4 border-t border-[#e1ddd7] space-y-2 text-[13px]">
                  <div className="flex items-center justify-between text-[#4e433b]">
                    <span className="text-[#766f69] flex items-center">
                      <Layers className="w-3.5 h-3.5 mr-1.5 text-[#6f4f37]" />
                      Product:
                    </span>
                    <span className="font-medium text-[#302722] text-right">{project.product}</span>
                  </div>

                  <div className="flex items-center justify-between text-[#4e433b]">
                    <span className="text-[#766f69]">Area:</span>
                    <span className="font-serif font-medium text-[15px] text-[#302722] tabular-nums">
                      {project.area}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-[#4e433b]">
                    <span className="text-[#766f69] flex items-center">
                      <Clock className="w-3.5 h-3.5 mr-1.5 text-[#6f4f37]" />
                      Timeline:
                    </span>
                    <span className="font-medium text-[#678367] text-right">
                      {project.daysOnSite}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => onOpenSurveyWithProject(project.title)}
                  className="w-full mt-2 py-2 text-[13px] font-medium text-[#6f4f37] hover:text-white bg-[#eee8df] hover:bg-[#6f4f37] border border-[#e1ddd7] hover:border-[#6f4f37] rounded-[3px] transition-colors flex items-center justify-center space-x-1"
                >
                  <span>Book Survey for Similar Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
