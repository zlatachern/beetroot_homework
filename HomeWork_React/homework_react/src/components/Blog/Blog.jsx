import './blog.scss';

const Blog = ({title, desctiption}) => (
  <div className="section--blogs">
    <div className="card--one">
      <h3 className="heading--h3">{title}</h3>
      <p className='paragraph--text'>{desctiption}</p>
    </div>
  </div>
)

export default Blog;