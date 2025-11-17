
interface AboutPageProps {
  className?: string;
}

export default function AboutPage({ className }: AboutPageProps) {
  return (
    <div className={`${className} flex flex-col items-start justify-start w-full`}>
      <span className="w-50 h-1 mb-2 bg-cyan-500"></span>
      <h1 className="text-3xl">About <span className="text-cyan-500">Me</span></h1>
    </div>
  );
}
