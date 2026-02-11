export default function Wrapper({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-6xl px-3 sm:px-6 md:px-16">{children}</div>;
}
