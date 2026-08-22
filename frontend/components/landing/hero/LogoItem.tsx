type LogoItemProps = {
  name: string;
  hasIcon?: boolean;
};

export function LogoItem({ name, hasIcon = false }: LogoItemProps) {
  return (
    <div className="flex items-center gap-2 whitespace-nowrap px-8">
      {hasIcon && (
        <div className="h-6 w-6 shrink-0 rounded-sm bg-gray-300/70" aria-hidden="true" />
      )}
      <span className="text-base font-medium tracking-wide text-gray-300">{name}</span>
    </div>
  );
}
