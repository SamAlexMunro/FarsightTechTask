# AngularHuskyPrettierTemplate

Template Angular project setup with ESLint, Prettier, Stylelint & testing ran on Husky pre-commit hooks

## Install

Run `npm i`
## Config Files

Husky hooks - `.husky/pre-commit`

ESLint - `.eslint.json` - If updating/adding rules place the new rulesets in `"overrides" > "rules"` section

Prettier - `.prettierrc.json` & `.prettierignore`

Stylelint - `.stylelintrc.json` 

## Cloning 

I'd recommend taking the mirroring approach for this repository as it's likely to be reused across multiple projects.

1 - Create a `--bare` clone of this repository `git clone --bare https://github.com/SamAlexMunro/AngularHuskyPrettierTemplate.git`

2 - Create a new target repository in github and make note of the URL appending `.git` such as `https://github.com/SamAlexMunro/<NewRepoName>.git`

3 - Change directory in `AngularHuskyPrettierTemplate.git` 

4 - Run `git push --mirror https://github.com/SamAlexMunro/<NewRepoName>.git`

5 - You can now optionally remove the `AngularHuskyPrettierTemplate.git` folder or retain it for future use and repeat steps 2 - 4 to make another fresh clone.



