import '../../index.css';
import { News } from './news/news';

export const Body = () => {
  return (
    <section className="body">
      <div className="body__section">
        <div className='body__anons'>
          <h2>Останні <span>публікації</span></h2>
          <p>ознайомтеся з публікаціями на цій сторінці</p>
        </div>
        <div className='body__news'>
            <News/>
        </div>
      </div>
    </section>
  );
};
