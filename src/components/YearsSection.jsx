export const YearsSection = () => {
    return (
        <div className="flex items-center justify-center gap-10 px-8 py-16">
            <div className="flex-shrink-0">
                <img 
                    src="/src/media/images/illustration-two.png" 
                    alt="Illustration" 
                    className="h-100 w-100 object-contain"
                />
            </div>

            <div className="max-w-xl">
                <h3 className="text-3xl font-semibold mb-4">
                    The unseen of spending three years at Pixelgrade
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
                </p>
                <button className="px-6 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition">
                    Learn more
                </button>
            </div>
        </div>
    )
}