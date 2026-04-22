"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var d=n(function(C,v){
var l=require('@stdlib/strided-base-dmskmap/dist'),R=require('@stdlib/math-base-special-sqrt/dist');function _(e,r,a,s,t,i,u){return l(e,r,a,s,t,i,u,R)}v.exports=_
});var o=n(function(D,m){
var E=require('@stdlib/strided-base-dmskmap/dist').ndarray,O=require('@stdlib/math-base-special-sqrt/dist');function b(e,r,a,s,t,i,u,f,j,x){return E(e,r,a,s,t,i,u,f,j,x,O)}m.exports=b
});var k=n(function(F,p){
var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=d(),h=o();g(c,"ndarray",h);p.exports=c
});var w=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=k(),q,y=z(w(__dirname,"./native.js"));y instanceof Error?q=A:q=y;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
