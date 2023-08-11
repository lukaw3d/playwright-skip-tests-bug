Somehow, forgetting an await inside a `test.fail()` test causes `playwright test --workers 1` to skip tests

Code change: https://github.com/lukaw3d/playwright-skip-tests-bug/commit/0c0656662f828e30767d7770c75b22aca0ccd694

<table>
<tr>
<th>

[Before, with await](https://github.com/lukaw3d/playwright-skip-tests-bug/actions/runs/5828357653/job/15805953109#step:6:11)

</th>
<th>

[After, without await](https://github.com/lukaw3d/playwright-skip-tests-bug/actions/runs/5828397071/job/15806054718#step:6:11)

</th>
</tr>
<tr>
<td>

```sh
$ playwright test --workers 1 --reporter list

Running 5 tests using 1 worker

  ✓  1 tests/test1.spec.ts:3:5 › test1 (124ms)
  ✘  2 tests/test2.spec.ts:3:5 › test2 (expect fail) (64ms)
  ✓  3 tests/test3.spec.ts:3:5 › test3 (60ms)
  ✓  4 tests/test4.spec.ts:3:5 › test4 (74ms)
  ✓  5 tests/test5.spec.ts:3:5 › test5 (65ms)

  5 passed (1.1s)
Done in 1.93s.
```

</td>
<td>

```sh
$ playwright test --workers 1 --reporter list

Running 5 tests using 1 worker

  ✓  1 tests/test1.spec.ts:3:5 › test1 (145ms)
  ✘  2 tests/test2.spec.ts:3:5 › test2 (expect fail) (59ms)
  -  3 tests/test3.spec.ts:3:5 › test3
  -  4 tests/test4.spec.ts:3:5 › test4
  -  5 tests/test5.spec.ts:3:5 › test5

  3 skipped
  2 passed (1.0s)
Done in 1.91s.
```

</td>
</tr>
</table>

