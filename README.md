1、构建项目初始化路由配置时Error in render: "TypeError: Cannot read property 'matched' of undefined"
	原因 router index文件中配置多个路由应写成routes  不是 routers 入口文件main.js中引入router 是小写，首字母不能大写，因为是对象的简写方式