import imgFuji from '../image/img_fuji.jpg'
import imgGeiran from '../image/img_geirangerfjord.jpg'
import imgOpera from '../image/img_opera-house.jpg'
// eslint-disable-next-line import/no-anonymous-default-export
export default [
	{
		id: "1",
		title: "Mount Fuji",
		location: "Japan",
		googleMapsUrl: "https://goo.gl/maps/1wff9jAYee5oK4ro6",
		startDate: "12 Jan, 2021",
		endDate: "21 Jan, 2021",
		description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
		imageUrl: {imgFuji}
	},
	{
		id: "2",
		title: "Sydney Opera House",
		location: "Australia",
		googleMapsUrl: "https://goo.gl/maps/jKhFUGVkVoDk3Wh28",
		startDate: "27 May, 2021",
		endDate:"8 Jun, 2021",
		description: "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings",
		imageUrl: {imgOpera}
	},
	{
		id: "3",
		title: "Geirangerfjord",
		location: "Norway",
		googleMapsUrl: "https://goo.gl/maps/RvA7iiMMPMWKgFcDA",
		startDate: "01 Oct, 2021",
		endDate: "18 Nov, 2021",
		description: "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.",
		imageUrl: {imgGeiran}
	}
]