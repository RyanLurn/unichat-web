type MessageType = {
  id: string
  role: "user" | "assistant"
  content: string
  name?: string
  createdAt: string
  chatId: string
}

type ChatType = {
  id: string
  title: string
  createdAt: string
  lastOpenedAt: string
}

export type { MessageType, ChatType }
