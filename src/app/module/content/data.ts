import { counter } from '../../app';

export const aboutMe = `I’m Kareem, a Senior UI Engineer with ${counter()}+ years of experience building responsive, user-friendly web experiences. I specialize in Angular, TypeScript, and JavaScript, with skills in React, WordPress, HTML, CSS, Tailwind CSS, and Bootstrap. I enjoy turning complex requirements into intuitive interfaces and reusable components, combining technical leadership and problem-solving with a focus on accessibility, performance, and clean, maintainable code.`;
export const ComponentsData = [
    { 
        firstContent: {
            firstContentImg: 'profile.png',
            firstContentImgSlug: 'Currently working as a freelancer.',
            firstContentH1A: `Kareem is a Senior UI Engineer with ${counter()}+ years of experience.`,
            firstContentH1B: `Include ${counter() - 6}+ [Angular] front-end based in cairo, Egypt.`,
            firstContentP: 'He builds responsive, accessible web experiences with Angular, thoughtful UI design, and reusable components—turning complex requirements into polished, maintainable products.',
            firstContentButtonText: 'Contact me',
            firstContentButtonURL: '/contact',
        },
        aboutMe: {
            aboutMeDisc: aboutMe,
            aboutMeImgURL: 'about-me.png',
            aboutMeButtonText: 'About me',
            aboutMeUrl: '/contact'
        },
        projects:{
            projectsButtonText: 'View all',
            projectsUrl: '/all-projects'
        },
        Skills:{
            skillsImgURL: 'skills.png',
            skillsButtonText: 'View all',
            skillsUrl: '/all-skills'
        },
        contacts: {

        },
        aboutUs: {
            aboutMeImg: 'about-me.png'
        }
    }
]
