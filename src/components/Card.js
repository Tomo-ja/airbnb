import starIcon from '../image/icon_star.svg'
function Card (props){
	return(
		<div className="card">
			<img src={props.img} />
			<div className="status">
				<img src={starIcon} />
				<span>{props.rating}</span>
				<span className="gray">({props.reviewCount}) ・ </span>
				<span className="gray">{props.country}</span>
			</div>
			<p>{props.title}</p>
			<p><span className="bold">From ${props.price}</span> / person</p>
		</div>

	)
}
export default Card
