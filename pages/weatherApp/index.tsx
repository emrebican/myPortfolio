import Product from '../../components/ProductPlan/Product'

const weatherApp = () => {
  return (
    <>
      <Product
        title="Weather App"
        overview="This is a Weather app made for devchallenges.io. You can see weather info for a default city (Istanbul) when app just opened. Search city name and app will save last five cities. Get weather info of the city you live in thanks to geolocation."
        demo="https://weather-app-challengesio.netlify.app/"
        code="https://github.com/emrebican/devChallenge.io-weatherApp-"
        image="/assets/projects/pro-3.png"
        made={['React JS', 'Redux-toolkit']}
        tech={['React', 'Redux-toolkit', 'Redux-Thunk', 'date-fns', 'axios']}
      />
    </>
  )
}

export default weatherApp
