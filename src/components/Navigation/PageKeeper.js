class PageKeeper {
  constructor() {
    this.pages = [
      {
        name: 'profile',
        path: '/profile',
        paths: ['/', '/profile'],
        scrollLocation: 'body',
        sections: [
          {
            name: 'About Me',
            scrollLocation: 'profile',
          }, 
          { 
            name: 'Projects',
            scrollLocation: 'projects',
          }, 
          { 
            name: 'Contact',
            scrollLocation: 'contact',
          },
        ],
      },  
      {
        name: 'blog',
        path: '/blog',
        paths: ['/blog'],
        scrollLocation: 'body',
        sections: [
          {
            name: 'Blog',
            scrollLocation: 'blogs',
          }, 
          { 
            name: 'About Me',
            scrollLocation: 'profile',
          }, 
          { 
            name: 'Contact',
            scrollLocation: 'contact',
          },
        ],
      },
    ];
  }

  currentPage(path) {
    switch(path) {
      case '/': 
        return this.pages[0];
      break;
      case '/blog':
        return this.pages[1];
      break;
      default:
        return this.pages[0];
    }
  }
}

export default new PageKeeper();