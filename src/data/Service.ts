import type { LucideIcon } from 'lucide-react';

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  colorClass: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'quinary' | 'senary';
}