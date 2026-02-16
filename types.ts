
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  fullDetails?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
}

export interface FAQ {
  question: string;
  answer: string;
}