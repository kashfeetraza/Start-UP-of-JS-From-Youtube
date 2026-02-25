
export interface ContactFormData {
  name: string;
  email: string;
  service: string;
  message: string;
}

export interface AssistantMessage {
  role: 'user' | 'assistant';
  content: string;
}

export enum ServiceType {
  WEB_DEV = 'Web Development',
  MOBILE_DEV = 'Mobile App Development',
  UI_UX = 'UI/UX Design',
  MARKETING = 'Digital Marketing',
  OTHER = 'Other'
}
