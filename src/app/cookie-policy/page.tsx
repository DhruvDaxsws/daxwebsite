'use client';
import Link from 'next/link';

export default function CookiePolicyPage() {
  return (
    <div className="bg-background">
      <section className="w-full py-16 md:py-24 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
              Cookie Policy
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
              How we use cookies to improve your experience.
            </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
            <p className="mb-4 text-gray-700 dark:text-gray-300">
                This website uses cookies. By using this website and agreeing to this policy, you consent to Dax Software Solutions' use of cookies in accordance with the terms of this policy.
            </p>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
                Cookies are files sent by web servers to web browsers and are stored by the web browsers.
            </p>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
                The information is then sent back to the server each time the browser requests a page from the server. This enables a web server to identify and track web browsers.
            </p>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
                There are two main kinds of cookies: session cookies and persistent cookies. Session cookies are deleted from your computer when you close your browser, whereas persistent cookies remain stored on your computer until deleted, or until they reach their expiry date.
            </p>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
                For any questions or concerns about our cookie policy, please <Link href="/contact" className="text-primary hover:underline">contact us</Link>.
            </p>
        </div>
      </section>
    </div>
  );
}
