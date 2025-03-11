import { User } from '../types';

export const mockUsers: User[] = [
  {
    id: '1',
    displayName: 'Sarah Johnson',
    email: 'sarah.johnson@company.com',
    jobTitle: 'Senior Software Engineer',
    photoUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    isActive: true
  },
  {
    id: '2',
    displayName: 'Michael Chen',
    email: 'michael.chen@company.com',
    jobTitle: 'Product Manager',
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    isActive: true
  },
  {
    id: '3',
    displayName: 'Emily Rodriguez',
    email: 'emily.rodriguez@company.com',
    jobTitle: 'UX Designer',
    photoUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    isActive: false
  }
];