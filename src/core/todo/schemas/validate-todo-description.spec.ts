import { validateTodoDescription } from './validate-todo-description'

describe('validateTodoDescription (unit)', () => {
  it('should return errors when description is less than 4 characters', () => {
    const description = 'abc'
    const result = validateTodoDescription(description)

    expect(result.errors).toStrictEqual(['Descrição precisa ter mais de 3 caracteres'])
    expect(result.success).toBe(false)
  })

  it('should return success when description is longer than 3 characters', () => {
    const description = 'abcd'
    const result = validateTodoDescription(description)

    expect(result.errors).toStrictEqual([])
    expect(result.success).toBe(true)
  })
})
