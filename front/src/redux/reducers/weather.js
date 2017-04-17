import actions from '../actions';

const defaultState = {
  weatherData: {
    "count": 1,
    "data": [
      {
        "units": {
          "distance": "mi",
          "pressure": "in",
          "speed": "mph",
          "temperature": "F"
        },
        "title": "Yahoo! Weather - New York, NY, US",
        "link": "http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-12761333/",
        "description": "Yahoo! Weather for New York, NY, US",
        "language": "en-us",
        "lastBuildDate": "Mon, 17 Apr 2017 07:07 AM EDT",
        "ttl": "60",
        "location": {
          "city": "New York",
          "country": "United States",
          "region": " NY"
        },
        "wind": {
          "chill": "66",
          "direction": "285",
          "speed": "14"
        },
        "atmosphere": {
          "humidity": "75",
          "pressure": "1011.0",
          "rising": "0",
          "visibility": "16.1"
        },
        "astronomy": {
          "sunrise": "6:15 am",
          "sunset": "7:37 pm"
        },
        "image": {
          "title": "Yahoo! Weather",
          "width": "142",
          "height": "18",
          "link": "http://weather.yahoo.com",
          "url": "http://l.yimg.com/a/i/brand/purplelogo//uh/us/news-wea.gif"
        },
        "item": {
          "title": "Conditions for New York, NY, US at 06:00 AM EDT",
          "lat": "40.750401",
          "long": "-73.997299",
          "link": "http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-12761333/",
          "pubDate": "Mon, 17 Apr 2017 06:00 AM EDT",
          "condition": {
            "code": "27",
            "date": "Mon, 17 Apr 2017 06:00 AM EDT",
            "temp": "66",
            "text": "Mostly Cloudy"
          },
          "forecast": [
            {
              "code": "30",
              "date": "17 Apr 2017",
              "day": "Mon",
              "high": "71",
              "low": "58",
              "text": "Partly Cloudy"
            },
            {
              "code": "30",
              "date": "18 Apr 2017",
              "day": "Tue",
              "high": "58",
              "low": "47",
              "text": "Partly Cloudy"
            },
            {
              "code": "39",
              "date": "19 Apr 2017",
              "day": "Wed",
              "high": "52",
              "low": "44",
              "text": "Scattered Showers"
            },
            {
              "code": "47",
              "date": "20 Apr 2017",
              "day": "Thu",
              "high": "65",
              "low": "50",
              "text": "Scattered Thunderstorms"
            },
            {
              "code": "47",
              "date": "21 Apr 2017",
              "day": "Fri",
              "high": "60",
              "low": "52",
              "text": "Scattered Thunderstorms"
            },
            {
              "code": "30",
              "date": "22 Apr 2017",
              "day": "Sat",
              "high": "61",
              "low": "46",
              "text": "Partly Cloudy"
            },
            {
              "code": "39",
              "date": "23 Apr 2017",
              "day": "Sun",
              "high": "65",
              "low": "48",
              "text": "Scattered Showers"
            },
            {
              "code": "39",
              "date": "24 Apr 2017",
              "day": "Mon",
              "high": "64",
              "low": "51",
              "text": "Scattered Showers"
            },
            {
              "code": "23",
              "date": "25 Apr 2017",
              "day": "Tue",
              "high": "58",
              "low": "49",
              "text": "Breezy"
            },
            {
              "code": "30",
              "date": "26 Apr 2017",
              "day": "Wed",
              "high": "59",
              "low": "49",
              "text": "Partly Cloudy"
            }
          ],
          "description": "<![CDATA[<img src=\"http://l.yimg.com/a/i/us/we/52/27.gif\"/>\n<BR />\n<b>Current Conditions:</b>\n<BR />Mostly Cloudy\n<BR />\n<BR />\n<b>Forecast:</b>\n<BR /> Mon - Partly Cloudy. High: 71Low: 58\n<BR /> Tue - Partly Cloudy. High: 58Low: 47\n<BR /> Wed - Scattered Showers. High: 52Low: 44\n<BR /> Thu - Scattered Thunderstorms. High: 65Low: 50\n<BR /> Fri - Scattered Thunderstorms. High: 60Low: 52\n<BR />\n<BR />\n<a href=\"http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-12761333/\">Full Forecast at Yahoo! Weather</a>\n<BR />\n<BR />\n(provided by <a href=\"http://www.weather.com\" >The Weather Channel</a>)\n<BR />\n]]>",
          "guid": {
            "isPermaLink": "false"
          }
        }
      }
    ]
  },
  loading: false,
  errors: []
};

function weather(state = defaultState, action) {
  switch (action.type) {
    case actions.LOAD_WEATHER_INIT: {
      return {
        ...state,
        loading: true
      };
    }
    case actions.LOAD_WEATHER_ERROR: {
      return {
        ...state,
        errors: [...state.errors, ...action.data.weatherError],
        loading: false
      }
    }
    case actions.LOAD_WEATHER_SUCCESS: {
      return {
        ...state,
        loading: false,
        weatherData: action.data.weatherData
      }
    }
    default: {
      return state;
    }
  }
}


export default weather;
