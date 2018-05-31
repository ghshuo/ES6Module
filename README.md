# ES6Module

## ES6-Babel-Browserify使用教程
1. 定义package.json文件
  ```
  {
    "name" : "es6-babel-browserify",
    "version" : "1.0.0"
  }
  ```
2. 安装babel-cli, babel-preset-es2015和browserify
  * npm install babel-cli browserify -g 
	* npm install babel-preset-es2015 --save-dev 
	* preset 预设(将es6转换成es5的所有插件打包)
3. 定义.babelrc文件  运行事控制文件
	```
	{
    "presets": ["es2015"]
  }
	```
4. 编码
  * js/src/module1.js  分别暴露
    ```
    export function foo() {
      console.log('module1 foo()');
    }
    export function bar() {
      console.log('module1 bar()');
    }
    export const DATA_ARR = [1, 3, 5, 1]
    ```
  * js/src/module2.js  统一暴露
    ```
    let data = 'module2 data'
    
    function fun1() {
      console.log('module2 fun1() ' + data);
    }
    
    function fun2() {
      console.log('module2 fun2() ' + data);
    }
    
    export {fun1, fun2}
    ```
  * js/src/module3.js
    ```
    export default {
      name: 'Tom',
      setName: function (name) {
        this.name = name
      }
    }
    ```
  * js/src/app.js
    ```
    import {foo, bar} from './module1'
    import {DATA_ARR} from './module1'
    import {fun1, fun2} from './module2'
    import person from './module3'
    
    import $ from 'jquery'
    
    $('body').css('background', 'red')
    
    foo()
    bar()
    console.log(DATA_ARR);
    fun1()
    fun2()
    
    person.setName('JACK')
    console.log(person.name);
    ```
5. 编译
  * 使用Babel将ES6编译为ES5代码(但包含CommonJS语法) : babel js/src -d js/lib
  * 使用Browserify编译js : browserify js/lib/app.js -o js/lib/bundle.js
6. 页面中引入测试
  ```
  <script type="text/javascript" src="js/lib/bundle.js"></script>
  ```
7. 引入第三方模块(jQuery)
  1). 下载jQuery模块: 
    * npm install jquery@1 --save
  2). 在app.js中引入并使用
    ```
    import $ from 'jquery'
    $('body').css('background', 'red')
    ```
