function BtnOperador({ title, click, className }) {
    return (
        <button onClick={click} value={title} className={className}>{title}</button>
    )
}

export default BtnOperador    