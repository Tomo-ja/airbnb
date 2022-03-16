export default function Card (props){
	return(
		<section>
			<img src={props.item.imageUrl} alt={props.item.title} />
		</section>
	)
}