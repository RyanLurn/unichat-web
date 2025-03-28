import { createFileRoute } from "@tanstack/react-router"
import { ModeToggle } from "@/components/theme/mode-toggle"

export const Route = createFileRoute("/")({
  component: App,
})

function App() {
  return (
    <div className="text-center">
      <div className="fixed top-0 right-0">
        <ModeToggle />
      </div>
      Hello TanStack!
    </div>
  )
}
