import { certifications } from './locales/en/certifications';
import type { Certification } from '../data/Certification';

const getCertificationText = (id: number) => {
    const item = certifications.certificationItems.find(c => c.id === id);
    if (!item) throw new Error(`Certification with id ${id} not found`);
    return item;
};

export const certificationsData: Certification[] = [
    {
        id: 1,
        name: getCertificationText(1).name,
        issuer: getCertificationText(1).issuer,
        year: '2025',
        icon: '',
    },
    {
        id: 2,
        name: getCertificationText(2).name,
        issuer: getCertificationText(2).issuer,
        year: '2025',
        icon: '',
    },
    {
        id: 3,
        name: getCertificationText(3).name,
        issuer: getCertificationText(3).issuer,
        year: '2020',
        icon: '',
    },
    {
        id: 4,
        name: getCertificationText(4).name,
        issuer: getCertificationText(4).issuer,
        year: '2020',
        icon: '',
    },
    {
        id: 5,
        name: getCertificationText(5).name,
        issuer: getCertificationText(5).issuer,
        year: '2015',
        icon: '',
    },
].sort((a, b) => Number.parseInt(b.year) - Number.parseInt(a.year));
