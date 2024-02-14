## Bar Chart

The bar chart is a chart that presents categorical data with rectangular bars with heights proportional to the values that they represent. The chart is interactive and the user can control the chart to show, highlight data elements, and change the chart type to line chart in VoGe-Portal. The following is an example of a bar chart:

![alt text](bar.png)

* Position 1: The X axis
* Position 2: The Y axis
* Position 3: The Title
* Position 4: The Data Elements

In the presentation, the user can interact with the chart using voice commands. The following are the voice commands that can be used to interact with the bar or line chart:


| Voice Commands | Description        | Keywords    | Example |
| -------------- | ------------------ | ----------- | ------- |
| Show X-Axis    | Display the X-axis on the chart  | Show X-Axis |    "Show X-axis"      |
| Show Y-axis             | Display the Y-axis on the chart         | Show, Y-axis            | "Show Y-axis"             |
| Show Data Elements      | Display all data elements on the chart  | -     | -    |
| Highlight Data Elements | Highlight specific data elements        | - | - |

* Show X-axis

X-axis is the horizontal axis of the chart. Users can choose the showing mode of the X-axis in VoGe-Portal. It supports to show the whole X-axis(X-axis line + ticks) together or show the X-axis line and ticks separately. 

Users can use the keywords or the `X-axis name` to show the X-axis. For example, "Show X-axis" or "Show the Days" in our example.

```bash
# Show X-axis Keywords
"X-axis", "X axis", "horizontal axis", "horizontal"
```

* Show Y-axis

Y-axis is the vertical axis of the chart. Users can choose the showing mode of the Y-axis in VoGe-Portal. It supports to show the whole Y-axis(Y-axis line + ticks) together or show the Y-axis line and ticks separately. <font color="green">We recommend to show the whole Y-axis together in the presentation</font>, because the Y-axis ticks are dynamic and the ticks will be shown in the chart when the data elements are shown. Hence, the Y-axis ticks will be changed automatically when the data elements are shown. 

Users can use the keywords or the `Y-axis name` to show the Y-axis. For example, "Show Y-axis" or "Show the Sales", if "Sales" is the Y-axis name of the chart.

```bash
# Show Y-axis Keywords
"y axis", "y-axis", "vertical axis", "vertical"
```

* Show Data Elements

Users can use the `X-axis tick` name to show the data elements. For example, "Show the data elements of Monday" in our example. It is also supported to show the data elements of multiple X-axis ticks. For example, "Show the data elements of Monday and Tuesday". 

<font color="green">The system will show the data elements to the big index of the X-axis ticks</font>. For example, if the X-axis ticks are "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", the system will show the all data elements when the voice command contains "Sunday".

* Highlight Data Elements

When the data elements are shown, users can use the `X-axis tick` name to highlight the data elements. For example, "Highlight the data elements of Monday" in our example. It is also supported to highlight the data elements of multiple X-axis ticks. For example, "Highlight the data elements of Monday and Tuesday".

## Line Chart

The line chart is a chart that presents information with a series of data points connected by straight line segments. The chart is interactive and the user can control the chart to show, highlight data elements, and change the chart type to bar chart in VoGe-Portal. The following is an example of a line chart:

![alt text](line.png)

* Position 1: The X axis
* Position 2: The Y axis
* Position 3: The Legend
* Position 4: The Data Elements of a Legend
* Position 5: The Data Elements of a Legend

In the presentation, the user can interact with the chart using voice commands same as the bar chart. You can refer to the bar chart for the voice commands.

## Animated Bubble Chart

The animated bubble chart is a chart that shows the change of data over time. It is a scatter plot with the size of the bubbles representing a
 propetry of the data(eg: population, GDP, etc.). The chart is animated to show the change of the data over time. The chart is interactive and the user can control the animation, highlight data elements, and split and reunite data elements, etc.

 The following is an example of an animated bubble chart:
 * Position 1: The X axis
 * Position 2: The Y axis
 * Position 3: The Title
 * Position 4: The Year
 * Position 5: The Data Elements

![alt text](bubblechart.png)

In the presentation, the user can interact with the chart using voice commands. The following are the voice commands that can be used to interact with the chart:

