// src/components/atoms/Button.jsx

/**
 * Button — reusable button component
 * Props:
 *   variant  : 'primary' | 'white'        (default: 'primary')
 *   block    : boolean — lebar penuh       (default: false)
 *   type     : 'button' | 'submit'        (default: 'button')
 *   onClick  : function
 *   children : konten tombol
 *   className: class tambahan (opsional)
 */
function Button({
  variant = 'primary',
  block = false,
  type = 'button',
  onClick,
  children,
  className = '',
}) {
  const classes = [
    'btn',
    `btn-${variant}`,
    block ? 'btn-block' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
