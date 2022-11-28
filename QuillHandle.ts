//Decodes the text from MathQuill.
class QuillHandle {
	to_decode: string = '';
	_equation: string = '';
	readonly errors = {
		no_eq: 'Equation equals null!',
		no_frac: 'DecodeFrac was called but there is no fraction!',
		no_num: 'There was no number in the equation!',
	};

	constructor(equation: string) {
		if (typeof equation !== 'undefined' && equation !== null) {
			this.to_decode = equation;
		} else {
			throw `Something went very wrong (${this.errors.no_eq})`;
		}
		this.to_decode = equation;
	}
	UpdateDecode = (e: string) => {
		this.to_decode = e;
	};

	DecodeQuill = () => {
		let decoded: string = this.to_decode;
		decoded = decoded.replace(/\\cdot/g, '*');
		let operations: string[] = [];
		if (!decoded.includes('\\frac')) {
			operations = decoded.split('\\');
		} else {
			//All of this to decode one fraction -_-
			let frac = this.DecodeFrac(decoded);
			let l_frac = frac.length;
			let numbs: number[] = [];
			let count: number = 0;
			for (let i = 0; i < l_frac; i++) {
				let current: number = NaN;
				let temp = frac[i].match(/\d/g);
				let s_temp = frac[i].match(/[+\-*\/]/g);
				if (temp !== null) {
					for (let x of temp) {
						if (!isNaN(Number(x))) numbs.push(Number(x));
						else throw `Something went very wrong (${this.errors.no_num})`;
					}
					current = numbs[0];
					if (s_temp !== null){
						for (let y of s_temp) {
							let n_two = numbs[count + 1];
							switch (y) {
								case '*':
									current *= n_two;
									break;
								case '+':
									current += n_two;
									break;
								case '-':
									current -= n_two;
									break;
								case '/':
									current /= n_two;
									break;
								default:
									throw `Something went very wrong (${this.errors.no_num})`;
							}
							count++;
						}
					}
				}
			}
		}

		for (let x of operations) {
		}
	};
	//Returns the numerator and denominator of the fraction.
	DecodeFrac = (decoded: string) => {
		let temp = decoded.split('\\frac');
		let final: string[] = [];
		if (!temp) {
			throw `Something went very wrong (${this.errors.no_frac})`;
		} else {
			for (let x of temp) {
				var y = x.replace('{', '(');
				y = y.replace('}', ')');
				final.push(y);
			}
		}
		return final;
	};
}
