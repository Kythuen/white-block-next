import{_ as l,c as d,j as e,a,G as o,af as s,B as i,o as r}from"./chunks/framework.uyLDs8jX.js";const m=JSON.parse(`{"title":"Popup","description":"Show detail layer without interrupting operations and focus.","frontmatter":{"component":"popup","category":"Base","title":"Popup","description":"Show detail layer without interrupting operations and focus.","decoration":"/assets/img/components/popup.png"},"headers":[],"params":{"coverage":{"statements":"0%","branches":"0%","functions":"0%","lines":"0%"},"api":{"Popup":{"en":{"props":"\\"<table>\\\\n<thead>\\\\n<tr>\\\\n<th style=\\\\\\"text-align:left\\\\\\">Name</th>\\\\n<th style=\\\\\\"text-align:left\\\\\\">Type</th>\\\\n<th style=\\\\\\"text-align:left\\\\\\">Default</th>\\\\n<th style=\\\\\\"text-align:left\\\\\\">Description</th>\\\\n<th style=\\\\\\"text-align:center\\\\\\">Required</th>\\\\n</tr>\\\\n</thead>\\\\n<tbody>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">attach</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">string | HTMLElement</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>'body'</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Attach node of popup.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">placement</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><a href=\\\\\\"https://github.com/Kythuen/white-block-next/blob/main/packages/core/src/components/popup/types.ts\\\\\\">PopupPlacement</a></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>'top'</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Placement of the popup display. Reference to https://popper.js.org/docs/v2/constructors/#options.<br><code>'auto' | 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end'</code></td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">trigger</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><a href=\\\\\\"https://github.com/Kythuen/white-block-next/blob/main/packages/core/src/components/popup/types.ts\\\\\\">PopupTrigger</a></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>'click'</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">浮层显示的触发方式。<br><code>'hover' | 'press' | 'click' | 'focus' | 'contextmenu'</code></td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">arrow</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">boolean</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>false</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Show popup arrow or not.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">animate</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">boolean</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>true</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Animate when show popup.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">zIndex</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">number</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>1</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Layout index of popup.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">pure</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">boolean</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">No preset style.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">disabled</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">boolean</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Disable or not.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">destroyOnHide</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">boolean</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Destroy when popup hide.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">size</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><a href=\\\\\\"https://github.com/Kythuen/white-block-next/blob/main/packages/core/src/components/types.ts\\\\\\">SizeEnum</a> | number</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>'md'</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Size of the element.<br><code>'xs' | 'sm' | 'md' | 'lg' | 'xl'</code></td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">loading</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">boolean</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>false</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Loading or not.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">disabled</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">boolean</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>false</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Disable or not.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">value</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">undefined</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Value of popup. Supported <code>v-model</code> and <code>v-model:value</code>.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">modelValue</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">undefined</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Value of popup.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">defaultValue</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">undefined</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Default value of the popup.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">onShow</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">() =&gt; void</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Show action.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">onHide</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">() =&gt; void</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Hide action.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">onChange</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">(payload: T) =&gt; void</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Event emitted when popup value change.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">default</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Slot | string | <a href=\\\\\\"https://github.com/Kythuen/white-block-next/blob/main/packages/core/src/components/types.ts\\\\\\">VNode</a> | Function</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Slot of popup trigger.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">content</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Slot | string | <a href=\\\\\\"https://github.com/Kythuen/white-block-next/blob/main/packages/core/src/components/types.ts\\\\\\">VNode</a> | Function</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Slot of popup content.</td>\\\\n<td style=\\\\\\"text-align:center\\\\\\">N</td>\\\\n</tr>\\\\n</tbody>\\\\n</table>\\\\n\\"","events":"\\"<table>\\\\n<thead>\\\\n<tr>\\\\n<th style=\\\\\\"text-align:left\\\\\\">Name</th>\\\\n<th style=\\\\\\"text-align:left\\\\\\">Parameters</th>\\\\n<th style=\\\\\\"text-align:left\\\\\\">Description</th>\\\\n</tr>\\\\n</thead>\\\\n<tbody>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">show</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>([])</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Show action.</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">hide</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>([])</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Hide action.</td>\\\\n</tr>\\\\n<tr>\\\\n<td style=\\\\\\"text-align:left\\\\\\">change</td>\\\\n<td style=\\\\\\"text-align:left\\\\\\"><code>([payload: undefined])</code></td>\\\\n<td style=\\\\\\"text-align:left\\\\\\">Event emitted when popup value change.</td>\\\\n</tr>\\\\n</tbody>\\\\n</table>\\\\n\\""}}}},"relativePath":"components/popup.md","filePath":"components/popup.md"}`),p={name:"components/popup.md"};function c(g,t,y,f,x,u){const n=i("UsageBlock");return r(),d("div",null,[t[0]||(t[0]=e("h2",{id:"playground",tabindex:"-1"},[a("Playground "),e("a",{class:"header-anchor",href:"#playground","aria-label":'Permalink to "Playground"'},"​")],-1)),o(n,{component:"popup",fileType:"vue",options:"%7B%22input%22%3A%5B%7B%22name%22%3A%22attach%22%2C%22description%22%3A%22Attach%20node%20of%20popup.%22%2C%22value%22%3A%22body%22%7D%5D%2C%22number%22%3A%5B%7B%22name%22%3A%22zIndex%22%2C%22description%22%3A%22Layout%20index%20of%20popup.%22%2C%22value%22%3A1%7D%5D%2C%22toggle%22%3A%5B%7B%22name%22%3A%22arrow%22%2C%22description%22%3A%22Show%20popup%20arrow%20or%20not.%22%2C%22value%22%3Afalse%7D%2C%7B%22name%22%3A%22animate%22%2C%22description%22%3A%22Animate%20when%20show%20popup.%22%2C%22value%22%3Atrue%7D%2C%7B%22name%22%3A%22pure%22%2C%22description%22%3A%22No%20preset%20style.%22%7D%2C%7B%22name%22%3A%22disabled%22%2C%22description%22%3A%22Disable%20or%20not.%22%2C%22value%22%3Afalse%7D%2C%7B%22name%22%3A%22destroyOnHide%22%2C%22description%22%3A%22Destroy%20when%20popup%20hide.%22%7D%2C%7B%22name%22%3A%22loading%22%2C%22description%22%3A%22Loading%20or%20not.%22%2C%22value%22%3Afalse%7D%5D%2C%22select%22%3A%5B%7B%22name%22%3A%22placement%22%2C%22description%22%3A%22Placement%20of%20the%20popup%20display.%20Reference%20to%20https%3A%2F%2Fpopper.js.org%2Fdocs%2Fv2%2Fconstructors%2F%23options.%22%2C%22value%22%3A%22top%22%2C%22options%22%3A%5B%22auto%22%2C%22top%22%2C%22top-start%22%2C%22top-end%22%2C%22bottom%22%2C%22bottom-start%22%2C%22bottom-end%22%2C%22left%22%2C%22left-start%22%2C%22left-end%22%2C%22right%22%2C%22right-start%22%2C%22right-end%22%5D%7D%2C%7B%22name%22%3A%22trigger%22%2C%22description%22%3A%22%E6%B5%AE%E5%B1%82%E6%98%BE%E7%A4%BA%E7%9A%84%E8%A7%A6%E5%8F%91%E6%96%B9%E5%BC%8F%E3%80%82%22%2C%22value%22%3A%22click%22%2C%22options%22%3A%5B%22hover%22%2C%22press%22%2C%22click%22%2C%22focus%22%2C%22contextmenu%22%5D%7D%2C%7B%22name%22%3A%22size%22%2C%22description%22%3A%22Size%20of%20the%20element.%22%2C%22value%22%3A%22md%22%2C%22options%22%3A%5B%22xs%22%2C%22sm%22%2C%22md%22%2C%22lg%22%2C%22xl%22%5D%7D%5D%7D",data:"%7B%7D",source:"%3Ctemplate%3E%0A%20%20%3Cwb-popup%3E%0A%20%20%20%20%3Cwb-button%20type%3D%22base%22%3ETrigger%3C%2Fwb-button%3E%0A%20%20%20%20%3Ctemplate%20%23content%3E%0A%20%20%20%20%20%20%3Cdiv%3EContent%3C%2Fdiv%3E%0A%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%3C%2Fwb-popup%3E%0A%3C%2Ftemplate%3E%0A",contentHeight:""}),t[1]||(t[1]=s('<h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="type" tabindex="-1">type <a class="header-anchor" href="#type" aria-label="Permalink to &quot;type&quot;">​</a></h3><p>Use property <code>type</code> to control the display style of <code>Popup</code>.</p><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h2><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h2><h2 id="composables" tabindex="-1">Composables <a class="header-anchor" href="#composables" aria-label="Permalink to &quot;Composables&quot;">​</a></h2><p>You can also use <code>Popup</code> in a composable manner.</p>',7))])}const b=l(p,[["render",c]]);export{m as __pageData,b as default};
