import{_ as r,c as y,j as e,a as l,G as n,w as a,af as g,B as d,o as c}from"./chunks/framework.uyLDs8jX.js";const C=JSON.parse(`{"title":"滑块","description":"用于选择一个百分比。","frontmatter":{"component":"slider","category":"Form","title":"滑块","description":"用于选择一个百分比。","decoration":"/assets/img/components/slider.png"},"headers":[],"params":{"coverage":{"statements":"0%","branches":"0%","functions":"0%","lines":"0%"},"api":{"Slider":{"en":{"props":"\\"<table>\\\\n<thead>\\\\n<tr>\\\\n<th style=\\\\\\"text-align:left\\\\\\">Name</th>\\\\n<th style=\\\\\\"text-align:left\\\\\\">Type</th>\\\\n<th style=\\\\\\"text-align:left\\\\\\">Default</th>\\\\n<th style=\\\\\\"text-align:left\\\\\\">Description</th>\\\\n<th style=\\\\\\"text-align:center\\\\\\">Required</th>\\\\n</tr>\\\\n</thead>\\\\n<tbody>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">max</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">number</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Maximum value.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">min</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">number</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Minimum value.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">popupProps</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Popup<a href=\\\\\\"https://github.com/Kythuen/white-block-next/blob/main/packages/core/src/components/popup/api.ts\\\\\\">Props</a></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Continuous transmission the properties for the <code>Popup</code> component.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">size</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><a href=\\\\\\"https://github.com/Kythuen/white-block-next/blob/main/packages/core/src/components/types.ts\\\\\\">SizeEnum</a> | number</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>'md'</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Size of the element.<br><code>'xs' | 'sm' | 'md' | 'lg' | 'xl'</code></td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">disabled</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">boolean</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>false</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Disable or not.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">readonly</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">boolean</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>false</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Readonly or not.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">value</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">undefined</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Value of slider. Supported <code>v-model</code> and <code>v-model:value</code>.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">modelValue</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">undefined</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Value of slider.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">defaultValue</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">undefined</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Default value of the slider.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">onChange</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">(payload: T) =&gt; void</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Event emitted when slider value change.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n</tbody>\\\\n</table>\\\\n\\"","events":"\\"<table>\\\\n<thead>\\\\n<tr>\\\\n<th style=\\\\\\"text-align:left\\\\\\">Name</th>\\\\n<th style=\\\\\\"text-align:left\\\\\\">Parameters</th>\\\\n<th style=\\\\\\"text-align:left\\\\\\">Description</th>\\\\n</tr>\\\\n</thead>\\\\n<tbody>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">change</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>([payload: undefined])</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Event emitted when slider value change.</td>\\\\n</tr>\\\\n</tbody>\\\\n</table>\\\\n\\""},"zh":{"props":"\\"<table>\\\\n<thead>\\\\n<tr>\\\\n<th style=\\\\\\"text-align:left\\\\\\">名称</th>\\\\n<th style=\\\\\\"text-align:left\\\\\\">类型</th>\\\\n<th style=\\\\\\"text-align:left\\\\\\">默认值</th>\\\\n<th style=\\\\\\"text-align:left\\\\\\">说明</th>\\\\n<th style=\\\\\\"text-align:center\\\\\\">必传</th>\\\\n</tr>\\\\n</thead>\\\\n<tbody>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">max</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">number</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">最大值。</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">min</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">number</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">最小值。</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">popupProps</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Popup<a href=\\\\\\"https://github.com/Kythuen/white-block-next/blob/main/packages/core/src/components/popup/api.ts\\\\\\">Props</a></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">透传属性到 <code>Popup</code> 组件。</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">size</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><a href=\\\\\\"https://github.com/Kythuen/white-block-next/blob/main/packages/core/src/components/types.ts\\\\\\">SizeEnum</a> | number</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>'md'</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">组件尺寸。<br><code>'xs' | 'sm' | 'md' | 'lg' | 'xl'</code></td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">disabled</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">boolean</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>false</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">是否禁用。</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">readonly</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">boolean</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>false</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">是否只读。</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">value</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">undefined</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">组件 slider 的绑定值。 支持 <code>v-model</code> 和 <code>v-model:value</code> 语法糖。</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">modelValue</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">undefined</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">组件 slider 的绑定值。</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">defaultValue</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">undefined</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">组件 slider 的默认值。</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">onChange</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">(payload: T) =&gt; void</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">组件 slider 值改变时触发的事件。</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n</tbody>\\\\n</table>\\\\n\\"","events":"\\"<table>\\\\n<thead>\\\\n<tr>\\\\n<th style=\\\\\\"text-align:left\\\\\\">名称</th>\\\\n<th style=\\\\\\"text-align:left\\\\\\">参数</th>\\\\n<th style=\\\\\\"text-align:left\\\\\\">说明</th>\\\\n</tr>\\\\n</thead>\\\\n<tbody>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">change</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>([payload: undefined])</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">组件 slider 值改变时触发的事件。</td>\\\\n</tr>\\\\n</tbody>\\\\n</table>\\\\n\\""}}}},"relativePath":"zh/components/slider.md","filePath":"zh/components/slider.md"}`),f={name:"zh/components/slider.md"};function x(p,t,m,u,h,b){const s=d("UsageBlock"),i=d("CustomUsageBlock"),o=d("DemoBlock");return c(),y("div",null,[t[2]||(t[2]=e("h2",{id:"演示",tabindex:"-1"},[l("演示 "),e("a",{class:"header-anchor",href:"#演示","aria-label":'Permalink to "演示"'},"​")],-1)),n(s,{component:"slider",fileType:"json",options:"%7B%22input%22%3A%5B%5D%2C%22number%22%3A%5B%7B%22name%22%3A%22max%22%2C%22description%22%3A%22Maximum%20value.%22%7D%2C%7B%22name%22%3A%22min%22%2C%22description%22%3A%22Minimum%20value.%22%7D%5D%2C%22toggle%22%3A%5B%7B%22name%22%3A%22disabled%22%2C%22description%22%3A%22Disable%20or%20not.%22%2C%22value%22%3Afalse%7D%2C%7B%22name%22%3A%22readonly%22%2C%22description%22%3A%22Readonly%20or%20not.%22%2C%22value%22%3Afalse%7D%5D%2C%22select%22%3A%5B%7B%22name%22%3A%22size%22%2C%22description%22%3A%22Size%20of%20the%20element.%22%2C%22value%22%3A%22md%22%2C%22options%22%3A%5B%22xs%22%2C%22sm%22%2C%22md%22%2C%22lg%22%2C%22xl%22%5D%7D%5D%7D",data:"%7B%22content%22%3A%22Try%20it%22%7D",source:"",contentHeight:""}),t[3]||(t[3]=e("h2",{id:"组件属性",tabindex:"-1"},[l("组件属性 "),e("a",{class:"header-anchor",href:"#组件属性","aria-label":'Permalink to "组件属性"'},"​")],-1)),t[4]||(t[4]=e("h3",{id:"type-类型",tabindex:"-1"},[l("type 类型 "),e("a",{class:"header-anchor",href:"#type-类型","aria-label":'Permalink to "type 类型"'},"​")],-1)),t[5]||(t[5]=e("p",null,[l("结合使用属性 "),e("code",null,"type"),l(" 和 "),e("code",null,"theme"),l(" 来控制 "),e("code",null,"Slider"),l(" 的显示样式。")],-1)),n(i,{component:"slider",fileType:"json",fileName:"type",options:"%7B%22input%22%3A%5B%5D%2C%22number%22%3A%5B%5D%2C%22toggle%22%3A%5B%7B%22name%22%3A%22loading%22%2C%22value%22%3Afalse%7D%2C%7B%22name%22%3A%22disabled%22%2C%22value%22%3Afalse%7D%5D%2C%22select%22%3A%5B%7B%22name%22%3A%22theme%22%2C%22value%22%3A%22primary%22%2C%22options%22%3A%5B%7B%22label%22%3A%22primary%22%2C%22value%22%3A%22primary%22%7D%2C%7B%22label%22%3A%22success%22%2C%22value%22%3A%22success%22%7D%2C%7B%22label%22%3A%22warning%22%2C%22value%22%3A%22warning%22%7D%2C%7B%22label%22%3A%22danger%22%2C%22value%22%3A%22danger%22%7D%2C%7B%22label%22%3A%22white%22%2C%22value%22%3A%22white%22%7D%2C%7B%22label%22%3A%22default%22%2C%22value%22%3A%22default%22%7D%5D%7D%5D%7D",items:"%5B%7B%22type%22%3A%22base%22%2C%22content%22%3A%22base%22%7D%2C%7B%22type%22%3A%22plain%22%2C%22content%22%3A%22plain%22%7D%2C%7B%22type%22%3A%22dashed%22%2C%22content%22%3A%22dashed%22%7D%2C%7B%22type%22%3A%22outline%22%2C%22content%22%3A%22outline%22%7D%2C%7B%22type%22%3A%22ghost%22%2C%22content%22%3A%22ghost%22%7D%2C%7B%22type%22%3A%22link%22%2C%22content%22%3A%22link%22%7D%2C%7B%22type%22%3A%22text%22%2C%22content%22%3A%22text%22%7D%5D",data:"%7B%22theme%22%3A%22primary%22%2C%22loading%22%3Afalse%2C%22disabled%22%3Afalse%7D",source:"",contentHeight:""},{default:a(()=>t[0]||(t[0]=[e("p",null,"slider/examples/type.json",-1)])),_:1}),t[6]||(t[6]=g('<h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h2><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h2><p>点击操作发出事件 <code>click</code>.</p><h2 id="composables" tabindex="-1">Composables <a class="header-anchor" href="#composables" aria-label="Permalink to &quot;Composables&quot;">​</a></h2><p>您也可以用组合式的方式使用 <code>Slider</code>。</p>',5)),n(o,{description:"",path:"slider/examples/composables.vue",source:"%3Ctemplate%3E%0A%20%20%3CMySlider%20%40click%3D%22handleClick%22%3E%20button%20%3C%2FMySlider%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0A%2F%2F%20%40ts-ignore%0Aimport%20%7B%20useSlider%20%7D%20from%20'white-block'%0A%0Aconst%20%7B%20node%3A%20MySlider%20%7D%20%3D%20useSlider(%7B%0A%20%20type%3A%20'plain'%0A%7D)%0A%0Afunction%20handleClick(e%3A%20MouseEvent)%20%7B%0A%20%20console.log('click%3A'%2C%20e)%0A%7D%0A%3C%2Fscript%3E%0A"},{default:a(()=>t[1]||(t[1]=[e("p",null,"slider/examples/composables.vue",-1)])),_:1})])}const D=r(f,[["render",x]]);export{C as __pageData,D as default};
