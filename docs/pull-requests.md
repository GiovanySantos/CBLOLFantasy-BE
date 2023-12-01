## Steps to make a pull request

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

5 - After push your changes to your branch, go to [Github PR page](https://github.com/GiovanySantos/CBLOLFantasyBE/pulls) and it should have a header with a 'Compare & pull request' green button, click on it!
![Alt text](image.png)

6 - Change the title to explain your change, example:
'Create user service' then describe your change in the field and finally click on the 'Create pull request' button
![Alt text](image-1.png)

7 - In the menu on the right you have to select a reviewer on the list by clicking on the tool icon

8 - Below the reviewer section, select yourself as as asignee by clickg 'assign to yourself'

9 - then select the label and the project related to this PR

10 - Ready! your PR is ready to be reviewed and if acceped, merged to the main branch :)
