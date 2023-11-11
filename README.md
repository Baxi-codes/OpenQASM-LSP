# OpenQASM LSP
An OpenQASM language server and Visual Studio Code client implementation.

## Functionality

This Language Server works for .qasm files. It has diagnostics regenerated on each file change or configuration change.

## Running the LSP in VS Code

- Run `npm install` in this folder. This installs all necessary npm modules in the client, server and grammar folders.
- Open VS Code on this folder.
- Run `npm run compile` in this folder
- Open `client/out/extension.js`.
- Press F5 and select `Extension Development Host`.

