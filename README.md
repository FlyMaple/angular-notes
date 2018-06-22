# angular-notes

# 指令

安裝全域 Angular CLI

`npm install -g @angular/cli`

建立新專案

`ng new my-app`

啟動專案
 - --open or -o 自動打開瀏覽器

   `ng serve --open`

建立元件

`ng generate component heroes`

`ng generate class hero`

`ng generate service hero`

```
--module=app 自動註冊到 @NgModule.imports 陣列中
```
`ng generate service hero --module=app`

```
--flat 不要自成一個資料夾，建立在 root 同層
```
`ng generate module app-routing --flat --module=app`

# 資料夾結構

```
app.component.{css、html、ts} 都是組成 component 的檔案
```
```
app.module.ts 定義這個 component 的組成
```
app
 - app.component.css
 - app.component.html
 - app.component.spec.ts
 - app.component.ts
 - app.module.ts

asset 資源庫

browserslist

main.ts
 - 專案程式進入點，進入並部屬 app.module

tsconfig.json
 - 專案 type script 的編輯器配置檔

tslint.json
 - ts 檔風格配置檔

# 路由

 - routerLink
 - imports => RouterModule.forRoot(routes)
 - exports => RouterModule
 - routes => `[{ path: '', component: Component, }]`
 - component => `<router-outlet></router-outlet>`