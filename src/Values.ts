export interface Values {
	[ key: string ]: number;
}

export function cloneValues( values: Values ): Values {

	return Object.assign( {}, values );

}

export function lerpValues( a: Values, b: Values, alpha: number, out: Values ): void {

	for (const key in out ) {

		out[ key ] = ( b[ key ] - a[ key ] ) * alpha + a[ key ];

	}

}
