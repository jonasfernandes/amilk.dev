export default function SaluteHand() {
  return (
    <span
      className={`inline-block origin-[70%_70%] transition-transform duration-300 animate-wave`}
      role="img"
      aria-label="Waving hand"
      style={{
        display: 'inline-block',
        transform: 'rotate(0deg)',
      }}
    >
      👋
    </span>
  );
}
