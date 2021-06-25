(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[1648],{60383:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return r},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var o=t(22122),a=t(19756),i=(t(67294),t(3905)),r={sidebar_label:"Performance"},s={unversionedId:"react/performance",id:"react/performance",isDocsHomePage:!1,title:"React Performance",description:"Loops with Ionic Components",source:"@site/docs/react/performance.md",sourceDirName:"react",slug:"/react/performance",permalink:"/docs/react/performance",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/react/performance.md",version:"current",sidebar_label:"Performance",frontMatter:{sidebar_label:"Performance"},sidebar:"docs",previous:{title:"Testing Ionic React",permalink:"/docs/react/testing"},next:{title:"Ionic Vue Overview",permalink:"/docs/vue/overview"}},c=[{value:"Loops with Ionic Components",id:"loops-with-ionic-components",children:[]}],p={toc:c};function m(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"loops-with-ionic-components"},"Loops with Ionic Components"),(0,i.kt)("p",null,"When using loops with Ionic components, we recommend using React's ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," attribute. This allows React to re-render loop elements in an efficient way by only updating the content inside of the component rather than re-creating the component altogether."),(0,i.kt)("p",null,"By using ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," you can provide a stable identity for each loop element so React can track insertions and deletions within the iterator. Below is an example of how to use ",(0,i.kt)("inlineCode",{parentName:"p"},"key"),":"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"MyComponent.tsx")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import React, { useState } from 'react';\nimport { IonContent, IonItem, IonLabel, IonPage } from '@ionic/react';\n\nexport const MyComponent: React.FC = () => {\n  const [items, setItems] = useState([{ id: 0, value: 'Item 0' }, { id: 1, value: 'Item 1' }, ...]);\n  \n  return (\n    <IonPage>\n      <IonContent>\n        {items.map(item => {\n          return (\n            <IonItem key={item.id}>\n              <IonLabel>{item.value}</IonLabel>\n            </IonItem>\n          )\n        })}\n      </IonContent>\n    </IonPage>\n  )\n}\n")),(0,i.kt)("p",null,"In this example, we have an array of objects called ",(0,i.kt)("inlineCode",{parentName:"p"},"items"),". Each object contains a ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," and an ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),". Using the ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," attribute, we pass the ",(0,i.kt)("inlineCode",{parentName:"p"},"item.id")," for each object. This ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," is used to provide a stable identity for each loop element."),(0,i.kt)("p",null,"For more information on how React renders lists using ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," see: ",(0,i.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/lists-and-keys.html"},"https://reactjs.org/docs/lists-and-keys.html")))}m.isMDXComponent=!0}}]);