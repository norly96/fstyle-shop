interface Props {
  title: string;
  subtitle?: string;
  className?: string;
}

export const Title = ({ title, subtitle, className }: Props) => {
  return (
    <div className={`flex w-full px-5 sm:px-15 items-baseline justify-between border-b border-gray-200 pb-2 pt-2 ${className}`}>
      <h1 className="text-3xl font-bold tracking-tight text-black">
        {title}
      </h1>
      <h2 className="text-2xl text-gray-800">
        {subtitle}
      </h2>
    </div>
  );
};
