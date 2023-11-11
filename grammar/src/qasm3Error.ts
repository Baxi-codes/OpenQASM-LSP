import * as antlr4 from 'antlr4';
import { Diagnostic, DiagnosticSeverity } from 'vscode-languageserver';
import { TextDocument } from 'vscode-languageserver-textdocument';
import qasm3Lexer from './qasm3Lexer';
import qasm3Parser from './qasm3Parser';

export function getParserDiagnostics(textDocument: TextDocument, maxNumberOfProblems: number) {
  const diagnostics: Diagnostic[] = [];
  const input = textDocument.getText();
  const inputStream = new antlr4.CharStream(input);
  const lexer = new qasm3Lexer(inputStream);
  const tokenStream = new antlr4.CommonTokenStream(lexer);
  const qasmParser = new qasm3Parser(tokenStream);

  qasmParser.removeErrorListeners();
  qasmParser.addErrorListener({
    syntaxError(_recognizer, offendingSymbol, line, column, msg, _e) {
      const diagnostic: Diagnostic = {
        severity: DiagnosticSeverity.Error,
        range: {
          start: textDocument.positionAt(offendingSymbol.start - 1),
          end: textDocument.positionAt(offendingSymbol.stop ),
        },
        message: msg,
        source: 'ANTLR4 Parser',
      };
      if(diagnostics.length <= maxNumberOfProblems) diagnostics.push(diagnostic);
    },
  });

  qasmParser.program();

  return diagnostics;
}
export function getParserDiagnostics2(input: string, maxNumberOfProblems: number) {
  const diagnostics:any[] = [];
  const inputStream = new antlr4.CharStream(input);
  const lexer = new qasm3Lexer(inputStream);
  const tokenStream = new antlr4.CommonTokenStream(lexer);
  const qasmParser = new qasm3Parser(tokenStream);

  qasmParser.removeErrorListeners();
  qasmParser.addErrorListener({
    syntaxError(_recognizer, offendingSymbol, line, column, msg, _e) {
      const diagnostic = {
        severity: DiagnosticSeverity.Error,
        range: {
          start: (offendingSymbol.start),
          end: (offendingSymbol.stop + 1),
        },
        message: msg,
        source: 'ANTLR4 Parser',
      };
      if(diagnostics.length <= maxNumberOfProblems) diagnostics.push(diagnostic);
    },
  });

  qasmParser.program();

  return diagnostics;
}
