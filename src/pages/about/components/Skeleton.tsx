export default function Skeleton() {
  return (
    <>
      {[...Array(4)].map((_, index) => (
        <li
          key={index}
          className="text-foreground-2 relative flex max-w-2xl animate-pulse items-start gap-x-8"
        >
          <div className="bg-github-container border-secondary after:bg-secondary relative grid min-h-20 min-w-20 place-items-center rounded-md border after:absolute after:top-[50%] after:left-19.75 after:h-px after:w-4">
            <div className="h-13 w-13 rounded-sm bg-zinc-300 object-cover" />
          </div>
          <div className="before:bg-secondary relative flex h-full w-full animate-pulse flex-col items-start before:absolute before:top-0 before:-left-4 before:h-full before:w-px">
            <div className="mb-2 h-5 w-1/2 rounded bg-zinc-300" />
            <div className="mb-2 h-4 w-1/3 rounded bg-zinc-300" />
            <div className="mb-2 h-3 w-1/4 rounded bg-zinc-300" />
            <div className="mt-2 h-3 w-full rounded bg-zinc-300" />
            <div className="my-2 h-3 w-full rounded bg-zinc-300" />
            <div className="mb-2 h-3 w-5/6 rounded bg-zinc-300" />
          </div>
        </li>
      ))}
    </>
  );
}
