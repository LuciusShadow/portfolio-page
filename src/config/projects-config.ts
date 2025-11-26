import portfolioImage from '../assets/portfolio.PNG';
import ergoVRImage from '../assets/ErgoVR.PNG';
import icaraceImage from '../assets/icarace.PNG';
import dancaAlegriaImage from '../assets/Danca-Alegria.png';
import { projects } from './locales/en/projects';
import type { Project } from '../data/Project';

const getProjectText = (id: number) => {
    const item = projects.projectItems.find(p => p.id === id);
    if (!item) throw new Error(`Project with id ${id} not found`);
    return item;
};

export const projectsData: Project[] = [
    {
        id: 1,
        title: getProjectText(1).title,
        description: getProjectText(1).description,
        image: portfolioImage,
        technologies: ['React', 'TypeScript', 'SCSS', 'Github Copilot'],
        year: '2025',
        github: 'https://github.com/LuciusShadow/portfolio-page',
        live: 'https://www.sascha-bach.de',
    },
    {
        id: 2,
        title: getProjectText(2).title,
        description: getProjectText(2).description,
        image: ergoVRImage,
        technologies: ['Unity3D', 'C#', 'Oculus SDK'],
        year: '2015',
        github: 'https://github.com/LuciusShadow/ErgoVR',
    },
    {
        id: 3,
        title: getProjectText(3).title,
        description: getProjectText(3).description,
        image: icaraceImage,
        technologies: ['Angular 4', 'Typescript', 'HTML', 'CSS'],
        year: '2018',
        github: 'https://github.com/LuciusShadow/ErgoVR'
    },
    {
        id: 4,
        title: getProjectText(4).title,
        description: getProjectText(4).description,
        image: dancaAlegriaImage,
        technologies: ['Wordpress', 'PHP', 'HTML', 'CSS'],
        year: '2025',
        live: 'https://www.danca-alegria.de'
    }
];
