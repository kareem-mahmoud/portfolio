type Category = 'Mobile' | 'Project' | 'Website' | 'Other';
type Stack = 'Angular' | 'React' | 'Vue' | 'Node.js' | 'WordPress' | 'Other';
type State = 'live' | 'gitHub';
type Type =  'Languages' | 'Frontend' | 'Backend' | 'Framework' | 'Database' | 'Other';


export interface Project {
    id: number,
    name: string,
    imgUrl: string,
    description: string,
    category: Category,
    stack: Stack,
    skills: string[],
    state: State,
    liveFlag: boolean,
    liveUrl: string
}

export interface Skills {
    id: number,
    name: string,
    category: Type,
    type: string,
    level: string,
    description: string
}