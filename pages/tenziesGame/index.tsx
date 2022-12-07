import Product from '../../components/ProductPlan/Product'

const weatherApp = () => {
  return (
    <>
      <Product
        title="Tenzies Game"
        overview="This was just a fun project, that I made in the beginning with getting help. But I really like it and enjoyed while I made. You can race with yourself because there is a score saver in the app. Have fun."
        demo="https://tenziesgameapp.netlify.app/"
        code="https://github.com/emrebican/tenzies-app"
        image="/assets/projects/pro-4.png"
        made={['Javascript', 'CSS']}
        tech={['Javascript', 'CSS', 'figma']}
      />
    </>
  )
}

export default weatherApp
