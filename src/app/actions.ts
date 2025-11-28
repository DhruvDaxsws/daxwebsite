'use server';

import { suggestConsultingServices } from '@/ai/flows/suggest-consulting-services';
import { z } from 'zod';

// AI Suggester Action
const aiFormSchema = z.object({
  businessDescription: z.string().min(20, 'Please provide a more detailed description (at least 20 characters).'),
});

type AiState = {
  message?: string | null;
  suggestions?: string | null;
  errors?: {
    businessDescription?: string[];
  }
}

export async function getConsultingSuggestions(prevState: AiState, formData: FormData): Promise<AiState> {
  const validatedFields = aiFormSchema.safeParse({
    businessDescription: formData.get('businessDescription'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Invalid input.',
      suggestions: null,
    };
  }
  
  try {
    const result = await suggestConsultingServices({
      businessDescription: validatedFields.data.businessDescription,
    });
    return { message: 'Suggestions generated.', suggestions: result.suggestions, errors: {} };
  } catch (error) {
    console.error(error);
    return { message: 'An error occurred while generating suggestions. Please try again.', suggestions: null, errors: {} };
  }
}

// Contact Form Action
type ContactState = {
    success: boolean;
    message: string;
};

export async function submitContactForm(prevState: ContactState, formData: FormData): Promise<ContactState> {
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');
  
  if (!name || !email || !message) {
    return { success: false, message: 'Please fill out all fields.' };
  }
  
  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.toString())) {
      return { success: false, message: 'Please enter a valid email address.' };
  }

  // In a real app, you would integrate with an email service (e.g., SendGrid, Resend)
  // or save the submission to a database.
  console.log('Contact form submitted:', { name, email, message });
  
  return { success: true, message: "Thank you for your message! We'll get back to you soon." };
}
