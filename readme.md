1. MovieMood
Description:
A data-driven web app that recommends movies based on your current mood using sentiment analysis.
Tags: Python Pandas NLP Flask
Demo Button: 🟦 Live Demo
Code Button: ⬛ Code

✨ Why it works: Combines real-world data (like IMDb reviews) with beginner NLP (Natural Language Processing). Great to show understanding of user-centric recommendations.

🔹 2. DataVizPlayground
Description:
An interactive dashboard to visualize global COVID-19 data using various chart types (line, bar, heatmaps, etc.).
Tags: Plotly Pandas Dash CSV
Demo Button: 🟦 Live Demo
Code Button: ⬛ Code

✨ Why it works: Shows you can clean, process, and visualize real-world datasets—important for entry-level DS roles.

🔹 3. Sales Forecast Buddy
Description:
A forecasting tool that predicts sales for a retail store using time-series data.
Tags: Python Scikit-Learn Time-Series Matplotlib
Demo Button: 🟦 Live Demo
Code Button: ⬛ Code

✨ Why it works: Simple ML project with a clear business case. Recruiters love seeing ROI-focused analysis.


















 Frontend
React

TypeScript

Next.js

TailwindCSS

🧠 Data Science
Python

Pandas / NumPy

Scikit-Learn

Jupyter / Colab

🛠️ DevOps & Backend
Node.js

Express

PostgreSQL

Docker

⚙️ ML & Other Tools
TensorFlow / PyTorch

Hugging Face

OpenCV

Streamlit / Gradio










import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';

export const Hero: React.FC = () => {
  const [hoveredBadge, setHoveredBadge] = useState<number | null>(null);
  
  const badges = [
    "⚛ ReactJS",
    "🌓 NextJS",
    "📘 TypeScript",
    "🍃 MongoDB",
    "🔷 Prisma",
    "🧠 Zustand",
    "💎 Zod",
    "📱 Expo",
    "🔐 Clerk",
    "🐧 Linux",
    "📦 pnpm"
  ];

  return (
    <section id="home" className="relative min-h-screen pt-20 flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-100 to-white dark:from-neutral-dark-900 dark:to-neutral-dark-800 -z-10"></div>
      <div className="noise-bg"></div>
      
      <div className="container-custom py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-2 bg-accent-100 text-accent-700 dark:bg-accent-900 dark:text-accent-300 rounded-full font-medium text-sm">
              Data Scientist
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-black dark:text-white leading-tight">
              I build solutions people <span className="text-accent-500">love</span> to use.
            </h1>
            
            <p className="text-lg text-neutral-700 dark:text-neutral-300 max-w-xl">
              Passionate data scientist focused on extracting valuable insights and building intelligent solutions. I turn complex data challenges into actionable, impactful outcomes with precision and creativity.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects" 
                className="btn btn-primary"
              >
                See my work
                <ArrowRight size={18} className="ml-2" />
              </a>
              <a 
                href="#contact" 
                className="btn btn-outline"
              >
                Get in touch
              </a>
            </div>
            
            <div className="flex items-center space-x-4 pt-4">
              <a href="https://github.com" className="text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://twitter.com" className="text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" className="text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>

            {/* Tech Stack Badges Section */}
            <div className="pt-8">
              <h3 className="text-pink-500 dark:text-pink-400 text-lg font-semibold mb-4">
                edge technologies
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {badges.map((badge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: index * 0.1,
                      duration: 0.5
                    }}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-sm"
                    onMouseEnter={() => setHoveredBadge(index)}
                    onMouseLeave={() => setHoveredBadge(null)}
                    style={{
                      transform: hoveredBadge === index ? 'scale(1.05)' : 'scale(1)',
                      transition: 'transform 0.3s ease',
                      cursor: 'default'
                    }}
                  >
                    {badge}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto rounded-lg overflow-hidden border-4 border-black dark:border-white bg-accent-500 shadow-brutal dark:shadow-brutal-light">
              <div className="h-full w-full p-6 flex items-center justify-center">
                <pre className="text-xs md:text-sm overflow-hidden text-white font-mono">
                  <code>{`
function Developer() {
  const [skills, setSkills] = useState([
    'Python', 'TensorFlow',
    'PyTorch', 'Pandas', 
    'Scikit-Learn', 'SQL'
  ]);
  
  const [coffee, setCoffee] = useState(true);
  
  useEffect(() => {
    if (!coffee) {
      setCoffee(true);
      learnNewSkills();
    }
  }, [coffee]);
  
  return (
    <DataSolutions 
      that="people love"
      withPassion={true}
      andCoffee={coffee}
    />
  );
}`}</code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


