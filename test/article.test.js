import renderer from 'react-test-renderer';
import Article from '../components/Article'

const articleData = {
  title : "Test Article",
  author : "John Doe",
  description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id repellendus nesciunt natus veniam illo ad libero esse magni, laboriosam cupiditate, facere nisi nihil eligendi fugit aut nostrum perspiciatis. Dolorum, possimus?"
};

it('articleData', () => {
  const articleComp = renderer.create(
    <Article {...articleData} />
  )
});