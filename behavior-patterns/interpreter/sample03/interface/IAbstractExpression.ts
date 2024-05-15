export interface IAbstractExpression {
  value?: number;
  left?: IAbstractExpression;
  right?: IAbstractExpression;

  interpret(): number;
}
