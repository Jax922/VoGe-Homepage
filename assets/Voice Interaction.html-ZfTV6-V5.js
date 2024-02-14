import{_ as i,r as l,o as h,c as r,a as o,b as t,d as s,w as n,e}from"./app-BvhRhtZ6.js";const d="/VoGe-Homepage/assets/bar-CbW5WIzf.png",c="/VoGe-Homepage/assets/line-BL668OZ5.png",u="/VoGe-Homepage/assets/bubblechart-CzmBjZW5.png",p={},m=e('<h2 id="bar-chart" tabindex="-1"><a class="header-anchor" href="#bar-chart"><span>Bar Chart</span></a></h2><p>The bar chart is a chart that presents categorical data with rectangular bars with heights proportional to the values that they represent. The chart is interactive and the user can control the chart to show, highlight data elements, and change the chart type to line chart in VoGe-Portal. The following is an example of a bar chart:</p><p><img src="'+d+`" alt="alt text"></p><ul><li>Position 1: The X axis</li><li>Position 2: The Y axis</li><li>Position 3: The Title</li><li>Position 4: The Data Elements</li></ul><p>In the presentation, the user can interact with the chart using voice commands. The following are the voice commands that can be used to interact with the bar or line chart:</p><table><thead><tr><th>Voice Commands</th><th>Description</th><th>Keywords</th><th>Example</th></tr></thead><tbody><tr><td>Show X-Axis</td><td>Display the X-axis on the chart</td><td>Show X-Axis</td><td>&quot;Show X-axis&quot;</td></tr><tr><td>Show Y-axis</td><td>Display the Y-axis on the chart</td><td>Show, Y-axis</td><td>&quot;Show Y-axis&quot;</td></tr><tr><td>Show Data Elements</td><td>Display all data elements on the chart</td><td>-</td><td>-</td></tr><tr><td>Highlight Data Elements</td><td>Highlight specific data elements</td><td>-</td><td>-</td></tr></tbody></table><ul><li>Show X-axis</li></ul><p>X-axis is the horizontal axis of the chart. Users can choose the showing mode of the X-axis in VoGe-Portal. It supports to show the whole X-axis(X-axis line + ticks) together or show the X-axis line and ticks separately.</p><p>Users can use the keywords or the <code>X-axis name</code> to show the X-axis. For example, &quot;Show X-axis&quot; or &quot;Show the Days&quot; in our example.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># Show X-axis Keywords</span>
<span class="token string">&quot;X-axis&quot;</span>, <span class="token string">&quot;X axis&quot;</span>, <span class="token string">&quot;horizontal axis&quot;</span>, <span class="token string">&quot;horizontal&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Show Y-axis</li></ul>`,11),g=e(`<p>Users can use the keywords or the <code>Y-axis name</code> to show the Y-axis. For example, &quot;Show Y-axis&quot; or &quot;Show the Sales&quot;, if &quot;Sales&quot; is the Y-axis name of the chart.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># Show Y-axis Keywords</span>
<span class="token string">&quot;y axis&quot;</span>, <span class="token string">&quot;y-axis&quot;</span>, <span class="token string">&quot;vertical axis&quot;</span>, <span class="token string">&quot;vertical&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Show Data Elements</li></ul><p>Users can use the <code>X-axis tick</code> name to show the data elements. For example, &quot;Show the data elements of Monday&quot; in our example. It is also supported to show the data elements of multiple X-axis ticks. For example, &quot;Show the data elements of Monday and Tuesday&quot;.</p>`,4),q=e('<ul><li>Highlight Data Elements</li></ul><p>When the data elements are shown, users can use the <code>X-axis tick</code> name to highlight the data elements. For example, &quot;Highlight the data elements of Monday&quot; in our example. It is also supported to highlight the data elements of multiple X-axis ticks. For example, &quot;Highlight the data elements of Monday and Tuesday&quot;.</p><h2 id="line-chart" tabindex="-1"><a class="header-anchor" href="#line-chart"><span>Line Chart</span></a></h2><p>The line chart is a chart that presents information with a series of data points connected by straight line segments. The chart is interactive and the user can control the chart to show, highlight data elements, and change the chart type to bar chart in VoGe-Portal. The following is an example of a line chart:</p><p><img src="'+c+'" alt="alt text"></p><ul><li>Position 1: The X axis</li><li>Position 2: The Y axis</li><li>Position 3: The Legend</li><li>Position 4: The Data Elements of a Legend</li><li>Position 5: The Data Elements of a Legend</li></ul><p>In the presentation, the user can interact with the chart using voice commands same as the bar chart. You can refer to the bar chart for the voice commands.</p><h2 id="animated-bubble-chart" tabindex="-1"><a class="header-anchor" href="#animated-bubble-chart"><span>Animated Bubble Chart</span></a></h2><p>The animated bubble chart is a chart that shows the change of data over time. It is a scatter plot with the size of the bubbles representing a propetry of the data(eg: population, GDP, etc.). The chart is animated to show the change of the data over time. The chart is interactive and the user can control the animation, highlight data elements, and split and reunite data elements, etc.</p><p>The following is an example of an animated bubble chart:</p><ul><li>Position 1: The X axis</li><li>Position 2: The Y axis</li><li>Position 3: The Title</li><li>Position 4: The Year</li><li>Position 5: The Data Elements</li></ul><p><img src="'+u+`" alt="alt text"></p><p>In the presentation, the user can interact with the chart using voice commands. The following are the voice commands that can be used to interact with the chart:</p><table><thead><tr><th>Voice Commands</th><th>Description</th><th>Keywords</th><th>Example</th></tr></thead><tbody><tr><td>Show X-axis</td><td>Display the X-axis on the chart</td><td>Show, X-axis</td><td>&quot;Show X-axis&quot;</td></tr><tr><td>Show Y-axis</td><td>Display the Y-axis on the chart</td><td>Show, Y-axis</td><td>&quot;Show Y-axis&quot;</td></tr><tr><td>Show Title</td><td>Display the title of the chart</td><td>-</td><td>-</td></tr><tr><td>Show Year</td><td>Display the year on the chart</td><td>-</td><td>-</td></tr><tr><td>Show Data Elements</td><td>Display all data elements on the chart</td><td>-</td><td>-</td></tr><tr><td>Highlight Data Elements</td><td>Highlight specific data elements</td><td>-</td><td>-</td></tr><tr><td>Play Animation</td><td>Start the chart animation</td><td>Play, Animation</td><td>&quot;Play Animation&quot;</td></tr><tr><td>Stop Animation</td><td>Stop the chart animation</td><td>Stop, Animation</td><td>&quot;Stop Animation&quot;</td></tr><tr><td>Rewind</td><td>Rewind the chart animation</td><td>Backing to [year]</td><td>Backing to the year of 1900</td></tr><tr><td>Move to</td><td>Move the animation to a specific point</td><td>Move, Animation</td><td>&quot;Move to [year]&quot;</td></tr><tr><td>Animation Speed Faster</td><td>Increase the speed of the animation</td><td>Faster, Animation Speed</td><td>&quot;Animation Speed Faster&quot;</td></tr><tr><td>Animation Speed Slower</td><td>Decrease the speed of the animation</td><td>Slower, Animation Speed</td><td>&quot;Animation Speed Slower&quot;</td></tr><tr><td>Split a Data Element</td><td>Separate a data element into parts</td><td>Split, Data Element</td><td>&quot;Split a Data Element&quot;</td></tr><tr><td>Reunite a Data Element</td><td>Combine split parts of a data element</td><td>Reunite, Data Element</td><td>&quot;Reunite a Data Element&quot;</td></tr></tbody></table><ul><li>Show X-axis</li></ul><p>Users can use the voice command &quot;Show X-axis&quot; to display the X-axis on the chart.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># Show X-axis Keywords</span>
<span class="token string">&quot;X-axis&quot;</span>, <span class="token string">&quot;X axis&quot;</span>, <span class="token string">&quot;horizontal axis&quot;</span>, <span class="token string">&quot;horizontal&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Show Y-axis</li></ul><p>Users can use the voice command &quot;Show Y-axis&quot; to display the Y-axis on the chart.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># Show Y-axis Keywords</span>
<span class="token string">&quot;y axis&quot;</span>, <span class="token string">&quot;y-axis&quot;</span>, <span class="token string">&quot;vertical axis&quot;</span>, <span class="token string">&quot;vertical&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Show Title</li></ul>`,21),b=e(`<ul><li>Show Year</li></ul><p>The Year is shown in the 4th position of above example figure. Users can use the voice command should contain the first year of the timeline. For example, &quot;Show the year of 1800&quot;.</p><blockquote><p>Regarding the <code>Title</code> and <code>Year</code>, if users forget to show them by voice command, the chart will show the <code>Title</code> and <code>Year</code> automatically when the chart is playing.</p></blockquote><ul><li>Show Data Elements</li></ul><p>Users can use the data group name or the color of the data group to show the data elements step by step. For example, &quot;Bule is the Asia&quot;. The chart will show the data elements of Asia. Users can also use the data group name to show the data elements. For example, &quot;Show the data elements of Asia&quot;. It is also supported to show the data elements of multiple data groups. For example, &quot;Show the data elements of Asia and Europe&quot;.</p><ul><li>Highlight Data Elements</li></ul><p>When the data elements are shown, users can use the data group name or the color of the data group to highlight the data elements. For example, &quot;Highlight the data elements of Asia&quot;. The chart will highlight the data elements of Asia. Users can also use the data group name to highlight the data elements. For example, &quot;Highlight the data elements of Asia&quot;. It is also supported to highlight the data elements of multiple data groups. For example, &quot;Highlight the data elements of Asia and Europe&quot;.</p><ul><li>Play Animation</li></ul><p>When the chart is not playing, users can use the voice command &quot;Play Animation&quot; to start the chart animation.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># Play Animation Keywords</span>
<span class="token string">&quot;play&quot;</span>, <span class="token string">&quot;start&quot;</span>, <span class="token string">&quot;start here&quot;</span>, <span class="token string">&quot;play here&quot;</span>, <span class="token string">&quot;playing&quot;</span>,
 <span class="token string">&quot;starting&quot;</span>, <span class="token string">&quot;begin&quot;</span>, <span class="token string">&quot;beginning&quot;</span>, <span class="token string">&quot;begin here&quot;</span>, <span class="token string">&quot;beginning here&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Stop Animation</li></ul><p>When the chart is playing, users can use the voice command &quot;Stop Animation&quot; to stop the chart animation.Users can also add the year to stop the animation at a specific year. For example, &quot;Stop Animation at 2000&quot;.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># Stop Animation Keywords</span>
<span class="token string">&quot;pause&quot;</span>, <span class="token string">&quot;stop&quot;</span>, <span class="token string">&quot;stop here&quot;</span>, <span class="token string">&quot;pause here&quot;</span>, <span class="token string">&quot;stopping&quot;</span>, 
<span class="token string">&quot;pausing&quot;</span>, <span class="token string">&quot;freeze&quot;</span>, <span class="token string">&quot;holding&quot;</span>, <span class="token string">&quot;hold&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Rewind</li></ul>`,14),v=e(`<blockquote><p>When users use the voice command &quot;Rewind&quot; to rewind the chart animation, the chart will stop the animation automatically.</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># Rewind Keywords</span>
<span class="token string">&quot;back&quot;</span>, <span class="token string">&quot;go back&quot;</span>, <span class="token string">&quot;backing&quot;</span>, <span class="token string">&quot;rewind&quot;</span>, <span class="token string">&quot;rewinding&quot;</span>,
<span class="token string">&quot;backing to&quot;</span>, <span class="token string">&quot;go back to&quot;</span>, <span class="token string">&quot;back to&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Move to</li></ul>`,3),w=e(`<blockquote><p>When users use the voice command &quot;Move to&quot;, the chart will stop the animation automatically.</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># Move to Keywords</span>
<span class="token string">&quot;Jump to&quot;</span>, <span class="token string">&quot;Move to&quot;</span>, <span class="token string">&quot;Go to&quot;</span>, <span class="token string">&quot;Move&quot;</span>, <span class="token string">&quot;Jump&quot;</span>, <span class="token string">&quot;Go&quot;</span>, 
<span class="token string">&quot;Move to the year of&quot;</span>, <span class="token string">&quot;Jump to the year of&quot;</span>, <span class="token string">&quot;Go to the year of&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Split a Data Element</li></ul>`,3),x=e(`<blockquote><p>In our animation bubble chart template data, we have prepared the city data for the China in 2015. Hence, users can use the voice command &quot;Split up China&quot; to split the data element of China into the city data elements, when the timeline is at 2015.</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># Split a Data Element Keywords</span>
<span class="token string">&quot;Split up&quot;</span>, <span class="token string">&quot;Divide&quot;</span>, <span class="token string">&quot;Separate&quot;</span>, <span class="token string">&quot;Split&quot;</span>, <span class="token string">&quot;Dividing&quot;</span>, <span class="token string">&quot;Separating&quot;</span>, 
<span class="token string">&quot;Split up the data element of&quot;</span>, <span class="token string">&quot;Divide the data element of&quot;</span>, <span class="token string">&quot;Separate the data element of&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Reunite a Data Element</li></ul><p>After splitting a data element, users can use the voice command &quot;Reunite&quot; to reunite the split parts of a data element.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># Reunite a Data Element Keywords</span>
<span class="token string">&quot;reunite&quot;</span>, <span class="token string">&quot;reunion&quot;</span>, <span class="token string">&quot;Merge&quot;</span>, <span class="token string">&quot;Reunite the data element of&quot;</span>,
<span class="token string">&quot;Combine the data element of&quot;</span>, <span class="token string">&quot;Merge the data element of&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function k(f,y){const a=l("font");return h(),r("div",null,[m,o("p",null,[t("Y-axis is the vertical axis of the chart. Users can choose the showing mode of the Y-axis in VoGe-Portal. It supports to show the whole Y-axis(Y-axis line + ticks) together or show the Y-axis line and ticks separately. "),s(a,{color:"green"},{default:n(()=>[t("We recommend to show the whole Y-axis together in the presentation")]),_:1}),t(", because the Y-axis ticks are dynamic and the ticks will be shown in the chart when the data elements are shown. Hence, the Y-axis ticks will be changed automatically when the data elements are shown.")]),g,s(a,{color:"green"},{default:n(()=>[t("The system will show the data elements to the big index of the X-axis ticks")]),_:1}),t('. For example, if the X-axis ticks are "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", the system will show the all data elements when the voice command contains "Sunday".'),q,o("p",null,[t("Users can use the voice command to display the title of the chart. The voice should be contain the "),s(a,{color:"red"},{default:n(()=>[t("two keywords")]),_:1}),t(' of the origin title at least. For example, the title is "Life Expectancy vs. GDP per Capita Worldwide", if the voice contains "Life" and "GDP", the title will be shown.')]),b,o("p",null,[t('When the chart is playing, users can use the voice command "Rewind" to rewind the chart animation. Users '),s(a,{color:"red"},{default:n(()=>[t("must")]),_:1}),t(' add the year to rewind the animation to a specific year. For example, "Backing to 1900".')]),v,o("p",null,[t('When the chart is playing, users can use the voice command "Move to" to move the animation to a specific year. Users '),s(a,{color:"red"},{default:n(()=>[t("must")]),_:1}),t(' add the year to move the animation to a specific year. For example, "Move to 2000".')]),w,o("p",null,[t("Before splitting a data element, users "),s(a,{color:"ref"},{default:n(()=>[t("must")]),_:1}),t(' prepare the subdivision data elements. For example users can prepare the city data for a country in the VoGe-Portal system. After the preparation, users can use the voice command "Split up" to split the data element.')]),x])}const D=i(p,[["render",k],["__file","Voice Interaction.html.vue"]]),T=JSON.parse('{"path":"/VoGe-Display/Voice%20Interaction.html","title":"","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Bar Chart","slug":"bar-chart","link":"#bar-chart","children":[]},{"level":2,"title":"Line Chart","slug":"line-chart","link":"#line-chart","children":[]},{"level":2,"title":"Animated Bubble Chart","slug":"animated-bubble-chart","link":"#animated-bubble-chart","children":[]}],"git":{"updatedTime":1707900014000,"contributors":[{"name":"Dong She","email":"dshe922@gmail.com","commits":1}]},"filePathRelative":"VoGe-Display/Voice Interaction.md"}');export{D as comp,T as data};
