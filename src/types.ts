export type Provider = 'AT&T' | 'Spectrum' | 'Xfinity' | 'Comcast' | 'Dish TV' | 'DirecTV';

export type IssueCategory = 'Slow Internet' | 'Roaming & Signal Drops' | 'Inflated Monthly Bills' | 'TV Picture Quality' | 'Other Connection Issues';

export interface Lead {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  provider: Provider;
  issue: IssueCategory;
  submittedAt: string;
  source: 'form' | 'chatbot';
}

export interface ChatMessage {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
  isQuickReply?: boolean;
}

export interface Review {
  id: string;
  fullName: string;
  city: string;
  state: string;
  provider: Provider;
  rating: number;
  text: string;
  issueResolved: string;
}
