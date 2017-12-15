/**
 * Created by xieyuxing on 2017/12/8.
 */
//代码结束可以不打分号，编译的js中会补上，并且注释也会加入js中
console.log('Hello TypeScript');
var flag = false;
//flag=1;无法通过编译
//模板字符串,这并不是ts特有，ES6就支持
// let name:string ="Angular";
var words = "I am learning " + name + " !";
//如果直接使用console.log(`I am learning ${name} !`)代码会报错：Cannot redeclare block-scoped variable 'name'.
console.log("" + words);
//数组泛型
var arr = [1, 2];
//元祖类型,规定了数组每个元素的类型和顺序
var any_x = ["angular", 98, false];
//枚举类型,编译为js后极其复杂
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Blue;
console.log(c);
//任意值类型
var x = 1;
x = 'i am a string';
x = false;
//null和undefined都启用了严格的空校验，不可赋值给非void和非本身对应类型
//null和undefined既是类型又是该类型的值
var null_x = null; //不报错但代码几乎毫无意义
//null_x='i am not null';null类型的变量也不能赋值为其它类型
var x_undefined = undefined;
//x_undefined=66;报错
//变量支持多种类型,比如字符串可能为null
var maybe_null_string;
//void类型
function hello() {
    alert('Hello Angular');
}
//func函数传入了一个返回值为void的foo函数
function func(foo) {
    var f = foo(); //这里把f赋值为foo函数返回值，即void
    //f.doSth();//报错，void类型不存在doSth()方法，如果foo的返回值是any则不报错
}
//never类型的用法还要好好琢磨，一般在死循环，异常等地方使用
//函数默认参数
/*
 *
 * 1:默认参数不必声明类型
 * 2.调用函数时默认参数可以不传值
 */
function max(p_x, p_y) {
    if (p_y === void 0) { p_y = 4; }
    return p_x > p_y ? x : p_y;
}
var max_res = max(2);
var max_result2 = max(2, undefined);
// let max_result3=max(2,4,7);//Expected 1-2 arguments, but got 3.
var max_result4 = max(2, 4);
function css(config, value) {
    if (typeof config === 'string') {
        //...
    }
    else if (typeof config === 'object') {
        //...
    }
}
css({}, 'iii');
css({});
