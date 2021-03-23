
export class ZeroDivisionError extends Error {

	toString ( ) {
		return `ZeroDivisionError: ${this.message}` ;
	}

}
