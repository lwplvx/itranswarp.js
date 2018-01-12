'use strict';

/**
 * koa middleware to serve static staticFiles.
 * 
 * For development only.
 * 
 * author: Michael Liao
 */

const
    path = require('path'),
    mime = require('mime'),
    fs = require('mz/fs');

module.exports = (prefix, dir) => {
    return async (ctx, next) => {
        let rpath = ctx.request.path;
        if (rpath.startsWith(prefix)) {
            let fp = path.join(dir, rpath.substring(prefix.length));
            if (await fs.exists(fp)) {
                ctx.response.type = mime.lookup(rpath);
                let fileBuf = await fs.readFile(fp);
                // ../../../js/uikit/uikit.js 
                // 如果 长度小  可能是 写的 相对路径，用下面的办法处理一下
                //if (fileBuf.length < 200) {
                //    let fStr = fileBuf.toString();
                //    if (fStr.slice(0, 3) === '../') {
                //        fp = path.join(path.dirname(fp), fStr);
                //        if (await fs.exists(fp)) { 
                //            fileBuf = await fs.readFile(fp);
                //        } 
                //    }  
                //}


                ctx.response.body = fileBuf;

            } else {
                ctx.response.status = 404;
            }
        } else {
            await next();
        }
    };
}
