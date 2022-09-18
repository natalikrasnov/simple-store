export function AboutAnswer({img, title, info}) {
    return (
        <div className="about_answer">
            <img src={img} alt={title} />
            <label className="title">{title}</label>
            {info && <p className="info">{info}</p>}
        </div>
    )
}