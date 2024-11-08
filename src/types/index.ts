export interface User {
  id: string;
  username: string;
  email: string;
  role: 'user' | 'creator';
  avatar?: string;
  bio?: string;
}

export interface Post {
  id: string;
  creatorId: string;
  title: string;
  content: string;
  mediaUrl?: string;
  createdAt: string;
  isPremium: boolean;
}

export interface Subscription {
  id: string;
  userId: string;
  creatorId: string;
  status: 'active' | 'expired';
  startDate: string;
  endDate: string;
}