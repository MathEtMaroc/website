export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
      <div className="max-w-md">
        <div className="relative w-32 h-32 mx-auto mb-6">
          <div className="absolute inset-0 border-4 border-dashed border-primary-900 rounded-full animate-spin-slow"></div>
          <div className="absolute inset-6 bg-primary-900 rounded-full flex items-center justify-center shadow-lg text-white text-4xl">
            🚧
          </div>
        </div>

        <h1 className="text-4xl font-bold mb-4 text-primary-900">Conferences</h1>
        <p className="text-primary-900 text-lg">
          This section is currently under construction.<br />
          We're building something great!
        </p>
      </div>
    </main>
  );
}
