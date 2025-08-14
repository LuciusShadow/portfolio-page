import type { LucideIcon } from 'lucide-react';

export interface FeatureCard {
  icon: LucideIcon;
  title: string;
  description: string;
  colorClass: 'primary' | 'secondary' | 'tertiary';
}