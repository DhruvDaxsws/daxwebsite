'use client';
import Link from 'next/link';

export default function TermsOfUsePage() {
  return (
    <div className="bg-background">
      <section className="w-full py-16 md:py-24 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
              Terms of Use
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
              Please read these terms carefully before using our site.
            </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
            <p className="mb-4 text-gray-700 dark:text-gray-300">
                Welcome to the Dax Software Solutions, Inc. website. By accessing or using this Site in any way, including using any services, downloading materials, or registering on the site, you agree to and are bound by the terms and conditions set forth in this document and any changes thereto that Dax Software Solutions may publish from time to time (collectively, the "Terms of Use"). If you do not agree to all of the terms and conditions contained in the Terms of Use, do not access or use this Site.
            </p>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
                Dax Software Solutions may change the Terms of Use and other guidelines and rules posted on the Site from time to time at its sole discretion. Your continued access or use of the Site, or any materials or services, constitutes your acceptance of the changes.
            </p>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
                Your access and use of the Site, materials, and services will be subject to the most current version of the Terms of Use, rules, and guidelines posted on the Site at the time of such use. Please regularly check the "Terms of Use" link on the home page of daxsws.com to view the then-current terms. If you breach any of the Terms of Use, your authorization to access or use this Site, services, and materials automatically terminates, and any materials downloaded or printed from the Site in violation of the Terms of Use must be immediately destroyed.
            </p>
        </div>
      </section>
    </div>
  );
}
