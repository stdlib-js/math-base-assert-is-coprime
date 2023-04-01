<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# isCoprime

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test if two numbers are [coprime][coprime-integers].

<section class="intro">

Two integers `a` and `b` are said to be **coprime** (or **relatively prime** or **mutually prime**) if the only positive integer that divides both of them is `1`.

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import isCoprime from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-coprime@deno/mod.js';
```

#### isCoprime( a, b )

Tests if two numbers are [coprime][coprime-integers].

```javascript
var bool = isCoprime( 14.0, 15.0 );
// returns true

bool = isCoprime( 14.0, 21.0 );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import isCoprime from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-coprime@deno/mod.js';

var bool = isCoprime( 5.0, 7.0 );
// returns true

bool = isCoprime( 5.0, 15.0 );
// returns false

bool = isCoprime( NaN, NaN );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/assert/is-composite`][@stdlib/math/base/assert/is-composite]</span><span class="delimiter">: </span><span class="description">test if a number is composite.</span>
-   <span class="package-name">[`@stdlib/math-base/assert/is-prime`][@stdlib/math/base/assert/is-prime]</span><span class="delimiter">: </span><span class="description">test if a number is prime.</span>
-   <span class="package-name">[`@stdlib/math-base/special/gcd`][@stdlib/math/base/special/gcd]</span><span class="delimiter">: </span><span class="description">compute the greatest common divisor (gcd).</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-assert-is-coprime.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-assert-is-coprime

[test-image]: https://github.com/stdlib-js/math-base-assert-is-coprime/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-assert-is-coprime/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-assert-is-coprime/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-assert-is-coprime?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-assert-is-coprime.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-assert-is-coprime/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-assert-is-coprime/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-assert-is-coprime/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-assert-is-coprime/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-assert-is-coprime/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-assert-is-coprime/main/LICENSE

[coprime-integers]: https://en.wikipedia.org/wiki/Coprime_integers

<!-- <related-links> -->

[@stdlib/math/base/assert/is-composite]: https://github.com/stdlib-js/math-base-assert-is-composite/tree/deno

[@stdlib/math/base/assert/is-prime]: https://github.com/stdlib-js/math-base-assert-is-prime/tree/deno

[@stdlib/math/base/special/gcd]: https://github.com/stdlib-js/math-base-special-gcd/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
