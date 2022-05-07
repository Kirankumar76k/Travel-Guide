import './index.css'

const TravelCard = props => {
  const {eachDetails} = props
  const {id, description, imageUrl, name} = eachDetails
  return (
    <li key={id} className="item">
      <img src={imageUrl} alt={name} className="imageUrl" />
      <h1 className="name">{name}</h1>
      <p className="description">{description}</p>
    </li>
  )
}
export default TravelCard
