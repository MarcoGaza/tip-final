import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Menu',
      links: [
        { text: 'Home', href: getPermalink('/'), icon: 'flat-color-icons:home', description: 'Explore our welcoming home page' },
        {
          text: 'Industrial Engineering Department',
          href: getPermalink('/industrial-engineering'),
          icon: 'flat-color-icons:engineering',
          description: 'Excellence in Industrial Engineering Department',
        },
        {
          text: 'Faculty Members',
          href: getPermalink('/facultypage'),
          icon: 'flat-color-icons:reading-ebook',
          description: 'Meet our esteemed faculty members',
        },
        {
          text: 'Admissions',
          href: getPermalink('/admissions'),
          icon: 'flat-color-icons:graduation-cap',
          description: 'Learn about our streamlined admission process',
        },
        {
          text: 'About',
          href: getPermalink('/about-tip'),
          icon: 'flat-color-icons:about',
          description: 'Discover comprehensive information about our institution',
        },
        {
          text: 'Courses',
          href: getPermalink('/courses'),
          icon: 'flat-color-icons:org-unit',
          description: 'Browse our extensive catalog of courses',
        },
        {
          text: 'Organizations',
          href: getPermalink('/organizations'),
          icon: 'flat-color-icons:conference-call',
          description: 'Explore our vibrant student organizations',
        },   
        {
          text: 'Contact',
          href: getPermalink('/contact'),
          icon: 'flat-color-icons:business-contact',
          description: 'Connect with us for inquiries and assistance',
        },
        {
          text: 'Program Offerings',
          href: getPermalink('/program-offerings'),
          icon: 'flat-color-icons:library',
          description: 'Explore our diverse range of academic programs',
        },
        {
          text: 'Curriculum',
          href: getPermalink('/curriculum'),
          icon: 'flat-color-icons:todo-list',
          description: 'View our meticulously designed academic curriculum',
        },
        {
          text: 'Gallery',
          href: getPermalink('/gallery'),
          icon: 'flat-color-icons:gallery',
          description: 'View captivating moments captured in our gallery',
        },
        {
          text: 'News',
          href: getBlogPermalink(),
          icon: 'flat-color-icons:news',
          description: 'Stay updated with the latest news and announcements',
        },
        {
          text: 'Accreditations',
          href: getPermalink('/accreditations'),
          icon: 'flat-color-icons:briefcase',
          description: 'Review our prestigious accreditations',
        },
        {
          text: 'Awards',
          href: getPermalink('awards', 'category'),
          icon: 'flat-color-icons:idea',
          description: 'Celebrate our achievements and accolades',
        },
        {
          text: 'Events',
          href: getPermalink('/events'),
          icon: 'flat-color-icons:calendar',
          description: 'Participate in upcoming events and gatherings',
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
        { text: 'Program Offerings', href: getPermalink('/program-offerings') },
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
        { text: 'Organizations', href: getPermalink('/organizations') },
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
