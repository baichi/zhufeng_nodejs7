## git
- 查看未来的版本
```
git reflog 
```
- 合并提交commit
```
git commit --amend
```

## 发布包
- 切换到官网进行发布
```
npm install nrm -g
``` 
```
nrm use npm / taobao
```
- 创建账号或登陆
```
npm add user
```
- 发布
发布包时必须要包含package.json
```
npm publish
```
## 想使用自己写的包
```
npm install 你的包名
``` 
## 取消发布
```
npm unpublish 包的名字
```

## 异步的方法
```
nextTick
setImmediate
setTimeout
```