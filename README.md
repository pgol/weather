select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="21-100")


API:

add validation

add proper errors in response
