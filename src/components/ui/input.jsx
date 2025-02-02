// src/components/ui/input.jsx
export function Input({ type = "text", icon, className = "", ...props }) {
  return (
    <div className={`flex items-center border border-gray-300 rounded px-3 py-2 ${className}`}>
      {icon && <span className="mr-2">{icon}</span>}
      <input type={type} className="w-full outline-none" {...props} />
    </div>
  );
}
