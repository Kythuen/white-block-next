import{_ as l,c as a,j as e,a as o,G as d,af as s,B as i,o as r}from"./chunks/framework.uyLDs8jX.js";const b=JSON.parse(`{"title":"FormItem","description":"Description a form item.","frontmatter":{"component":"form-item","category":"Form","title":"FormItem","description":"Description a form item.","decoration":"/assets/img/components/form-item.png"},"headers":[],"params":{"coverage":{},"api":{"FormItem":{"en":{"props":"\\"<table>\\\\n<thead>\\\\n<tr>\\\\n<th style=\\\\\\"text-align:left\\\\\\">Name</th>\\\\n<th style=\\\\\\"text-align:left\\\\\\">Type</th>\\\\n<th style=\\\\\\"text-align:left\\\\\\">Default</th>\\\\n<th style=\\\\\\"text-align:left\\\\\\">Description</th>\\\\n<th style=\\\\\\"text-align:center\\\\\\">Required</th>\\\\n</tr>\\\\n</thead>\\\\n<tbody>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">name</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">string</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Name of the form item.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">label</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">string</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Label of the form item.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">labelWidth</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">number</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Width of the form item label.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">rules</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Record[]</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Validate rules of the form item data.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">size</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><a href=\\\\\\"https://github.com/Kythuen/white-block-next/blob/main/packages/core/src/components/types.ts\\\\\\">SizeEnum</a> | number</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>'md'</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Size of the element.<br><code>'xs' | 'sm' | 'md' | 'lg' | 'xl'</code></td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">onClick</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">(e: MouseEvent) =&gt; void</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Click action.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">default</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Slot | string | <a href=\\\\\\"https://github.com/Kythuen/white-block-next/blob/main/packages/core/src/components/types.ts\\\\\\">VNode</a> | Function</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Content of the <code>form-item</code>.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n</tbody>\\\\n</table>\\\\n\\"","events":"\\"<table>\\\\n<thead>\\\\n<tr>\\\\n<th style=\\\\\\"text-align:left\\\\\\">Name</th>\\\\n<th style=\\\\\\"text-align:left\\\\\\">Parameters</th>\\\\n<th style=\\\\\\"text-align:left\\\\\\">Description</th>\\\\n</tr>\\\\n</thead>\\\\n<tbody>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">click</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>([e: MouseEvent])</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Click action.</td>\\\\n</tr>\\\\n</tbody>\\\\n</table>\\\\n\\""},"zh":{"props":"\\"<table>\\\\n<thead>\\\\n<tr>\\\\n<th style=\\\\\\"text-align:left\\\\\\">名称</th>\\\\n<th style=\\\\\\"text-align:left\\\\\\">类型</th>\\\\n<th style=\\\\\\"text-align:left\\\\\\">默认值</th>\\\\n<th style=\\\\\\"text-align:left\\\\\\">说明</th>\\\\n<th style=\\\\\\"text-align:center\\\\\\">必传</th>\\\\n</tr>\\\\n</thead>\\\\n<tbody>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">size</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><a href=\\\\\\"https://github.com/Kythuen/white-block-next/blob/main/packages/core/src/components/types.ts\\\\\\">SizeEnum</a> | number</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>'md'</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">组件尺寸。<br><code>'xs' | 'sm' | 'md' | 'lg' | 'xl'</code></td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">onClick</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">(e: MouseEvent) =&gt; void</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">点击事件处理函数, 参数为 <code>MouseEvent</code> 对象。</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">default</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Slot | string | <a href=\\\\\\"https://github.com/Kythuen/white-block-next/blob/main/packages/core/src/components/types.ts\\\\\\">VNode</a> | Function</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">按钮的内容插槽。</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n</tbody>\\\\n</table>\\\\n\\"","events":"\\"<table>\\\\n<thead>\\\\n<tr>\\\\n<th style=\\\\\\"text-align:left\\\\\\">名称</th>\\\\n<th style=\\\\\\"text-align:left\\\\\\">参数</th>\\\\n<th style=\\\\\\"text-align:left\\\\\\">说明</th>\\\\n</tr>\\\\n</thead>\\\\n<tbody>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">click</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>([e: MouseEvent])</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">点击时触发, 参数为 <code>MouseEvent</code> 对象。</td>\\\\n</tr>\\\\n</tbody>\\\\n</table>\\\\n\\""}}}},"relativePath":"components/form-item.md","filePath":"components/form-item.md"}`),c={name:"components/form-item.md"};function m(f,t,h,y,g,x){const n=i("UsageBlock");return r(),a("div",null,[t[0]||(t[0]=e("h2",{id:"playground",tabindex:"-1"},[o("Playground "),e("a",{class:"header-anchor",href:"#playground","aria-label":'Permalink to "Playground"'},"​")],-1)),d(n,{component:"form-item",fileType:"json",options:"%7B%22input%22%3A%5B%7B%22name%22%3A%22name%22%2C%22description%22%3A%22Name%20of%20the%20form%20item.%22%7D%2C%7B%22name%22%3A%22label%22%2C%22description%22%3A%22Label%20of%20the%20form%20item.%22%2C%22value%22%3A%22%22%7D%5D%2C%22number%22%3A%5B%7B%22name%22%3A%22labelWidth%22%2C%22description%22%3A%22Width%20of%20the%20form%20item%20label.%22%7D%5D%2C%22toggle%22%3A%5B%5D%2C%22select%22%3A%5B%7B%22name%22%3A%22size%22%2C%22description%22%3A%22Size%20of%20the%20element.%22%2C%22value%22%3A%22md%22%2C%22options%22%3A%5B%22xs%22%2C%22sm%22%2C%22md%22%2C%22lg%22%2C%22xl%22%5D%7D%5D%7D",data:"%7B%22content%22%3A%22Try%20it%22%7D",source:"",contentHeight:""}),t[1]||(t[1]=s('<h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="type" tabindex="-1">type <a class="header-anchor" href="#type" aria-label="Permalink to &quot;type&quot;">​</a></h3><p>Use property <code>type</code> to control the display style of <code>FormItem</code>.</p><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h2><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h2><h2 id="composables" tabindex="-1">Composables <a class="header-anchor" href="#composables" aria-label="Permalink to &quot;Composables&quot;">​</a></h2><p>You can also use <code>FormItem</code> in a composable manner.</p>',7))])}const u=l(c,[["render",m]]);export{b as __pageData,u as default};
