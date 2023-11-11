// Generated from d:/LSP/OpenQASM-LSP/grammar/qasm3Parser.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class qasm3Parser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		OPENQASM=1, INCLUDE=2, DEFCALGRAMMAR=3, DEF=4, CAL=5, DEFCAL=6, GATE=7, 
		EXTERN=8, BOX=9, LET=10, BREAK=11, CONTINUE=12, IF=13, ELSE=14, END=15, 
		RETURN=16, FOR=17, WHILE=18, IN=19, PRAGMA=20, AnnotationKeyword=21, INPUT=22, 
		OUTPUT=23, CONST=24, READONLY=25, MUTABLE=26, QREG=27, QUBIT=28, CREG=29, 
		BOOL=30, BIT=31, INT=32, UINT=33, FLOAT=34, ANGLE=35, COMPLEX=36, ARRAY=37, 
		VOID=38, DURATION=39, STRETCH=40, GPHASE=41, INV=42, POW=43, CTRL=44, 
		NEGCTRL=45, DIM=46, DURATIONOF=47, DELAY=48, RESET=49, MEASURE=50, BARRIER=51, 
		BooleanLiteral=52, LBRACKET=53, RBRACKET=54, LBRACE=55, RBRACE=56, LPAREN=57, 
		RPAREN=58, COLON=59, SEMICOLON=60, DOT=61, COMMA=62, EQUALS=63, ARROW=64, 
		PLUS=65, DOUBLE_PLUS=66, MINUS=67, ASTERISK=68, DOUBLE_ASTERISK=69, SLASH=70, 
		PERCENT=71, PIPE=72, DOUBLE_PIPE=73, AMPERSAND=74, DOUBLE_AMPERSAND=75, 
		CARET=76, AT=77, TILDE=78, EXCLAMATION_POINT=79, EqualityOperator=80, 
		CompoundAssignmentOperator=81, ComparisonOperator=82, BitshiftOperator=83, 
		IMAG=84, ImaginaryLiteral=85, BinaryIntegerLiteral=86, OctalIntegerLiteral=87, 
		DecimalIntegerLiteral=88, HexIntegerLiteral=89, Identifier=90, HardwareQubit=91, 
		FloatLiteral=92, TimingLiteral=93, BitstringLiteral=94, Whitespace=95, 
		Newline=96, LineComment=97, BlockComment=98, VERSION_IDENTIFER_WHITESPACE=99, 
		VersionSpecifier=100, ARBITRARY_STRING_WHITESPACE=101, StringLiteral=102, 
		EAT_INITIAL_SPACE=103, EAT_LINE_END=104, RemainingLineContent=105, CAL_PRELUDE_WHITESPACE=106, 
		CAL_PRELUDE_COMMENT=107, DEFCAL_PRELUDE_WHITESPACE=108, DEFCAL_PRELUDE_COMMENT=109, 
		CalibrationBlock=110;
	public static final int
		RULE_program = 0, RULE_version = 1, RULE_statement = 2, RULE_annotation = 3, 
		RULE_scope = 4, RULE_pragma = 5, RULE_statementOrScope = 6, RULE_calibrationGrammarStatement = 7, 
		RULE_includeStatement = 8, RULE_breakStatement = 9, RULE_continueStatement = 10, 
		RULE_endStatement = 11, RULE_forStatement = 12, RULE_ifStatement = 13, 
		RULE_returnStatement = 14, RULE_whileStatement = 15, RULE_barrierStatement = 16, 
		RULE_boxStatement = 17, RULE_delayStatement = 18, RULE_gateCallStatement = 19, 
		RULE_measureArrowAssignmentStatement = 20, RULE_resetStatement = 21, RULE_aliasDeclarationStatement = 22, 
		RULE_classicalDeclarationStatement = 23, RULE_constDeclarationStatement = 24, 
		RULE_ioDeclarationStatement = 25, RULE_oldStyleDeclarationStatement = 26, 
		RULE_quantumDeclarationStatement = 27, RULE_defStatement = 28, RULE_externStatement = 29, 
		RULE_gateStatement = 30, RULE_assignmentStatement = 31, RULE_expressionStatement = 32, 
		RULE_calStatement = 33, RULE_defcalStatement = 34, RULE_expression = 35, 
		RULE_aliasExpression = 36, RULE_declarationExpression = 37, RULE_measureExpression = 38, 
		RULE_rangeExpression = 39, RULE_setExpression = 40, RULE_arrayLiteral = 41, 
		RULE_indexOperator = 42, RULE_indexedIdentifier = 43, RULE_returnSignature = 44, 
		RULE_gateModifier = 45, RULE_scalarType = 46, RULE_qubitType = 47, RULE_arrayType = 48, 
		RULE_arrayReferenceType = 49, RULE_designator = 50, RULE_defcalTarget = 51, 
		RULE_defcalArgumentDefinition = 52, RULE_defcalOperand = 53, RULE_gateOperand = 54, 
		RULE_externArgument = 55, RULE_argumentDefinition = 56, RULE_argumentDefinitionList = 57, 
		RULE_defcalArgumentDefinitionList = 58, RULE_defcalOperandList = 59, RULE_expressionList = 60, 
		RULE_identifierList = 61, RULE_gateOperandList = 62, RULE_externArgumentList = 63;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "version", "statement", "annotation", "scope", "pragma", "statementOrScope", 
			"calibrationGrammarStatement", "includeStatement", "breakStatement", 
			"continueStatement", "endStatement", "forStatement", "ifStatement", "returnStatement", 
			"whileStatement", "barrierStatement", "boxStatement", "delayStatement", 
			"gateCallStatement", "measureArrowAssignmentStatement", "resetStatement", 
			"aliasDeclarationStatement", "classicalDeclarationStatement", "constDeclarationStatement", 
			"ioDeclarationStatement", "oldStyleDeclarationStatement", "quantumDeclarationStatement", 
			"defStatement", "externStatement", "gateStatement", "assignmentStatement", 
			"expressionStatement", "calStatement", "defcalStatement", "expression", 
			"aliasExpression", "declarationExpression", "measureExpression", "rangeExpression", 
			"setExpression", "arrayLiteral", "indexOperator", "indexedIdentifier", 
			"returnSignature", "gateModifier", "scalarType", "qubitType", "arrayType", 
			"arrayReferenceType", "designator", "defcalTarget", "defcalArgumentDefinition", 
			"defcalOperand", "gateOperand", "externArgument", "argumentDefinition", 
			"argumentDefinitionList", "defcalArgumentDefinitionList", "defcalOperandList", 
			"expressionList", "identifierList", "gateOperandList", "externArgumentList"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'OPENQASM'", "'include'", "'defcalgrammar'", "'def'", "'cal'", 
			"'defcal'", "'gate'", "'extern'", "'box'", "'let'", "'break'", "'continue'", 
			"'if'", "'else'", "'end'", "'return'", "'for'", "'while'", "'in'", null, 
			null, "'input'", "'output'", "'const'", "'readonly'", "'mutable'", "'qreg'", 
			"'qubit'", "'creg'", "'bool'", "'bit'", "'int'", "'uint'", "'float'", 
			"'angle'", "'complex'", "'array'", "'void'", "'duration'", "'stretch'", 
			"'gphase'", "'inv'", "'pow'", "'ctrl'", "'negctrl'", "'#dim'", "'durationof'", 
			"'delay'", "'reset'", "'measure'", "'barrier'", null, "'['", "']'", "'{'", 
			"'}'", "'('", "')'", "':'", "';'", "'.'", "','", "'='", "'->'", "'+'", 
			"'++'", "'-'", "'*'", "'**'", "'/'", "'%'", "'|'", "'||'", "'&'", "'&&'", 
			"'^'", "'@'", "'~'", "'!'", null, null, null, null, "'im'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "OPENQASM", "INCLUDE", "DEFCALGRAMMAR", "DEF", "CAL", "DEFCAL", 
			"GATE", "EXTERN", "BOX", "LET", "BREAK", "CONTINUE", "IF", "ELSE", "END", 
			"RETURN", "FOR", "WHILE", "IN", "PRAGMA", "AnnotationKeyword", "INPUT", 
			"OUTPUT", "CONST", "READONLY", "MUTABLE", "QREG", "QUBIT", "CREG", "BOOL", 
			"BIT", "INT", "UINT", "FLOAT", "ANGLE", "COMPLEX", "ARRAY", "VOID", "DURATION", 
			"STRETCH", "GPHASE", "INV", "POW", "CTRL", "NEGCTRL", "DIM", "DURATIONOF", 
			"DELAY", "RESET", "MEASURE", "BARRIER", "BooleanLiteral", "LBRACKET", 
			"RBRACKET", "LBRACE", "RBRACE", "LPAREN", "RPAREN", "COLON", "SEMICOLON", 
			"DOT", "COMMA", "EQUALS", "ARROW", "PLUS", "DOUBLE_PLUS", "MINUS", "ASTERISK", 
			"DOUBLE_ASTERISK", "SLASH", "PERCENT", "PIPE", "DOUBLE_PIPE", "AMPERSAND", 
			"DOUBLE_AMPERSAND", "CARET", "AT", "TILDE", "EXCLAMATION_POINT", "EqualityOperator", 
			"CompoundAssignmentOperator", "ComparisonOperator", "BitshiftOperator", 
			"IMAG", "ImaginaryLiteral", "BinaryIntegerLiteral", "OctalIntegerLiteral", 
			"DecimalIntegerLiteral", "HexIntegerLiteral", "Identifier", "HardwareQubit", 
			"FloatLiteral", "TimingLiteral", "BitstringLiteral", "Whitespace", "Newline", 
			"LineComment", "BlockComment", "VERSION_IDENTIFER_WHITESPACE", "VersionSpecifier", 
			"ARBITRARY_STRING_WHITESPACE", "StringLiteral", "EAT_INITIAL_SPACE", 
			"EAT_LINE_END", "RemainingLineContent", "CAL_PRELUDE_WHITESPACE", "CAL_PRELUDE_COMMENT", 
			"DEFCAL_PRELUDE_WHITESPACE", "DEFCAL_PRELUDE_COMMENT", "CalibrationBlock"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "qasm3Parser.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public qasm3Parser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ProgramContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(qasm3Parser.EOF, 0); }
		public VersionContext version() {
			return getRuleContext(VersionContext.class,0);
		}
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public ProgramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_program; }
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_program);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(129);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==OPENQASM) {
				{
				setState(128);
				version();
				}
			}

			setState(134);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 153051743607308284L) != 0) || ((((_la - 67)) & ~0x3f) == 0 && ((1L << (_la - 67)) & 268179457L) != 0)) {
				{
				{
				setState(131);
				statement();
				}
				}
				setState(136);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(137);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class VersionContext extends ParserRuleContext {
		public TerminalNode OPENQASM() { return getToken(qasm3Parser.OPENQASM, 0); }
		public TerminalNode VersionSpecifier() { return getToken(qasm3Parser.VersionSpecifier, 0); }
		public TerminalNode SEMICOLON() { return getToken(qasm3Parser.SEMICOLON, 0); }
		public VersionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_version; }
	}

	public final VersionContext version() throws RecognitionException {
		VersionContext _localctx = new VersionContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_version);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(139);
			match(OPENQASM);
			setState(140);
			match(VersionSpecifier);
			setState(141);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StatementContext extends ParserRuleContext {
		public PragmaContext pragma() {
			return getRuleContext(PragmaContext.class,0);
		}
		public AliasDeclarationStatementContext aliasDeclarationStatement() {
			return getRuleContext(AliasDeclarationStatementContext.class,0);
		}
		public AssignmentStatementContext assignmentStatement() {
			return getRuleContext(AssignmentStatementContext.class,0);
		}
		public BarrierStatementContext barrierStatement() {
			return getRuleContext(BarrierStatementContext.class,0);
		}
		public BoxStatementContext boxStatement() {
			return getRuleContext(BoxStatementContext.class,0);
		}
		public BreakStatementContext breakStatement() {
			return getRuleContext(BreakStatementContext.class,0);
		}
		public CalStatementContext calStatement() {
			return getRuleContext(CalStatementContext.class,0);
		}
		public CalibrationGrammarStatementContext calibrationGrammarStatement() {
			return getRuleContext(CalibrationGrammarStatementContext.class,0);
		}
		public ClassicalDeclarationStatementContext classicalDeclarationStatement() {
			return getRuleContext(ClassicalDeclarationStatementContext.class,0);
		}
		public ConstDeclarationStatementContext constDeclarationStatement() {
			return getRuleContext(ConstDeclarationStatementContext.class,0);
		}
		public ContinueStatementContext continueStatement() {
			return getRuleContext(ContinueStatementContext.class,0);
		}
		public DefStatementContext defStatement() {
			return getRuleContext(DefStatementContext.class,0);
		}
		public DefcalStatementContext defcalStatement() {
			return getRuleContext(DefcalStatementContext.class,0);
		}
		public DelayStatementContext delayStatement() {
			return getRuleContext(DelayStatementContext.class,0);
		}
		public EndStatementContext endStatement() {
			return getRuleContext(EndStatementContext.class,0);
		}
		public ExpressionStatementContext expressionStatement() {
			return getRuleContext(ExpressionStatementContext.class,0);
		}
		public ExternStatementContext externStatement() {
			return getRuleContext(ExternStatementContext.class,0);
		}
		public ForStatementContext forStatement() {
			return getRuleContext(ForStatementContext.class,0);
		}
		public GateCallStatementContext gateCallStatement() {
			return getRuleContext(GateCallStatementContext.class,0);
		}
		public GateStatementContext gateStatement() {
			return getRuleContext(GateStatementContext.class,0);
		}
		public IfStatementContext ifStatement() {
			return getRuleContext(IfStatementContext.class,0);
		}
		public IncludeStatementContext includeStatement() {
			return getRuleContext(IncludeStatementContext.class,0);
		}
		public IoDeclarationStatementContext ioDeclarationStatement() {
			return getRuleContext(IoDeclarationStatementContext.class,0);
		}
		public MeasureArrowAssignmentStatementContext measureArrowAssignmentStatement() {
			return getRuleContext(MeasureArrowAssignmentStatementContext.class,0);
		}
		public OldStyleDeclarationStatementContext oldStyleDeclarationStatement() {
			return getRuleContext(OldStyleDeclarationStatementContext.class,0);
		}
		public QuantumDeclarationStatementContext quantumDeclarationStatement() {
			return getRuleContext(QuantumDeclarationStatementContext.class,0);
		}
		public ResetStatementContext resetStatement() {
			return getRuleContext(ResetStatementContext.class,0);
		}
		public ReturnStatementContext returnStatement() {
			return getRuleContext(ReturnStatementContext.class,0);
		}
		public WhileStatementContext whileStatement() {
			return getRuleContext(WhileStatementContext.class,0);
		}
		public List<AnnotationContext> annotation() {
			return getRuleContexts(AnnotationContext.class);
		}
		public AnnotationContext annotation(int i) {
			return getRuleContext(AnnotationContext.class,i);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_statement);
		int _la;
		try {
			setState(180);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case PRAGMA:
				enterOuterAlt(_localctx, 1);
				{
				setState(143);
				pragma();
				}
				break;
			case INCLUDE:
			case DEFCALGRAMMAR:
			case DEF:
			case CAL:
			case DEFCAL:
			case GATE:
			case EXTERN:
			case BOX:
			case LET:
			case BREAK:
			case CONTINUE:
			case IF:
			case END:
			case RETURN:
			case FOR:
			case WHILE:
			case AnnotationKeyword:
			case INPUT:
			case OUTPUT:
			case CONST:
			case QREG:
			case QUBIT:
			case CREG:
			case BOOL:
			case BIT:
			case INT:
			case UINT:
			case FLOAT:
			case ANGLE:
			case COMPLEX:
			case ARRAY:
			case DURATION:
			case STRETCH:
			case GPHASE:
			case INV:
			case POW:
			case CTRL:
			case NEGCTRL:
			case DURATIONOF:
			case DELAY:
			case RESET:
			case MEASURE:
			case BARRIER:
			case BooleanLiteral:
			case LPAREN:
			case MINUS:
			case TILDE:
			case EXCLAMATION_POINT:
			case ImaginaryLiteral:
			case BinaryIntegerLiteral:
			case OctalIntegerLiteral:
			case DecimalIntegerLiteral:
			case HexIntegerLiteral:
			case Identifier:
			case HardwareQubit:
			case FloatLiteral:
			case TimingLiteral:
			case BitstringLiteral:
				enterOuterAlt(_localctx, 2);
				{
				setState(147);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==AnnotationKeyword) {
					{
					{
					setState(144);
					annotation();
					}
					}
					setState(149);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(178);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
				case 1:
					{
					setState(150);
					aliasDeclarationStatement();
					}
					break;
				case 2:
					{
					setState(151);
					assignmentStatement();
					}
					break;
				case 3:
					{
					setState(152);
					barrierStatement();
					}
					break;
				case 4:
					{
					setState(153);
					boxStatement();
					}
					break;
				case 5:
					{
					setState(154);
					breakStatement();
					}
					break;
				case 6:
					{
					setState(155);
					calStatement();
					}
					break;
				case 7:
					{
					setState(156);
					calibrationGrammarStatement();
					}
					break;
				case 8:
					{
					setState(157);
					classicalDeclarationStatement();
					}
					break;
				case 9:
					{
					setState(158);
					constDeclarationStatement();
					}
					break;
				case 10:
					{
					setState(159);
					continueStatement();
					}
					break;
				case 11:
					{
					setState(160);
					defStatement();
					}
					break;
				case 12:
					{
					setState(161);
					defcalStatement();
					}
					break;
				case 13:
					{
					setState(162);
					delayStatement();
					}
					break;
				case 14:
					{
					setState(163);
					endStatement();
					}
					break;
				case 15:
					{
					setState(164);
					expressionStatement();
					}
					break;
				case 16:
					{
					setState(165);
					externStatement();
					}
					break;
				case 17:
					{
					setState(166);
					forStatement();
					}
					break;
				case 18:
					{
					setState(167);
					gateCallStatement();
					}
					break;
				case 19:
					{
					setState(168);
					gateStatement();
					}
					break;
				case 20:
					{
					setState(169);
					ifStatement();
					}
					break;
				case 21:
					{
					setState(170);
					includeStatement();
					}
					break;
				case 22:
					{
					setState(171);
					ioDeclarationStatement();
					}
					break;
				case 23:
					{
					setState(172);
					measureArrowAssignmentStatement();
					}
					break;
				case 24:
					{
					setState(173);
					oldStyleDeclarationStatement();
					}
					break;
				case 25:
					{
					setState(174);
					quantumDeclarationStatement();
					}
					break;
				case 26:
					{
					setState(175);
					resetStatement();
					}
					break;
				case 27:
					{
					setState(176);
					returnStatement();
					}
					break;
				case 28:
					{
					setState(177);
					whileStatement();
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AnnotationContext extends ParserRuleContext {
		public TerminalNode AnnotationKeyword() { return getToken(qasm3Parser.AnnotationKeyword, 0); }
		public TerminalNode RemainingLineContent() { return getToken(qasm3Parser.RemainingLineContent, 0); }
		public AnnotationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_annotation; }
	}

	public final AnnotationContext annotation() throws RecognitionException {
		AnnotationContext _localctx = new AnnotationContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_annotation);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(182);
			match(AnnotationKeyword);
			setState(184);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==RemainingLineContent) {
				{
				setState(183);
				match(RemainingLineContent);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ScopeContext extends ParserRuleContext {
		public TerminalNode LBRACE() { return getToken(qasm3Parser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(qasm3Parser.RBRACE, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public ScopeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_scope; }
	}

	public final ScopeContext scope() throws RecognitionException {
		ScopeContext _localctx = new ScopeContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_scope);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(186);
			match(LBRACE);
			setState(190);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 153051743607308284L) != 0) || ((((_la - 67)) & ~0x3f) == 0 && ((1L << (_la - 67)) & 268179457L) != 0)) {
				{
				{
				setState(187);
				statement();
				}
				}
				setState(192);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(193);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PragmaContext extends ParserRuleContext {
		public TerminalNode PRAGMA() { return getToken(qasm3Parser.PRAGMA, 0); }
		public TerminalNode RemainingLineContent() { return getToken(qasm3Parser.RemainingLineContent, 0); }
		public PragmaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pragma; }
	}

	public final PragmaContext pragma() throws RecognitionException {
		PragmaContext _localctx = new PragmaContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_pragma);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(195);
			match(PRAGMA);
			setState(196);
			match(RemainingLineContent);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StatementOrScopeContext extends ParserRuleContext {
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public ScopeContext scope() {
			return getRuleContext(ScopeContext.class,0);
		}
		public StatementOrScopeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statementOrScope; }
	}

	public final StatementOrScopeContext statementOrScope() throws RecognitionException {
		StatementOrScopeContext _localctx = new StatementOrScopeContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_statementOrScope);
		try {
			setState(200);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case INCLUDE:
			case DEFCALGRAMMAR:
			case DEF:
			case CAL:
			case DEFCAL:
			case GATE:
			case EXTERN:
			case BOX:
			case LET:
			case BREAK:
			case CONTINUE:
			case IF:
			case END:
			case RETURN:
			case FOR:
			case WHILE:
			case PRAGMA:
			case AnnotationKeyword:
			case INPUT:
			case OUTPUT:
			case CONST:
			case QREG:
			case QUBIT:
			case CREG:
			case BOOL:
			case BIT:
			case INT:
			case UINT:
			case FLOAT:
			case ANGLE:
			case COMPLEX:
			case ARRAY:
			case DURATION:
			case STRETCH:
			case GPHASE:
			case INV:
			case POW:
			case CTRL:
			case NEGCTRL:
			case DURATIONOF:
			case DELAY:
			case RESET:
			case MEASURE:
			case BARRIER:
			case BooleanLiteral:
			case LPAREN:
			case MINUS:
			case TILDE:
			case EXCLAMATION_POINT:
			case ImaginaryLiteral:
			case BinaryIntegerLiteral:
			case OctalIntegerLiteral:
			case DecimalIntegerLiteral:
			case HexIntegerLiteral:
			case Identifier:
			case HardwareQubit:
			case FloatLiteral:
			case TimingLiteral:
			case BitstringLiteral:
				enterOuterAlt(_localctx, 1);
				{
				setState(198);
				statement();
				}
				break;
			case LBRACE:
				enterOuterAlt(_localctx, 2);
				{
				setState(199);
				scope();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CalibrationGrammarStatementContext extends ParserRuleContext {
		public TerminalNode DEFCALGRAMMAR() { return getToken(qasm3Parser.DEFCALGRAMMAR, 0); }
		public TerminalNode StringLiteral() { return getToken(qasm3Parser.StringLiteral, 0); }
		public TerminalNode SEMICOLON() { return getToken(qasm3Parser.SEMICOLON, 0); }
		public CalibrationGrammarStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_calibrationGrammarStatement; }
	}

	public final CalibrationGrammarStatementContext calibrationGrammarStatement() throws RecognitionException {
		CalibrationGrammarStatementContext _localctx = new CalibrationGrammarStatementContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_calibrationGrammarStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(202);
			match(DEFCALGRAMMAR);
			setState(203);
			match(StringLiteral);
			setState(204);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class IncludeStatementContext extends ParserRuleContext {
		public TerminalNode INCLUDE() { return getToken(qasm3Parser.INCLUDE, 0); }
		public TerminalNode StringLiteral() { return getToken(qasm3Parser.StringLiteral, 0); }
		public TerminalNode SEMICOLON() { return getToken(qasm3Parser.SEMICOLON, 0); }
		public IncludeStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_includeStatement; }
	}

	public final IncludeStatementContext includeStatement() throws RecognitionException {
		IncludeStatementContext _localctx = new IncludeStatementContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_includeStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(206);
			match(INCLUDE);
			setState(207);
			match(StringLiteral);
			setState(208);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BreakStatementContext extends ParserRuleContext {
		public TerminalNode BREAK() { return getToken(qasm3Parser.BREAK, 0); }
		public TerminalNode SEMICOLON() { return getToken(qasm3Parser.SEMICOLON, 0); }
		public BreakStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_breakStatement; }
	}

	public final BreakStatementContext breakStatement() throws RecognitionException {
		BreakStatementContext _localctx = new BreakStatementContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_breakStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(210);
			match(BREAK);
			setState(211);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ContinueStatementContext extends ParserRuleContext {
		public TerminalNode CONTINUE() { return getToken(qasm3Parser.CONTINUE, 0); }
		public TerminalNode SEMICOLON() { return getToken(qasm3Parser.SEMICOLON, 0); }
		public ContinueStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_continueStatement; }
	}

	public final ContinueStatementContext continueStatement() throws RecognitionException {
		ContinueStatementContext _localctx = new ContinueStatementContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_continueStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(213);
			match(CONTINUE);
			setState(214);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class EndStatementContext extends ParserRuleContext {
		public TerminalNode END() { return getToken(qasm3Parser.END, 0); }
		public TerminalNode SEMICOLON() { return getToken(qasm3Parser.SEMICOLON, 0); }
		public EndStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_endStatement; }
	}

	public final EndStatementContext endStatement() throws RecognitionException {
		EndStatementContext _localctx = new EndStatementContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_endStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(216);
			match(END);
			setState(217);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ForStatementContext extends ParserRuleContext {
		public StatementOrScopeContext body;
		public TerminalNode FOR() { return getToken(qasm3Parser.FOR, 0); }
		public ScalarTypeContext scalarType() {
			return getRuleContext(ScalarTypeContext.class,0);
		}
		public TerminalNode Identifier() { return getToken(qasm3Parser.Identifier, 0); }
		public TerminalNode IN() { return getToken(qasm3Parser.IN, 0); }
		public StatementOrScopeContext statementOrScope() {
			return getRuleContext(StatementOrScopeContext.class,0);
		}
		public SetExpressionContext setExpression() {
			return getRuleContext(SetExpressionContext.class,0);
		}
		public TerminalNode LBRACKET() { return getToken(qasm3Parser.LBRACKET, 0); }
		public RangeExpressionContext rangeExpression() {
			return getRuleContext(RangeExpressionContext.class,0);
		}
		public TerminalNode RBRACKET() { return getToken(qasm3Parser.RBRACKET, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ForStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_forStatement; }
	}

	public final ForStatementContext forStatement() throws RecognitionException {
		ForStatementContext _localctx = new ForStatementContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_forStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(219);
			match(FOR);
			setState(220);
			scalarType();
			setState(221);
			match(Identifier);
			setState(222);
			match(IN);
			setState(229);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LBRACE:
				{
				setState(223);
				setExpression();
				}
				break;
			case LBRACKET:
				{
				setState(224);
				match(LBRACKET);
				setState(225);
				rangeExpression();
				setState(226);
				match(RBRACKET);
				}
				break;
			case BOOL:
			case BIT:
			case INT:
			case UINT:
			case FLOAT:
			case ANGLE:
			case COMPLEX:
			case ARRAY:
			case DURATION:
			case STRETCH:
			case DURATIONOF:
			case BooleanLiteral:
			case LPAREN:
			case MINUS:
			case TILDE:
			case EXCLAMATION_POINT:
			case ImaginaryLiteral:
			case BinaryIntegerLiteral:
			case OctalIntegerLiteral:
			case DecimalIntegerLiteral:
			case HexIntegerLiteral:
			case Identifier:
			case HardwareQubit:
			case FloatLiteral:
			case TimingLiteral:
			case BitstringLiteral:
				{
				setState(228);
				expression(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(231);
			((ForStatementContext)_localctx).body = statementOrScope();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class IfStatementContext extends ParserRuleContext {
		public StatementOrScopeContext if_body;
		public StatementOrScopeContext else_body;
		public TerminalNode IF() { return getToken(qasm3Parser.IF, 0); }
		public TerminalNode LPAREN() { return getToken(qasm3Parser.LPAREN, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(qasm3Parser.RPAREN, 0); }
		public List<StatementOrScopeContext> statementOrScope() {
			return getRuleContexts(StatementOrScopeContext.class);
		}
		public StatementOrScopeContext statementOrScope(int i) {
			return getRuleContext(StatementOrScopeContext.class,i);
		}
		public TerminalNode ELSE() { return getToken(qasm3Parser.ELSE, 0); }
		public IfStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifStatement; }
	}

	public final IfStatementContext ifStatement() throws RecognitionException {
		IfStatementContext _localctx = new IfStatementContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_ifStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(233);
			match(IF);
			setState(234);
			match(LPAREN);
			setState(235);
			expression(0);
			setState(236);
			match(RPAREN);
			setState(237);
			((IfStatementContext)_localctx).if_body = statementOrScope();
			setState(240);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
			case 1:
				{
				setState(238);
				match(ELSE);
				setState(239);
				((IfStatementContext)_localctx).else_body = statementOrScope();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ReturnStatementContext extends ParserRuleContext {
		public TerminalNode RETURN() { return getToken(qasm3Parser.RETURN, 0); }
		public TerminalNode SEMICOLON() { return getToken(qasm3Parser.SEMICOLON, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public MeasureExpressionContext measureExpression() {
			return getRuleContext(MeasureExpressionContext.class,0);
		}
		public ReturnStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_returnStatement; }
	}

	public final ReturnStatementContext returnStatement() throws RecognitionException {
		ReturnStatementContext _localctx = new ReturnStatementContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_returnStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(242);
			match(RETURN);
			setState(245);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case BOOL:
			case BIT:
			case INT:
			case UINT:
			case FLOAT:
			case ANGLE:
			case COMPLEX:
			case ARRAY:
			case DURATION:
			case STRETCH:
			case DURATIONOF:
			case BooleanLiteral:
			case LPAREN:
			case MINUS:
			case TILDE:
			case EXCLAMATION_POINT:
			case ImaginaryLiteral:
			case BinaryIntegerLiteral:
			case OctalIntegerLiteral:
			case DecimalIntegerLiteral:
			case HexIntegerLiteral:
			case Identifier:
			case HardwareQubit:
			case FloatLiteral:
			case TimingLiteral:
			case BitstringLiteral:
				{
				setState(243);
				expression(0);
				}
				break;
			case MEASURE:
				{
				setState(244);
				measureExpression();
				}
				break;
			case SEMICOLON:
				break;
			default:
				break;
			}
			setState(247);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class WhileStatementContext extends ParserRuleContext {
		public StatementOrScopeContext body;
		public TerminalNode WHILE() { return getToken(qasm3Parser.WHILE, 0); }
		public TerminalNode LPAREN() { return getToken(qasm3Parser.LPAREN, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(qasm3Parser.RPAREN, 0); }
		public StatementOrScopeContext statementOrScope() {
			return getRuleContext(StatementOrScopeContext.class,0);
		}
		public WhileStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_whileStatement; }
	}

	public final WhileStatementContext whileStatement() throws RecognitionException {
		WhileStatementContext _localctx = new WhileStatementContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_whileStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(249);
			match(WHILE);
			setState(250);
			match(LPAREN);
			setState(251);
			expression(0);
			setState(252);
			match(RPAREN);
			setState(253);
			((WhileStatementContext)_localctx).body = statementOrScope();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BarrierStatementContext extends ParserRuleContext {
		public TerminalNode BARRIER() { return getToken(qasm3Parser.BARRIER, 0); }
		public TerminalNode SEMICOLON() { return getToken(qasm3Parser.SEMICOLON, 0); }
		public GateOperandListContext gateOperandList() {
			return getRuleContext(GateOperandListContext.class,0);
		}
		public BarrierStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_barrierStatement; }
	}

	public final BarrierStatementContext barrierStatement() throws RecognitionException {
		BarrierStatementContext _localctx = new BarrierStatementContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_barrierStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(255);
			match(BARRIER);
			setState(257);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Identifier || _la==HardwareQubit) {
				{
				setState(256);
				gateOperandList();
				}
			}

			setState(259);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BoxStatementContext extends ParserRuleContext {
		public TerminalNode BOX() { return getToken(qasm3Parser.BOX, 0); }
		public ScopeContext scope() {
			return getRuleContext(ScopeContext.class,0);
		}
		public DesignatorContext designator() {
			return getRuleContext(DesignatorContext.class,0);
		}
		public BoxStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_boxStatement; }
	}

	public final BoxStatementContext boxStatement() throws RecognitionException {
		BoxStatementContext _localctx = new BoxStatementContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_boxStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(261);
			match(BOX);
			setState(263);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LBRACKET) {
				{
				setState(262);
				designator();
				}
			}

			setState(265);
			scope();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DelayStatementContext extends ParserRuleContext {
		public TerminalNode DELAY() { return getToken(qasm3Parser.DELAY, 0); }
		public DesignatorContext designator() {
			return getRuleContext(DesignatorContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(qasm3Parser.SEMICOLON, 0); }
		public GateOperandListContext gateOperandList() {
			return getRuleContext(GateOperandListContext.class,0);
		}
		public DelayStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_delayStatement; }
	}

	public final DelayStatementContext delayStatement() throws RecognitionException {
		DelayStatementContext _localctx = new DelayStatementContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_delayStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(267);
			match(DELAY);
			setState(268);
			designator();
			setState(270);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Identifier || _la==HardwareQubit) {
				{
				setState(269);
				gateOperandList();
				}
			}

			setState(272);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class GateCallStatementContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(qasm3Parser.Identifier, 0); }
		public GateOperandListContext gateOperandList() {
			return getRuleContext(GateOperandListContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(qasm3Parser.SEMICOLON, 0); }
		public List<GateModifierContext> gateModifier() {
			return getRuleContexts(GateModifierContext.class);
		}
		public GateModifierContext gateModifier(int i) {
			return getRuleContext(GateModifierContext.class,i);
		}
		public TerminalNode LPAREN() { return getToken(qasm3Parser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(qasm3Parser.RPAREN, 0); }
		public DesignatorContext designator() {
			return getRuleContext(DesignatorContext.class,0);
		}
		public ExpressionListContext expressionList() {
			return getRuleContext(ExpressionListContext.class,0);
		}
		public TerminalNode GPHASE() { return getToken(qasm3Parser.GPHASE, 0); }
		public GateCallStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_gateCallStatement; }
	}

	public final GateCallStatementContext gateCallStatement() throws RecognitionException {
		GateCallStatementContext _localctx = new GateCallStatementContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_gateCallStatement);
		int _la;
		try {
			setState(315);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,23,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(277);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 65970697666560L) != 0)) {
					{
					{
					setState(274);
					gateModifier();
					}
					}
					setState(279);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(280);
				match(Identifier);
				setState(286);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LPAREN) {
					{
					setState(281);
					match(LPAREN);
					setState(283);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 148761448263188480L) != 0) || ((((_la - 67)) & ~0x3f) == 0 && ((1L << (_la - 67)) & 268179457L) != 0)) {
						{
						setState(282);
						expressionList();
						}
					}

					setState(285);
					match(RPAREN);
					}
				}

				setState(289);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LBRACKET) {
					{
					setState(288);
					designator();
					}
				}

				setState(291);
				gateOperandList();
				setState(292);
				match(SEMICOLON);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(297);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 65970697666560L) != 0)) {
					{
					{
					setState(294);
					gateModifier();
					}
					}
					setState(299);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(300);
				match(GPHASE);
				setState(306);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LPAREN) {
					{
					setState(301);
					match(LPAREN);
					setState(303);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 148761448263188480L) != 0) || ((((_la - 67)) & ~0x3f) == 0 && ((1L << (_la - 67)) & 268179457L) != 0)) {
						{
						setState(302);
						expressionList();
						}
					}

					setState(305);
					match(RPAREN);
					}
				}

				setState(309);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LBRACKET) {
					{
					setState(308);
					designator();
					}
				}

				setState(312);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Identifier || _la==HardwareQubit) {
					{
					setState(311);
					gateOperandList();
					}
				}

				setState(314);
				match(SEMICOLON);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class MeasureArrowAssignmentStatementContext extends ParserRuleContext {
		public MeasureExpressionContext measureExpression() {
			return getRuleContext(MeasureExpressionContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(qasm3Parser.SEMICOLON, 0); }
		public TerminalNode ARROW() { return getToken(qasm3Parser.ARROW, 0); }
		public IndexedIdentifierContext indexedIdentifier() {
			return getRuleContext(IndexedIdentifierContext.class,0);
		}
		public MeasureArrowAssignmentStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_measureArrowAssignmentStatement; }
	}

	public final MeasureArrowAssignmentStatementContext measureArrowAssignmentStatement() throws RecognitionException {
		MeasureArrowAssignmentStatementContext _localctx = new MeasureArrowAssignmentStatementContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_measureArrowAssignmentStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(317);
			measureExpression();
			setState(320);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ARROW) {
				{
				setState(318);
				match(ARROW);
				setState(319);
				indexedIdentifier();
				}
			}

			setState(322);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ResetStatementContext extends ParserRuleContext {
		public TerminalNode RESET() { return getToken(qasm3Parser.RESET, 0); }
		public GateOperandContext gateOperand() {
			return getRuleContext(GateOperandContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(qasm3Parser.SEMICOLON, 0); }
		public ResetStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_resetStatement; }
	}

	public final ResetStatementContext resetStatement() throws RecognitionException {
		ResetStatementContext _localctx = new ResetStatementContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_resetStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(324);
			match(RESET);
			setState(325);
			gateOperand();
			setState(326);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AliasDeclarationStatementContext extends ParserRuleContext {
		public TerminalNode LET() { return getToken(qasm3Parser.LET, 0); }
		public TerminalNode Identifier() { return getToken(qasm3Parser.Identifier, 0); }
		public TerminalNode EQUALS() { return getToken(qasm3Parser.EQUALS, 0); }
		public AliasExpressionContext aliasExpression() {
			return getRuleContext(AliasExpressionContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(qasm3Parser.SEMICOLON, 0); }
		public AliasDeclarationStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_aliasDeclarationStatement; }
	}

	public final AliasDeclarationStatementContext aliasDeclarationStatement() throws RecognitionException {
		AliasDeclarationStatementContext _localctx = new AliasDeclarationStatementContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_aliasDeclarationStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(328);
			match(LET);
			setState(329);
			match(Identifier);
			setState(330);
			match(EQUALS);
			setState(331);
			aliasExpression();
			setState(332);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ClassicalDeclarationStatementContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(qasm3Parser.Identifier, 0); }
		public TerminalNode SEMICOLON() { return getToken(qasm3Parser.SEMICOLON, 0); }
		public ScalarTypeContext scalarType() {
			return getRuleContext(ScalarTypeContext.class,0);
		}
		public ArrayTypeContext arrayType() {
			return getRuleContext(ArrayTypeContext.class,0);
		}
		public TerminalNode EQUALS() { return getToken(qasm3Parser.EQUALS, 0); }
		public DeclarationExpressionContext declarationExpression() {
			return getRuleContext(DeclarationExpressionContext.class,0);
		}
		public ClassicalDeclarationStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classicalDeclarationStatement; }
	}

	public final ClassicalDeclarationStatementContext classicalDeclarationStatement() throws RecognitionException {
		ClassicalDeclarationStatementContext _localctx = new ClassicalDeclarationStatementContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_classicalDeclarationStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(336);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case BOOL:
			case BIT:
			case INT:
			case UINT:
			case FLOAT:
			case ANGLE:
			case COMPLEX:
			case DURATION:
			case STRETCH:
				{
				setState(334);
				scalarType();
				}
				break;
			case ARRAY:
				{
				setState(335);
				arrayType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(338);
			match(Identifier);
			setState(341);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==EQUALS) {
				{
				setState(339);
				match(EQUALS);
				setState(340);
				declarationExpression();
				}
			}

			setState(343);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ConstDeclarationStatementContext extends ParserRuleContext {
		public TerminalNode CONST() { return getToken(qasm3Parser.CONST, 0); }
		public ScalarTypeContext scalarType() {
			return getRuleContext(ScalarTypeContext.class,0);
		}
		public TerminalNode Identifier() { return getToken(qasm3Parser.Identifier, 0); }
		public TerminalNode EQUALS() { return getToken(qasm3Parser.EQUALS, 0); }
		public DeclarationExpressionContext declarationExpression() {
			return getRuleContext(DeclarationExpressionContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(qasm3Parser.SEMICOLON, 0); }
		public ConstDeclarationStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_constDeclarationStatement; }
	}

	public final ConstDeclarationStatementContext constDeclarationStatement() throws RecognitionException {
		ConstDeclarationStatementContext _localctx = new ConstDeclarationStatementContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_constDeclarationStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(345);
			match(CONST);
			setState(346);
			scalarType();
			setState(347);
			match(Identifier);
			setState(348);
			match(EQUALS);
			setState(349);
			declarationExpression();
			setState(350);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class IoDeclarationStatementContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(qasm3Parser.Identifier, 0); }
		public TerminalNode SEMICOLON() { return getToken(qasm3Parser.SEMICOLON, 0); }
		public TerminalNode INPUT() { return getToken(qasm3Parser.INPUT, 0); }
		public TerminalNode OUTPUT() { return getToken(qasm3Parser.OUTPUT, 0); }
		public ScalarTypeContext scalarType() {
			return getRuleContext(ScalarTypeContext.class,0);
		}
		public ArrayTypeContext arrayType() {
			return getRuleContext(ArrayTypeContext.class,0);
		}
		public IoDeclarationStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ioDeclarationStatement; }
	}

	public final IoDeclarationStatementContext ioDeclarationStatement() throws RecognitionException {
		IoDeclarationStatementContext _localctx = new IoDeclarationStatementContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_ioDeclarationStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(352);
			_la = _input.LA(1);
			if ( !(_la==INPUT || _la==OUTPUT) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(355);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case BOOL:
			case BIT:
			case INT:
			case UINT:
			case FLOAT:
			case ANGLE:
			case COMPLEX:
			case DURATION:
			case STRETCH:
				{
				setState(353);
				scalarType();
				}
				break;
			case ARRAY:
				{
				setState(354);
				arrayType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(357);
			match(Identifier);
			setState(358);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class OldStyleDeclarationStatementContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(qasm3Parser.Identifier, 0); }
		public TerminalNode SEMICOLON() { return getToken(qasm3Parser.SEMICOLON, 0); }
		public TerminalNode CREG() { return getToken(qasm3Parser.CREG, 0); }
		public TerminalNode QREG() { return getToken(qasm3Parser.QREG, 0); }
		public DesignatorContext designator() {
			return getRuleContext(DesignatorContext.class,0);
		}
		public OldStyleDeclarationStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_oldStyleDeclarationStatement; }
	}

	public final OldStyleDeclarationStatementContext oldStyleDeclarationStatement() throws RecognitionException {
		OldStyleDeclarationStatementContext _localctx = new OldStyleDeclarationStatementContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_oldStyleDeclarationStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(360);
			_la = _input.LA(1);
			if ( !(_la==QREG || _la==CREG) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(361);
			match(Identifier);
			setState(363);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LBRACKET) {
				{
				setState(362);
				designator();
				}
			}

			setState(365);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class QuantumDeclarationStatementContext extends ParserRuleContext {
		public QubitTypeContext qubitType() {
			return getRuleContext(QubitTypeContext.class,0);
		}
		public TerminalNode Identifier() { return getToken(qasm3Parser.Identifier, 0); }
		public TerminalNode SEMICOLON() { return getToken(qasm3Parser.SEMICOLON, 0); }
		public QuantumDeclarationStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_quantumDeclarationStatement; }
	}

	public final QuantumDeclarationStatementContext quantumDeclarationStatement() throws RecognitionException {
		QuantumDeclarationStatementContext _localctx = new QuantumDeclarationStatementContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_quantumDeclarationStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(367);
			qubitType();
			setState(368);
			match(Identifier);
			setState(369);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DefStatementContext extends ParserRuleContext {
		public TerminalNode DEF() { return getToken(qasm3Parser.DEF, 0); }
		public TerminalNode Identifier() { return getToken(qasm3Parser.Identifier, 0); }
		public TerminalNode LPAREN() { return getToken(qasm3Parser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(qasm3Parser.RPAREN, 0); }
		public ScopeContext scope() {
			return getRuleContext(ScopeContext.class,0);
		}
		public ArgumentDefinitionListContext argumentDefinitionList() {
			return getRuleContext(ArgumentDefinitionListContext.class,0);
		}
		public ReturnSignatureContext returnSignature() {
			return getRuleContext(ReturnSignatureContext.class,0);
		}
		public DefStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_defStatement; }
	}

	public final DefStatementContext defStatement() throws RecognitionException {
		DefStatementContext _localctx = new DefStatementContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_defStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(371);
			match(DEF);
			setState(372);
			match(Identifier);
			setState(373);
			match(LPAREN);
			setState(375);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1786672840704L) != 0)) {
				{
				setState(374);
				argumentDefinitionList();
				}
			}

			setState(377);
			match(RPAREN);
			setState(379);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ARROW) {
				{
				setState(378);
				returnSignature();
				}
			}

			setState(381);
			scope();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExternStatementContext extends ParserRuleContext {
		public TerminalNode EXTERN() { return getToken(qasm3Parser.EXTERN, 0); }
		public TerminalNode Identifier() { return getToken(qasm3Parser.Identifier, 0); }
		public TerminalNode LPAREN() { return getToken(qasm3Parser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(qasm3Parser.RPAREN, 0); }
		public TerminalNode SEMICOLON() { return getToken(qasm3Parser.SEMICOLON, 0); }
		public ExternArgumentListContext externArgumentList() {
			return getRuleContext(ExternArgumentListContext.class,0);
		}
		public ReturnSignatureContext returnSignature() {
			return getRuleContext(ReturnSignatureContext.class,0);
		}
		public ExternStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_externStatement; }
	}

	public final ExternStatementContext externStatement() throws RecognitionException {
		ExternStatementContext _localctx = new ExternStatementContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_externStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(383);
			match(EXTERN);
			setState(384);
			match(Identifier);
			setState(385);
			match(LPAREN);
			setState(387);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1786270187520L) != 0)) {
				{
				setState(386);
				externArgumentList();
				}
			}

			setState(389);
			match(RPAREN);
			setState(391);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ARROW) {
				{
				setState(390);
				returnSignature();
				}
			}

			setState(393);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class GateStatementContext extends ParserRuleContext {
		public IdentifierListContext params;
		public IdentifierListContext qubits;
		public TerminalNode GATE() { return getToken(qasm3Parser.GATE, 0); }
		public TerminalNode Identifier() { return getToken(qasm3Parser.Identifier, 0); }
		public ScopeContext scope() {
			return getRuleContext(ScopeContext.class,0);
		}
		public List<IdentifierListContext> identifierList() {
			return getRuleContexts(IdentifierListContext.class);
		}
		public IdentifierListContext identifierList(int i) {
			return getRuleContext(IdentifierListContext.class,i);
		}
		public TerminalNode LPAREN() { return getToken(qasm3Parser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(qasm3Parser.RPAREN, 0); }
		public GateStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_gateStatement; }
	}

	public final GateStatementContext gateStatement() throws RecognitionException {
		GateStatementContext _localctx = new GateStatementContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_gateStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(395);
			match(GATE);
			setState(396);
			match(Identifier);
			setState(402);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LPAREN) {
				{
				setState(397);
				match(LPAREN);
				setState(399);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Identifier) {
					{
					setState(398);
					((GateStatementContext)_localctx).params = identifierList();
					}
				}

				setState(401);
				match(RPAREN);
				}
			}

			setState(404);
			((GateStatementContext)_localctx).qubits = identifierList();
			setState(405);
			scope();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AssignmentStatementContext extends ParserRuleContext {
		public Token op;
		public IndexedIdentifierContext indexedIdentifier() {
			return getRuleContext(IndexedIdentifierContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(qasm3Parser.SEMICOLON, 0); }
		public TerminalNode EQUALS() { return getToken(qasm3Parser.EQUALS, 0); }
		public TerminalNode CompoundAssignmentOperator() { return getToken(qasm3Parser.CompoundAssignmentOperator, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public MeasureExpressionContext measureExpression() {
			return getRuleContext(MeasureExpressionContext.class,0);
		}
		public AssignmentStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignmentStatement; }
	}

	public final AssignmentStatementContext assignmentStatement() throws RecognitionException {
		AssignmentStatementContext _localctx = new AssignmentStatementContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_assignmentStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(407);
			indexedIdentifier();
			setState(408);
			((AssignmentStatementContext)_localctx).op = _input.LT(1);
			_la = _input.LA(1);
			if ( !(_la==EQUALS || _la==CompoundAssignmentOperator) ) {
				((AssignmentStatementContext)_localctx).op = (Token)_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(411);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case BOOL:
			case BIT:
			case INT:
			case UINT:
			case FLOAT:
			case ANGLE:
			case COMPLEX:
			case ARRAY:
			case DURATION:
			case STRETCH:
			case DURATIONOF:
			case BooleanLiteral:
			case LPAREN:
			case MINUS:
			case TILDE:
			case EXCLAMATION_POINT:
			case ImaginaryLiteral:
			case BinaryIntegerLiteral:
			case OctalIntegerLiteral:
			case DecimalIntegerLiteral:
			case HexIntegerLiteral:
			case Identifier:
			case HardwareQubit:
			case FloatLiteral:
			case TimingLiteral:
			case BitstringLiteral:
				{
				setState(409);
				expression(0);
				}
				break;
			case MEASURE:
				{
				setState(410);
				measureExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(413);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExpressionStatementContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(qasm3Parser.SEMICOLON, 0); }
		public ExpressionStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expressionStatement; }
	}

	public final ExpressionStatementContext expressionStatement() throws RecognitionException {
		ExpressionStatementContext _localctx = new ExpressionStatementContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_expressionStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(415);
			expression(0);
			setState(416);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CalStatementContext extends ParserRuleContext {
		public TerminalNode CAL() { return getToken(qasm3Parser.CAL, 0); }
		public TerminalNode LBRACE() { return getToken(qasm3Parser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(qasm3Parser.RBRACE, 0); }
		public TerminalNode CalibrationBlock() { return getToken(qasm3Parser.CalibrationBlock, 0); }
		public CalStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_calStatement; }
	}

	public final CalStatementContext calStatement() throws RecognitionException {
		CalStatementContext _localctx = new CalStatementContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_calStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(418);
			match(CAL);
			setState(419);
			match(LBRACE);
			setState(421);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CalibrationBlock) {
				{
				setState(420);
				match(CalibrationBlock);
				}
			}

			setState(423);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DefcalStatementContext extends ParserRuleContext {
		public TerminalNode DEFCAL() { return getToken(qasm3Parser.DEFCAL, 0); }
		public DefcalTargetContext defcalTarget() {
			return getRuleContext(DefcalTargetContext.class,0);
		}
		public DefcalOperandListContext defcalOperandList() {
			return getRuleContext(DefcalOperandListContext.class,0);
		}
		public TerminalNode LBRACE() { return getToken(qasm3Parser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(qasm3Parser.RBRACE, 0); }
		public TerminalNode LPAREN() { return getToken(qasm3Parser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(qasm3Parser.RPAREN, 0); }
		public ReturnSignatureContext returnSignature() {
			return getRuleContext(ReturnSignatureContext.class,0);
		}
		public TerminalNode CalibrationBlock() { return getToken(qasm3Parser.CalibrationBlock, 0); }
		public DefcalArgumentDefinitionListContext defcalArgumentDefinitionList() {
			return getRuleContext(DefcalArgumentDefinitionListContext.class,0);
		}
		public DefcalStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_defcalStatement; }
	}

	public final DefcalStatementContext defcalStatement() throws RecognitionException {
		DefcalStatementContext _localctx = new DefcalStatementContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_defcalStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(425);
			match(DEFCAL);
			setState(426);
			defcalTarget();
			setState(432);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LPAREN) {
				{
				setState(427);
				match(LPAREN);
				setState(429);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 148761449303375872L) != 0) || ((((_la - 67)) & ~0x3f) == 0 && ((1L << (_la - 67)) & 268179457L) != 0)) {
					{
					setState(428);
					defcalArgumentDefinitionList();
					}
				}

				setState(431);
				match(RPAREN);
				}
			}

			setState(434);
			defcalOperandList();
			setState(436);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ARROW) {
				{
				setState(435);
				returnSignature();
				}
			}

			setState(438);
			match(LBRACE);
			setState(440);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CalibrationBlock) {
				{
				setState(439);
				match(CalibrationBlock);
				}
			}

			setState(442);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExpressionContext extends ParserRuleContext {
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
	 
		public ExpressionContext() { }
		public void copyFrom(ExpressionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class BitwiseXorExpressionContext extends ExpressionContext {
		public Token op;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode CARET() { return getToken(qasm3Parser.CARET, 0); }
		public BitwiseXorExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class AdditiveExpressionContext extends ExpressionContext {
		public Token op;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode PLUS() { return getToken(qasm3Parser.PLUS, 0); }
		public TerminalNode MINUS() { return getToken(qasm3Parser.MINUS, 0); }
		public AdditiveExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class DurationofExpressionContext extends ExpressionContext {
		public TerminalNode DURATIONOF() { return getToken(qasm3Parser.DURATIONOF, 0); }
		public TerminalNode LPAREN() { return getToken(qasm3Parser.LPAREN, 0); }
		public ScopeContext scope() {
			return getRuleContext(ScopeContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(qasm3Parser.RPAREN, 0); }
		public DurationofExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ParenthesisExpressionContext extends ExpressionContext {
		public TerminalNode LPAREN() { return getToken(qasm3Parser.LPAREN, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(qasm3Parser.RPAREN, 0); }
		public ParenthesisExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ComparisonExpressionContext extends ExpressionContext {
		public Token op;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode ComparisonOperator() { return getToken(qasm3Parser.ComparisonOperator, 0); }
		public ComparisonExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class MultiplicativeExpressionContext extends ExpressionContext {
		public Token op;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode ASTERISK() { return getToken(qasm3Parser.ASTERISK, 0); }
		public TerminalNode SLASH() { return getToken(qasm3Parser.SLASH, 0); }
		public TerminalNode PERCENT() { return getToken(qasm3Parser.PERCENT, 0); }
		public MultiplicativeExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class LogicalOrExpressionContext extends ExpressionContext {
		public Token op;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode DOUBLE_PIPE() { return getToken(qasm3Parser.DOUBLE_PIPE, 0); }
		public LogicalOrExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class CastExpressionContext extends ExpressionContext {
		public TerminalNode LPAREN() { return getToken(qasm3Parser.LPAREN, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(qasm3Parser.RPAREN, 0); }
		public ScalarTypeContext scalarType() {
			return getRuleContext(ScalarTypeContext.class,0);
		}
		public ArrayTypeContext arrayType() {
			return getRuleContext(ArrayTypeContext.class,0);
		}
		public CastExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class PowerExpressionContext extends ExpressionContext {
		public Token op;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode DOUBLE_ASTERISK() { return getToken(qasm3Parser.DOUBLE_ASTERISK, 0); }
		public PowerExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class BitwiseOrExpressionContext extends ExpressionContext {
		public Token op;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode PIPE() { return getToken(qasm3Parser.PIPE, 0); }
		public BitwiseOrExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class CallExpressionContext extends ExpressionContext {
		public TerminalNode Identifier() { return getToken(qasm3Parser.Identifier, 0); }
		public TerminalNode LPAREN() { return getToken(qasm3Parser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(qasm3Parser.RPAREN, 0); }
		public ExpressionListContext expressionList() {
			return getRuleContext(ExpressionListContext.class,0);
		}
		public CallExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class BitshiftExpressionContext extends ExpressionContext {
		public Token op;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode BitshiftOperator() { return getToken(qasm3Parser.BitshiftOperator, 0); }
		public BitshiftExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class BitwiseAndExpressionContext extends ExpressionContext {
		public Token op;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode AMPERSAND() { return getToken(qasm3Parser.AMPERSAND, 0); }
		public BitwiseAndExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class EqualityExpressionContext extends ExpressionContext {
		public Token op;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode EqualityOperator() { return getToken(qasm3Parser.EqualityOperator, 0); }
		public EqualityExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class LogicalAndExpressionContext extends ExpressionContext {
		public Token op;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode DOUBLE_AMPERSAND() { return getToken(qasm3Parser.DOUBLE_AMPERSAND, 0); }
		public LogicalAndExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class IndexExpressionContext extends ExpressionContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public IndexOperatorContext indexOperator() {
			return getRuleContext(IndexOperatorContext.class,0);
		}
		public IndexExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class UnaryExpressionContext extends ExpressionContext {
		public Token op;
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode TILDE() { return getToken(qasm3Parser.TILDE, 0); }
		public TerminalNode EXCLAMATION_POINT() { return getToken(qasm3Parser.EXCLAMATION_POINT, 0); }
		public TerminalNode MINUS() { return getToken(qasm3Parser.MINUS, 0); }
		public UnaryExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class LiteralExpressionContext extends ExpressionContext {
		public TerminalNode Identifier() { return getToken(qasm3Parser.Identifier, 0); }
		public TerminalNode BinaryIntegerLiteral() { return getToken(qasm3Parser.BinaryIntegerLiteral, 0); }
		public TerminalNode OctalIntegerLiteral() { return getToken(qasm3Parser.OctalIntegerLiteral, 0); }
		public TerminalNode DecimalIntegerLiteral() { return getToken(qasm3Parser.DecimalIntegerLiteral, 0); }
		public TerminalNode HexIntegerLiteral() { return getToken(qasm3Parser.HexIntegerLiteral, 0); }
		public TerminalNode FloatLiteral() { return getToken(qasm3Parser.FloatLiteral, 0); }
		public TerminalNode ImaginaryLiteral() { return getToken(qasm3Parser.ImaginaryLiteral, 0); }
		public TerminalNode BooleanLiteral() { return getToken(qasm3Parser.BooleanLiteral, 0); }
		public TerminalNode BitstringLiteral() { return getToken(qasm3Parser.BitstringLiteral, 0); }
		public TerminalNode TimingLiteral() { return getToken(qasm3Parser.TimingLiteral, 0); }
		public TerminalNode HardwareQubit() { return getToken(qasm3Parser.HardwareQubit, 0); }
		public LiteralExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}

	public final ExpressionContext expression() throws RecognitionException {
		return expression(0);
	}

	private ExpressionContext expression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExpressionContext _localctx = new ExpressionContext(_ctx, _parentState);
		ExpressionContext _prevctx = _localctx;
		int _startState = 70;
		enterRecursionRule(_localctx, 70, RULE_expression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(471);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,43,_ctx) ) {
			case 1:
				{
				_localctx = new ParenthesisExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(445);
				match(LPAREN);
				setState(446);
				expression(0);
				setState(447);
				match(RPAREN);
				}
				break;
			case 2:
				{
				_localctx = new UnaryExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(449);
				((UnaryExpressionContext)_localctx).op = _input.LT(1);
				_la = _input.LA(1);
				if ( !(((((_la - 67)) & ~0x3f) == 0 && ((1L << (_la - 67)) & 6145L) != 0)) ) {
					((UnaryExpressionContext)_localctx).op = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(450);
				expression(15);
				}
				break;
			case 3:
				{
				_localctx = new CastExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(453);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case BOOL:
				case BIT:
				case INT:
				case UINT:
				case FLOAT:
				case ANGLE:
				case COMPLEX:
				case DURATION:
				case STRETCH:
					{
					setState(451);
					scalarType();
					}
					break;
				case ARRAY:
					{
					setState(452);
					arrayType();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(455);
				match(LPAREN);
				setState(456);
				expression(0);
				setState(457);
				match(RPAREN);
				}
				break;
			case 4:
				{
				_localctx = new DurationofExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(459);
				match(DURATIONOF);
				setState(460);
				match(LPAREN);
				setState(461);
				scope();
				setState(462);
				match(RPAREN);
				}
				break;
			case 5:
				{
				_localctx = new CallExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(464);
				match(Identifier);
				setState(465);
				match(LPAREN);
				setState(467);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 148761448263188480L) != 0) || ((((_la - 67)) & ~0x3f) == 0 && ((1L << (_la - 67)) & 268179457L) != 0)) {
					{
					setState(466);
					expressionList();
					}
				}

				setState(469);
				match(RPAREN);
				}
				break;
			case 6:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(470);
				_la = _input.LA(1);
				if ( !(((((_la - 52)) & ~0x3f) == 0 && ((1L << (_la - 52)) & 8787503087617L) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(510);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,45,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(508);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,44,_ctx) ) {
					case 1:
						{
						_localctx = new PowerExpressionContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(473);
						if (!(precpred(_ctx, 16))) throw new FailedPredicateException(this, "precpred(_ctx, 16)");
						setState(474);
						((PowerExpressionContext)_localctx).op = match(DOUBLE_ASTERISK);
						setState(475);
						expression(16);
						}
						break;
					case 2:
						{
						_localctx = new MultiplicativeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(476);
						if (!(precpred(_ctx, 14))) throw new FailedPredicateException(this, "precpred(_ctx, 14)");
						setState(477);
						((MultiplicativeExpressionContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !(((((_la - 68)) & ~0x3f) == 0 && ((1L << (_la - 68)) & 13L) != 0)) ) {
							((MultiplicativeExpressionContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(478);
						expression(15);
						}
						break;
					case 3:
						{
						_localctx = new AdditiveExpressionContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(479);
						if (!(precpred(_ctx, 13))) throw new FailedPredicateException(this, "precpred(_ctx, 13)");
						setState(480);
						((AdditiveExpressionContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==PLUS || _la==MINUS) ) {
							((AdditiveExpressionContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(481);
						expression(14);
						}
						break;
					case 4:
						{
						_localctx = new BitshiftExpressionContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(482);
						if (!(precpred(_ctx, 12))) throw new FailedPredicateException(this, "precpred(_ctx, 12)");
						setState(483);
						((BitshiftExpressionContext)_localctx).op = match(BitshiftOperator);
						setState(484);
						expression(13);
						}
						break;
					case 5:
						{
						_localctx = new ComparisonExpressionContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(485);
						if (!(precpred(_ctx, 11))) throw new FailedPredicateException(this, "precpred(_ctx, 11)");
						setState(486);
						((ComparisonExpressionContext)_localctx).op = match(ComparisonOperator);
						setState(487);
						expression(12);
						}
						break;
					case 6:
						{
						_localctx = new EqualityExpressionContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(488);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						setState(489);
						((EqualityExpressionContext)_localctx).op = match(EqualityOperator);
						setState(490);
						expression(11);
						}
						break;
					case 7:
						{
						_localctx = new BitwiseAndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(491);
						if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
						setState(492);
						((BitwiseAndExpressionContext)_localctx).op = match(AMPERSAND);
						setState(493);
						expression(10);
						}
						break;
					case 8:
						{
						_localctx = new BitwiseXorExpressionContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(494);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(495);
						((BitwiseXorExpressionContext)_localctx).op = match(CARET);
						setState(496);
						expression(9);
						}
						break;
					case 9:
						{
						_localctx = new BitwiseOrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(497);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(498);
						((BitwiseOrExpressionContext)_localctx).op = match(PIPE);
						setState(499);
						expression(8);
						}
						break;
					case 10:
						{
						_localctx = new LogicalAndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(500);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(501);
						((LogicalAndExpressionContext)_localctx).op = match(DOUBLE_AMPERSAND);
						setState(502);
						expression(7);
						}
						break;
					case 11:
						{
						_localctx = new LogicalOrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(503);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(504);
						((LogicalOrExpressionContext)_localctx).op = match(DOUBLE_PIPE);
						setState(505);
						expression(6);
						}
						break;
					case 12:
						{
						_localctx = new IndexExpressionContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(506);
						if (!(precpred(_ctx, 17))) throw new FailedPredicateException(this, "precpred(_ctx, 17)");
						setState(507);
						indexOperator();
						}
						break;
					}
					} 
				}
				setState(512);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,45,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AliasExpressionContext extends ParserRuleContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public List<TerminalNode> DOUBLE_PLUS() { return getTokens(qasm3Parser.DOUBLE_PLUS); }
		public TerminalNode DOUBLE_PLUS(int i) {
			return getToken(qasm3Parser.DOUBLE_PLUS, i);
		}
		public AliasExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_aliasExpression; }
	}

	public final AliasExpressionContext aliasExpression() throws RecognitionException {
		AliasExpressionContext _localctx = new AliasExpressionContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_aliasExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(513);
			expression(0);
			setState(518);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==DOUBLE_PLUS) {
				{
				{
				setState(514);
				match(DOUBLE_PLUS);
				setState(515);
				expression(0);
				}
				}
				setState(520);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DeclarationExpressionContext extends ParserRuleContext {
		public ArrayLiteralContext arrayLiteral() {
			return getRuleContext(ArrayLiteralContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public MeasureExpressionContext measureExpression() {
			return getRuleContext(MeasureExpressionContext.class,0);
		}
		public DeclarationExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declarationExpression; }
	}

	public final DeclarationExpressionContext declarationExpression() throws RecognitionException {
		DeclarationExpressionContext _localctx = new DeclarationExpressionContext(_ctx, getState());
		enterRule(_localctx, 74, RULE_declarationExpression);
		try {
			setState(524);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LBRACE:
				enterOuterAlt(_localctx, 1);
				{
				setState(521);
				arrayLiteral();
				}
				break;
			case BOOL:
			case BIT:
			case INT:
			case UINT:
			case FLOAT:
			case ANGLE:
			case COMPLEX:
			case ARRAY:
			case DURATION:
			case STRETCH:
			case DURATIONOF:
			case BooleanLiteral:
			case LPAREN:
			case MINUS:
			case TILDE:
			case EXCLAMATION_POINT:
			case ImaginaryLiteral:
			case BinaryIntegerLiteral:
			case OctalIntegerLiteral:
			case DecimalIntegerLiteral:
			case HexIntegerLiteral:
			case Identifier:
			case HardwareQubit:
			case FloatLiteral:
			case TimingLiteral:
			case BitstringLiteral:
				enterOuterAlt(_localctx, 2);
				{
				setState(522);
				expression(0);
				}
				break;
			case MEASURE:
				enterOuterAlt(_localctx, 3);
				{
				setState(523);
				measureExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class MeasureExpressionContext extends ParserRuleContext {
		public TerminalNode MEASURE() { return getToken(qasm3Parser.MEASURE, 0); }
		public GateOperandContext gateOperand() {
			return getRuleContext(GateOperandContext.class,0);
		}
		public MeasureExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_measureExpression; }
	}

	public final MeasureExpressionContext measureExpression() throws RecognitionException {
		MeasureExpressionContext _localctx = new MeasureExpressionContext(_ctx, getState());
		enterRule(_localctx, 76, RULE_measureExpression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(526);
			match(MEASURE);
			setState(527);
			gateOperand();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class RangeExpressionContext extends ParserRuleContext {
		public List<TerminalNode> COLON() { return getTokens(qasm3Parser.COLON); }
		public TerminalNode COLON(int i) {
			return getToken(qasm3Parser.COLON, i);
		}
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public RangeExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_rangeExpression; }
	}

	public final RangeExpressionContext rangeExpression() throws RecognitionException {
		RangeExpressionContext _localctx = new RangeExpressionContext(_ctx, getState());
		enterRule(_localctx, 78, RULE_rangeExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(530);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 148761448263188480L) != 0) || ((((_la - 67)) & ~0x3f) == 0 && ((1L << (_la - 67)) & 268179457L) != 0)) {
				{
				setState(529);
				expression(0);
				}
			}

			setState(532);
			match(COLON);
			setState(534);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 148761448263188480L) != 0) || ((((_la - 67)) & ~0x3f) == 0 && ((1L << (_la - 67)) & 268179457L) != 0)) {
				{
				setState(533);
				expression(0);
				}
			}

			setState(538);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COLON) {
				{
				setState(536);
				match(COLON);
				setState(537);
				expression(0);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class SetExpressionContext extends ParserRuleContext {
		public TerminalNode LBRACE() { return getToken(qasm3Parser.LBRACE, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode RBRACE() { return getToken(qasm3Parser.RBRACE, 0); }
		public List<TerminalNode> COMMA() { return getTokens(qasm3Parser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(qasm3Parser.COMMA, i);
		}
		public SetExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_setExpression; }
	}

	public final SetExpressionContext setExpression() throws RecognitionException {
		SetExpressionContext _localctx = new SetExpressionContext(_ctx, getState());
		enterRule(_localctx, 80, RULE_setExpression);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(540);
			match(LBRACE);
			setState(541);
			expression(0);
			setState(546);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,51,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(542);
					match(COMMA);
					setState(543);
					expression(0);
					}
					} 
				}
				setState(548);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,51,_ctx);
			}
			setState(550);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COMMA) {
				{
				setState(549);
				match(COMMA);
				}
			}

			setState(552);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ArrayLiteralContext extends ParserRuleContext {
		public TerminalNode LBRACE() { return getToken(qasm3Parser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(qasm3Parser.RBRACE, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public List<ArrayLiteralContext> arrayLiteral() {
			return getRuleContexts(ArrayLiteralContext.class);
		}
		public ArrayLiteralContext arrayLiteral(int i) {
			return getRuleContext(ArrayLiteralContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(qasm3Parser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(qasm3Parser.COMMA, i);
		}
		public ArrayLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arrayLiteral; }
	}

	public final ArrayLiteralContext arrayLiteral() throws RecognitionException {
		ArrayLiteralContext _localctx = new ArrayLiteralContext(_ctx, getState());
		enterRule(_localctx, 82, RULE_arrayLiteral);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(554);
			match(LBRACE);
			setState(557);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case BOOL:
			case BIT:
			case INT:
			case UINT:
			case FLOAT:
			case ANGLE:
			case COMPLEX:
			case ARRAY:
			case DURATION:
			case STRETCH:
			case DURATIONOF:
			case BooleanLiteral:
			case LPAREN:
			case MINUS:
			case TILDE:
			case EXCLAMATION_POINT:
			case ImaginaryLiteral:
			case BinaryIntegerLiteral:
			case OctalIntegerLiteral:
			case DecimalIntegerLiteral:
			case HexIntegerLiteral:
			case Identifier:
			case HardwareQubit:
			case FloatLiteral:
			case TimingLiteral:
			case BitstringLiteral:
				{
				setState(555);
				expression(0);
				}
				break;
			case LBRACE:
				{
				setState(556);
				arrayLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(566);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,55,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(559);
					match(COMMA);
					setState(562);
					_errHandler.sync(this);
					switch (_input.LA(1)) {
					case BOOL:
					case BIT:
					case INT:
					case UINT:
					case FLOAT:
					case ANGLE:
					case COMPLEX:
					case ARRAY:
					case DURATION:
					case STRETCH:
					case DURATIONOF:
					case BooleanLiteral:
					case LPAREN:
					case MINUS:
					case TILDE:
					case EXCLAMATION_POINT:
					case ImaginaryLiteral:
					case BinaryIntegerLiteral:
					case OctalIntegerLiteral:
					case DecimalIntegerLiteral:
					case HexIntegerLiteral:
					case Identifier:
					case HardwareQubit:
					case FloatLiteral:
					case TimingLiteral:
					case BitstringLiteral:
						{
						setState(560);
						expression(0);
						}
						break;
					case LBRACE:
						{
						setState(561);
						arrayLiteral();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					} 
				}
				setState(568);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,55,_ctx);
			}
			setState(570);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COMMA) {
				{
				setState(569);
				match(COMMA);
				}
			}

			setState(572);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class IndexOperatorContext extends ParserRuleContext {
		public TerminalNode LBRACKET() { return getToken(qasm3Parser.LBRACKET, 0); }
		public TerminalNode RBRACKET() { return getToken(qasm3Parser.RBRACKET, 0); }
		public SetExpressionContext setExpression() {
			return getRuleContext(SetExpressionContext.class,0);
		}
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public List<RangeExpressionContext> rangeExpression() {
			return getRuleContexts(RangeExpressionContext.class);
		}
		public RangeExpressionContext rangeExpression(int i) {
			return getRuleContext(RangeExpressionContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(qasm3Parser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(qasm3Parser.COMMA, i);
		}
		public IndexOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_indexOperator; }
	}

	public final IndexOperatorContext indexOperator() throws RecognitionException {
		IndexOperatorContext _localctx = new IndexOperatorContext(_ctx, getState());
		enterRule(_localctx, 84, RULE_indexOperator);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(574);
			match(LBRACKET);
			setState(593);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LBRACE:
				{
				setState(575);
				setExpression();
				}
				break;
			case BOOL:
			case BIT:
			case INT:
			case UINT:
			case FLOAT:
			case ANGLE:
			case COMPLEX:
			case ARRAY:
			case DURATION:
			case STRETCH:
			case DURATIONOF:
			case BooleanLiteral:
			case LPAREN:
			case COLON:
			case MINUS:
			case TILDE:
			case EXCLAMATION_POINT:
			case ImaginaryLiteral:
			case BinaryIntegerLiteral:
			case OctalIntegerLiteral:
			case DecimalIntegerLiteral:
			case HexIntegerLiteral:
			case Identifier:
			case HardwareQubit:
			case FloatLiteral:
			case TimingLiteral:
			case BitstringLiteral:
				{
				setState(578);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,57,_ctx) ) {
				case 1:
					{
					setState(576);
					expression(0);
					}
					break;
				case 2:
					{
					setState(577);
					rangeExpression();
					}
					break;
				}
				setState(587);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,59,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(580);
						match(COMMA);
						setState(583);
						_errHandler.sync(this);
						switch ( getInterpreter().adaptivePredict(_input,58,_ctx) ) {
						case 1:
							{
							setState(581);
							expression(0);
							}
							break;
						case 2:
							{
							setState(582);
							rangeExpression();
							}
							break;
						}
						}
						} 
					}
					setState(589);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,59,_ctx);
				}
				setState(591);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==COMMA) {
					{
					setState(590);
					match(COMMA);
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(595);
			match(RBRACKET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class IndexedIdentifierContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(qasm3Parser.Identifier, 0); }
		public List<IndexOperatorContext> indexOperator() {
			return getRuleContexts(IndexOperatorContext.class);
		}
		public IndexOperatorContext indexOperator(int i) {
			return getRuleContext(IndexOperatorContext.class,i);
		}
		public IndexedIdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_indexedIdentifier; }
	}

	public final IndexedIdentifierContext indexedIdentifier() throws RecognitionException {
		IndexedIdentifierContext _localctx = new IndexedIdentifierContext(_ctx, getState());
		enterRule(_localctx, 86, RULE_indexedIdentifier);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(597);
			match(Identifier);
			setState(601);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==LBRACKET) {
				{
				{
				setState(598);
				indexOperator();
				}
				}
				setState(603);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ReturnSignatureContext extends ParserRuleContext {
		public TerminalNode ARROW() { return getToken(qasm3Parser.ARROW, 0); }
		public ScalarTypeContext scalarType() {
			return getRuleContext(ScalarTypeContext.class,0);
		}
		public ReturnSignatureContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_returnSignature; }
	}

	public final ReturnSignatureContext returnSignature() throws RecognitionException {
		ReturnSignatureContext _localctx = new ReturnSignatureContext(_ctx, getState());
		enterRule(_localctx, 88, RULE_returnSignature);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(604);
			match(ARROW);
			setState(605);
			scalarType();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class GateModifierContext extends ParserRuleContext {
		public TerminalNode AT() { return getToken(qasm3Parser.AT, 0); }
		public TerminalNode INV() { return getToken(qasm3Parser.INV, 0); }
		public TerminalNode POW() { return getToken(qasm3Parser.POW, 0); }
		public TerminalNode LPAREN() { return getToken(qasm3Parser.LPAREN, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(qasm3Parser.RPAREN, 0); }
		public TerminalNode CTRL() { return getToken(qasm3Parser.CTRL, 0); }
		public TerminalNode NEGCTRL() { return getToken(qasm3Parser.NEGCTRL, 0); }
		public GateModifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_gateModifier; }
	}

	public final GateModifierContext gateModifier() throws RecognitionException {
		GateModifierContext _localctx = new GateModifierContext(_ctx, getState());
		enterRule(_localctx, 90, RULE_gateModifier);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(620);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case INV:
				{
				setState(607);
				match(INV);
				}
				break;
			case POW:
				{
				setState(608);
				match(POW);
				setState(609);
				match(LPAREN);
				setState(610);
				expression(0);
				setState(611);
				match(RPAREN);
				}
				break;
			case CTRL:
			case NEGCTRL:
				{
				setState(613);
				_la = _input.LA(1);
				if ( !(_la==CTRL || _la==NEGCTRL) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(618);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LPAREN) {
					{
					setState(614);
					match(LPAREN);
					setState(615);
					expression(0);
					setState(616);
					match(RPAREN);
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(622);
			match(AT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ScalarTypeContext extends ParserRuleContext {
		public TerminalNode BIT() { return getToken(qasm3Parser.BIT, 0); }
		public DesignatorContext designator() {
			return getRuleContext(DesignatorContext.class,0);
		}
		public TerminalNode INT() { return getToken(qasm3Parser.INT, 0); }
		public TerminalNode UINT() { return getToken(qasm3Parser.UINT, 0); }
		public TerminalNode FLOAT() { return getToken(qasm3Parser.FLOAT, 0); }
		public TerminalNode ANGLE() { return getToken(qasm3Parser.ANGLE, 0); }
		public TerminalNode BOOL() { return getToken(qasm3Parser.BOOL, 0); }
		public TerminalNode DURATION() { return getToken(qasm3Parser.DURATION, 0); }
		public TerminalNode STRETCH() { return getToken(qasm3Parser.STRETCH, 0); }
		public TerminalNode COMPLEX() { return getToken(qasm3Parser.COMPLEX, 0); }
		public TerminalNode LBRACKET() { return getToken(qasm3Parser.LBRACKET, 0); }
		public ScalarTypeContext scalarType() {
			return getRuleContext(ScalarTypeContext.class,0);
		}
		public TerminalNode RBRACKET() { return getToken(qasm3Parser.RBRACKET, 0); }
		public ScalarTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_scalarType; }
	}

	public final ScalarTypeContext scalarType() throws RecognitionException {
		ScalarTypeContext _localctx = new ScalarTypeContext(_ctx, getState());
		enterRule(_localctx, 92, RULE_scalarType);
		int _la;
		try {
			setState(654);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case BIT:
				enterOuterAlt(_localctx, 1);
				{
				setState(624);
				match(BIT);
				setState(626);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LBRACKET) {
					{
					setState(625);
					designator();
					}
				}

				}
				break;
			case INT:
				enterOuterAlt(_localctx, 2);
				{
				setState(628);
				match(INT);
				setState(630);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LBRACKET) {
					{
					setState(629);
					designator();
					}
				}

				}
				break;
			case UINT:
				enterOuterAlt(_localctx, 3);
				{
				setState(632);
				match(UINT);
				setState(634);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LBRACKET) {
					{
					setState(633);
					designator();
					}
				}

				}
				break;
			case FLOAT:
				enterOuterAlt(_localctx, 4);
				{
				setState(636);
				match(FLOAT);
				setState(638);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LBRACKET) {
					{
					setState(637);
					designator();
					}
				}

				}
				break;
			case ANGLE:
				enterOuterAlt(_localctx, 5);
				{
				setState(640);
				match(ANGLE);
				setState(642);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LBRACKET) {
					{
					setState(641);
					designator();
					}
				}

				}
				break;
			case BOOL:
				enterOuterAlt(_localctx, 6);
				{
				setState(644);
				match(BOOL);
				}
				break;
			case DURATION:
				enterOuterAlt(_localctx, 7);
				{
				setState(645);
				match(DURATION);
				}
				break;
			case STRETCH:
				enterOuterAlt(_localctx, 8);
				{
				setState(646);
				match(STRETCH);
				}
				break;
			case COMPLEX:
				enterOuterAlt(_localctx, 9);
				{
				setState(647);
				match(COMPLEX);
				setState(652);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LBRACKET) {
					{
					setState(648);
					match(LBRACKET);
					setState(649);
					scalarType();
					setState(650);
					match(RBRACKET);
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class QubitTypeContext extends ParserRuleContext {
		public TerminalNode QUBIT() { return getToken(qasm3Parser.QUBIT, 0); }
		public DesignatorContext designator() {
			return getRuleContext(DesignatorContext.class,0);
		}
		public QubitTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_qubitType; }
	}

	public final QubitTypeContext qubitType() throws RecognitionException {
		QubitTypeContext _localctx = new QubitTypeContext(_ctx, getState());
		enterRule(_localctx, 94, RULE_qubitType);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(656);
			match(QUBIT);
			setState(658);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LBRACKET) {
				{
				setState(657);
				designator();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ArrayTypeContext extends ParserRuleContext {
		public TerminalNode ARRAY() { return getToken(qasm3Parser.ARRAY, 0); }
		public TerminalNode LBRACKET() { return getToken(qasm3Parser.LBRACKET, 0); }
		public ScalarTypeContext scalarType() {
			return getRuleContext(ScalarTypeContext.class,0);
		}
		public TerminalNode COMMA() { return getToken(qasm3Parser.COMMA, 0); }
		public ExpressionListContext expressionList() {
			return getRuleContext(ExpressionListContext.class,0);
		}
		public TerminalNode RBRACKET() { return getToken(qasm3Parser.RBRACKET, 0); }
		public ArrayTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arrayType; }
	}

	public final ArrayTypeContext arrayType() throws RecognitionException {
		ArrayTypeContext _localctx = new ArrayTypeContext(_ctx, getState());
		enterRule(_localctx, 96, RULE_arrayType);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(660);
			match(ARRAY);
			setState(661);
			match(LBRACKET);
			setState(662);
			scalarType();
			setState(663);
			match(COMMA);
			setState(664);
			expressionList();
			setState(665);
			match(RBRACKET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ArrayReferenceTypeContext extends ParserRuleContext {
		public TerminalNode ARRAY() { return getToken(qasm3Parser.ARRAY, 0); }
		public TerminalNode LBRACKET() { return getToken(qasm3Parser.LBRACKET, 0); }
		public ScalarTypeContext scalarType() {
			return getRuleContext(ScalarTypeContext.class,0);
		}
		public TerminalNode COMMA() { return getToken(qasm3Parser.COMMA, 0); }
		public TerminalNode RBRACKET() { return getToken(qasm3Parser.RBRACKET, 0); }
		public TerminalNode READONLY() { return getToken(qasm3Parser.READONLY, 0); }
		public TerminalNode MUTABLE() { return getToken(qasm3Parser.MUTABLE, 0); }
		public ExpressionListContext expressionList() {
			return getRuleContext(ExpressionListContext.class,0);
		}
		public TerminalNode DIM() { return getToken(qasm3Parser.DIM, 0); }
		public TerminalNode EQUALS() { return getToken(qasm3Parser.EQUALS, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ArrayReferenceTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arrayReferenceType; }
	}

	public final ArrayReferenceTypeContext arrayReferenceType() throws RecognitionException {
		ArrayReferenceTypeContext _localctx = new ArrayReferenceTypeContext(_ctx, getState());
		enterRule(_localctx, 98, RULE_arrayReferenceType);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(667);
			_la = _input.LA(1);
			if ( !(_la==READONLY || _la==MUTABLE) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(668);
			match(ARRAY);
			setState(669);
			match(LBRACKET);
			setState(670);
			scalarType();
			setState(671);
			match(COMMA);
			setState(676);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case BOOL:
			case BIT:
			case INT:
			case UINT:
			case FLOAT:
			case ANGLE:
			case COMPLEX:
			case ARRAY:
			case DURATION:
			case STRETCH:
			case DURATIONOF:
			case BooleanLiteral:
			case LPAREN:
			case MINUS:
			case TILDE:
			case EXCLAMATION_POINT:
			case ImaginaryLiteral:
			case BinaryIntegerLiteral:
			case OctalIntegerLiteral:
			case DecimalIntegerLiteral:
			case HexIntegerLiteral:
			case Identifier:
			case HardwareQubit:
			case FloatLiteral:
			case TimingLiteral:
			case BitstringLiteral:
				{
				setState(672);
				expressionList();
				}
				break;
			case DIM:
				{
				setState(673);
				match(DIM);
				setState(674);
				match(EQUALS);
				setState(675);
				expression(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(678);
			match(RBRACKET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DesignatorContext extends ParserRuleContext {
		public TerminalNode LBRACKET() { return getToken(qasm3Parser.LBRACKET, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode RBRACKET() { return getToken(qasm3Parser.RBRACKET, 0); }
		public DesignatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_designator; }
	}

	public final DesignatorContext designator() throws RecognitionException {
		DesignatorContext _localctx = new DesignatorContext(_ctx, getState());
		enterRule(_localctx, 100, RULE_designator);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(680);
			match(LBRACKET);
			setState(681);
			expression(0);
			setState(682);
			match(RBRACKET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DefcalTargetContext extends ParserRuleContext {
		public TerminalNode MEASURE() { return getToken(qasm3Parser.MEASURE, 0); }
		public TerminalNode RESET() { return getToken(qasm3Parser.RESET, 0); }
		public TerminalNode DELAY() { return getToken(qasm3Parser.DELAY, 0); }
		public TerminalNode Identifier() { return getToken(qasm3Parser.Identifier, 0); }
		public DefcalTargetContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_defcalTarget; }
	}

	public final DefcalTargetContext defcalTarget() throws RecognitionException {
		DefcalTargetContext _localctx = new DefcalTargetContext(_ctx, getState());
		enterRule(_localctx, 102, RULE_defcalTarget);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(684);
			_la = _input.LA(1);
			if ( !(((((_la - 48)) & ~0x3f) == 0 && ((1L << (_la - 48)) & 4398046511111L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DefcalArgumentDefinitionContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ArgumentDefinitionContext argumentDefinition() {
			return getRuleContext(ArgumentDefinitionContext.class,0);
		}
		public DefcalArgumentDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_defcalArgumentDefinition; }
	}

	public final DefcalArgumentDefinitionContext defcalArgumentDefinition() throws RecognitionException {
		DefcalArgumentDefinitionContext _localctx = new DefcalArgumentDefinitionContext(_ctx, getState());
		enterRule(_localctx, 104, RULE_defcalArgumentDefinition);
		try {
			setState(688);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,74,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(686);
				expression(0);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(687);
				argumentDefinition();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DefcalOperandContext extends ParserRuleContext {
		public TerminalNode HardwareQubit() { return getToken(qasm3Parser.HardwareQubit, 0); }
		public TerminalNode Identifier() { return getToken(qasm3Parser.Identifier, 0); }
		public DefcalOperandContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_defcalOperand; }
	}

	public final DefcalOperandContext defcalOperand() throws RecognitionException {
		DefcalOperandContext _localctx = new DefcalOperandContext(_ctx, getState());
		enterRule(_localctx, 106, RULE_defcalOperand);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(690);
			_la = _input.LA(1);
			if ( !(_la==Identifier || _la==HardwareQubit) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class GateOperandContext extends ParserRuleContext {
		public IndexedIdentifierContext indexedIdentifier() {
			return getRuleContext(IndexedIdentifierContext.class,0);
		}
		public TerminalNode HardwareQubit() { return getToken(qasm3Parser.HardwareQubit, 0); }
		public GateOperandContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_gateOperand; }
	}

	public final GateOperandContext gateOperand() throws RecognitionException {
		GateOperandContext _localctx = new GateOperandContext(_ctx, getState());
		enterRule(_localctx, 108, RULE_gateOperand);
		try {
			setState(694);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Identifier:
				enterOuterAlt(_localctx, 1);
				{
				setState(692);
				indexedIdentifier();
				}
				break;
			case HardwareQubit:
				enterOuterAlt(_localctx, 2);
				{
				setState(693);
				match(HardwareQubit);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExternArgumentContext extends ParserRuleContext {
		public ScalarTypeContext scalarType() {
			return getRuleContext(ScalarTypeContext.class,0);
		}
		public ArrayReferenceTypeContext arrayReferenceType() {
			return getRuleContext(ArrayReferenceTypeContext.class,0);
		}
		public TerminalNode CREG() { return getToken(qasm3Parser.CREG, 0); }
		public DesignatorContext designator() {
			return getRuleContext(DesignatorContext.class,0);
		}
		public ExternArgumentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_externArgument; }
	}

	public final ExternArgumentContext externArgument() throws RecognitionException {
		ExternArgumentContext _localctx = new ExternArgumentContext(_ctx, getState());
		enterRule(_localctx, 110, RULE_externArgument);
		int _la;
		try {
			setState(702);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case BOOL:
			case BIT:
			case INT:
			case UINT:
			case FLOAT:
			case ANGLE:
			case COMPLEX:
			case DURATION:
			case STRETCH:
				enterOuterAlt(_localctx, 1);
				{
				setState(696);
				scalarType();
				}
				break;
			case READONLY:
			case MUTABLE:
				enterOuterAlt(_localctx, 2);
				{
				setState(697);
				arrayReferenceType();
				}
				break;
			case CREG:
				enterOuterAlt(_localctx, 3);
				{
				setState(698);
				match(CREG);
				setState(700);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LBRACKET) {
					{
					setState(699);
					designator();
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ArgumentDefinitionContext extends ParserRuleContext {
		public ScalarTypeContext scalarType() {
			return getRuleContext(ScalarTypeContext.class,0);
		}
		public TerminalNode Identifier() { return getToken(qasm3Parser.Identifier, 0); }
		public QubitTypeContext qubitType() {
			return getRuleContext(QubitTypeContext.class,0);
		}
		public TerminalNode CREG() { return getToken(qasm3Parser.CREG, 0); }
		public TerminalNode QREG() { return getToken(qasm3Parser.QREG, 0); }
		public DesignatorContext designator() {
			return getRuleContext(DesignatorContext.class,0);
		}
		public ArrayReferenceTypeContext arrayReferenceType() {
			return getRuleContext(ArrayReferenceTypeContext.class,0);
		}
		public ArgumentDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_argumentDefinition; }
	}

	public final ArgumentDefinitionContext argumentDefinition() throws RecognitionException {
		ArgumentDefinitionContext _localctx = new ArgumentDefinitionContext(_ctx, getState());
		enterRule(_localctx, 112, RULE_argumentDefinition);
		int _la;
		try {
			setState(718);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case BOOL:
			case BIT:
			case INT:
			case UINT:
			case FLOAT:
			case ANGLE:
			case COMPLEX:
			case DURATION:
			case STRETCH:
				enterOuterAlt(_localctx, 1);
				{
				setState(704);
				scalarType();
				setState(705);
				match(Identifier);
				}
				break;
			case QUBIT:
				enterOuterAlt(_localctx, 2);
				{
				setState(707);
				qubitType();
				setState(708);
				match(Identifier);
				}
				break;
			case QREG:
			case CREG:
				enterOuterAlt(_localctx, 3);
				{
				setState(710);
				_la = _input.LA(1);
				if ( !(_la==QREG || _la==CREG) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(711);
				match(Identifier);
				setState(713);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LBRACKET) {
					{
					setState(712);
					designator();
					}
				}

				}
				break;
			case READONLY:
			case MUTABLE:
				enterOuterAlt(_localctx, 4);
				{
				setState(715);
				arrayReferenceType();
				setState(716);
				match(Identifier);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ArgumentDefinitionListContext extends ParserRuleContext {
		public List<ArgumentDefinitionContext> argumentDefinition() {
			return getRuleContexts(ArgumentDefinitionContext.class);
		}
		public ArgumentDefinitionContext argumentDefinition(int i) {
			return getRuleContext(ArgumentDefinitionContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(qasm3Parser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(qasm3Parser.COMMA, i);
		}
		public ArgumentDefinitionListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_argumentDefinitionList; }
	}

	public final ArgumentDefinitionListContext argumentDefinitionList() throws RecognitionException {
		ArgumentDefinitionListContext _localctx = new ArgumentDefinitionListContext(_ctx, getState());
		enterRule(_localctx, 114, RULE_argumentDefinitionList);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(720);
			argumentDefinition();
			setState(725);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,80,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(721);
					match(COMMA);
					setState(722);
					argumentDefinition();
					}
					} 
				}
				setState(727);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,80,_ctx);
			}
			setState(729);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COMMA) {
				{
				setState(728);
				match(COMMA);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DefcalArgumentDefinitionListContext extends ParserRuleContext {
		public List<DefcalArgumentDefinitionContext> defcalArgumentDefinition() {
			return getRuleContexts(DefcalArgumentDefinitionContext.class);
		}
		public DefcalArgumentDefinitionContext defcalArgumentDefinition(int i) {
			return getRuleContext(DefcalArgumentDefinitionContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(qasm3Parser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(qasm3Parser.COMMA, i);
		}
		public DefcalArgumentDefinitionListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_defcalArgumentDefinitionList; }
	}

	public final DefcalArgumentDefinitionListContext defcalArgumentDefinitionList() throws RecognitionException {
		DefcalArgumentDefinitionListContext _localctx = new DefcalArgumentDefinitionListContext(_ctx, getState());
		enterRule(_localctx, 116, RULE_defcalArgumentDefinitionList);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(731);
			defcalArgumentDefinition();
			setState(736);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,82,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(732);
					match(COMMA);
					setState(733);
					defcalArgumentDefinition();
					}
					} 
				}
				setState(738);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,82,_ctx);
			}
			setState(740);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COMMA) {
				{
				setState(739);
				match(COMMA);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DefcalOperandListContext extends ParserRuleContext {
		public List<DefcalOperandContext> defcalOperand() {
			return getRuleContexts(DefcalOperandContext.class);
		}
		public DefcalOperandContext defcalOperand(int i) {
			return getRuleContext(DefcalOperandContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(qasm3Parser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(qasm3Parser.COMMA, i);
		}
		public DefcalOperandListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_defcalOperandList; }
	}

	public final DefcalOperandListContext defcalOperandList() throws RecognitionException {
		DefcalOperandListContext _localctx = new DefcalOperandListContext(_ctx, getState());
		enterRule(_localctx, 118, RULE_defcalOperandList);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(742);
			defcalOperand();
			setState(747);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,84,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(743);
					match(COMMA);
					setState(744);
					defcalOperand();
					}
					} 
				}
				setState(749);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,84,_ctx);
			}
			setState(751);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COMMA) {
				{
				setState(750);
				match(COMMA);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExpressionListContext extends ParserRuleContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(qasm3Parser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(qasm3Parser.COMMA, i);
		}
		public ExpressionListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expressionList; }
	}

	public final ExpressionListContext expressionList() throws RecognitionException {
		ExpressionListContext _localctx = new ExpressionListContext(_ctx, getState());
		enterRule(_localctx, 120, RULE_expressionList);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(753);
			expression(0);
			setState(758);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,86,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(754);
					match(COMMA);
					setState(755);
					expression(0);
					}
					} 
				}
				setState(760);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,86,_ctx);
			}
			setState(762);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COMMA) {
				{
				setState(761);
				match(COMMA);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class IdentifierListContext extends ParserRuleContext {
		public List<TerminalNode> Identifier() { return getTokens(qasm3Parser.Identifier); }
		public TerminalNode Identifier(int i) {
			return getToken(qasm3Parser.Identifier, i);
		}
		public List<TerminalNode> COMMA() { return getTokens(qasm3Parser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(qasm3Parser.COMMA, i);
		}
		public IdentifierListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifierList; }
	}

	public final IdentifierListContext identifierList() throws RecognitionException {
		IdentifierListContext _localctx = new IdentifierListContext(_ctx, getState());
		enterRule(_localctx, 122, RULE_identifierList);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(764);
			match(Identifier);
			setState(769);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,88,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(765);
					match(COMMA);
					setState(766);
					match(Identifier);
					}
					} 
				}
				setState(771);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,88,_ctx);
			}
			setState(773);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COMMA) {
				{
				setState(772);
				match(COMMA);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class GateOperandListContext extends ParserRuleContext {
		public List<GateOperandContext> gateOperand() {
			return getRuleContexts(GateOperandContext.class);
		}
		public GateOperandContext gateOperand(int i) {
			return getRuleContext(GateOperandContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(qasm3Parser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(qasm3Parser.COMMA, i);
		}
		public GateOperandListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_gateOperandList; }
	}

	public final GateOperandListContext gateOperandList() throws RecognitionException {
		GateOperandListContext _localctx = new GateOperandListContext(_ctx, getState());
		enterRule(_localctx, 124, RULE_gateOperandList);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(775);
			gateOperand();
			setState(780);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,90,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(776);
					match(COMMA);
					setState(777);
					gateOperand();
					}
					} 
				}
				setState(782);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,90,_ctx);
			}
			setState(784);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COMMA) {
				{
				setState(783);
				match(COMMA);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExternArgumentListContext extends ParserRuleContext {
		public List<ExternArgumentContext> externArgument() {
			return getRuleContexts(ExternArgumentContext.class);
		}
		public ExternArgumentContext externArgument(int i) {
			return getRuleContext(ExternArgumentContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(qasm3Parser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(qasm3Parser.COMMA, i);
		}
		public ExternArgumentListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_externArgumentList; }
	}

	public final ExternArgumentListContext externArgumentList() throws RecognitionException {
		ExternArgumentListContext _localctx = new ExternArgumentListContext(_ctx, getState());
		enterRule(_localctx, 126, RULE_externArgumentList);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(786);
			externArgument();
			setState(791);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,92,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(787);
					match(COMMA);
					setState(788);
					externArgument();
					}
					} 
				}
				setState(793);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,92,_ctx);
			}
			setState(795);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COMMA) {
				{
				setState(794);
				match(COMMA);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 35:
			return expression_sempred((ExpressionContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expression_sempred(ExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 16);
		case 1:
			return precpred(_ctx, 14);
		case 2:
			return precpred(_ctx, 13);
		case 3:
			return precpred(_ctx, 12);
		case 4:
			return precpred(_ctx, 11);
		case 5:
			return precpred(_ctx, 10);
		case 6:
			return precpred(_ctx, 9);
		case 7:
			return precpred(_ctx, 8);
		case 8:
			return precpred(_ctx, 7);
		case 9:
			return precpred(_ctx, 6);
		case 10:
			return precpred(_ctx, 5);
		case 11:
			return precpred(_ctx, 17);
		}
		return true;
	}

	public static final String _serializedATN =
		"\u0004\u0001n\u031e\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007\u000f"+
		"\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002\u0012\u0007\u0012"+
		"\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014\u0002\u0015\u0007\u0015"+
		"\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017\u0002\u0018\u0007\u0018"+
		"\u0002\u0019\u0007\u0019\u0002\u001a\u0007\u001a\u0002\u001b\u0007\u001b"+
		"\u0002\u001c\u0007\u001c\u0002\u001d\u0007\u001d\u0002\u001e\u0007\u001e"+
		"\u0002\u001f\u0007\u001f\u0002 \u0007 \u0002!\u0007!\u0002\"\u0007\"\u0002"+
		"#\u0007#\u0002$\u0007$\u0002%\u0007%\u0002&\u0007&\u0002\'\u0007\'\u0002"+
		"(\u0007(\u0002)\u0007)\u0002*\u0007*\u0002+\u0007+\u0002,\u0007,\u0002"+
		"-\u0007-\u0002.\u0007.\u0002/\u0007/\u00020\u00070\u00021\u00071\u0002"+
		"2\u00072\u00023\u00073\u00024\u00074\u00025\u00075\u00026\u00076\u0002"+
		"7\u00077\u00028\u00078\u00029\u00079\u0002:\u0007:\u0002;\u0007;\u0002"+
		"<\u0007<\u0002=\u0007=\u0002>\u0007>\u0002?\u0007?\u0001\u0000\u0003\u0000"+
		"\u0082\b\u0000\u0001\u0000\u0005\u0000\u0085\b\u0000\n\u0000\f\u0000\u0088"+
		"\t\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0002\u0001\u0002\u0005\u0002\u0092\b\u0002\n\u0002\f\u0002"+
		"\u0095\t\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0003\u0002"+
		"\u00b3\b\u0002\u0003\u0002\u00b5\b\u0002\u0001\u0003\u0001\u0003\u0003"+
		"\u0003\u00b9\b\u0003\u0001\u0004\u0001\u0004\u0005\u0004\u00bd\b\u0004"+
		"\n\u0004\f\u0004\u00c0\t\u0004\u0001\u0004\u0001\u0004\u0001\u0005\u0001"+
		"\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0003\u0006\u00c9\b\u0006\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001\b\u0001"+
		"\b\u0001\t\u0001\t\u0001\t\u0001\n\u0001\n\u0001\n\u0001\u000b\u0001\u000b"+
		"\u0001\u000b\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001"+
		"\f\u0001\f\u0001\f\u0003\f\u00e6\b\f\u0001\f\u0001\f\u0001\r\u0001\r\u0001"+
		"\r\u0001\r\u0001\r\u0001\r\u0001\r\u0003\r\u00f1\b\r\u0001\u000e\u0001"+
		"\u000e\u0001\u000e\u0003\u000e\u00f6\b\u000e\u0001\u000e\u0001\u000e\u0001"+
		"\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001"+
		"\u0010\u0001\u0010\u0003\u0010\u0102\b\u0010\u0001\u0010\u0001\u0010\u0001"+
		"\u0011\u0001\u0011\u0003\u0011\u0108\b\u0011\u0001\u0011\u0001\u0011\u0001"+
		"\u0012\u0001\u0012\u0001\u0012\u0003\u0012\u010f\b\u0012\u0001\u0012\u0001"+
		"\u0012\u0001\u0013\u0005\u0013\u0114\b\u0013\n\u0013\f\u0013\u0117\t\u0013"+
		"\u0001\u0013\u0001\u0013\u0001\u0013\u0003\u0013\u011c\b\u0013\u0001\u0013"+
		"\u0003\u0013\u011f\b\u0013\u0001\u0013\u0003\u0013\u0122\b\u0013\u0001"+
		"\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0005\u0013\u0128\b\u0013\n"+
		"\u0013\f\u0013\u012b\t\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0003"+
		"\u0013\u0130\b\u0013\u0001\u0013\u0003\u0013\u0133\b\u0013\u0001\u0013"+
		"\u0003\u0013\u0136\b\u0013\u0001\u0013\u0003\u0013\u0139\b\u0013\u0001"+
		"\u0013\u0003\u0013\u013c\b\u0013\u0001\u0014\u0001\u0014\u0001\u0014\u0003"+
		"\u0014\u0141\b\u0014\u0001\u0014\u0001\u0014\u0001\u0015\u0001\u0015\u0001"+
		"\u0015\u0001\u0015\u0001\u0016\u0001\u0016\u0001\u0016\u0001\u0016\u0001"+
		"\u0016\u0001\u0016\u0001\u0017\u0001\u0017\u0003\u0017\u0151\b\u0017\u0001"+
		"\u0017\u0001\u0017\u0001\u0017\u0003\u0017\u0156\b\u0017\u0001\u0017\u0001"+
		"\u0017\u0001\u0018\u0001\u0018\u0001\u0018\u0001\u0018\u0001\u0018\u0001"+
		"\u0018\u0001\u0018\u0001\u0019\u0001\u0019\u0001\u0019\u0003\u0019\u0164"+
		"\b\u0019\u0001\u0019\u0001\u0019\u0001\u0019\u0001\u001a\u0001\u001a\u0001"+
		"\u001a\u0003\u001a\u016c\b\u001a\u0001\u001a\u0001\u001a\u0001\u001b\u0001"+
		"\u001b\u0001\u001b\u0001\u001b\u0001\u001c\u0001\u001c\u0001\u001c\u0001"+
		"\u001c\u0003\u001c\u0178\b\u001c\u0001\u001c\u0001\u001c\u0003\u001c\u017c"+
		"\b\u001c\u0001\u001c\u0001\u001c\u0001\u001d\u0001\u001d\u0001\u001d\u0001"+
		"\u001d\u0003\u001d\u0184\b\u001d\u0001\u001d\u0001\u001d\u0003\u001d\u0188"+
		"\b\u001d\u0001\u001d\u0001\u001d\u0001\u001e\u0001\u001e\u0001\u001e\u0001"+
		"\u001e\u0003\u001e\u0190\b\u001e\u0001\u001e\u0003\u001e\u0193\b\u001e"+
		"\u0001\u001e\u0001\u001e\u0001\u001e\u0001\u001f\u0001\u001f\u0001\u001f"+
		"\u0001\u001f\u0003\u001f\u019c\b\u001f\u0001\u001f\u0001\u001f\u0001 "+
		"\u0001 \u0001 \u0001!\u0001!\u0001!\u0003!\u01a6\b!\u0001!\u0001!\u0001"+
		"\"\u0001\"\u0001\"\u0001\"\u0003\"\u01ae\b\"\u0001\"\u0003\"\u01b1\b\""+
		"\u0001\"\u0001\"\u0003\"\u01b5\b\"\u0001\"\u0001\"\u0003\"\u01b9\b\"\u0001"+
		"\"\u0001\"\u0001#\u0001#\u0001#\u0001#\u0001#\u0001#\u0001#\u0001#\u0001"+
		"#\u0003#\u01c6\b#\u0001#\u0001#\u0001#\u0001#\u0001#\u0001#\u0001#\u0001"+
		"#\u0001#\u0001#\u0001#\u0001#\u0003#\u01d4\b#\u0001#\u0001#\u0003#\u01d8"+
		"\b#\u0001#\u0001#\u0001#\u0001#\u0001#\u0001#\u0001#\u0001#\u0001#\u0001"+
		"#\u0001#\u0001#\u0001#\u0001#\u0001#\u0001#\u0001#\u0001#\u0001#\u0001"+
		"#\u0001#\u0001#\u0001#\u0001#\u0001#\u0001#\u0001#\u0001#\u0001#\u0001"+
		"#\u0001#\u0001#\u0001#\u0001#\u0001#\u0005#\u01fd\b#\n#\f#\u0200\t#\u0001"+
		"$\u0001$\u0001$\u0005$\u0205\b$\n$\f$\u0208\t$\u0001%\u0001%\u0001%\u0003"+
		"%\u020d\b%\u0001&\u0001&\u0001&\u0001\'\u0003\'\u0213\b\'\u0001\'\u0001"+
		"\'\u0003\'\u0217\b\'\u0001\'\u0001\'\u0003\'\u021b\b\'\u0001(\u0001(\u0001"+
		"(\u0001(\u0005(\u0221\b(\n(\f(\u0224\t(\u0001(\u0003(\u0227\b(\u0001("+
		"\u0001(\u0001)\u0001)\u0001)\u0003)\u022e\b)\u0001)\u0001)\u0001)\u0003"+
		")\u0233\b)\u0005)\u0235\b)\n)\f)\u0238\t)\u0001)\u0003)\u023b\b)\u0001"+
		")\u0001)\u0001*\u0001*\u0001*\u0001*\u0003*\u0243\b*\u0001*\u0001*\u0001"+
		"*\u0003*\u0248\b*\u0005*\u024a\b*\n*\f*\u024d\t*\u0001*\u0003*\u0250\b"+
		"*\u0003*\u0252\b*\u0001*\u0001*\u0001+\u0001+\u0005+\u0258\b+\n+\f+\u025b"+
		"\t+\u0001,\u0001,\u0001,\u0001-\u0001-\u0001-\u0001-\u0001-\u0001-\u0001"+
		"-\u0001-\u0001-\u0001-\u0001-\u0003-\u026b\b-\u0003-\u026d\b-\u0001-\u0001"+
		"-\u0001.\u0001.\u0003.\u0273\b.\u0001.\u0001.\u0003.\u0277\b.\u0001.\u0001"+
		".\u0003.\u027b\b.\u0001.\u0001.\u0003.\u027f\b.\u0001.\u0001.\u0003.\u0283"+
		"\b.\u0001.\u0001.\u0001.\u0001.\u0001.\u0001.\u0001.\u0001.\u0003.\u028d"+
		"\b.\u0003.\u028f\b.\u0001/\u0001/\u0003/\u0293\b/\u00010\u00010\u0001"+
		"0\u00010\u00010\u00010\u00010\u00011\u00011\u00011\u00011\u00011\u0001"+
		"1\u00011\u00011\u00011\u00031\u02a5\b1\u00011\u00011\u00012\u00012\u0001"+
		"2\u00012\u00013\u00013\u00014\u00014\u00034\u02b1\b4\u00015\u00015\u0001"+
		"6\u00016\u00036\u02b7\b6\u00017\u00017\u00017\u00017\u00037\u02bd\b7\u0003"+
		"7\u02bf\b7\u00018\u00018\u00018\u00018\u00018\u00018\u00018\u00018\u0001"+
		"8\u00038\u02ca\b8\u00018\u00018\u00018\u00038\u02cf\b8\u00019\u00019\u0001"+
		"9\u00059\u02d4\b9\n9\f9\u02d7\t9\u00019\u00039\u02da\b9\u0001:\u0001:"+
		"\u0001:\u0005:\u02df\b:\n:\f:\u02e2\t:\u0001:\u0003:\u02e5\b:\u0001;\u0001"+
		";\u0001;\u0005;\u02ea\b;\n;\f;\u02ed\t;\u0001;\u0003;\u02f0\b;\u0001<"+
		"\u0001<\u0001<\u0005<\u02f5\b<\n<\f<\u02f8\t<\u0001<\u0003<\u02fb\b<\u0001"+
		"=\u0001=\u0001=\u0005=\u0300\b=\n=\f=\u0303\t=\u0001=\u0003=\u0306\b="+
		"\u0001>\u0001>\u0001>\u0005>\u030b\b>\n>\f>\u030e\t>\u0001>\u0003>\u0311"+
		"\b>\u0001?\u0001?\u0001?\u0005?\u0316\b?\n?\f?\u0319\t?\u0001?\u0003?"+
		"\u031c\b?\u0001?\u0000\u0001F@\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010"+
		"\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJLNPR"+
		"TVXZ\\^`bdfhjlnprtvxz|~\u0000\u000b\u0001\u0000\u0016\u0017\u0002\u0000"+
		"\u001b\u001b\u001d\u001d\u0002\u0000??QQ\u0002\u0000CCNO\u0002\u00004"+
		"4U^\u0002\u0000DDFG\u0002\u0000AACC\u0001\u0000,-\u0001\u0000\u0019\u001a"+
		"\u0002\u000002ZZ\u0001\u0000Z[\u0371\u0000\u0081\u0001\u0000\u0000\u0000"+
		"\u0002\u008b\u0001\u0000\u0000\u0000\u0004\u00b4\u0001\u0000\u0000\u0000"+
		"\u0006\u00b6\u0001\u0000\u0000\u0000\b\u00ba\u0001\u0000\u0000\u0000\n"+
		"\u00c3\u0001\u0000\u0000\u0000\f\u00c8\u0001\u0000\u0000\u0000\u000e\u00ca"+
		"\u0001\u0000\u0000\u0000\u0010\u00ce\u0001\u0000\u0000\u0000\u0012\u00d2"+
		"\u0001\u0000\u0000\u0000\u0014\u00d5\u0001\u0000\u0000\u0000\u0016\u00d8"+
		"\u0001\u0000\u0000\u0000\u0018\u00db\u0001\u0000\u0000\u0000\u001a\u00e9"+
		"\u0001\u0000\u0000\u0000\u001c\u00f2\u0001\u0000\u0000\u0000\u001e\u00f9"+
		"\u0001\u0000\u0000\u0000 \u00ff\u0001\u0000\u0000\u0000\"\u0105\u0001"+
		"\u0000\u0000\u0000$\u010b\u0001\u0000\u0000\u0000&\u013b\u0001\u0000\u0000"+
		"\u0000(\u013d\u0001\u0000\u0000\u0000*\u0144\u0001\u0000\u0000\u0000,"+
		"\u0148\u0001\u0000\u0000\u0000.\u0150\u0001\u0000\u0000\u00000\u0159\u0001"+
		"\u0000\u0000\u00002\u0160\u0001\u0000\u0000\u00004\u0168\u0001\u0000\u0000"+
		"\u00006\u016f\u0001\u0000\u0000\u00008\u0173\u0001\u0000\u0000\u0000:"+
		"\u017f\u0001\u0000\u0000\u0000<\u018b\u0001\u0000\u0000\u0000>\u0197\u0001"+
		"\u0000\u0000\u0000@\u019f\u0001\u0000\u0000\u0000B\u01a2\u0001\u0000\u0000"+
		"\u0000D\u01a9\u0001\u0000\u0000\u0000F\u01d7\u0001\u0000\u0000\u0000H"+
		"\u0201\u0001\u0000\u0000\u0000J\u020c\u0001\u0000\u0000\u0000L\u020e\u0001"+
		"\u0000\u0000\u0000N\u0212\u0001\u0000\u0000\u0000P\u021c\u0001\u0000\u0000"+
		"\u0000R\u022a\u0001\u0000\u0000\u0000T\u023e\u0001\u0000\u0000\u0000V"+
		"\u0255\u0001\u0000\u0000\u0000X\u025c\u0001\u0000\u0000\u0000Z\u026c\u0001"+
		"\u0000\u0000\u0000\\\u028e\u0001\u0000\u0000\u0000^\u0290\u0001\u0000"+
		"\u0000\u0000`\u0294\u0001\u0000\u0000\u0000b\u029b\u0001\u0000\u0000\u0000"+
		"d\u02a8\u0001\u0000\u0000\u0000f\u02ac\u0001\u0000\u0000\u0000h\u02b0"+
		"\u0001\u0000\u0000\u0000j\u02b2\u0001\u0000\u0000\u0000l\u02b6\u0001\u0000"+
		"\u0000\u0000n\u02be\u0001\u0000\u0000\u0000p\u02ce\u0001\u0000\u0000\u0000"+
		"r\u02d0\u0001\u0000\u0000\u0000t\u02db\u0001\u0000\u0000\u0000v\u02e6"+
		"\u0001\u0000\u0000\u0000x\u02f1\u0001\u0000\u0000\u0000z\u02fc\u0001\u0000"+
		"\u0000\u0000|\u0307\u0001\u0000\u0000\u0000~\u0312\u0001\u0000\u0000\u0000"+
		"\u0080\u0082\u0003\u0002\u0001\u0000\u0081\u0080\u0001\u0000\u0000\u0000"+
		"\u0081\u0082\u0001\u0000\u0000\u0000\u0082\u0086\u0001\u0000\u0000\u0000"+
		"\u0083\u0085\u0003\u0004\u0002\u0000\u0084\u0083\u0001\u0000\u0000\u0000"+
		"\u0085\u0088\u0001\u0000\u0000\u0000\u0086\u0084\u0001\u0000\u0000\u0000"+
		"\u0086\u0087\u0001\u0000\u0000\u0000\u0087\u0089\u0001\u0000\u0000\u0000"+
		"\u0088\u0086\u0001\u0000\u0000\u0000\u0089\u008a\u0005\u0000\u0000\u0001"+
		"\u008a\u0001\u0001\u0000\u0000\u0000\u008b\u008c\u0005\u0001\u0000\u0000"+
		"\u008c\u008d\u0005d\u0000\u0000\u008d\u008e\u0005<\u0000\u0000\u008e\u0003"+
		"\u0001\u0000\u0000\u0000\u008f\u00b5\u0003\n\u0005\u0000\u0090\u0092\u0003"+
		"\u0006\u0003\u0000\u0091\u0090\u0001\u0000\u0000\u0000\u0092\u0095\u0001"+
		"\u0000\u0000\u0000\u0093\u0091\u0001\u0000\u0000\u0000\u0093\u0094\u0001"+
		"\u0000\u0000\u0000\u0094\u00b2\u0001\u0000\u0000\u0000\u0095\u0093\u0001"+
		"\u0000\u0000\u0000\u0096\u00b3\u0003,\u0016\u0000\u0097\u00b3\u0003>\u001f"+
		"\u0000\u0098\u00b3\u0003 \u0010\u0000\u0099\u00b3\u0003\"\u0011\u0000"+
		"\u009a\u00b3\u0003\u0012\t\u0000\u009b\u00b3\u0003B!\u0000\u009c\u00b3"+
		"\u0003\u000e\u0007\u0000\u009d\u00b3\u0003.\u0017\u0000\u009e\u00b3\u0003"+
		"0\u0018\u0000\u009f\u00b3\u0003\u0014\n\u0000\u00a0\u00b3\u00038\u001c"+
		"\u0000\u00a1\u00b3\u0003D\"\u0000\u00a2\u00b3\u0003$\u0012\u0000\u00a3"+
		"\u00b3\u0003\u0016\u000b\u0000\u00a4\u00b3\u0003@ \u0000\u00a5\u00b3\u0003"+
		":\u001d\u0000\u00a6\u00b3\u0003\u0018\f\u0000\u00a7\u00b3\u0003&\u0013"+
		"\u0000\u00a8\u00b3\u0003<\u001e\u0000\u00a9\u00b3\u0003\u001a\r\u0000"+
		"\u00aa\u00b3\u0003\u0010\b\u0000\u00ab\u00b3\u00032\u0019\u0000\u00ac"+
		"\u00b3\u0003(\u0014\u0000\u00ad\u00b3\u00034\u001a\u0000\u00ae\u00b3\u0003"+
		"6\u001b\u0000\u00af\u00b3\u0003*\u0015\u0000\u00b0\u00b3\u0003\u001c\u000e"+
		"\u0000\u00b1\u00b3\u0003\u001e\u000f\u0000\u00b2\u0096\u0001\u0000\u0000"+
		"\u0000\u00b2\u0097\u0001\u0000\u0000\u0000\u00b2\u0098\u0001\u0000\u0000"+
		"\u0000\u00b2\u0099\u0001\u0000\u0000\u0000\u00b2\u009a\u0001\u0000\u0000"+
		"\u0000\u00b2\u009b\u0001\u0000\u0000\u0000\u00b2\u009c\u0001\u0000\u0000"+
		"\u0000\u00b2\u009d\u0001\u0000\u0000\u0000\u00b2\u009e\u0001\u0000\u0000"+
		"\u0000\u00b2\u009f\u0001\u0000\u0000\u0000\u00b2\u00a0\u0001\u0000\u0000"+
		"\u0000\u00b2\u00a1\u0001\u0000\u0000\u0000\u00b2\u00a2\u0001\u0000\u0000"+
		"\u0000\u00b2\u00a3\u0001\u0000\u0000\u0000\u00b2\u00a4\u0001\u0000\u0000"+
		"\u0000\u00b2\u00a5\u0001\u0000\u0000\u0000\u00b2\u00a6\u0001\u0000\u0000"+
		"\u0000\u00b2\u00a7\u0001\u0000\u0000\u0000\u00b2\u00a8\u0001\u0000\u0000"+
		"\u0000\u00b2\u00a9\u0001\u0000\u0000\u0000\u00b2\u00aa\u0001\u0000\u0000"+
		"\u0000\u00b2\u00ab\u0001\u0000\u0000\u0000\u00b2\u00ac\u0001\u0000\u0000"+
		"\u0000\u00b2\u00ad\u0001\u0000\u0000\u0000\u00b2\u00ae\u0001\u0000\u0000"+
		"\u0000\u00b2\u00af\u0001\u0000\u0000\u0000\u00b2\u00b0\u0001\u0000\u0000"+
		"\u0000\u00b2\u00b1\u0001\u0000\u0000\u0000\u00b3\u00b5\u0001\u0000\u0000"+
		"\u0000\u00b4\u008f\u0001\u0000\u0000\u0000\u00b4\u0093\u0001\u0000\u0000"+
		"\u0000\u00b5\u0005\u0001\u0000\u0000\u0000\u00b6\u00b8\u0005\u0015\u0000"+
		"\u0000\u00b7\u00b9\u0005i\u0000\u0000\u00b8\u00b7\u0001\u0000\u0000\u0000"+
		"\u00b8\u00b9\u0001\u0000\u0000\u0000\u00b9\u0007\u0001\u0000\u0000\u0000"+
		"\u00ba\u00be\u00057\u0000\u0000\u00bb\u00bd\u0003\u0004\u0002\u0000\u00bc"+
		"\u00bb\u0001\u0000\u0000\u0000\u00bd\u00c0\u0001\u0000\u0000\u0000\u00be"+
		"\u00bc\u0001\u0000\u0000\u0000\u00be\u00bf\u0001\u0000\u0000\u0000\u00bf"+
		"\u00c1\u0001\u0000\u0000\u0000\u00c0\u00be\u0001\u0000\u0000\u0000\u00c1"+
		"\u00c2\u00058\u0000\u0000\u00c2\t\u0001\u0000\u0000\u0000\u00c3\u00c4"+
		"\u0005\u0014\u0000\u0000\u00c4\u00c5\u0005i\u0000\u0000\u00c5\u000b\u0001"+
		"\u0000\u0000\u0000\u00c6\u00c9\u0003\u0004\u0002\u0000\u00c7\u00c9\u0003"+
		"\b\u0004\u0000\u00c8\u00c6\u0001\u0000\u0000\u0000\u00c8\u00c7\u0001\u0000"+
		"\u0000\u0000\u00c9\r\u0001\u0000\u0000\u0000\u00ca\u00cb\u0005\u0003\u0000"+
		"\u0000\u00cb\u00cc\u0005f\u0000\u0000\u00cc\u00cd\u0005<\u0000\u0000\u00cd"+
		"\u000f\u0001\u0000\u0000\u0000\u00ce\u00cf\u0005\u0002\u0000\u0000\u00cf"+
		"\u00d0\u0005f\u0000\u0000\u00d0\u00d1\u0005<\u0000\u0000\u00d1\u0011\u0001"+
		"\u0000\u0000\u0000\u00d2\u00d3\u0005\u000b\u0000\u0000\u00d3\u00d4\u0005"+
		"<\u0000\u0000\u00d4\u0013\u0001\u0000\u0000\u0000\u00d5\u00d6\u0005\f"+
		"\u0000\u0000\u00d6\u00d7\u0005<\u0000\u0000\u00d7\u0015\u0001\u0000\u0000"+
		"\u0000\u00d8\u00d9\u0005\u000f\u0000\u0000\u00d9\u00da\u0005<\u0000\u0000"+
		"\u00da\u0017\u0001\u0000\u0000\u0000\u00db\u00dc\u0005\u0011\u0000\u0000"+
		"\u00dc\u00dd\u0003\\.\u0000\u00dd\u00de\u0005Z\u0000\u0000\u00de\u00e5"+
		"\u0005\u0013\u0000\u0000\u00df\u00e6\u0003P(\u0000\u00e0\u00e1\u00055"+
		"\u0000\u0000\u00e1\u00e2\u0003N\'\u0000\u00e2\u00e3\u00056\u0000\u0000"+
		"\u00e3\u00e6\u0001\u0000\u0000\u0000\u00e4\u00e6\u0003F#\u0000\u00e5\u00df"+
		"\u0001\u0000\u0000\u0000\u00e5\u00e0\u0001\u0000\u0000\u0000\u00e5\u00e4"+
		"\u0001\u0000\u0000\u0000\u00e6\u00e7\u0001\u0000\u0000\u0000\u00e7\u00e8"+
		"\u0003\f\u0006\u0000\u00e8\u0019\u0001\u0000\u0000\u0000\u00e9\u00ea\u0005"+
		"\r\u0000\u0000\u00ea\u00eb\u00059\u0000\u0000\u00eb\u00ec\u0003F#\u0000"+
		"\u00ec\u00ed\u0005:\u0000\u0000\u00ed\u00f0\u0003\f\u0006\u0000\u00ee"+
		"\u00ef\u0005\u000e\u0000\u0000\u00ef\u00f1\u0003\f\u0006\u0000\u00f0\u00ee"+
		"\u0001\u0000\u0000\u0000\u00f0\u00f1\u0001\u0000\u0000\u0000\u00f1\u001b"+
		"\u0001\u0000\u0000\u0000\u00f2\u00f5\u0005\u0010\u0000\u0000\u00f3\u00f6"+
		"\u0003F#\u0000\u00f4\u00f6\u0003L&\u0000\u00f5\u00f3\u0001\u0000\u0000"+
		"\u0000\u00f5\u00f4\u0001\u0000\u0000\u0000\u00f5\u00f6\u0001\u0000\u0000"+
		"\u0000\u00f6\u00f7\u0001\u0000\u0000\u0000\u00f7\u00f8\u0005<\u0000\u0000"+
		"\u00f8\u001d\u0001\u0000\u0000\u0000\u00f9\u00fa\u0005\u0012\u0000\u0000"+
		"\u00fa\u00fb\u00059\u0000\u0000\u00fb\u00fc\u0003F#\u0000\u00fc\u00fd"+
		"\u0005:\u0000\u0000\u00fd\u00fe\u0003\f\u0006\u0000\u00fe\u001f\u0001"+
		"\u0000\u0000\u0000\u00ff\u0101\u00053\u0000\u0000\u0100\u0102\u0003|>"+
		"\u0000\u0101\u0100\u0001\u0000\u0000\u0000\u0101\u0102\u0001\u0000\u0000"+
		"\u0000\u0102\u0103\u0001\u0000\u0000\u0000\u0103\u0104\u0005<\u0000\u0000"+
		"\u0104!\u0001\u0000\u0000\u0000\u0105\u0107\u0005\t\u0000\u0000\u0106"+
		"\u0108\u0003d2\u0000\u0107\u0106\u0001\u0000\u0000\u0000\u0107\u0108\u0001"+
		"\u0000\u0000\u0000\u0108\u0109\u0001\u0000\u0000\u0000\u0109\u010a\u0003"+
		"\b\u0004\u0000\u010a#\u0001\u0000\u0000\u0000\u010b\u010c\u00050\u0000"+
		"\u0000\u010c\u010e\u0003d2\u0000\u010d\u010f\u0003|>\u0000\u010e\u010d"+
		"\u0001\u0000\u0000\u0000\u010e\u010f\u0001\u0000\u0000\u0000\u010f\u0110"+
		"\u0001\u0000\u0000\u0000\u0110\u0111\u0005<\u0000\u0000\u0111%\u0001\u0000"+
		"\u0000\u0000\u0112\u0114\u0003Z-\u0000\u0113\u0112\u0001\u0000\u0000\u0000"+
		"\u0114\u0117\u0001\u0000\u0000\u0000\u0115\u0113\u0001\u0000\u0000\u0000"+
		"\u0115\u0116\u0001\u0000\u0000\u0000\u0116\u0118\u0001\u0000\u0000\u0000"+
		"\u0117\u0115\u0001\u0000\u0000\u0000\u0118\u011e\u0005Z\u0000\u0000\u0119"+
		"\u011b\u00059\u0000\u0000\u011a\u011c\u0003x<\u0000\u011b\u011a\u0001"+
		"\u0000\u0000\u0000\u011b\u011c\u0001\u0000\u0000\u0000\u011c\u011d\u0001"+
		"\u0000\u0000\u0000\u011d\u011f\u0005:\u0000\u0000\u011e\u0119\u0001\u0000"+
		"\u0000\u0000\u011e\u011f\u0001\u0000\u0000\u0000\u011f\u0121\u0001\u0000"+
		"\u0000\u0000\u0120\u0122\u0003d2\u0000\u0121\u0120\u0001\u0000\u0000\u0000"+
		"\u0121\u0122\u0001\u0000\u0000\u0000\u0122\u0123\u0001\u0000\u0000\u0000"+
		"\u0123\u0124\u0003|>\u0000\u0124\u0125\u0005<\u0000\u0000\u0125\u013c"+
		"\u0001\u0000\u0000\u0000\u0126\u0128\u0003Z-\u0000\u0127\u0126\u0001\u0000"+
		"\u0000\u0000\u0128\u012b\u0001\u0000\u0000\u0000\u0129\u0127\u0001\u0000"+
		"\u0000\u0000\u0129\u012a\u0001\u0000\u0000\u0000\u012a\u012c\u0001\u0000"+
		"\u0000\u0000\u012b\u0129\u0001\u0000\u0000\u0000\u012c\u0132\u0005)\u0000"+
		"\u0000\u012d\u012f\u00059\u0000\u0000\u012e\u0130\u0003x<\u0000\u012f"+
		"\u012e\u0001\u0000\u0000\u0000\u012f\u0130\u0001\u0000\u0000\u0000\u0130"+
		"\u0131\u0001\u0000\u0000\u0000\u0131\u0133\u0005:\u0000\u0000\u0132\u012d"+
		"\u0001\u0000\u0000\u0000\u0132\u0133\u0001\u0000\u0000\u0000\u0133\u0135"+
		"\u0001\u0000\u0000\u0000\u0134\u0136\u0003d2\u0000\u0135\u0134\u0001\u0000"+
		"\u0000\u0000\u0135\u0136\u0001\u0000\u0000\u0000\u0136\u0138\u0001\u0000"+
		"\u0000\u0000\u0137\u0139\u0003|>\u0000\u0138\u0137\u0001\u0000\u0000\u0000"+
		"\u0138\u0139\u0001\u0000\u0000\u0000\u0139\u013a\u0001\u0000\u0000\u0000"+
		"\u013a\u013c\u0005<\u0000\u0000\u013b\u0115\u0001\u0000\u0000\u0000\u013b"+
		"\u0129\u0001\u0000\u0000\u0000\u013c\'\u0001\u0000\u0000\u0000\u013d\u0140"+
		"\u0003L&\u0000\u013e\u013f\u0005@\u0000\u0000\u013f\u0141\u0003V+\u0000"+
		"\u0140\u013e\u0001\u0000\u0000\u0000\u0140\u0141\u0001\u0000\u0000\u0000"+
		"\u0141\u0142\u0001\u0000\u0000\u0000\u0142\u0143\u0005<\u0000\u0000\u0143"+
		")\u0001\u0000\u0000\u0000\u0144\u0145\u00051\u0000\u0000\u0145\u0146\u0003"+
		"l6\u0000\u0146\u0147\u0005<\u0000\u0000\u0147+\u0001\u0000\u0000\u0000"+
		"\u0148\u0149\u0005\n\u0000\u0000\u0149\u014a\u0005Z\u0000\u0000\u014a"+
		"\u014b\u0005?\u0000\u0000\u014b\u014c\u0003H$\u0000\u014c\u014d\u0005"+
		"<\u0000\u0000\u014d-\u0001\u0000\u0000\u0000\u014e\u0151\u0003\\.\u0000"+
		"\u014f\u0151\u0003`0\u0000\u0150\u014e\u0001\u0000\u0000\u0000\u0150\u014f"+
		"\u0001\u0000\u0000\u0000\u0151\u0152\u0001\u0000\u0000\u0000\u0152\u0155"+
		"\u0005Z\u0000\u0000\u0153\u0154\u0005?\u0000\u0000\u0154\u0156\u0003J"+
		"%\u0000\u0155\u0153\u0001\u0000\u0000\u0000\u0155\u0156\u0001\u0000\u0000"+
		"\u0000\u0156\u0157\u0001\u0000\u0000\u0000\u0157\u0158\u0005<\u0000\u0000"+
		"\u0158/\u0001\u0000\u0000\u0000\u0159\u015a\u0005\u0018\u0000\u0000\u015a"+
		"\u015b\u0003\\.\u0000\u015b\u015c\u0005Z\u0000\u0000\u015c\u015d\u0005"+
		"?\u0000\u0000\u015d\u015e\u0003J%\u0000\u015e\u015f\u0005<\u0000\u0000"+
		"\u015f1\u0001\u0000\u0000\u0000\u0160\u0163\u0007\u0000\u0000\u0000\u0161"+
		"\u0164\u0003\\.\u0000\u0162\u0164\u0003`0\u0000\u0163\u0161\u0001\u0000"+
		"\u0000\u0000\u0163\u0162\u0001\u0000\u0000\u0000\u0164\u0165\u0001\u0000"+
		"\u0000\u0000\u0165\u0166\u0005Z\u0000\u0000\u0166\u0167\u0005<\u0000\u0000"+
		"\u01673\u0001\u0000\u0000\u0000\u0168\u0169\u0007\u0001\u0000\u0000\u0169"+
		"\u016b\u0005Z\u0000\u0000\u016a\u016c\u0003d2\u0000\u016b\u016a\u0001"+
		"\u0000\u0000\u0000\u016b\u016c\u0001\u0000\u0000\u0000\u016c\u016d\u0001"+
		"\u0000\u0000\u0000\u016d\u016e\u0005<\u0000\u0000\u016e5\u0001\u0000\u0000"+
		"\u0000\u016f\u0170\u0003^/\u0000\u0170\u0171\u0005Z\u0000\u0000\u0171"+
		"\u0172\u0005<\u0000\u0000\u01727\u0001\u0000\u0000\u0000\u0173\u0174\u0005"+
		"\u0004\u0000\u0000\u0174\u0175\u0005Z\u0000\u0000\u0175\u0177\u00059\u0000"+
		"\u0000\u0176\u0178\u0003r9\u0000\u0177\u0176\u0001\u0000\u0000\u0000\u0177"+
		"\u0178\u0001\u0000\u0000\u0000\u0178\u0179\u0001\u0000\u0000\u0000\u0179"+
		"\u017b\u0005:\u0000\u0000\u017a\u017c\u0003X,\u0000\u017b\u017a\u0001"+
		"\u0000\u0000\u0000\u017b\u017c\u0001\u0000\u0000\u0000\u017c\u017d\u0001"+
		"\u0000\u0000\u0000\u017d\u017e\u0003\b\u0004\u0000\u017e9\u0001\u0000"+
		"\u0000\u0000\u017f\u0180\u0005\b\u0000\u0000\u0180\u0181\u0005Z\u0000"+
		"\u0000\u0181\u0183\u00059\u0000\u0000\u0182\u0184\u0003~?\u0000\u0183"+
		"\u0182\u0001\u0000\u0000\u0000\u0183\u0184\u0001\u0000\u0000\u0000\u0184"+
		"\u0185\u0001\u0000\u0000\u0000\u0185\u0187\u0005:\u0000\u0000\u0186\u0188"+
		"\u0003X,\u0000\u0187\u0186\u0001\u0000\u0000\u0000\u0187\u0188\u0001\u0000"+
		"\u0000\u0000\u0188\u0189\u0001\u0000\u0000\u0000\u0189\u018a\u0005<\u0000"+
		"\u0000\u018a;\u0001\u0000\u0000\u0000\u018b\u018c\u0005\u0007\u0000\u0000"+
		"\u018c\u0192\u0005Z\u0000\u0000\u018d\u018f\u00059\u0000\u0000\u018e\u0190"+
		"\u0003z=\u0000\u018f\u018e\u0001\u0000\u0000\u0000\u018f\u0190\u0001\u0000"+
		"\u0000\u0000\u0190\u0191\u0001\u0000\u0000\u0000\u0191\u0193\u0005:\u0000"+
		"\u0000\u0192\u018d\u0001\u0000\u0000\u0000\u0192\u0193\u0001\u0000\u0000"+
		"\u0000\u0193\u0194\u0001\u0000\u0000\u0000\u0194\u0195\u0003z=\u0000\u0195"+
		"\u0196\u0003\b\u0004\u0000\u0196=\u0001\u0000\u0000\u0000\u0197\u0198"+
		"\u0003V+\u0000\u0198\u019b\u0007\u0002\u0000\u0000\u0199\u019c\u0003F"+
		"#\u0000\u019a\u019c\u0003L&\u0000\u019b\u0199\u0001\u0000\u0000\u0000"+
		"\u019b\u019a\u0001\u0000\u0000\u0000\u019c\u019d\u0001\u0000\u0000\u0000"+
		"\u019d\u019e\u0005<\u0000\u0000\u019e?\u0001\u0000\u0000\u0000\u019f\u01a0"+
		"\u0003F#\u0000\u01a0\u01a1\u0005<\u0000\u0000\u01a1A\u0001\u0000\u0000"+
		"\u0000\u01a2\u01a3\u0005\u0005\u0000\u0000\u01a3\u01a5\u00057\u0000\u0000"+
		"\u01a4\u01a6\u0005n\u0000\u0000\u01a5\u01a4\u0001\u0000\u0000\u0000\u01a5"+
		"\u01a6\u0001\u0000\u0000\u0000\u01a6\u01a7\u0001\u0000\u0000\u0000\u01a7"+
		"\u01a8\u00058\u0000\u0000\u01a8C\u0001\u0000\u0000\u0000\u01a9\u01aa\u0005"+
		"\u0006\u0000\u0000\u01aa\u01b0\u0003f3\u0000\u01ab\u01ad\u00059\u0000"+
		"\u0000\u01ac\u01ae\u0003t:\u0000\u01ad\u01ac\u0001\u0000\u0000\u0000\u01ad"+
		"\u01ae\u0001\u0000\u0000\u0000\u01ae\u01af\u0001\u0000\u0000\u0000\u01af"+
		"\u01b1\u0005:\u0000\u0000\u01b0\u01ab\u0001\u0000\u0000\u0000\u01b0\u01b1"+
		"\u0001\u0000\u0000\u0000\u01b1\u01b2\u0001\u0000\u0000\u0000\u01b2\u01b4"+
		"\u0003v;\u0000\u01b3\u01b5\u0003X,\u0000\u01b4\u01b3\u0001\u0000\u0000"+
		"\u0000\u01b4\u01b5\u0001\u0000\u0000\u0000\u01b5\u01b6\u0001\u0000\u0000"+
		"\u0000\u01b6\u01b8\u00057\u0000\u0000\u01b7\u01b9\u0005n\u0000\u0000\u01b8"+
		"\u01b7\u0001\u0000\u0000\u0000\u01b8\u01b9\u0001\u0000\u0000\u0000\u01b9"+
		"\u01ba\u0001\u0000\u0000\u0000\u01ba\u01bb\u00058\u0000\u0000\u01bbE\u0001"+
		"\u0000\u0000\u0000\u01bc\u01bd\u0006#\uffff\uffff\u0000\u01bd\u01be\u0005"+
		"9\u0000\u0000\u01be\u01bf\u0003F#\u0000\u01bf\u01c0\u0005:\u0000\u0000"+
		"\u01c0\u01d8\u0001\u0000\u0000\u0000\u01c1\u01c2\u0007\u0003\u0000\u0000"+
		"\u01c2\u01d8\u0003F#\u000f\u01c3\u01c6\u0003\\.\u0000\u01c4\u01c6\u0003"+
		"`0\u0000\u01c5\u01c3\u0001\u0000\u0000\u0000\u01c5\u01c4\u0001\u0000\u0000"+
		"\u0000\u01c6\u01c7\u0001\u0000\u0000\u0000\u01c7\u01c8\u00059\u0000\u0000"+
		"\u01c8\u01c9\u0003F#\u0000\u01c9\u01ca\u0005:\u0000\u0000\u01ca\u01d8"+
		"\u0001\u0000\u0000\u0000\u01cb\u01cc\u0005/\u0000\u0000\u01cc\u01cd\u0005"+
		"9\u0000\u0000\u01cd\u01ce\u0003\b\u0004\u0000\u01ce\u01cf\u0005:\u0000"+
		"\u0000\u01cf\u01d8\u0001\u0000\u0000\u0000\u01d0\u01d1\u0005Z\u0000\u0000"+
		"\u01d1\u01d3\u00059\u0000\u0000\u01d2\u01d4\u0003x<\u0000\u01d3\u01d2"+
		"\u0001\u0000\u0000\u0000\u01d3\u01d4\u0001\u0000\u0000\u0000\u01d4\u01d5"+
		"\u0001\u0000\u0000\u0000\u01d5\u01d8\u0005:\u0000\u0000\u01d6\u01d8\u0007"+
		"\u0004\u0000\u0000\u01d7\u01bc\u0001\u0000\u0000\u0000\u01d7\u01c1\u0001"+
		"\u0000\u0000\u0000\u01d7\u01c5\u0001\u0000\u0000\u0000\u01d7\u01cb\u0001"+
		"\u0000\u0000\u0000\u01d7\u01d0\u0001\u0000\u0000\u0000\u01d7\u01d6\u0001"+
		"\u0000\u0000\u0000\u01d8\u01fe\u0001\u0000\u0000\u0000\u01d9\u01da\n\u0010"+
		"\u0000\u0000\u01da\u01db\u0005E\u0000\u0000\u01db\u01fd\u0003F#\u0010"+
		"\u01dc\u01dd\n\u000e\u0000\u0000\u01dd\u01de\u0007\u0005\u0000\u0000\u01de"+
		"\u01fd\u0003F#\u000f\u01df\u01e0\n\r\u0000\u0000\u01e0\u01e1\u0007\u0006"+
		"\u0000\u0000\u01e1\u01fd\u0003F#\u000e\u01e2\u01e3\n\f\u0000\u0000\u01e3"+
		"\u01e4\u0005S\u0000\u0000\u01e4\u01fd\u0003F#\r\u01e5\u01e6\n\u000b\u0000"+
		"\u0000\u01e6\u01e7\u0005R\u0000\u0000\u01e7\u01fd\u0003F#\f\u01e8\u01e9"+
		"\n\n\u0000\u0000\u01e9\u01ea\u0005P\u0000\u0000\u01ea\u01fd\u0003F#\u000b"+
		"\u01eb\u01ec\n\t\u0000\u0000\u01ec\u01ed\u0005J\u0000\u0000\u01ed\u01fd"+
		"\u0003F#\n\u01ee\u01ef\n\b\u0000\u0000\u01ef\u01f0\u0005L\u0000\u0000"+
		"\u01f0\u01fd\u0003F#\t\u01f1\u01f2\n\u0007\u0000\u0000\u01f2\u01f3\u0005"+
		"H\u0000\u0000\u01f3\u01fd\u0003F#\b\u01f4\u01f5\n\u0006\u0000\u0000\u01f5"+
		"\u01f6\u0005K\u0000\u0000\u01f6\u01fd\u0003F#\u0007\u01f7\u01f8\n\u0005"+
		"\u0000\u0000\u01f8\u01f9\u0005I\u0000\u0000\u01f9\u01fd\u0003F#\u0006"+
		"\u01fa\u01fb\n\u0011\u0000\u0000\u01fb\u01fd\u0003T*\u0000\u01fc\u01d9"+
		"\u0001\u0000\u0000\u0000\u01fc\u01dc\u0001\u0000\u0000\u0000\u01fc\u01df"+
		"\u0001\u0000\u0000\u0000\u01fc\u01e2\u0001\u0000\u0000\u0000\u01fc\u01e5"+
		"\u0001\u0000\u0000\u0000\u01fc\u01e8\u0001\u0000\u0000\u0000\u01fc\u01eb"+
		"\u0001\u0000\u0000\u0000\u01fc\u01ee\u0001\u0000\u0000\u0000\u01fc\u01f1"+
		"\u0001\u0000\u0000\u0000\u01fc\u01f4\u0001\u0000\u0000\u0000\u01fc\u01f7"+
		"\u0001\u0000\u0000\u0000\u01fc\u01fa\u0001\u0000\u0000\u0000\u01fd\u0200"+
		"\u0001\u0000\u0000\u0000\u01fe\u01fc\u0001\u0000\u0000\u0000\u01fe\u01ff"+
		"\u0001\u0000\u0000\u0000\u01ffG\u0001\u0000\u0000\u0000\u0200\u01fe\u0001"+
		"\u0000\u0000\u0000\u0201\u0206\u0003F#\u0000\u0202\u0203\u0005B\u0000"+
		"\u0000\u0203\u0205\u0003F#\u0000\u0204\u0202\u0001\u0000\u0000\u0000\u0205"+
		"\u0208\u0001\u0000\u0000\u0000\u0206\u0204\u0001\u0000\u0000\u0000\u0206"+
		"\u0207\u0001\u0000\u0000\u0000\u0207I\u0001\u0000\u0000\u0000\u0208\u0206"+
		"\u0001\u0000\u0000\u0000\u0209\u020d\u0003R)\u0000\u020a\u020d\u0003F"+
		"#\u0000\u020b\u020d\u0003L&\u0000\u020c\u0209\u0001\u0000\u0000\u0000"+
		"\u020c\u020a\u0001\u0000\u0000\u0000\u020c\u020b\u0001\u0000\u0000\u0000"+
		"\u020dK\u0001\u0000\u0000\u0000\u020e\u020f\u00052\u0000\u0000\u020f\u0210"+
		"\u0003l6\u0000\u0210M\u0001\u0000\u0000\u0000\u0211\u0213\u0003F#\u0000"+
		"\u0212\u0211\u0001\u0000\u0000\u0000\u0212\u0213\u0001\u0000\u0000\u0000"+
		"\u0213\u0214\u0001\u0000\u0000\u0000\u0214\u0216\u0005;\u0000\u0000\u0215"+
		"\u0217\u0003F#\u0000\u0216\u0215\u0001\u0000\u0000\u0000\u0216\u0217\u0001"+
		"\u0000\u0000\u0000\u0217\u021a\u0001\u0000\u0000\u0000\u0218\u0219\u0005"+
		";\u0000\u0000\u0219\u021b\u0003F#\u0000\u021a\u0218\u0001\u0000\u0000"+
		"\u0000\u021a\u021b\u0001\u0000\u0000\u0000\u021bO\u0001\u0000\u0000\u0000"+
		"\u021c\u021d\u00057\u0000\u0000\u021d\u0222\u0003F#\u0000\u021e\u021f"+
		"\u0005>\u0000\u0000\u021f\u0221\u0003F#\u0000\u0220\u021e\u0001\u0000"+
		"\u0000\u0000\u0221\u0224\u0001\u0000\u0000\u0000\u0222\u0220\u0001\u0000"+
		"\u0000\u0000\u0222\u0223\u0001\u0000\u0000\u0000\u0223\u0226\u0001\u0000"+
		"\u0000\u0000\u0224\u0222\u0001\u0000\u0000\u0000\u0225\u0227\u0005>\u0000"+
		"\u0000\u0226\u0225\u0001\u0000\u0000\u0000\u0226\u0227\u0001\u0000\u0000"+
		"\u0000\u0227\u0228\u0001\u0000\u0000\u0000\u0228\u0229\u00058\u0000\u0000"+
		"\u0229Q\u0001\u0000\u0000\u0000\u022a\u022d\u00057\u0000\u0000\u022b\u022e"+
		"\u0003F#\u0000\u022c\u022e\u0003R)\u0000\u022d\u022b\u0001\u0000\u0000"+
		"\u0000\u022d\u022c\u0001\u0000\u0000\u0000\u022e\u0236\u0001\u0000\u0000"+
		"\u0000\u022f\u0232\u0005>\u0000\u0000\u0230\u0233\u0003F#\u0000\u0231"+
		"\u0233\u0003R)\u0000\u0232\u0230\u0001\u0000\u0000\u0000\u0232\u0231\u0001"+
		"\u0000\u0000\u0000\u0233\u0235\u0001\u0000\u0000\u0000\u0234\u022f\u0001"+
		"\u0000\u0000\u0000\u0235\u0238\u0001\u0000\u0000\u0000\u0236\u0234\u0001"+
		"\u0000\u0000\u0000\u0236\u0237\u0001\u0000\u0000\u0000\u0237\u023a\u0001"+
		"\u0000\u0000\u0000\u0238\u0236\u0001\u0000\u0000\u0000\u0239\u023b\u0005"+
		">\u0000\u0000\u023a\u0239\u0001\u0000\u0000\u0000\u023a\u023b\u0001\u0000"+
		"\u0000\u0000\u023b\u023c\u0001\u0000\u0000\u0000\u023c\u023d\u00058\u0000"+
		"\u0000\u023dS\u0001\u0000\u0000\u0000\u023e\u0251\u00055\u0000\u0000\u023f"+
		"\u0252\u0003P(\u0000\u0240\u0243\u0003F#\u0000\u0241\u0243\u0003N\'\u0000"+
		"\u0242\u0240\u0001\u0000\u0000\u0000\u0242\u0241\u0001\u0000\u0000\u0000"+
		"\u0243\u024b\u0001\u0000\u0000\u0000\u0244\u0247\u0005>\u0000\u0000\u0245"+
		"\u0248\u0003F#\u0000\u0246\u0248\u0003N\'\u0000\u0247\u0245\u0001\u0000"+
		"\u0000\u0000\u0247\u0246\u0001\u0000\u0000\u0000\u0248\u024a\u0001\u0000"+
		"\u0000\u0000\u0249\u0244\u0001\u0000\u0000\u0000\u024a\u024d\u0001\u0000"+
		"\u0000\u0000\u024b\u0249\u0001\u0000\u0000\u0000\u024b\u024c\u0001\u0000"+
		"\u0000\u0000\u024c\u024f\u0001\u0000\u0000\u0000\u024d\u024b\u0001\u0000"+
		"\u0000\u0000\u024e\u0250\u0005>\u0000\u0000\u024f\u024e\u0001\u0000\u0000"+
		"\u0000\u024f\u0250\u0001\u0000\u0000\u0000\u0250\u0252\u0001\u0000\u0000"+
		"\u0000\u0251\u023f\u0001\u0000\u0000\u0000\u0251\u0242\u0001\u0000\u0000"+
		"\u0000\u0252\u0253\u0001\u0000\u0000\u0000\u0253\u0254\u00056\u0000\u0000"+
		"\u0254U\u0001\u0000\u0000\u0000\u0255\u0259\u0005Z\u0000\u0000\u0256\u0258"+
		"\u0003T*\u0000\u0257\u0256\u0001\u0000\u0000\u0000\u0258\u025b\u0001\u0000"+
		"\u0000\u0000\u0259\u0257\u0001\u0000\u0000\u0000\u0259\u025a\u0001\u0000"+
		"\u0000\u0000\u025aW\u0001\u0000\u0000\u0000\u025b\u0259\u0001\u0000\u0000"+
		"\u0000\u025c\u025d\u0005@\u0000\u0000\u025d\u025e\u0003\\.\u0000\u025e"+
		"Y\u0001\u0000\u0000\u0000\u025f\u026d\u0005*\u0000\u0000\u0260\u0261\u0005"+
		"+\u0000\u0000\u0261\u0262\u00059\u0000\u0000\u0262\u0263\u0003F#\u0000"+
		"\u0263\u0264\u0005:\u0000\u0000\u0264\u026d\u0001\u0000\u0000\u0000\u0265"+
		"\u026a\u0007\u0007\u0000\u0000\u0266\u0267\u00059\u0000\u0000\u0267\u0268"+
		"\u0003F#\u0000\u0268\u0269\u0005:\u0000\u0000\u0269\u026b\u0001\u0000"+
		"\u0000\u0000\u026a\u0266\u0001\u0000\u0000\u0000\u026a\u026b\u0001\u0000"+
		"\u0000\u0000\u026b\u026d\u0001\u0000\u0000\u0000\u026c\u025f\u0001\u0000"+
		"\u0000\u0000\u026c\u0260\u0001\u0000\u0000\u0000\u026c\u0265\u0001\u0000"+
		"\u0000\u0000\u026d\u026e\u0001\u0000\u0000\u0000\u026e\u026f\u0005M\u0000"+
		"\u0000\u026f[\u0001\u0000\u0000\u0000\u0270\u0272\u0005\u001f\u0000\u0000"+
		"\u0271\u0273\u0003d2\u0000\u0272\u0271\u0001\u0000\u0000\u0000\u0272\u0273"+
		"\u0001\u0000\u0000\u0000\u0273\u028f\u0001\u0000\u0000\u0000\u0274\u0276"+
		"\u0005 \u0000\u0000\u0275\u0277\u0003d2\u0000\u0276\u0275\u0001\u0000"+
		"\u0000\u0000\u0276\u0277\u0001\u0000\u0000\u0000\u0277\u028f\u0001\u0000"+
		"\u0000\u0000\u0278\u027a\u0005!\u0000\u0000\u0279\u027b\u0003d2\u0000"+
		"\u027a\u0279\u0001\u0000\u0000\u0000\u027a\u027b\u0001\u0000\u0000\u0000"+
		"\u027b\u028f\u0001\u0000\u0000\u0000\u027c\u027e\u0005\"\u0000\u0000\u027d"+
		"\u027f\u0003d2\u0000\u027e\u027d\u0001\u0000\u0000\u0000\u027e\u027f\u0001"+
		"\u0000\u0000\u0000\u027f\u028f\u0001\u0000\u0000\u0000\u0280\u0282\u0005"+
		"#\u0000\u0000\u0281\u0283\u0003d2\u0000\u0282\u0281\u0001\u0000\u0000"+
		"\u0000\u0282\u0283\u0001\u0000\u0000\u0000\u0283\u028f\u0001\u0000\u0000"+
		"\u0000\u0284\u028f\u0005\u001e\u0000\u0000\u0285\u028f\u0005\'\u0000\u0000"+
		"\u0286\u028f\u0005(\u0000\u0000\u0287\u028c\u0005$\u0000\u0000\u0288\u0289"+
		"\u00055\u0000\u0000\u0289\u028a\u0003\\.\u0000\u028a\u028b\u00056\u0000"+
		"\u0000\u028b\u028d\u0001\u0000\u0000\u0000\u028c\u0288\u0001\u0000\u0000"+
		"\u0000\u028c\u028d\u0001\u0000\u0000\u0000\u028d\u028f\u0001\u0000\u0000"+
		"\u0000\u028e\u0270\u0001\u0000\u0000\u0000\u028e\u0274\u0001\u0000\u0000"+
		"\u0000\u028e\u0278\u0001\u0000\u0000\u0000\u028e\u027c\u0001\u0000\u0000"+
		"\u0000\u028e\u0280\u0001\u0000\u0000\u0000\u028e\u0284\u0001\u0000\u0000"+
		"\u0000\u028e\u0285\u0001\u0000\u0000\u0000\u028e\u0286\u0001\u0000\u0000"+
		"\u0000\u028e\u0287\u0001\u0000\u0000\u0000\u028f]\u0001\u0000\u0000\u0000"+
		"\u0290\u0292\u0005\u001c\u0000\u0000\u0291\u0293\u0003d2\u0000\u0292\u0291"+
		"\u0001\u0000\u0000\u0000\u0292\u0293\u0001\u0000\u0000\u0000\u0293_\u0001"+
		"\u0000\u0000\u0000\u0294\u0295\u0005%\u0000\u0000\u0295\u0296\u00055\u0000"+
		"\u0000\u0296\u0297\u0003\\.\u0000\u0297\u0298\u0005>\u0000\u0000\u0298"+
		"\u0299\u0003x<\u0000\u0299\u029a\u00056\u0000\u0000\u029aa\u0001\u0000"+
		"\u0000\u0000\u029b\u029c\u0007\b\u0000\u0000\u029c\u029d\u0005%\u0000"+
		"\u0000\u029d\u029e\u00055\u0000\u0000\u029e\u029f\u0003\\.\u0000\u029f"+
		"\u02a4\u0005>\u0000\u0000\u02a0\u02a5\u0003x<\u0000\u02a1\u02a2\u0005"+
		".\u0000\u0000\u02a2\u02a3\u0005?\u0000\u0000\u02a3\u02a5\u0003F#\u0000"+
		"\u02a4\u02a0\u0001\u0000\u0000\u0000\u02a4\u02a1\u0001\u0000\u0000\u0000"+
		"\u02a5\u02a6\u0001\u0000\u0000\u0000\u02a6\u02a7\u00056\u0000\u0000\u02a7"+
		"c\u0001\u0000\u0000\u0000\u02a8\u02a9\u00055\u0000\u0000\u02a9\u02aa\u0003"+
		"F#\u0000\u02aa\u02ab\u00056\u0000\u0000\u02abe\u0001\u0000\u0000\u0000"+
		"\u02ac\u02ad\u0007\t\u0000\u0000\u02adg\u0001\u0000\u0000\u0000\u02ae"+
		"\u02b1\u0003F#\u0000\u02af\u02b1\u0003p8\u0000\u02b0\u02ae\u0001\u0000"+
		"\u0000\u0000\u02b0\u02af\u0001\u0000\u0000\u0000\u02b1i\u0001\u0000\u0000"+
		"\u0000\u02b2\u02b3\u0007\n\u0000\u0000\u02b3k\u0001\u0000\u0000\u0000"+
		"\u02b4\u02b7\u0003V+\u0000\u02b5\u02b7\u0005[\u0000\u0000\u02b6\u02b4"+
		"\u0001\u0000\u0000\u0000\u02b6\u02b5\u0001\u0000\u0000\u0000\u02b7m\u0001"+
		"\u0000\u0000\u0000\u02b8\u02bf\u0003\\.\u0000\u02b9\u02bf\u0003b1\u0000"+
		"\u02ba\u02bc\u0005\u001d\u0000\u0000\u02bb\u02bd\u0003d2\u0000\u02bc\u02bb"+
		"\u0001\u0000\u0000\u0000\u02bc\u02bd\u0001\u0000\u0000\u0000\u02bd\u02bf"+
		"\u0001\u0000\u0000\u0000\u02be\u02b8\u0001\u0000\u0000\u0000\u02be\u02b9"+
		"\u0001\u0000\u0000\u0000\u02be\u02ba\u0001\u0000\u0000\u0000\u02bfo\u0001"+
		"\u0000\u0000\u0000\u02c0\u02c1\u0003\\.\u0000\u02c1\u02c2\u0005Z\u0000"+
		"\u0000\u02c2\u02cf\u0001\u0000\u0000\u0000\u02c3\u02c4\u0003^/\u0000\u02c4"+
		"\u02c5\u0005Z\u0000\u0000\u02c5\u02cf\u0001\u0000\u0000\u0000\u02c6\u02c7"+
		"\u0007\u0001\u0000\u0000\u02c7\u02c9\u0005Z\u0000\u0000\u02c8\u02ca\u0003"+
		"d2\u0000\u02c9\u02c8\u0001\u0000\u0000\u0000\u02c9\u02ca\u0001\u0000\u0000"+
		"\u0000\u02ca\u02cf\u0001\u0000\u0000\u0000\u02cb\u02cc\u0003b1\u0000\u02cc"+
		"\u02cd\u0005Z\u0000\u0000\u02cd\u02cf\u0001\u0000\u0000\u0000\u02ce\u02c0"+
		"\u0001\u0000\u0000\u0000\u02ce\u02c3\u0001\u0000\u0000\u0000\u02ce\u02c6"+
		"\u0001\u0000\u0000\u0000\u02ce\u02cb\u0001\u0000\u0000\u0000\u02cfq\u0001"+
		"\u0000\u0000\u0000\u02d0\u02d5\u0003p8\u0000\u02d1\u02d2\u0005>\u0000"+
		"\u0000\u02d2\u02d4\u0003p8\u0000\u02d3\u02d1\u0001\u0000\u0000\u0000\u02d4"+
		"\u02d7\u0001\u0000\u0000\u0000\u02d5\u02d3\u0001\u0000\u0000\u0000\u02d5"+
		"\u02d6\u0001\u0000\u0000\u0000\u02d6\u02d9\u0001\u0000\u0000\u0000\u02d7"+
		"\u02d5\u0001\u0000\u0000\u0000\u02d8\u02da\u0005>\u0000\u0000\u02d9\u02d8"+
		"\u0001\u0000\u0000\u0000\u02d9\u02da\u0001\u0000\u0000\u0000\u02das\u0001"+
		"\u0000\u0000\u0000\u02db\u02e0\u0003h4\u0000\u02dc\u02dd\u0005>\u0000"+
		"\u0000\u02dd\u02df\u0003h4\u0000\u02de\u02dc\u0001\u0000\u0000\u0000\u02df"+
		"\u02e2\u0001\u0000\u0000\u0000\u02e0\u02de\u0001\u0000\u0000\u0000\u02e0"+
		"\u02e1\u0001\u0000\u0000\u0000\u02e1\u02e4\u0001\u0000\u0000\u0000\u02e2"+
		"\u02e0\u0001\u0000\u0000\u0000\u02e3\u02e5\u0005>\u0000\u0000\u02e4\u02e3"+
		"\u0001\u0000\u0000\u0000\u02e4\u02e5\u0001\u0000\u0000\u0000\u02e5u\u0001"+
		"\u0000\u0000\u0000\u02e6\u02eb\u0003j5\u0000\u02e7\u02e8\u0005>\u0000"+
		"\u0000\u02e8\u02ea\u0003j5\u0000\u02e9\u02e7\u0001\u0000\u0000\u0000\u02ea"+
		"\u02ed\u0001\u0000\u0000\u0000\u02eb\u02e9\u0001\u0000\u0000\u0000\u02eb"+
		"\u02ec\u0001\u0000\u0000\u0000\u02ec\u02ef\u0001\u0000\u0000\u0000\u02ed"+
		"\u02eb\u0001\u0000\u0000\u0000\u02ee\u02f0\u0005>\u0000\u0000\u02ef\u02ee"+
		"\u0001\u0000\u0000\u0000\u02ef\u02f0\u0001\u0000\u0000\u0000\u02f0w\u0001"+
		"\u0000\u0000\u0000\u02f1\u02f6\u0003F#\u0000\u02f2\u02f3\u0005>\u0000"+
		"\u0000\u02f3\u02f5\u0003F#\u0000\u02f4\u02f2\u0001\u0000\u0000\u0000\u02f5"+
		"\u02f8\u0001\u0000\u0000\u0000\u02f6\u02f4\u0001\u0000\u0000\u0000\u02f6"+
		"\u02f7\u0001\u0000\u0000\u0000\u02f7\u02fa\u0001\u0000\u0000\u0000\u02f8"+
		"\u02f6\u0001\u0000\u0000\u0000\u02f9\u02fb\u0005>\u0000\u0000\u02fa\u02f9"+
		"\u0001\u0000\u0000\u0000\u02fa\u02fb\u0001\u0000\u0000\u0000\u02fby\u0001"+
		"\u0000\u0000\u0000\u02fc\u0301\u0005Z\u0000\u0000\u02fd\u02fe\u0005>\u0000"+
		"\u0000\u02fe\u0300\u0005Z\u0000\u0000\u02ff\u02fd\u0001\u0000\u0000\u0000"+
		"\u0300\u0303\u0001\u0000\u0000\u0000\u0301\u02ff\u0001\u0000\u0000\u0000"+
		"\u0301\u0302\u0001\u0000\u0000\u0000\u0302\u0305\u0001\u0000\u0000\u0000"+
		"\u0303\u0301\u0001\u0000\u0000\u0000\u0304\u0306\u0005>\u0000\u0000\u0305"+
		"\u0304\u0001\u0000\u0000\u0000\u0305\u0306\u0001\u0000\u0000\u0000\u0306"+
		"{\u0001\u0000\u0000\u0000\u0307\u030c\u0003l6\u0000\u0308\u0309\u0005"+
		">\u0000\u0000\u0309\u030b\u0003l6\u0000\u030a\u0308\u0001\u0000\u0000"+
		"\u0000\u030b\u030e\u0001\u0000\u0000\u0000\u030c\u030a\u0001\u0000\u0000"+
		"\u0000\u030c\u030d\u0001\u0000\u0000\u0000\u030d\u0310\u0001\u0000\u0000"+
		"\u0000\u030e\u030c\u0001\u0000\u0000\u0000\u030f\u0311\u0005>\u0000\u0000"+
		"\u0310\u030f\u0001\u0000\u0000\u0000\u0310\u0311\u0001\u0000\u0000\u0000"+
		"\u0311}\u0001\u0000\u0000\u0000\u0312\u0317\u0003n7\u0000\u0313\u0314"+
		"\u0005>\u0000\u0000\u0314\u0316\u0003n7\u0000\u0315\u0313\u0001\u0000"+
		"\u0000\u0000\u0316\u0319\u0001\u0000\u0000\u0000\u0317\u0315\u0001\u0000"+
		"\u0000\u0000\u0317\u0318\u0001\u0000\u0000\u0000\u0318\u031b\u0001\u0000"+
		"\u0000\u0000\u0319\u0317\u0001\u0000\u0000\u0000\u031a\u031c\u0005>\u0000"+
		"\u0000\u031b\u031a\u0001\u0000\u0000\u0000\u031b\u031c\u0001\u0000\u0000"+
		"\u0000\u031c\u007f\u0001\u0000\u0000\u0000^\u0081\u0086\u0093\u00b2\u00b4"+
		"\u00b8\u00be\u00c8\u00e5\u00f0\u00f5\u0101\u0107\u010e\u0115\u011b\u011e"+
		"\u0121\u0129\u012f\u0132\u0135\u0138\u013b\u0140\u0150\u0155\u0163\u016b"+
		"\u0177\u017b\u0183\u0187\u018f\u0192\u019b\u01a5\u01ad\u01b0\u01b4\u01b8"+
		"\u01c5\u01d3\u01d7\u01fc\u01fe\u0206\u020c\u0212\u0216\u021a\u0222\u0226"+
		"\u022d\u0232\u0236\u023a\u0242\u0247\u024b\u024f\u0251\u0259\u026a\u026c"+
		"\u0272\u0276\u027a\u027e\u0282\u028c\u028e\u0292\u02a4\u02b0\u02b6\u02bc"+
		"\u02be\u02c9\u02ce\u02d5\u02d9\u02e0\u02e4\u02eb\u02ef\u02f6\u02fa\u0301"+
		"\u0305\u030c\u0310\u0317\u031b";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}