// TODO Add a couple lines about each project
const data = [
  {
    title: 'DevOps with Raspberry Pis',
    subtitle: 'Creating a home Kubernetes cluster with 2 Raspberry Pis 4.',
    image: '/images/RPiAndKubernetes.png',
    date: '2022-03-1',
    desc:
        'I used 2 Raspberry Pis 4 to create my home Kubernetes Cluster. ' +
        'With this cluster I learned how to use Kubernetes but also how to create and use a CI/CD pipeline that I deployed using Gitea and Drone. ' +
        'Moreover, I deployed many other different apps like a local DNS (piHole), a file hosting service (NextCloud) and many more.',
  },
  {
    title: 'Art generation using GANs',
    subtitle: 'Using the power of generative adversarial neural networks to create artworks that I like',
    image: '/images/seed0387.png',
    date: '2022-02-1',
    desc:
      'Using a GAN to generate artwork and then super-sampling it using ESRGAN ',
  },
];

export default data;
