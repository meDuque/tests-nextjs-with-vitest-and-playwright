import * as sanitizeStrMod from '@/utils/sanitize-str'
import { makeValidatedTodo } from './make-validated-todo'

describe('makeValidatedTodo (unit)', () => {
  it('should calls sanitizeStr function with correct value', () => {
    const { description, sanitizeStrSpy } = makeMocks()

    makeValidatedTodo(description)
    expect(sanitizeStrSpy).toHaveBeenCalledExactlyOnceWith(description)
  })

  it('should calls validatedTodoDescription with sanitizeStr return', () => {
    // Arrange
  })

  // it('should calls makeNewTodo if validatedTodoDescription return success', () => {})

  // it('should return validatedTodoDescription.errors if validation fails', () => {})
})

const makeMocks = (description = 'lorem ipsum') => {
  const sanitizeStrSpy = vi.spyOn(sanitizeStrMod, 'sanitizeStr').mockReturnValue(description)

  return {
    description,
    sanitizeStrSpy,
  }
}
