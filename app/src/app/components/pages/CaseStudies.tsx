import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 'healthcare-app',
      title: 'Healthcare Appointment System',
      subtitle: 'Redesigning patient booking experience',
      description: 'Reduced booking time by 40% through improved UX flows and cleaner interface design.',
      image: 'https://images.unsplash.com/photo-1487523117656-d5d117ad47c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMGRlc2lnbiUyMHNjcmVlbnN8ZW58MXx8fHwxNzY2MTM1MTA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      platform: 'Web & Mobile',
      duration: '3 months',
      tools: 'Figma, React',
      role: 'UI/UX Designer',
    },
    {
      id: 'task-manager',
      title: 'Task Management Dashboard',
      subtitle: 'Team collaboration platform',
      description: 'Designed and built a clean, intuitive dashboard for tracking team productivity and project milestones.',
      image: 'https://images.unsplash.com/photo-1505209487757-5114235191e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwd29ya3NwYWNlJTIwZGVza3xlbnwxfHx8fDE3NjYwNDM3NDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      platform: 'Web',
      duration: '2 months',
      tools: 'Figma, React, Tailwind CSS',
      role: 'Product Designer & Frontend Developer',
    },
    {
      id: 'ecommerce-redesign',
      title: 'E-commerce Product Discovery',
      subtitle: 'Improving product search and filters',
      description: 'Enhanced product discovery flow with better filtering, search, and personalized recommendations.',
      image: 'https://images.unsplash.com/photo-1575491825092-7431433a2cbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsYXB0b3AlMjBjb2Rpbmd8ZW58MXx8fHwxNzY2MDY0NjAzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      platform: 'Mobile',
      duration: '2.5 months',
      tools: 'Figma, React Native',
      role: 'UI/UX Designer',
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
          <h1 className="text-5xl mb-6">Case Studies</h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            In-depth explorations of my design process, from research and ideation to final implementation.
            Each case study demonstrates UX thinking, UI craft, and problem-solving approach.
          </p>
        </motion.div>
      </section>

      {/* Case Studies Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={`/case-studies/${study.id}`} className="group">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                  {/* Image */}
                  <div className={`overflow-hidden rounded-lg bg-gray-100 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div className="aspect-[4/3]">
                      <ImageWithFallback
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                        {study.platform}
                      </span>
                      <span className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                        {study.duration}
                      </span>
                    </div>
                    
                    <h2 className="text-3xl mb-2 group-hover:text-gray-600 transition-colors">
                      {study.title}
                    </h2>
                    <p className="text-lg text-gray-500 mb-4">{study.subtitle}</p>
                    <p className="text-gray-600 mb-6 leading-relaxed">{study.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      <p className="text-sm">
                        <span className="text-gray-500">Role:</span>{' '}
                        <span className="text-gray-900">{study.role}</span>
                      </p>
                      <p className="text-sm">
                        <span className="text-gray-500">Tools:</span>{' '}
                        <span className="text-gray-900">{study.tools}</span>
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-2 text-sm text-gray-900 group-hover:gap-3 transition-all">
                      View Case Study
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
              
              {index < caseStudies.length - 1 && (
                <div className="mt-16 border-t border-gray-100" />
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
