import { createFileRoute } from "@tanstack/react-router"
import { ModeToggle } from "@/components/theme/mode-toggle"
import { fakeDb } from "@/lib/data/fakeDb"
import ChatContainer from "@/components/chat/chat-container"

export const Route = createFileRoute("/")({
  component: App,
  loader: () => fakeDb,
})

function App() {
  return (
    <div className="h-screen w-screen overflow-y-auto">
      <div className="fixed top-0 right-0">
        <ModeToggle />
      </div>
      <ChatContainer />
    </div>
  )
}
