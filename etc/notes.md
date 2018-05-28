# Notes

## Mapped Paths

* `@` prefix is not part of spec, but rather common nomenclature to indicated a mapped path and to avoid any conflicts

* `tsconfig.json` needs a `baseUrl` to start searching from. `paths` is a list of relative mappings. `include` and/or `files` need to glob/list files that path mapping will work on. see: [Module Resolution](https://www.typescriptlang.org/docs/handbook/module-resolution.html)

  ```json
    {
    "compilerOptions": {
        ...
        "baseUrl": ".",
        ...
        "paths": {
            "@example/*": ["etc/custom/example/*"],
            "@/*": ["src/*"],
            "@*": ["src/*"]
            },
        ...
        },
    ...
    "include": [
        "src/**/*",
        "test/**/*"
        ]
    ...
    }
  ```

* `jest` needs it's own mapping in it's section of `package.json` to work. see: [Enhance Jest configuration with Module Aliases](https://alexjoverm.github.io/2017/10/07/Enhance-Jest-configuration-with-Module-Aliases/). a generic regex of `@/?(.*)$` to automagically map anything to a default directery can be used as well. put it at the end of the list so it is run last. there is a conflict with some of jests internal doings involving `@babel/...`. a fix is to manualy exclude those conflicts.

  ```json
    "jest": {
        ...
        "moduleNameMapper": {
            "@example/(.*)": "<rootDir>/etc/custom/example/$1",
            "@/?(?!(?:babel|ignoreme)/)(.*)$": "<rootDir>/src/$1"
            },
        ...
        }
  ```