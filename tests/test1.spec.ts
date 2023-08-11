import { expect, test } from '@playwright/test'

test('test1', async ({ page }) => {
  expect('a').toBe('a')
})
