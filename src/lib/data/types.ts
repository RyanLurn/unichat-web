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

type FakeDbType = {
  chats: Array<ChatType>
  messages: Array<MessageType>
}

export type { MessageType, ChatType, FakeDbType }
