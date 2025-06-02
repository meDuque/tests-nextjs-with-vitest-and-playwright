import { makeNewTodo } from './make-new-todo'

describe('Make new todo (unit)', () => {
  it('should return a new valid todo', () => {
    // AAA -> Arrange, Act, AssertAdd commentMore actions
    // Arrange -> Criar as coisas que eu preciso
    const expectedTodo = {
      id: expect.any(String),
      description: 'This is a new todo',
      createdAt: expect.any(String),
    }

    // Act ->
    const newTodo = makeNewTodo('This is a new todo')

    // AssertAdd commentMore actions
    // toBe ===
    // toEqual toStrictEqual
    // Checando apenas a description
    expect(newTodo.description).toEqual(expectedTodo.description)

    // Checando o objeto inteiroAdd commentMore actions
    expect(newTodo).toStrictEqual(expectedTodo)
  })
})
