import { motion } from 'motion/react';
import { FileText, Download } from 'lucide-react';

export default function Resume() {
  const skills = {
    'Design': ['UI Design', 'UX Research', 'Prototyping', 'Wireframing', 'Responsive Design', 'Design Systems'],
    'Frontend': ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'TypeScript'],
    'Tools': ['Figma', 'Adobe XD', 'Notion', 'Git', 'GitHub', 'VS Code'],
  };

  const projects = [
    {
      title: 'Healthcare Appointment System',
      duration: 'Jan - Mar 2024',
      description: 'Redesigned patient booking flow reducing completion time by 40%. Improved accessibility and mobile responsiveness.',
      tech: ['Figma', 'React', 'Tailwind CSS'],
    },
    {
      title: 'Task Management Dashboard',
      duration: 'Sep - Nov 2023',
      description: 'Designed and built clean dashboard for team collaboration with drag-and-drop features and real-time updates.',
      tech: ['Figma', 'React', 'TypeScript'],
    },
    {
      title: 'E-commerce Product Discovery',
      duration: 'May - Jul 2023',
      description: 'Enhanced product search and filtering system. Improved user engagement through better information architecture.',
      tech: ['Figma', 'User Research'],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-start justify-between mb-8">
            <div>
              <h1 className="text-5xl mb-2">Selva</h1>
              <p className="text-xl text-gray-600">R. Ponselvan</p>
            </div>
            <button className="inline-flex items-center gap-2 px-4 py-2 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-50 transition-colors">
              <Download className="w-4 h-4" />
              Download PDF
            </button>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h2 className="text-2xl mb-4">Product-oriented UI/UX Designer | Frontend Skills</h2>
            <p className="text-gray-600 leading-relaxed">
              4th-year B.Tech student with a passion for creating user-centric digital products. 
              Combining UX thinking, clean UI design, and modern frontend development to build 
              meaningful solutions. Seeking UI/UX design internships and junior designer roles.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-8 text-sm">
            <div>
              <p className="text-gray-500">Email</p>
              <p className="text-gray-900">selva@example.com</p>
            </div>
            <div>
              <p className="text-gray-500">LinkedIn</p>
              <p className="text-gray-900">linkedin.com/in/selva</p>
            </div>
            <div>
              <p className="text-gray-500">GitHub</p>
              <p className="text-gray-900">github.com/selva</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Skills */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-200">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl mb-6 flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Skills
          </h2>

          <div className="space-y-4">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-sm font-medium text-gray-500 mb-2">{category}</h3>
                <p className="text-gray-900">{items.join(' • ')}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Academic Projects */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-200">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl mb-8">Academic & Personal Projects</h2>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border-l-2 border-gray-200 pl-6"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-medium">{project.title}</h3>
                  <span className="text-sm text-gray-500">{project.duration}</span>
                </div>
                <p className="text-gray-600 mb-3 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Education */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-200">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl mb-6">Education</h2>

          <div className="border-l-2 border-gray-200 pl-6">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-medium">Bachelor of Technology (B.Tech)</h3>
              <span className="text-sm text-gray-500">2021 - 2025</span>
            </div>
            <p className="text-gray-600">Siddharth Institute of Engineering and Technology</p>
            <p className="text-sm text-gray-500 mt-1">Currently in 4th Year</p>
          </div>
        </motion.div>
      </section>

      {/* Design Philosophy */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-200">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl mb-4">Design Philosophy</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="text-lg text-gray-900 mb-3 font-medium">Think → Design → Build</p>
            <p className="text-gray-600 leading-relaxed">
              I believe in starting with deep user research, designing intuitive solutions, and having the 
              technical skills to bring those designs to life. My goal is to become a product designer who 
              can seamlessly move from ideation to implementation.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Career Goals */}
      <section className="max-w-4xl mx-auto px-6 py-12 pb-24 border-t border-gray-200">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl mb-4">Career Goals</h2>
          <p className="text-gray-600 leading-relaxed">
            Seeking UI/UX design internships and junior designer roles where I can contribute my skills in 
            user research, interface design, and frontend development. I'm particularly interested in 
            product-focused teams where I can learn from experienced designers and help build real products 
            that solve meaningful problems.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
