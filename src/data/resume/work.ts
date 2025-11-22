/**
 * Conforms to https://jsonresume.org/schema/
 */
export interface Position {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
  {
    name: 'Encircle',
    position: 'Site Reliability Engineer',
    url: 'https://www.getencircle.com/',
    startDate: '2022-11-16',
    summary: `
    As an SRE I am the shield that guards the realm of code from bad quality and infrastructure hazards.
    `,
    highlights: [
      'Insured proper monitoring, alerting and maintenance of the different product environments and their infrastructure.',
      'Improved the CI/CD pipelines to reduce the number of faulty deployments and speed up the development process.',
      'Automated repetitive operational tasks to free up development time.',
      'Worked closely with the development teams to improve the reliability and scalability of the products.',
      'Implemented best practices for infrastructure as code and configuration management.',
      'Participated in on-call rotations to ensure high availability of the services.',
      'Collaborated with cross-functional teams to design and implement new features and services.',
      'Migrated legacy systems monoliths to microservices architectures hosted on cloud platforms.',
      'Optimized costs of cloud infrastructure by right-sizing resources and leveraging reserved instances.',
      'Enhanced security posture by implementing robust access controls and regular audits.',
      'Developed comprehensive documentation for infrastructure and operational procedures.',
      'Insured database reliability and performance through regular maintenance and optimization tasks,',
      ' upgrading and migrating through different services while insuring the integrity and availability of the data.',
    ],
  },
  {
    name: 'MDF Commerce',
    position: 'DevSecOps engineer',
    url: '',
    startDate: '2022-01-01',
    endDate: '2022-10-31',
    summary: `
      As a DevSecOps engineer I tried to improve development processes by shifting left the security work.
    `,
    highlights: [
      'Helped the cybersecurity team to improve their development process and their observability stack.',
      'Developped a generic DevSecOps pipeline reusable by the different development teams.',
      'Worked with multiple development teams to shift left security issues.',
    ],
  },
];

export default work;
