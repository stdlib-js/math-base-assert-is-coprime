// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r=function(r){return r!=r},e=Math.floor,n=function(r){return e(r)===r},f=Number.POSITIVE_INFINITY,o=Number.NEGATIVE_INFINITY,t=r,u=n,i=f,a=o,N=2147483647,c=function(r,e){var n,f=0;if(0===r)return e;if(0===e)return r;for(;0==(1&r)&&0==(1&e);)r>>>=1,e>>>=1,f+=1;for(;0==(1&r);)r>>>=1;for(;e;){for(;0==(1&e);)e>>>=1;r>e&&(n=e,e=r,r=n),e-=r}return r<<f},d=function(r,e){var n,f=1;if(0===r)return e;if(0===e)return r;for(;r%2==0&&e%2==0;)r/=2,e/=2,f*=2;for(;r%2==0;)r/=2;for(;e;){for(;e%2==0;)e/=2;r>e&&(n=e,e=r,r=n),e-=r}return f*r},s=function(r,e){return t(r)||t(e)||r===i||e===i||r===a||e===a?NaN:u(r)&&u(e)?(r<0&&(r=-r),e<0&&(e=-e),r<=N&&e<=N?c(r,e):d(r,e)):NaN};return function(r,e){var n=s(r,e);return n==n&&1===n}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).isCoprime=e();
//# sourceMappingURL=index.js.map
