import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Menu',
      links: [
        { text: 'Home', href: getPermalink('/') },
        { text: 'About', href: getPermalink('/about-tip') },
        { text: 'Accreditations', href: getPermalink('/accreditations') },
        { text: 'Admissions', href: getPermalink('/admissions') },
        { text: 'Program Offerings', href: getPermalink('/program') },
        { text: 'Industrial Engineering Department', href: getPermalink('/industrial-engineering') },
        { text: 'Curriculum', href: getPermalink('/curriculum') },
        { text: 'Courses', href: getPermalink('/courses') },
        { text: 'Faculty Members', href: getPermalink('faculty', 'category') },
        { text: 'News', href: getBlogPermalink() },
        { text: 'Awards', href: getPermalink('category/awards') },
        { text: 'Events', href: getPermalink('/events') },
        { text: 'Organizations', href: getPermalink('category/organizations') },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
  ],
  actions: [{ text: 'Apply Now', href: getPermalink('/admissions'), target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'TIP',
      links: [
        { text: 'About', href: getPermalink('/about-tip') },
        { text: 'Accreditations', href: getPermalink('/accreditations') },
        { text: 'Admissions', href: getPermalink('/admissions') },
        { text: 'Program Offerings', href: getPermalink('/program') },
      ],
    },
    {
      title: 'Industrial Engineering Department',
      links: [
        { text: 'Department Overview', href: getPermalink('/industrial-engineering') },
        { text: 'Curriculum', href: getPermalink('/curriculum') },
        { text: 'Courses', href: getPermalink('/courses') },
        { text: 'Faculty Members', href: getPermalink('faculty', 'category') },
      ],
    },
    {
      title: 'Pages',
      links: [
        { text: 'News', href: getBlogPermalink() },
        { text: 'Awards', href: getPermalink('/awards') },
        { text: 'Events', href: getPermalink('event', 'category') },
        { text: 'Organizations', href: getPermalink('category/organizations') },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Terms', href: getPermalink('/terms') },
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Industrial Engineering Department - Student Council', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/iedsctipmnl' },,
    { ariaLabel: 'Junior Philippine Institute of Industrial Engineering', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/jpiietipmnl' },,
    { ariaLabel: 'Inhinyera', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/InhinyeraTIPMnl' },,
  ],
  footNote: `
    Made by <a class="text-yellow-600 underline dark:text-muted" href="https://tip.edu.ph/"> Technological Institute of the Philippines</a> · All rights reserved.
  `,
};
