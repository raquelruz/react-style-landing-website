export const HowDesign = () => {
	return (
		<div className="flex items-center justify-center gap-10 px-8 py-16">
			<div className="flex-shrink-0">
				<img
					src="/src/media/images/illustration-three.png"
					alt="Illustration"
					className="h-100 w-100 object-contain"
				/>
			</div>

			<div className="max-w-xl">
				<h3 className="text-3xl font-semibold mb-4">How to design your site footer like we did</h3>
				<p className="text-gray-600 mb-6 leading-relaxed">
					Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie,
					massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis.
					In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In
					euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo
					faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero.
					Donec consectetur faucibus ipsum id gravida.
				</p>
				<button className="px-6 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition">
					Learn more
				</button>
			</div>
		</div>
	);
};
