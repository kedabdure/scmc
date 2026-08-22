type VerticalLineProps = {
  variant?: "light" | "dark";
  className?: string;
};

export function VerticalLine({ variant = "light", className = "" }: VerticalLineProps) {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-y-0 left-0 w-px ${
        variant === "light" ? "bg-white/15" : "bg-black/15"
      } ${className}`}
    />
  );
}
