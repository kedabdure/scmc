export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-8">
          About SCMC
        </h1>

        <div className="space-y-6 text-gray-700 text-lg">
          <p>
            Welcome to SCMC - a next-generation platform designed to revolutionize
            the way you work and collaborate.
          </p>

          <p>
            Our mission is to provide cutting-edge solutions that empower teams
            to achieve more with intuitive tools and seamless workflows.
          </p>

          <div className="bg-gray-50 p-8 rounded-lg mt-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Modern and intuitive user interface</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Powerful features built for scale</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Reliable and secure platform</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
