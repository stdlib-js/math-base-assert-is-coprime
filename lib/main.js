/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var gcd = require( '@stdlib/math-base-special-gcd' );


// MAIN //

/**
* Returns a boolean indicating whether two numbers are coprime.
*
* @param {number} a - first value
* @param {number} b - second value
* @returns {boolean} boolean indicating whether the values are coprime
*
* @example
* var bool = isCoprime( 14.0, 15.0 );
* // returns true
*
* @example
* var bool = isCoprime( 14.0, 21.0 );
* // returns false
*/
function isCoprime( a, b ) {
	var v = gcd( a, b );
	if ( v !== v ) {
		return false;
	}
	return ( v === 1 );
}


// EXPORTS //

module.exports = isCoprime;
