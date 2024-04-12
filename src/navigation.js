import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Menu',
      links: [
        { text: 'Home', href: getPermalink('/'), icon: 'tabler:home', description: 'Explore our welcoming home page' },
        {
          text: 'About',
          href: getPermalink('/about-tip'),
          icon: 'tabler:info-circle',
          description: 'Discover comprehensive information about our institution',
        },
        {
          text: 'Accreditations',
          href: getPermalink('/accreditations'),
          icon: 'tabler:certificate',
          description: 'Review our prestigious accreditations',
        },
        {
          text: 'Admissions',
          href: getPermalink('/admissions'),
          icon: 'tabler:key',
          description: 'Learn about our streamlined admission process',
        },
        {
          text: 'Program Offerings',
          href: getPermalink('/program'),
          icon: 'tabler:book',
          description: 'Explore our diverse range of academic programs',
        },
        {
          text: 'Industrial Engineering Department',
          href: getPermalink('/industrial-engineering'),
          icon: 'tabler:engine',
          description: 'Excellence in Industrial Engineering Department',
        },
        {
          text: 'Curriculum',
          href: getPermalink('/curriculum'),
          icon: 'tabler:book',
          description: 'View our meticulously designed academic curriculum',
        },
        {
          text: 'Courses',
          href: getPermalink('/courses'),
          icon: 'tabler:school',
          description: 'Browse our extensive catalog of courses',
        },
        {
          text: 'Faculty Members',
          href: getPermalink('/facultypage'),
          icon: 'tabler:users',
          description: 'Meet our esteemed faculty members',
        },
        {
          text: 'News',
          href: getBlogPermalink(),
          icon: 'tabler:news',
          description: 'Stay updated with the latest news and announcements',
        },
        {
          text: 'Awards',
          href: getPermalink('award', 'category'),
          icon: 'tabler:award',
          description: 'Celebrate our achievements and accolades',
        },
        {
          text: 'Events',
          href: getPermalink('/events'),
          icon: 'tabler:calendar',
          description: 'Participate in upcoming events and gatherings',
        },
        {
          text: 'Organizations',
          href: getPermalink('category/organizations'),
          icon: 'tabler:users-group',
          description: 'Explore our vibrant student organizations',
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
          icon: 'tabler:phone',
          description: 'Connect with us for inquiries and assistance',
        },
        {
          text: 'Gallery',
          href: getPermalink('/gallery'),
          icon: 'tabler:brand-appgallery',
          description: 'View captivating moments captured in our gallery',
        },
      ],
    },
  ],
  actions: [{ text: 'Enroll Now', href: getPermalink('/admissions'), target: '_blank' }],
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
        { text: 'Faculty Members', href: getPermalink('/facultypage') },
      ],
    },
    {
      title: 'Pages',
      links: [
        { text: 'News', href: getBlogPermalink() },
        { text: 'Awards', href: getPermalink('category/awards') },
        { text: 'Events', href: getPermalink('category/events') },
        { text: 'Organizations', href: getPermalink('category/organizations') },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Legal',
      links: [{ text: 'Privacy Policy', href: getPermalink('/privacy') }],
    },
  ],
  secondaryLinks: [{ text: 'Privacy Policy', href: getPermalink('/privacy') }],
  socialLinks: [
    {
      ariaLabel: 'Industrial Engineering Department - Student Council',
      icon: 'tabler:brand-x',
      href: 'https://www.facebook.com/iedsctipmnl',
    },
    {
      ariaLabel: 'Junior Philippine Institute of Industrial Engineering',
      icon: 'tabler:brand-facebook',
      href: 'https://www.facebook.com/jpiietipmnl',
    },
    {
      ariaLabel: 'Inhinyera',
      icon: 'tabler:brand-facebook',
      href: 'https://www.facebook.com/InhinyeraTIPMnl',
    },
  ],
  footNote: `
  Made by <a class="text-yellow-300 underline dark:text-muted text-center" href="https://tip.edu.ph/"> TIP Manila-Industrial Engineering Department</a> · All rights reserved.
`,
};
