import LazyLoad from 'react-lazy-load';
import './gallery.scss';

const Images = [
  "https://picsum.photos/200/300?image=1050",
  "https://picsum.photos/400/400?image=1039",
  "https://picsum.photos/400/400?image=1080",
  "https://picsum.photos/200/200?image=997",
  "https://picsum.photos/500/400?image=287",
  "https://picsum.photos/400/500?image=955",
  "https://picsum.photos/200/300?image=916",
  "https://picsum.photos/300/300?image=110",
  "https://picsum.photos/400/500?image=206",
  "https://picsum.photos/300/300?image=200",
  "https://picsum.photos/300/300?image=306"
];

export const Gallery = () =>(
      <div className="gallery-wrap">
        <ul className="gallery-list">
          {Images.map((object, i) => (
          <LazyLoad
            height={200}
            offsetTop={200}
            key={i.toString()}
          >
            <li className="gallery-item">
              <img className="gallery-image" src={`${object}&rand=${i}`} alt={`${object}&rand=${i}`} />
            </li>
          </LazyLoad>
        ))}
        </ul>
      </div>
);
