import Github from '../assets/github.svg';
import Linkedin from '../assets/linkedin.svg';
export const links = [
    { label: 'cv', to: '/cv' },
    { label: 'projects', to: '/projects' },
    { label: 'books', to: '/books' },
    { label: 'about', to: '/' },
];

export const socials = [
    {
        to: 'https://github.com/smudgy-g',
        target: '_blank',
        icon: Github,
    },
    {
        to: 'https://www.linkedin.com/in/adam-james-griffiths/',
        target: '_blank',
        icon: Linkedin,
    },
];
