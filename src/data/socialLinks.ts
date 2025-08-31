import { SocialLink } from '../types';

// Import custom icons from your icons folder
import DribbbleIcon from '../icons/dribble.png';
import BehanceIcon from '../icons/behance.png';
import InstagramIcon from '../icons/instagram.png';
import GmailIcon from '../icons/gmail.png';

export const socialLinks: SocialLink[] = [
  { icon: DribbbleIcon, href: 'https://dribbble.com/elaravance', label: 'Dribbble' },
  { icon: BehanceIcon, href: 'https://behance.net/elaravance', label: 'Behance' },
  { icon: InstagramIcon, href: 'https://instagram.com/elaravance', label: 'Instagram' },
  { icon: GmailIcon, href: 'mailto:hello@elaravance.com', label: 'Gmail' },
];