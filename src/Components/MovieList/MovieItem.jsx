import { Link } from "react-router-dom";
import { category } from '../../api/api';

function MovieItem(props) {

  const { img, name, year, quality, id } = props
  const link = `/${category[props.category]}/${id}}`
  return (
    <Link to={link}>
      <div className="px-4">
        <div className="overflow-hidden rounded-lg">
          <img src={img} alt="" className="w-full rounded-lg min-h-[335px] hover:cursor-pointer hover:scale-125 transition-all ease-linear shadow-img" />
        </div>
        <p className="text-sm py-2 font-medium">
          {name}
        </p>
        <div className="text-xs text-gray-500 flex items-center justify-between">
          <span>{year}</span>
          <div>
            <i className='bx bxs-heart' ></i>
            <i className='bx bxs-star text-yellow-400 mx-2'></i>
            <span className="text-yellow-400 font-medium">{quality}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default MovieItem;