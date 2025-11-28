"use client";

import { useFormState, useFormStatus } from 'react-dom';
import { getConsultingSuggestions } from '@/app/actions';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Bot, Loader2 } from 'lucide-react';
import { useEffect, useRef } from 'react';

const initialState = {
  message: null,
  suggestions: null,
  errors: {},
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating...</> : 'Get Suggestions'}
    </Button>
  );
}

export function AiSuggester() {
  const [state, formAction] = useFormState(getConsultingSuggestions, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if(state.message && state.suggestions) {
        formRef.current?.reset();
    }
  }, [state]);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="font-headline text-xl md:text-2xl">AI-Powered Consultation</CardTitle>
        <CardDescription>
          Describe your business and challenges, and our AI will suggest relevant services.
        </CardDescription>
      </CardHeader>
      <form action={formAction} ref={formRef}>
        <CardContent>
          <Textarea
            name="businessDescription"
            placeholder="e.g., We are a startup in the e-commerce space struggling with user acquisition and retention..."
            rows={6}
            required
            aria-describedby="description-error"
          />
          {state?.errors?.businessDescription && (
            <p id="description-error" className="text-sm font-medium text-destructive mt-2">
              {state.errors.businessDescription[0]}
            </p>
          )}
        </CardContent>
        <CardFooter>
          <SubmitButton />
        </CardFooter>
      </form>
      {state?.suggestions && (
        <div className="p-6 pt-0">
          <Alert>
            <Bot className="h-4 w-4" />
            <AlertTitle className="font-headline">Our Recommendations</AlertTitle>
            <AlertDescription>
              <div className="prose prose-sm dark:prose-invert max-w-none text-foreground" dangerouslySetInnerHTML={{ __html: state.suggestions.replace(/\n/g, '<br />') }}/>
            </AlertDescription>
          </Alert>
        </div>
      )}
      {state?.message && !state.suggestions && state?.errors && Object.keys(state.errors).length === 0 && (
         <div className="p-6 pt-0">
            <Alert variant='destructive'>
                <Bot className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                {state.message}
                </AlertDescription>
            </Alert>
         </div>
      )}
    </Card>
  );
}
