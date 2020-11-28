# Semantic commit messages

See how a minor change to your commit message style can make you a better programmer.

Format: ```<type>(<scope>): <subject>``` 

```<scope>``` is optional

## Example
```
feat: allow overriding of webpack config
^--^  ^------------^
|     |
|     +-> Summary in present tense.
|
+-------> Type: chore, docs, feat, fix, refactor, style, or test.
```

The various types of commits:

    feat: (new feature for the user, not a new feature for build script)
    fix: (bug fix for the user, not a fix to a build script)
    docs: (changes to the documentation)
    style: (formatting, missing semi colons, etc; no production code change)
    refactor: (refactoring production code, eg. renaming a variable)
    test: (adding missing tests, refactoring tests; no production code change)
    chore: (updating grunt tasks etc; no production code change)

Use lower case not title case!


# Code conventions

## Style guide

Prettier will catch most styling issues that may exist in your code. You can check the status of your code styling by simply running npm run prettier.

However, there are still some styles that Prettier cannot pick up.
## General
Most important: Look around. Match the style you see used in the rest of the project. This includes formatting, naming files, naming things in code, naming things in documentation.
"Attractive"