// Write your code here.
// Write your code here.
import './index.css'

const BannerCard = props => {
  const {details} = props
  const {headerText, description, className} = details

  return (
    <li className={`card ${className}`}>
      <div className="box">
        <h1 className="head">{headerText}</h1>
        <p className="desc">{description}</p>
        <button className="button" type="submit">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCard
