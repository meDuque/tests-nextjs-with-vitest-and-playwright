import * as sanitizeStrMod from '@/utils/sanitize-str'
import * as validateTodoDescriptionMod from '../schemas/validate-todo-description'
import * as makeNewTodoMod from './make-new-todo'
import { makeValidatedTodo, type InvalidTodo, type ValidTodo } from './make-validated-todo'
import type { Todo } from '../schemas/todo.contract'

describe('makeValidatedTodo (unit)', () => {
  it('should calls sanitizeStr function with correct value', () => {
    const { description, sanitizeStrSpy } = makeMocks()

    makeValidatedTodo(description)
    expect(sanitizeStrSpy).toHaveBeenCalledExactlyOnceWith(description)
  })

  it('should calls validatedTodoDescription with sanitizeStr return', () => {
    const { description, sanitizeStrSpy, validateTodoDescriptionSpy } = makeMocks()
    const sanitizeStrReturn = 'sanitizeStr return'
    sanitizeStrSpy.mockReturnValue(sanitizeStrReturn)

    makeValidatedTodo(description) as ValidTodo

    expect(validateTodoDescriptionSpy).toHaveBeenCalledExactlyOnceWith(sanitizeStrReturn)
  })

  it('should calls makeNewTodo if validatedTodoDescription return success', () => {
    const { description } = makeMocks()
    const result = makeValidatedTodo(description) as ValidTodo

    expect(result.success).toBe(true)
    expect(result.data.id).toBe('any-id')
    expect(result.data.description).toBe('lorem ipsum')
    expect(result.data.createdAt).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/)
  })

  it('should return validatedTodoDescription.errors if validation fails', () => {
    const { errors, description, validateTodoDescriptionSpy } = makeMocks()
    validateTodoDescriptionSpy.mockReturnValue({ errors, success: false })

    const result = makeValidatedTodo(description) as InvalidTodo

    expect(result).toStrictEqual({ errors, success: false })
  })
})

const makeMocks = (description = 'lorem ipsum') => {
  const todo: Todo = {
    id: 'any-id',
    description: description,
    createdAt: new Date().toISOString(),
  }

  const errors = ['any', 'error']

  const sanitizeStrSpy = vi.spyOn(sanitizeStrMod, 'sanitizeStr').mockReturnValue(description)

  const validateTodoDescriptionSpy = vi
    .spyOn(validateTodoDescriptionMod, 'validateTodoDescription')
    .mockReturnValue({
      errors: [],
      success: true,
    })

  const makeNewTodoSpy = vi.spyOn(makeNewTodoMod, 'makeNewTodo').mockReturnValue(todo)

  return {
    todo,
    errors,
    description,
    sanitizeStrSpy,
    validateTodoDescriptionSpy,
    makeNewTodoSpy,
  }
}
