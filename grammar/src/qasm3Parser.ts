// Generated from qasm3Parser.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import qasm3ParserListener from "./qasm3ParserListener.js";
import qasm3ParserVisitor from "./qasm3ParserVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class qasm3Parser extends Parser {
	public static readonly OPENQASM = 1;
	public static readonly INCLUDE = 2;
	public static readonly DEFCALGRAMMAR = 3;
	public static readonly DEF = 4;
	public static readonly CAL = 5;
	public static readonly DEFCAL = 6;
	public static readonly GATE = 7;
	public static readonly EXTERN = 8;
	public static readonly BOX = 9;
	public static readonly LET = 10;
	public static readonly BREAK = 11;
	public static readonly CONTINUE = 12;
	public static readonly IF = 13;
	public static readonly ELSE = 14;
	public static readonly END = 15;
	public static readonly RETURN = 16;
	public static readonly FOR = 17;
	public static readonly WHILE = 18;
	public static readonly IN = 19;
	public static readonly PRAGMA = 20;
	public static readonly AnnotationKeyword = 21;
	public static readonly INPUT = 22;
	public static readonly OUTPUT = 23;
	public static readonly CONST = 24;
	public static readonly READONLY = 25;
	public static readonly MUTABLE = 26;
	public static readonly QREG = 27;
	public static readonly QUBIT = 28;
	public static readonly CREG = 29;
	public static readonly BOOL = 30;
	public static readonly BIT = 31;
	public static readonly INT = 32;
	public static readonly UINT = 33;
	public static readonly FLOAT = 34;
	public static readonly ANGLE = 35;
	public static readonly COMPLEX = 36;
	public static readonly ARRAY = 37;
	public static readonly VOID = 38;
	public static readonly DURATION = 39;
	public static readonly STRETCH = 40;
	public static readonly GPHASE = 41;
	public static readonly INV = 42;
	public static readonly POW = 43;
	public static readonly CTRL = 44;
	public static readonly NEGCTRL = 45;
	public static readonly DIM = 46;
	public static readonly DURATIONOF = 47;
	public static readonly DELAY = 48;
	public static readonly RESET = 49;
	public static readonly MEASURE = 50;
	public static readonly BARRIER = 51;
	public static readonly BooleanLiteral = 52;
	public static readonly LBRACKET = 53;
	public static readonly RBRACKET = 54;
	public static readonly LBRACE = 55;
	public static readonly RBRACE = 56;
	public static readonly LPAREN = 57;
	public static readonly RPAREN = 58;
	public static readonly COLON = 59;
	public static readonly SEMICOLON = 60;
	public static readonly DOT = 61;
	public static readonly COMMA = 62;
	public static readonly EQUALS = 63;
	public static readonly ARROW = 64;
	public static readonly PLUS = 65;
	public static readonly DOUBLE_PLUS = 66;
	public static readonly MINUS = 67;
	public static readonly ASTERISK = 68;
	public static readonly DOUBLE_ASTERISK = 69;
	public static readonly SLASH = 70;
	public static readonly PERCENT = 71;
	public static readonly PIPE = 72;
	public static readonly DOUBLE_PIPE = 73;
	public static readonly AMPERSAND = 74;
	public static readonly DOUBLE_AMPERSAND = 75;
	public static readonly CARET = 76;
	public static readonly AT = 77;
	public static readonly TILDE = 78;
	public static readonly EXCLAMATION_POINT = 79;
	public static readonly EqualityOperator = 80;
	public static readonly CompoundAssignmentOperator = 81;
	public static readonly ComparisonOperator = 82;
	public static readonly BitshiftOperator = 83;
	public static readonly IMAG = 84;
	public static readonly ImaginaryLiteral = 85;
	public static readonly BinaryIntegerLiteral = 86;
	public static readonly OctalIntegerLiteral = 87;
	public static readonly DecimalIntegerLiteral = 88;
	public static readonly HexIntegerLiteral = 89;
	public static readonly Identifier = 90;
	public static readonly HardwareQubit = 91;
	public static readonly FloatLiteral = 92;
	public static readonly TimingLiteral = 93;
	public static readonly BitstringLiteral = 94;
	public static readonly Whitespace = 95;
	public static readonly Newline = 96;
	public static readonly LineComment = 97;
	public static readonly BlockComment = 98;
	public static readonly VERSION_IDENTIFER_WHITESPACE = 99;
	public static readonly VersionSpecifier = 100;
	public static readonly ARBITRARY_STRING_WHITESPACE = 101;
	public static readonly StringLiteral = 102;
	public static readonly EAT_INITIAL_SPACE = 103;
	public static readonly EAT_LINE_END = 104;
	public static readonly RemainingLineContent = 105;
	public static readonly CAL_PRELUDE_WHITESPACE = 106;
	public static readonly CAL_PRELUDE_COMMENT = 107;
	public static readonly DEFCAL_PRELUDE_WHITESPACE = 108;
	public static readonly DEFCAL_PRELUDE_COMMENT = 109;
	public static readonly CalibrationBlock = 110;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_program = 0;
	public static readonly RULE_version = 1;
	public static readonly RULE_statement = 2;
	public static readonly RULE_annotation = 3;
	public static readonly RULE_scope = 4;
	public static readonly RULE_pragma = 5;
	public static readonly RULE_statementOrScope = 6;
	public static readonly RULE_calibrationGrammarStatement = 7;
	public static readonly RULE_includeStatement = 8;
	public static readonly RULE_breakStatement = 9;
	public static readonly RULE_continueStatement = 10;
	public static readonly RULE_endStatement = 11;
	public static readonly RULE_forStatement = 12;
	public static readonly RULE_ifStatement = 13;
	public static readonly RULE_returnStatement = 14;
	public static readonly RULE_whileStatement = 15;
	public static readonly RULE_barrierStatement = 16;
	public static readonly RULE_boxStatement = 17;
	public static readonly RULE_delayStatement = 18;
	public static readonly RULE_gateCallStatement = 19;
	public static readonly RULE_measureArrowAssignmentStatement = 20;
	public static readonly RULE_resetStatement = 21;
	public static readonly RULE_aliasDeclarationStatement = 22;
	public static readonly RULE_classicalDeclarationStatement = 23;
	public static readonly RULE_constDeclarationStatement = 24;
	public static readonly RULE_ioDeclarationStatement = 25;
	public static readonly RULE_oldStyleDeclarationStatement = 26;
	public static readonly RULE_quantumDeclarationStatement = 27;
	public static readonly RULE_defStatement = 28;
	public static readonly RULE_externStatement = 29;
	public static readonly RULE_gateStatement = 30;
	public static readonly RULE_assignmentStatement = 31;
	public static readonly RULE_expressionStatement = 32;
	public static readonly RULE_calStatement = 33;
	public static readonly RULE_defcalStatement = 34;
	public static readonly RULE_expression = 35;
	public static readonly RULE_aliasExpression = 36;
	public static readonly RULE_declarationExpression = 37;
	public static readonly RULE_measureExpression = 38;
	public static readonly RULE_rangeExpression = 39;
	public static readonly RULE_setExpression = 40;
	public static readonly RULE_arrayLiteral = 41;
	public static readonly RULE_indexOperator = 42;
	public static readonly RULE_indexedIdentifier = 43;
	public static readonly RULE_returnSignature = 44;
	public static readonly RULE_gateModifier = 45;
	public static readonly RULE_scalarType = 46;
	public static readonly RULE_qubitType = 47;
	public static readonly RULE_arrayType = 48;
	public static readonly RULE_arrayReferenceType = 49;
	public static readonly RULE_designator = 50;
	public static readonly RULE_defcalTarget = 51;
	public static readonly RULE_defcalArgumentDefinition = 52;
	public static readonly RULE_defcalOperand = 53;
	public static readonly RULE_gateOperand = 54;
	public static readonly RULE_externArgument = 55;
	public static readonly RULE_argumentDefinition = 56;
	public static readonly RULE_argumentDefinitionList = 57;
	public static readonly RULE_defcalArgumentDefinitionList = 58;
	public static readonly RULE_defcalOperandList = 59;
	public static readonly RULE_expressionList = 60;
	public static readonly RULE_identifierList = 61;
	public static readonly RULE_gateOperandList = 62;
	public static readonly RULE_externArgumentList = 63;
	public static readonly literalNames: (string | null)[] = [ null, "'OPENQASM'", 
                                                            "'include'", 
                                                            "'defcalgrammar'", 
                                                            "'def'", "'cal'", 
                                                            "'defcal'", 
                                                            "'gate'", "'extern'", 
                                                            "'box'", "'let'", 
                                                            "'break'", "'continue'", 
                                                            "'if'", "'else'", 
                                                            "'end'", "'return'", 
                                                            "'for'", "'while'", 
                                                            "'in'", null, 
                                                            null, "'input'", 
                                                            "'output'", 
                                                            "'const'", "'readonly'", 
                                                            "'mutable'", 
                                                            "'qreg'", "'qubit'", 
                                                            "'creg'", "'bool'", 
                                                            "'bit'", "'int'", 
                                                            "'uint'", "'float'", 
                                                            "'angle'", "'complex'", 
                                                            "'array'", "'void'", 
                                                            "'duration'", 
                                                            "'stretch'", 
                                                            "'gphase'", 
                                                            "'inv'", "'pow'", 
                                                            "'ctrl'", "'negctrl'", 
                                                            "'#dim'", "'durationof'", 
                                                            "'delay'", "'reset'", 
                                                            "'measure'", 
                                                            "'barrier'", 
                                                            null, "'['", 
                                                            "']'", "'{'", 
                                                            "'}'", "'('", 
                                                            "')'", "':'", 
                                                            "';'", "'.'", 
                                                            "','", "'='", 
                                                            "'->'", "'+'", 
                                                            "'++'", "'-'", 
                                                            "'*'", "'**'", 
                                                            "'/'", "'%'", 
                                                            "'|'", "'||'", 
                                                            "'&'", "'&&'", 
                                                            "'^'", "'@'", 
                                                            "'~'", "'!'", 
                                                            null, null, 
                                                            null, null, 
                                                            "'im'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "OPENQASM", 
                                                             "INCLUDE", 
                                                             "DEFCALGRAMMAR", 
                                                             "DEF", "CAL", 
                                                             "DEFCAL", "GATE", 
                                                             "EXTERN", "BOX", 
                                                             "LET", "BREAK", 
                                                             "CONTINUE", 
                                                             "IF", "ELSE", 
                                                             "END", "RETURN", 
                                                             "FOR", "WHILE", 
                                                             "IN", "PRAGMA", 
                                                             "AnnotationKeyword", 
                                                             "INPUT", "OUTPUT", 
                                                             "CONST", "READONLY", 
                                                             "MUTABLE", 
                                                             "QREG", "QUBIT", 
                                                             "CREG", "BOOL", 
                                                             "BIT", "INT", 
                                                             "UINT", "FLOAT", 
                                                             "ANGLE", "COMPLEX", 
                                                             "ARRAY", "VOID", 
                                                             "DURATION", 
                                                             "STRETCH", 
                                                             "GPHASE", "INV", 
                                                             "POW", "CTRL", 
                                                             "NEGCTRL", 
                                                             "DIM", "DURATIONOF", 
                                                             "DELAY", "RESET", 
                                                             "MEASURE", 
                                                             "BARRIER", 
                                                             "BooleanLiteral", 
                                                             "LBRACKET", 
                                                             "RBRACKET", 
                                                             "LBRACE", "RBRACE", 
                                                             "LPAREN", "RPAREN", 
                                                             "COLON", "SEMICOLON", 
                                                             "DOT", "COMMA", 
                                                             "EQUALS", "ARROW", 
                                                             "PLUS", "DOUBLE_PLUS", 
                                                             "MINUS", "ASTERISK", 
                                                             "DOUBLE_ASTERISK", 
                                                             "SLASH", "PERCENT", 
                                                             "PIPE", "DOUBLE_PIPE", 
                                                             "AMPERSAND", 
                                                             "DOUBLE_AMPERSAND", 
                                                             "CARET", "AT", 
                                                             "TILDE", "EXCLAMATION_POINT", 
                                                             "EqualityOperator", 
                                                             "CompoundAssignmentOperator", 
                                                             "ComparisonOperator", 
                                                             "BitshiftOperator", 
                                                             "IMAG", "ImaginaryLiteral", 
                                                             "BinaryIntegerLiteral", 
                                                             "OctalIntegerLiteral", 
                                                             "DecimalIntegerLiteral", 
                                                             "HexIntegerLiteral", 
                                                             "Identifier", 
                                                             "HardwareQubit", 
                                                             "FloatLiteral", 
                                                             "TimingLiteral", 
                                                             "BitstringLiteral", 
                                                             "Whitespace", 
                                                             "Newline", 
                                                             "LineComment", 
                                                             "BlockComment", 
                                                             "VERSION_IDENTIFER_WHITESPACE", 
                                                             "VersionSpecifier", 
                                                             "ARBITRARY_STRING_WHITESPACE", 
                                                             "StringLiteral", 
                                                             "EAT_INITIAL_SPACE", 
                                                             "EAT_LINE_END", 
                                                             "RemainingLineContent", 
                                                             "CAL_PRELUDE_WHITESPACE", 
                                                             "CAL_PRELUDE_COMMENT", 
                                                             "DEFCAL_PRELUDE_WHITESPACE", 
                                                             "DEFCAL_PRELUDE_COMMENT", 
                                                             "CalibrationBlock" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "version", "statement", "annotation", "scope", "pragma", "statementOrScope", 
		"calibrationGrammarStatement", "includeStatement", "breakStatement", "continueStatement", 
		"endStatement", "forStatement", "ifStatement", "returnStatement", "whileStatement", 
		"barrierStatement", "boxStatement", "delayStatement", "gateCallStatement", 
		"measureArrowAssignmentStatement", "resetStatement", "aliasDeclarationStatement", 
		"classicalDeclarationStatement", "constDeclarationStatement", "ioDeclarationStatement", 
		"oldStyleDeclarationStatement", "quantumDeclarationStatement", "defStatement", 
		"externStatement", "gateStatement", "assignmentStatement", "expressionStatement", 
		"calStatement", "defcalStatement", "expression", "aliasExpression", "declarationExpression", 
		"measureExpression", "rangeExpression", "setExpression", "arrayLiteral", 
		"indexOperator", "indexedIdentifier", "returnSignature", "gateModifier", 
		"scalarType", "qubitType", "arrayType", "arrayReferenceType", "designator", 
		"defcalTarget", "defcalArgumentDefinition", "defcalOperand", "gateOperand", 
		"externArgument", "argumentDefinition", "argumentDefinitionList", "defcalArgumentDefinitionList", 
		"defcalOperandList", "expressionList", "identifierList", "gateOperandList", 
		"externArgumentList",
	];
	public get grammarFileName(): string { return "qasm3Parser.g4"; }
	public get literalNames(): (string | null)[] { return qasm3Parser.literalNames; }
	public get symbolicNames(): (string | null)[] { return qasm3Parser.symbolicNames; }
	public get ruleNames(): string[] { return qasm3Parser.ruleNames; }
	public get serializedATN(): number[] { return qasm3Parser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, qasm3Parser._ATN, qasm3Parser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let localctx: ProgramContext = new ProgramContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, qasm3Parser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 129;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1) {
				{
				this.state = 128;
				this.version();
				}
			}

			this.state = 134;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4193763324) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 35635135) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & 268179457) !== 0)) {
				{
				{
				this.state = 131;
				this.statement();
				}
				}
				this.state = 136;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 137;
			this.match(qasm3Parser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public version(): VersionContext {
		let localctx: VersionContext = new VersionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, qasm3Parser.RULE_version);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 139;
			this.match(qasm3Parser.OPENQASM);
			this.state = 140;
			this.match(qasm3Parser.VersionSpecifier);
			this.state = 141;
			this.match(qasm3Parser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let localctx: StatementContext = new StatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, qasm3Parser.RULE_statement);
		let _la: number;
		try {
			this.state = 180;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 20:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 143;
				this.pragma();
				}
				break;
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
			case 11:
			case 12:
			case 13:
			case 15:
			case 16:
			case 17:
			case 18:
			case 21:
			case 22:
			case 23:
			case 24:
			case 27:
			case 28:
			case 29:
			case 30:
			case 31:
			case 32:
			case 33:
			case 34:
			case 35:
			case 36:
			case 37:
			case 39:
			case 40:
			case 41:
			case 42:
			case 43:
			case 44:
			case 45:
			case 47:
			case 48:
			case 49:
			case 50:
			case 51:
			case 52:
			case 57:
			case 67:
			case 78:
			case 79:
			case 85:
			case 86:
			case 87:
			case 88:
			case 89:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 147;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===21) {
					{
					{
					this.state = 144;
					this.annotation();
					}
					}
					this.state = 149;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 178;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 3, this._ctx) ) {
				case 1:
					{
					this.state = 150;
					this.aliasDeclarationStatement();
					}
					break;
				case 2:
					{
					this.state = 151;
					this.assignmentStatement();
					}
					break;
				case 3:
					{
					this.state = 152;
					this.barrierStatement();
					}
					break;
				case 4:
					{
					this.state = 153;
					this.boxStatement();
					}
					break;
				case 5:
					{
					this.state = 154;
					this.breakStatement();
					}
					break;
				case 6:
					{
					this.state = 155;
					this.calStatement();
					}
					break;
				case 7:
					{
					this.state = 156;
					this.calibrationGrammarStatement();
					}
					break;
				case 8:
					{
					this.state = 157;
					this.classicalDeclarationStatement();
					}
					break;
				case 9:
					{
					this.state = 158;
					this.constDeclarationStatement();
					}
					break;
				case 10:
					{
					this.state = 159;
					this.continueStatement();
					}
					break;
				case 11:
					{
					this.state = 160;
					this.defStatement();
					}
					break;
				case 12:
					{
					this.state = 161;
					this.defcalStatement();
					}
					break;
				case 13:
					{
					this.state = 162;
					this.delayStatement();
					}
					break;
				case 14:
					{
					this.state = 163;
					this.endStatement();
					}
					break;
				case 15:
					{
					this.state = 164;
					this.expressionStatement();
					}
					break;
				case 16:
					{
					this.state = 165;
					this.externStatement();
					}
					break;
				case 17:
					{
					this.state = 166;
					this.forStatement();
					}
					break;
				case 18:
					{
					this.state = 167;
					this.gateCallStatement();
					}
					break;
				case 19:
					{
					this.state = 168;
					this.gateStatement();
					}
					break;
				case 20:
					{
					this.state = 169;
					this.ifStatement();
					}
					break;
				case 21:
					{
					this.state = 170;
					this.includeStatement();
					}
					break;
				case 22:
					{
					this.state = 171;
					this.ioDeclarationStatement();
					}
					break;
				case 23:
					{
					this.state = 172;
					this.measureArrowAssignmentStatement();
					}
					break;
				case 24:
					{
					this.state = 173;
					this.oldStyleDeclarationStatement();
					}
					break;
				case 25:
					{
					this.state = 174;
					this.quantumDeclarationStatement();
					}
					break;
				case 26:
					{
					this.state = 175;
					this.resetStatement();
					}
					break;
				case 27:
					{
					this.state = 176;
					this.returnStatement();
					}
					break;
				case 28:
					{
					this.state = 177;
					this.whileStatement();
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public annotation(): AnnotationContext {
		let localctx: AnnotationContext = new AnnotationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, qasm3Parser.RULE_annotation);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 182;
			this.match(qasm3Parser.AnnotationKeyword);
			this.state = 184;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===105) {
				{
				this.state = 183;
				this.match(qasm3Parser.RemainingLineContent);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public scope(): ScopeContext {
		let localctx: ScopeContext = new ScopeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, qasm3Parser.RULE_scope);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 186;
			this.match(qasm3Parser.LBRACE);
			this.state = 190;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4193763324) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 35635135) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & 268179457) !== 0)) {
				{
				{
				this.state = 187;
				this.statement();
				}
				}
				this.state = 192;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 193;
			this.match(qasm3Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public pragma(): PragmaContext {
		let localctx: PragmaContext = new PragmaContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, qasm3Parser.RULE_pragma);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 195;
			this.match(qasm3Parser.PRAGMA);
			this.state = 196;
			this.match(qasm3Parser.RemainingLineContent);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public statementOrScope(): StatementOrScopeContext {
		let localctx: StatementOrScopeContext = new StatementOrScopeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, qasm3Parser.RULE_statementOrScope);
		try {
			this.state = 200;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
			case 11:
			case 12:
			case 13:
			case 15:
			case 16:
			case 17:
			case 18:
			case 20:
			case 21:
			case 22:
			case 23:
			case 24:
			case 27:
			case 28:
			case 29:
			case 30:
			case 31:
			case 32:
			case 33:
			case 34:
			case 35:
			case 36:
			case 37:
			case 39:
			case 40:
			case 41:
			case 42:
			case 43:
			case 44:
			case 45:
			case 47:
			case 48:
			case 49:
			case 50:
			case 51:
			case 52:
			case 57:
			case 67:
			case 78:
			case 79:
			case 85:
			case 86:
			case 87:
			case 88:
			case 89:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 198;
				this.statement();
				}
				break;
			case 55:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 199;
				this.scope();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public calibrationGrammarStatement(): CalibrationGrammarStatementContext {
		let localctx: CalibrationGrammarStatementContext = new CalibrationGrammarStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, qasm3Parser.RULE_calibrationGrammarStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 202;
			this.match(qasm3Parser.DEFCALGRAMMAR);
			this.state = 203;
			this.match(qasm3Parser.StringLiteral);
			this.state = 204;
			this.match(qasm3Parser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public includeStatement(): IncludeStatementContext {
		let localctx: IncludeStatementContext = new IncludeStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, qasm3Parser.RULE_includeStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 206;
			this.match(qasm3Parser.INCLUDE);
			this.state = 207;
			this.match(qasm3Parser.StringLiteral);
			this.state = 208;
			this.match(qasm3Parser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public breakStatement(): BreakStatementContext {
		let localctx: BreakStatementContext = new BreakStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, qasm3Parser.RULE_breakStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 210;
			this.match(qasm3Parser.BREAK);
			this.state = 211;
			this.match(qasm3Parser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public continueStatement(): ContinueStatementContext {
		let localctx: ContinueStatementContext = new ContinueStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, qasm3Parser.RULE_continueStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 213;
			this.match(qasm3Parser.CONTINUE);
			this.state = 214;
			this.match(qasm3Parser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public endStatement(): EndStatementContext {
		let localctx: EndStatementContext = new EndStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, qasm3Parser.RULE_endStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 216;
			this.match(qasm3Parser.END);
			this.state = 217;
			this.match(qasm3Parser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public forStatement(): ForStatementContext {
		let localctx: ForStatementContext = new ForStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, qasm3Parser.RULE_forStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 219;
			this.match(qasm3Parser.FOR);
			this.state = 220;
			this.scalarType();
			this.state = 221;
			this.match(qasm3Parser.Identifier);
			this.state = 222;
			this.match(qasm3Parser.IN);
			this.state = 229;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 55:
				{
				this.state = 223;
				this.setExpression();
				}
				break;
			case 53:
				{
				this.state = 224;
				this.match(qasm3Parser.LBRACKET);
				this.state = 225;
				this.rangeExpression();
				this.state = 226;
				this.match(qasm3Parser.RBRACKET);
				}
				break;
			case 30:
			case 31:
			case 32:
			case 33:
			case 34:
			case 35:
			case 36:
			case 37:
			case 39:
			case 40:
			case 47:
			case 52:
			case 57:
			case 67:
			case 78:
			case 79:
			case 85:
			case 86:
			case 87:
			case 88:
			case 89:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
				{
				this.state = 228;
				this.expression(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 231;
			localctx._body = this.statementOrScope();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public ifStatement(): IfStatementContext {
		let localctx: IfStatementContext = new IfStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, qasm3Parser.RULE_ifStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 233;
			this.match(qasm3Parser.IF);
			this.state = 234;
			this.match(qasm3Parser.LPAREN);
			this.state = 235;
			this.expression(0);
			this.state = 236;
			this.match(qasm3Parser.RPAREN);
			this.state = 237;
			localctx._if_body = this.statementOrScope();
			this.state = 240;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				{
				this.state = 238;
				this.match(qasm3Parser.ELSE);
				this.state = 239;
				localctx._else_body = this.statementOrScope();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public returnStatement(): ReturnStatementContext {
		let localctx: ReturnStatementContext = new ReturnStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, qasm3Parser.RULE_returnStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 242;
			this.match(qasm3Parser.RETURN);
			this.state = 245;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 30:
			case 31:
			case 32:
			case 33:
			case 34:
			case 35:
			case 36:
			case 37:
			case 39:
			case 40:
			case 47:
			case 52:
			case 57:
			case 67:
			case 78:
			case 79:
			case 85:
			case 86:
			case 87:
			case 88:
			case 89:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
				{
				this.state = 243;
				this.expression(0);
				}
				break;
			case 50:
				{
				this.state = 244;
				this.measureExpression();
				}
				break;
			case 60:
				break;
			default:
				break;
			}
			this.state = 247;
			this.match(qasm3Parser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public whileStatement(): WhileStatementContext {
		let localctx: WhileStatementContext = new WhileStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, qasm3Parser.RULE_whileStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 249;
			this.match(qasm3Parser.WHILE);
			this.state = 250;
			this.match(qasm3Parser.LPAREN);
			this.state = 251;
			this.expression(0);
			this.state = 252;
			this.match(qasm3Parser.RPAREN);
			this.state = 253;
			localctx._body = this.statementOrScope();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public barrierStatement(): BarrierStatementContext {
		let localctx: BarrierStatementContext = new BarrierStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, qasm3Parser.RULE_barrierStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 255;
			this.match(qasm3Parser.BARRIER);
			this.state = 257;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===90 || _la===91) {
				{
				this.state = 256;
				this.gateOperandList();
				}
			}

			this.state = 259;
			this.match(qasm3Parser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public boxStatement(): BoxStatementContext {
		let localctx: BoxStatementContext = new BoxStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, qasm3Parser.RULE_boxStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 261;
			this.match(qasm3Parser.BOX);
			this.state = 263;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===53) {
				{
				this.state = 262;
				this.designator();
				}
			}

			this.state = 265;
			this.scope();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public delayStatement(): DelayStatementContext {
		let localctx: DelayStatementContext = new DelayStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, qasm3Parser.RULE_delayStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 267;
			this.match(qasm3Parser.DELAY);
			this.state = 268;
			this.designator();
			this.state = 270;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===90 || _la===91) {
				{
				this.state = 269;
				this.gateOperandList();
				}
			}

			this.state = 272;
			this.match(qasm3Parser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public gateCallStatement(): GateCallStatementContext {
		let localctx: GateCallStatementContext = new GateCallStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, qasm3Parser.RULE_gateCallStatement);
		let _la: number;
		try {
			this.state = 315;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 277;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 15) !== 0)) {
					{
					{
					this.state = 274;
					this.gateModifier();
					}
					}
					this.state = 279;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 280;
				this.match(qasm3Parser.Identifier);
				this.state = 286;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===57) {
					{
					this.state = 281;
					this.match(qasm3Parser.LPAREN);
					this.state = 283;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & 138544895) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & 268179457) !== 0)) {
						{
						this.state = 282;
						this.expressionList();
						}
					}

					this.state = 285;
					this.match(qasm3Parser.RPAREN);
					}
				}

				this.state = 289;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===53) {
					{
					this.state = 288;
					this.designator();
					}
				}

				this.state = 291;
				this.gateOperandList();
				this.state = 292;
				this.match(qasm3Parser.SEMICOLON);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 297;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 15) !== 0)) {
					{
					{
					this.state = 294;
					this.gateModifier();
					}
					}
					this.state = 299;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 300;
				this.match(qasm3Parser.GPHASE);
				this.state = 306;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===57) {
					{
					this.state = 301;
					this.match(qasm3Parser.LPAREN);
					this.state = 303;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & 138544895) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & 268179457) !== 0)) {
						{
						this.state = 302;
						this.expressionList();
						}
					}

					this.state = 305;
					this.match(qasm3Parser.RPAREN);
					}
				}

				this.state = 309;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===53) {
					{
					this.state = 308;
					this.designator();
					}
				}

				this.state = 312;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===90 || _la===91) {
					{
					this.state = 311;
					this.gateOperandList();
					}
				}

				this.state = 314;
				this.match(qasm3Parser.SEMICOLON);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public measureArrowAssignmentStatement(): MeasureArrowAssignmentStatementContext {
		let localctx: MeasureArrowAssignmentStatementContext = new MeasureArrowAssignmentStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, qasm3Parser.RULE_measureArrowAssignmentStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 317;
			this.measureExpression();
			this.state = 320;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===64) {
				{
				this.state = 318;
				this.match(qasm3Parser.ARROW);
				this.state = 319;
				this.indexedIdentifier();
				}
			}

			this.state = 322;
			this.match(qasm3Parser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public resetStatement(): ResetStatementContext {
		let localctx: ResetStatementContext = new ResetStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, qasm3Parser.RULE_resetStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 324;
			this.match(qasm3Parser.RESET);
			this.state = 325;
			this.gateOperand();
			this.state = 326;
			this.match(qasm3Parser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public aliasDeclarationStatement(): AliasDeclarationStatementContext {
		let localctx: AliasDeclarationStatementContext = new AliasDeclarationStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, qasm3Parser.RULE_aliasDeclarationStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 328;
			this.match(qasm3Parser.LET);
			this.state = 329;
			this.match(qasm3Parser.Identifier);
			this.state = 330;
			this.match(qasm3Parser.EQUALS);
			this.state = 331;
			this.aliasExpression();
			this.state = 332;
			this.match(qasm3Parser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public classicalDeclarationStatement(): ClassicalDeclarationStatementContext {
		let localctx: ClassicalDeclarationStatementContext = new ClassicalDeclarationStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, qasm3Parser.RULE_classicalDeclarationStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 336;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 30:
			case 31:
			case 32:
			case 33:
			case 34:
			case 35:
			case 36:
			case 39:
			case 40:
				{
				this.state = 334;
				this.scalarType();
				}
				break;
			case 37:
				{
				this.state = 335;
				this.arrayType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 338;
			this.match(qasm3Parser.Identifier);
			this.state = 341;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===63) {
				{
				this.state = 339;
				this.match(qasm3Parser.EQUALS);
				this.state = 340;
				this.declarationExpression();
				}
			}

			this.state = 343;
			this.match(qasm3Parser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public constDeclarationStatement(): ConstDeclarationStatementContext {
		let localctx: ConstDeclarationStatementContext = new ConstDeclarationStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, qasm3Parser.RULE_constDeclarationStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 345;
			this.match(qasm3Parser.CONST);
			this.state = 346;
			this.scalarType();
			this.state = 347;
			this.match(qasm3Parser.Identifier);
			this.state = 348;
			this.match(qasm3Parser.EQUALS);
			this.state = 349;
			this.declarationExpression();
			this.state = 350;
			this.match(qasm3Parser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public ioDeclarationStatement(): IoDeclarationStatementContext {
		let localctx: IoDeclarationStatementContext = new IoDeclarationStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, qasm3Parser.RULE_ioDeclarationStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 352;
			_la = this._input.LA(1);
			if(!(_la===22 || _la===23)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 355;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 30:
			case 31:
			case 32:
			case 33:
			case 34:
			case 35:
			case 36:
			case 39:
			case 40:
				{
				this.state = 353;
				this.scalarType();
				}
				break;
			case 37:
				{
				this.state = 354;
				this.arrayType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 357;
			this.match(qasm3Parser.Identifier);
			this.state = 358;
			this.match(qasm3Parser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oldStyleDeclarationStatement(): OldStyleDeclarationStatementContext {
		let localctx: OldStyleDeclarationStatementContext = new OldStyleDeclarationStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, qasm3Parser.RULE_oldStyleDeclarationStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 360;
			_la = this._input.LA(1);
			if(!(_la===27 || _la===29)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 361;
			this.match(qasm3Parser.Identifier);
			this.state = 363;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===53) {
				{
				this.state = 362;
				this.designator();
				}
			}

			this.state = 365;
			this.match(qasm3Parser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public quantumDeclarationStatement(): QuantumDeclarationStatementContext {
		let localctx: QuantumDeclarationStatementContext = new QuantumDeclarationStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, qasm3Parser.RULE_quantumDeclarationStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 367;
			this.qubitType();
			this.state = 368;
			this.match(qasm3Parser.Identifier);
			this.state = 369;
			this.match(qasm3Parser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public defStatement(): DefStatementContext {
		let localctx: DefStatementContext = new DefStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 56, qasm3Parser.RULE_defStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 371;
			this.match(qasm3Parser.DEF);
			this.state = 372;
			this.match(qasm3Parser.Identifier);
			this.state = 373;
			this.match(qasm3Parser.LPAREN);
			this.state = 375;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & 53247) !== 0)) {
				{
				this.state = 374;
				this.argumentDefinitionList();
				}
			}

			this.state = 377;
			this.match(qasm3Parser.RPAREN);
			this.state = 379;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===64) {
				{
				this.state = 378;
				this.returnSignature();
				}
			}

			this.state = 381;
			this.scope();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public externStatement(): ExternStatementContext {
		let localctx: ExternStatementContext = new ExternStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 58, qasm3Parser.RULE_externStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 383;
			this.match(qasm3Parser.EXTERN);
			this.state = 384;
			this.match(qasm3Parser.Identifier);
			this.state = 385;
			this.match(qasm3Parser.LPAREN);
			this.state = 387;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & 53235) !== 0)) {
				{
				this.state = 386;
				this.externArgumentList();
				}
			}

			this.state = 389;
			this.match(qasm3Parser.RPAREN);
			this.state = 391;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===64) {
				{
				this.state = 390;
				this.returnSignature();
				}
			}

			this.state = 393;
			this.match(qasm3Parser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public gateStatement(): GateStatementContext {
		let localctx: GateStatementContext = new GateStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 60, qasm3Parser.RULE_gateStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 395;
			this.match(qasm3Parser.GATE);
			this.state = 396;
			this.match(qasm3Parser.Identifier);
			this.state = 402;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===57) {
				{
				this.state = 397;
				this.match(qasm3Parser.LPAREN);
				this.state = 399;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===90) {
					{
					this.state = 398;
					localctx._params = this.identifierList();
					}
				}

				this.state = 401;
				this.match(qasm3Parser.RPAREN);
				}
			}

			this.state = 404;
			localctx._qubits = this.identifierList();
			this.state = 405;
			this.scope();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public assignmentStatement(): AssignmentStatementContext {
		let localctx: AssignmentStatementContext = new AssignmentStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, qasm3Parser.RULE_assignmentStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 407;
			this.indexedIdentifier();
			this.state = 408;
			localctx._op = this._input.LT(1);
			_la = this._input.LA(1);
			if(!(_la===63 || _la===81)) {
			    localctx._op = this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 411;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 30:
			case 31:
			case 32:
			case 33:
			case 34:
			case 35:
			case 36:
			case 37:
			case 39:
			case 40:
			case 47:
			case 52:
			case 57:
			case 67:
			case 78:
			case 79:
			case 85:
			case 86:
			case 87:
			case 88:
			case 89:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
				{
				this.state = 409;
				this.expression(0);
				}
				break;
			case 50:
				{
				this.state = 410;
				this.measureExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 413;
			this.match(qasm3Parser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expressionStatement(): ExpressionStatementContext {
		let localctx: ExpressionStatementContext = new ExpressionStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 64, qasm3Parser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 415;
			this.expression(0);
			this.state = 416;
			this.match(qasm3Parser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public calStatement(): CalStatementContext {
		let localctx: CalStatementContext = new CalStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 66, qasm3Parser.RULE_calStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 418;
			this.match(qasm3Parser.CAL);
			this.state = 419;
			this.match(qasm3Parser.LBRACE);
			this.state = 421;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===110) {
				{
				this.state = 420;
				this.match(qasm3Parser.CalibrationBlock);
				}
			}

			this.state = 423;
			this.match(qasm3Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public defcalStatement(): DefcalStatementContext {
		let localctx: DefcalStatementContext = new DefcalStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 68, qasm3Parser.RULE_defcalStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 425;
			this.match(qasm3Parser.DEFCAL);
			this.state = 426;
			this.defcalTarget();
			this.state = 432;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===57) {
				{
				this.state = 427;
				this.match(qasm3Parser.LPAREN);
				this.state = 429;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4261412864) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 34636223) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & 268179457) !== 0)) {
					{
					this.state = 428;
					this.defcalArgumentDefinitionList();
					}
				}

				this.state = 431;
				this.match(qasm3Parser.RPAREN);
				}
			}

			this.state = 434;
			this.defcalOperandList();
			this.state = 436;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===64) {
				{
				this.state = 435;
				this.returnSignature();
				}
			}

			this.state = 438;
			this.match(qasm3Parser.LBRACE);
			this.state = 440;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===110) {
				{
				this.state = 439;
				this.match(qasm3Parser.CalibrationBlock);
				}
			}

			this.state = 442;
			this.match(qasm3Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ExpressionContext = new ExpressionContext(this, this._ctx, _parentState);
		let _prevctx: ExpressionContext = localctx;
		let _startState: number = 70;
		this.enterRecursionRule(localctx, 70, qasm3Parser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 471;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 43, this._ctx) ) {
			case 1:
				{
				localctx = new ParenthesisExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 445;
				this.match(qasm3Parser.LPAREN);
				this.state = 446;
				this.expression(0);
				this.state = 447;
				this.match(qasm3Parser.RPAREN);
				}
				break;
			case 2:
				{
				localctx = new UnaryExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 449;
				(localctx as UnaryExpressionContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & 6145) !== 0))) {
				    (localctx as UnaryExpressionContext)._op = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 450;
				this.expression(15);
				}
				break;
			case 3:
				{
				localctx = new CastExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 453;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 30:
				case 31:
				case 32:
				case 33:
				case 34:
				case 35:
				case 36:
				case 39:
				case 40:
					{
					this.state = 451;
					this.scalarType();
					}
					break;
				case 37:
					{
					this.state = 452;
					this.arrayType();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 455;
				this.match(qasm3Parser.LPAREN);
				this.state = 456;
				this.expression(0);
				this.state = 457;
				this.match(qasm3Parser.RPAREN);
				}
				break;
			case 4:
				{
				localctx = new DurationofExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 459;
				this.match(qasm3Parser.DURATIONOF);
				this.state = 460;
				this.match(qasm3Parser.LPAREN);
				this.state = 461;
				this.scope();
				this.state = 462;
				this.match(qasm3Parser.RPAREN);
				}
				break;
			case 5:
				{
				localctx = new CallExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 464;
				this.match(qasm3Parser.Identifier);
				this.state = 465;
				this.match(qasm3Parser.LPAREN);
				this.state = 467;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & 138544895) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & 268179457) !== 0)) {
					{
					this.state = 466;
					this.expressionList();
					}
				}

				this.state = 469;
				this.match(qasm3Parser.RPAREN);
				}
				break;
			case 6:
				{
				localctx = new LiteralExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 470;
				_la = this._input.LA(1);
				if(!(_la===52 || ((((_la - 85)) & ~0x1F) === 0 && ((1 << (_la - 85)) & 1023) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 510;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 45, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 508;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 44, this._ctx) ) {
					case 1:
						{
						localctx = new PowerExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, qasm3Parser.RULE_expression);
						this.state = 473;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 474;
						(localctx as PowerExpressionContext)._op = this.match(qasm3Parser.DOUBLE_ASTERISK);
						this.state = 475;
						this.expression(16);
						}
						break;
					case 2:
						{
						localctx = new MultiplicativeExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, qasm3Parser.RULE_expression);
						this.state = 476;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 477;
						(localctx as MultiplicativeExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & 13) !== 0))) {
						    (localctx as MultiplicativeExpressionContext)._op = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 478;
						this.expression(15);
						}
						break;
					case 3:
						{
						localctx = new AdditiveExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, qasm3Parser.RULE_expression);
						this.state = 479;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 480;
						(localctx as AdditiveExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(_la===65 || _la===67)) {
						    (localctx as AdditiveExpressionContext)._op = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 481;
						this.expression(14);
						}
						break;
					case 4:
						{
						localctx = new BitshiftExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, qasm3Parser.RULE_expression);
						this.state = 482;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 483;
						(localctx as BitshiftExpressionContext)._op = this.match(qasm3Parser.BitshiftOperator);
						this.state = 484;
						this.expression(13);
						}
						break;
					case 5:
						{
						localctx = new ComparisonExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, qasm3Parser.RULE_expression);
						this.state = 485;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 486;
						(localctx as ComparisonExpressionContext)._op = this.match(qasm3Parser.ComparisonOperator);
						this.state = 487;
						this.expression(12);
						}
						break;
					case 6:
						{
						localctx = new EqualityExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, qasm3Parser.RULE_expression);
						this.state = 488;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 489;
						(localctx as EqualityExpressionContext)._op = this.match(qasm3Parser.EqualityOperator);
						this.state = 490;
						this.expression(11);
						}
						break;
					case 7:
						{
						localctx = new BitwiseAndExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, qasm3Parser.RULE_expression);
						this.state = 491;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 492;
						(localctx as BitwiseAndExpressionContext)._op = this.match(qasm3Parser.AMPERSAND);
						this.state = 493;
						this.expression(10);
						}
						break;
					case 8:
						{
						localctx = new BitwiseXorExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, qasm3Parser.RULE_expression);
						this.state = 494;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 495;
						(localctx as BitwiseXorExpressionContext)._op = this.match(qasm3Parser.CARET);
						this.state = 496;
						this.expression(9);
						}
						break;
					case 9:
						{
						localctx = new BitwiseOrExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, qasm3Parser.RULE_expression);
						this.state = 497;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 498;
						(localctx as BitwiseOrExpressionContext)._op = this.match(qasm3Parser.PIPE);
						this.state = 499;
						this.expression(8);
						}
						break;
					case 10:
						{
						localctx = new LogicalAndExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, qasm3Parser.RULE_expression);
						this.state = 500;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 501;
						(localctx as LogicalAndExpressionContext)._op = this.match(qasm3Parser.DOUBLE_AMPERSAND);
						this.state = 502;
						this.expression(7);
						}
						break;
					case 11:
						{
						localctx = new LogicalOrExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, qasm3Parser.RULE_expression);
						this.state = 503;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 504;
						(localctx as LogicalOrExpressionContext)._op = this.match(qasm3Parser.DOUBLE_PIPE);
						this.state = 505;
						this.expression(6);
						}
						break;
					case 12:
						{
						localctx = new IndexExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, qasm3Parser.RULE_expression);
						this.state = 506;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 507;
						this.indexOperator();
						}
						break;
					}
					}
				}
				this.state = 512;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 45, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public aliasExpression(): AliasExpressionContext {
		let localctx: AliasExpressionContext = new AliasExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 72, qasm3Parser.RULE_aliasExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 513;
			this.expression(0);
			this.state = 518;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===66) {
				{
				{
				this.state = 514;
				this.match(qasm3Parser.DOUBLE_PLUS);
				this.state = 515;
				this.expression(0);
				}
				}
				this.state = 520;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public declarationExpression(): DeclarationExpressionContext {
		let localctx: DeclarationExpressionContext = new DeclarationExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 74, qasm3Parser.RULE_declarationExpression);
		try {
			this.state = 524;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 55:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 521;
				this.arrayLiteral();
				}
				break;
			case 30:
			case 31:
			case 32:
			case 33:
			case 34:
			case 35:
			case 36:
			case 37:
			case 39:
			case 40:
			case 47:
			case 52:
			case 57:
			case 67:
			case 78:
			case 79:
			case 85:
			case 86:
			case 87:
			case 88:
			case 89:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 522;
				this.expression(0);
				}
				break;
			case 50:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 523;
				this.measureExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public measureExpression(): MeasureExpressionContext {
		let localctx: MeasureExpressionContext = new MeasureExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 76, qasm3Parser.RULE_measureExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 526;
			this.match(qasm3Parser.MEASURE);
			this.state = 527;
			this.gateOperand();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public rangeExpression(): RangeExpressionContext {
		let localctx: RangeExpressionContext = new RangeExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 78, qasm3Parser.RULE_rangeExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 530;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & 138544895) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & 268179457) !== 0)) {
				{
				this.state = 529;
				this.expression(0);
				}
			}

			this.state = 532;
			this.match(qasm3Parser.COLON);
			this.state = 534;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & 138544895) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & 268179457) !== 0)) {
				{
				this.state = 533;
				this.expression(0);
				}
			}

			this.state = 538;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===59) {
				{
				this.state = 536;
				this.match(qasm3Parser.COLON);
				this.state = 537;
				this.expression(0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public setExpression(): SetExpressionContext {
		let localctx: SetExpressionContext = new SetExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 80, qasm3Parser.RULE_setExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 540;
			this.match(qasm3Parser.LBRACE);
			this.state = 541;
			this.expression(0);
			this.state = 546;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 51, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 542;
					this.match(qasm3Parser.COMMA);
					this.state = 543;
					this.expression(0);
					}
					}
				}
				this.state = 548;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 51, this._ctx);
			}
			this.state = 550;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===62) {
				{
				this.state = 549;
				this.match(qasm3Parser.COMMA);
				}
			}

			this.state = 552;
			this.match(qasm3Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public arrayLiteral(): ArrayLiteralContext {
		let localctx: ArrayLiteralContext = new ArrayLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 82, qasm3Parser.RULE_arrayLiteral);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 554;
			this.match(qasm3Parser.LBRACE);
			this.state = 557;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 30:
			case 31:
			case 32:
			case 33:
			case 34:
			case 35:
			case 36:
			case 37:
			case 39:
			case 40:
			case 47:
			case 52:
			case 57:
			case 67:
			case 78:
			case 79:
			case 85:
			case 86:
			case 87:
			case 88:
			case 89:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
				{
				this.state = 555;
				this.expression(0);
				}
				break;
			case 55:
				{
				this.state = 556;
				this.arrayLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 566;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 55, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 559;
					this.match(qasm3Parser.COMMA);
					this.state = 562;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 30:
					case 31:
					case 32:
					case 33:
					case 34:
					case 35:
					case 36:
					case 37:
					case 39:
					case 40:
					case 47:
					case 52:
					case 57:
					case 67:
					case 78:
					case 79:
					case 85:
					case 86:
					case 87:
					case 88:
					case 89:
					case 90:
					case 91:
					case 92:
					case 93:
					case 94:
						{
						this.state = 560;
						this.expression(0);
						}
						break;
					case 55:
						{
						this.state = 561;
						this.arrayLiteral();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
				}
				this.state = 568;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 55, this._ctx);
			}
			this.state = 570;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===62) {
				{
				this.state = 569;
				this.match(qasm3Parser.COMMA);
				}
			}

			this.state = 572;
			this.match(qasm3Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public indexOperator(): IndexOperatorContext {
		let localctx: IndexOperatorContext = new IndexOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 84, qasm3Parser.RULE_indexOperator);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 574;
			this.match(qasm3Parser.LBRACKET);
			this.state = 593;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 55:
				{
				this.state = 575;
				this.setExpression();
				}
				break;
			case 30:
			case 31:
			case 32:
			case 33:
			case 34:
			case 35:
			case 36:
			case 37:
			case 39:
			case 40:
			case 47:
			case 52:
			case 57:
			case 59:
			case 67:
			case 78:
			case 79:
			case 85:
			case 86:
			case 87:
			case 88:
			case 89:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
				{
				this.state = 578;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 57, this._ctx) ) {
				case 1:
					{
					this.state = 576;
					this.expression(0);
					}
					break;
				case 2:
					{
					this.state = 577;
					this.rangeExpression();
					}
					break;
				}
				this.state = 587;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 59, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 580;
						this.match(qasm3Parser.COMMA);
						this.state = 583;
						this._errHandler.sync(this);
						switch ( this._interp.adaptivePredict(this._input, 58, this._ctx) ) {
						case 1:
							{
							this.state = 581;
							this.expression(0);
							}
							break;
						case 2:
							{
							this.state = 582;
							this.rangeExpression();
							}
							break;
						}
						}
						}
					}
					this.state = 589;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 59, this._ctx);
				}
				this.state = 591;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===62) {
					{
					this.state = 590;
					this.match(qasm3Parser.COMMA);
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 595;
			this.match(qasm3Parser.RBRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public indexedIdentifier(): IndexedIdentifierContext {
		let localctx: IndexedIdentifierContext = new IndexedIdentifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 86, qasm3Parser.RULE_indexedIdentifier);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 597;
			this.match(qasm3Parser.Identifier);
			this.state = 601;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===53) {
				{
				{
				this.state = 598;
				this.indexOperator();
				}
				}
				this.state = 603;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public returnSignature(): ReturnSignatureContext {
		let localctx: ReturnSignatureContext = new ReturnSignatureContext(this, this._ctx, this.state);
		this.enterRule(localctx, 88, qasm3Parser.RULE_returnSignature);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 604;
			this.match(qasm3Parser.ARROW);
			this.state = 605;
			this.scalarType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public gateModifier(): GateModifierContext {
		let localctx: GateModifierContext = new GateModifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 90, qasm3Parser.RULE_gateModifier);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 620;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 42:
				{
				this.state = 607;
				this.match(qasm3Parser.INV);
				}
				break;
			case 43:
				{
				this.state = 608;
				this.match(qasm3Parser.POW);
				this.state = 609;
				this.match(qasm3Parser.LPAREN);
				this.state = 610;
				this.expression(0);
				this.state = 611;
				this.match(qasm3Parser.RPAREN);
				}
				break;
			case 44:
			case 45:
				{
				this.state = 613;
				_la = this._input.LA(1);
				if(!(_la===44 || _la===45)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 618;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===57) {
					{
					this.state = 614;
					this.match(qasm3Parser.LPAREN);
					this.state = 615;
					this.expression(0);
					this.state = 616;
					this.match(qasm3Parser.RPAREN);
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 622;
			this.match(qasm3Parser.AT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public scalarType(): ScalarTypeContext {
		let localctx: ScalarTypeContext = new ScalarTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 92, qasm3Parser.RULE_scalarType);
		let _la: number;
		try {
			this.state = 654;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 31:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 624;
				this.match(qasm3Parser.BIT);
				this.state = 626;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===53) {
					{
					this.state = 625;
					this.designator();
					}
				}

				}
				break;
			case 32:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 628;
				this.match(qasm3Parser.INT);
				this.state = 630;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===53) {
					{
					this.state = 629;
					this.designator();
					}
				}

				}
				break;
			case 33:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 632;
				this.match(qasm3Parser.UINT);
				this.state = 634;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===53) {
					{
					this.state = 633;
					this.designator();
					}
				}

				}
				break;
			case 34:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 636;
				this.match(qasm3Parser.FLOAT);
				this.state = 638;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===53) {
					{
					this.state = 637;
					this.designator();
					}
				}

				}
				break;
			case 35:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 640;
				this.match(qasm3Parser.ANGLE);
				this.state = 642;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===53) {
					{
					this.state = 641;
					this.designator();
					}
				}

				}
				break;
			case 30:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 644;
				this.match(qasm3Parser.BOOL);
				}
				break;
			case 39:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 645;
				this.match(qasm3Parser.DURATION);
				}
				break;
			case 40:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 646;
				this.match(qasm3Parser.STRETCH);
				}
				break;
			case 36:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 647;
				this.match(qasm3Parser.COMPLEX);
				this.state = 652;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===53) {
					{
					this.state = 648;
					this.match(qasm3Parser.LBRACKET);
					this.state = 649;
					this.scalarType();
					this.state = 650;
					this.match(qasm3Parser.RBRACKET);
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public qubitType(): QubitTypeContext {
		let localctx: QubitTypeContext = new QubitTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 94, qasm3Parser.RULE_qubitType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 656;
			this.match(qasm3Parser.QUBIT);
			this.state = 658;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===53) {
				{
				this.state = 657;
				this.designator();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public arrayType(): ArrayTypeContext {
		let localctx: ArrayTypeContext = new ArrayTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 96, qasm3Parser.RULE_arrayType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 660;
			this.match(qasm3Parser.ARRAY);
			this.state = 661;
			this.match(qasm3Parser.LBRACKET);
			this.state = 662;
			this.scalarType();
			this.state = 663;
			this.match(qasm3Parser.COMMA);
			this.state = 664;
			this.expressionList();
			this.state = 665;
			this.match(qasm3Parser.RBRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public arrayReferenceType(): ArrayReferenceTypeContext {
		let localctx: ArrayReferenceTypeContext = new ArrayReferenceTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 98, qasm3Parser.RULE_arrayReferenceType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 667;
			_la = this._input.LA(1);
			if(!(_la===25 || _la===26)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 668;
			this.match(qasm3Parser.ARRAY);
			this.state = 669;
			this.match(qasm3Parser.LBRACKET);
			this.state = 670;
			this.scalarType();
			this.state = 671;
			this.match(qasm3Parser.COMMA);
			this.state = 676;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 30:
			case 31:
			case 32:
			case 33:
			case 34:
			case 35:
			case 36:
			case 37:
			case 39:
			case 40:
			case 47:
			case 52:
			case 57:
			case 67:
			case 78:
			case 79:
			case 85:
			case 86:
			case 87:
			case 88:
			case 89:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
				{
				this.state = 672;
				this.expressionList();
				}
				break;
			case 46:
				{
				this.state = 673;
				this.match(qasm3Parser.DIM);
				this.state = 674;
				this.match(qasm3Parser.EQUALS);
				this.state = 675;
				this.expression(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 678;
			this.match(qasm3Parser.RBRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public designator(): DesignatorContext {
		let localctx: DesignatorContext = new DesignatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 100, qasm3Parser.RULE_designator);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 680;
			this.match(qasm3Parser.LBRACKET);
			this.state = 681;
			this.expression(0);
			this.state = 682;
			this.match(qasm3Parser.RBRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public defcalTarget(): DefcalTargetContext {
		let localctx: DefcalTargetContext = new DefcalTargetContext(this, this._ctx, this.state);
		this.enterRule(localctx, 102, qasm3Parser.RULE_defcalTarget);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 684;
			_la = this._input.LA(1);
			if(!(((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 7) !== 0) || _la===90)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public defcalArgumentDefinition(): DefcalArgumentDefinitionContext {
		let localctx: DefcalArgumentDefinitionContext = new DefcalArgumentDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 104, qasm3Parser.RULE_defcalArgumentDefinition);
		try {
			this.state = 688;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 74, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 686;
				this.expression(0);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 687;
				this.argumentDefinition();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public defcalOperand(): DefcalOperandContext {
		let localctx: DefcalOperandContext = new DefcalOperandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 106, qasm3Parser.RULE_defcalOperand);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 690;
			_la = this._input.LA(1);
			if(!(_la===90 || _la===91)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public gateOperand(): GateOperandContext {
		let localctx: GateOperandContext = new GateOperandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 108, qasm3Parser.RULE_gateOperand);
		try {
			this.state = 694;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 90:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 692;
				this.indexedIdentifier();
				}
				break;
			case 91:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 693;
				this.match(qasm3Parser.HardwareQubit);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public externArgument(): ExternArgumentContext {
		let localctx: ExternArgumentContext = new ExternArgumentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 110, qasm3Parser.RULE_externArgument);
		let _la: number;
		try {
			this.state = 702;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 30:
			case 31:
			case 32:
			case 33:
			case 34:
			case 35:
			case 36:
			case 39:
			case 40:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 696;
				this.scalarType();
				}
				break;
			case 25:
			case 26:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 697;
				this.arrayReferenceType();
				}
				break;
			case 29:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 698;
				this.match(qasm3Parser.CREG);
				this.state = 700;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===53) {
					{
					this.state = 699;
					this.designator();
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public argumentDefinition(): ArgumentDefinitionContext {
		let localctx: ArgumentDefinitionContext = new ArgumentDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 112, qasm3Parser.RULE_argumentDefinition);
		let _la: number;
		try {
			this.state = 718;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 30:
			case 31:
			case 32:
			case 33:
			case 34:
			case 35:
			case 36:
			case 39:
			case 40:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 704;
				this.scalarType();
				this.state = 705;
				this.match(qasm3Parser.Identifier);
				}
				break;
			case 28:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 707;
				this.qubitType();
				this.state = 708;
				this.match(qasm3Parser.Identifier);
				}
				break;
			case 27:
			case 29:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 710;
				_la = this._input.LA(1);
				if(!(_la===27 || _la===29)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 711;
				this.match(qasm3Parser.Identifier);
				this.state = 713;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===53) {
					{
					this.state = 712;
					this.designator();
					}
				}

				}
				break;
			case 25:
			case 26:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 715;
				this.arrayReferenceType();
				this.state = 716;
				this.match(qasm3Parser.Identifier);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public argumentDefinitionList(): ArgumentDefinitionListContext {
		let localctx: ArgumentDefinitionListContext = new ArgumentDefinitionListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 114, qasm3Parser.RULE_argumentDefinitionList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 720;
			this.argumentDefinition();
			this.state = 725;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 80, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 721;
					this.match(qasm3Parser.COMMA);
					this.state = 722;
					this.argumentDefinition();
					}
					}
				}
				this.state = 727;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 80, this._ctx);
			}
			this.state = 729;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===62) {
				{
				this.state = 728;
				this.match(qasm3Parser.COMMA);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public defcalArgumentDefinitionList(): DefcalArgumentDefinitionListContext {
		let localctx: DefcalArgumentDefinitionListContext = new DefcalArgumentDefinitionListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 116, qasm3Parser.RULE_defcalArgumentDefinitionList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 731;
			this.defcalArgumentDefinition();
			this.state = 736;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 82, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 732;
					this.match(qasm3Parser.COMMA);
					this.state = 733;
					this.defcalArgumentDefinition();
					}
					}
				}
				this.state = 738;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 82, this._ctx);
			}
			this.state = 740;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===62) {
				{
				this.state = 739;
				this.match(qasm3Parser.COMMA);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public defcalOperandList(): DefcalOperandListContext {
		let localctx: DefcalOperandListContext = new DefcalOperandListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 118, qasm3Parser.RULE_defcalOperandList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 742;
			this.defcalOperand();
			this.state = 747;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 84, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 743;
					this.match(qasm3Parser.COMMA);
					this.state = 744;
					this.defcalOperand();
					}
					}
				}
				this.state = 749;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 84, this._ctx);
			}
			this.state = 751;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===62) {
				{
				this.state = 750;
				this.match(qasm3Parser.COMMA);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expressionList(): ExpressionListContext {
		let localctx: ExpressionListContext = new ExpressionListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 120, qasm3Parser.RULE_expressionList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 753;
			this.expression(0);
			this.state = 758;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 86, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 754;
					this.match(qasm3Parser.COMMA);
					this.state = 755;
					this.expression(0);
					}
					}
				}
				this.state = 760;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 86, this._ctx);
			}
			this.state = 762;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===62) {
				{
				this.state = 761;
				this.match(qasm3Parser.COMMA);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public identifierList(): IdentifierListContext {
		let localctx: IdentifierListContext = new IdentifierListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 122, qasm3Parser.RULE_identifierList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 764;
			this.match(qasm3Parser.Identifier);
			this.state = 769;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 88, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 765;
					this.match(qasm3Parser.COMMA);
					this.state = 766;
					this.match(qasm3Parser.Identifier);
					}
					}
				}
				this.state = 771;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 88, this._ctx);
			}
			this.state = 773;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===62) {
				{
				this.state = 772;
				this.match(qasm3Parser.COMMA);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public gateOperandList(): GateOperandListContext {
		let localctx: GateOperandListContext = new GateOperandListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 124, qasm3Parser.RULE_gateOperandList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 775;
			this.gateOperand();
			this.state = 780;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 90, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 776;
					this.match(qasm3Parser.COMMA);
					this.state = 777;
					this.gateOperand();
					}
					}
				}
				this.state = 782;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 90, this._ctx);
			}
			this.state = 784;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===62) {
				{
				this.state = 783;
				this.match(qasm3Parser.COMMA);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public externArgumentList(): ExternArgumentListContext {
		let localctx: ExternArgumentListContext = new ExternArgumentListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 126, qasm3Parser.RULE_externArgumentList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 786;
			this.externArgument();
			this.state = 791;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 92, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 787;
					this.match(qasm3Parser.COMMA);
					this.state = 788;
					this.externArgument();
					}
					}
				}
				this.state = 793;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 92, this._ctx);
			}
			this.state = 795;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===62) {
				{
				this.state = 794;
				this.match(qasm3Parser.COMMA);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 35:
			return this.expression_sempred(localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 16);
		case 1:
			return this.precpred(this._ctx, 14);
		case 2:
			return this.precpred(this._ctx, 13);
		case 3:
			return this.precpred(this._ctx, 12);
		case 4:
			return this.precpred(this._ctx, 11);
		case 5:
			return this.precpred(this._ctx, 10);
		case 6:
			return this.precpred(this._ctx, 9);
		case 7:
			return this.precpred(this._ctx, 8);
		case 8:
			return this.precpred(this._ctx, 7);
		case 9:
			return this.precpred(this._ctx, 6);
		case 10:
			return this.precpred(this._ctx, 5);
		case 11:
			return this.precpred(this._ctx, 17);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,110,798,2,0,7,0,
	2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,
	2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,
	17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,
	7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,
	31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,
	2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
	46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,
	7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,
	60,2,61,7,61,2,62,7,62,2,63,7,63,1,0,3,0,130,8,0,1,0,5,0,133,8,0,10,0,12,
	0,136,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,2,1,2,5,2,146,8,2,10,2,12,2,149,9,2,
	1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,
	1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,179,8,2,3,2,181,8,2,1,3,1,3,
	3,3,185,8,3,1,4,1,4,5,4,189,8,4,10,4,12,4,192,9,4,1,4,1,4,1,5,1,5,1,5,1,
	6,1,6,3,6,201,8,6,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,10,1,10,
	1,10,1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,3,
	12,230,8,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,13,1,13,3,13,241,8,13,
	1,14,1,14,1,14,3,14,246,8,14,1,14,1,14,1,15,1,15,1,15,1,15,1,15,1,15,1,
	16,1,16,3,16,258,8,16,1,16,1,16,1,17,1,17,3,17,264,8,17,1,17,1,17,1,18,
	1,18,1,18,3,18,271,8,18,1,18,1,18,1,19,5,19,276,8,19,10,19,12,19,279,9,
	19,1,19,1,19,1,19,3,19,284,8,19,1,19,3,19,287,8,19,1,19,3,19,290,8,19,1,
	19,1,19,1,19,1,19,5,19,296,8,19,10,19,12,19,299,9,19,1,19,1,19,1,19,3,19,
	304,8,19,1,19,3,19,307,8,19,1,19,3,19,310,8,19,1,19,3,19,313,8,19,1,19,
	3,19,316,8,19,1,20,1,20,1,20,3,20,321,8,20,1,20,1,20,1,21,1,21,1,21,1,21,
	1,22,1,22,1,22,1,22,1,22,1,22,1,23,1,23,3,23,337,8,23,1,23,1,23,1,23,3,
	23,342,8,23,1,23,1,23,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,25,1,25,1,25,
	3,25,356,8,25,1,25,1,25,1,25,1,26,1,26,1,26,3,26,364,8,26,1,26,1,26,1,27,
	1,27,1,27,1,27,1,28,1,28,1,28,1,28,3,28,376,8,28,1,28,1,28,3,28,380,8,28,
	1,28,1,28,1,29,1,29,1,29,1,29,3,29,388,8,29,1,29,1,29,3,29,392,8,29,1,29,
	1,29,1,30,1,30,1,30,1,30,3,30,400,8,30,1,30,3,30,403,8,30,1,30,1,30,1,30,
	1,31,1,31,1,31,1,31,3,31,412,8,31,1,31,1,31,1,32,1,32,1,32,1,33,1,33,1,
	33,3,33,422,8,33,1,33,1,33,1,34,1,34,1,34,1,34,3,34,430,8,34,1,34,3,34,
	433,8,34,1,34,1,34,3,34,437,8,34,1,34,1,34,3,34,441,8,34,1,34,1,34,1,35,
	1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,3,35,454,8,35,1,35,1,35,1,35,1,
	35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,3,35,468,8,35,1,35,1,35,3,35,
	472,8,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,
	35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,
	1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,5,35,509,8,35,10,35,12,35,512,9,
	35,1,36,1,36,1,36,5,36,517,8,36,10,36,12,36,520,9,36,1,37,1,37,1,37,3,37,
	525,8,37,1,38,1,38,1,38,1,39,3,39,531,8,39,1,39,1,39,3,39,535,8,39,1,39,
	1,39,3,39,539,8,39,1,40,1,40,1,40,1,40,5,40,545,8,40,10,40,12,40,548,9,
	40,1,40,3,40,551,8,40,1,40,1,40,1,41,1,41,1,41,3,41,558,8,41,1,41,1,41,
	1,41,3,41,563,8,41,5,41,565,8,41,10,41,12,41,568,9,41,1,41,3,41,571,8,41,
	1,41,1,41,1,42,1,42,1,42,1,42,3,42,579,8,42,1,42,1,42,1,42,3,42,584,8,42,
	5,42,586,8,42,10,42,12,42,589,9,42,1,42,3,42,592,8,42,3,42,594,8,42,1,42,
	1,42,1,43,1,43,5,43,600,8,43,10,43,12,43,603,9,43,1,44,1,44,1,44,1,45,1,
	45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,3,45,619,8,45,3,45,621,
	8,45,1,45,1,45,1,46,1,46,3,46,627,8,46,1,46,1,46,3,46,631,8,46,1,46,1,46,
	3,46,635,8,46,1,46,1,46,3,46,639,8,46,1,46,1,46,3,46,643,8,46,1,46,1,46,
	1,46,1,46,1,46,1,46,1,46,1,46,3,46,653,8,46,3,46,655,8,46,1,47,1,47,3,47,
	659,8,47,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,49,1,49,1,49,1,49,1,49,1,
	49,1,49,1,49,1,49,3,49,677,8,49,1,49,1,49,1,50,1,50,1,50,1,50,1,51,1,51,
	1,52,1,52,3,52,689,8,52,1,53,1,53,1,54,1,54,3,54,695,8,54,1,55,1,55,1,55,
	1,55,3,55,701,8,55,3,55,703,8,55,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,
	1,56,3,56,714,8,56,1,56,1,56,1,56,3,56,719,8,56,1,57,1,57,1,57,5,57,724,
	8,57,10,57,12,57,727,9,57,1,57,3,57,730,8,57,1,58,1,58,1,58,5,58,735,8,
	58,10,58,12,58,738,9,58,1,58,3,58,741,8,58,1,59,1,59,1,59,5,59,746,8,59,
	10,59,12,59,749,9,59,1,59,3,59,752,8,59,1,60,1,60,1,60,5,60,757,8,60,10,
	60,12,60,760,9,60,1,60,3,60,763,8,60,1,61,1,61,1,61,5,61,768,8,61,10,61,
	12,61,771,9,61,1,61,3,61,774,8,61,1,62,1,62,1,62,5,62,779,8,62,10,62,12,
	62,782,9,62,1,62,3,62,785,8,62,1,63,1,63,1,63,5,63,790,8,63,10,63,12,63,
	793,9,63,1,63,3,63,796,8,63,1,63,0,1,70,64,0,2,4,6,8,10,12,14,16,18,20,
	22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,
	70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,
	114,116,118,120,122,124,126,0,11,1,0,22,23,2,0,27,27,29,29,2,0,63,63,81,
	81,2,0,67,67,78,79,2,0,52,52,85,94,2,0,68,68,70,71,2,0,65,65,67,67,1,0,
	44,45,1,0,25,26,2,0,48,50,90,90,1,0,90,91,881,0,129,1,0,0,0,2,139,1,0,0,
	0,4,180,1,0,0,0,6,182,1,0,0,0,8,186,1,0,0,0,10,195,1,0,0,0,12,200,1,0,0,
	0,14,202,1,0,0,0,16,206,1,0,0,0,18,210,1,0,0,0,20,213,1,0,0,0,22,216,1,
	0,0,0,24,219,1,0,0,0,26,233,1,0,0,0,28,242,1,0,0,0,30,249,1,0,0,0,32,255,
	1,0,0,0,34,261,1,0,0,0,36,267,1,0,0,0,38,315,1,0,0,0,40,317,1,0,0,0,42,
	324,1,0,0,0,44,328,1,0,0,0,46,336,1,0,0,0,48,345,1,0,0,0,50,352,1,0,0,0,
	52,360,1,0,0,0,54,367,1,0,0,0,56,371,1,0,0,0,58,383,1,0,0,0,60,395,1,0,
	0,0,62,407,1,0,0,0,64,415,1,0,0,0,66,418,1,0,0,0,68,425,1,0,0,0,70,471,
	1,0,0,0,72,513,1,0,0,0,74,524,1,0,0,0,76,526,1,0,0,0,78,530,1,0,0,0,80,
	540,1,0,0,0,82,554,1,0,0,0,84,574,1,0,0,0,86,597,1,0,0,0,88,604,1,0,0,0,
	90,620,1,0,0,0,92,654,1,0,0,0,94,656,1,0,0,0,96,660,1,0,0,0,98,667,1,0,
	0,0,100,680,1,0,0,0,102,684,1,0,0,0,104,688,1,0,0,0,106,690,1,0,0,0,108,
	694,1,0,0,0,110,702,1,0,0,0,112,718,1,0,0,0,114,720,1,0,0,0,116,731,1,0,
	0,0,118,742,1,0,0,0,120,753,1,0,0,0,122,764,1,0,0,0,124,775,1,0,0,0,126,
	786,1,0,0,0,128,130,3,2,1,0,129,128,1,0,0,0,129,130,1,0,0,0,130,134,1,0,
	0,0,131,133,3,4,2,0,132,131,1,0,0,0,133,136,1,0,0,0,134,132,1,0,0,0,134,
	135,1,0,0,0,135,137,1,0,0,0,136,134,1,0,0,0,137,138,5,0,0,1,138,1,1,0,0,
	0,139,140,5,1,0,0,140,141,5,100,0,0,141,142,5,60,0,0,142,3,1,0,0,0,143,
	181,3,10,5,0,144,146,3,6,3,0,145,144,1,0,0,0,146,149,1,0,0,0,147,145,1,
	0,0,0,147,148,1,0,0,0,148,178,1,0,0,0,149,147,1,0,0,0,150,179,3,44,22,0,
	151,179,3,62,31,0,152,179,3,32,16,0,153,179,3,34,17,0,154,179,3,18,9,0,
	155,179,3,66,33,0,156,179,3,14,7,0,157,179,3,46,23,0,158,179,3,48,24,0,
	159,179,3,20,10,0,160,179,3,56,28,0,161,179,3,68,34,0,162,179,3,36,18,0,
	163,179,3,22,11,0,164,179,3,64,32,0,165,179,3,58,29,0,166,179,3,24,12,0,
	167,179,3,38,19,0,168,179,3,60,30,0,169,179,3,26,13,0,170,179,3,16,8,0,
	171,179,3,50,25,0,172,179,3,40,20,0,173,179,3,52,26,0,174,179,3,54,27,0,
	175,179,3,42,21,0,176,179,3,28,14,0,177,179,3,30,15,0,178,150,1,0,0,0,178,
	151,1,0,0,0,178,152,1,0,0,0,178,153,1,0,0,0,178,154,1,0,0,0,178,155,1,0,
	0,0,178,156,1,0,0,0,178,157,1,0,0,0,178,158,1,0,0,0,178,159,1,0,0,0,178,
	160,1,0,0,0,178,161,1,0,0,0,178,162,1,0,0,0,178,163,1,0,0,0,178,164,1,0,
	0,0,178,165,1,0,0,0,178,166,1,0,0,0,178,167,1,0,0,0,178,168,1,0,0,0,178,
	169,1,0,0,0,178,170,1,0,0,0,178,171,1,0,0,0,178,172,1,0,0,0,178,173,1,0,
	0,0,178,174,1,0,0,0,178,175,1,0,0,0,178,176,1,0,0,0,178,177,1,0,0,0,179,
	181,1,0,0,0,180,143,1,0,0,0,180,147,1,0,0,0,181,5,1,0,0,0,182,184,5,21,
	0,0,183,185,5,105,0,0,184,183,1,0,0,0,184,185,1,0,0,0,185,7,1,0,0,0,186,
	190,5,55,0,0,187,189,3,4,2,0,188,187,1,0,0,0,189,192,1,0,0,0,190,188,1,
	0,0,0,190,191,1,0,0,0,191,193,1,0,0,0,192,190,1,0,0,0,193,194,5,56,0,0,
	194,9,1,0,0,0,195,196,5,20,0,0,196,197,5,105,0,0,197,11,1,0,0,0,198,201,
	3,4,2,0,199,201,3,8,4,0,200,198,1,0,0,0,200,199,1,0,0,0,201,13,1,0,0,0,
	202,203,5,3,0,0,203,204,5,102,0,0,204,205,5,60,0,0,205,15,1,0,0,0,206,207,
	5,2,0,0,207,208,5,102,0,0,208,209,5,60,0,0,209,17,1,0,0,0,210,211,5,11,
	0,0,211,212,5,60,0,0,212,19,1,0,0,0,213,214,5,12,0,0,214,215,5,60,0,0,215,
	21,1,0,0,0,216,217,5,15,0,0,217,218,5,60,0,0,218,23,1,0,0,0,219,220,5,17,
	0,0,220,221,3,92,46,0,221,222,5,90,0,0,222,229,5,19,0,0,223,230,3,80,40,
	0,224,225,5,53,0,0,225,226,3,78,39,0,226,227,5,54,0,0,227,230,1,0,0,0,228,
	230,3,70,35,0,229,223,1,0,0,0,229,224,1,0,0,0,229,228,1,0,0,0,230,231,1,
	0,0,0,231,232,3,12,6,0,232,25,1,0,0,0,233,234,5,13,0,0,234,235,5,57,0,0,
	235,236,3,70,35,0,236,237,5,58,0,0,237,240,3,12,6,0,238,239,5,14,0,0,239,
	241,3,12,6,0,240,238,1,0,0,0,240,241,1,0,0,0,241,27,1,0,0,0,242,245,5,16,
	0,0,243,246,3,70,35,0,244,246,3,76,38,0,245,243,1,0,0,0,245,244,1,0,0,0,
	245,246,1,0,0,0,246,247,1,0,0,0,247,248,5,60,0,0,248,29,1,0,0,0,249,250,
	5,18,0,0,250,251,5,57,0,0,251,252,3,70,35,0,252,253,5,58,0,0,253,254,3,
	12,6,0,254,31,1,0,0,0,255,257,5,51,0,0,256,258,3,124,62,0,257,256,1,0,0,
	0,257,258,1,0,0,0,258,259,1,0,0,0,259,260,5,60,0,0,260,33,1,0,0,0,261,263,
	5,9,0,0,262,264,3,100,50,0,263,262,1,0,0,0,263,264,1,0,0,0,264,265,1,0,
	0,0,265,266,3,8,4,0,266,35,1,0,0,0,267,268,5,48,0,0,268,270,3,100,50,0,
	269,271,3,124,62,0,270,269,1,0,0,0,270,271,1,0,0,0,271,272,1,0,0,0,272,
	273,5,60,0,0,273,37,1,0,0,0,274,276,3,90,45,0,275,274,1,0,0,0,276,279,1,
	0,0,0,277,275,1,0,0,0,277,278,1,0,0,0,278,280,1,0,0,0,279,277,1,0,0,0,280,
	286,5,90,0,0,281,283,5,57,0,0,282,284,3,120,60,0,283,282,1,0,0,0,283,284,
	1,0,0,0,284,285,1,0,0,0,285,287,5,58,0,0,286,281,1,0,0,0,286,287,1,0,0,
	0,287,289,1,0,0,0,288,290,3,100,50,0,289,288,1,0,0,0,289,290,1,0,0,0,290,
	291,1,0,0,0,291,292,3,124,62,0,292,293,5,60,0,0,293,316,1,0,0,0,294,296,
	3,90,45,0,295,294,1,0,0,0,296,299,1,0,0,0,297,295,1,0,0,0,297,298,1,0,0,
	0,298,300,1,0,0,0,299,297,1,0,0,0,300,306,5,41,0,0,301,303,5,57,0,0,302,
	304,3,120,60,0,303,302,1,0,0,0,303,304,1,0,0,0,304,305,1,0,0,0,305,307,
	5,58,0,0,306,301,1,0,0,0,306,307,1,0,0,0,307,309,1,0,0,0,308,310,3,100,
	50,0,309,308,1,0,0,0,309,310,1,0,0,0,310,312,1,0,0,0,311,313,3,124,62,0,
	312,311,1,0,0,0,312,313,1,0,0,0,313,314,1,0,0,0,314,316,5,60,0,0,315,277,
	1,0,0,0,315,297,1,0,0,0,316,39,1,0,0,0,317,320,3,76,38,0,318,319,5,64,0,
	0,319,321,3,86,43,0,320,318,1,0,0,0,320,321,1,0,0,0,321,322,1,0,0,0,322,
	323,5,60,0,0,323,41,1,0,0,0,324,325,5,49,0,0,325,326,3,108,54,0,326,327,
	5,60,0,0,327,43,1,0,0,0,328,329,5,10,0,0,329,330,5,90,0,0,330,331,5,63,
	0,0,331,332,3,72,36,0,332,333,5,60,0,0,333,45,1,0,0,0,334,337,3,92,46,0,
	335,337,3,96,48,0,336,334,1,0,0,0,336,335,1,0,0,0,337,338,1,0,0,0,338,341,
	5,90,0,0,339,340,5,63,0,0,340,342,3,74,37,0,341,339,1,0,0,0,341,342,1,0,
	0,0,342,343,1,0,0,0,343,344,5,60,0,0,344,47,1,0,0,0,345,346,5,24,0,0,346,
	347,3,92,46,0,347,348,5,90,0,0,348,349,5,63,0,0,349,350,3,74,37,0,350,351,
	5,60,0,0,351,49,1,0,0,0,352,355,7,0,0,0,353,356,3,92,46,0,354,356,3,96,
	48,0,355,353,1,0,0,0,355,354,1,0,0,0,356,357,1,0,0,0,357,358,5,90,0,0,358,
	359,5,60,0,0,359,51,1,0,0,0,360,361,7,1,0,0,361,363,5,90,0,0,362,364,3,
	100,50,0,363,362,1,0,0,0,363,364,1,0,0,0,364,365,1,0,0,0,365,366,5,60,0,
	0,366,53,1,0,0,0,367,368,3,94,47,0,368,369,5,90,0,0,369,370,5,60,0,0,370,
	55,1,0,0,0,371,372,5,4,0,0,372,373,5,90,0,0,373,375,5,57,0,0,374,376,3,
	114,57,0,375,374,1,0,0,0,375,376,1,0,0,0,376,377,1,0,0,0,377,379,5,58,0,
	0,378,380,3,88,44,0,379,378,1,0,0,0,379,380,1,0,0,0,380,381,1,0,0,0,381,
	382,3,8,4,0,382,57,1,0,0,0,383,384,5,8,0,0,384,385,5,90,0,0,385,387,5,57,
	0,0,386,388,3,126,63,0,387,386,1,0,0,0,387,388,1,0,0,0,388,389,1,0,0,0,
	389,391,5,58,0,0,390,392,3,88,44,0,391,390,1,0,0,0,391,392,1,0,0,0,392,
	393,1,0,0,0,393,394,5,60,0,0,394,59,1,0,0,0,395,396,5,7,0,0,396,402,5,90,
	0,0,397,399,5,57,0,0,398,400,3,122,61,0,399,398,1,0,0,0,399,400,1,0,0,0,
	400,401,1,0,0,0,401,403,5,58,0,0,402,397,1,0,0,0,402,403,1,0,0,0,403,404,
	1,0,0,0,404,405,3,122,61,0,405,406,3,8,4,0,406,61,1,0,0,0,407,408,3,86,
	43,0,408,411,7,2,0,0,409,412,3,70,35,0,410,412,3,76,38,0,411,409,1,0,0,
	0,411,410,1,0,0,0,412,413,1,0,0,0,413,414,5,60,0,0,414,63,1,0,0,0,415,416,
	3,70,35,0,416,417,5,60,0,0,417,65,1,0,0,0,418,419,5,5,0,0,419,421,5,55,
	0,0,420,422,5,110,0,0,421,420,1,0,0,0,421,422,1,0,0,0,422,423,1,0,0,0,423,
	424,5,56,0,0,424,67,1,0,0,0,425,426,5,6,0,0,426,432,3,102,51,0,427,429,
	5,57,0,0,428,430,3,116,58,0,429,428,1,0,0,0,429,430,1,0,0,0,430,431,1,0,
	0,0,431,433,5,58,0,0,432,427,1,0,0,0,432,433,1,0,0,0,433,434,1,0,0,0,434,
	436,3,118,59,0,435,437,3,88,44,0,436,435,1,0,0,0,436,437,1,0,0,0,437,438,
	1,0,0,0,438,440,5,55,0,0,439,441,5,110,0,0,440,439,1,0,0,0,440,441,1,0,
	0,0,441,442,1,0,0,0,442,443,5,56,0,0,443,69,1,0,0,0,444,445,6,35,-1,0,445,
	446,5,57,0,0,446,447,3,70,35,0,447,448,5,58,0,0,448,472,1,0,0,0,449,450,
	7,3,0,0,450,472,3,70,35,15,451,454,3,92,46,0,452,454,3,96,48,0,453,451,
	1,0,0,0,453,452,1,0,0,0,454,455,1,0,0,0,455,456,5,57,0,0,456,457,3,70,35,
	0,457,458,5,58,0,0,458,472,1,0,0,0,459,460,5,47,0,0,460,461,5,57,0,0,461,
	462,3,8,4,0,462,463,5,58,0,0,463,472,1,0,0,0,464,465,5,90,0,0,465,467,5,
	57,0,0,466,468,3,120,60,0,467,466,1,0,0,0,467,468,1,0,0,0,468,469,1,0,0,
	0,469,472,5,58,0,0,470,472,7,4,0,0,471,444,1,0,0,0,471,449,1,0,0,0,471,
	453,1,0,0,0,471,459,1,0,0,0,471,464,1,0,0,0,471,470,1,0,0,0,472,510,1,0,
	0,0,473,474,10,16,0,0,474,475,5,69,0,0,475,509,3,70,35,16,476,477,10,14,
	0,0,477,478,7,5,0,0,478,509,3,70,35,15,479,480,10,13,0,0,480,481,7,6,0,
	0,481,509,3,70,35,14,482,483,10,12,0,0,483,484,5,83,0,0,484,509,3,70,35,
	13,485,486,10,11,0,0,486,487,5,82,0,0,487,509,3,70,35,12,488,489,10,10,
	0,0,489,490,5,80,0,0,490,509,3,70,35,11,491,492,10,9,0,0,492,493,5,74,0,
	0,493,509,3,70,35,10,494,495,10,8,0,0,495,496,5,76,0,0,496,509,3,70,35,
	9,497,498,10,7,0,0,498,499,5,72,0,0,499,509,3,70,35,8,500,501,10,6,0,0,
	501,502,5,75,0,0,502,509,3,70,35,7,503,504,10,5,0,0,504,505,5,73,0,0,505,
	509,3,70,35,6,506,507,10,17,0,0,507,509,3,84,42,0,508,473,1,0,0,0,508,476,
	1,0,0,0,508,479,1,0,0,0,508,482,1,0,0,0,508,485,1,0,0,0,508,488,1,0,0,0,
	508,491,1,0,0,0,508,494,1,0,0,0,508,497,1,0,0,0,508,500,1,0,0,0,508,503,
	1,0,0,0,508,506,1,0,0,0,509,512,1,0,0,0,510,508,1,0,0,0,510,511,1,0,0,0,
	511,71,1,0,0,0,512,510,1,0,0,0,513,518,3,70,35,0,514,515,5,66,0,0,515,517,
	3,70,35,0,516,514,1,0,0,0,517,520,1,0,0,0,518,516,1,0,0,0,518,519,1,0,0,
	0,519,73,1,0,0,0,520,518,1,0,0,0,521,525,3,82,41,0,522,525,3,70,35,0,523,
	525,3,76,38,0,524,521,1,0,0,0,524,522,1,0,0,0,524,523,1,0,0,0,525,75,1,
	0,0,0,526,527,5,50,0,0,527,528,3,108,54,0,528,77,1,0,0,0,529,531,3,70,35,
	0,530,529,1,0,0,0,530,531,1,0,0,0,531,532,1,0,0,0,532,534,5,59,0,0,533,
	535,3,70,35,0,534,533,1,0,0,0,534,535,1,0,0,0,535,538,1,0,0,0,536,537,5,
	59,0,0,537,539,3,70,35,0,538,536,1,0,0,0,538,539,1,0,0,0,539,79,1,0,0,0,
	540,541,5,55,0,0,541,546,3,70,35,0,542,543,5,62,0,0,543,545,3,70,35,0,544,
	542,1,0,0,0,545,548,1,0,0,0,546,544,1,0,0,0,546,547,1,0,0,0,547,550,1,0,
	0,0,548,546,1,0,0,0,549,551,5,62,0,0,550,549,1,0,0,0,550,551,1,0,0,0,551,
	552,1,0,0,0,552,553,5,56,0,0,553,81,1,0,0,0,554,557,5,55,0,0,555,558,3,
	70,35,0,556,558,3,82,41,0,557,555,1,0,0,0,557,556,1,0,0,0,558,566,1,0,0,
	0,559,562,5,62,0,0,560,563,3,70,35,0,561,563,3,82,41,0,562,560,1,0,0,0,
	562,561,1,0,0,0,563,565,1,0,0,0,564,559,1,0,0,0,565,568,1,0,0,0,566,564,
	1,0,0,0,566,567,1,0,0,0,567,570,1,0,0,0,568,566,1,0,0,0,569,571,5,62,0,
	0,570,569,1,0,0,0,570,571,1,0,0,0,571,572,1,0,0,0,572,573,5,56,0,0,573,
	83,1,0,0,0,574,593,5,53,0,0,575,594,3,80,40,0,576,579,3,70,35,0,577,579,
	3,78,39,0,578,576,1,0,0,0,578,577,1,0,0,0,579,587,1,0,0,0,580,583,5,62,
	0,0,581,584,3,70,35,0,582,584,3,78,39,0,583,581,1,0,0,0,583,582,1,0,0,0,
	584,586,1,0,0,0,585,580,1,0,0,0,586,589,1,0,0,0,587,585,1,0,0,0,587,588,
	1,0,0,0,588,591,1,0,0,0,589,587,1,0,0,0,590,592,5,62,0,0,591,590,1,0,0,
	0,591,592,1,0,0,0,592,594,1,0,0,0,593,575,1,0,0,0,593,578,1,0,0,0,594,595,
	1,0,0,0,595,596,5,54,0,0,596,85,1,0,0,0,597,601,5,90,0,0,598,600,3,84,42,
	0,599,598,1,0,0,0,600,603,1,0,0,0,601,599,1,0,0,0,601,602,1,0,0,0,602,87,
	1,0,0,0,603,601,1,0,0,0,604,605,5,64,0,0,605,606,3,92,46,0,606,89,1,0,0,
	0,607,621,5,42,0,0,608,609,5,43,0,0,609,610,5,57,0,0,610,611,3,70,35,0,
	611,612,5,58,0,0,612,621,1,0,0,0,613,618,7,7,0,0,614,615,5,57,0,0,615,616,
	3,70,35,0,616,617,5,58,0,0,617,619,1,0,0,0,618,614,1,0,0,0,618,619,1,0,
	0,0,619,621,1,0,0,0,620,607,1,0,0,0,620,608,1,0,0,0,620,613,1,0,0,0,621,
	622,1,0,0,0,622,623,5,77,0,0,623,91,1,0,0,0,624,626,5,31,0,0,625,627,3,
	100,50,0,626,625,1,0,0,0,626,627,1,0,0,0,627,655,1,0,0,0,628,630,5,32,0,
	0,629,631,3,100,50,0,630,629,1,0,0,0,630,631,1,0,0,0,631,655,1,0,0,0,632,
	634,5,33,0,0,633,635,3,100,50,0,634,633,1,0,0,0,634,635,1,0,0,0,635,655,
	1,0,0,0,636,638,5,34,0,0,637,639,3,100,50,0,638,637,1,0,0,0,638,639,1,0,
	0,0,639,655,1,0,0,0,640,642,5,35,0,0,641,643,3,100,50,0,642,641,1,0,0,0,
	642,643,1,0,0,0,643,655,1,0,0,0,644,655,5,30,0,0,645,655,5,39,0,0,646,655,
	5,40,0,0,647,652,5,36,0,0,648,649,5,53,0,0,649,650,3,92,46,0,650,651,5,
	54,0,0,651,653,1,0,0,0,652,648,1,0,0,0,652,653,1,0,0,0,653,655,1,0,0,0,
	654,624,1,0,0,0,654,628,1,0,0,0,654,632,1,0,0,0,654,636,1,0,0,0,654,640,
	1,0,0,0,654,644,1,0,0,0,654,645,1,0,0,0,654,646,1,0,0,0,654,647,1,0,0,0,
	655,93,1,0,0,0,656,658,5,28,0,0,657,659,3,100,50,0,658,657,1,0,0,0,658,
	659,1,0,0,0,659,95,1,0,0,0,660,661,5,37,0,0,661,662,5,53,0,0,662,663,3,
	92,46,0,663,664,5,62,0,0,664,665,3,120,60,0,665,666,5,54,0,0,666,97,1,0,
	0,0,667,668,7,8,0,0,668,669,5,37,0,0,669,670,5,53,0,0,670,671,3,92,46,0,
	671,676,5,62,0,0,672,677,3,120,60,0,673,674,5,46,0,0,674,675,5,63,0,0,675,
	677,3,70,35,0,676,672,1,0,0,0,676,673,1,0,0,0,677,678,1,0,0,0,678,679,5,
	54,0,0,679,99,1,0,0,0,680,681,5,53,0,0,681,682,3,70,35,0,682,683,5,54,0,
	0,683,101,1,0,0,0,684,685,7,9,0,0,685,103,1,0,0,0,686,689,3,70,35,0,687,
	689,3,112,56,0,688,686,1,0,0,0,688,687,1,0,0,0,689,105,1,0,0,0,690,691,
	7,10,0,0,691,107,1,0,0,0,692,695,3,86,43,0,693,695,5,91,0,0,694,692,1,0,
	0,0,694,693,1,0,0,0,695,109,1,0,0,0,696,703,3,92,46,0,697,703,3,98,49,0,
	698,700,5,29,0,0,699,701,3,100,50,0,700,699,1,0,0,0,700,701,1,0,0,0,701,
	703,1,0,0,0,702,696,1,0,0,0,702,697,1,0,0,0,702,698,1,0,0,0,703,111,1,0,
	0,0,704,705,3,92,46,0,705,706,5,90,0,0,706,719,1,0,0,0,707,708,3,94,47,
	0,708,709,5,90,0,0,709,719,1,0,0,0,710,711,7,1,0,0,711,713,5,90,0,0,712,
	714,3,100,50,0,713,712,1,0,0,0,713,714,1,0,0,0,714,719,1,0,0,0,715,716,
	3,98,49,0,716,717,5,90,0,0,717,719,1,0,0,0,718,704,1,0,0,0,718,707,1,0,
	0,0,718,710,1,0,0,0,718,715,1,0,0,0,719,113,1,0,0,0,720,725,3,112,56,0,
	721,722,5,62,0,0,722,724,3,112,56,0,723,721,1,0,0,0,724,727,1,0,0,0,725,
	723,1,0,0,0,725,726,1,0,0,0,726,729,1,0,0,0,727,725,1,0,0,0,728,730,5,62,
	0,0,729,728,1,0,0,0,729,730,1,0,0,0,730,115,1,0,0,0,731,736,3,104,52,0,
	732,733,5,62,0,0,733,735,3,104,52,0,734,732,1,0,0,0,735,738,1,0,0,0,736,
	734,1,0,0,0,736,737,1,0,0,0,737,740,1,0,0,0,738,736,1,0,0,0,739,741,5,62,
	0,0,740,739,1,0,0,0,740,741,1,0,0,0,741,117,1,0,0,0,742,747,3,106,53,0,
	743,744,5,62,0,0,744,746,3,106,53,0,745,743,1,0,0,0,746,749,1,0,0,0,747,
	745,1,0,0,0,747,748,1,0,0,0,748,751,1,0,0,0,749,747,1,0,0,0,750,752,5,62,
	0,0,751,750,1,0,0,0,751,752,1,0,0,0,752,119,1,0,0,0,753,758,3,70,35,0,754,
	755,5,62,0,0,755,757,3,70,35,0,756,754,1,0,0,0,757,760,1,0,0,0,758,756,
	1,0,0,0,758,759,1,0,0,0,759,762,1,0,0,0,760,758,1,0,0,0,761,763,5,62,0,
	0,762,761,1,0,0,0,762,763,1,0,0,0,763,121,1,0,0,0,764,769,5,90,0,0,765,
	766,5,62,0,0,766,768,5,90,0,0,767,765,1,0,0,0,768,771,1,0,0,0,769,767,1,
	0,0,0,769,770,1,0,0,0,770,773,1,0,0,0,771,769,1,0,0,0,772,774,5,62,0,0,
	773,772,1,0,0,0,773,774,1,0,0,0,774,123,1,0,0,0,775,780,3,108,54,0,776,
	777,5,62,0,0,777,779,3,108,54,0,778,776,1,0,0,0,779,782,1,0,0,0,780,778,
	1,0,0,0,780,781,1,0,0,0,781,784,1,0,0,0,782,780,1,0,0,0,783,785,5,62,0,
	0,784,783,1,0,0,0,784,785,1,0,0,0,785,125,1,0,0,0,786,791,3,110,55,0,787,
	788,5,62,0,0,788,790,3,110,55,0,789,787,1,0,0,0,790,793,1,0,0,0,791,789,
	1,0,0,0,791,792,1,0,0,0,792,795,1,0,0,0,793,791,1,0,0,0,794,796,5,62,0,
	0,795,794,1,0,0,0,795,796,1,0,0,0,796,127,1,0,0,0,94,129,134,147,178,180,
	184,190,200,229,240,245,257,263,270,277,283,286,289,297,303,306,309,312,
	315,320,336,341,355,363,375,379,387,391,399,402,411,421,429,432,436,440,
	453,467,471,508,510,518,524,530,534,538,546,550,557,562,566,570,578,583,
	587,591,593,601,618,620,626,630,634,638,642,652,654,658,676,688,694,700,
	702,713,718,725,729,736,740,747,751,758,762,769,773,780,784,791,795];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!qasm3Parser.__ATN) {
			qasm3Parser.__ATN = new ATNDeserializer().deserialize(qasm3Parser._serializedATN);
		}

		return qasm3Parser.__ATN;
	}


	static DecisionsToDFA = qasm3Parser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ProgramContext extends ParserRuleContext {
	constructor(parser?: qasm3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(qasm3Parser.EOF, 0);
	}
	public version(): VersionContext {
		return this.getTypedRuleContext(VersionContext, 0) as VersionContext;
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
    public get ruleIndex(): number {
    	return qasm3Parser.RULE_program;
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterProgram) {
	 		listener.enterProgram(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitProgram) {
	 		listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VersionContext extends ParserRuleContext {
	constructor(parser?: qasm3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OPENQASM(): TerminalNode {
		return this.getToken(qasm3Parser.OPENQASM, 0);
	}
	public VersionSpecifier(): TerminalNode {
		return this.getToken(qasm3Parser.VersionSpecifier, 0);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(qasm3Parser.SEMICOLON, 0);
	}
    public get ruleIndex(): number {
    	return qasm3Parser.RULE_version;
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterVersion) {
	 		listener.enterVersion(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitVersion) {
	 		listener.exitVersion(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitVersion) {
			return visitor.visitVersion(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	constructor(parser?: qasm3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public pragma(): PragmaContext {
		return this.getTypedRuleContext(PragmaContext, 0) as PragmaContext;
	}
	public aliasDeclarationStatement(): AliasDeclarationStatementContext {
		return this.getTypedRuleContext(AliasDeclarationStatementContext, 0) as AliasDeclarationStatementContext;
	}
	public assignmentStatement(): AssignmentStatementContext {
		return this.getTypedRuleContext(AssignmentStatementContext, 0) as AssignmentStatementContext;
	}
	public barrierStatement(): BarrierStatementContext {
		return this.getTypedRuleContext(BarrierStatementContext, 0) as BarrierStatementContext;
	}
	public boxStatement(): BoxStatementContext {
		return this.getTypedRuleContext(BoxStatementContext, 0) as BoxStatementContext;
	}
	public breakStatement(): BreakStatementContext {
		return this.getTypedRuleContext(BreakStatementContext, 0) as BreakStatementContext;
	}
	public calStatement(): CalStatementContext {
		return this.getTypedRuleContext(CalStatementContext, 0) as CalStatementContext;
	}
	public calibrationGrammarStatement(): CalibrationGrammarStatementContext {
		return this.getTypedRuleContext(CalibrationGrammarStatementContext, 0) as CalibrationGrammarStatementContext;
	}
	public classicalDeclarationStatement(): ClassicalDeclarationStatementContext {
		return this.getTypedRuleContext(ClassicalDeclarationStatementContext, 0) as ClassicalDeclarationStatementContext;
	}
	public constDeclarationStatement(): ConstDeclarationStatementContext {
		return this.getTypedRuleContext(ConstDeclarationStatementContext, 0) as ConstDeclarationStatementContext;
	}
	public continueStatement(): ContinueStatementContext {
		return this.getTypedRuleContext(ContinueStatementContext, 0) as ContinueStatementContext;
	}
	public defStatement(): DefStatementContext {
		return this.getTypedRuleContext(DefStatementContext, 0) as DefStatementContext;
	}
	public defcalStatement(): DefcalStatementContext {
		return this.getTypedRuleContext(DefcalStatementContext, 0) as DefcalStatementContext;
	}
	public delayStatement(): DelayStatementContext {
		return this.getTypedRuleContext(DelayStatementContext, 0) as DelayStatementContext;
	}
	public endStatement(): EndStatementContext {
		return this.getTypedRuleContext(EndStatementContext, 0) as EndStatementContext;
	}
	public expressionStatement(): ExpressionStatementContext {
		return this.getTypedRuleContext(ExpressionStatementContext, 0) as ExpressionStatementContext;
	}
	public externStatement(): ExternStatementContext {
		return this.getTypedRuleContext(ExternStatementContext, 0) as ExternStatementContext;
	}
	public forStatement(): ForStatementContext {
		return this.getTypedRuleContext(ForStatementContext, 0) as ForStatementContext;
	}
	public gateCallStatement(): GateCallStatementContext {
		return this.getTypedRuleContext(GateCallStatementContext, 0) as GateCallStatementContext;
	}
	public gateStatement(): GateStatementContext {
		return this.getTypedRuleContext(GateStatementContext, 0) as GateStatementContext;
	}
	public ifStatement(): IfStatementContext {
		return this.getTypedRuleContext(IfStatementContext, 0) as IfStatementContext;
	}
	public includeStatement(): IncludeStatementContext {
		return this.getTypedRuleContext(IncludeStatementContext, 0) as IncludeStatementContext;
	}
	public ioDeclarationStatement(): IoDeclarationStatementContext {
		return this.getTypedRuleContext(IoDeclarationStatementContext, 0) as IoDeclarationStatementContext;
	}
	public measureArrowAssignmentStatement(): MeasureArrowAssignmentStatementContext {
		return this.getTypedRuleContext(MeasureArrowAssignmentStatementContext, 0) as MeasureArrowAssignmentStatementContext;
	}
	public oldStyleDeclarationStatement(): OldStyleDeclarationStatementContext {
		return this.getTypedRuleContext(OldStyleDeclarationStatementContext, 0) as OldStyleDeclarationStatementContext;
	}
	public quantumDeclarationStatement(): QuantumDeclarationStatementContext {
		return this.getTypedRuleContext(QuantumDeclarationStatementContext, 0) as QuantumDeclarationStatementContext;
	}
	public resetStatement(): ResetStatementContext {
		return this.getTypedRuleContext(ResetStatementContext, 0) as ResetStatementContext;
	}
	public returnStatement(): ReturnStatementContext {
		return this.getTypedRuleContext(ReturnStatementContext, 0) as ReturnStatementContext;
	}
	public whileStatement(): WhileStatementContext {
		return this.getTypedRuleContext(WhileStatementContext, 0) as WhileStatementContext;
	}
	public annotation_list(): AnnotationContext[] {
		return this.getTypedRuleContexts(AnnotationContext) as AnnotationContext[];
	}
	public annotation(i: number): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, i) as AnnotationContext;
	}
    public get ruleIndex(): number {
    	return qasm3Parser.RULE_statement;
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterStatement) {
	 		listener.enterStatement(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitStatement) {
	 		listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationContext extends ParserRuleContext {
	constructor(parser?: qasm3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AnnotationKeyword(): TerminalNode {
		return this.getToken(qasm3Parser.AnnotationKeyword, 0);
	}
	public RemainingLineContent(): TerminalNode {
		return this.getToken(qasm3Parser.RemainingLineContent, 0);
	}
    public get ruleIndex(): number {
    	return qasm3Parser.RULE_annotation;
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterAnnotation) {
	 		listener.enterAnnotation(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitAnnotation) {
	 		listener.exitAnnotation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitAnnotation) {
			return visitor.visitAnnotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ScopeContext extends ParserRuleContext {
	constructor(parser?: qasm3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LBRACE(): TerminalNode {
		return this.getToken(qasm3Parser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(qasm3Parser.RBRACE, 0);
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
    public get ruleIndex(): number {
    	return qasm3Parser.RULE_scope;
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterScope) {
	 		listener.enterScope(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitScope) {
	 		listener.exitScope(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitScope) {
			return visitor.visitScope(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PragmaContext extends ParserRuleContext {
	constructor(parser?: qasm3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PRAGMA(): TerminalNode {
		return this.getToken(qasm3Parser.PRAGMA, 0);
	}
	public RemainingLineContent(): TerminalNode {
		return this.getToken(qasm3Parser.RemainingLineContent, 0);
	}
    public get ruleIndex(): number {
    	return qasm3Parser.RULE_pragma;
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterPragma) {
	 		listener.enterPragma(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitPragma) {
	 		listener.exitPragma(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitPragma) {
			return visitor.visitPragma(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementOrScopeContext extends ParserRuleContext {
	constructor(parser?: qasm3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
	public scope(): ScopeContext {
		return this.getTypedRuleContext(ScopeContext, 0) as ScopeContext;
	}
    public get ruleIndex(): number {
    	return qasm3Parser.RULE_statementOrScope;
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterStatementOrScope) {
	 		listener.enterStatementOrScope(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitStatementOrScope) {
	 		listener.exitStatementOrScope(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitStatementOrScope) {
			return visitor.visitStatementOrScope(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CalibrationGrammarStatementContext extends ParserRuleContext {
	constructor(parser?: qasm3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DEFCALGRAMMAR(): TerminalNode {
		return this.getToken(qasm3Parser.DEFCALGRAMMAR, 0);
	}
	public StringLiteral(): TerminalNode {
		return this.getToken(qasm3Parser.StringLiteral, 0);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(qasm3Parser.SEMICOLON, 0);
	}
    public get ruleIndex(): number {
    	return qasm3Parser.RULE_calibrationGrammarStatement;
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterCalibrationGrammarStatement) {
	 		listener.enterCalibrationGrammarStatement(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitCalibrationGrammarStatement) {
	 		listener.exitCalibrationGrammarStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitCalibrationGrammarStatement) {
			return visitor.visitCalibrationGrammarStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IncludeStatementContext extends ParserRuleContext {
	constructor(parser?: qasm3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INCLUDE(): TerminalNode {
		return this.getToken(qasm3Parser.INCLUDE, 0);
	}
	public StringLiteral(): TerminalNode {
		return this.getToken(qasm3Parser.StringLiteral, 0);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(qasm3Parser.SEMICOLON, 0);
	}
    public get ruleIndex(): number {
    	return qasm3Parser.RULE_includeStatement;
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterIncludeStatement) {
	 		listener.enterIncludeStatement(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitIncludeStatement) {
	 		listener.exitIncludeStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitIncludeStatement) {
			return visitor.visitIncludeStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BreakStatementContext extends ParserRuleContext {
	constructor(parser?: qasm3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BREAK(): TerminalNode {
		return this.getToken(qasm3Parser.BREAK, 0);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(qasm3Parser.SEMICOLON, 0);
	}
    public get ruleIndex(): number {
    	return qasm3Parser.RULE_breakStatement;
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterBreakStatement) {
	 		listener.enterBreakStatement(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitBreakStatement) {
	 		listener.exitBreakStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitBreakStatement) {
			return visitor.visitBreakStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContinueStatementContext extends ParserRuleContext {
	constructor(parser?: qasm3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CONTINUE(): TerminalNode {
		return this.getToken(qasm3Parser.CONTINUE, 0);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(qasm3Parser.SEMICOLON, 0);
	}
    public get ruleIndex(): number {
    	return qasm3Parser.RULE_continueStatement;
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterContinueStatement) {
	 		listener.enterContinueStatement(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitContinueStatement) {
	 		listener.exitContinueStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitContinueStatement) {
			return visitor.visitContinueStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EndStatementContext extends ParserRuleContext {
	constructor(parser?: qasm3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public END(): TerminalNode {
		return this.getToken(qasm3Parser.END, 0);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(qasm3Parser.SEMICOLON, 0);
	}
    public get ruleIndex(): number {
    	return qasm3Parser.RULE_endStatement;
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterEndStatement) {
	 		listener.enterEndStatement(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitEndStatement) {
	 		listener.exitEndStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitEndStatement) {
			return visitor.visitEndStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForStatementContext extends ParserRuleContext {
	public _body!: StatementOrScopeContext;
	constructor(parser?: qasm3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FOR(): TerminalNode {
		return this.getToken(qasm3Parser.FOR, 0);
	}
	public scalarType(): ScalarTypeContext {
		return this.getTypedRuleContext(ScalarTypeContext, 0) as ScalarTypeContext;
	}
	public Identifier(): TerminalNode {
		return this.getToken(qasm3Parser.Identifier, 0);
	}
	public IN(): TerminalNode {
		return this.getToken(qasm3Parser.IN, 0);
	}
	public statementOrScope(): StatementOrScopeContext {
		return this.getTypedRuleContext(StatementOrScopeContext, 0) as StatementOrScopeContext;
	}
	public setExpression(): SetExpressionContext {
		return this.getTypedRuleContext(SetExpressionContext, 0) as SetExpressionContext;
	}
	public LBRACKET(): TerminalNode {
		return this.getToken(qasm3Parser.LBRACKET, 0);
	}
	public rangeExpression(): RangeExpressionContext {
		return this.getTypedRuleContext(RangeExpressionContext, 0) as RangeExpressionContext;
	}
	public RBRACKET(): TerminalNode {
		return this.getToken(qasm3Parser.RBRACKET, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return qasm3Parser.RULE_forStatement;
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterForStatement) {
	 		listener.enterForStatement(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitForStatement) {
	 		listener.exitForStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitForStatement) {
			return visitor.visitForStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfStatementContext extends ParserRuleContext {
	public _if_body!: StatementOrScopeContext;
	public _else_body!: StatementOrScopeContext;
	constructor(parser?: qasm3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IF(): TerminalNode {
		return this.getToken(qasm3Parser.IF, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(qasm3Parser.LPAREN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(qasm3Parser.RPAREN, 0);
	}
	public statementOrScope_list(): StatementOrScopeContext[] {
		return this.getTypedRuleContexts(StatementOrScopeContext) as StatementOrScopeContext[];
	}
	public statementOrScope(i: number): StatementOrScopeContext {
		return this.getTypedRuleContext(StatementOrScopeContext, i) as StatementOrScopeContext;
	}
	public ELSE(): TerminalNode {
		return this.getToken(qasm3Parser.ELSE, 0);
	}
    public get ruleIndex(): number {
    	return qasm3Parser.RULE_ifStatement;
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterIfStatement) {
	 		listener.enterIfStatement(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitIfStatement) {
	 		listener.exitIfStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitIfStatement) {
			return visitor.visitIfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnStatementContext extends ParserRuleContext {
	constructor(parser?: qasm3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RETURN(): TerminalNode {
		return this.getToken(qasm3Parser.RETURN, 0);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(qasm3Parser.SEMICOLON, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public measureExpression(): MeasureExpressionContext {
		return this.getTypedRuleContext(MeasureExpressionContext, 0) as MeasureExpressionContext;
	}
    public get ruleIndex(): number {
    	return qasm3Parser.RULE_returnStatement;
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterReturnStatement) {
	 		listener.enterReturnStatement(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitReturnStatement) {
	 		listener.exitReturnStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitReturnStatement) {
			return visitor.visitReturnStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhileStatementContext extends ParserRuleContext {
	public _body!: StatementOrScopeContext;
	constructor(parser?: qasm3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WHILE(): TerminalNode {
		return this.getToken(qasm3Parser.WHILE, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(qasm3Parser.LPAREN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(qasm3Parser.RPAREN, 0);
	}
	public statementOrScope(): StatementOrScopeContext {
		return this.getTypedRuleContext(StatementOrScopeContext, 0) as StatementOrScopeContext;
	}
    public get ruleIndex(): number {
    	return qasm3Parser.RULE_whileStatement;
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterWhileStatement) {
	 		listener.enterWhileStatement(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitWhileStatement) {
	 		listener.exitWhileStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitWhileStatement) {
			return visitor.visitWhileStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BarrierStatementContext extends ParserRuleContext {
	constructor(parser?: qasm3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BARRIER(): TerminalNode {
		return this.getToken(qasm3Parser.BARRIER, 0);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(qasm3Parser.SEMICOLON, 0);
	}
	public gateOperandList(): GateOperandListContext {
		return this.getTypedRuleContext(GateOperandListContext, 0) as GateOperandListContext;
	}
    public get ruleIndex(): number {
    	return qasm3Parser.RULE_barrierStatement;
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterBarrierStatement) {
	 		listener.enterBarrierStatement(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitBarrierStatement) {
	 		listener.exitBarrierStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitBarrierStatement) {
			return visitor.visitBarrierStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BoxStatementContext extends ParserRuleContext {
	constructor(parser?: qasm3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BOX(): TerminalNode {
		return this.getToken(qasm3Parser.BOX, 0);
	}
	public scope(): ScopeContext {
		return this.getTypedRuleContext(ScopeContext, 0) as ScopeContext;
	}
	public designator(): DesignatorContext {
		return this.getTypedRuleContext(DesignatorContext, 0) as DesignatorContext;
	}
    public get ruleIndex(): number {
    	return qasm3Parser.RULE_boxStatement;
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterBoxStatement) {
	 		listener.enterBoxStatement(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitBoxStatement) {
	 		listener.exitBoxStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitBoxStatement) {
			return visitor.visitBoxStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DelayStatementContext extends ParserRuleContext {
	constructor(parser?: qasm3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DELAY(): TerminalNode {
		return this.getToken(qasm3Parser.DELAY, 0);
	}
	public designator(): DesignatorContext {
		return this.getTypedRuleContext(DesignatorContext, 0) as DesignatorContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(qasm3Parser.SEMICOLON, 0);
	}
	public gateOperandList(): GateOperandListContext {
		return this.getTypedRuleContext(GateOperandListContext, 0) as GateOperandListContext;
	}
    public get ruleIndex(): number {
    	return qasm3Parser.RULE_delayStatement;
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterDelayStatement) {
	 		listener.enterDelayStatement(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitDelayStatement) {
	 		listener.exitDelayStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitDelayStatement) {
			return visitor.visitDelayStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GateCallStatementContext extends ParserRuleContext {
	constructor(parser?: qasm3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(qasm3Parser.Identifier, 0);
	}
	public gateOperandList(): GateOperandListContext {
		return this.getTypedRuleContext(GateOperandListContext, 0) as GateOperandListContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(qasm3Parser.SEMICOLON, 0);
	}
	public gateModifier_list(): GateModifierContext[] {
		return this.getTypedRuleContexts(GateModifierContext) as GateModifierContext[];
	}
	public gateModifier(i: number): GateModifierContext {
		return this.getTypedRuleContext(GateModifierContext, i) as GateModifierContext;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(qasm3Parser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(qasm3Parser.RPAREN, 0);
	}
	public designator(): DesignatorContext {
		return this.getTypedRuleContext(DesignatorContext, 0) as DesignatorContext;
	}
	public expressionList(): ExpressionListContext {
		return this.getTypedRuleContext(ExpressionListContext, 0) as ExpressionListContext;
	}
	public GPHASE(): TerminalNode {
		return this.getToken(qasm3Parser.GPHASE, 0);
	}
    public get ruleIndex(): number {
    	return qasm3Parser.RULE_gateCallStatement;
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterGateCallStatement) {
	 		listener.enterGateCallStatement(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitGateCallStatement) {
	 		listener.exitGateCallStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitGateCallStatement) {
			return visitor.visitGateCallStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MeasureArrowAssignmentStatementContext extends ParserRuleContext {
	constructor(parser?: qasm3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public measureExpression(): MeasureExpressionContext {
		return this.getTypedRuleContext(MeasureExpressionContext, 0) as MeasureExpressionContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(qasm3Parser.SEMICOLON, 0);
	}
	public ARROW(): TerminalNode {
		return this.getToken(qasm3Parser.ARROW, 0);
	}
	public indexedIdentifier(): IndexedIdentifierContext {
		return this.getTypedRuleContext(IndexedIdentifierContext, 0) as IndexedIdentifierContext;
	}
    public get ruleIndex(): number {
    	return qasm3Parser.RULE_measureArrowAssignmentStatement;
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterMeasureArrowAssignmentStatement) {
	 		listener.enterMeasureArrowAssignmentStatement(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitMeasureArrowAssignmentStatement) {
	 		listener.exitMeasureArrowAssignmentStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitMeasureArrowAssignmentStatement) {
			return visitor.visitMeasureArrowAssignmentStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResetStatementContext extends ParserRuleContext {
	constructor(parser?: qasm3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RESET(): TerminalNode {
		return this.getToken(qasm3Parser.RESET, 0);
	}
	public gateOperand(): GateOperandContext {
		return this.getTypedRuleContext(GateOperandContext, 0) as GateOperandContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(qasm3Parser.SEMICOLON, 0);
	}
    public get ruleIndex(): number {
    	return qasm3Parser.RULE_resetStatement;
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterResetStatement) {
	 		listener.enterResetStatement(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitResetStatement) {
	 		listener.exitResetStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitResetStatement) {
			return visitor.visitResetStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AliasDeclarationStatementContext extends ParserRuleContext {
	constructor(parser?: qasm3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LET(): TerminalNode {
		return this.getToken(qasm3Parser.LET, 0);
	}
	public Identifier(): TerminalNode {
		return this.getToken(qasm3Parser.Identifier, 0);
	}
	public EQUALS(): TerminalNode {
		return this.getToken(qasm3Parser.EQUALS, 0);
	}
	public aliasExpression(): AliasExpressionContext {
		return this.getTypedRuleContext(AliasExpressionContext, 0) as AliasExpressionContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(qasm3Parser.SEMICOLON, 0);
	}
    public get ruleIndex(): number {
    	return qasm3Parser.RULE_aliasDeclarationStatement;
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterAliasDeclarationStatement) {
	 		listener.enterAliasDeclarationStatement(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitAliasDeclarationStatement) {
	 		listener.exitAliasDeclarationStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitAliasDeclarationStatement) {
			return visitor.visitAliasDeclarationStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassicalDeclarationStatementContext extends ParserRuleContext {
	constructor(parser?: qasm3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(qasm3Parser.Identifier, 0);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(qasm3Parser.SEMICOLON, 0);
	}
	public scalarType(): ScalarTypeContext {
		return this.getTypedRuleContext(ScalarTypeContext, 0) as ScalarTypeContext;
	}
	public arrayType(): ArrayTypeContext {
		return this.getTypedRuleContext(ArrayTypeContext, 0) as ArrayTypeContext;
	}
	public EQUALS(): TerminalNode {
		return this.getToken(qasm3Parser.EQUALS, 0);
	}
	public declarationExpression(): DeclarationExpressionContext {
		return this.getTypedRuleContext(DeclarationExpressionContext, 0) as DeclarationExpressionContext;
	}
    public get ruleIndex(): number {
    	return qasm3Parser.RULE_classicalDeclarationStatement;
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterClassicalDeclarationStatement) {
	 		listener.enterClassicalDeclarationStatement(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitClassicalDeclarationStatement) {
	 		listener.exitClassicalDeclarationStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitClassicalDeclarationStatement) {
			return visitor.visitClassicalDeclarationStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstDeclarationStatementContext extends ParserRuleContext {
	constructor(parser?: qasm3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CONST(): TerminalNode {
		return this.getToken(qasm3Parser.CONST, 0);
	}
	public scalarType(): ScalarTypeContext {
		return this.getTypedRuleContext(ScalarTypeContext, 0) as ScalarTypeContext;
	}
	public Identifier(): TerminalNode {
		return this.getToken(qasm3Parser.Identifier, 0);
	}
	public EQUALS(): TerminalNode {
		return this.getToken(qasm3Parser.EQUALS, 0);
	}
	public declarationExpression(): DeclarationExpressionContext {
		return this.getTypedRuleContext(DeclarationExpressionContext, 0) as DeclarationExpressionContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(qasm3Parser.SEMICOLON, 0);
	}
    public get ruleIndex(): number {
    	return qasm3Parser.RULE_constDeclarationStatement;
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterConstDeclarationStatement) {
	 		listener.enterConstDeclarationStatement(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitConstDeclarationStatement) {
	 		listener.exitConstDeclarationStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitConstDeclarationStatement) {
			return visitor.visitConstDeclarationStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IoDeclarationStatementContext extends ParserRuleContext {
	constructor(parser?: qasm3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(qasm3Parser.Identifier, 0);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(qasm3Parser.SEMICOLON, 0);
	}
	public INPUT(): TerminalNode {
		return this.getToken(qasm3Parser.INPUT, 0);
	}
	public OUTPUT(): TerminalNode {
		return this.getToken(qasm3Parser.OUTPUT, 0);
	}
	public scalarType(): ScalarTypeContext {
		return this.getTypedRuleContext(ScalarTypeContext, 0) as ScalarTypeContext;
	}
	public arrayType(): ArrayTypeContext {
		return this.getTypedRuleContext(ArrayTypeContext, 0) as ArrayTypeContext;
	}
    public get ruleIndex(): number {
    	return qasm3Parser.RULE_ioDeclarationStatement;
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterIoDeclarationStatement) {
	 		listener.enterIoDeclarationStatement(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitIoDeclarationStatement) {
	 		listener.exitIoDeclarationStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitIoDeclarationStatement) {
			return visitor.visitIoDeclarationStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OldStyleDeclarationStatementContext extends ParserRuleContext {
	constructor(parser?: qasm3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(qasm3Parser.Identifier, 0);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(qasm3Parser.SEMICOLON, 0);
	}
	public CREG(): TerminalNode {
		return this.getToken(qasm3Parser.CREG, 0);
	}
	public QREG(): TerminalNode {
		return this.getToken(qasm3Parser.QREG, 0);
	}
	public designator(): DesignatorContext {
		return this.getTypedRuleContext(DesignatorContext, 0) as DesignatorContext;
	}
    public get ruleIndex(): number {
    	return qasm3Parser.RULE_oldStyleDeclarationStatement;
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterOldStyleDeclarationStatement) {
	 		listener.enterOldStyleDeclarationStatement(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitOldStyleDeclarationStatement) {
	 		listener.exitOldStyleDeclarationStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitOldStyleDeclarationStatement) {
			return visitor.visitOldStyleDeclarationStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QuantumDeclarationStatementContext extends ParserRuleContext {
	constructor(parser?: qasm3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public qubitType(): QubitTypeContext {
		return this.getTypedRuleContext(QubitTypeContext, 0) as QubitTypeContext;
	}
	public Identifier(): TerminalNode {
		return this.getToken(qasm3Parser.Identifier, 0);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(qasm3Parser.SEMICOLON, 0);
	}
    public get ruleIndex(): number {
    	return qasm3Parser.RULE_quantumDeclarationStatement;
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterQuantumDeclarationStatement) {
	 		listener.enterQuantumDeclarationStatement(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitQuantumDeclarationStatement) {
	 		listener.exitQuantumDeclarationStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitQuantumDeclarationStatement) {
			return visitor.visitQuantumDeclarationStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefStatementContext extends ParserRuleContext {
	constructor(parser?: qasm3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DEF(): TerminalNode {
		return this.getToken(qasm3Parser.DEF, 0);
	}
	public Identifier(): TerminalNode {
		return this.getToken(qasm3Parser.Identifier, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(qasm3Parser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(qasm3Parser.RPAREN, 0);
	}
	public scope(): ScopeContext {
		return this.getTypedRuleContext(ScopeContext, 0) as ScopeContext;
	}
	public argumentDefinitionList(): ArgumentDefinitionListContext {
		return this.getTypedRuleContext(ArgumentDefinitionListContext, 0) as ArgumentDefinitionListContext;
	}
	public returnSignature(): ReturnSignatureContext {
		return this.getTypedRuleContext(ReturnSignatureContext, 0) as ReturnSignatureContext;
	}
    public get ruleIndex(): number {
    	return qasm3Parser.RULE_defStatement;
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterDefStatement) {
	 		listener.enterDefStatement(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitDefStatement) {
	 		listener.exitDefStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitDefStatement) {
			return visitor.visitDefStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExternStatementContext extends ParserRuleContext {
	constructor(parser?: qasm3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EXTERN(): TerminalNode {
		return this.getToken(qasm3Parser.EXTERN, 0);
	}
	public Identifier(): TerminalNode {
		return this.getToken(qasm3Parser.Identifier, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(qasm3Parser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(qasm3Parser.RPAREN, 0);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(qasm3Parser.SEMICOLON, 0);
	}
	public externArgumentList(): ExternArgumentListContext {
		return this.getTypedRuleContext(ExternArgumentListContext, 0) as ExternArgumentListContext;
	}
	public returnSignature(): ReturnSignatureContext {
		return this.getTypedRuleContext(ReturnSignatureContext, 0) as ReturnSignatureContext;
	}
    public get ruleIndex(): number {
    	return qasm3Parser.RULE_externStatement;
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterExternStatement) {
	 		listener.enterExternStatement(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitExternStatement) {
	 		listener.exitExternStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitExternStatement) {
			return visitor.visitExternStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GateStatementContext extends ParserRuleContext {
	public _params!: IdentifierListContext;
	public _qubits!: IdentifierListContext;
	constructor(parser?: qasm3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public GATE(): TerminalNode {
		return this.getToken(qasm3Parser.GATE, 0);
	}
	public Identifier(): TerminalNode {
		return this.getToken(qasm3Parser.Identifier, 0);
	}
	public scope(): ScopeContext {
		return this.getTypedRuleContext(ScopeContext, 0) as ScopeContext;
	}
	public identifierList_list(): IdentifierListContext[] {
		return this.getTypedRuleContexts(IdentifierListContext) as IdentifierListContext[];
	}
	public identifierList(i: number): IdentifierListContext {
		return this.getTypedRuleContext(IdentifierListContext, i) as IdentifierListContext;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(qasm3Parser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(qasm3Parser.RPAREN, 0);
	}
    public get ruleIndex(): number {
    	return qasm3Parser.RULE_gateStatement;
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterGateStatement) {
	 		listener.enterGateStatement(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitGateStatement) {
	 		listener.exitGateStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitGateStatement) {
			return visitor.visitGateStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentStatementContext extends ParserRuleContext {
	public _op!: Token;
	constructor(parser?: qasm3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public indexedIdentifier(): IndexedIdentifierContext {
		return this.getTypedRuleContext(IndexedIdentifierContext, 0) as IndexedIdentifierContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(qasm3Parser.SEMICOLON, 0);
	}
	public EQUALS(): TerminalNode {
		return this.getToken(qasm3Parser.EQUALS, 0);
	}
	public CompoundAssignmentOperator(): TerminalNode {
		return this.getToken(qasm3Parser.CompoundAssignmentOperator, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public measureExpression(): MeasureExpressionContext {
		return this.getTypedRuleContext(MeasureExpressionContext, 0) as MeasureExpressionContext;
	}
    public get ruleIndex(): number {
    	return qasm3Parser.RULE_assignmentStatement;
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterAssignmentStatement) {
	 		listener.enterAssignmentStatement(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitAssignmentStatement) {
	 		listener.exitAssignmentStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitAssignmentStatement) {
			return visitor.visitAssignmentStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionStatementContext extends ParserRuleContext {
	constructor(parser?: qasm3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(qasm3Parser.SEMICOLON, 0);
	}
    public get ruleIndex(): number {
    	return qasm3Parser.RULE_expressionStatement;
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterExpressionStatement) {
	 		listener.enterExpressionStatement(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitExpressionStatement) {
	 		listener.exitExpressionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitExpressionStatement) {
			return visitor.visitExpressionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CalStatementContext extends ParserRuleContext {
	constructor(parser?: qasm3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CAL(): TerminalNode {
		return this.getToken(qasm3Parser.CAL, 0);
	}
	public LBRACE(): TerminalNode {
		return this.getToken(qasm3Parser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(qasm3Parser.RBRACE, 0);
	}
	public CalibrationBlock(): TerminalNode {
		return this.getToken(qasm3Parser.CalibrationBlock, 0);
	}
    public get ruleIndex(): number {
    	return qasm3Parser.RULE_calStatement;
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterCalStatement) {
	 		listener.enterCalStatement(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitCalStatement) {
	 		listener.exitCalStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitCalStatement) {
			return visitor.visitCalStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefcalStatementContext extends ParserRuleContext {
	constructor(parser?: qasm3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DEFCAL(): TerminalNode {
		return this.getToken(qasm3Parser.DEFCAL, 0);
	}
	public defcalTarget(): DefcalTargetContext {
		return this.getTypedRuleContext(DefcalTargetContext, 0) as DefcalTargetContext;
	}
	public defcalOperandList(): DefcalOperandListContext {
		return this.getTypedRuleContext(DefcalOperandListContext, 0) as DefcalOperandListContext;
	}
	public LBRACE(): TerminalNode {
		return this.getToken(qasm3Parser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(qasm3Parser.RBRACE, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(qasm3Parser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(qasm3Parser.RPAREN, 0);
	}
	public returnSignature(): ReturnSignatureContext {
		return this.getTypedRuleContext(ReturnSignatureContext, 0) as ReturnSignatureContext;
	}
	public CalibrationBlock(): TerminalNode {
		return this.getToken(qasm3Parser.CalibrationBlock, 0);
	}
	public defcalArgumentDefinitionList(): DefcalArgumentDefinitionListContext {
		return this.getTypedRuleContext(DefcalArgumentDefinitionListContext, 0) as DefcalArgumentDefinitionListContext;
	}
    public get ruleIndex(): number {
    	return qasm3Parser.RULE_defcalStatement;
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterDefcalStatement) {
	 		listener.enterDefcalStatement(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitDefcalStatement) {
	 		listener.exitDefcalStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitDefcalStatement) {
			return visitor.visitDefcalStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parser?: qasm3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return qasm3Parser.RULE_expression;
	}
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class BitwiseXorExpressionContext extends ExpressionContext {
	public _op!: Token;
	constructor(parser: qasm3Parser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public CARET(): TerminalNode {
		return this.getToken(qasm3Parser.CARET, 0);
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterBitwiseXorExpression) {
	 		listener.enterBitwiseXorExpression(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitBitwiseXorExpression) {
	 		listener.exitBitwiseXorExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitBitwiseXorExpression) {
			return visitor.visitBitwiseXorExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AdditiveExpressionContext extends ExpressionContext {
	public _op!: Token;
	constructor(parser: qasm3Parser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public PLUS(): TerminalNode {
		return this.getToken(qasm3Parser.PLUS, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(qasm3Parser.MINUS, 0);
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterAdditiveExpression) {
	 		listener.enterAdditiveExpression(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitAdditiveExpression) {
	 		listener.exitAdditiveExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitAdditiveExpression) {
			return visitor.visitAdditiveExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DurationofExpressionContext extends ExpressionContext {
	constructor(parser: qasm3Parser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DURATIONOF(): TerminalNode {
		return this.getToken(qasm3Parser.DURATIONOF, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(qasm3Parser.LPAREN, 0);
	}
	public scope(): ScopeContext {
		return this.getTypedRuleContext(ScopeContext, 0) as ScopeContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(qasm3Parser.RPAREN, 0);
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterDurationofExpression) {
	 		listener.enterDurationofExpression(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitDurationofExpression) {
	 		listener.exitDurationofExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitDurationofExpression) {
			return visitor.visitDurationofExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenthesisExpressionContext extends ExpressionContext {
	constructor(parser: qasm3Parser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(qasm3Parser.LPAREN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(qasm3Parser.RPAREN, 0);
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterParenthesisExpression) {
	 		listener.enterParenthesisExpression(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitParenthesisExpression) {
	 		listener.exitParenthesisExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitParenthesisExpression) {
			return visitor.visitParenthesisExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ComparisonExpressionContext extends ExpressionContext {
	public _op!: Token;
	constructor(parser: qasm3Parser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public ComparisonOperator(): TerminalNode {
		return this.getToken(qasm3Parser.ComparisonOperator, 0);
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterComparisonExpression) {
	 		listener.enterComparisonExpression(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitComparisonExpression) {
	 		listener.exitComparisonExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitComparisonExpression) {
			return visitor.visitComparisonExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MultiplicativeExpressionContext extends ExpressionContext {
	public _op!: Token;
	constructor(parser: qasm3Parser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public ASTERISK(): TerminalNode {
		return this.getToken(qasm3Parser.ASTERISK, 0);
	}
	public SLASH(): TerminalNode {
		return this.getToken(qasm3Parser.SLASH, 0);
	}
	public PERCENT(): TerminalNode {
		return this.getToken(qasm3Parser.PERCENT, 0);
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterMultiplicativeExpression) {
	 		listener.enterMultiplicativeExpression(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitMultiplicativeExpression) {
	 		listener.exitMultiplicativeExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitMultiplicativeExpression) {
			return visitor.visitMultiplicativeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogicalOrExpressionContext extends ExpressionContext {
	public _op!: Token;
	constructor(parser: qasm3Parser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public DOUBLE_PIPE(): TerminalNode {
		return this.getToken(qasm3Parser.DOUBLE_PIPE, 0);
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterLogicalOrExpression) {
	 		listener.enterLogicalOrExpression(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitLogicalOrExpression) {
	 		listener.exitLogicalOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitLogicalOrExpression) {
			return visitor.visitLogicalOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CastExpressionContext extends ExpressionContext {
	constructor(parser: qasm3Parser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(qasm3Parser.LPAREN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(qasm3Parser.RPAREN, 0);
	}
	public scalarType(): ScalarTypeContext {
		return this.getTypedRuleContext(ScalarTypeContext, 0) as ScalarTypeContext;
	}
	public arrayType(): ArrayTypeContext {
		return this.getTypedRuleContext(ArrayTypeContext, 0) as ArrayTypeContext;
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterCastExpression) {
	 		listener.enterCastExpression(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitCastExpression) {
	 		listener.exitCastExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitCastExpression) {
			return visitor.visitCastExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PowerExpressionContext extends ExpressionContext {
	public _op!: Token;
	constructor(parser: qasm3Parser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public DOUBLE_ASTERISK(): TerminalNode {
		return this.getToken(qasm3Parser.DOUBLE_ASTERISK, 0);
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterPowerExpression) {
	 		listener.enterPowerExpression(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitPowerExpression) {
	 		listener.exitPowerExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitPowerExpression) {
			return visitor.visitPowerExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitwiseOrExpressionContext extends ExpressionContext {
	public _op!: Token;
	constructor(parser: qasm3Parser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public PIPE(): TerminalNode {
		return this.getToken(qasm3Parser.PIPE, 0);
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterBitwiseOrExpression) {
	 		listener.enterBitwiseOrExpression(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitBitwiseOrExpression) {
	 		listener.exitBitwiseOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitBitwiseOrExpression) {
			return visitor.visitBitwiseOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CallExpressionContext extends ExpressionContext {
	constructor(parser: qasm3Parser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Identifier(): TerminalNode {
		return this.getToken(qasm3Parser.Identifier, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(qasm3Parser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(qasm3Parser.RPAREN, 0);
	}
	public expressionList(): ExpressionListContext {
		return this.getTypedRuleContext(ExpressionListContext, 0) as ExpressionListContext;
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterCallExpression) {
	 		listener.enterCallExpression(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitCallExpression) {
	 		listener.exitCallExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitCallExpression) {
			return visitor.visitCallExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitshiftExpressionContext extends ExpressionContext {
	public _op!: Token;
	constructor(parser: qasm3Parser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public BitshiftOperator(): TerminalNode {
		return this.getToken(qasm3Parser.BitshiftOperator, 0);
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterBitshiftExpression) {
	 		listener.enterBitshiftExpression(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitBitshiftExpression) {
	 		listener.exitBitshiftExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitBitshiftExpression) {
			return visitor.visitBitshiftExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitwiseAndExpressionContext extends ExpressionContext {
	public _op!: Token;
	constructor(parser: qasm3Parser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public AMPERSAND(): TerminalNode {
		return this.getToken(qasm3Parser.AMPERSAND, 0);
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterBitwiseAndExpression) {
	 		listener.enterBitwiseAndExpression(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitBitwiseAndExpression) {
	 		listener.exitBitwiseAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitBitwiseAndExpression) {
			return visitor.visitBitwiseAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EqualityExpressionContext extends ExpressionContext {
	public _op!: Token;
	constructor(parser: qasm3Parser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public EqualityOperator(): TerminalNode {
		return this.getToken(qasm3Parser.EqualityOperator, 0);
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterEqualityExpression) {
	 		listener.enterEqualityExpression(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitEqualityExpression) {
	 		listener.exitEqualityExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitEqualityExpression) {
			return visitor.visitEqualityExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogicalAndExpressionContext extends ExpressionContext {
	public _op!: Token;
	constructor(parser: qasm3Parser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public DOUBLE_AMPERSAND(): TerminalNode {
		return this.getToken(qasm3Parser.DOUBLE_AMPERSAND, 0);
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterLogicalAndExpression) {
	 		listener.enterLogicalAndExpression(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitLogicalAndExpression) {
	 		listener.exitLogicalAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitLogicalAndExpression) {
			return visitor.visitLogicalAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IndexExpressionContext extends ExpressionContext {
	constructor(parser: qasm3Parser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public indexOperator(): IndexOperatorContext {
		return this.getTypedRuleContext(IndexOperatorContext, 0) as IndexOperatorContext;
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterIndexExpression) {
	 		listener.enterIndexExpression(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitIndexExpression) {
	 		listener.exitIndexExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitIndexExpression) {
			return visitor.visitIndexExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnaryExpressionContext extends ExpressionContext {
	public _op!: Token;
	constructor(parser: qasm3Parser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public TILDE(): TerminalNode {
		return this.getToken(qasm3Parser.TILDE, 0);
	}
	public EXCLAMATION_POINT(): TerminalNode {
		return this.getToken(qasm3Parser.EXCLAMATION_POINT, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(qasm3Parser.MINUS, 0);
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterUnaryExpression) {
	 		listener.enterUnaryExpression(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitUnaryExpression) {
	 		listener.exitUnaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitUnaryExpression) {
			return visitor.visitUnaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LiteralExpressionContext extends ExpressionContext {
	constructor(parser: qasm3Parser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Identifier(): TerminalNode {
		return this.getToken(qasm3Parser.Identifier, 0);
	}
	public BinaryIntegerLiteral(): TerminalNode {
		return this.getToken(qasm3Parser.BinaryIntegerLiteral, 0);
	}
	public OctalIntegerLiteral(): TerminalNode {
		return this.getToken(qasm3Parser.OctalIntegerLiteral, 0);
	}
	public DecimalIntegerLiteral(): TerminalNode {
		return this.getToken(qasm3Parser.DecimalIntegerLiteral, 0);
	}
	public HexIntegerLiteral(): TerminalNode {
		return this.getToken(qasm3Parser.HexIntegerLiteral, 0);
	}
	public FloatLiteral(): TerminalNode {
		return this.getToken(qasm3Parser.FloatLiteral, 0);
	}
	public ImaginaryLiteral(): TerminalNode {
		return this.getToken(qasm3Parser.ImaginaryLiteral, 0);
	}
	public BooleanLiteral(): TerminalNode {
		return this.getToken(qasm3Parser.BooleanLiteral, 0);
	}
	public BitstringLiteral(): TerminalNode {
		return this.getToken(qasm3Parser.BitstringLiteral, 0);
	}
	public TimingLiteral(): TerminalNode {
		return this.getToken(qasm3Parser.TimingLiteral, 0);
	}
	public HardwareQubit(): TerminalNode {
		return this.getToken(qasm3Parser.HardwareQubit, 0);
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterLiteralExpression) {
	 		listener.enterLiteralExpression(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitLiteralExpression) {
	 		listener.exitLiteralExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitLiteralExpression) {
			return visitor.visitLiteralExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AliasExpressionContext extends ParserRuleContext {
	constructor(parser?: qasm3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public DOUBLE_PLUS_list(): TerminalNode[] {
	    	return this.getTokens(qasm3Parser.DOUBLE_PLUS);
	}
	public DOUBLE_PLUS(i: number): TerminalNode {
		return this.getToken(qasm3Parser.DOUBLE_PLUS, i);
	}
    public get ruleIndex(): number {
    	return qasm3Parser.RULE_aliasExpression;
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterAliasExpression) {
	 		listener.enterAliasExpression(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitAliasExpression) {
	 		listener.exitAliasExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitAliasExpression) {
			return visitor.visitAliasExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationExpressionContext extends ParserRuleContext {
	constructor(parser?: qasm3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public arrayLiteral(): ArrayLiteralContext {
		return this.getTypedRuleContext(ArrayLiteralContext, 0) as ArrayLiteralContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public measureExpression(): MeasureExpressionContext {
		return this.getTypedRuleContext(MeasureExpressionContext, 0) as MeasureExpressionContext;
	}
    public get ruleIndex(): number {
    	return qasm3Parser.RULE_declarationExpression;
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterDeclarationExpression) {
	 		listener.enterDeclarationExpression(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitDeclarationExpression) {
	 		listener.exitDeclarationExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitDeclarationExpression) {
			return visitor.visitDeclarationExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MeasureExpressionContext extends ParserRuleContext {
	constructor(parser?: qasm3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public MEASURE(): TerminalNode {
		return this.getToken(qasm3Parser.MEASURE, 0);
	}
	public gateOperand(): GateOperandContext {
		return this.getTypedRuleContext(GateOperandContext, 0) as GateOperandContext;
	}
    public get ruleIndex(): number {
    	return qasm3Parser.RULE_measureExpression;
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterMeasureExpression) {
	 		listener.enterMeasureExpression(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitMeasureExpression) {
	 		listener.exitMeasureExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitMeasureExpression) {
			return visitor.visitMeasureExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RangeExpressionContext extends ParserRuleContext {
	constructor(parser?: qasm3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COLON_list(): TerminalNode[] {
	    	return this.getTokens(qasm3Parser.COLON);
	}
	public COLON(i: number): TerminalNode {
		return this.getToken(qasm3Parser.COLON, i);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return qasm3Parser.RULE_rangeExpression;
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterRangeExpression) {
	 		listener.enterRangeExpression(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitRangeExpression) {
	 		listener.exitRangeExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitRangeExpression) {
			return visitor.visitRangeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetExpressionContext extends ParserRuleContext {
	constructor(parser?: qasm3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LBRACE(): TerminalNode {
		return this.getToken(qasm3Parser.LBRACE, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public RBRACE(): TerminalNode {
		return this.getToken(qasm3Parser.RBRACE, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(qasm3Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(qasm3Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return qasm3Parser.RULE_setExpression;
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterSetExpression) {
	 		listener.enterSetExpression(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitSetExpression) {
	 		listener.exitSetExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitSetExpression) {
			return visitor.visitSetExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayLiteralContext extends ParserRuleContext {
	constructor(parser?: qasm3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LBRACE(): TerminalNode {
		return this.getToken(qasm3Parser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(qasm3Parser.RBRACE, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public arrayLiteral_list(): ArrayLiteralContext[] {
		return this.getTypedRuleContexts(ArrayLiteralContext) as ArrayLiteralContext[];
	}
	public arrayLiteral(i: number): ArrayLiteralContext {
		return this.getTypedRuleContext(ArrayLiteralContext, i) as ArrayLiteralContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(qasm3Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(qasm3Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return qasm3Parser.RULE_arrayLiteral;
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterArrayLiteral) {
	 		listener.enterArrayLiteral(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitArrayLiteral) {
	 		listener.exitArrayLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitArrayLiteral) {
			return visitor.visitArrayLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IndexOperatorContext extends ParserRuleContext {
	constructor(parser?: qasm3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LBRACKET(): TerminalNode {
		return this.getToken(qasm3Parser.LBRACKET, 0);
	}
	public RBRACKET(): TerminalNode {
		return this.getToken(qasm3Parser.RBRACKET, 0);
	}
	public setExpression(): SetExpressionContext {
		return this.getTypedRuleContext(SetExpressionContext, 0) as SetExpressionContext;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public rangeExpression_list(): RangeExpressionContext[] {
		return this.getTypedRuleContexts(RangeExpressionContext) as RangeExpressionContext[];
	}
	public rangeExpression(i: number): RangeExpressionContext {
		return this.getTypedRuleContext(RangeExpressionContext, i) as RangeExpressionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(qasm3Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(qasm3Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return qasm3Parser.RULE_indexOperator;
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterIndexOperator) {
	 		listener.enterIndexOperator(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitIndexOperator) {
	 		listener.exitIndexOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitIndexOperator) {
			return visitor.visitIndexOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IndexedIdentifierContext extends ParserRuleContext {
	constructor(parser?: qasm3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(qasm3Parser.Identifier, 0);
	}
	public indexOperator_list(): IndexOperatorContext[] {
		return this.getTypedRuleContexts(IndexOperatorContext) as IndexOperatorContext[];
	}
	public indexOperator(i: number): IndexOperatorContext {
		return this.getTypedRuleContext(IndexOperatorContext, i) as IndexOperatorContext;
	}
    public get ruleIndex(): number {
    	return qasm3Parser.RULE_indexedIdentifier;
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterIndexedIdentifier) {
	 		listener.enterIndexedIdentifier(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitIndexedIdentifier) {
	 		listener.exitIndexedIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitIndexedIdentifier) {
			return visitor.visitIndexedIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnSignatureContext extends ParserRuleContext {
	constructor(parser?: qasm3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ARROW(): TerminalNode {
		return this.getToken(qasm3Parser.ARROW, 0);
	}
	public scalarType(): ScalarTypeContext {
		return this.getTypedRuleContext(ScalarTypeContext, 0) as ScalarTypeContext;
	}
    public get ruleIndex(): number {
    	return qasm3Parser.RULE_returnSignature;
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterReturnSignature) {
	 		listener.enterReturnSignature(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitReturnSignature) {
	 		listener.exitReturnSignature(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitReturnSignature) {
			return visitor.visitReturnSignature(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GateModifierContext extends ParserRuleContext {
	constructor(parser?: qasm3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AT(): TerminalNode {
		return this.getToken(qasm3Parser.AT, 0);
	}
	public INV(): TerminalNode {
		return this.getToken(qasm3Parser.INV, 0);
	}
	public POW(): TerminalNode {
		return this.getToken(qasm3Parser.POW, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(qasm3Parser.LPAREN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(qasm3Parser.RPAREN, 0);
	}
	public CTRL(): TerminalNode {
		return this.getToken(qasm3Parser.CTRL, 0);
	}
	public NEGCTRL(): TerminalNode {
		return this.getToken(qasm3Parser.NEGCTRL, 0);
	}
    public get ruleIndex(): number {
    	return qasm3Parser.RULE_gateModifier;
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterGateModifier) {
	 		listener.enterGateModifier(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitGateModifier) {
	 		listener.exitGateModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitGateModifier) {
			return visitor.visitGateModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ScalarTypeContext extends ParserRuleContext {
	constructor(parser?: qasm3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BIT(): TerminalNode {
		return this.getToken(qasm3Parser.BIT, 0);
	}
	public designator(): DesignatorContext {
		return this.getTypedRuleContext(DesignatorContext, 0) as DesignatorContext;
	}
	public INT(): TerminalNode {
		return this.getToken(qasm3Parser.INT, 0);
	}
	public UINT(): TerminalNode {
		return this.getToken(qasm3Parser.UINT, 0);
	}
	public FLOAT(): TerminalNode {
		return this.getToken(qasm3Parser.FLOAT, 0);
	}
	public ANGLE(): TerminalNode {
		return this.getToken(qasm3Parser.ANGLE, 0);
	}
	public BOOL(): TerminalNode {
		return this.getToken(qasm3Parser.BOOL, 0);
	}
	public DURATION(): TerminalNode {
		return this.getToken(qasm3Parser.DURATION, 0);
	}
	public STRETCH(): TerminalNode {
		return this.getToken(qasm3Parser.STRETCH, 0);
	}
	public COMPLEX(): TerminalNode {
		return this.getToken(qasm3Parser.COMPLEX, 0);
	}
	public LBRACKET(): TerminalNode {
		return this.getToken(qasm3Parser.LBRACKET, 0);
	}
	public scalarType(): ScalarTypeContext {
		return this.getTypedRuleContext(ScalarTypeContext, 0) as ScalarTypeContext;
	}
	public RBRACKET(): TerminalNode {
		return this.getToken(qasm3Parser.RBRACKET, 0);
	}
    public get ruleIndex(): number {
    	return qasm3Parser.RULE_scalarType;
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterScalarType) {
	 		listener.enterScalarType(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitScalarType) {
	 		listener.exitScalarType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitScalarType) {
			return visitor.visitScalarType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QubitTypeContext extends ParserRuleContext {
	constructor(parser?: qasm3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public QUBIT(): TerminalNode {
		return this.getToken(qasm3Parser.QUBIT, 0);
	}
	public designator(): DesignatorContext {
		return this.getTypedRuleContext(DesignatorContext, 0) as DesignatorContext;
	}
    public get ruleIndex(): number {
    	return qasm3Parser.RULE_qubitType;
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterQubitType) {
	 		listener.enterQubitType(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitQubitType) {
	 		listener.exitQubitType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitQubitType) {
			return visitor.visitQubitType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayTypeContext extends ParserRuleContext {
	constructor(parser?: qasm3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ARRAY(): TerminalNode {
		return this.getToken(qasm3Parser.ARRAY, 0);
	}
	public LBRACKET(): TerminalNode {
		return this.getToken(qasm3Parser.LBRACKET, 0);
	}
	public scalarType(): ScalarTypeContext {
		return this.getTypedRuleContext(ScalarTypeContext, 0) as ScalarTypeContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(qasm3Parser.COMMA, 0);
	}
	public expressionList(): ExpressionListContext {
		return this.getTypedRuleContext(ExpressionListContext, 0) as ExpressionListContext;
	}
	public RBRACKET(): TerminalNode {
		return this.getToken(qasm3Parser.RBRACKET, 0);
	}
    public get ruleIndex(): number {
    	return qasm3Parser.RULE_arrayType;
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterArrayType) {
	 		listener.enterArrayType(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitArrayType) {
	 		listener.exitArrayType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitArrayType) {
			return visitor.visitArrayType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayReferenceTypeContext extends ParserRuleContext {
	constructor(parser?: qasm3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ARRAY(): TerminalNode {
		return this.getToken(qasm3Parser.ARRAY, 0);
	}
	public LBRACKET(): TerminalNode {
		return this.getToken(qasm3Parser.LBRACKET, 0);
	}
	public scalarType(): ScalarTypeContext {
		return this.getTypedRuleContext(ScalarTypeContext, 0) as ScalarTypeContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(qasm3Parser.COMMA, 0);
	}
	public RBRACKET(): TerminalNode {
		return this.getToken(qasm3Parser.RBRACKET, 0);
	}
	public READONLY(): TerminalNode {
		return this.getToken(qasm3Parser.READONLY, 0);
	}
	public MUTABLE(): TerminalNode {
		return this.getToken(qasm3Parser.MUTABLE, 0);
	}
	public expressionList(): ExpressionListContext {
		return this.getTypedRuleContext(ExpressionListContext, 0) as ExpressionListContext;
	}
	public DIM(): TerminalNode {
		return this.getToken(qasm3Parser.DIM, 0);
	}
	public EQUALS(): TerminalNode {
		return this.getToken(qasm3Parser.EQUALS, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return qasm3Parser.RULE_arrayReferenceType;
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterArrayReferenceType) {
	 		listener.enterArrayReferenceType(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitArrayReferenceType) {
	 		listener.exitArrayReferenceType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitArrayReferenceType) {
			return visitor.visitArrayReferenceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DesignatorContext extends ParserRuleContext {
	constructor(parser?: qasm3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LBRACKET(): TerminalNode {
		return this.getToken(qasm3Parser.LBRACKET, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RBRACKET(): TerminalNode {
		return this.getToken(qasm3Parser.RBRACKET, 0);
	}
    public get ruleIndex(): number {
    	return qasm3Parser.RULE_designator;
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterDesignator) {
	 		listener.enterDesignator(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitDesignator) {
	 		listener.exitDesignator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitDesignator) {
			return visitor.visitDesignator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefcalTargetContext extends ParserRuleContext {
	constructor(parser?: qasm3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public MEASURE(): TerminalNode {
		return this.getToken(qasm3Parser.MEASURE, 0);
	}
	public RESET(): TerminalNode {
		return this.getToken(qasm3Parser.RESET, 0);
	}
	public DELAY(): TerminalNode {
		return this.getToken(qasm3Parser.DELAY, 0);
	}
	public Identifier(): TerminalNode {
		return this.getToken(qasm3Parser.Identifier, 0);
	}
    public get ruleIndex(): number {
    	return qasm3Parser.RULE_defcalTarget;
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterDefcalTarget) {
	 		listener.enterDefcalTarget(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitDefcalTarget) {
	 		listener.exitDefcalTarget(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitDefcalTarget) {
			return visitor.visitDefcalTarget(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefcalArgumentDefinitionContext extends ParserRuleContext {
	constructor(parser?: qasm3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public argumentDefinition(): ArgumentDefinitionContext {
		return this.getTypedRuleContext(ArgumentDefinitionContext, 0) as ArgumentDefinitionContext;
	}
    public get ruleIndex(): number {
    	return qasm3Parser.RULE_defcalArgumentDefinition;
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterDefcalArgumentDefinition) {
	 		listener.enterDefcalArgumentDefinition(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitDefcalArgumentDefinition) {
	 		listener.exitDefcalArgumentDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitDefcalArgumentDefinition) {
			return visitor.visitDefcalArgumentDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefcalOperandContext extends ParserRuleContext {
	constructor(parser?: qasm3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public HardwareQubit(): TerminalNode {
		return this.getToken(qasm3Parser.HardwareQubit, 0);
	}
	public Identifier(): TerminalNode {
		return this.getToken(qasm3Parser.Identifier, 0);
	}
    public get ruleIndex(): number {
    	return qasm3Parser.RULE_defcalOperand;
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterDefcalOperand) {
	 		listener.enterDefcalOperand(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitDefcalOperand) {
	 		listener.exitDefcalOperand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitDefcalOperand) {
			return visitor.visitDefcalOperand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GateOperandContext extends ParserRuleContext {
	constructor(parser?: qasm3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public indexedIdentifier(): IndexedIdentifierContext {
		return this.getTypedRuleContext(IndexedIdentifierContext, 0) as IndexedIdentifierContext;
	}
	public HardwareQubit(): TerminalNode {
		return this.getToken(qasm3Parser.HardwareQubit, 0);
	}
    public get ruleIndex(): number {
    	return qasm3Parser.RULE_gateOperand;
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterGateOperand) {
	 		listener.enterGateOperand(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitGateOperand) {
	 		listener.exitGateOperand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitGateOperand) {
			return visitor.visitGateOperand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExternArgumentContext extends ParserRuleContext {
	constructor(parser?: qasm3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public scalarType(): ScalarTypeContext {
		return this.getTypedRuleContext(ScalarTypeContext, 0) as ScalarTypeContext;
	}
	public arrayReferenceType(): ArrayReferenceTypeContext {
		return this.getTypedRuleContext(ArrayReferenceTypeContext, 0) as ArrayReferenceTypeContext;
	}
	public CREG(): TerminalNode {
		return this.getToken(qasm3Parser.CREG, 0);
	}
	public designator(): DesignatorContext {
		return this.getTypedRuleContext(DesignatorContext, 0) as DesignatorContext;
	}
    public get ruleIndex(): number {
    	return qasm3Parser.RULE_externArgument;
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterExternArgument) {
	 		listener.enterExternArgument(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitExternArgument) {
	 		listener.exitExternArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitExternArgument) {
			return visitor.visitExternArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentDefinitionContext extends ParserRuleContext {
	constructor(parser?: qasm3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public scalarType(): ScalarTypeContext {
		return this.getTypedRuleContext(ScalarTypeContext, 0) as ScalarTypeContext;
	}
	public Identifier(): TerminalNode {
		return this.getToken(qasm3Parser.Identifier, 0);
	}
	public qubitType(): QubitTypeContext {
		return this.getTypedRuleContext(QubitTypeContext, 0) as QubitTypeContext;
	}
	public CREG(): TerminalNode {
		return this.getToken(qasm3Parser.CREG, 0);
	}
	public QREG(): TerminalNode {
		return this.getToken(qasm3Parser.QREG, 0);
	}
	public designator(): DesignatorContext {
		return this.getTypedRuleContext(DesignatorContext, 0) as DesignatorContext;
	}
	public arrayReferenceType(): ArrayReferenceTypeContext {
		return this.getTypedRuleContext(ArrayReferenceTypeContext, 0) as ArrayReferenceTypeContext;
	}
    public get ruleIndex(): number {
    	return qasm3Parser.RULE_argumentDefinition;
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterArgumentDefinition) {
	 		listener.enterArgumentDefinition(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitArgumentDefinition) {
	 		listener.exitArgumentDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitArgumentDefinition) {
			return visitor.visitArgumentDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentDefinitionListContext extends ParserRuleContext {
	constructor(parser?: qasm3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public argumentDefinition_list(): ArgumentDefinitionContext[] {
		return this.getTypedRuleContexts(ArgumentDefinitionContext) as ArgumentDefinitionContext[];
	}
	public argumentDefinition(i: number): ArgumentDefinitionContext {
		return this.getTypedRuleContext(ArgumentDefinitionContext, i) as ArgumentDefinitionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(qasm3Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(qasm3Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return qasm3Parser.RULE_argumentDefinitionList;
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterArgumentDefinitionList) {
	 		listener.enterArgumentDefinitionList(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitArgumentDefinitionList) {
	 		listener.exitArgumentDefinitionList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitArgumentDefinitionList) {
			return visitor.visitArgumentDefinitionList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefcalArgumentDefinitionListContext extends ParserRuleContext {
	constructor(parser?: qasm3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public defcalArgumentDefinition_list(): DefcalArgumentDefinitionContext[] {
		return this.getTypedRuleContexts(DefcalArgumentDefinitionContext) as DefcalArgumentDefinitionContext[];
	}
	public defcalArgumentDefinition(i: number): DefcalArgumentDefinitionContext {
		return this.getTypedRuleContext(DefcalArgumentDefinitionContext, i) as DefcalArgumentDefinitionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(qasm3Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(qasm3Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return qasm3Parser.RULE_defcalArgumentDefinitionList;
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterDefcalArgumentDefinitionList) {
	 		listener.enterDefcalArgumentDefinitionList(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitDefcalArgumentDefinitionList) {
	 		listener.exitDefcalArgumentDefinitionList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitDefcalArgumentDefinitionList) {
			return visitor.visitDefcalArgumentDefinitionList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefcalOperandListContext extends ParserRuleContext {
	constructor(parser?: qasm3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public defcalOperand_list(): DefcalOperandContext[] {
		return this.getTypedRuleContexts(DefcalOperandContext) as DefcalOperandContext[];
	}
	public defcalOperand(i: number): DefcalOperandContext {
		return this.getTypedRuleContext(DefcalOperandContext, i) as DefcalOperandContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(qasm3Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(qasm3Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return qasm3Parser.RULE_defcalOperandList;
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterDefcalOperandList) {
	 		listener.enterDefcalOperandList(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitDefcalOperandList) {
	 		listener.exitDefcalOperandList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitDefcalOperandList) {
			return visitor.visitDefcalOperandList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionListContext extends ParserRuleContext {
	constructor(parser?: qasm3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(qasm3Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(qasm3Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return qasm3Parser.RULE_expressionList;
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterExpressionList) {
	 		listener.enterExpressionList(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitExpressionList) {
	 		listener.exitExpressionList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitExpressionList) {
			return visitor.visitExpressionList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierListContext extends ParserRuleContext {
	constructor(parser?: qasm3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier_list(): TerminalNode[] {
	    	return this.getTokens(qasm3Parser.Identifier);
	}
	public Identifier(i: number): TerminalNode {
		return this.getToken(qasm3Parser.Identifier, i);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(qasm3Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(qasm3Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return qasm3Parser.RULE_identifierList;
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterIdentifierList) {
	 		listener.enterIdentifierList(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitIdentifierList) {
	 		listener.exitIdentifierList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitIdentifierList) {
			return visitor.visitIdentifierList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GateOperandListContext extends ParserRuleContext {
	constructor(parser?: qasm3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public gateOperand_list(): GateOperandContext[] {
		return this.getTypedRuleContexts(GateOperandContext) as GateOperandContext[];
	}
	public gateOperand(i: number): GateOperandContext {
		return this.getTypedRuleContext(GateOperandContext, i) as GateOperandContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(qasm3Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(qasm3Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return qasm3Parser.RULE_gateOperandList;
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterGateOperandList) {
	 		listener.enterGateOperandList(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitGateOperandList) {
	 		listener.exitGateOperandList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitGateOperandList) {
			return visitor.visitGateOperandList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExternArgumentListContext extends ParserRuleContext {
	constructor(parser?: qasm3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public externArgument_list(): ExternArgumentContext[] {
		return this.getTypedRuleContexts(ExternArgumentContext) as ExternArgumentContext[];
	}
	public externArgument(i: number): ExternArgumentContext {
		return this.getTypedRuleContext(ExternArgumentContext, i) as ExternArgumentContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(qasm3Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(qasm3Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return qasm3Parser.RULE_externArgumentList;
	}
	public enterRule(listener: qasm3ParserListener): void {
	    if(listener.enterExternArgumentList) {
	 		listener.enterExternArgumentList(this);
		}
	}
	public exitRule(listener: qasm3ParserListener): void {
	    if(listener.exitExternArgumentList) {
	 		listener.exitExternArgumentList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: qasm3ParserVisitor<Result>): Result {
		if (visitor.visitExternArgumentList) {
			return visitor.visitExternArgumentList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
