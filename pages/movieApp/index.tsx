import Product from '../../components/ProductPlan/Product'

const movieApp = () => {
  return (
    <>
      <Product
        title="Movie App"
        overview="This is a classical Movie Application. You can see latest movies and there is also a category option or you can search for a movie. More, you can add movies for watching later or as watched. This is my-own first React project"
        demo="https://react-movielistapp.netlify.app/"
        code="https://github.com/emrebican/react-movie-app"
        image="/assets/projects/pro-2.png"
        made={['React JS', 'context API', 'SCSS']}
        tech={['React', 'Javascript', 'context API', 'movie DB API', 'SCSS']}
      />
    </>
  )
}

export default movieApp
