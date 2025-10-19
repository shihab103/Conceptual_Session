export default function About() {
  return (
    <div className="max-w-5xl mx-auto my-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
      <p className="text-center text-gray-600 mb-12">
        Learn more about our company, mission, and the services we provide.
      </p>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&q=80"
            alt="About us"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p className="text-gray-700">
            Our mission is to provide the best car rental service with top-notch customer support. 
            We strive to make every journey safe, comfortable, and memorable.
          </p>

          <h2 className="text-2xl font-semibold mt-4">Our Vision</h2>
          <p className="text-gray-700">
            To be the most trusted and convenient car rental platform for everyone, 
            offering a wide range of vehicles for any occasion.
          </p>

          <h2 className="text-2xl font-semibold mt-4">Why Choose Us</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Wide variety of cars to choose from</li>
            <li>Affordable rates and flexible plans</li>
            <li>Reliable and secure service</li>
            <li>Easy booking and instant support</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
