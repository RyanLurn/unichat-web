import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { Avatar, AvatarFallback } from "../ui/avatar"
import type { MessageType } from "@/lib/data/types"

export default function Message({ message }: { message: MessageType }) {
  return (
    <div className="flex w-full gap-x-2">
      <Avatar>
        <AvatarFallback>
          {message.role === "user" ? "You" : "AI"}
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-1 flex-col gap-y-2">
        <div className="flex gap-x-2">
          <span className="text-sm font-bold">
            {message.name ?? (message.role === "user" ? "User" : "Assistant")}
          </span>
          <span className="text-sm text-muted-foreground">
            {message.createdAt}
          </span>
        </div>
        <div className="prose max-w-none prose-zinc dark:prose-invert">
          <Markdown remarkPlugins={[remarkGfm]}>{message.content}</Markdown>
        </div>
      </div>
    </div>
  )
}
