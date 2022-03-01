# human_trafficking_interactive_charts

<img src="/Images/stop_human_trafficking.jpeg" alt="Stop human trafficking"/>

## Project Purpose

The goal of this project is to show the density & counts of recorded human trafficking reports per state from 2015 to 2020 with visuals created based on data retrieved from FBI reports. We will be telling a story with data visualizations and focusing on providing users with interactive means to explore the data themselves.

<img src="/Images/Human_Trafficking_Intro.png" alt="Human Trafficking Intro"/>

### Research Questions
* What are the actual counts of human trafficking per state?
* What are the top 5 states with the most occurrence of human trafficking? 
* How have the rates of occurrence changed throughout the years? 
* Which offense subcategory type has the higher rate of occurrence?
* Is there any correlation between regional economic metrics such as personal income per capita and crime incidences?

### Data Sources
For this project, we used two data sources. The first was, human trafficking counts in the United States from the Federal Bureau of Investigation Crime Data Explorer.
https://crime-data-explorer.fr.cloud.gov/pages/home

<img src="/Images/FBI_Count.png" alt="FBI Count Data"/>

The second data source was the annual personal income data by county from the Bureau of Economic Analysis U.S. Department of Commerce.
https://apps.bea.gov/regional/downloadzip.cfm

<img src="/Images/Median_Income_State.png" alt="Median Income Per State"/>

### Website Creation
First we coded the layout of the dashboard header. Adding a dropdown button that has references to the charts labeled at the bottom of the page.

<img src="/Images/Dashboard_Header.png" alt="Dashboard Header"/>

Then we added the interactive map that shows the counts of human trafficking per county.

<img src="/Images/Interactive_Map.png" alt="Map"/>

Next we added the drop down menu with the ability to filter all the below graphs by a specific year.

<img src="/Images/Dropdown_year.png" alt="Dropdown Year"/>

Next we created the bubble chart which compares the human trafficking count to median income per capita in each state. The size of the bubbles represents state population. County human trafficking count and personal income per capita are aggregated by state for this visualization.

<img src="/Images/Bubble_chart.png" alt="Bubble chart"/>

Next we created the pie chart which shows the subcategories of commercial sex acts and involuntary servitude from 2013-2020 based on year selected.

<img src="/Images/Pie_chart.png" alt="Pie chart"/>

Then we created the bar graph which shows the human trafficking counts by county from 2013-2020 based on selcted year.

<img src="/Images/Bar_chart.png" alt="Bar chart"/>

Finally we added extra links to explore the data on your own and take you to relevent sites with infromation about human trafficking in the US. Once you click on the text, another window will open taking you to the desired site.

<img src="/Images/Links.png" alt="Links"/>

### Conclusions and Limitations
After creation of the visualizations we have determined that the counts of human trafficking per county increases as the year increases. Also it is worth noting that the amount fo counties increases as the years increases because the data expands based on the different laws passed by congress. Based on the pie chart the US commercial sex act subcategory has a higher rate per county compared to the US involuntary servitude subcategory. According to the bubble chart, the relationship between regional economic metrics and the human trafficking counts is relevent to eachother. The later years show that there are more human trafficking counts per county at the lower income per capita counties.

The limitations from this project are as follows:
The files were static and the data was grouped by police department not city, county, state in the way other gov data is. Once the data was pulled we had to convert the columns to show state and county level data in order to compare to the income per capita data. Also we tried to do a choropleth at the county level but it kiled our repo and we had to restart the project. Specific to our study, the data is only gathered from 2013-2020 data. The data reflects more Eastcoast statistics compared to Westcoast statistics.