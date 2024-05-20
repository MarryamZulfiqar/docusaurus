"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[94152],{61132:(e,a,n)=>{n.d(a,{Z:()=>l});var t=n(24246),s=(n(27378),n(40624));const r={tabItem:"tabItem_pnkT"};function l({children:e,hidden:a,className:n}){return(0,t.jsx)("div",{role:"tabpanel",className:(0,s.Z)(r.tabItem,n),hidden:a,children:e})}},97555:(e,a,n)=>{n.d(a,{Z:()=>Z});var t=n(24246),s=n(27378),r=n(40624),l=n(75527),i=n(3620),o=n(44479),c=n(62821),d=n(52196),u=n(53589);function b(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function h(e,a){return a=null!=a?a:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):function(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))})),e}function p(e){var a,n;return null!==(n=null===(a=s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===a?void 0:a.filter(Boolean))&&void 0!==n?n:[]}function m(e){const{values:a,children:n}=e;return(0,s.useMemo)((()=>{const e=null!=a?a:function(e){return p(e).map((({props:{value:e,label:a,attributes:n,default:t}})=>({value:e,label:a,attributes:n,default:t})))}(n);return function(e){const a=(0,d.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,n])}function g({value:e,tabValues:a}){return a.some((a=>a.value===e))}function j({queryString:e=!1,groupId:a}){const n=(0,i.k6)(),t=function({queryString:e=!1,groupId:a}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:e,groupId:a}),r=(0,c._X)(t),l=(0,s.useCallback)((e=>{if(!t)return;const a=new URLSearchParams(n.location.search);a.set(t,e),n.replace(h(function(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(a){b(e,a,n[a])}))}return e}({},n.location),{search:a.toString()}))}),[t,n]);return[r,l]}function x(e){const{defaultValue:a,queryString:n=!1,groupId:t}=e,r=m(e),[l,i]=(0,s.useState)((()=>function({defaultValue:e,tabValues:a}){if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!g({value:e,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var n;const t=null!==(n=a.find((e=>e.default)))&&void 0!==n?n:a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:a,tabValues:r}))),[c,d]=j({queryString:n,groupId:t}),[b,h]=function({groupId:e}){const a=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,t]=(0,u.Nk)(a);return[n,(0,s.useCallback)((e=>{a&&t.set(e)}),[a,t])]}({groupId:t}),p=(()=>{const e=null!=c?c:b;return g({value:e,tabValues:r})?e:null})();(0,o.Z)((()=>{p&&i(p)}),[p]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!g({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),h(e)}),[d,h,r]),tabValues:r}}var f=n(29088);const v={tabList:"tabList_Qoir",tabItem:"tabItem_AQgk"};function w(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function y(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(a){w(e,a,n[a])}))}return e}function T(e,a){return a=null!=a?a:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):function(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))})),e}function I({className:e,block:a,selectedValue:n,selectValue:s,tabValues:i}){const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{const a=e.currentTarget,t=o.indexOf(a),r=i[t].value;r!==n&&(c(a),s(r))},u=e=>{let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;var n;a=null!==(n=o[t])&&void 0!==n?n:o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;var t;a=null!==(t=o[n])&&void 0!==t?t:o[o.length-1];break}}null==a||a.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},e),children:i.map((({value:e,label:a,attributes:s})=>(0,t.jsx)("li",T(y({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,ref:e=>o.push(e),onKeyDown:u,onClick:d},s),{className:(0,r.Z)("tabs__item",v.tabItem,null==s?void 0:s.className,{"tabs__item--active":n===e}),children:null!=a?a:e}),e)))})}function O({lazy:e,children:a,selectedValue:n}){const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(e){const e=r.find((e=>e.props.value===n));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:r.map(((e,a)=>(0,s.cloneElement)(e,{key:a,hidden:e.props.value!==n})))})}function S(e){const a=x(e);return(0,t.jsxs)("div",{className:(0,r.Z)("tabs-container",v.tabList),children:[(0,t.jsx)(I,y({},a,e)),(0,t.jsx)(O,y({},a,e))]})}function Z(e){const a=(0,f.Z)();return(0,t.jsx)(S,T(y({},e),{children:p(e.children)}),String(a))}},6698:(e,a,n)=>{n.d(a,{Z:()=>c});var t=n(24246),s=(n(27378),n(40624));const r={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(a){l(e,a,n[a])}))}return e}function o(e,a){return a=null!=a?a:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):function(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))})),e}function c({children:e,minHeight:a,url:n="http://localhost:3000",style:l,bodyStyle:c}){return(0,t.jsxs)("div",{className:r.browserWindow,style:o(i({},l),{minHeight:a}),children:[(0,t.jsxs)("div",{className:r.browserWindowHeader,children:[(0,t.jsxs)("div",{className:r.buttons,children:[(0,t.jsx)("span",{className:r.dot,style:{background:"#f25f58"}}),(0,t.jsx)("span",{className:r.dot,style:{background:"#fbbe3c"}}),(0,t.jsx)("span",{className:r.dot,style:{background:"#58cb42"}})]}),(0,t.jsx)("div",{className:(0,s.Z)(r.browserWindowAddressBar,"text--truncate"),children:n}),(0,t.jsx)("div",{className:r.browserWindowMenuIcon,children:(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:r.bar}),(0,t.jsx)("span",{className:r.bar}),(0,t.jsx)("span",{className:r.bar})]})})]}),(0,t.jsx)("div",{className:r.browserWindowBody,style:c,children:e})]})}},46831:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>b,contentTitle:()=>d,default:()=>m,frontMatter:()=>c,metadata:()=>u,toc:()=>h});var t=n(24246),s=n(71670),r=n(6698),l=n(97555),i=n(61132);const o={red:"red_FE5X",orange:"orange_kp8w",yellow:"yellow_uGry"},c={id:"tabs",description:"Using tabs inside Docusaurus Markdown",slug:"/markdown-features/tabs"},d="Tabs",u={id:"guides/markdown-features/tabs",title:"Tabs",description:"Using tabs inside Docusaurus Markdown",source:"@site/docs/guides/markdown-features/markdown-features-tabs.mdx",sourceDirName:"guides/markdown-features",slug:"/markdown-features/tabs",permalink:"/docs/markdown-features/tabs",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/markdown-features/markdown-features-tabs.mdx",tags:[],version:"current",lastUpdatedBy:"S\xe9bastien Lorber",lastUpdatedAt:1716211104e3,frontMatter:{id:"tabs",description:"Using tabs inside Docusaurus Markdown",slug:"/markdown-features/tabs"},sidebar:"docs",previous:{title:"MDX and React",permalink:"/docs/markdown-features/react"},next:{title:"Code blocks",permalink:"/docs/markdown-features/code-blocks"}},b={},h=[{value:"Displaying a default tab",id:"displaying-a-default-tab",level:2},{value:"Syncing tab choices",id:"syncing-tab-choices",level:2},{value:"Customizing tabs",id:"customizing-tabs",level:2},{value:"Customizing tab headings",id:"customizing-tab-headings",level:3},{value:"Query string",id:"query-string",level:2}];function p(e){const a={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",...(0,s.a)(),...e.components},{Details:n}=a;return n||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"tabs",children:"Tabs"}),"\n","\n",(0,t.jsxs)(a.p,{children:["Docusaurus provides the ",(0,t.jsx)(a.code,{children:"<Tabs>"})," component that you can use in Markdown thanks to ",(0,t.jsx)(a.a,{href:"/docs/markdown-features/react",children:"MDX"}),":"]}),"\n","\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-jsx",children:'import Tabs from \'@theme/Tabs\';\nimport TabItem from \'@theme/TabItem\';\n\n<Tabs>\n  <TabItem value="apple" label="Apple" default>\n    This is an apple \ud83c\udf4e\n  </TabItem>\n  <TabItem value="orange" label="Orange">\n    This is an orange \ud83c\udf4a\n  </TabItem>\n  <TabItem value="banana" label="Banana">\n    This is a banana \ud83c\udf4c\n  </TabItem>\n</Tabs>\n'})}),"\n",(0,t.jsx)(r.Z,{children:(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(i.Z,{value:"apple",label:"Apple",children:"This is an apple \ud83c\udf4e"}),(0,t.jsx)(i.Z,{value:"orange",label:"Orange",children:"This is an orange \ud83c\udf4a"}),(0,t.jsx)(i.Z,{value:"banana",label:"Banana",children:"This is a banana \ud83c\udf4c"})]})}),"\n",(0,t.jsx)(a.hr,{}),"\n",(0,t.jsxs)(a.p,{children:["It is also possible to provide ",(0,t.jsx)(a.code,{children:"values"})," and ",(0,t.jsx)(a.code,{children:"defaultValue"})," props to ",(0,t.jsx)(a.code,{children:"Tabs"}),":"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-jsx",children:"<Tabs\n  defaultValue=\"apple\"\n  values={[\n    {label: 'Apple', value: 'apple'},\n    {label: 'Orange', value: 'orange'},\n    {label: 'Banana', value: 'banana'},\n  ]}>\n  <TabItem value=\"apple\">This is an apple \ud83c\udf4e</TabItem>\n  <TabItem value=\"orange\">This is an orange \ud83c\udf4a</TabItem>\n  <TabItem value=\"banana\">This is a banana \ud83c\udf4c</TabItem>\n</Tabs>\n"})}),"\n",(0,t.jsx)(r.Z,{children:(0,t.jsxs)(l.Z,{defaultValue:"apple",values:[{label:"Apple",value:"apple"},{label:"Orange",value:"orange"},{label:"Banana",value:"banana"}],children:[(0,t.jsx)(i.Z,{value:"apple",children:"This is an apple \ud83c\udf4e"}),(0,t.jsx)(i.Z,{value:"orange",children:"This is an orange \ud83c\udf4a"}),(0,t.jsx)(i.Z,{value:"banana",children:"This is a banana \ud83c\udf4c"})]})}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsxs)("summary",{children:[(0,t.jsx)("code",{children:"Tabs"})," props take precedence over the ",(0,t.jsx)("code",{children:"TabItem"})," props:"]}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-jsx",children:'<Tabs\n  defaultValue="apple"\n  values={[\n    {label: \'Apple 1\', value: \'apple\'},\n    {label: \'Orange 1\', value: \'orange\'},\n    {label: \'Banana 1\', value: \'banana\'},\n  ]}>\n  <TabItem value="apple" label="Apple 2">\n    This is an apple \ud83c\udf4e\n  </TabItem>\n  <TabItem value="orange" label="Orange 2">\n    This is an orange \ud83c\udf4a\n  </TabItem>\n  <TabItem value="banana" label="Banana 2" default>\n    This is a banana \ud83c\udf4c\n  </TabItem>\n</Tabs>\n'})}),(0,t.jsx)(r.Z,{children:(0,t.jsxs)(l.Z,{defaultValue:"apple",values:[{label:"Apple 1",value:"apple"},{label:"Orange 1",value:"orange"},{label:"Banana 1",value:"banana"}],children:[(0,t.jsx)(i.Z,{value:"apple",label:"Apple 2",children:"This is an apple \ud83c\udf4e"}),(0,t.jsx)(i.Z,{value:"orange",label:"Orange 2",children:"This is an orange \ud83c\udf4a"}),(0,t.jsx)(i.Z,{value:"banana",label:"Banana 2",default:!0,children:"This is a banana \ud83c\udf4c"})]})})]}),"\n",(0,t.jsxs)(a.admonition,{type:"tip",children:[(0,t.jsx)(a.p,{children:"By default, all tabs are rendered eagerly during the build process, and search engines can index hidden tabs."}),(0,t.jsxs)(a.p,{children:["It is possible to only render the default tab with ",(0,t.jsx)(a.code,{children:"<Tabs lazy />"}),"."]})]}),"\n",(0,t.jsx)(a.h2,{id:"displaying-a-default-tab",children:"Displaying a default tab"}),"\n",(0,t.jsxs)(a.p,{children:["The first tab is displayed by default, and to override this behavior, you can specify a default tab by adding ",(0,t.jsx)(a.code,{children:"default"})," to one of the tab items. You can also set the ",(0,t.jsx)(a.code,{children:"defaultValue"})," prop of the ",(0,t.jsx)(a.code,{children:"Tabs"})," component to the label value of your choice. For example, in the example above, either setting ",(0,t.jsx)(a.code,{children:"default"})," for the ",(0,t.jsx)(a.code,{children:'value="apple"'})," tab or setting ",(0,t.jsx)(a.code,{children:'defaultValue="apple"'}),' for the tabs forces the "Apple" tab to be open by default.']}),"\n",(0,t.jsxs)(a.p,{children:["Docusaurus will throw an error if a ",(0,t.jsx)(a.code,{children:"defaultValue"})," is provided for the ",(0,t.jsx)(a.code,{children:"Tabs"})," but it refers to a non-existing value. If you want none of the tabs to be shown by default, use ",(0,t.jsx)(a.code,{children:"defaultValue={null}"}),"."]}),"\n",(0,t.jsx)(a.h2,{id:"syncing-tab-choices",children:"Syncing tab choices"}),"\n",(0,t.jsxs)(a.p,{children:["You may want choices of the same kind of tabs to sync with each other. For example, you might want to provide different instructions for users on Windows vs users on macOS, and you want to change all OS-specific instructions tabs in one click. To achieve that, you can give all related tabs the same ",(0,t.jsx)(a.code,{children:"groupId"})," prop. Note that doing this will persist the choice in ",(0,t.jsx)(a.code,{children:"localStorage"})," and all ",(0,t.jsx)(a.code,{children:"<Tab>"})," instances with the same ",(0,t.jsx)(a.code,{children:"groupId"})," will update automatically when the value of one of them is changed. Note that group IDs are globally namespaced."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-jsx",children:'// highlight-next-line\n<Tabs groupId="operating-systems">\n  <TabItem value="win" label="Windows">Use Ctrl + C to copy.</TabItem>\n  <TabItem value="mac" label="macOS">Use Command + C to copy.</TabItem>\n</Tabs>\n\n// highlight-next-line\n<Tabs groupId="operating-systems">\n  <TabItem value="win" label="Windows">Use Ctrl + V to paste.</TabItem>\n  <TabItem value="mac" label="macOS">Use Command + V to paste.</TabItem>\n</Tabs>\n'})}),"\n",(0,t.jsxs)(r.Z,{children:[(0,t.jsxs)(l.Z,{groupId:"operating-systems",children:[(0,t.jsx)(i.Z,{value:"win",label:"Windows",children:"Use Ctrl + C to copy."}),(0,t.jsx)(i.Z,{value:"mac",label:"macOS",children:"Use Command + C to copy."})]}),(0,t.jsxs)(l.Z,{groupId:"operating-systems",children:[(0,t.jsx)(i.Z,{value:"win",label:"Windows",children:"Use Ctrl + V to paste."}),(0,t.jsx)(i.Z,{value:"mac",label:"macOS",children:"Use Command + V to paste."})]})]}),"\n",(0,t.jsxs)(a.p,{children:["For all tab groups that have the same ",(0,t.jsx)(a.code,{children:"groupId"}),", the possible values do not need to be the same. If one tab group is chosen a value that does not exist in another tab group with the same ",(0,t.jsx)(a.code,{children:"groupId"}),", the tab group with the missing value won't change its tab. You can see that from the following example. Try to select Linux, and the above tab groups don't change."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-jsx",children:'<Tabs groupId="operating-systems">\n  <TabItem value="win" label="Windows">\n    I am Windows.\n  </TabItem>\n  <TabItem value="mac" label="macOS">\n    I am macOS.\n  </TabItem>\n  <TabItem value="linux" label="Linux">\n    I am Linux.\n  </TabItem>\n</Tabs>\n'})}),"\n",(0,t.jsx)(r.Z,{children:(0,t.jsxs)(l.Z,{groupId:"operating-systems",children:[(0,t.jsx)(i.Z,{value:"win",label:"Windows",children:"I am Windows."}),(0,t.jsx)(i.Z,{value:"mac",label:"macOS",children:"I am macOS."}),(0,t.jsx)(i.Z,{value:"linux",label:"Linux",children:"I am Linux."})]})}),"\n",(0,t.jsx)(a.hr,{}),"\n",(0,t.jsx)(a.p,{children:"Tab choices with different group IDs will not interfere with each other:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-jsx",children:'// highlight-next-line\n<Tabs groupId="operating-systems">\n  <TabItem value="win" label="Windows">Windows in windows.</TabItem>\n  <TabItem value="mac" label="macOS">macOS is macOS.</TabItem>\n</Tabs>\n\n// highlight-next-line\n<Tabs groupId="non-mac-operating-systems">\n  <TabItem value="win" label="Windows">Windows is windows.</TabItem>\n  <TabItem value="unix" label="Unix">Unix is unix.</TabItem>\n</Tabs>\n'})}),"\n",(0,t.jsxs)(r.Z,{children:[(0,t.jsxs)(l.Z,{groupId:"operating-systems",children:[(0,t.jsx)(i.Z,{value:"win",label:"Windows",children:"Windows in windows."}),(0,t.jsx)(i.Z,{value:"mac",label:"macOS",children:"macOS is macOS."})]}),(0,t.jsxs)(l.Z,{groupId:"non-mac-operating-systems",children:[(0,t.jsx)(i.Z,{value:"win",label:"Windows",children:"Windows is windows."}),(0,t.jsx)(i.Z,{value:"unix",label:"Unix",children:"Unix is unix."})]})]}),"\n",(0,t.jsx)(a.h2,{id:"customizing-tabs",children:"Customizing tabs"}),"\n",(0,t.jsxs)(a.p,{children:["You might want to customize the appearance of a certain set of tabs. You can pass the string in ",(0,t.jsx)(a.code,{children:"className"})," prop, and the specified CSS class will be added to the ",(0,t.jsx)(a.code,{children:"Tabs"})," component:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-jsx",children:'// highlight-next-line\n<Tabs className="unique-tabs">\n  <TabItem value="Apple">This is an apple \ud83c\udf4e</TabItem>\n  <TabItem value="Orange">This is an orange \ud83c\udf4a</TabItem>\n  <TabItem value="Banana">This is a banana \ud83c\udf4c</TabItem>\n</Tabs>\n'})}),"\n",(0,t.jsx)(r.Z,{children:(0,t.jsxs)(l.Z,{className:"unique-tabs",children:[(0,t.jsx)(i.Z,{value:"Apple",children:"This is an apple \ud83c\udf4e"}),(0,t.jsx)(i.Z,{value:"Orange",children:"This is an orange \ud83c\udf4a"}),(0,t.jsx)(i.Z,{value:"Banana",children:"This is a banana \ud83c\udf4c"})]})}),"\n",(0,t.jsx)(a.h3,{id:"customizing-tab-headings",children:"Customizing tab headings"}),"\n",(0,t.jsxs)(a.p,{children:["You can also customize each tab heading independently by using the ",(0,t.jsx)(a.code,{children:"attributes"})," field. The extra props can be passed to the headings either through the ",(0,t.jsx)(a.code,{children:"values"})," prop in ",(0,t.jsx)(a.code,{children:"Tabs"}),", or props of each ",(0,t.jsx)(a.code,{children:"TabItem"}),"\u2014in the same way as you declare ",(0,t.jsx)(a.code,{children:"label"}),"."]}),"\n","\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-jsx",metastring:'title="some-doc.mdx"',children:'import styles from \'./styles.module.css\';\n\n<Tabs>\n  <TabItem value="apple" label="Apple" attributes={{className: styles.red}}>\n    This is an apple \ud83c\udf4e\n  </TabItem>\n  <TabItem value="orange" label="Orange" attributes={{className: styles.orange}}>\n    This is an orange \ud83c\udf4a\n  </TabItem>\n  <TabItem value="banana" label="Banana" attributes={{className: styles.yellow}}>\n    This is a banana \ud83c\udf4c\n  </TabItem>\n</Tabs>\n'})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-css",metastring:'title="styles.module.css"',children:".red {\n  color: red;\n}\n.red[aria-selected='true'] {\n  border-bottom-color: red;\n}\n\n.orange {\n  color: orange;\n}\n.orange[aria-selected='true'] {\n  border-bottom-color: orange;\n}\n\n.yellow {\n  color: yellow;\n}\n.yellow[aria-selected='true'] {\n  border-bottom-color: yellow;\n}\n"})}),"\n",(0,t.jsx)(r.Z,{children:(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(i.Z,{value:"apple",label:"Apple",attributes:{className:o.red},children:(0,t.jsx)(a.p,{children:"This is an apple \ud83c\udf4e"})}),(0,t.jsx)(i.Z,{value:"orange",label:"Orange",attributes:{className:o.orange},children:(0,t.jsx)(a.p,{children:"This is an orange \ud83c\udf4a"})}),(0,t.jsx)(i.Z,{value:"banana",label:"Banana",attributes:{className:o.yellow},children:(0,t.jsx)(a.p,{children:"This is a banana \ud83c\udf4c"})})]})}),"\n",(0,t.jsxs)(a.admonition,{type:"tip",children:[(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"className"})," would be merged with other default class names. You may also use a custom ",(0,t.jsx)(a.code,{children:"data-value"})," field (",(0,t.jsx)(a.code,{children:"{'data-value': 'apple'}"}),") paired with CSS attribute selectors:"]}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-css",metastring:'title="styles.module.css"',children:"li[role='tab'][data-value='apple'] {\n  color: red;\n}\n"})})]}),"\n",(0,t.jsx)(a.h2,{id:"query-string",children:"Query string"}),"\n",(0,t.jsx)(a.p,{children:"It is possible to persist the selected tab into the url search parameters. This enables you to share a link to a page which pre-selects the tab - linking from your Android app to documentation with the Android tabs pre-selected. This feature does not provide an anchor link - the browser will not scroll to the tab."}),"\n",(0,t.jsxs)(a.p,{children:["Use the ",(0,t.jsx)(a.code,{children:"queryString"})," prop to enable this feature and define the search param name to use."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-tsx",children:'// highlight-next-line\n<Tabs queryString="current-os">\n  <TabItem value="android" label="Android">\n    Android\n  </TabItem>\n  <TabItem value="ios" label="iOS">\n    iOS\n  </TabItem>\n</Tabs>\n'})}),"\n",(0,t.jsx)(r.Z,{children:(0,t.jsxs)(l.Z,{queryString:"current-os",children:[(0,t.jsx)(i.Z,{value:"android",label:"Android",children:"Android"}),(0,t.jsx)(i.Z,{value:"ios",label:"iOS",children:"iOS"})]})}),"\n",(0,t.jsxs)(a.p,{children:["As soon as a tab is clicked, a search parameter is added at the end of the url: ",(0,t.jsx)(a.code,{children:"?current-os=android"})," or ",(0,t.jsx)(a.code,{children:"?current-os=ios"}),"."]}),"\n",(0,t.jsxs)(a.admonition,{type:"tip",children:[(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"queryString"})," can be used together with ",(0,t.jsx)(a.code,{children:"groupId"}),"."]}),(0,t.jsxs)(a.p,{children:["For convenience, when the ",(0,t.jsx)(a.code,{children:"queryString"})," prop is ",(0,t.jsx)(a.code,{children:"true"}),", the ",(0,t.jsx)(a.code,{children:"groupId"})," value will be used as a fallback."]}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-tsx",children:'// highlight-next-line\n<Tabs groupId="current-os" queryString>\n  <TabItem value="android" label="Android">\n    Android\n  </TabItem>\n  <TabItem value="ios" label="iOS">\n    iOS\n  </TabItem>\n</Tabs>\n'})}),(0,t.jsx)(r.Z,{children:(0,t.jsxs)(l.Z,{queryString:!0,groupId:"current-os",children:[(0,t.jsx)(i.Z,{value:"android",label:"Android",children:"Android"}),(0,t.jsx)(i.Z,{value:"ios",label:"iOS",children:"iOS"})]})}),(0,t.jsxs)(a.p,{children:["When the page loads, the tab query string choice will be restored in priority over the ",(0,t.jsx)(a.code,{children:"groupId"})," choice (using ",(0,t.jsx)(a.code,{children:"localStorage"}),")."]})]})]})}function m(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},71670:(e,a,n)=>{n.d(a,{Z:()=>i,a:()=>l});var t=n(27378);const s={},r=t.createContext(s);function l(e){const a=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(r.Provider,{value:a},e.children)}}}]);