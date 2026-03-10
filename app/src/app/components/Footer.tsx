import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-gray-900 font-medium">Selva (R. Ponselvan)</p>
            <p className="text-sm text-gray-600 mt-1">Product-oriented UI/UX Designer</p>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="mailto:selva@example.com" 
              className="p-2 rounded-lg hover:bg-gray-200 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-gray-600" />
            </a>
            <a 
              href="https://linkedin.com/in/selva" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-gray-200 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-gray-600" />
            </a>
            <a 
              href="https://github.com/selva" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-gray-200 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-gray-600" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>© 2026 Selva. Designed & built with care.</p>
        </div>
      </div>
    </footer>
  );
}
