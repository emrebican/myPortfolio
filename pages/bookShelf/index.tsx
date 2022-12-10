import Product from '../../components/ProductPlan/Product'

const bookShelf = () => {
  return (
    <>
      <Product
        title="Book Shelf"
        overview="This app list your book archive. You can add a book with its name, author name and your comments and rating, and you can also update your list element if you want. There is a graphic brief which give you some information about your list, in the app."
        demo="https://react-mui-bookshelf.netlify.app/"
        code="https://github.com/emrebican/BookShelf"
        image="/assets/projects/pro-1.jpg"
        made={['React JS', 'Context API', 'Material UI']}
        tech={[
          'React',
          'Javascript',
          'React Context API',
          'chartJS-2',
          'SCSS',
          'LocalStorage'
        ]}
      />
    </>
  )
}

export default bookShelf
