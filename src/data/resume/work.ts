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
    Responsible for the reliability, security and scalability of the platform's infrastructure and delivery pipelines.
    `,
    highlights: [
      'Developed and deployed scalable and robust containerized software, ensuring stability through various migrations up to a modern infrastructure.',
      'Migrated gracefully old VM based infrastructure (Ansible) to a mix of Kubernetes and Cloud native resources (including PostgreSQL databases).',
      'Migrated VCS and CI/CD from Phabricator, first to Azure DevOps, then to Github, rewriting all pipelines and maintaining stability through migrations.',
      'Improved observability and debuggability with distributed logging and tracing using OpenTelemetry, building 10+ dashboards and 50+ alerts used by all teams, using Prometheus, Grafana, PagerDuty and migrating from ELK to Honeycomb.',
      'GitOps: Evolved deployment and release processes to achieve Continuous Deployment using GHA, Kubernetes, ArgoCD and Kargo, increasing the rate of deployment from once per week to everyday, decreasing failed deployments by 70% by decoupling a monolithic application into micro-services and using automated canary releases with rollbacks.',
      'SecOps: Ensured cybersecurity and SOC2 best practices through regular maintenance and audits, using automated DAST and SAST pipelines and Vanta.',
      'FinOps: Cut infrastructure costs by 25% while growing by 51% in requests/seconds rate, by right-sizing instances, updating reservations, tiering or cleaning up cold data, implementing autoscaling using Keda and Karpenter in Kubernetes, and regularly auditing cost via automated workflows/alerts.',
      'AIOps: Created the infrastructure to maintain and operate multiple AI agents using Azure Foundry, one of those being a dedicated SRE agent to perform alert response and alleviate various other routine toil.',
      'Automated repetitive operational tasks to free up development time.',
      'Worked closely with the development teams to improve the reliability and scalability of the products.',
      'Implemented best practices for infrastructure as code and configuration management.',
      'Participated in on-call rotations to ensure high availability of the services.',
      'Collaborated with cross-functional teams to design and implement new features and services.',
      'Enhanced security posture by implementing robust access controls and regular audits.',
      'Developed comprehensive documentation for infrastructure and operational procedures.',
      'Ensured database reliability and performance through regular maintenance and optimization, upgrading and migrating between services while preserving the integrity and availability of the data.',
    ],
  },
  {
    name: 'MDF Commerce',
    position: 'DevOps liaison in security team',
    url: '',
    startDate: '2022-01-01',
    endDate: '2022-09-30',
    summary: `
    Embedded DevOps liaison within the cybersecurity team, improving development processes by shifting security left.
    `,
    highlights: [
      "Developed a security dashboard to improve systems' observability and automate repetitive processes.",
      'Full-stack development in AWS Cloud (Lambdas with Chalice, DynamoDB, Cognito) using Terraform for IaC and React for the front-end.',
      'Logs and metrics extraction, alerting using OpsGenie and data visualization using Grafana.',
      'Created a self-service DevSecOps pipeline for more than 8 teams using Gitlab CI, Spinnaker and with DAST using ZAP.',
    ],
  },
  {
    name: 'IETR research lab',
    position: 'Research internship',
    url: '',
    startDate: '2021-05-01',
    endDate: '2021-09-30',
    summary: `
    Research internship focused on network security simulation and attack-traffic generation.
    `,
    highlights: [
      'Developed a realistic network simulator using LXC containers with various services (mail, ELK, web servers, LDAP).',
      "Developed attacker's script using SeleniumWire to generate realistic web attacks traffic (XSS, XXE, SQL/PHP injections, CSRF & SSRF, file inclusion etc).",
    ],
  },
];

export default work;
