# Atlan Front End Coding Challenge

> To create, design and implement a web-based application capable of running SQL queries and displaying the results of said query. The application must include a space which accepts SQL queries in the form of user inputs, then runs the given query, and displays the result within the application.

## Hosted at:
https://karthic-atlan-coding-challenge.netlify.app/


## How I went about completing this challenge

| Breakdown  |   |
|---|---|
| Ideation 💡  |  The challenge as I saw it was to design and create a simple SQL client, that's capabale of running queries and displaying them. Having used a couple SQL clients in the pase, I tried to draw inspiration from these (Sequel Pro, etc).  |
| Design 🧑🏻‍🎨  | The most intuitive way to develop this application was with a `Dashboard layout` - with clear sections for input/output, etc. With the additional prompt to be able to "toggle between queries", I leaned further into the Dashboard layout and used the sidebar to display the `history` of queries. Being able to always see the history of previous queries and click on them to view is far easier than a dropdown.  |
| Implementation ⚒️   |  With a focus on usability and functionality, I decided to add prompts, prominently place the `Run` and `Clear` buttons. I also decided to add some CSS rules explicitly make the SQL input look at a `code block`. The output is rendered as a HTML table which is easy for everyone to read and understand |


## Screengrabs

| Starting state  | Query with output |
|---|---|
| ![image](https://user-images.githubusercontent.com/8691395/171362263-404ddf9c-2aed-4677-9d91-be6e659895a6.png) | ![image](https://user-images.githubusercontent.com/8691395/171362311-9bd4b604-dad8-4814-8456-745eb38742fd.png) |
