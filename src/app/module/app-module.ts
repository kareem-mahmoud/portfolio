
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