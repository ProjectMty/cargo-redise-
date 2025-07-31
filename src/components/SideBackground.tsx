type SideBackgroundProps = {
  position: "left" | "right";
  className?: string;
  height?: string;
};

export default function SideBackground({
  position,
  className = "",
  height = "h-[500px] md:h-[540px]",
}: SideBackgroundProps) {
  const base = `bg-[#00AEEF] w-full ${height}`;
  const sideStyle =
    position === "left"
      ? "rounded-r-[160px]"
      : "rounded-l-[160px]";

  return <div className={`${base} ${sideStyle} ${className}`} />;
}
