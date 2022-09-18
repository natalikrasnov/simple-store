
export function CustomInput({title, buttonTitle, placeholder, onSubmit }) {
    
    return (
        <form className="input" onSubmit={onSubmit}>
            <label>{title}</label>
            <div className="input_inner">
                <input placeholder={placeholder} />
                <button>{buttonTitle}</button>
            </div>
        </form>
    )
}