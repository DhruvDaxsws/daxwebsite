import * as React from 'react';

const Logo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="hsl(var(--primary))"
      d="M12 2L2 7l10 5 10-5-10-5z"
    />
    <path
      fill="hsl(var(--foreground))"
      opacity={0.6}
      d="M2 17l10 5 10-5-10-5-10 5z"
    />
    <path
      fill="hsl(var(--foreground))"
      d="M2 12l10 5 10-5-10-5-10 5z"
    />
  </svg>
);

export default Logo;
