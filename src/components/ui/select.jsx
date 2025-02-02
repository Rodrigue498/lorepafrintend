// src/components/ui/select.jsx
export function Select({ options = [], value, onChange, className = "", ...props }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className={`border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    >
      {options.length > 0 ? (
        options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))
      ) : (
        <option value="">No options available</option>
      )}
    </select>
  );
}
