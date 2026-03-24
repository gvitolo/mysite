import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
};

export function Section({ id, children, className, containerClassName }: SectionProps) {
  return (
    <section id={id} className={cn("relative scroll-mt-24", className)}>
      <div className={cn("mx-auto max-w-6xl px-5 sm:px-6 lg:px-8", containerClassName)}>
        {children}
      </div>
    </section>
  );
}
