
export class ZeroDivisionError {

	constructor ( message ) {
		this.message = message ;
	}

	toString ( ) {
		return `ZeroDivisionError: ${this.message}` ;
	}

}
