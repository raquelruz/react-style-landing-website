import { Community } from "../../components/Community"
import { Hero } from "../../components/Hero/Hero"
import { OurClients } from "../../components/OurClients"

export const HomePage = () => {
	return (
		<div>
			<Hero />

			<OurClients />

			<Community />
		</div>
	)
}