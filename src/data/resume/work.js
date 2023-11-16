/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Encircle',
    position: 'Site Reliability Engineer',
    url: 'https://www.getencircle.com/',
    startDate: '2022-11-16',
    summary: `
    As an SRE I am the shield that guards the realm of code from bad quality and infrastruture hazards.
    `,
    highlights: [
      'Redesigned engineering processes for bug tracking, meetings, and standups. Improved culture for code reviews, blameless post-mortems, and retrospectives.',
      'Re-architected engineering hiring and onboarding processes. Recruited several strong engineers.',
      'Reorged engineering teams to focus on product delivery. Created a new team to focus on ML infrastructure.',
      'Lead re-design of internal APIs for inference. Built new computer vision pipelines for industry leading certifications (NIST/iBeta liveness).',
      'Pitched, designed, developed, deployed, and maintain a fraud detection product based on 1-N facial recognition using embeddings and vector search.',
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
