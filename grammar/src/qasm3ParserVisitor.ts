// Generated from qasm3Parser.g4 by ANTLR 4.13.1

import {ParseTreeVisitor} from 'antlr4';


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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `qasm3Parser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class qasm3ParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `qasm3Parser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;
	/**
	 * Visit a parse tree produced by `qasm3Parser.version`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVersion?: (ctx: VersionContext) => Result;
	/**
	 * Visit a parse tree produced by `qasm3Parser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;
	/**
	 * Visit a parse tree produced by `qasm3Parser.annotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotation?: (ctx: AnnotationContext) => Result;
	/**
	 * Visit a parse tree produced by `qasm3Parser.scope`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScope?: (ctx: ScopeContext) => Result;
	/**
	 * Visit a parse tree produced by `qasm3Parser.pragma`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPragma?: (ctx: PragmaContext) => Result;
	/**
	 * Visit a parse tree produced by `qasm3Parser.statementOrScope`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatementOrScope?: (ctx: StatementOrScopeContext) => Result;
	/**
	 * Visit a parse tree produced by `qasm3Parser.calibrationGrammarStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCalibrationGrammarStatement?: (ctx: CalibrationGrammarStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `qasm3Parser.includeStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIncludeStatement?: (ctx: IncludeStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `qasm3Parser.breakStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBreakStatement?: (ctx: BreakStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `qasm3Parser.continueStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContinueStatement?: (ctx: ContinueStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `qasm3Parser.endStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEndStatement?: (ctx: EndStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `qasm3Parser.forStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForStatement?: (ctx: ForStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `qasm3Parser.ifStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStatement?: (ctx: IfStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `qasm3Parser.returnStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStatement?: (ctx: ReturnStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `qasm3Parser.whileStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileStatement?: (ctx: WhileStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `qasm3Parser.barrierStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBarrierStatement?: (ctx: BarrierStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `qasm3Parser.boxStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoxStatement?: (ctx: BoxStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `qasm3Parser.delayStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDelayStatement?: (ctx: DelayStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `qasm3Parser.gateCallStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGateCallStatement?: (ctx: GateCallStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `qasm3Parser.measureArrowAssignmentStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMeasureArrowAssignmentStatement?: (ctx: MeasureArrowAssignmentStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `qasm3Parser.resetStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResetStatement?: (ctx: ResetStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `qasm3Parser.aliasDeclarationStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAliasDeclarationStatement?: (ctx: AliasDeclarationStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `qasm3Parser.classicalDeclarationStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassicalDeclarationStatement?: (ctx: ClassicalDeclarationStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `qasm3Parser.constDeclarationStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstDeclarationStatement?: (ctx: ConstDeclarationStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `qasm3Parser.ioDeclarationStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIoDeclarationStatement?: (ctx: IoDeclarationStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `qasm3Parser.oldStyleDeclarationStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOldStyleDeclarationStatement?: (ctx: OldStyleDeclarationStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `qasm3Parser.quantumDeclarationStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuantumDeclarationStatement?: (ctx: QuantumDeclarationStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `qasm3Parser.defStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefStatement?: (ctx: DefStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `qasm3Parser.externStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExternStatement?: (ctx: ExternStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `qasm3Parser.gateStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGateStatement?: (ctx: GateStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `qasm3Parser.assignmentStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentStatement?: (ctx: AssignmentStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `qasm3Parser.expressionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionStatement?: (ctx: ExpressionStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `qasm3Parser.calStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCalStatement?: (ctx: CalStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `qasm3Parser.defcalStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefcalStatement?: (ctx: DefcalStatementContext) => Result;
	/**
	 * Visit a parse tree produced by the `bitwiseXorExpression`
	 * labeled alternative in `qasm3Parser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitwiseXorExpression?: (ctx: BitwiseXorExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `additiveExpression`
	 * labeled alternative in `qasm3Parser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditiveExpression?: (ctx: AdditiveExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `durationofExpression`
	 * labeled alternative in `qasm3Parser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDurationofExpression?: (ctx: DurationofExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `parenthesisExpression`
	 * labeled alternative in `qasm3Parser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesisExpression?: (ctx: ParenthesisExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `comparisonExpression`
	 * labeled alternative in `qasm3Parser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparisonExpression?: (ctx: ComparisonExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `multiplicativeExpression`
	 * labeled alternative in `qasm3Parser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `logicalOrExpression`
	 * labeled alternative in `qasm3Parser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `castExpression`
	 * labeled alternative in `qasm3Parser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCastExpression?: (ctx: CastExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `powerExpression`
	 * labeled alternative in `qasm3Parser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPowerExpression?: (ctx: PowerExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `bitwiseOrExpression`
	 * labeled alternative in `qasm3Parser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitwiseOrExpression?: (ctx: BitwiseOrExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `callExpression`
	 * labeled alternative in `qasm3Parser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCallExpression?: (ctx: CallExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `bitshiftExpression`
	 * labeled alternative in `qasm3Parser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitshiftExpression?: (ctx: BitshiftExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `bitwiseAndExpression`
	 * labeled alternative in `qasm3Parser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitwiseAndExpression?: (ctx: BitwiseAndExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `equalityExpression`
	 * labeled alternative in `qasm3Parser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqualityExpression?: (ctx: EqualityExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `logicalAndExpression`
	 * labeled alternative in `qasm3Parser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `indexExpression`
	 * labeled alternative in `qasm3Parser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndexExpression?: (ctx: IndexExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `unaryExpression`
	 * labeled alternative in `qasm3Parser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryExpression?: (ctx: UnaryExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `literalExpression`
	 * labeled alternative in `qasm3Parser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralExpression?: (ctx: LiteralExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `qasm3Parser.aliasExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAliasExpression?: (ctx: AliasExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `qasm3Parser.declarationExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclarationExpression?: (ctx: DeclarationExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `qasm3Parser.measureExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMeasureExpression?: (ctx: MeasureExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `qasm3Parser.rangeExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRangeExpression?: (ctx: RangeExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `qasm3Parser.setExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetExpression?: (ctx: SetExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `qasm3Parser.arrayLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayLiteral?: (ctx: ArrayLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by `qasm3Parser.indexOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndexOperator?: (ctx: IndexOperatorContext) => Result;
	/**
	 * Visit a parse tree produced by `qasm3Parser.indexedIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndexedIdentifier?: (ctx: IndexedIdentifierContext) => Result;
	/**
	 * Visit a parse tree produced by `qasm3Parser.returnSignature`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnSignature?: (ctx: ReturnSignatureContext) => Result;
	/**
	 * Visit a parse tree produced by `qasm3Parser.gateModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGateModifier?: (ctx: GateModifierContext) => Result;
	/**
	 * Visit a parse tree produced by `qasm3Parser.scalarType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScalarType?: (ctx: ScalarTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `qasm3Parser.qubitType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQubitType?: (ctx: QubitTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `qasm3Parser.arrayType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayType?: (ctx: ArrayTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `qasm3Parser.arrayReferenceType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayReferenceType?: (ctx: ArrayReferenceTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `qasm3Parser.designator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDesignator?: (ctx: DesignatorContext) => Result;
	/**
	 * Visit a parse tree produced by `qasm3Parser.defcalTarget`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefcalTarget?: (ctx: DefcalTargetContext) => Result;
	/**
	 * Visit a parse tree produced by `qasm3Parser.defcalArgumentDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefcalArgumentDefinition?: (ctx: DefcalArgumentDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by `qasm3Parser.defcalOperand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefcalOperand?: (ctx: DefcalOperandContext) => Result;
	/**
	 * Visit a parse tree produced by `qasm3Parser.gateOperand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGateOperand?: (ctx: GateOperandContext) => Result;
	/**
	 * Visit a parse tree produced by `qasm3Parser.externArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExternArgument?: (ctx: ExternArgumentContext) => Result;
	/**
	 * Visit a parse tree produced by `qasm3Parser.argumentDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgumentDefinition?: (ctx: ArgumentDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by `qasm3Parser.argumentDefinitionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgumentDefinitionList?: (ctx: ArgumentDefinitionListContext) => Result;
	/**
	 * Visit a parse tree produced by `qasm3Parser.defcalArgumentDefinitionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefcalArgumentDefinitionList?: (ctx: DefcalArgumentDefinitionListContext) => Result;
	/**
	 * Visit a parse tree produced by `qasm3Parser.defcalOperandList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefcalOperandList?: (ctx: DefcalOperandListContext) => Result;
	/**
	 * Visit a parse tree produced by `qasm3Parser.expressionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionList?: (ctx: ExpressionListContext) => Result;
	/**
	 * Visit a parse tree produced by `qasm3Parser.identifierList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierList?: (ctx: IdentifierListContext) => Result;
	/**
	 * Visit a parse tree produced by `qasm3Parser.gateOperandList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGateOperandList?: (ctx: GateOperandListContext) => Result;
	/**
	 * Visit a parse tree produced by `qasm3Parser.externArgumentList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExternArgumentList?: (ctx: ExternArgumentListContext) => Result;
}

