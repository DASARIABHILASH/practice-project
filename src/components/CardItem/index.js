import './index.css'

const CardItem = props => {
  const {Cards} = props
  const {title, description, imgUrl, className} = Cards
  return (
    <li className={`${className} banner-li`}>
      <h1 className="h1">{title}</h1>
      <p className="p">{description}</p>
      <div className="image-card">
        <img src={imgUrl} alt={title} className="logo" />
      </div>
    </li>
  )
}
export default CardItem
