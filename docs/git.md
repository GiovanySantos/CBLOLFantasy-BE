## Git Flow

To push new code to main branch you should follow these steps

1 - Create a new branch based on main following this standard `my-branch-name`, you can do it by console with these commands

```console
git checkout main
git checkout -b my-branch-name
```

2 - Do all your changes and stage them by running this command on the root directory

```console
git add .
```

3 - Now you have to add a commit message, commit messages should always start with 'chore', 'docs', 'feat', 'fix', 'refactor' or 'test' depending on what you have done on this PR, here's an example of how to commit with a correct message

```console
git commit -m 'feat: create user service'
```

After you run it, husky will run the commitlint to ensure that the commit message follow this pattern, then the test coverage and unit tests will run to ensure that no untested code is commited

4 - If everyting runs now you can push your changes to your branch by running

```console
git push -u origin my-branch-name
```

5 -
