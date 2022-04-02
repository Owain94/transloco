"use strict";(self.webpackChunktransloco_docs=self.webpackChunktransloco_docs||[]).push([[5595],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),p=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return t?o.createElement(f,i(i({ref:n},c),{},{components:t})):o.createElement(f,i({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6279:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var o=t(7462),a=t(3366),r=(t(7294),t(3905)),i=["components"],l={title:"Inline Loaders",description:"Inline Loaders | Transloco Angular i18n"},s=void 0,p={unversionedId:"lazy-load/inline-loaders",id:"lazy-load/inline-loaders",isDocsHomePage:!1,title:"Inline Loaders",description:"Inline Loaders | Transloco Angular i18n",source:"@site/docs/lazy-load/inline-loaders.mdx",sourceDirName:"lazy-load",slug:"/lazy-load/inline-loaders",permalink:"/transloco/docs/lazy-load/inline-loaders",editUrl:"https://github.com/ngneat/transloco/edit/master/docs/docs/lazy-load/inline-loaders.mdx",tags:[],version:"current",frontMatter:{title:"Inline Loaders",description:"Inline Loaders | Transloco Angular i18n"},sidebar:"docs",previous:{title:"Scope Configuration",permalink:"/transloco/docs/lazy-load/scope-configuration"},next:{title:"Unit Testing",permalink:"/transloco/docs/unit-testing"}},c=[],d={toc:c};function u(e){var n=e.components,t=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When working on a feature module or a library (which is common in a monorepo environment), we may want to have the translation files inside the module folder and ship them together with it.\nTo enable this feature, Transloco supports ",(0,r.kt)("inlineCode",{parentName:"p"},"scope")," with inline loaders. We can pass the scope name and an inline loader that leverages Webpack import function to lazy load the local translation files."),(0,r.kt)("p",null,"Let's say we have the following Angular CLI project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\ud83d\udce6projects\n \u2517 \ud83d\udcc2feature-module\n \u2503 \u2523 \ud83d\udcc2src\n \u2503 \u2503 \u2523 \ud83d\udcc2lib\n \u2503 \u2503 \u2503 \u2523 \ud83d\udcc2i18n\n \u2503 \u2503 \u2503 \u2503 \u2523 \ud83d\udcdcen.json\n \u2503 \u2503 \u2503 \u2503 \u2517 \ud83d\udcdces.json\n \u2503 \u2503 \u2503 \u2523 \ud83d\udcdcfeature-module.component.ts\n \u2503 \u2503 \u2503 \u2523 \ud83d\udcdcfeature-module.module.ts\n \u2503 \u2503 \u2503 \u2517 \ud83d\udcdcfeature-module.service.ts\n \u2503 \u2503 \u2523 \ud83d\udcdcpublic-api.ts\n\ud83d\udce6src\n \u2523 \ud83d\udcc2app\n \u2503 \u2523 \ud83d\udcdcapp-routing.module.ts\n \u2503 \u2523 \ud83d\udcdcapp.component.css\n \u2503 \u2523 \ud83d\udcdcapp.component.html\n \u2503 \u2523 \ud83d\udcdcapp.component.ts\n \u2503 \u2523 \ud83d\udcdcapp.module.ts\n \u2503 \u2517 \ud83d\udcdctransloco.loader.ts\n \u2523 \ud83d\udcc2assets\n \u2503 \u2523 \ud83d\udcc2i18n\n \u2503 \u2503 \u2523 \ud83d\udcdcen.json\n \u2503 \u2503 \u2517 \ud83d\udcdces.json\n")),(0,r.kt)("p",null,"Inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"feature")," module, we can define the ",(0,r.kt)("inlineCode",{parentName:"p"},"TRANSLOCO_SCOPE")," provider and pass an inline loader:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'{13} title="feature.module.ts"',"{13}":!0,title:'"feature.module.ts"'},"export const loader = ['en', 'es'].reduce((acc, lang) => {\n  acc[lang] = () => import(`../i18n/${lang}.json`);\n  return acc;\n}, {});\n\n@NgModule({\n  imports: [TranslocoModule],\n  providers: [\n    {\n      provide: TRANSLOCO_SCOPE,\n      useValue: {\n        scope: 'scopeName',\n        loader\n      }\n    }\n  ],\n  declarations: [YourComponent],\n  exports: [YourComponent]\n})\nexport class FeatureModule {}\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Note that when using an inline loader, the ",(0,r.kt)("inlineCode",{parentName:"p"},"scope")," key is used as the ",(0,r.kt)("inlineCode",{parentName:"p"},"alias"),"."))),(0,r.kt)("p",null,"Now we can translate our content using the ",(0,r.kt)("inlineCode",{parentName:"p"},"scope")," we define:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'{5} title="my-comp.component.ts"',"{5}":!0,title:'"my-comp.component.ts"'},"@Component({\n  selector: 'your-comp',\n  template: `\n    <ng-container *transloco=\"let t\">\n      <p>{{ t('scopeName.title') }}</p>\n    </ng-container>\n  `\n})\nexport class YourComponent {}\n")),(0,r.kt)("p",null,"And lazy-loaded both the ",(0,r.kt)("inlineCode",{parentName:"p"},"feature")," module and its translation files in our application:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="app.module.ts"',title:'"app.module.ts"'},"@NgModule({\n  declarations: [AppComponent],\n  imports: [\n    TranslocoModule,\n    RouterModule.forRoot([\n    {\n       path: 'route-name',\n       loadChildren: () =>\n         import('path/to/feature/module').then( m => m.FeatureModule)\n      }\n    ])\n  ],\n  bootstrap: [AppComponent]\n})\nexport class AppModule {}\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Note that following the Angular DI rules, it can be done either in a feature module that we lazy-loaded or at the component providers level."))),(0,r.kt)("p",null,"You can find a complete working example that uses ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/NetanelBasal/transloco-with-nx-libs"},"nx")," here."))}u.isMDXComponent=!0}}]);