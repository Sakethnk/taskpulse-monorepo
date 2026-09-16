import { Button } from "@/components/ui/button"

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">
          Welcome to TaskPulse Monorepo.
        </h1>

        <p className="mt-4 text-muted-foreground">
          Your frontend is running successfully.
        </p>

        <Button className="mt-6">
          TaskPulse Button
        </Button>
      </div>
    </div>
  )
}

export default App