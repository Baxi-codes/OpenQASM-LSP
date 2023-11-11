// Generated from qasm3Parser.g4 by ANTLR 4.13.1

import {ParseTreeListener} from "antlr4";


import { ProgramContext } from "./qasm3Parser";
import { VersionContext } from "./qasm3Parser";
import { StatementContext } from "./qasm3Parser";
import { AnnotationContext } from "./qasm3Parser";
import { ScopeContext } from "./qasm3Parser";
import { PragmaContext } from "./qasm3Parser";
import { StatementOrScopeContext } from "./qasm3Parser";
import { CalibrationGrammarStatementContext } from "./qasm3Parser";
import { IncludeStatementContext } from "./qasm3Parser";
import { BreakStatementContext } from "./qasm3Parser";
import { ContinueStatementContext } from "./qasm3Parser";
import { EndStatementContext } from "./qasm3Parser";
import { ForStatementContext } from "./qasm3Parser";
import { IfStatementContext } from "./qasm3Parser";
import { ReturnStatementContext } from "./qasm3Parser";
import { WhileStatementContext } from "./qasm3Parser";
import { BarrierStatementContext } from "./qasm3Parser";
import { BoxStatementContext } from "./qasm3Parser";
import { DelayStatementContext } from "./qasm3Parser";
import { GateCallStatementContext } from "./qasm3Parser";
import { MeasureArrowAssignmentStatementContext } from "./qasm3Parser";
import { ResetStatementContext } from "./qasm3Parser";
import { AliasDeclarationStatementContext } from "./qasm3Parser";
import { ClassicalDeclarationStatementContext } from "./qasm3Parser";
import { ConstDeclarationStatementContext } from "./qasm3Parser";
import { IoDeclarationStatementContext } from "./qasm3Parser";
import { OldStyleDeclarationStatementContext } from "./qasm3Parser";
import { QuantumDeclarationStatementContext } from "./qasm3Parser";
import { DefStatementContext } from "./qasm3Parser";
import { ExternStatementContext } from "./qasm3Parser";
import { GateStatementContext } from "./qasm3Parser";
import { AssignmentStatementContext } from "./qasm3Parser";
import { ExpressionStatementContext } from "./qasm3Parser";
import { CalStatementContext } from "./qasm3Parser";
import { DefcalStatementContext } from "./qasm3Parser";
import { BitwiseXorExpressionContext } from "./qasm3Parser";
import { AdditiveExpressionContext } from "./qasm3Parser";
import { DurationofExpressionContext } from "./qasm3Parser";
import { ParenthesisExpressionContext } from "./qasm3Parser";
import { ComparisonExpressionContext } from "./qasm3Parser";
import { MultiplicativeExpressionContext } from "./qasm3Parser";
import { LogicalOrExpressionContext } from "./qasm3Parser";
import { CastExpressionContext } from "./qasm3Parser";
import { PowerExpressionContext } from "./qasm3Parser";
import { BitwiseOrExpressionContext } from "./qasm3Parser";
import { CallExpressionContext } from "./qasm3Parser";
import { BitshiftExpressionContext } from "./qasm3Parser";
import { BitwiseAndExpressionContext } from "./qasm3Parser";
import { EqualityExpressionContext } from "./qasm3Parser";
import { LogicalAndExpressionContext } from "./qasm3Parser";
import { IndexExpressionContext } from "./qasm3Parser";
import { UnaryExpressionContext } from "./qasm3Parser";
import { LiteralExpressionContext } from "./qasm3Parser";
import { AliasExpressionContext } from "./qasm3Parser";
import { DeclarationExpressionContext } from "./qasm3Parser";
import { MeasureExpressionContext } from "./qasm3Parser";
import { RangeExpressionContext } from "./qasm3Parser";
import { SetExpressionContext } from "./qasm3Parser";
import { ArrayLiteralContext } from "./qasm3Parser";
import { IndexOperatorContext } from "./qasm3Parser";
import { IndexedIdentifierContext } from "./qasm3Parser";
import { ReturnSignatureContext } from "./qasm3Parser";
import { GateModifierContext } from "./qasm3Parser";
import { ScalarTypeContext } from "./qasm3Parser";
import { QubitTypeContext } from "./qasm3Parser";
import { ArrayTypeContext } from "./qasm3Parser";
import { ArrayReferenceTypeContext } from "./qasm3Parser";
import { DesignatorContext } from "./qasm3Parser";
import { DefcalTargetContext } from "./qasm3Parser";
import { DefcalArgumentDefinitionContext } from "./qasm3Parser";
import { DefcalOperandContext } from "./qasm3Parser";
import { GateOperandContext } from "./qasm3Parser";
import { ExternArgumentContext } from "./qasm3Parser";
import { ArgumentDefinitionContext } from "./qasm3Parser";
import { ArgumentDefinitionListContext } from "./qasm3Parser";
import { DefcalArgumentDefinitionListContext } from "./qasm3Parser";
import { DefcalOperandListContext } from "./qasm3Parser";
import { ExpressionListContext } from "./qasm3Parser";
import { IdentifierListContext } from "./qasm3Parser";
import { GateOperandListContext } from "./qasm3Parser";
import { ExternArgumentListContext } from "./qasm3Parser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `qasm3Parser`.
 */
