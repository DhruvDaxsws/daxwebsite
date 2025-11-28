'use server';
/**
 * @fileOverview AI flow to suggest consulting services based on a business description.
 *
 * - suggestConsultingServices - Function to get consulting service suggestions.
 * - SuggestConsultingServicesInput - Input type for the suggestion function.
 * - SuggestConsultingServicesOutput - Output type for the suggestion function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestConsultingServicesInputSchema = z.object({
  businessDescription: z
    .string()
    .describe('A description of the client business and its needs.'),
});
export type SuggestConsultingServicesInput = z.infer<
  typeof SuggestConsultingServicesInputSchema
>;

const SuggestConsultingServicesOutputSchema = z.object({
  suggestions: z
    .string()
    .describe(
      'A list of suggested consulting services based on the business description.'
    ),
});
export type SuggestConsultingServicesOutput = z.infer<
  typeof SuggestConsultingServicesOutputSchema
>;

export async function suggestConsultingServices(
  input: SuggestConsultingServicesInput
): Promise<SuggestConsultingServicesOutput> {
  return suggestConsultingServicesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestConsultingServicesPrompt',
  input: {schema: SuggestConsultingServicesInputSchema},
  output: {schema: SuggestConsultingServicesOutputSchema},
  prompt: `Based on the following business description, suggest relevant consulting services that ConsultFast can provide:

Business Description: {{{businessDescription}}}

Consulting Service Suggestions:`, // Use triple curly braces for unescaped output
});

const suggestConsultingServicesFlow = ai.defineFlow(
  {
    name: 'suggestConsultingServicesFlow',
    inputSchema: SuggestConsultingServicesInputSchema,
    outputSchema: SuggestConsultingServicesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
