---
title: React学习手册
date: 2024-10-13 22:59:08
tags: #前端笔记
ai: true
---

#### s视图变化

只要是视图中显示的数据，都要用useState来创建

原因是因为局部变量的改变无法引发组件重新渲染，第二个原因是重新渲染以后组件不会记录原先的内容

React中获取dom元素

 

![image-20241014000535215](https://pic-1318156172.cos.ap-beijing.myqcloud.com/blog/image-20241014000535215.png)

![image-20241014002702551](https://pic-1318156172.cos.ap-beijing.myqcloud.com/blog/image-20241014002702551.png)

### 组件通信

#### 父子通信

![image-20241014004139627](https://pic-1318156172.cos.ap-beijing.myqcloud.com/blog/image-20241014004139627.png)

左侧的值是随便命名的，会变成props对象的key，右边的值代表的是props的value

![image-20241014004600260](https://pic-1318156172.cos.ap-beijing.myqcloud.com/blog/image-20241014004600260.png)

这个类似vue里面的具名插槽

son组件包的节点会被放在props.children属性

#### 子传父

具体场景是父组件想用子组件的数据

父想使用子的数据肯定要函数，那就可以传递父组件的函数给子组件，让子组件调用父组件函数



其实这里的函数最好是在父组件中加一个state来保存子组件中调用时候的子组件的数据，这样才能真正的实现子传给了父亲

所有的数据最好都放在父组件中

![image-20241014005502513](https://pic-1318156172.cos.ap-beijing.myqcloud.com/blog/image-20241014005502513.png)

#### 兄弟通信（状态提升）

![image-20241014005833310](https://pic-1318156172.cos.ap-beijing.myqcloud.com/blog/image-20241014005833310.png)

子传父：父亲定义函数，然后传给A组件，A组件中调用函数，顺便在函数中将数据存在父组件的state中，这样数据就给了父组件

父传子：props很简单传一下得了

#### 跨层组件通信（Context）

![image-20241014012023662](https://pic-1318156172.cos.ap-beijing.myqcloud.com/blog/image-20241014012023662.png)

具体的使用场景是父组件和子组件需要共享并且操作一份数据

使用createContext方法创建一个上下文对象Ctx

![image-20241014013342887](https://pic-1318156172.cos.ap-beijing.myqcloud.com/blog/image-20241014013342887.png)

在顶层组件（App）通过Ctx.provider组件来提供数据

![image-20241014013429224](https://pic-1318156172.cos.ap-beijing.myqcloud.com/blog/image-20241014013429224.png)

在底层组件（A中嵌套了B这里篇幅太长了不写了）使用useContext钩子函数获取消费数据

![image-20241014013508833](https://pic-1318156172.cos.ap-beijing.myqcloud.com/blog/image-20241014013508833.png)

#### 创建不是由事件引起而是由渲染本身引起的操作

比如更改Dom，发送Ajax请求

使用useEffect

