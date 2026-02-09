type stateType = {
  value?: string;
  icon?: React.ReactNode;
  title?: string;
  message?: string;
};

export default function EmptyState({ value, title, icon, message }: stateType) {
  return (
    <div className="bg-background flex w-full flex-col items-center rounded-md border border-dashed border-zinc-200 px-6 py-8 text-center dark:border-zinc-700">
      <div className="mb-6 text-4xl text-zinc-500">
        {icon || <img width={80} height={80} src="public/travolta.gif" alt="Travolta confused" />}
      </div>
      <h3 className="mb-3 text-xl font-bold tracking-tight">{title ?? `No ${value} Found`}</h3>
      <p className="text-foreground-2 mb-6 ml-4 max-w-sm text-sm">
        {message ??
          `There are no ${value && value.toLowerCase()} available at this time. Check back
        again.`}
      </p>
    </div>
  );
}
