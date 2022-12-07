import Product from '../../components/ProductPlan/Product'

const movieApp = () => {
  return (
    <>
      <Product
        title="Movie App"
        overview="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque iure incidunt officiis labore, repellat dicta, ut eum minima accusamus, quis aliquam quod debitis? Cupiditate molestias unde, sunt dignissimos, excepturi accusantium alias corrupti quam numquam assumenda nisi, illo repellat dolores deserunt."
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
