import{_ as p,c as u,j as e,a as n,G as l,af as d,w as o,B as i,o as c}from"./chunks/framework.uyLDs8jX.js";const x=JSON.parse(`{"title":"ButtonGroup","description":"按钮组，使一组按钮拥有统一的样式和行为.","frontmatter":{"component":"button-group","category":"form","title":"ButtonGroup","description":"按钮组，使一组按钮拥有统一的样式和行为.","decoration":"/assets/img/components/button-group.png"},"headers":[],"params":{"coverage":{"statements":"100%","branches":"92.3%","functions":"100%","lines":"100%"},"api":{"ButtonGroup":{"en":{"props":"\\"<table>\\\\n<thead>\\\\n<tr>\\\\n<th style=\\\\\\"text-align:left\\\\\\">Name</th>\\\\n<th style=\\\\\\"text-align:left\\\\\\">Type</th>\\\\n<th style=\\\\\\"text-align:left\\\\\\">Default</th>\\\\n<th style=\\\\\\"text-align:left\\\\\\">Description</th>\\\\n<th style=\\\\\\"text-align:center\\\\\\">Required</th>\\\\n</tr>\\\\n</thead>\\\\n<tbody>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">options</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><a href=\\\\\\"https://github.com/Kythuen/white-block-next/blob/main/packages/core/src/components/button-group/types.ts\\\\\\">ButtonGroupOptions</a></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Options data of radio-group.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">buttonProps</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Button<a href=\\\\\\"https://github.com/Kythuen/white-block-next/blob/main/packages/core/src/components/button/api.ts\\\\\\">Props</a></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Continuous transmission the properties for the <code>Button</code> component.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">type</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><a href=\\\\\\"https://github.com/Kythuen/white-block-next/blob/main/packages/core/src/components/button/types.ts\\\\\\">ButtonType</a></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>'base'</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Display style of the button-group.<br><code>'base' | 'plain' | 'outline' | 'ghost' | 'dashed' | 'link' | 'text'</code></td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">theme</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><a href=\\\\\\"https://github.com/Kythuen/white-block-next/blob/main/packages/core/src/components/button/types.ts\\\\\\">ButtonTheme</a></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>'primary'</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Display color of the button-group.<br><code>'default' | 'primary' | 'success' | 'warning' | 'danger'</code></td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">shape</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><a href=\\\\\\"https://github.com/Kythuen/white-block-next/blob/main/packages/core/src/components/button-group/types.ts\\\\\\">ButtonGroupShape</a></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>'rectangle'</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Shape of the button in button-group.<br><code>'rectangle' | 'square' | 'round' | 'circle'</code></td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">separate</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">boolean</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>false</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Separate button group or not.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">gap</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><a href=\\\\\\"https://github.com/Kythuen/white-block-next/blob/main/packages/core/src/components/types.ts\\\\\\">SizeEnum</a> | number</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>'md'</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Gap when separate.<br><code>'xs' | 'sm' | 'md' | 'lg' | 'xl'</code></td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">allowTypes</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">string[]</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>[&quot;WbButton&quot;]</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Children node types allowed.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">tag</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">string</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>'button'</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">HTML tag of the button element in button-group.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">size</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><a href=\\\\\\"https://github.com/Kythuen/white-block-next/blob/main/packages/core/src/components/types.ts\\\\\\">SizeEnum</a> | number</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>'md'</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Size of the element.<br><code>'xs' | 'sm' | 'md' | 'lg' | 'xl'</code></td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">disabled</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">boolean</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>false</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Disable or not.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">onClick</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">(e: MouseEvent) =&gt; void</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Click action.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">default</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Slot | <a href=\\\\\\"https://github.com/Kythuen/white-block-next/blob/main/packages/core/src/components/types.ts\\\\\\">VNode</a> | Function</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Default slot of the button group.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n</tbody>\\\\n</table>\\\\n\\"","events":"\\"<table>\\\\n<thead>\\\\n<tr>\\\\n<th style=\\\\\\"text-align:left\\\\\\">Name</th>\\\\n<th style=\\\\\\"text-align:left\\\\\\">Parameters</th>\\\\n<th style=\\\\\\"text-align:left\\\\\\">Description</th>\\\\n</tr>\\\\n</thead>\\\\n<tbody>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">click</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>([key: string, e: MouseEvent])</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Click action.</td>\\\\n</tr>\\\\n</tbody>\\\\n</table>\\\\n\\""},"zh":{"props":"\\"<table>\\\\n<thead>\\\\n<tr>\\\\n<th style=\\\\\\"text-align:left\\\\\\">名称</th>\\\\n<th style=\\\\\\"text-align:left\\\\\\">类型</th>\\\\n<th style=\\\\\\"text-align:left\\\\\\">默认值</th>\\\\n<th style=\\\\\\"text-align:left\\\\\\">说明</th>\\\\n<th style=\\\\\\"text-align:center\\\\\\">必传</th>\\\\n</tr>\\\\n</thead>\\\\n<tbody>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">options</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><a href=\\\\\\"https://github.com/Kythuen/white-block-next/blob/main/packages/core/src/components/button-group/types.ts\\\\\\">ButtonGroupOptions</a></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">按钮组子元素的配置数据。</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">buttonProps</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Button<a href=\\\\\\"https://github.com/Kythuen/white-block-next/blob/main/packages/core/src/components/button/api.ts\\\\\\">Props</a></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">透传 <code>Button</code> 组件的属性。</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">type</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><a href=\\\\\\"https://github.com/Kythuen/white-block-next/blob/main/packages/core/src/components/button/types.ts\\\\\\">ButtonType</a></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>'base'</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">按钮组的显示样式。<br><code>'base' | 'plain' | 'outline' | 'ghost' | 'dashed' | 'link' | 'text'</code></td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">theme</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><a href=\\\\\\"https://github.com/Kythuen/white-block-next/blob/main/packages/core/src/components/button/types.ts\\\\\\">ButtonTheme</a></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>'primary'</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">按钮组的显示颜色。<br><code>'default' | 'primary' | 'success' | 'warning' | 'danger'</code></td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">shape</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><a href=\\\\\\"https://github.com/Kythuen/white-block-next/blob/main/packages/core/src/components/button-group/types.ts\\\\\\">ButtonGroupShape</a></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>'rectangle'</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">按钮组中按钮的形状。<br><code>'rectangle' | 'square' | 'round' | 'circle'</code></td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">separate</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">boolean</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>false</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">是否分离展示.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">gap</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><a href=\\\\\\"https://github.com/Kythuen/white-block-next/blob/main/packages/core/src/components/types.ts\\\\\\">SizeEnum</a> | number</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>'md'</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">若分离展示时的间距.<br><code>'xs' | 'sm' | 'md' | 'lg' | 'xl'</code></td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">allowTypes</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">string[]</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>[&quot;WbButton&quot;]</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">允许的子元素类型.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">tag</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">string</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>'button'</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">按钮组子元素为 <code>WbButton</code> 时, <code>button</code> 元素的 HTML 标签类型。</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">size</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><a href=\\\\\\"https://github.com/Kythuen/white-block-next/blob/main/packages/core/src/components/types.ts\\\\\\">SizeEnum</a> | number</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>'md'</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">组件尺寸。<br><code>'xs' | 'sm' | 'md' | 'lg' | 'xl'</code></td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">disabled</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">boolean</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>false</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">是否禁用。</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">onClick</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">(e: MouseEvent) =&gt; void</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">单击操作。</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">default</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Slot | <a href=\\\\\\"https://github.com/Kythuen/white-block-next/blob/main/packages/core/src/components/types.ts\\\\\\">VNode</a> | Function</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">按钮组的默认插槽。</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n</tbody>\\\\n</table>\\\\n\\"","events":"\\"<table>\\\\n<thead>\\\\n<tr>\\\\n<th style=\\\\\\"text-align:left\\\\\\">名称</th>\\\\n<th style=\\\\\\"text-align:left\\\\\\">参数</th>\\\\n<th style=\\\\\\"text-align:left\\\\\\">说明</th>\\\\n</tr>\\\\n</thead>\\\\n<tbody>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">click</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>([key: string])</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">单击操作。</td>\\\\n</tr>\\\\n</tbody>\\\\n</table>\\\\n\\""}}}},"relativePath":"zh/components/button-group.md","filePath":"zh/components/button-group.md"}`),A={name:"zh/components/button-group.md"};function g(b,t,y,h,C,m){const r=i("UsageBlock"),a=i("CustomUsageBlock"),s=i("DemoBlock");return c(),u("div",null,[t[8]||(t[8]=e("h2",{id:"playground",tabindex:"-1"},[n("Playground "),e("a",{class:"header-anchor",href:"#playground","aria-label":'Permalink to "Playground"'},"​")],-1)),l(r,{component:"button-group",fileType:"json",options:"%7B%22input%22%3A%5B%7B%22name%22%3A%22tag%22%2C%22description%22%3A%22HTML%20tag%20of%20the%20button%20element%20in%20button-group.%22%2C%22value%22%3A%22button%22%7D%5D%2C%22number%22%3A%5B%5D%2C%22toggle%22%3A%5B%7B%22name%22%3A%22separate%22%2C%22description%22%3A%22Separate%20button%20group%20or%20not.%22%2C%22value%22%3Afalse%7D%2C%7B%22name%22%3A%22disabled%22%2C%22description%22%3A%22Disable%20or%20not.%22%2C%22value%22%3Afalse%7D%5D%2C%22select%22%3A%5B%7B%22name%22%3A%22type%22%2C%22description%22%3A%22Display%20style%20of%20the%20button-group.%22%2C%22value%22%3A%22base%22%2C%22options%22%3A%5B%22base%22%2C%22plain%22%2C%22outline%22%2C%22ghost%22%2C%22dashed%22%2C%22link%22%2C%22text%22%5D%7D%2C%7B%22name%22%3A%22theme%22%2C%22description%22%3A%22Display%20color%20of%20the%20button-group.%22%2C%22value%22%3A%22primary%22%2C%22options%22%3A%5B%22default%22%2C%22primary%22%2C%22success%22%2C%22warning%22%2C%22danger%22%5D%7D%2C%7B%22name%22%3A%22shape%22%2C%22description%22%3A%22Shape%20of%20the%20button%20in%20button-group.%22%2C%22value%22%3A%22rectangle%22%2C%22options%22%3A%5B%22rectangle%22%2C%22square%22%2C%22round%22%2C%22circle%22%5D%7D%2C%7B%22name%22%3A%22gap%22%2C%22description%22%3A%22Gap%20when%20separate.%22%2C%22value%22%3A%22md%22%2C%22options%22%3A%5B%22xs%22%2C%22sm%22%2C%22md%22%2C%22lg%22%2C%22xl%22%5D%7D%2C%7B%22name%22%3A%22size%22%2C%22description%22%3A%22Size%20of%20the%20element.%22%2C%22value%22%3A%22md%22%2C%22options%22%3A%5B%22xs%22%2C%22sm%22%2C%22md%22%2C%22lg%22%2C%22xl%22%5D%7D%5D%7D",data:"%7B%22options%22%3A%5B%7B%22key%22%3A%221%22%2C%22content%22%3A%22button1%22%7D%2C%7B%22key%22%3A%222%22%2C%22content%22%3A%22button2%22%7D%2C%7B%22key%22%3A%223%22%2C%22content%22%3A%22button3%22%7D%5D%7D",source:"",contentHeight:""}),t[9]||(t[9]=d('<h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>When use property <code>options</code>.</p><p>Properties set on the <code>ButtonGroup</code> will have lower priority than <code>Button</code> inside it.</p></div><h3 id="type-theme" tabindex="-1">type &amp; theme <a class="header-anchor" href="#type-theme" aria-label="Permalink to &quot;type &amp; theme&quot;">​</a></h3><p>Combining use property <code>type</code> and <code>theme</code> to control the display style of buttons.</p>',4)),l(a,{component:"button-group",fileType:"json",fileName:"type_theme",options:"%7B%22input%22%3A%5B%5D%2C%22number%22%3A%5B%5D%2C%22toggle%22%3A%5B%7B%22name%22%3A%22disabled%22%2C%22value%22%3Afalse%7D%5D%2C%22select%22%3A%5B%7B%22name%22%3A%22type%22%2C%22value%22%3A%22plain%22%2C%22options%22%3A%5B%7B%22label%22%3A%22base%22%2C%22value%22%3A%22base%22%7D%2C%7B%22label%22%3A%22plain%22%2C%22value%22%3A%22plain%22%7D%2C%7B%22label%22%3A%22dashed%22%2C%22value%22%3A%22dashed%22%7D%2C%7B%22label%22%3A%22outline%22%2C%22value%22%3A%22outline%22%7D%2C%7B%22label%22%3A%22ghost%22%2C%22value%22%3A%22ghost%22%7D%2C%7B%22label%22%3A%22link%22%2C%22value%22%3A%22link%22%7D%2C%7B%22label%22%3A%22text%22%2C%22value%22%3A%22text%22%7D%5D%7D%2C%7B%22name%22%3A%22theme%22%2C%22value%22%3A%22primary%22%2C%22options%22%3A%5B%7B%22label%22%3A%22default%22%2C%22value%22%3A%22default%22%7D%2C%7B%22label%22%3A%22primary%22%2C%22value%22%3A%22primary%22%7D%2C%7B%22label%22%3A%22success%22%2C%22value%22%3A%22success%22%7D%2C%7B%22label%22%3A%22warning%22%2C%22value%22%3A%22warning%22%7D%2C%7B%22label%22%3A%22danger%22%2C%22value%22%3A%22danger%22%7D%5D%7D%5D%7D",items:"%5B%7B%22options%22%3A%5B%7B%22key%22%3A%221%22%2C%22content%22%3A%22button1%22%7D%2C%7B%22key%22%3A%222%22%2C%22content%22%3A%22button2%22%7D%2C%7B%22key%22%3A%223%22%2C%22content%22%3A%22button3%22%7D%5D%7D%5D",data:"%7B%22type%22%3A%22plain%22%2C%22theme%22%3A%22primary%22%2C%22disabled%22%3Afalse%7D",source:"",contentHeight:""},{default:o(()=>t[0]||(t[0]=[e("p",null,"button-group/examples/type_theme.json",-1)])),_:1}),t[10]||(t[10]=e("h3",{id:"shape",tabindex:"-1"},[n("shape "),e("a",{class:"header-anchor",href:"#shape","aria-label":'Permalink to "shape"'},"​")],-1)),t[11]||(t[11]=e("p",null,"Sometime, you need different shapes.",-1)),l(a,{component:"button-group",fileType:"json",fileName:"shape",options:"%7B%22input%22%3A%5B%5D%2C%22number%22%3A%5B%5D%2C%22toggle%22%3A%5B%7B%22name%22%3A%22disabled%22%2C%22value%22%3Afalse%7D%5D%2C%22select%22%3A%5B%7B%22name%22%3A%22shape%22%2C%22value%22%3A%22rectangle%22%2C%22options%22%3A%5B%7B%22label%22%3A%22rectangle%22%2C%22value%22%3A%22rectangle%22%7D%2C%7B%22label%22%3A%22round%22%2C%22value%22%3A%22round%22%7D%5D%7D%5D%7D",items:"%5B%7B%22type%22%3A%22plain%22%2C%22options%22%3A%5B%7B%22key%22%3A%221%22%2C%22content%22%3A%22button1%22%7D%2C%7B%22key%22%3A%222%22%2C%22content%22%3A%22button2%22%7D%2C%7B%22key%22%3A%223%22%2C%22content%22%3A%22button3%22%7D%5D%7D%5D",data:"%7B%22shape%22%3A%22rectangle%22%2C%22disabled%22%3Afalse%7D",source:"",contentHeight:""},{default:o(()=>t[1]||(t[1]=[e("p",null,"button-group/examples/shape.json",-1)])),_:1}),t[12]||(t[12]=e("h3",{id:"tag",tabindex:"-1"},[n("tag "),e("a",{class:"header-anchor",href:"#tag","aria-label":'Permalink to "tag"'},"​")],-1)),t[13]||(t[13]=e("p",null,"Sometime, button need better semantic HTML tags for accessibility.",-1)),t[14]||(t[14]=e("p",null,"Then you can use the default attributes of the tag you set.",-1)),t[15]||(t[15]=e("p",null,[n("For example, you can add "),e("code",null,"href"),n(" into item of the "),e("code",null,"options"),n(" property when tag is "),e("code",null,"a"),n(", as seen below.")],-1)),l(a,{component:"button-group",fileType:"json",fileName:"tag",options:"%7B%22input%22%3A%5B%5D%2C%22number%22%3A%5B%5D%2C%22toggle%22%3A%5B%7B%22name%22%3A%22disabled%22%2C%22value%22%3Afalse%7D%5D%2C%22select%22%3A%5B%7B%22name%22%3A%22tag%22%2C%22value%22%3A%22button%22%2C%22options%22%3A%5B%7B%22label%22%3A%22button%22%2C%22value%22%3A%22button%22%7D%2C%7B%22label%22%3A%22div%22%2C%22value%22%3A%22div%22%7D%2C%7B%22label%22%3A%22a%22%2C%22value%22%3A%22a%22%7D%2C%7B%22label%22%3A%22span%22%2C%22value%22%3A%22span%22%7D%5D%7D%5D%7D",items:"%5B%7B%22type%22%3A%22plain%22%2C%22options%22%3A%5B%7B%22key%22%3A%221%22%2C%22content%22%3A%22button1%22%2C%22href%22%3A%22https%3A%2F%2Fkythuen.github.io%2Fwhite-block%22%7D%2C%7B%22key%22%3A%222%22%2C%22content%22%3A%22button2%22%2C%22href%22%3A%22https%3A%2F%2Fkythuen.github.io%2Fwhite-block%22%7D%2C%7B%22key%22%3A%223%22%2C%22content%22%3A%22button3%22%2C%22href%22%3A%22https%3A%2F%2Fkythuen.github.io%2Fwhite-block%22%7D%5D%7D%5D",data:"%7B%22tag%22%3A%22button%22%2C%22disabled%22%3Afalse%7D",source:"",contentHeight:""},{default:o(()=>t[2]||(t[2]=[e("p",null,"button-group/examples/tag.json",-1)])),_:1}),t[16]||(t[16]=e("h3",{id:"separate-gap",tabindex:"-1"},[n("separate & gap "),e("a",{class:"header-anchor",href:"#separate-gap","aria-label":'Permalink to "separate & gap"'},"​")],-1)),t[17]||(t[17]=e("p",null,"Sometime, you need buttons to be separated.",-1)),t[18]||(t[18]=e("p",null,[n("Set "),e("code",null,"separate"),n(" to control display buttons separated or not. And use "),e("code",null,"gap"),n(" to control the gap between buttons.")],-1)),l(a,{component:"button-group",fileType:"json",fileName:"separate",options:"%7B%22input%22%3A%5B%5D%2C%22number%22%3A%5B%5D%2C%22toggle%22%3A%5B%7B%22name%22%3A%22separate%22%2C%22value%22%3Atrue%7D%5D%2C%22select%22%3A%5B%7B%22name%22%3A%22gap%22%2C%22value%22%3A%22md%22%2C%22options%22%3A%5B%7B%22label%22%3A%22xs%22%2C%22value%22%3A%22xs%22%7D%2C%7B%22label%22%3A%22sm%22%2C%22value%22%3A%22sm%22%7D%2C%7B%22label%22%3A%22md%22%2C%22value%22%3A%22md%22%7D%2C%7B%22label%22%3A%22lg%22%2C%22value%22%3A%22lg%22%7D%2C%7B%22label%22%3A%22xl%22%2C%22value%22%3A%22xl%22%7D%5D%7D%5D%7D",items:"%5B%7B%22type%22%3A%22primary%22%2C%22options%22%3A%5B%7B%22key%22%3A%221%22%2C%22content%22%3A%22button1%22%7D%2C%7B%22key%22%3A%222%22%2C%22content%22%3A%22button2%22%7D%2C%7B%22key%22%3A%223%22%2C%22content%22%3A%22button3%22%7D%5D%7D%5D",data:"%7B%22gap%22%3A%22md%22%2C%22separate%22%3Atrue%7D",source:"",contentHeight:""},{default:o(()=>t[3]||(t[3]=[e("p",null,"button-group/examples/separate.json",-1)])),_:1}),t[19]||(t[19]=e("h3",{id:"allowtypes",tabindex:"-1"},[n("allowTypes "),e("a",{class:"header-anchor",href:"#allowtypes","aria-label":'Permalink to "allowTypes"'},"​")],-1)),t[20]||(t[20]=e("p",null,[n("By default, only "),e("code",null,"WbButton"),n(" in "),e("code",null,"WbButtonGroup"),n(" will be shown, and you can use "),e("code",null,"allowTypes"),n(" to control. Open the devtool on control panel you can see the warning.")],-1)),l(s,{description:"",path:"button-group/examples/allow_types.vue",source:"%3Ctemplate%3E%0A%20%20%3Cwb-button-group%20%40click%3D%22clickHandler%22%3E%0A%20%20%20%20%3Cwb-button%20key%3D%221%22%20type%3D%22plain%22%3Ebutton1%3C%2Fwb-button%3E%0A%20%20%20%20%3Cwb-button%20key%3D%222%22%3Ebutton2%3C%2Fwb-button%3E%0A%20%20%20%20%3Cdiv%3E111%3C%2Fdiv%3E%0A%20%20%20%20%3Cwb-button%20key%3D%223%22%20type%3D%22plain%22%3Ebutton3%3C%2Fwb-button%3E%0A%20%20%3C%2Fwb-button-group%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Afunction%20clickHandler(key%3A%20string)%20%7B%0A%20%20console.log(%60click%3A%20button%24%7Bkey%7D%60)%0A%7D%0A%3C%2Fscript%3E%0A"},{default:o(()=>t[4]||(t[4]=[e("p",null,"button-group/examples/allow_types.vue",-1)])),_:1}),t[21]||(t[21]=d('<h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h2><p>Provide slot <code>default</code> to define the content.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>When use <code>Slot</code>.</p><p>Properties set on the <code>ButtonGroup</code> will be ignore.</p></div>',3)),l(s,{description:"",path:"button-group/examples/slot.vue",source:"%3Ctemplate%3E%0A%20%20%3Cwb-button-group%20%40click%3D%22clickHandler%22%3E%0A%20%20%20%20%3Cwb-button%20key%3D%221%22%20type%3D%22plain%22%3Ebutton1%3C%2Fwb-button%3E%0A%20%20%20%20%3Cwb-button%20key%3D%222%22%3Ebutton2%3C%2Fwb-button%3E%0A%20%20%20%20%3Cwb-button%20key%3D%223%22%20type%3D%22plain%22%3Ebutton3%3C%2Fwb-button%3E%0A%20%20%3C%2Fwb-button-group%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Afunction%20clickHandler(key%3A%20string)%20%7B%0A%20%20console.log(%60click%3A%20button%24%7Bkey%7D%60)%0A%7D%0A%3C%2Fscript%3E%0A"},{default:o(()=>t[5]||(t[5]=[e("p",null,"button-group/examples/slot.vue",-1)])),_:1}),t[22]||(t[22]=e("h2",{id:"events",tabindex:"-1"},[n("Events "),e("a",{class:"header-anchor",href:"#events","aria-label":'Permalink to "Events"'},"​")],-1)),t[23]||(t[23]=e("p",null,[n("Click action emit event "),e("code",null,"click"),n(".")],-1)),l(s,{description:"",path:"button-group/examples/event.vue",source:"%3Ctemplate%3E%0A%20%20%3Cwb-space%20vertical%3E%0A%20%20%20%20%3Cwb-button-group%20%40click%3D%22clickHandler%22%20separate%3E%0A%20%20%20%20%20%20%3Cwb-button%20key%3D%22theme%22%20type%3D%22ghost%22%20theme%3D%22primary%22%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20w-5%20h-5%20class%3D%22i-heroicons-swatch-20-solid%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fwb-button%3E%0A%20%20%20%20%20%20%3Cwb-button%20key%3D%22search%22%20type%3D%22ghost%22%20theme%3D%22default%22%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20w-5%20h-5%20class%3D%22i-heroicons-magnifying-glass%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fwb-button%3E%0A%20%20%20%20%20%20%3Cwb-button%20key%3D%22locale%22%20type%3D%22ghost%22%20theme%3D%22default%22%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20w-5%20h-5%20class%3D%22i-tdesign-translate%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fwb-button%3E%0A%20%20%20%20%20%20%3Cwb-button%20key%3D%22mode%22%20type%3D%22ghost%22%20theme%3D%22default%22%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20w-5%20h-5%20class%3D%22i-heroicons-moon-20-solid%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fwb-button%3E%0A%20%20%20%20%20%20%3Cwb-button%0A%20%20%20%20%20%20%20%20key%3D%22github%22%0A%20%20%20%20%20%20%20%20type%3D%22ghost%22%0A%20%20%20%20%20%20%20%20theme%3D%22default%22%0A%20%20%20%20%20%20%20%20tag%3D%22a%22%0A%20%20%20%20%20%20%20%20target%3D%22__blank%22%0A%20%20%20%20%20%20%20%20href%3D%22https%3A%2F%2Fgithub.com%2FKythuen%2Fwhite-block%22%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20w-5%20h-5%20class%3D%22i-simple-icons-github%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fwb-button%3E%0A%20%20%20%20%3C%2Fwb-button-group%3E%0A%0A%20%20%20%20%3Cwb-button-group%0A%20%20%20%20%20%20%3Abutton-props%3D%22%7B%20type%3A%20'plain'%20%7D%22%0A%20%20%20%20%20%20%3Aoptions%3D%22options%22%0A%20%20%20%20%20%20separate%0A%20%20%20%20%20%20%3Aallow-types%3D%22%5B'WbButton'%2C%20'WbPopup'%2C%20'div'%5D%22%0A%20%20%20%20%20%20%40click%3D%22clickHandler%22%0A%20%20%20%20%2F%3E%0A%0A%20%20%20%20%3Cwb-button-group%20separate%20%40click%3D%22clickHandler%22%3E%0A%20%20%20%20%20%20%3Cwb-popup%0A%20%20%20%20%20%20%20%20v-for%3D%22item%20in%20options2%22%0A%20%20%20%20%20%20%20%20%3Akey%3D%22item.key%22%0A%20%20%20%20%20%20%20%20trigger%3D%22hover%22%0A%20%20%20%20%20%20%20%20placement%3D%22bottom%22%0A%20%20%20%20%20%20%20%20size%3D%22xs%22%0A%20%20%20%20%20%20%20%20%3Acontent%3D%22item.label%22%0A%20%20%20%20%20%20%20%20arrow%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3Cwb-button%0A%20%20%20%20%20%20%20%20%20%20%3Akey%3D%22item.key%22%0A%20%20%20%20%20%20%20%20%20%20type%3D%22ghost%22%0A%20%20%20%20%20%20%20%20%20%20theme%3D%22default%22%0A%20%20%20%20%20%20%20%20%20%20%3Acontent%3D%22item.content%22%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C!--%20%3Ctemplate%20%23content%3E%7B%7B%20item.label%20%7D%7D%3C%2Ftemplate%3E%20--%3E%0A%20%20%20%20%20%20%3C%2Fwb-popup%3E%0A%20%20%20%20%3C%2Fwb-button-group%3E%0A%20%20%3C%2Fwb-space%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20setup%20lang%3D%22tsx%22%3E%0Aconst%20options%20%3D%20%5B%0A%20%20%7B%0A%20%20%20%20key%3A%20'theme'%2C%0A%20%20%20%20type%3A%20'ghost'%2C%0A%20%20%20%20theme%3A%20'primary'%2C%0A%20%20%20%20content%3A%20%3Cdiv%20w-5%20h-5%20class%3D%22i-heroicons-swatch-20-solid%22%20%2F%3E%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20key%3A%20'search'%2C%0A%20%20%20%20type%3A%20'ghost'%2C%0A%20%20%20%20theme%3A%20'default'%2C%0A%20%20%20%20content%3A%20%3Cdiv%20w-5%20h-5%20class%3D%22i-heroicons-magnifying-glass%22%20%2F%3E%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20key%3A%20'locale'%2C%0A%20%20%20%20type%3A%20'ghost'%2C%0A%20%20%20%20theme%3A%20'default'%2C%0A%20%20%20%20content%3A%20%3Cdiv%20w-5%20h-5%20class%3D%22i-tdesign-translate%22%20%2F%3E%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20key%3A%20'mode'%2C%0A%20%20%20%20type%3A%20'ghost'%2C%0A%20%20%20%20theme%3A%20'default'%2C%0A%20%20%20%20content%3A%20%3Cdiv%20w-5%20h-5%20class%3D%22i-heroicons-moon-20-solid%22%20%2F%3E%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20key%3A%20'mode'%2C%0A%20%20%20%20type%3A%20'ghost'%2C%0A%20%20%20%20theme%3A%20'default'%2C%0A%20%20%20%20content%3A%20%3Cdiv%20w-5%20h-5%20class%3D%22i-simple-icons-github%22%20%2F%3E%2C%0A%20%20%20%20tag%3A%20'a'%2C%0A%20%20%20%20href%3A%20'https%3A%2F%2Fgithub.com%2FKythuen%2Fwhite-block'%2C%0A%20%20%20%20target%3A%20'__blank'%0A%20%20%7D%0A%5D%0Aconst%20options2%20%3D%20%5B%0A%20%20%7B%0A%20%20%20%20key%3A%20'align-left'%2C%0A%20%20%20%20content%3A%20%3Cdiv%20w-5%20h-5%20class%3D%22i-tdesign%3Aformat-vertical-align-left%22%20%2F%3E%2C%0A%20%20%20%20label%3A%20'Align%20Left'%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20key%3A%20'align-center'%2C%0A%20%20%20%20content%3A%20%3Cdiv%20w-5%20h-5%20class%3D%22i-tdesign%3Aformat-vertical-align-center%22%20%2F%3E%2C%0A%20%20%20%20label%3A%20'Align%20Center'%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20key%3A%20'align-right'%2C%0A%20%20%20%20content%3A%20%3Cdiv%20w-5%20h-5%20class%3D%22i-tdesign%3Aformat-vertical-align-right%22%20%2F%3E%2C%0A%20%20%20%20label%3A%20'Align%20Right'%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20key%3A%20'align-side'%2C%0A%20%20%20%20content%3A%20%3Cdiv%20w-5%20h-5%20class%3D%22i-tdesign%3Aview-list%22%20%2F%3E%2C%0A%20%20%20%20label%3A%20'Align%20Side'%0A%20%20%7D%0A%5D%0A%0Afunction%20clickHandler(key%3A%20string)%20%7B%0A%20%20console.log(%60click%3A%20button%20%5B%24%7Bkey%7D%5D%60)%0A%7D%0A%3C%2Fscript%3E%0A"},{default:o(()=>t[6]||(t[6]=[e("p",null,"button-group/examples/event.vue",-1)])),_:1}),t[24]||(t[24]=e("h2",{id:"composables",tabindex:"-1"},[n("Composables "),e("a",{class:"header-anchor",href:"#composables","aria-label":'Permalink to "Composables"'},"​")],-1)),t[25]||(t[25]=e("p",null,[n("You can also use "),e("code",null,"ButtonGroup"),n(" in a composable manner.")],-1)),l(s,{description:"",path:"button-group/examples/composables.vue",source:"%3Ctemplate%3E%0A%20%20%3CMyButtonGroup%20%40click%3D%22handleClick%22%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0A%2F%2F%20%40ts-ignore%0Aimport%20%7B%20useButtonGroup%20%7D%20from%20'white-block'%0A%0Aconst%20%7B%20node%3A%20MyButtonGroup%20%7D%20%3D%20useButtonGroup(%7B%0A%20%20type%3A%20'plain'%2C%0A%20%20options%3A%20%5B%0A%20%20%20%20%7B%20key%3A%20'1'%2C%20content%3A%20'button1'%20%7D%2C%0A%20%20%20%20%7B%20key%3A%20'2'%2C%20content%3A%20'button2'%20%7D%2C%0A%20%20%20%20%7B%20key%3A%20'3'%2C%20content%3A%20'button3'%20%7D%0A%20%20%5D%0A%7D)%0A%0Afunction%20handleClick(key%3A%20string)%20%7B%0A%20%20console.log('click%20button%3A'%2C%20key)%0A%7D%0A%3C%2Fscript%3E%0A"},{default:o(()=>t[7]||(t[7]=[e("p",null,"button-group/examples/composables.vue",-1)])),_:1})])}const D=p(A,[["render",g]]);export{x as __pageData,D as default};
