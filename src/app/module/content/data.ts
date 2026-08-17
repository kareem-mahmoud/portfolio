import { counter } from '../../app';

export const aboutMe = `Dedicated Specialist UI Engineer with ${counter()}+ years of expertise 
                            in HTML, CSS, JavaScript, include ${counter() - 6}+ Fron-end Angular development. 
                            Skilled in building intuitive, 
                            user-centered interfaces that improve user experience and 
                            ensure maintainable, high-quality code. 
                            Proven ability to collaborate effectively with 
                            cross-functional teams to exceed project objectives. 
                            Committed to continuous learning and delivering innovative, 
                            scalable web solutions.`;
export const ComponentsData = [
    { 
        firstContent: {
            firstContentImg: 'profile.png',
            firstContentImgSlug: 'Currently working as a freelancer.',
            firstContentH1A: `Kareem is a Senior UI Engineer with ${counter()}+ years of experience.`,
            firstContentH1B: `Include ${counter() - 6}+ [Angular] front-end based in cairo, Egypt.`,
            firstContentP: 'He crafts responsive websites where technologies meet creativity.',
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
