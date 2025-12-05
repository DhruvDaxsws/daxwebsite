
'use client';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { notFound, useParams } from 'next/navigation';
import React from 'react';

const CHAPTERS = [
    { id: 'chapter-1', title: 'Understanding User Needs' },
    { id: 'chapter-2', title: 'Stakeholder Engagement' },
    { id: 'chapter-3', title: 'Communication' },
    { id: 'chapter-4', title: 'Change Management' },
    { id: 'chapter-5', title: 'User Adoption' },
    { id: 'chapter-6', title: 'Problem Solving' },
    { id: 'chapter-7', title: 'Feedback and Continuous Improvement' },
    { id: 'chapter-8', title: 'Reduced Resistance' },
];

export default function DownloadGuidePage() {
  const params = useParams();
  const slug = params.slug as string;
  const chapter = CHAPTERS.find((c) => c.id === slug);
  const image = PlaceHolderImages.find(img => img.id === 'guide-download');

  if (!chapter) {
    notFound();
  }

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline mb-8">
              Get your Empathetic ERP Guide for <br />
              <span className="text-primary">{chapter.title}</span>
            </h1>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name <span className="text-red-500">*</span></Label>
                  <Input id="first-name" name="first-name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name <span className="text-red-500">*</span></Label>
                  <Input id="last-name" name="last-name" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
                <Input id="email" name="email" type="email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company-name">Company Name</Label>
                <Input id="company-name" name="company-name" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="country-code">Country Code</Label>
                  <Select name="country-code" defaultValue="us">
                    <SelectTrigger id="country-code">
                      <SelectValue placeholder="Select a country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States (+1)</SelectItem>
                      <SelectItem value="ca">Canada (+1)</SelectItem>
                      <SelectItem value="gb">United Kingdom (+44)</SelectItem>
                      <SelectItem value="in">India (+91)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone-number">Phone Number</Label>
                  <Input id="phone-number" name="phone-number" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="extension">Extension</Label>
                  <Input id="extension" name="extension" />
                </div>
              </div>
              
              <div className="text-xs text-muted-foreground space-y-4">
                  <p>DAX Software Solutions, Inc is committed to protecting and respecting your privacy, and we’ll only use your personal information to administer your account and to provide the products and services you requested from us. From time to time, we would like to contact you about our products and services, as well as other content that may be of interest to you. If you consent to us contacting you for this purpose, please tick below to say how you would like us to contact you</p>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox id="communications" />
                <Label htmlFor="communications" className="text-xs text-muted-foreground font-normal">
                  I agree to receive other communications from DAX Software Solutions, Inc.
                </Label>
              </div>
              <div className="text-xs text-muted-foreground space-y-4">
                 <p>You can unsubscribe from these communications at any time. For more information on how to unsubscribe, our privacy practices, and how we are committed to protecting and respecting your privacy, please review our Privacy Policy.</p>
                 <p>By clicking submit below, you consent to allow DAX Software Solutions, Inc to store and process the personal information submitted above to provide you the content requested.</p>
              </div>

              <Card className="p-4 bg-secondary/30">
                <Label htmlFor="captcha">Enter the characters you see <span className="text-red-500">*</span></Label>
                 <div className="flex justify-between items-center mt-2">
                    <div>
                        <a href="#" className="text-xs text-primary hover:underline">New</a> | <a href="#" className="text-xs text-primary hover:underline">Audio</a>
                    </div>
                    {/* Placeholder for CAPTCHA image */}
                    <div className="w-32 h-12 bg-gray-300 flex items-center justify-center">
                        <p className="text-lg font-bold tracking-widest text-gray-600">JRG</p>
                        <p className="text-lg font-bold tracking-widest text-gray-600 -skew-x-12">WXV</p>
                    </div>
                </div>
                 <Input id="captcha" name="captcha" className="mt-2" required/>
              </Card>

              <Button type="submit" size="lg">Submit</Button>
            </form>
          </div>
          <div className="hidden md:flex items-center justify-center">
             {image && (
                <Image
                    src={image.imageUrl}
                    alt={image.description}
                    width={500}
                    height={500}
                    className="object-contain"
                    data-ai-hint={image.imageHint}
                />
             )}
          </div>
        </div>
      </div>
    </div>
  );
}
