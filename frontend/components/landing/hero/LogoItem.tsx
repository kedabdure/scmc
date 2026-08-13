type LogoItemProps = {
  name: string;
  hasIcon?: boolean;
};

export function LogoItem({ name, hasIcon = false }: LogoItemProps) {
  return (
    <div className="flex items-center gap-2 whitespace-nowrap px-8">
      {hasIcon && (
        <div className="h-5 w-5 flex-shrink-0 rounded-sm bg-white/10" aria-hidden="true" />
      )}
      <span className="text-sm font-medium tracking-wide text-white/50">{name}</span>
    </div>
  );
}
