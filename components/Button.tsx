/**
 * Button component
 */
type Props = {
  children: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
};

export default function Button(
  { children, href, onClick, variant = "primary" }: Props,
) {
  const base = "px-6 py-3 font-semibold";
  const variants = {
    primary: "bg-white text-gray-800 hover:bg-gray-200",
    secondary: "bg-gray-800 text-white hover:bg-gray-700",
  };
  const classes = `${base} ${variants[variant]}`;

  return href
    ? <a href={href} class={classes}>{children}</a>
    : (
      <button class={classes} onClick={onClick}>
        {children}
      </button>
    );
}
