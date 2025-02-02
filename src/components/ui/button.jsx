// src/components/ui/button.jsx
export function Button({ variant = "default", icon, className = "", children, ...props }) {
  const baseStyles = "px-4 py-2 rounded transition-all";
  const variants = {
    default: "bg-gray-500 text-white hover:bg-gray-600",
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    outline: "border border-gray-500 text-gray-500 hover:bg-gray-100",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
}
