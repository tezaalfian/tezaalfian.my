export default function NotFound() {
  return (
    <section className="h-[calc(100vh-200px)] flex justify-center items-center flex-col">
      <h1 className="mb-4 text-2xl font-semibold tracking-tighter">
        404 - Page Not Found
      </h1>
      <p className="text-muted-foreground">The page you are looking for does not exist.</p>
    </section>
  )
}
