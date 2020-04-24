
export class ZeroDivisionError extends Error {

	constructor ( message ) {
		super( message ) ;
	}

	toString ( ) {
		return `ZeroDivisionError: ${this.message}` ;
	}

}
