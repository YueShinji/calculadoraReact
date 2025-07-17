function BtnNumber({ title, click, className }) {
    return (
        <button onClick={click} value={title} className={className}>{title}</button>
    )
}

export default BtnNumber    