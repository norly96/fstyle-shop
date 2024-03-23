interface Props {
  title: string;
  subtitle?: string;
  className?: string;
}

export const Title = ({ title, subtitle, className }: Props) => {
  return (
    <div className={`flex w-full px-5 sm:px-15 items-baseline justify-between border-b border-gray-200 pb-2 pt-2 ${className}`}>
      <h1>
        {title}
      </h1>
      <h2 className="font-light">
        {subtitle}
      </h2>
    </div>
  );
};
