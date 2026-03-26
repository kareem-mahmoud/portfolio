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