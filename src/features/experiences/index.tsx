import { useTranslation } from 'react-i18next';

export default function Experiences() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-4">
      <p className="text-foreground-2 font-[Proxima_Nova_Bold] text-3xl">
        {t('experiences.title')}
      </p>
      <p className="text-foreground-2 text-lg">This section is under construction.</p>
    </div>
  );
}
