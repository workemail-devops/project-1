import { motion } from 'motion/react';
import { Code, Palette, Layers } from 'lucide-react';

export default function About() {
  const tools = {
    'Design': ['Figma', 'Adobe XD', 'Sketch', 'Notion'],
    'Frontend': ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'TypeScript'],
    'Development Tools': ['Git', 'GitHub', 'VS Code', 'npm'],
  };

  const philosophy = [
    {
      icon: <Layers className="w-6 h-6" />,
      title: 'Think',
      description: 'Start with research and empathy. Understand user needs, pain points, and context before jumping to solutions.',
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'Design',
      description: 'Create user-centric solutions with clean UI and intuitive UX flows. Prototype, iterate, and validate with users.',
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Build',
      description: 'Bring designs to life with modern frontend technologies. Focus on accessibility, performance, and responsive design.',
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
          <h1 className="text-5xl mb-6">About Me</h1>
          <div className="max-w-3xl space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              Hi! I'm <strong className="text-gray-900">Selva (R. Ponselvan)</strong>, a product-oriented UI/UX designer with frontend development skills. 
              I'm currently a 4th-year B.Tech student at Siddharth Institute of Engineering and Technology.
            </p>
            <p>
              I'm passionate about creating digital products that are not just visually appealing, but also solve real user problems. 
              My unique combination of design thinking and coding skills allows me to bridge the gap between design and development, 
              ensuring that what I design can actually be built effectively.
            </p>
            <p>
              My career goal is to become a strong product designer who can take an idea from concept to working prototype—someone who 
              can design thoughtfully and build competently. I believe the best products come from designers who understand the technical 
              constraints and possibilities of implementation.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Philosophy */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-gray-100">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl mb-4">Design Philosophy</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl">
            My approach to product design follows a simple yet effective framework:
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {philosophy.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 border border-gray-200 rounded-lg"
              >
                <div className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Tools & Skills */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-gray-100">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl mb-12">Tools & Technologies</h2>

          <div className="space-y-8">
            {Object.entries(tools).map(([category, items], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-sm uppercase tracking-wide text-gray-500 mb-3">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((tool) => (
                    <span
                      key={tool}
                      className="px-4 py-2 bg-gray-100 text-gray-900 rounded-lg text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Design Strengths */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-gray-100">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl mb-12">Design Strengths</h2>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl">
            {['UI Design', 'UX Flows', 'Prototyping', 'Responsive Design', 
              'User Research', 'Wireframing', 'Design Systems', 'Accessibility'].map((strength, index) => (
              <motion.div
                key={strength}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3"
              >
                <div className="w-2 h-2 bg-gray-900 rounded-full flex-shrink-0" />
                <span className="text-gray-600">{strength}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Education */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-gray-100">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl mb-8">Education</h2>
          <div className="max-w-2xl">
            <div className="border-l-2 border-gray-200 pl-6">
              <div className="mb-2">
                <p className="text-sm text-gray-500">2021 - 2025 (Expected)</p>
              </div>
              <h3 className="text-xl mb-2">Bachelor of Technology (B.Tech)</h3>
              <p className="text-gray-600">Siddharth Institute of Engineering and Technology</p>
              <p className="text-sm text-gray-500 mt-2">Currently in 4th Year</p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
