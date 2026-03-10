import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Code, FileText } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export default function HomePage() {
  const skills = [
    { category: 'UI/UX Design', items: ['UI Design', 'UX Flows', 'Prototyping', 'Responsive Design'] },
    { category: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'] },
    { category: 'Tools', items: ['Figma', 'Notion', 'GitHub'] },
  ];

  const featuredProjects = [
    {
      id: 'healthcare-app',
      title: 'Healthcare Appointment System',
      description: 'Redesigning the patient booking experience with better UX flows',
      image: 'https://images.unsplash.com/photo-1487523117656-d5d117ad47c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMGRlc2lnbiUyMHNjcmVlbnN8ZW58MXx8fHwxNzY2MTM1MTA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['UI Design', 'UX Research', 'Figma'],
    },
    {
      id: 'task-manager',
      title: 'Task Management Dashboard',
      description: 'Clean interface for team collaboration and productivity tracking',
      image: 'https://images.unsplash.com/photo-1505209487757-5114235191e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwd29ya3NwYWNlJTIwZGVza3xlbnwxfHx8fDE3NjYwNDM3NDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['UI Design', 'React', 'Tailwind'],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl mb-6">
              Product-oriented UI/UX Designer with Frontend Skills
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              I design and build user-centric digital products using UX thinking, clean UI, and modern frontend technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                View Case Studies
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <FileText className="w-4 h-4" />
                Download Resume
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-gray-100">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl mb-2">Featured Work</h2>
              <p className="text-gray-600">Recent projects showcasing design & development</p>
            </div>
            <Link
              to="/case-studies"
              className="hidden md:inline-flex items-center gap-2 text-sm text-gray-900 hover:gap-3 transition-all"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/case-studies/${project.id}`} className="group block">
                  <div className="overflow-hidden rounded-lg mb-4 bg-gray-100 aspect-[4/3]">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl mb-2 group-hover:text-gray-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">{project.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Skills Snapshot */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-gray-100">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl mb-12">Skills & Tools</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 border border-gray-200 rounded-lg"
              >
                <h3 className="text-lg mb-4 font-medium">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((item) => (
                    <li key={item} className="text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gray-900 text-white rounded-2xl p-12 md:p-16 text-center"
        >
          <Code className="w-12 h-12 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl md:text-4xl mb-4">
            Think → Design → Build
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's create something meaningful together. I'm open to UI/UX design internships and collaborative projects.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get In Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
