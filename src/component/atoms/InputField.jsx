// src/components/atoms/InputField.jsx

/**
 * InputField — reusable input component
 * Props:
 *   label        : string — teks label
 *   id           : string — id input (juga dipakai sebagai name)
 *   type         : string — tipe input (default: 'text')
 *   placeholder  : string
 *   icon         : JSX — ikon di sebelah kiri (opsional)
 *   trailingIcon : JSX — elemen di sebelah kanan, misal toggle password (opsional)
 *   hint         : string — pesan hint/error di bawah input (opsional)
 *   isError      : boolean — jika true, hint berwarna merah
 *   value        : string — nilai input (controlled)
 *   onChange     : function — handler perubahan nilai
 */
function InputField({
  label,
  id,
  type = 'text',
  placeholder,
  icon,
  trailingIcon,
  hint,
  isError = false,
  value,
  onChange,
  ...rest
}) {
  return (
    <div className="field">
      {label && <label htmlFor={id}>{label}</label>}

      <div className="input-wrap">
        {icon && <span className="icon-leading">{icon}</span>}

        <input
          type={type}
          id={id}
          name={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          {...rest}
        />

        {trailingIcon && trailingIcon}
      </div>

      {hint && (
        <span className={`field-hint ${isError ? 'error' : ''}`}>
          {hint}
        </span>
      )}
    </div>
  )
}

export default InputField
