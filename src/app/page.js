export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="max-w-3xl text-center space-y-6">
        <h1 className="text-4xl font-bold">
          Next.js Server-side Pagination Demo
        </h1>

        <p className="text-gray-600">
          This project demonstrates how backend pagination works using a fake
          database (<code>products.json</code>) and a Next.js API Route
          (<code>route.js</code>).
        </p>

        <div className="text-left bg-gray-100 p-6 rounded-lg">
          <h2 className="font-semibold mb-3">Test the API</h2>

          <p className="mb-2">
            Open the following URLs in your browser:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <code>
                http://localhost:3000/api/products?page=1&limit=3
              </code>
            </li>

            <li>
              <code>
                http://localhost:3000/api/products?page=2&limit=3
              </code>
            </li>
          </ul>

          <p className="mt-4">
            The API returns paginated JSON responses with pagination metadata.
          </p>
        </div>
      </div>
    </main>
  );
}