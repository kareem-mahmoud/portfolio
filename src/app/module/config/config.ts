export interface NavItem {
  name: string;
  link: string;
}

export const nav: NavItem[] = [
    { name: 'Home', link: '/home' },
    { name: 'Works', link: '/all-projects' },
    { name: 'Skills', link: '/all-skills' },
    { name: 'Contacts', link: '/contact' },
]
