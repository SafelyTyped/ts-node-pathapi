# Welcome To @safelytyped/node-pathapi!

## Introduction

`@safelytyped/node-pathapi` is a [protocol][Protocol] library.

It provides a Typescript interface for [the NodeJS path module](https://nodejs.org/api/path.html) methods that work on both POSIX and Windows (ie, the interface that describes both `path.posix` and `path.win32`).

Use it to help you test libraries that take `path` as a dependency. See [the Filepath safe type](https://github.com/SafelyTyped/ts-filepath/) for a working example.

## Quick Start

```
# run this from your Terminal
npm install @safelytyped/node-pathapi
```

```typescript
// add this import to your Typescript code
import { PathApi } from "@safelytyped/node-pathapi"
```

__VS Code users:__ once you've added a single import anywhere in your project, you'll then be able to auto-import anything else that this library exports.

## Documentation

Looking for more detailed documentation? You'll find it under the [docs](./docs) folder.

Plus:

* [The PathApi](./src/v1/PathApi.ts) itself.
* [Our CHANGELOG](CHANGELOG.md)
* [Our software license](LICENSE.md)
* [All contributors to date](AUTHORS.md)

[Protocol]: https://github.com/SafelyTyped/ts-coding-standards/blob/master/glossary/protocol.md