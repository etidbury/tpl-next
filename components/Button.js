export default ({ children, onClick, disabled }) => {
    return (
        <div
            className={disabled ? 'disabled button' : 'button'}
            onClick={() => {
                if (!disabled) {
                    onClick()
                }
            }}
        >
            {children}
        </div>
    )
}
