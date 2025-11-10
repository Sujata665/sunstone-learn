export function PalmTreeIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="currentColor"
    >
      <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M50 70 L50 35" stroke="currentColor" strokeWidth="3" fill="none" />
      <path d="M50 35 Q30 20, 25 10 M50 35 Q45 15, 40 8 M50 35 Q50 10, 50 5" 
            stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M50 35 Q70 20, 75 10 M50 35 Q55 15, 60 8" 
            stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <ellipse cx="50" cy="73" rx="6" ry="3" fill="currentColor" opacity="0.3" />
    </svg>
  );
}
