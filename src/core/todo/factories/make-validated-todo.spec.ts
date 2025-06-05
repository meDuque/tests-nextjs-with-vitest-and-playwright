import { makeValidatedTodo } from './make-validated-todo'

describe('makeValidatedTodo (unit)', () => {
  it('should calls sanitizeStr function with correct value', () => {
    // Arrange
    const description = 'lorem ipsum'

    // Act
    makeValidatedTodo(description)

    // Assert
    expect(description).toBe('lorem ipsum')
  })

  it('should calls validatedTodoDescription with sanitizeStr return', () => {})

  it('should calls makeNewTodo if validatedTodoDescription return success', () => {})

  it('should return validatedTodoDescription.errors if validation fails', () => {})
})
