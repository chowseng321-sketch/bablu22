
import React from 'react';
import { 
  CreditCard, 
  FileText, 
  Image as ImageIcon, 
  Printer, 
  Globe, 
  ShieldCheck, 
  Zap, 
  Clock 
} from 'lucide-react';
import { Service, Testimonial, FAQ } from './types';

export const WHATSAPP_NUMBER = '919954735419';
export const SHOP_NAME = 'Bublu Xerox Point';
export const SHOP_TAGLINE = 'High Quality PVC Card Printing & Digital Services';

export const SERVICES: Service[] = [
  {
    id: 'pvc-card',
    title: 'PVC Card Printing',
    description: 'High-quality, durable PVC cards including Aadhaar, ID cards, and custom designs.',
    icon: 'credit-card',
    fullDetails: 'We use industrial-grade thermal printers to ensure your PVC cards are waterproof, smudge-proof, and long-lasting.'
  },
  {
    id: 'pan-card',
    title: 'PAN Card Services',
    description: 'New application, correction, and reprint services with expert guidance.',
    icon: 'file-text',
    fullDetails: 'Fast-track processing for both new PAN cards and corrections. We handle the documentation so you don\'t have to.'
  },
  {
    id: 'photo-print',
    title: 'Photo Printing',
    description: 'Studio-quality photo prints in various sizes: Passport, 4x6, 5x7, and more.',
    icon: 'image',
    fullDetails: 'Ultra-HD photo printing on premium glossy or matte paper. Perfect for official use or memories.'
  },
  {
    id: 'xerox',
    title: 'Xerox & Printout',
    description: 'B&W and color Xerox, bulk document printing from mobile/email/USB.',
    icon: 'printer',
    fullDetails: 'High-speed printing and xerox services for students and professionals. Bulk discounts available.'
  },
  {
    id: 'online-services',
    title: 'Online Form Services',
    description: 'Competitive exam forms, scholarship applications, and govt portal assistance.',
    icon: 'globe',
    fullDetails: 'Expert help for all types of online registrations, job applications, and bill payments.'
  }
];

export const GALLERY_ITEMS = [
  {
    id: 1,
    title: 'Durable PVC Aadhaar Card',
    category: 'PVC Cards',
    image: 'https://images.unsplash.com/photo-1621504450181-5d356f63d3ee?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    title: 'Matte Finish Passport Photos',
    category: 'Photo Print',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    title: 'Professional Laminated Docs',
    category: 'Lamination',
    image: 'https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 4,
    title: 'Crystal Clear Color Prints',
    category: 'Xerox & Color',
    image: 'https://images.unsplash.com/photo-1562654501-a0ccc0af3fb1?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 5,
    title: 'Custom Staff ID Cards',
    category: 'PVC Cards',
    image: 'https://images.unsplash.com/photo-1611095973763-4140195a24c9?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 6,
    title: 'HD Glossy Photo Album',
    category: 'Photo Print',
    image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&q=80&w=800',
  }
];

export const TESTIMONIALS: Testimonial[] = [
  { id: '1', name: 'Rahul Das', text: 'Best place for PVC Aadhaar cards. The quality is amazing and very durable.', rating: 5 },
  { id: '2', name: 'Anita Sharma', text: 'Very helpful with my PAN card correction. They made the process so simple.', rating: 5 },
  { id: '3', name: 'Sumit Roy', text: 'Quick service for photo printing. Got my passport photos in just 5 minutes!', rating: 4 }
];

export const FAQS: FAQ[] = [
  { question: 'Do you print Aadhaar cards on PVC?', answer: 'Yes, we provide high-quality PVC Aadhaar card printing that is waterproof and long-lasting.' },
  { question: 'What documents are needed for a new PAN card?', answer: 'Generally, you need proof of identity (like Aadhaar), proof of address, and proof of date of birth.' },
  { question: 'Can I send files for printing via WhatsApp?', answer: 'Absolutely! You can use our Online Order page or directly WhatsApp your documents to 9954735419.' },
  { question: 'How long does photo printing take?', answer: 'Passport size photos take about 5-10 minutes. Larger prints may take slightly longer depending on the quantity.' }
];