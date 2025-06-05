import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'MovieMood',
    description: 'A data-driven web app that recommends movies based on your current mood using sentiment analysis.',
    tags: ['Python', 'Pandas', 'NLP', ' Flask'],
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    demoUrl: 'https://example.com/devflow',
    codeUrl: 'https://github.com/johndoe/devflow',
    featured: true,
  },
  {
    id: 'project-2',
    title: 'DataVizPlayground',
    description: 'An interactive dashboard to visualize global COVID-19 data using various chart types (line, bar, heatmaps, etc.)',
    tags: ['Plotly', 'Pandas', 'Dash', 'Dash'],
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    demoUrl: 'https://example.com/codesphere',
    codeUrl: 'https://github.com/johndoe/codesphere',
  },
  {
    id: 'project-3',
    title: 'Sales Forecast Buddy',
    description: 'A forecasting tool that predicts sales for a retail store using time-series data.',
    tags: ['Python', 'Scikit-Learn','Time-Series', 'TypeScript', 'Matplotlib'],
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    demoUrl: 'https://example.com/dataviz',
    codeUrl: 'https://github.com/johndoe/dataviz',
  },
  {
    id: 'project-4',
    title: 'Resume Ranker',
    description: 'A machine learning model that ranks resumes based on job descriptions using keyword extraction and similarity scores.',
    tags: ['Electron', 'Node.js', 'Cryptography', 'Python', 'NLP', 'Scikit-Learn', 'Streamlit'],
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    demoUrl: 'https://example.com/cloudsync',
    codeUrl: 'https://github.com/johndoe/cloudsync',
  },
];