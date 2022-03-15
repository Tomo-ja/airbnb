import image from '../image/img_hero.png'

function Hero (){
	return (
		<section className="hero">
			<img src={image}/>
			<h1>Online Expriences</h1>
			<p>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home</p>
		</section>
	)
}

export default Hero