| Voice Commands          | Description                              | Keywords                | Example                   |
|-------------------------|------------------------------------------|-------------------------|---------------------------|
| Show X-axis             | Display the X-axis on the chart         | Show, X-axis            | "Show X-axis"             |
| Show Y-axis             | Display the Y-axis on the chart         | Show, Y-axis            | "Show Y-axis"             |
| Show Title              | Display the title of the chart          | -               |  -            |
| Show Year               | Display the year on the chart           | -              | -               |
| Show Data Elements      | Display all data elements on the chart  | -     | -    |
| Highlight Data Elements | Highlight specific data elements        | - | - |
| Play Animation          | Start the chart animation               | Play, Animation         | "Play Animation"          |
| Stop Animation          | Stop the chart animation                | Stop, Animation         | "Stop Animation"          |
| Rewind                  | Rewind the chart animation              | Backing to [year]       |  Backing to the year of 1900                 |
| Move to                 | Move the animation to a specific point  | Move, Animation         | "Move to [year]"         |
| Animation Speed Faster  | Increase the speed of the animation     | Faster, Animation Speed | "Animation Speed Faster"  |
| Animation Speed Slower  | Decrease the speed of the animation     | Slower, Animation Speed | "Animation Speed Slower"  |
| Split a Data Element    | Separate a data element into parts      | Split, Data Element     | "Split a Data Element"    |
| Reunite a Data Element  | Combine split parts of a data element   | Reunite, Data Element   | "Reunite a Data Element"  |

* Show X-axis 
  
Users can use the voice command "Show X-axis" to display the X-axis on the chart.

```bash
# Show X-axis Keywords
"X-axis", "X axis", "horizontal axis", "horizontal"
```

* Show Y-axis

Users can use the voice command "Show Y-axis" to display the Y-axis on the chart.

```bash
# Show Y-axis Keywords
"y axis", "y-axis", "vertical axis", "vertical"
```

* Show Title

Users can use the voice command to display the title of the chart. The voice should be contain the <font color="red">two keywords</font> of the origin title at least. For example, the title is "Life Expectancy vs. GDP per Capita Worldwide", if the voice contains "Life" and "GDP", the title will be shown.

* Show Year

The Year is shown in the 4th position of above example figure. Users can use the voice command should contain the first year of the timeline. For example, "Show the year of 1800".  

> Regarding the `Title` and `Year`, if users forget to show them by voice command, the chart will show the `Title` and `Year` automatically when the chart is playing.

* Show Data Elements
  
Users can use the data group name or the color of the data group to show the data elements step by step. For example, "Bule is the Asia". The chart will show the data elements of Asia. Users can also use the data group name to show the data elements. For example, "Show the data elements of Asia". It is also supported to show the data elements of multiple data groups. For example, "Show the data elements of Asia and Europe".

* Highlight Data Elements

When the data elements are shown, users can use the data group name or the color of the data group to highlight the data elements. For example, "Highlight the data elements of Asia". The chart will highlight the data elements of Asia. Users can also use the data group name to highlight the data elements. For example, "Highlight the data elements of Asia". It is also supported to highlight the data elements of multiple data groups. For example, "Highlight the data elements of Asia and Europe".

* Play Animation

When the chart is not playing, users can use the voice command "Play Animation" to start the chart animation.

```bash
# Play Animation Keywords
"play", "start", "start here", "play here", "playing",
 "starting", "begin", "beginning", "begin here", "beginning here"
```

* Stop Animation

When the chart is playing, users can use the voice command "Stop Animation" to stop the chart animation.Users can also add the year to stop the animation at a specific year. For example, "Stop Animation at 2000".

```bash
# Stop Animation Keywords
"pause", "stop", "stop here", "pause here", "stopping", 
"pausing", "freeze", "holding", "hold"
```

* Rewind

When the chart is playing, users can use the voice command "Rewind" to rewind the chart animation. Users <font color="red">must</font> add the year to rewind the animation to a specific year. For example, "Backing to 1900".

> When users use the voice command "Rewind" to rewind the chart animation, the chart will stop the animation automatically.

```bash
# Rewind Keywords
"back", "go back", "backing", "rewind", "rewinding",
"backing to", "go back to", "back to"
```

* Move to

When the chart is playing, users can use the voice command "Move to" to move the animation to a specific year. Users <font color="red">must</font> add the year to move the animation to a specific year. For example, "Move to 2000".

> When users use the voice command "Move to", the chart will stop the animation automatically.

```bash
# Move to Keywords
"Jump to", "Move to", "Go to", "Move", "Jump", "Go", 
"Move to the year of", "Jump to the year of", "Go to the year of"
```

* Split a Data Element

Before splitting a data element, users <font color="ref">must</font> prepare the subdivision data elements. For example users can prepare the city data for a country in the VoGe-Portal system. After the preparation, users can use the voice command "Split up" to split the data element.

> In our animation bubble chart template data, we have prepared the city data for the China in 2015. Hence, users can use the voice command "Split up China" to split the data element of China into the city data elements, when the timeline is at 2015.

```bash
# Split a Data Element Keywords
"Split up", "Divide", "Separate", "Split", "Dividing", "Separating", 
"Split up the data element of", "Divide the data element of", "Separate the data element of"
```

* Reunite a Data Element
  
After splitting a data element, users can use the voice command "Reunite" to reunite the split parts of a data element.

```bash
# Reunite a Data Element Keywords
"reunite", "reunion", "Merge", "Reunite the data element of",
"Combine the data element of", "Merge the data element of"
```