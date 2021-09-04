import { LoxtObject, TokenType } from './types/types';

class Token {
  type: TokenType;
  lexeme: string;
  literal: LoxtObject;
  line: number;

  constructor(type: TokenType, lexeme: string, literal: LoxtObject, line: number) {
    this.type = type;
    this.lexeme = lexeme;
    this.literal = literal;
    this.line = line;
  }

  public toString(): string {
    return this.type + ' ' + this.lexeme + ' ' + this.literal;
  }
}

export default Token;
