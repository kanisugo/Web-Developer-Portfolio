'use client'

import { motion } from 'motion/react'
import { Card } from './ui/card'
import { Button } from './ui/button'
import { SiGithub } from "react-icons/si"
import { ExternalLink } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'

export function ProjectsSection() {
  const projects = [
    {
      title: 'Facies Prediction using Variotional Autoencoders',
      description: 'Implemented unsupervised facies classification using VAEs for latent feature extraction and GMMs for clustering, imporving subsurface characterization accuracy by 15%.',
      image: 'https://cdn.dribbble.com/userupload/43407270/file/original-ef5fa599e0447dcbfa82f4b34b0eb01e.png?w=600&h=400&fit=crop',
      technologies: ['VAEs', 'Clustering', 'Semi Supervised', 'PyTorch'],
      github: 'https://github.com/kanisugo/Multi-Class-Facies-Prediction-using-Variotional-Autoencoders',
      live: 'https://github.com/kanisugo/Multi-Class-Facies-Prediction-using-Variotional-Autoencoders',
      featured: true
    },
    {
      title: 'Facies Prediction using DDFN Neural Net',
      description: 'Designed and deployed Deep Feedforward Neural Networks (DFFNs) with softmax output for facies classification on well log data, achieving 85% accuracy on test datasets and enhancing reservoir modeling workflows.',
      image: 'https://cdn.dribbble.com/userupload/12177225/file/original-7a9990608a910dd09bf5496eabd44901.jpg?w=600&h=400&fit=crop',
      technologies: ['DFFN', 'Supervised', 'Classification', 'PyTorch'],
      github: 'https://github.com/kanisugo/Multi-Class-Facies-Prediction-using-DDFN-Neural-Net',
      live: 'https://github.com/kanisugo/Multi-Class-Facies-Prediction-using-DDFN-Neural-Net',
      featured: true
    },
    {
      title: 'Nano ChatGPT',
      description: 'Developed a character-level Transformer-based language mode. implementing end-to-end dataworkflows including custom text preprocessing, tokenization, batching strategies, and training routines.',
      image: 'https://cdn.dribbble.com/userupload/10543014/file/original-4703d0ba72b72f87fa49a618a24a1f6d.gif?w=600&h=400&fit=crop',
      technologies: ['Transformers', 'LLM', 'PyTorch', 'streamlit'],
      github: 'https://github.com/kanisugo/chatgpt',
      live: 'https://github.com/kanisugo/chatgpt',
      featured: true
    },
    {
      title: 'Remote Sensing Applications, Elsevier(2024)',
      description: 'Co-Authored a paper on my dissertation topic \'PRISMA Hyperspectral Data & Ground Surveys for Mineral Mapping\'.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      technologies: ['Remote Sesning', 'Mineral Mapping', 'Python'],
      github: 'https://www.sciencedirect.com/science/article/abs/pii/S2352938524002854',
      live: 'https://www.sciencedirect.com/science/article/abs/pii/S2352938524002854',
      featured: false
    },
    {
      title: 'AI Chat Interface',
      description: 'An intelligent chat interface with natural language processing, context awareness, and multi-language support.',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop',
      technologies: ['React', 'OpenAI API', 'Node.js', 'WebSocket'],
      github: '#',
      live: '#',
      featured: false
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website with smooth animations, dark theme, and optimized performance built with modern web technologies.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      technologies: ['Next.js', 'Framer Motion', 'Tailwind', 'TypeScript'],
      github: '#',
      live: '#',
      featured: false
    }
  ]

  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Here are my recent projects that showcase my skills and passion for Geo-Data Science
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="group bg-black/50 border-white/10 overflow-hidden hover:border-emerald-500/50 transition-all duration-500">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <motion.a
                      href={project.github}
                      target = "_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-black/70 rounded-full flex items-center justify-center text-white hover:bg-emerald-500 transition-all duration-300"
                    >
                      <SiGithub size={20} />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target = "_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-black/70 rounded-full flex items-center justify-center text-white hover:bg-emerald-500 transition-all duration-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm border border-emerald-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="text-2xl text-white text-center mb-8">Other Projects and Publications</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="group bg-black/30 border-white/10 hover:border-white/30 transition-all duration-300 h-full">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute top-3 right-3 flex space-x-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-black/70 rounded-full flex items-center justify-center text-white hover:bg-emerald-500 transition-all duration-300"
                    >
                      <SiGithub size={16} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-black/70 rounded-full flex items-center justify-center text-white hover:bg-emerald-500 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                
                <div className="p-4">
                  <h4 className="text-lg text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 text-sm mb-3 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button 
            variant="outline" 
            className="border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 px-8 py-3"
          >
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  )
}