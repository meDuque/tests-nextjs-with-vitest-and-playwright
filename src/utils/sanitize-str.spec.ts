import { sanitizeStr } from './sanitize-str'

describe('sanitizeStr (unit)', () => {
  it('should return an empty string if it receives a falsy value', () => {
    // @ts-expect-error _testing that function without any parameters
    expect(sanitizeStr()).toBe('')
  })

  it('should return an empty string when given a value that is not a string', () => {
    // @ts-expect-error _testing that function when given a value that is not a string
    expect(sanitizeStr(123)).toBe('')
  })

  it('should return a trimmed string', () => {
    expect(sanitizeStr('   Hello, World!   ')).toBe('Hello, World!')
  })

  it('should return a normalized string in NFC', () => {
    const original_e = 'e\u0301'
    const expected_e = 'é'
    expect(sanitizeStr(`H${expected_e}llo, World!`)).toBe(
      sanitizeStr(`H${original_e}llo, World!`),
    )
  })
})
