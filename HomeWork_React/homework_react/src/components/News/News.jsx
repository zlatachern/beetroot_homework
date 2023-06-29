import './news.scss';

const News = ({title, text}) => (
  <div className="section--news">
    <div className="card--one">
      <h3 className="heading--h3">{title}</h3>
      <p className='paragraph--text'>{text}</p>
    </div>
  </div>
)

export default News;