export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-gray-900 text-white p-6">
        <h2 className="text-2xl font-bold mb-8">SCMC Dashboard</h2>
        <nav className="space-y-4">
          <a href="/dashboard" className="block py-2 px-4 rounded hover:bg-gray-800">
            Overview
          </a>
          <a href="/dashboard/analytics" className="block py-2 px-4 rounded hover:bg-gray-800">
            Analytics
          </a>
          <a href="/dashboard/settings" className="block py-2 px-4 rounded hover:bg-gray-800">
            Settings
          </a>
        </nav>
      </aside>

      {/* Main content */}
      <main className="ml-64 p-8">
        {children}
      </main>
    </div>
  );
}
