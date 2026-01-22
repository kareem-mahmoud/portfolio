
export const aboutMe: string = `Dedicated Specialist UI Developer with 8+ years of expertise 
                            in HTML, CSS, JavaScript, and UI/UX design. 
                            Skilled in building intuitive, 
                            user-centered interfaces that improve user experience and 
                            ensure maintainable, high-quality code. 
                            Proven ability to collaborate effectively with 
                            cross-functional teams to exceed project objectives. 
                            Committed to continuous learning and delivering innovative, 
                            scalable web solutions.`;
export const ComponentsData: any[] = [
    { 
        firstContent: {
            firstContentImg: 'profile.png',
            firstContentImgSlug: 'Currently working as a freelancer.',
            firstContentH1A: 'Kareem is a Senior UI Developer with 8+ &amp;',
            firstContentH1B: '[Angular] front-end developer based in cairo, Egypt.',
            firstContentP: 'He crafts responsive websites where technologies meet creativity.',
            firstContentButtonText: 'Contact me ->',
            firstContentButtonURL: 'contacts',
        },
        contacts: {

        },
        aboutUs: {
            aboutMeImg: 'about-me.png'
        }
    }
]

type Category = 'app' | 'project';
type State = 'live' | 'gitHub';
type Type =  'Languages' | 'Frontend' | 'Backend' | 'Framework' | 'Database' | 'Other';


export interface Project {
    id: number,
    name: string,
    imgUrl: string,
    description: string,
    category: Category,
    skills: string[],
    liveFlag: boolean,
    liveUrl: State
}

export interface Skills {
    id: number,
    category: Type,
    items: string[]
}

export interface NavItem {
  name: string;
  link: string;
}


export const nav: NavItem[] = [
    { name: 'Home', link: '/' },
    { name: 'Works', link: '/works' },
    { name: 'About-me', link: '/about-me' },
    { name: 'Contacts', link: '/contacts' },
]