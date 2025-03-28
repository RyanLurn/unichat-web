import { getRouteApi } from "@tanstack/react-router"
import Message from "./message"

export default function MessagesContainer() {
  const routeApi = getRouteApi("/")
  const fakeDbData = routeApi.useLoaderData()

  return (
    <div className="flex w-full flex-1 flex-col gap-y-6">
      {fakeDbData.messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  )
}
