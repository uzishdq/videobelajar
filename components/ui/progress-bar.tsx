type ProgressBarProps = {
  value: number; // 0 - 100
  height?: string; // contoh: "h-2", "h-3", "h-4"
  showLabel?: boolean;
};

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  height = "h-1",
}) => {
  // clamp 0 - 100
  const progress = Math.min(100, Math.max(0, value));

  return (
    <div className="w-full mr-2">
      <div
        className={`w-full ${height} bg-orange-500/30 rounded-full overflow-hidden`}
      >
        <div
          className="h-full bg-orange-500 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};