export default class qasm3ParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `qasm3Parser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `qasm3Parser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;
	/**
	 * Enter a parse tree produced by `qasm3Parser.version`.
	 * @param ctx the parse tree
	 */
	enterVersion?: (ctx: VersionContext) => void;
	/**
	 * Exit a parse tree produced by `qasm3Parser.version`.
	 * @param ctx the parse tree
	 */
	exitVersion?: (ctx: VersionContext) => void;
	/**
	 * Enter a parse tree produced by `qasm3Parser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `qasm3Parser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;
	/**
	 * Enter a parse tree produced by `qasm3Parser.annotation`.
	 * @param ctx the parse tree
	 */
	enterAnnotation?: (ctx: AnnotationContext) => void;
	/**
	 * Exit a parse tree produced by `qasm3Parser.annotation`.
	 * @param ctx the parse tree
	 */
	exitAnnotation?: (ctx: AnnotationContext) => void;
	/**
	 * Enter a parse tree produced by `qasm3Parser.scope`.
	 * @param ctx the parse tree
	 */
	enterScope?: (ctx: ScopeContext) => void;
	/**
	 * Exit a parse tree produced by `qasm3Parser.scope`.
	 * @param ctx the parse tree
	 */
	exitScope?: (ctx: ScopeContext) => void;
	/**
	 * Enter a parse tree produced by `qasm3Parser.pragma`.
	 * @param ctx the parse tree
	 */
	enterPragma?: (ctx: PragmaContext) => void;
	/**
	 * Exit a parse tree produced by `qasm3Parser.pragma`.
	 * @param ctx the parse tree
	 */
	exitPragma?: (ctx: PragmaContext) => void;
	/**
	 * Enter a parse tree produced by `qasm3Parser.statementOrScope`.
	 * @param ctx the parse tree
	 */
	enterStatementOrScope?: (ctx: StatementOrScopeContext) => void;
	/**
	 * Exit a parse tree produced by `qasm3Parser.statementOrScope`.
	 * @param ctx the parse tree
	 */
	exitStatementOrScope?: (ctx: StatementOrScopeContext) => void;
	/**
	 * Enter a parse tree produced by `qasm3Parser.calibrationGrammarStatement`.
	 * @param ctx the parse tree
	 */
	enterCalibrationGrammarStatement?: (ctx: CalibrationGrammarStatementContext) => void;
	/**
	 * Exit a parse tree produced by `qasm3Parser.calibrationGrammarStatement`.
	 * @param ctx the parse tree
	 */
	exitCalibrationGrammarStatement?: (ctx: CalibrationGrammarStatementContext) => void;
	/**
	 * Enter a parse tree produced by `qasm3Parser.includeStatement`.
	 * @param ctx the parse tree
	 */
	enterIncludeStatement?: (ctx: IncludeStatementContext) => void;
	/**
	 * Exit a parse tree produced by `qasm3Parser.includeStatement`.
	 * @param ctx the parse tree
	 */
	exitIncludeStatement?: (ctx: IncludeStatementContext) => void;
	/**
	 * Enter a parse tree produced by `qasm3Parser.breakStatement`.
	 * @param ctx the parse tree
	 */
	enterBreakStatement?: (ctx: BreakStatementContext) => void;
	/**
	 * Exit a parse tree produced by `qasm3Parser.breakStatement`.
	 * @param ctx the parse tree
	 */
	exitBreakStatement?: (ctx: BreakStatementContext) => void;
	/**
	 * Enter a parse tree produced by `qasm3Parser.continueStatement`.
	 * @param ctx the parse tree
	 */
	enterContinueStatement?: (ctx: ContinueStatementContext) => void;
	/**
	 * Exit a parse tree produced by `qasm3Parser.continueStatement`.
	 * @param ctx the parse tree
	 */
	exitContinueStatement?: (ctx: ContinueStatementContext) => void;
	/**
	 * Enter a parse tree produced by `qasm3Parser.endStatement`.
	 * @param ctx the parse tree
	 */
	enterEndStatement?: (ctx: EndStatementContext) => void;
	/**
	 * Exit a parse tree produced by `qasm3Parser.endStatement`.
	 * @param ctx the parse tree
	 */
	exitEndStatement?: (ctx: EndStatementContext) => void;
	/**
	 * Enter a parse tree produced by `qasm3Parser.forStatement`.
	 * @param ctx the parse tree
	 */
	enterForStatement?: (ctx: ForStatementContext) => void;
	/**
	 * Exit a parse tree produced by `qasm3Parser.forStatement`.
	 * @param ctx the parse tree
	 */
	exitForStatement?: (ctx: ForStatementContext) => void;
	/**
	 * Enter a parse tree produced by `qasm3Parser.ifStatement`.
	 * @param ctx the parse tree
	 */
	enterIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Exit a parse tree produced by `qasm3Parser.ifStatement`.
	 * @param ctx the parse tree
	 */
	exitIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Enter a parse tree produced by `qasm3Parser.returnStatement`.
	 * @param ctx the parse tree
	 */
	enterReturnStatement?: (ctx: ReturnStatementContext) => void;
	/**
	 * Exit a parse tree produced by `qasm3Parser.returnStatement`.
	 * @param ctx the parse tree
	 */
	exitReturnStatement?: (ctx: ReturnStatementContext) => void;
	/**
	 * Enter a parse tree produced by `qasm3Parser.whileStatement`.
	 * @param ctx the parse tree
	 */
	enterWhileStatement?: (ctx: WhileStatementContext) => void;
	/**
	 * Exit a parse tree produced by `qasm3Parser.whileStatement`.
	 * @param ctx the parse tree
	 */
	exitWhileStatement?: (ctx: WhileStatementContext) => void;
	/**
	 * Enter a parse tree produced by `qasm3Parser.barrierStatement`.
	 * @param ctx the parse tree
	 */
	enterBarrierStatement?: (ctx: BarrierStatementContext) => void;
	/**
	 * Exit a parse tree produced by `qasm3Parser.barrierStatement`.
	 * @param ctx the parse tree
	 */
	exitBarrierStatement?: (ctx: BarrierStatementContext) => void;
	/**
	 * Enter a parse tree produced by `qasm3Parser.boxStatement`.
	 * @param ctx the parse tree
	 */
	enterBoxStatement?: (ctx: BoxStatementContext) => void;
	/**
	 * Exit a parse tree produced by `qasm3Parser.boxStatement`.
	 * @param ctx the parse tree
	 */
	exitBoxStatement?: (ctx: BoxStatementContext) => void;
	/**
	 * Enter a parse tree produced by `qasm3Parser.delayStatement`.
	 * @param ctx the parse tree
	 */
	enterDelayStatement?: (ctx: DelayStatementContext) => void;
	/**
	 * Exit a parse tree produced by `qasm3Parser.delayStatement`.
	 * @param ctx the parse tree
	 */
	exitDelayStatement?: (ctx: DelayStatementContext) => void;
	/**
	 * Enter a parse tree produced by `qasm3Parser.gateCallStatement`.
	 * @param ctx the parse tree
	 */
	enterGateCallStatement?: (ctx: GateCallStatementContext) => void;
	/**
	 * Exit a parse tree produced by `qasm3Parser.gateCallStatement`.
	 * @param ctx the parse tree
	 */
	exitGateCallStatement?: (ctx: GateCallStatementContext) => void;
	/**
	 * Enter a parse tree produced by `qasm3Parser.measureArrowAssignmentStatement`.
	 * @param ctx the parse tree
	 */
	enterMeasureArrowAssignmentStatement?: (ctx: MeasureArrowAssignmentStatementContext) => void;
	/**
	 * Exit a parse tree produced by `qasm3Parser.measureArrowAssignmentStatement`.
	 * @param ctx the parse tree
	 */
	exitMeasureArrowAssignmentStatement?: (ctx: MeasureArrowAssignmentStatementContext) => void;
	/**
	 * Enter a parse tree produced by `qasm3Parser.resetStatement`.
	 * @param ctx the parse tree
	 */
	enterResetStatement?: (ctx: ResetStatementContext) => void;
	/**
	 * Exit a parse tree produced by `qasm3Parser.resetStatement`.
	 * @param ctx the parse tree
	 */
	exitResetStatement?: (ctx: ResetStatementContext) => void;
	/**
	 * Enter a parse tree produced by `qasm3Parser.aliasDeclarationStatement`.
	 * @param ctx the parse tree
	 */
	enterAliasDeclarationStatement?: (ctx: AliasDeclarationStatementContext) => void;
	/**
	 * Exit a parse tree produced by `qasm3Parser.aliasDeclarationStatement`.
	 * @param ctx the parse tree
	 */
	exitAliasDeclarationStatement?: (ctx: AliasDeclarationStatementContext) => void;
	/**
	 * Enter a parse tree produced by `qasm3Parser.classicalDeclarationStatement`.
	 * @param ctx the parse tree
	 */
	enterClassicalDeclarationStatement?: (ctx: ClassicalDeclarationStatementContext) => void;
	/**
	 * Exit a parse tree produced by `qasm3Parser.classicalDeclarationStatement`.
	 * @param ctx the parse tree
	 */
	exitClassicalDeclarationStatement?: (ctx: ClassicalDeclarationStatementContext) => void;
	/**
	 * Enter a parse tree produced by `qasm3Parser.constDeclarationStatement`.
	 * @param ctx the parse tree
	 */
	enterConstDeclarationStatement?: (ctx: ConstDeclarationStatementContext) => void;
	/**
	 * Exit a parse tree produced by `qasm3Parser.constDeclarationStatement`.
	 * @param ctx the parse tree
	 */
	exitConstDeclarationStatement?: (ctx: ConstDeclarationStatementContext) => void;
	/**
	 * Enter a parse tree produced by `qasm3Parser.ioDeclarationStatement`.
	 * @param ctx the parse tree
	 */
	enterIoDeclarationStatement?: (ctx: IoDeclarationStatementContext) => void;
	/**
	 * Exit a parse tree produced by `qasm3Parser.ioDeclarationStatement`.
	 * @param ctx the parse tree
	 */
	exitIoDeclarationStatement?: (ctx: IoDeclarationStatementContext) => void;
	/**
	 * Enter a parse tree produced by `qasm3Parser.oldStyleDeclarationStatement`.
	 * @param ctx the parse tree
	 */
	enterOldStyleDeclarationStatement?: (ctx: OldStyleDeclarationStatementContext) => void;
	/**
	 * Exit a parse tree produced by `qasm3Parser.oldStyleDeclarationStatement`.
	 * @param ctx the parse tree
	 */
	exitOldStyleDeclarationStatement?: (ctx: OldStyleDeclarationStatementContext) => void;
	/**
	 * Enter a parse tree produced by `qasm3Parser.quantumDeclarationStatement`.
	 * @param ctx the parse tree
	 */
	enterQuantumDeclarationStatement?: (ctx: QuantumDeclarationStatementContext) => void;
	/**
	 * Exit a parse tree produced by `qasm3Parser.quantumDeclarationStatement`.
	 * @param ctx the parse tree
	 */
	exitQuantumDeclarationStatement?: (ctx: QuantumDeclarationStatementContext) => void;
	/**
	 * Enter a parse tree produced by `qasm3Parser.defStatement`.
	 * @param ctx the parse tree
	 */
	enterDefStatement?: (ctx: DefStatementContext) => void;
	/**
	 * Exit a parse tree produced by `qasm3Parser.defStatement`.
	 * @param ctx the parse tree
	 */
	exitDefStatement?: (ctx: DefStatementContext) => void;
	/**
	 * Enter a parse tree produced by `qasm3Parser.externStatement`.
	 * @param ctx the parse tree
	 */
	enterExternStatement?: (ctx: ExternStatementContext) => void;
	/**
	 * Exit a parse tree produced by `qasm3Parser.externStatement`.
	 * @param ctx the parse tree
	 */
	exitExternStatement?: (ctx: ExternStatementContext) => void;
	/**
	 * Enter a parse tree produced by `qasm3Parser.gateStatement`.
	 * @param ctx the parse tree
	 */
	enterGateStatement?: (ctx: GateStatementContext) => void;
	/**
	 * Exit a parse tree produced by `qasm3Parser.gateStatement`.
	 * @param ctx the parse tree
	 */
	exitGateStatement?: (ctx: GateStatementContext) => void;
	/**
	 * Enter a parse tree produced by `qasm3Parser.assignmentStatement`.
	 * @param ctx the parse tree
	 */
	enterAssignmentStatement?: (ctx: AssignmentStatementContext) => void;
	/**
	 * Exit a parse tree produced by `qasm3Parser.assignmentStatement`.
	 * @param ctx the parse tree
	 */
	exitAssignmentStatement?: (ctx: AssignmentStatementContext) => void;
	/**
	 * Enter a parse tree produced by `qasm3Parser.expressionStatement`.
	 * @param ctx the parse tree
	 */
	enterExpressionStatement?: (ctx: ExpressionStatementContext) => void;
	/**
	 * Exit a parse tree produced by `qasm3Parser.expressionStatement`.
	 * @param ctx the parse tree
	 */
	exitExpressionStatement?: (ctx: ExpressionStatementContext) => void;
	/**
	 * Enter a parse tree produced by `qasm3Parser.calStatement`.
	 * @param ctx the parse tree
	 */
	enterCalStatement?: (ctx: CalStatementContext) => void;
	/**
	 * Exit a parse tree produced by `qasm3Parser.calStatement`.
	 * @param ctx the parse tree
	 */
	exitCalStatement?: (ctx: CalStatementContext) => void;
	/**
	 * Enter a parse tree produced by `qasm3Parser.defcalStatement`.
	 * @param ctx the parse tree
	 */
	enterDefcalStatement?: (ctx: DefcalStatementContext) => void;
	/**
	 * Exit a parse tree produced by `qasm3Parser.defcalStatement`.
	 * @param ctx the parse tree
	 */
	exitDefcalStatement?: (ctx: DefcalStatementContext) => void;
	/**
	 * Enter a parse tree produced by the `bitwiseXorExpression`
	 * labeled alternative in `qasm3Parser.expression`.
	 * @param ctx the parse tree
	 */
	enterBitwiseXorExpression?: (ctx: BitwiseXorExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `bitwiseXorExpression`
	 * labeled alternative in `qasm3Parser.expression`.
	 * @param ctx the parse tree
	 */
	exitBitwiseXorExpression?: (ctx: BitwiseXorExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `additiveExpression`
	 * labeled alternative in `qasm3Parser.expression`.
	 * @param ctx the parse tree
	 */
	enterAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `additiveExpression`
	 * labeled alternative in `qasm3Parser.expression`.
	 * @param ctx the parse tree
	 */
	exitAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `durationofExpression`
	 * labeled alternative in `qasm3Parser.expression`.
	 * @param ctx the parse tree
	 */
	enterDurationofExpression?: (ctx: DurationofExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `durationofExpression`
	 * labeled alternative in `qasm3Parser.expression`.
	 * @param ctx the parse tree
	 */
	exitDurationofExpression?: (ctx: DurationofExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `parenthesisExpression`
	 * labeled alternative in `qasm3Parser.expression`.
	 * @param ctx the parse tree
	 */
	enterParenthesisExpression?: (ctx: ParenthesisExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `parenthesisExpression`
	 * labeled alternative in `qasm3Parser.expression`.
	 * @param ctx the parse tree
	 */
	exitParenthesisExpression?: (ctx: ParenthesisExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `comparisonExpression`
	 * labeled alternative in `qasm3Parser.expression`.
	 * @param ctx the parse tree
	 */
	enterComparisonExpression?: (ctx: ComparisonExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `comparisonExpression`
	 * labeled alternative in `qasm3Parser.expression`.
	 * @param ctx the parse tree
	 */
	exitComparisonExpression?: (ctx: ComparisonExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `multiplicativeExpression`
	 * labeled alternative in `qasm3Parser.expression`.
	 * @param ctx the parse tree
	 */
	enterMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `multiplicativeExpression`
	 * labeled alternative in `qasm3Parser.expression`.
	 * @param ctx the parse tree
	 */
	exitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `logicalOrExpression`
	 * labeled alternative in `qasm3Parser.expression`.
	 * @param ctx the parse tree
	 */
	enterLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `logicalOrExpression`
	 * labeled alternative in `qasm3Parser.expression`.
	 * @param ctx the parse tree
	 */
	exitLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `castExpression`
	 * labeled alternative in `qasm3Parser.expression`.
	 * @param ctx the parse tree
	 */
	enterCastExpression?: (ctx: CastExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `castExpression`
	 * labeled alternative in `qasm3Parser.expression`.
	 * @param ctx the parse tree
	 */
	exitCastExpression?: (ctx: CastExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `powerExpression`
	 * labeled alternative in `qasm3Parser.expression`.
	 * @param ctx the parse tree
	 */
	enterPowerExpression?: (ctx: PowerExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `powerExpression`
	 * labeled alternative in `qasm3Parser.expression`.
	 * @param ctx the parse tree
	 */
	exitPowerExpression?: (ctx: PowerExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `bitwiseOrExpression`
	 * labeled alternative in `qasm3Parser.expression`.
	 * @param ctx the parse tree
	 */
	enterBitwiseOrExpression?: (ctx: BitwiseOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `bitwiseOrExpression`
	 * labeled alternative in `qasm3Parser.expression`.
	 * @param ctx the parse tree
	 */
	exitBitwiseOrExpression?: (ctx: BitwiseOrExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `callExpression`
	 * labeled alternative in `qasm3Parser.expression`.
	 * @param ctx the parse tree
	 */
	enterCallExpression?: (ctx: CallExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `callExpression`
	 * labeled alternative in `qasm3Parser.expression`.
	 * @param ctx the parse tree
	 */
	exitCallExpression?: (ctx: CallExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `bitshiftExpression`
	 * labeled alternative in `qasm3Parser.expression`.
	 * @param ctx the parse tree
	 */
	enterBitshiftExpression?: (ctx: BitshiftExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `bitshiftExpression`
	 * labeled alternative in `qasm3Parser.expression`.
	 * @param ctx the parse tree
	 */
	exitBitshiftExpression?: (ctx: BitshiftExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `bitwiseAndExpression`
	 * labeled alternative in `qasm3Parser.expression`.
	 * @param ctx the parse tree
	 */
	enterBitwiseAndExpression?: (ctx: BitwiseAndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `bitwiseAndExpression`
	 * labeled alternative in `qasm3Parser.expression`.
	 * @param ctx the parse tree
	 */
	exitBitwiseAndExpression?: (ctx: BitwiseAndExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `equalityExpression`
	 * labeled alternative in `qasm3Parser.expression`.
	 * @param ctx the parse tree
	 */
	enterEqualityExpression?: (ctx: EqualityExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `equalityExpression`
	 * labeled alternative in `qasm3Parser.expression`.
	 * @param ctx the parse tree
	 */
	exitEqualityExpression?: (ctx: EqualityExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `logicalAndExpression`
	 * labeled alternative in `qasm3Parser.expression`.
	 * @param ctx the parse tree
	 */
	enterLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `logicalAndExpression`
	 * labeled alternative in `qasm3Parser.expression`.
	 * @param ctx the parse tree
	 */
	exitLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `indexExpression`
	 * labeled alternative in `qasm3Parser.expression`.
	 * @param ctx the parse tree
	 */
	enterIndexExpression?: (ctx: IndexExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `indexExpression`
	 * labeled alternative in `qasm3Parser.expression`.
	 * @param ctx the parse tree
	 */
	exitIndexExpression?: (ctx: IndexExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `unaryExpression`
	 * labeled alternative in `qasm3Parser.expression`.
	 * @param ctx the parse tree
	 */
	enterUnaryExpression?: (ctx: UnaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `unaryExpression`
	 * labeled alternative in `qasm3Parser.expression`.
	 * @param ctx the parse tree
	 */
	exitUnaryExpression?: (ctx: UnaryExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `literalExpression`
	 * labeled alternative in `qasm3Parser.expression`.
	 * @param ctx the parse tree
	 */
	enterLiteralExpression?: (ctx: LiteralExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `literalExpression`
	 * labeled alternative in `qasm3Parser.expression`.
	 * @param ctx the parse tree
	 */
	exitLiteralExpression?: (ctx: LiteralExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `qasm3Parser.aliasExpression`.
	 * @param ctx the parse tree
	 */
	enterAliasExpression?: (ctx: AliasExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `qasm3Parser.aliasExpression`.
	 * @param ctx the parse tree
	 */
	exitAliasExpression?: (ctx: AliasExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `qasm3Parser.declarationExpression`.
	 * @param ctx the parse tree
	 */
	enterDeclarationExpression?: (ctx: DeclarationExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `qasm3Parser.declarationExpression`.
	 * @param ctx the parse tree
	 */
	exitDeclarationExpression?: (ctx: DeclarationExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `qasm3Parser.measureExpression`.
	 * @param ctx the parse tree
	 */
	enterMeasureExpression?: (ctx: MeasureExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `qasm3Parser.measureExpression`.
	 * @param ctx the parse tree
	 */
	exitMeasureExpression?: (ctx: MeasureExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `qasm3Parser.rangeExpression`.
	 * @param ctx the parse tree
	 */
	enterRangeExpression?: (ctx: RangeExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `qasm3Parser.rangeExpression`.
	 * @param ctx the parse tree
	 */
	exitRangeExpression?: (ctx: RangeExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `qasm3Parser.setExpression`.
	 * @param ctx the parse tree
	 */
	enterSetExpression?: (ctx: SetExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `qasm3Parser.setExpression`.
	 * @param ctx the parse tree
	 */
	exitSetExpression?: (ctx: SetExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `qasm3Parser.arrayLiteral`.
	 * @param ctx the parse tree
	 */
	enterArrayLiteral?: (ctx: ArrayLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `qasm3Parser.arrayLiteral`.
	 * @param ctx the parse tree
	 */
	exitArrayLiteral?: (ctx: ArrayLiteralContext) => void;
	/**
	 * Enter a parse tree produced by `qasm3Parser.indexOperator`.
	 * @param ctx the parse tree
	 */
	enterIndexOperator?: (ctx: IndexOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `qasm3Parser.indexOperator`.
	 * @param ctx the parse tree
	 */
	exitIndexOperator?: (ctx: IndexOperatorContext) => void;
	/**
	 * Enter a parse tree produced by `qasm3Parser.indexedIdentifier`.
	 * @param ctx the parse tree
	 */
	enterIndexedIdentifier?: (ctx: IndexedIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `qasm3Parser.indexedIdentifier`.
	 * @param ctx the parse tree
	 */
	exitIndexedIdentifier?: (ctx: IndexedIdentifierContext) => void;
	/**
	 * Enter a parse tree produced by `qasm3Parser.returnSignature`.
	 * @param ctx the parse tree
	 */
	enterReturnSignature?: (ctx: ReturnSignatureContext) => void;
	/**
	 * Exit a parse tree produced by `qasm3Parser.returnSignature`.
	 * @param ctx the parse tree
	 */
	exitReturnSignature?: (ctx: ReturnSignatureContext) => void;
	/**
	 * Enter a parse tree produced by `qasm3Parser.gateModifier`.
	 * @param ctx the parse tree
	 */
	enterGateModifier?: (ctx: GateModifierContext) => void;
	/**
	 * Exit a parse tree produced by `qasm3Parser.gateModifier`.
	 * @param ctx the parse tree
	 */
	exitGateModifier?: (ctx: GateModifierContext) => void;
	/**
	 * Enter a parse tree produced by `qasm3Parser.scalarType`.
	 * @param ctx the parse tree
	 */
	enterScalarType?: (ctx: ScalarTypeContext) => void;
	/**
	 * Exit a parse tree produced by `qasm3Parser.scalarType`.
	 * @param ctx the parse tree
	 */
	exitScalarType?: (ctx: ScalarTypeContext) => void;
	/**
	 * Enter a parse tree produced by `qasm3Parser.qubitType`.
	 * @param ctx the parse tree
	 */
	enterQubitType?: (ctx: QubitTypeContext) => void;
	/**
	 * Exit a parse tree produced by `qasm3Parser.qubitType`.
	 * @param ctx the parse tree
	 */
	exitQubitType?: (ctx: QubitTypeContext) => void;
	/**
	 * Enter a parse tree produced by `qasm3Parser.arrayType`.
	 * @param ctx the parse tree
	 */
	enterArrayType?: (ctx: ArrayTypeContext) => void;
	/**
	 * Exit a parse tree produced by `qasm3Parser.arrayType`.
	 * @param ctx the parse tree
	 */
	exitArrayType?: (ctx: ArrayTypeContext) => void;
	/**
	 * Enter a parse tree produced by `qasm3Parser.arrayReferenceType`.
	 * @param ctx the parse tree
	 */
	enterArrayReferenceType?: (ctx: ArrayReferenceTypeContext) => void;
	/**
	 * Exit a parse tree produced by `qasm3Parser.arrayReferenceType`.
	 * @param ctx the parse tree
	 */
	exitArrayReferenceType?: (ctx: ArrayReferenceTypeContext) => void;
	/**
	 * Enter a parse tree produced by `qasm3Parser.designator`.
	 * @param ctx the parse tree
	 */
	enterDesignator?: (ctx: DesignatorContext) => void;
	/**
	 * Exit a parse tree produced by `qasm3Parser.designator`.
	 * @param ctx the parse tree
	 */
	exitDesignator?: (ctx: DesignatorContext) => void;
	/**
	 * Enter a parse tree produced by `qasm3Parser.defcalTarget`.
	 * @param ctx the parse tree
	 */
	enterDefcalTarget?: (ctx: DefcalTargetContext) => void;
	/**
	 * Exit a parse tree produced by `qasm3Parser.defcalTarget`.
	 * @param ctx the parse tree
	 */
	exitDefcalTarget?: (ctx: DefcalTargetContext) => void;
	/**
	 * Enter a parse tree produced by `qasm3Parser.defcalArgumentDefinition`.
	 * @param ctx the parse tree
	 */
	enterDefcalArgumentDefinition?: (ctx: DefcalArgumentDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `qasm3Parser.defcalArgumentDefinition`.
	 * @param ctx the parse tree
	 */
	exitDefcalArgumentDefinition?: (ctx: DefcalArgumentDefinitionContext) => void;
	/**
	 * Enter a parse tree produced by `qasm3Parser.defcalOperand`.
	 * @param ctx the parse tree
	 */
	enterDefcalOperand?: (ctx: DefcalOperandContext) => void;
	/**
	 * Exit a parse tree produced by `qasm3Parser.defcalOperand`.
	 * @param ctx the parse tree
	 */
	exitDefcalOperand?: (ctx: DefcalOperandContext) => void;
	/**
	 * Enter a parse tree produced by `qasm3Parser.gateOperand`.
	 * @param ctx the parse tree
	 */
	enterGateOperand?: (ctx: GateOperandContext) => void;
	/**
	 * Exit a parse tree produced by `qasm3Parser.gateOperand`.
	 * @param ctx the parse tree
	 */
	exitGateOperand?: (ctx: GateOperandContext) => void;
	/**
	 * Enter a parse tree produced by `qasm3Parser.externArgument`.
	 * @param ctx the parse tree
	 */
	enterExternArgument?: (ctx: ExternArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `qasm3Parser.externArgument`.
	 * @param ctx the parse tree
	 */
	exitExternArgument?: (ctx: ExternArgumentContext) => void;
	/**
	 * Enter a parse tree produced by `qasm3Parser.argumentDefinition`.
	 * @param ctx the parse tree
	 */
	enterArgumentDefinition?: (ctx: ArgumentDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `qasm3Parser.argumentDefinition`.
	 * @param ctx the parse tree
	 */
	exitArgumentDefinition?: (ctx: ArgumentDefinitionContext) => void;
	/**
	 * Enter a parse tree produced by `qasm3Parser.argumentDefinitionList`.
	 * @param ctx the parse tree
	 */
	enterArgumentDefinitionList?: (ctx: ArgumentDefinitionListContext) => void;
	/**
	 * Exit a parse tree produced by `qasm3Parser.argumentDefinitionList`.
	 * @param ctx the parse tree
	 */
	exitArgumentDefinitionList?: (ctx: ArgumentDefinitionListContext) => void;
	/**
	 * Enter a parse tree produced by `qasm3Parser.defcalArgumentDefinitionList`.
	 * @param ctx the parse tree
	 */
	enterDefcalArgumentDefinitionList?: (ctx: DefcalArgumentDefinitionListContext) => void;
	/**
	 * Exit a parse tree produced by `qasm3Parser.defcalArgumentDefinitionList`.
	 * @param ctx the parse tree
	 */
	exitDefcalArgumentDefinitionList?: (ctx: DefcalArgumentDefinitionListContext) => void;
	/**
	 * Enter a parse tree produced by `qasm3Parser.defcalOperandList`.
	 * @param ctx the parse tree
	 */
	enterDefcalOperandList?: (ctx: DefcalOperandListContext) => void;
	/**
	 * Exit a parse tree produced by `qasm3Parser.defcalOperandList`.
	 * @param ctx the parse tree
	 */
	exitDefcalOperandList?: (ctx: DefcalOperandListContext) => void;
	/**
	 * Enter a parse tree produced by `qasm3Parser.expressionList`.
	 * @param ctx the parse tree
	 */
	enterExpressionList?: (ctx: ExpressionListContext) => void;
	/**
	 * Exit a parse tree produced by `qasm3Parser.expressionList`.
	 * @param ctx the parse tree
	 */
	exitExpressionList?: (ctx: ExpressionListContext) => void;
	/**
	 * Enter a parse tree produced by `qasm3Parser.identifierList`.
	 * @param ctx the parse tree
	 */
	enterIdentifierList?: (ctx: IdentifierListContext) => void;
	/**
	 * Exit a parse tree produced by `qasm3Parser.identifierList`.
	 * @param ctx the parse tree
	 */
	exitIdentifierList?: (ctx: IdentifierListContext) => void;
	/**
	 * Enter a parse tree produced by `qasm3Parser.gateOperandList`.
	 * @param ctx the parse tree
	 */
	enterGateOperandList?: (ctx: GateOperandListContext) => void;
	/**
	 * Exit a parse tree produced by `qasm3Parser.gateOperandList`.
	 * @param ctx the parse tree
	 */
	exitGateOperandList?: (ctx: GateOperandListContext) => void;
	/**
	 * Enter a parse tree produced by `qasm3Parser.externArgumentList`.
	 * @param ctx the parse tree
	 */
	enterExternArgumentList?: (ctx: ExternArgumentListContext) => void;
	/**
	 * Exit a parse tree produced by `qasm3Parser.externArgumentList`.
	 * @param ctx the parse tree
	 */
	exitExternArgumentList?: (ctx: ExternArgumentListContext) => void;
}

