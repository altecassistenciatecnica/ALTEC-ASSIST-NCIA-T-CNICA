import { LucideIcon } from 'lucide-react';

export enum SectionType {
  HOME = 'HOME',
  TIPS = 'TIPS',
  PROBLEMS = 'PROBLEMS',
  ENERGY = 'ENERGY',
  CONTACT = 'CONTACT',
  CHAT = 'CHAT'
}

export interface CardData {
  title: string;
  description: string;
  icon?: LucideIcon;
}

export interface ProblemData {
  title: string;
  causes: string;
  icon: LucideIcon;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}