# 安装和查看
```javascript
npm -v查看版本
sudo npm install npm -g 升级npm
npm install npm -g 安装npm
	npm install -g cnpm --registry=https://registry.npmmirror.com 安装npm使用淘宝镜像
npm install <Module Name> 安装某一个模块
 -g 表示全局安装
 安装位置：
		局部安装：会安装到命令所在当前目录node_modules文件夹
		全局安装：C:\Users\Quinn\AppData\Roaming\npm 或安装目录\node_modules
 	npm install express 安装express模块
 	npm install express -g   全局安装
 	npm list -g 查看全局安装的包
	npm list [-g] [模块名] 查看该模块的版本号 -g代表全局安装查看
 package.json 定义包的属性
	详见例子
淘宝镜像安装
npm install -g cnpm --registry=https://registry.npmmirror.com
cnpm install [name]
```

# 卸载
`npm uninstall express 卸载express`
`npm ls 进入node_modules查看`
# 更新
`npm update express`
# 搜索
`npm search express`
# 创建
`npm init `表示初始化配置信息，配置package.json文件
```json
//以下是安装过程，交互式安装
npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (nodejs-demo) nodejs-demo
version: (1.0.0) 0.0.1
description: 描述文件
entry point: (引用express.js) entry.js
test command: make test
git repository: null
keywords:
author:
license: (ISC)
About to write to F:\SysData\Documents\HBuilderProjects\nodejs-demo\package.json:

{
  "name": "nodejs-demo",
  "version": "0.0.1",
  "description": "描述文件",
  "main": "entry.js",
  "devDependencies": {},
  "scripts": {
    "test": "make test"
  },
  "repository": {
    "type": "git",
    "url": "null"
  },
  "author": "",
  "license": "ISC"
}


Is this OK? (yes) yes
```
`npm adduser 表示向NPM仓库注册用户`
```
npm adduser
npm notice Log in on https://registry.npmjs.org/
Username: quinntian
Password:
Email: (this IS public) 53049731@qq.com
Logged in as quinntian on https://registry.npmjs.org/.
PS F:\SysData\Documents\HBuilderProjects\nodejs-demo>
```
`npm publish`表示发布
- 发布时注意，上面注册用户一定要去邮箱验证
- 注意包名会报错

