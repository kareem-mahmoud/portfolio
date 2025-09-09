
type Category = 'app' | 'project';
type State = 'live' | 'gitHub';

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