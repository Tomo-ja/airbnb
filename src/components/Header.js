import logo from '../image/icon_earth.svg'

export default function Header (){
	return(
		<div className="header">
			<img src={logo} alt="logo" />
			<p>Travel journal.</p>
		</div>
	)
}