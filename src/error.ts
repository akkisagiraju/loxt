class ErrorReporter {
  hadError = false;

  public error(message: string, line?: number): void {
    this.report(message, line, '');
  }

  private report(message: string, line?: number, where?: string): void {
    console.log('[line ' + line + '] Error' + where + ': ' + message);
    this.hadError = false;
  }
}

export const errorReporter = new ErrorReporter();