```
PS F:\SysData\Documents\HBuilderProjects\nodejs-demo> npm publish
npm notice 
npm notice package: @quinntian/nodejs-demo@0.0.1
npm notice === Tarball Contents ===
npm notice 33B   引用express.js
npm notice 0B    entry.js
npm notice 178B  nodejs起步demo/helloworld.js
npm notice 634B  nodejs起步demo/server.js
npm notice 714B  npm包管理/npm包管理.md
npm notice 4.0kB npm包管理/package说明.json
npm notice 281B  package.json
npm notice === Tarball Details ===
npm notice name:          @quinntian/nodejs-demo
npm notice version:       0.0.1
npm notice filename:      @quinntian/nodejs-demo-0.0.1.tgz
npm notice package size:  3.1 kB
npm notice unpacked size: 5.8 kB
npm notice integrity:     sha512-hJy+Zs/LdLKvD[...]Oxmn9P6mwZgNg==
npm notice total files:   7
npm notice
npm ERR! code E402
npm ERR! 402 Payment Required - PUT https://registry.npmjs.org/@quinntian%2fnodejs-demo - You must sign up for private packages

npm ERR! A complete log of this run can be found in:
PS F:\SysData\Documents\HBuilderProjects\nodejs-demo> npm adduser
npm notice Log in on https://registry.npmjs.org/
Username: 530479731@qq.com
npm WARN Name may not contain non-url-safe chars
Username: (530479731@qq.com) quinntian
Password:
Email: (this IS public) 530479731@qq.com
Logged in as quinntian on https://registry.npmjs.org/.
PS F:\SysData\Documents\HBuilderProjects\nodejs-demo> npm publish
npm notice 
npm notice package: @quinntian/nodejs-demo@0.0.1
npm notice === Tarball Contents ===
npm notice 33B   引用express.js
npm notice 0B    entry.js
npm notice 178B  nodejs起步demo/helloworld.js
npm notice 634B  nodejs起步demo/server.js
npm notice 714B  npm包管理/npm包管理.md
npm notice 4.0kB npm包管理/package说明.json
npm notice 281B  package.json
npm notice === Tarball Details ===
npm notice name:          @quinntian/nodejs-demo
npm notice version:       0.0.1
npm notice filename:      @quinntian/nodejs-demo-0.0.1.tgz
npm notice package size:  3.1 kB
npm notice unpacked size: 5.8 kB
npm notice integrity:     sha512-hJy+Zs/LdLKvD[...]Oxmn9P6mwZgNg==
npm notice total files:   7
npm notice
npm ERR! code E402
npm ERR! 402 Payment Required - PUT https://registry.npmjs.org/@quinntian%2fnodejs-demo - You must sign up for private packages

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\Quinn\AppData\Local\npm-cache\_logs\2022-01-03T16_40_28_210Z-debug.log
PS F:\SysData\Documents\HBuilderProjects\nodejs-demo> npm publish --access public
npm notice 
npm notice package: @quinntian/nodejs-demo@0.0.1
npm notice === Tarball Contents ===
npm notice 33B   引用express.js
npm notice 0B    entry.js
npm notice 178B  nodejs起步demo/helloworld.js
npm notice 634B  nodejs起步demo/server.js
npm notice 714B  npm包管理/npm包管理.md
npm notice 4.0kB npm包管理/package说明.json
npm notice 281B  package.json
npm notice === Tarball Details === 
npm notice name:          @quinntian/nodejs-demo
npm notice version:       0.0.1
npm notice filename:      @quinntian/nodejs-demo-0.0.1.tgz
npm notice package size:  3.1 kB
npm notice unpacked size: 5.8 kB
npm notice shasum:        7a026438329e479713facc09380204df5187cbf1
npm notice integrity:     sha512-hJy+Zs/LdLKvD[...]Oxmn9P6mwZgNg==
npm notice total files:   7
npm ERR! code E403
npm ERR! 403 403 Forbidden - PUT https://registry.npmjs.org/@quinntian%2fnodejs-demo - Forbidden
npm ERR! 403 In most cases, you or one of your dependencies are requesting
npm ERR! 403 a package version that is forbidden by your security policy, or

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\Quinn\AppData\Local\npm-cache\_logs\2022-01-03T16_42_06_263Z-debug.log
PS F:\SysData\Documents\HBuilderProjects\nodejs-demo> npm publish
npm ERR! Invalid name: "@quinntian-nodejs-demo"

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\Quinn\AppData\Local\npm-cache\_logs\2022-01-03T16_43_04_048Z-debug.log
PS F:\SysData\Documents\HBuilderProjects\nodejs-demo> npm publish
npm notice 
npm notice package: quinntian-nodejs-demo@0.0.1
npm notice === Tarball Contents ===
npm notice 33B   引用express.js
npm notice 0B    entry.js
npm notice 178B  nodejs起步demo/helloworld.js
npm notice 634B  nodejs起步demo/server.js
npm notice 714B  npm包管理/npm包管理.md
npm notice 4.0kB npm包管理/package说明.json
npm notice 280B  package.json
npm notice === Tarball Details ===
npm notice name:          quinntian-nodejs-demo
npm notice version:       0.0.1
npm notice filename:      quinntian-nodejs-demo-0.0.1.tgz
npm notice package size:  3.1 kB
npm notice unpacked size: 5.8 kB
npm notice shasum:        eeb3fc7074eaaa4a3e3be381bf3e146c7786c491
npm notice integrity:     sha512-Sl05AvSPv/Tps[...]cputDk3+BYvGw==
npm notice total files:   7
npm ERR! code E403
npm ERR! 403 403 Forbidden - PUT https://registry.npmjs.org/quinntian-nodejs-demo - Forbidden
npm ERR! 403 In most cases, you or one of your dependencies are requesting
npm ERR! 403 a package version that is forbidden by your security policy, or
npm ERR! 403 on a server you do not have access to.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\Quinn\AppData\Local\npm-cache\_logs\2022-01-03T16_44_52_466Z-debug.log
PS F:\SysData\Documents\HBuilderProjects\nodejs-demo> npm publish
npm notice 
npm notice package: quinntian-nodejs-demo@0.0.1
npm notice === Tarball Contents ===
npm notice 33B   引用express.js
npm notice 0B    entry.js
npm notice 178B  nodejs起步demo/helloworld.js
npm notice 634B  nodejs起步demo/server.js
npm notice 714B  npm包管理/npm包管理.md
npm notice 4.0kB npm包管理/package说明.json
npm notice 280B  package.json
npm notice === Tarball Details ===
npm notice name:          quinntian-nodejs-demo
npm notice version:       0.0.1
npm notice filename:      quinntian-nodejs-demo-0.0.1.tgz
npm notice package size:  3.1 kB
npm notice unpacked size: 5.8 kB
npm notice shasum:        eeb3fc7074eaaa4a3e3be381bf3e146c7786c491
npm notice integrity:     sha512-Sl05AvSPv/Tps[...]cputDk3+BYvGw==
npm notice total files:   7
npm notice
+ quinntian-nodejs-demo@0.0.1
```
# npm版本号
```
使用NPM下载和发布代码时都会接触到版本号。NPM使用语义版本号来管理代码，这里简单介绍一下。

语义版本号分为X.Y.Z三位，分别代表主版本号、次版本号和补丁版本号。当代码变更时，版本号按以下原则更新。

如果只是修复bug，需要更新Z位。
如果是新增了功能，但是向下兼容，需要更新Y位。
如果有大变动，向下不兼容，需要更新X位。
版本号有了这个保证后，在申明第三方包依赖时，除了可依赖于一个固定版本号外，还可依赖于某个范围的版本号。例如"argv": "0.0.x"表示依赖于0.0.x系列的最新版argv。
```
# 常用命令参考
```
除了可以在npmjs.org/doc/查看官方文档外，这里再介绍一些NPM常用命令。

NPM提供了很多命令，例如install和publish，使用npm help可查看所有命令。

NPM提供了很多命令，例如install和publish，使用npm help可查看所有命令。

使用npm help <command>可查看某条命令的详细帮助，例如npm help install。

在package.json所在目录下使用npm install . -g可先在本地安装当前命令行程序，可用于发布前的本地测试。

使用npm update <package>可以把当前目录下node_modules子目录里边的对应模块更新至最新版本。

使用npm update <package> -g可以把全局安装的对应命令行程序更新至最新版。

使用npm cache clear可以清空NPM本地缓存，用于对付使用相同版本号发布新版本代码的人。

使用npm unpublish <package>@<version>可以撤销发布自己发布过的某个版本代码。
```
