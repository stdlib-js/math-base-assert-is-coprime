// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return r!=r}var n=Math.floor;function f(r){return n(r)===r}var t=Number.POSITIVE_INFINITY,u=Number.NEGATIVE_INFINITY;function o(n,o){var e=function(n,o){return r(n)||r(o)||n===t||o===t||n===u||o===u?NaN:f(n)&&f(o)?(n<0&&(n=-n),o<0&&(o=-o),n<=2147483647&&o<=2147483647?function(r,n){var f,t=0;if(0===r)return n;if(0===n)return r;for(;0==(1&r)&&0==(1&n);)r>>>=1,n>>>=1,t+=1;for(;0==(1&r);)r>>>=1;for(;n;){for(;0==(1&n);)n>>>=1;r>n&&(f=n,n=r,r=f),n-=r}return r<<t}(n,o):function(r,n){var f,t=1;if(0===r)return n;if(0===n)return r;for(;r%2==0&&n%2==0;)r/=2,n/=2,t*=2;for(;r%2==0;)r/=2;for(;n;){for(;n%2==0;)n/=2;r>n&&(f=n,n=r,r=f),n-=r}return t*r}(n,o)):NaN}(n,o);return e==e&&1===e}export{o as default};
//# sourceMappingURL=mod.js.map
