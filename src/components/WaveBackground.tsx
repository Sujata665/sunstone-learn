export function WaveBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute bottom-0 w-full"
        viewBox="0 0 1440 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0,160 C320,300,420,300,740,160 C1060,20,1120,20,1440,160 L1440,400 L0,400 Z"
          fill="hsl(240 50% 15%)"
          opacity="0.5"
        />
        <path
          d="M0,240 C240,100,420,100,720,240 C1020,380,1140,380,1440,240 L1440,400 L0,400 Z"
          fill="hsl(240 40% 25%)"
          opacity="0.3"
        />
        <path
          d="M0,320 C360,200,540,200,900,320 C1260,440,1320,440,1440,320 L1440,400 L0,400 Z"
          fill="hsl(236 60% 8%)"
          opacity="0.8"
        />
      </svg>
    </div>
  );
}
