export interface Project {
  title: string;
  subtitle?: string;
  link?: string;
  image: string;
  date: string;
  desc: string;
}

const data: Project[] = [
  {
    title: 'Open Source Contributor',
    subtitle: 'Helping out in projects when I can.',
    image: '/personal-site/images/projects/k8s.png',
    date: '2024-01-1',
    desc:
        'Contributed to various OSS projects I use, ranging from Kubernetes to Direnv, Auto, Trivy...',
  },
  {
    title: 'Kubernetes local cluster using RaspberryPi4',
    subtitle: 'January 2022 - July 2023',
    image: '/personal-site/images/projects/RPiAndKubernetes.png',
    date: '2022-01-1',
    desc:
        'Deployed and administered a Kubernetes cluster using multiple RaspberryPi4 with full pipelines using Gitea and Drone CI/CD. '
        + 'Hosted and administered many different services, such as a file hosting server called NextCloud or a local DNS with PiHole.',
  },
  {
    title: 'Art generation with machine learning',
    subtitle: 'January 2023 - June 2023',
    link: 'https://maxim-durand.github.io/virtual-art-gallery/build',
    image: '/personal-site/images/projects/virtual_art_gallery.png',
    date: '2023-01-1',
    desc:
        'Generated art pieces in high-resolution using deep learning using generative adversarial network models. '
        + 'Experimented with many different ML environments (Google Collab, AWS EC2 & Sagemaker, Gradient ML).',
  },
  {
    title: 'GoVistaImageConverter',
    subtitle: 'Learning GoLang by creating an image converter desktop app.',
    image: '/personal-site/images/projects/go-logo-blue.svg',
    date: '2023-10-1',
    desc:
        'To learn GoLang, I created a simple desktop app running on both Linux and Windows'
        + ' (including Windows Vista, i.e. the i386 architecture) to easily convert any image type.'
        + ' The app uses libvips@8.9+ for the heavy image processing.',
  },
  {
    title: 'CaloriesTrackerApp',
    subtitle: 'Creating a mobile app to track daily calorie intake.',
    image: '/personal-site/images/projects/react-native-1.svg',
    date: '2023-05-1',
    desc:
        'Used React Native to develop a minimal, easy-to-use app to track daily calorie intake.',
  },
  {
    title: 'Virtual Art Gallery',
    subtitle: 'Virtual gallery to showcase previously generated artworks',
    link: 'https://maxim-durand.github.io/virtual-art-gallery/build',
    image: '/personal-site/images/projects/virtual_art_gallery.png',
    date: '2022-03-1',
    desc:
      'Created a virtual gallery to showcase previously generated artworks (see the project below). You can visit the gallery at https://maxim-durand.github.io/virtual-art-gallery/build',
  },
  {
    title: 'Art generation using GANs',
    subtitle: 'Using generative adversarial networks to create artworks',
    image: '/personal-site/images/projects/seed0387.png',
    date: '2022-02-1',
    desc:
      'Used a GAN to generate artwork, then upscaled it using ESRGAN.',
  },
  {
    title: 'Making artworks and visuals using p5.js',
    subtitle: 'Creating interactive visuals with the p5.js library.',
    image: '/personal-site/images/projects/orbital.png',
    date: '2021-11-1',
    desc:
      'Used the p5.js library to create visuals, graphs and more. '
    + 'You can view some of them at https://maxim-durand.github.io/generativeArt/. '
    + 'Most of those pages are interactive, so try left clicking.',
  },
];

export default data;
