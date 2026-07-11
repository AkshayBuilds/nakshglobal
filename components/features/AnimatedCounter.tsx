interface AnimatedCounterProps {
  value: number;
  suffix?: string;
}

export default function AnimatedCounter({ value, suffix = "" }: AnimatedCounterProps) {
  return (
    <span>
      {value.toLocaleString()}{suffix}
    </span>
  );
}
