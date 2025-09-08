export const LocalBusiness = () => {
	return (
		<div className="flex flex-col md:flex-row items-center py-10 px-5 gap-10 bg-gray-100">
			<div className="md:w-1/3 text-left">
				<h3 className="text-4xl font-semibold mb-4">
					Helping a local <span className="text-green-700 font-bold">business reinvent itself</span>
				</h3>
				<p className="text-gray-600">We reached here with our hard work and dedication</p>
			</div>

			<div className="md:w-2/3 grid grid-cols-2 gap-6">
				<div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
					<img
						src="/src/media/icons/user-icon.png"
						alt=""
						className="h-12 mb-4 transition-transform duration-300 hover:scale-110"
					/>
					<h4 className="text-2xl font-semibold mb-1">2,245,341</h4>
					<p className="text-gray-600">Members</p>
				</div>

				<div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
					<img
						src="/src/media/icons/hands-icons.png"
						alt=""
						className="h-12 mb-4 transition-transform duration-300 hover:scale-110"
					/>
					<h4 className="text-2xl font-semibold mb-1">46,328</h4>
					<p className="text-gray-600">Clubs</p>
				</div>
                
				<div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
					<img
						src="/src/media/icons/dedo-icon.png"
						alt=""
						className="h-12 mb-4 transition-transform duration-300 hover:scale-110"
					/>
					<h4 className="text-2xl font-semibold mb-1">828,867</h4>
					<p className="text-gray-600">Event Bookings</p>
				</div>

				<div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
					<img
						src="/src/media/icons/card-icon.png.png"
						alt=""
						className="h-12 mb-4 transition-transform duration-300 hover:scale-110"
					/>
					<h4 className="text-2xl font-semibold mb-1">1,926,436</h4>
					<p className="text-gray-600">Payments</p>
				</div>
			</div>
		</div>
	);
};
