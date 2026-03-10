import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export default function CaseStudyDetail() {
  const { id } = useParams();

  // In a real app, this would fetch data based on the ID
  const caseStudy = {
    id: 'healthcare-app',
    title: 'Healthcare Appointment System',
    subtitle: 'Redesigning patient booking experience for better accessibility',
    image: 'https://images.unsplash.com/photo-1487523117656-d5d117ad47c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMGRlc2lnbiUyMHNjcmVlbnN8ZW58MXx8fHwxNzY2MTM1MTA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    overview: {
      platform: 'Web & Mobile App',
      duration: '3 months (Jan - Mar 2024)',
      tools: 'Figma, Notion, React, Tailwind CSS',
      role: 'UI/UX Designer & Frontend Developer',
      team: 'Solo project for coursework',
    },
    problem: 'The existing healthcare appointment booking system had a confusing multi-step process, causing 60% of users to abandon before completing their booking. Elderly patients especially struggled with navigation and form complexity.',
    users: 'Primary: Adults 45-65 seeking routine medical appointments. Secondary: Elderly patients (65+) needing assisted booking.',
    painPoints: [
      'Too many form fields in a single step',
      'No clear progress indication',
      'Unclear error messages',
      'Mobile experience was not optimized',
    ],
    research: 'Conducted 8 user interviews with patients and 3 interviews with clinic staff. Identified that users want to see available slots immediately and complete booking in under 2 minutes.',
    solution: 'Redesigned the booking flow into 3 clear steps: Select Doctor → Choose Time → Confirm Details. Added visual progress bar, inline validation, and mobile-first responsive design.',
    implementation: 'Built the frontend using React and Tailwind CSS. Implemented accessibility features including ARIA labels, keyboard navigation, and high-contrast mode.',
    outcome: 'Reduced average booking time from 4:30 to 2:45 minutes (40% improvement). Completion rate increased from 40% to 78% based on user testing with 15 participants.',
    learnings: [
      'Start with user research — assumptions about elderly users needing "simpler" design were wrong; they needed clearer feedback, not fewer features',
      'Mobile-first approach helped desktop design stay clean',
      'Accessibility isn\'t optional — it improves experience for everyone',
    ],
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link to="/case-studies" className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-8">
            ← Back to Case Studies
          </Link>
          
          <h1 className="text-5xl mb-4">{caseStudy.title}</h1>
          <p className="text-xl text-gray-600 mb-8">{caseStudy.subtitle}</p>

          <div className="flex flex-wrap gap-6 mb-12">
            <div>
              <p className="text-sm text-gray-500 mb-1">Platform</p>
              <p className="text-sm font-medium">{caseStudy.overview.platform}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Duration</p>
              <p className="text-sm font-medium">{caseStudy.overview.duration}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Role</p>
              <p className="text-sm font-medium">{caseStudy.overview.role}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Tools</p>
              <p className="text-sm font-medium">{caseStudy.overview.tools}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="rounded-lg overflow-hidden bg-gray-100"
        >
          <div className="aspect-video">
            <ImageWithFallback
              src={caseStudy.image}
              alt={caseStudy.title}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <div className="space-y-16">
          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl mb-4">The Problem</h2>
            <p className="text-lg text-gray-600 leading-relaxed">{caseStudy.problem}</p>
          </motion.div>

          {/* Users & Pain Points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl mb-4">Target Users</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">{caseStudy.users}</p>
            
            <h3 className="text-xl mb-3">Key Pain Points</h3>
            <ul className="space-y-2">
              {caseStudy.painPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-600">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Research */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl mb-4">Research & Insights</h2>
            <p className="text-lg text-gray-600 leading-relaxed">{caseStudy.research}</p>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-gray-50 rounded-lg"
          >
            <h2 className="text-3xl mb-4">The Solution</h2>
            <p className="text-lg text-gray-600 leading-relaxed">{caseStudy.solution}</p>
          </motion.div>

          {/* Implementation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl mb-4">Frontend Implementation</h2>
            <p className="text-lg text-gray-600 leading-relaxed">{caseStudy.implementation}</p>
          </motion.div>

          {/* Outcome */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl mb-4">Outcome & Impact</h2>
            <p className="text-lg text-gray-600 leading-relaxed">{caseStudy.outcome}</p>
          </motion.div>

          {/* Learnings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl mb-4">Key Learnings</h2>
            <ul className="space-y-4">
              {caseStudy.learnings.map((learning, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-600 leading-relaxed">
                  <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2.5 flex-shrink-0" />
                  {learning}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Next Case Study */}
        <div className="mt-24 pt-12 border-t border-gray-200">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-sm text-gray-900 hover:gap-3 transition-all"
          >
            View More Case Studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
