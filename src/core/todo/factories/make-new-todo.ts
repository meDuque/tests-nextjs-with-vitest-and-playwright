interface makeTodoProps {
  id: string
  description: string
  createdAt: string
}

export function makeNewTodo(description: string): makeTodoProps {
  return {
    id: crypto.randomUUID(),
    description,
    createdAt: new Date().toISOString(),
  }
}
