# Atlan Front End Coding Challenge

> To create, design and implement a web-based application capable of running SQL queries and displaying the results of said query. The application must include a space which accepts SQL queries in the form of user inputs, then runs the given query, and displays the result within the application.

### Hosted at: https://karthic-atlan-coding-challenge.netlify.app/

Sample query to run `select * from customers;`

----------

### 1. Overview: How I went about completing this challenge

| Breakdown  |   |
|---|---|
| Ideation 💡  |  The challenge as I saw it was to design and create a simple SQL client, that's capabale of running queries and displaying them. Having used a couple SQL clients in the pase, I tried to draw inspiration from these (Sequel Pro, etc).  |
| Design 🧑🏻‍🎨  | The most intuitive way to develop this application was with a `Dashboard layout` - with clear sections for input/output, etc. With the additional prompt to be able to "toggle between queries", I leaned further into the Dashboard layout and used the sidebar to display the `history` of queries. Being able to always see the history of previous queries and click on them to view is far easier than a dropdown.  |
| Implementation ⚒️   |  With a focus on usability and functionality, I decided to add prompts, prominently place the `Run` and `Clear` buttons. I also decided to add some CSS rules explicitly make the SQL input look like a `code block`. The output is rendered as a HTML table which is easy for everyone to read and understand |


----------


### 2. Specification

- JavaScript framework used = **React**
- Major plugins used:
  - **sass**: I wanted to use some of the features sass offers (like variables, mixins, etc) to be able create maintainable and reusable style rules


----------


### 3. Page load time

I used Chrome Dev Tool's `Performance Insights` to measure perceived load time. The two metrics I looked are are: First Contentful Paint (FCP) and Largest Contentful Paint (LCP).
- FCP is when the browser renders the first bit of content from the DOM, providing the first feedback to the user that the page is actually loading.
- LCP is when the browser renders the largest visual pieces on the DOM, in our case this would be the dashboard layout, buttons, etc.
- LCP < 2.5 seconds is absolutely must for a good user experience. Less than 1 second leads to great user experience.


|   |   |
|---|---|
| During my testing (on a 2 GHz Quad-Core Intel Core i5 MBP), the score I got was between **0.2s - 0.3s** (always under 0.5s)   |  ![image](https://user-images.githubusercontent.com/8691395/171365937-e4f24bec-6ee5-4297-85f0-f331bd203a8b.png) |


----------

### 4. Optimizations

- I was able to avoid loading any heaving external assets (images, etc), but in a real product this may not be always possible
- My test application does have to load JSON files for the dummmy outputs, but in a real product we will be querying for this on demand
- Though the task didn't require for mobile-optimization, I made sure the application was responsive and I did very basic mobile optimizations (removed the sidebar to allow for more screen space for the query and output). Given more time, I could definitely make it mobile optimized.



### 5. Screengrabs

| Starting state  | Query with output |
|---|---|
| ![image](https://user-images.githubusercontent.com/8691395/171362263-404ddf9c-2aed-4677-9d91-be6e659895a6.png) | ![image](https://user-images.githubusercontent.com/8691395/171362311-9bd4b604-dad8-4814-8456-745eb38742fd.png) |


### 6. Dealing with large outputs
- The application was able to successfully load a large number of rows, using data from https://github.com/graphql-compose/graphql-compose-examples/blob/master/examples/northwind/data/json/orders.json
- Sample query to run `select * from orders`;

|  Query with large output |   Query with large output with scrolling |
|---|---|
| ![localhost_3002_(iPad) (8)](https://user-images.githubusercontent.com/8691395/171368792-89c35ff7-7b07-4f35-99ba-f2fe4ecd3b00.png) |  ![ezgif-5-2ee24cd932](https://user-images.githubusercontent.com/8691395/171369275-68fd243c-b8e8-4e00-acda-ee4974172921.gif) |
