import { Community } from "../../components/Community"
import { Hero } from "../../components/Hero/Hero"
import { LocalBusiness } from "../../components/LocalBusiness"
import { OurClients } from "../../components/OurClients"
import { YearsSection } from "../../components/YearsSection"

export const HomePage = () => {
	return (
		<div>
			<Hero />

			<OurClients />

			<Community />

			<YearsSection />

			<LocalBusiness />
		</div>
	)
}