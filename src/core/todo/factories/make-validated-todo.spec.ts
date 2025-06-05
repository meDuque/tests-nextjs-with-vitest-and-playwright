import * as sanitizeStrMod from '@/utils/sanitize-str'
import { makeValidatedTodo } from './make-validated-todo'

describe('makeValidatedTodo (unit)', () => {
  it('should calls sanitizeStr function with correct value', () => {
    // Arrange
    const description = 'lorem ipsum'
    const sanitizeStrSpy = vi.spyOn(sanitizeStrMod, 'sanitizeStr')

    // Act
    makeValidatedTodo(description)

    // Assert
    expect(sanitizeStrSpy).toHaveBeenCalledExactlyOnceWith(description)
    expect(sanitizeStrSpy).toHaveBeenCalledTimes(1)
    expect(sanitizeStrSpy).toHaveBeenCalledWith(description)
  })

  // it('should calls validatedTodoDescription with sanitizeStr return', () => {})

  // it('should calls makeNewTodo if validatedTodoDescription return success', () => {})

  // it('should return validatedTodoDescription.errors if validation fails', () => {})
})
