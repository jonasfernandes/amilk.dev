import SettingsIcon from '@/assets/icons/Settings';
import Magnetic from '@/components/effects/Magnetic';

export default function Config() {
  return (
    <Magnetic>
      <button className="text-background bg-foreground-2 fixed right-10 bottom-10 h-10 w-10 rounded-full p-1.5">
        <SettingsIcon />
      </button>
    </Magnetic>
  );
}
