import iconLocation from '../image/icon_location-pin.svg'
export default function Card (props){
	return(
		<section className="section">
			<img src={props.imageUrl} alt={props.title} />
			<div className="content">
				<p className="info"><img src={iconLocation} />
					<span>{props.location}</span>
					<a href={props.googleMapsUrl}>View on Google Maps</a>
				</p>
				<h1>{props.title}</h1>
				<p className="date">{props.startDate} - {props.endDate}</p>
				<p>{props.description}</p>
			</div>

		</section>
	)
}