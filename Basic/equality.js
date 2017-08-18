/**
 * Created by bgnanasekar on 02/08/2017.
 */
var a = "42";
var b = 42;

if(a == b){
    console.log('loose equality:true');
}

if(a===b){
}
else{
    console.log('strict equality:false');
}
if(!false){
    console.log('false:false');
}
if(!0){
    console.log('0:false');
}
if(!-0){
    console.log('-0:false');
}
var num = Number('num');
if(!num){
    console.log('NaN:false');
}
if(!""){
    console.log('empty str:false');
}
if(![]){
    console.log('empty arr:false');
}

if(!null){
    console.log('null:false');
}

var undef;
if(!undef){
    console.log('undefined: false');
}