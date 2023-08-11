import { expect, test } from '@playwright/test'

test('test2 (expect fail)', async ({ page }) => {
  test.fail()
  /* await */ expect(Promise.resolve('a')).resolves.toBe('b')
})
