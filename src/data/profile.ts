// Shared profile metadata and external links.
export interface Profile {
  dialogue: string;
  tagline: string;
  subtitle: string;
  location: string;
  github: string;
  cv: string;
  metaDescription: string;
}

export const profile: Profile = {
  dialogue: 'A wild NINA CUNHA appeared!',
  tagline: 'Automating the boring stuff since 2019.',
  subtitle: 'Digital & Integrated Production Solutions @ Bosch · Mechatronics · Automation',
  location: 'Stuttgart, DE',
  github: 'https://github.com/cunhanina',
  cv: '/cv.pdf',
  metaDescription:
    'Nina Cunha is a Digital and Integrated Production Solutions Intern at Bosch in Stuttgart, working across mechatronics and automation.'
};
