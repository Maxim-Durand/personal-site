const data = [
  {
    title: 'OSS Work',
    subtitle: 'Helping out in projects when I can.',
    image: '/images/projects/',
    date: '2025-10-1',
    desc:
        'I always loved Open Source and I try to contribute as much as I can.'
        + ' Over the years I\'ve contributed to projects like Kubernetes, direnv, trivy.',
  },
  {
    title: 'GoVistaImageConverter',
    subtitle: 'Learning GoLang by creating an image converter desktop app.',
    image: '/images/projects/go-logo-blue.svg',
    date: '2023-10-1',
    desc:
        'To learn GoLang I decided to create a simple desktop app running on both Linux and Windows'
        + ' (even on Windows Vista i.e on i386 architecture) to easily convert any image type.'
        + 'The app uses libvips@8.9+ to do the heavy image processing.',
  },
  {
    title: 'CaloriesTrackerApp',
    subtitle: 'Creating a mobile app to track your daily calory intake.',
    image: '/images/projects/react-native-1.svg',
    date: '2023-05-1',
    desc:
        'Used React Native to develop a very minimal and simple to use app to track daily calories intake.',
  },
  {
    title: 'DevOps with Raspberry Pis',
    subtitle: 'Creating a home Kubernetes cluster with 2 Raspberry Pis 4.',
    image: '/images/projects/RPiAndKubernetes.png',
    date: '2022-03-1',
    desc:
        'I used 2 Raspberry Pis 4 to create my home Kubernetes Cluster. '
        + 'With this cluster I learned how to use Kubernetes but also how to create and use a CI/CD pipeline that I deployed using Gitea and Drone. '
        + 'Moreover, I deployed many other different apps like a local DNS (piHole), a file hosting service (NextCloud) and many more.',
  },
  {
    title: 'Virtual Art Gallery',
    subtitle: 'Virtual gallery to showcase previously generated artworks',
    image: '/images/projects/virtual_art_gallery.png',
    date: '2022-03-1',
    desc:
      'Created a virtual gallery to showcase previously generated artworks (see project below). You can visit the gallery at https://maxim-durand.github.io/virtual-art-gallery/build',
  },
  {
    title: 'Art generation using GANs',
    subtitle: 'Using the power of generative adversarial neural networks to create artworks that I like',
    image: '/images/projects/seed0387.png',
    date: '2022-02-1',
    desc:
      'Using a GAN to generate artwork and then super-sampling it using ESRGAN.',
  },
  {
    title: 'Making artworks and visuals using p5.js',
    subtitle: 'Using a library called p5.js I started creating cool visuals.',
    image: '/images/projects/orbital.png',
    date: '2021-11-1',
    desc:
      'Using a library called p5.js I started creating cool visuals, graphs etc...'
    + 'You can check some of them at https://maxim-durand.github.io/generativeArt/'
    + ' Most of those pages are interactive so try left clicking',
  },
];

export default data;
