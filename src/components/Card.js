import image from '../image/img_make-up.jpg'
import starIcon from '../image/icon_star.svg'
function Card (){
	return(
		<div className="card">
			<img src={image} />
			<div className="status">
				<img src={starIcon} />
				<span>5.0</span>
				<span className="gray">(6) ・ </span>
				<span className="gray">USA</span>
			</div>
			<p>Life lessons with Katie Zaferes</p>
			<p><span className="bold">From $136</span> / person</p>
		</div>

	)
}
export default Card