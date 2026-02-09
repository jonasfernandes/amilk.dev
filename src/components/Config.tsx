import SettingsIcon from '@/assets/icons/Settings';
import Magnetic from '@/components/effects/Magnetic';

export default function Config() {
  return (
    <Magnetic>
      <button className="fixed bottom-10 right-10 w-10 h-10 text-background bg-foreground-2 p-1.5 rounded-full">
        <SettingsIcon />
      </button>
    </Magnetic>
  );
}
