// 引入其他模块

// 引入第三方库
import $ from 'jquery';

import {foo, bar} from './module1';
import {fun, fun2} from './module2';
import module3 from './module3';

$('body').css('background', 'green');

foo();
bar();
fun();
fun2();
module3.foo();