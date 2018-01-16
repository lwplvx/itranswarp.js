# itranswarp.js
 
 暂时界面正常了，但是登录还是不支持，需要继续

 原版 REDEME 的 数据库初始化 参考这里：
	在数据库主机 运行 init-db

itranswarp.css  需要运行 less-watch-compiler static/css/less static/css itranswarp.less  生成 
themes default 的 js 和 css  文件 要参考 原版文件的路径复制。


windows  通过  set NODE_ENV=production  命令 可以设置 process.env.NODE_ENV


运行环境需要（gm 模块 图片处理） 安装 http://www.graphicsmagick.org/，  正确安装 GraphicsMagick 就可以了。

微博登录相关的 

在 userApi GET /auth/from/:name

代码段 如下：注释 了 else 内的内容  
   （ 如果带上 redirect 参数 微博 地址设置  需要对应 也许 在设置【授权回调页】 那里带上 redirect=xxxx 就可以不用注释了（效果未测试））


  if (jscallback) {
            redirect_uri = redirect_uri + '?jscallback=' + jscallback;
        }
        else {
          //  redirect_uri = redirect_uri + '?redirect=' + encodeURIComponent(_getReferer(ctx.request));
        }