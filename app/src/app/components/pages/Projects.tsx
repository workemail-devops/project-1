import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export default function Projects() {
  const projects = [
    {
      title: 'Portfolio Website Builder',
      description: 'A drag-and-drop tool for designers to create portfolio websites without coding. Built with React and includes customizable templates.',
      image: 'https://images.unsplash.com/photo-1487523117656-d5d117ad47c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMGRlc2lnbiUyMHNjcmVlbnN8ZW58MXx8fHwxNzY2MTM1MTA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tech: ['React', 'Tailwind CSS', 'Figma API'],
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Task Manager App',
      description: 'Minimalist task management application with drag-and-drop functionality and local storage persistence.',
      image: 'https://images.unsplash.com/photo-1505209487757-5114235191e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwd29ya3NwYWNlJTIwZGVza3xlbnwxfHx8fDE3NjYwNDM3NDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tech: ['React', 'TypeScript', 'CSS Modules'],
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Weather Dashboard',
      description: 'Clean weather app with location-based forecasts and beautiful data visualization using Chart.js.',
      image: 'https://images.unsplash.com/photo-1575491825092-7431433a2cbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsYXB0b3AlMjBjb2Rpbmd8ZW58MXx8fHwxNzY2MDY0NjAzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tech: ['JavaScript', 'HTML', 'CSS', 'Weather API'],
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Recipe Finder',
      description: 'Search and save your favorite recipes with filtering options and nutritional information display.',
      image: 'https://images.unsplash.com/photo-1505209487757-5114235191e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwd29ya3NwYWNlJTIwZGVza3xlbnwxfHx8fDE3NjYwNDM3NDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tech: ['React', 'Tailwind CSS', 'Recipe API'],
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Responsive Landing Page',
      description: 'Modern, fully responsive landing page template for startups with smooth animations and mobile-first design.',
      image: 'https://images.unsplash.com/photo-1487523117656-d5d117ad47c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMGRlc2lnbiUyMHNjcmVlbnN8ZW58MXx8fHwxNzY2MTM1MTA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tech: ['HTML', 'CSS', 'JavaScript', 'Motion'],
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Color Palette Generator',
      description: 'Tool for generating harmonious color palettes with accessibility checking and export options.',
      image: 'https://images.unsplash.com/photo-1575491825092-7431433a2cbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsYXB0b3AlMjBjb2Rpbmd8ZW58MXx8fHwxNzY2MDY0NjAzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tech: ['React', 'CSS', 'Color Theory'],
      demoUrl: '#',
      githubUrl: '#',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl mb-6">Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            A collection of design and development projects showcasing my technical skills and creative problem-solving.
            Each project includes live demos and source code on GitHub.
          </p>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group"
            >
              <div className="border border-gray-200 rounded-lg overflow-hidden hover:border-gray-900 transition-colors">
                {/* Image */}
                <div className="bg-gray-100 aspect-video overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                    <a
                      href={project.demoUrl}
                      className="inline-flex items-center gap-1.5 text-sm text-gray-900 hover:text-gray-600 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="inline-flex items-center gap-1.5 text-sm text-gray-900 hover:text-gray-600 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
