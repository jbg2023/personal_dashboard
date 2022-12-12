# Personalized Dashboard
### Project 2
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white) [![Netlify Status](https://api.netlify.com/api/v1/badges/2c5ea9e2-7bcb-4fbb-8664-1c957ba7e011/deploy-status)](https://app.netlify.com/sites/unique-gaufre-b9c11c/deploys)
***
#### Barezi Morales | Tim Carrington | Joe Gates
***
## Screenshot
![Personal Dashboard](https://github.com/jbg2023/personal_dashboard/blob/main/personal_dashboard/Dashboard_Screenshot.png)
## Getting Started
* This is a personalized dashboard app made with React that has 5 widget components displayed on the page:
    1. Weather - user can search a location (string) and the widget will display current conditions with a picture of weather conditions, temperature, wind speed, humidity, as well as a 4 day forcast displayed below. This component uses the 'react-weather' package and the openweathermap.org API.
    2. Quote - a random quote is displayed inside this component, and there is a button that fetches another quote using favqs.com API.
    3. Calender - a simple month calender is displayed using the 'react-calender' package. Current day is highlighed in blue and weekends in red. Month and year can be changed.
    4. Sports - user can select either NFL or NBA to display recent games being played and the score if the game has been played. Green highlights finished games and red for upcoming games. Each team has its logo displayed.
    5. Stocks - displays 5 stock market news stories from Polygon API in a collapsable text accorion. Each story has an HTML link to the full story.
* The background is a random image from unsplash.com, and uses a filter for high resolution and nature.
* Time is displayed in the top of the upper right component.
## API's:
* https://api.polygon.io (Stocks)
* https://favqs.com/api/qotd (Quotes)
* https://api.openweathermap.org (Weather)
* https://odds.p.rapidapi.com/v4/sports/basketball_nba/scores (NBA)
* https://odds.p.rapidapi.com/v4/sports/americanfootball_nfl/scores (NFL)