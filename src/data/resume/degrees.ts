export interface Degree {
  school: string;
  degree: string;
  link: string;
  year: number;
  location?: string;
}

const degrees: Degree[] = [
  {
    school: 'INSA Rennes',
    degree: 'Engineering studies in computer science',
    link: '',
    year: 2023,
    location: 'Rennes, France',
  },
  {
    school: 'Ecole de Technologie Supérieure (ETS)',
    degree: 'Master in software engineering',
    link: '',
    year: 2023,
    location: 'Montréal, Canada',
  },
];

export default degrees;
