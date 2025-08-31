import { Project } from '../types';

// Works images
import work1 from '../images/works/Project1.png';
import work2 from '../images/works/Project2.png';
import work3 from '../images/works/Project3.png';
import work4 from '../images/works/Project4.png';
import work5 from '../images/works/Project5.png';
import work6 from '../images/works/Project6.png';
import work7 from '../images/works/Project7.png';
import work8 from '../images/works/Project8.png';
import work9 from '../images/works/Project9.png';

// Past works images
import pastwork1 from '../images/pastworks/pastwork1.png';
import pastwork2 from '../images/pastworks/pastwork2.png';
import pastwork3 from '../images/pastworks/pastwork3.png';
import pastwork4 from '../images/pastworks/pastwork4.png';
import pastwork5 from '../images/pastworks/pastwork5.png';
import pastwork6 from '../images/pastworks/pastwork6.png';

// Playground images
import playground1 from '../images/Playgrounds/Playground1.png';
import playground2 from '../images/Playgrounds/Playground2.png';
import playground3 from '../images/Playgrounds/Playground3.png';
import playground4 from '../images/Playgrounds/Playground4.png';
import playground5 from '../images/Playgrounds/Playground5.png';
import playground6 from '../images/Playgrounds/Playground6.png';
import playground7 from '../images/Playgrounds/Playground7.png';
import playground8 from '../images/Playgrounds/Playground9.png';

export const worksProjects: Project[] = [
  { id: 1, title: 'Whispering Woods', category: 'digital_art', image: work1, link: '/crystalvision' },
  { id: 2, title: 'Aura Music App', category: 'ui/ux', image: work2, link: '/crystalvision' },
  { id: 3, title: 'Neon Dystopia', category: 'digital_art', image: work3, link: '/crystalvision' },
  { id: 4, title: 'Terra Coffee', category: 'branding', image: work4, link: '/crystalvision' },
  { id: 5, title: 'Geometric Harmony', category: 'abstract', image: work5, link: '/crystalvision' },
  { id: 6, title: 'Android Soul', category: 'digital_art', image: work6, link: '/crystalvision' },
  { id: 7, title: 'Zen Garden', category: 'digital_art', image: work7, link: '/crystalvision' },
  { id: 8, title: 'Pixel Perk Cafe', category: 'branding', image: work8, link: '/crystalvision' },
  { id: 9, title: 'Etherea Skincare', category: 'branding', image: work9, link: '/crystalvision' },
];

export const pastWorksProjects: Project[] = [
  { id: 1, title: 'Whispering Woods', description: 'See Details', image: pastwork1, link: '/crystalvision' },
  { id: 2, title: 'Neon Dystopia', description: 'See Details', image: pastwork2, link: '/crystalvision' },
  { id: 3, title: 'Geometric Harmony', description: 'See Details', image: pastwork3, link: '/crystalvision' },
  { id: 4, title: 'Android Soul', description: 'See Details', image: pastwork4, link: '/crystalvision' },
  { id: 5, title: 'Zen Garden', description: 'See Details', image: pastwork5, link: '/crystalvision' },
  { id: 6, title: 'Pixel Perk Cafe', description: 'See Details', image: pastwork6, link: '/crystalvision' },
];

export const playgroundProjects: Project[] = [
  { id: 1, title: 'ERROR_404.exe', subtitle: 'When reality.exe stops working', category: 'experimental', image: playground1 },
  { id: 2, title: 'NEON DREAMS', subtitle: 'Typography Chaos', category: 'unconventional', image: playground2 },
  { id: 3, title: 'Impossible Geometries', subtitle: 'Physics left the chat', category: 'weird', image: playground3 },
  { id: 4, title: 'Broken.Reality', subtitle: 'System.malfunction.beautiful', category: 'experimental', image: playground4 },
  { id: 5, title: 'Data Dreams', subtitle: 'What AI sees when it sleeps', category: 'unconventional', image: playground5 },
  { id: 6, title: 'WILD & FREE', subtitle: 'Rebellious Letters', category: 'weird', image: playground6 },
  { id: 7, title: 'Dreamscape Architecture', subtitle: 'Building in the impossible', category: 'experimental', image: playground7 },
  { id: 8, title: 'Liquid Thoughts', subtitle: 'Consciousness in motion', category: 'unconventional', image: playground8 },
];