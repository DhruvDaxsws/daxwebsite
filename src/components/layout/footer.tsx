import Link from 'next/link';
import Logo from '@/components/icons/logo';
import { NAV_LINKS } from '@/lib/content';

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Logo />
              <span className="font-bold text-lg font-headline">ConsultFast</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Accelerating Your Business Growth
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:col-span-2 md:grid-cols-4">
            <div>
              <h4 className="font-medium font-headline">Services</h4>
              <ul className="mt-4 space-y-2 text-sm">
                <li><Link href="/services#strategy" className="text-muted-foreground hover:text-foreground">Business Strategy</Link></li>
                <li><Link href="/services#analysis" className="text-muted-foreground hover:text-foreground">Market Analysis</Link></li>
                <li><Link href="/services#efficiency" className="text-muted-foreground hover:text-foreground">Operational Efficiency</Link></li>
                <li><Link href="/services#development" className="text-muted-foreground hover:text-foreground">Organizational Development</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium font-headline">Company</h4>
              <ul className="mt-4 space-y-2 text-sm">
                 {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                        <Link href={link.href} className="text-muted-foreground hover:text-foreground">{link.label}</Link>
                    </li>
                 ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium font-headline">Legal</h4>
              <ul className="mt-4 space-y-2 text-sm">
                <li><Link href="#" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ConsultFast, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
