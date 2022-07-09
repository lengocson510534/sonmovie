import tmdbAPi, { category } from "../../api/api";


function SlideItem(props) {

  const { img, name, desc, author, date, id, img2 } = props

  const setModalActive = async () => {
    const modal = document.querySelector(`#modal_${id}`);
    const modalContent = modal.querySelector('.modal__content');
    console.log(modal)
    const videos = await tmdbAPi.getVideos(category.movie, id);
    if (videos.results.length > 0) {
      const videSrc = 'https://www.youtube.com/embed/' + videos.results[0].key;
      modal.querySelector('.modal__content > iframe').setAttribute('src', videSrc);
    } else {
      modal.querySelector('.modal__content').innerHTML = 'No trailer';
    }
    modal.classList.remove(`opacity-0`)
    modal.classList.remove(`invisible`)
    modal.classList.add('opacity-100')
    modalContent.classList.remove('opacity-0')
    modalContent.classList.add('opacity-100')
  }

  return (
    <>
      <div className="relative">
        <img src={img} alt=""
          className="w-full h-screen object-cover opacity-50"
        />

        <div className="px-5 absolute top-2/4 -translate-y-2/4 z-[98] grid  md:grid-cols-2 items-center justify-center md:px-24">
          <div>
            <h2 className="text-4xl font-semibold md:text-5xl md:font-extrabold">{name}</h2>
            <p className="text-base py-7">{desc}</p>
            <div className="font-medium">
              <p>
                <span className="text-red-600 font-bold capitalize">popularity: </span>
                <span>{author}</span>
              </p>
              <p>
                <span className="text-red-600 font-bold capitalize">date: </span>
                <span>{date}</span>
              </p>
            </div>
            <div className="py-7 flex justify-between items-center">
              <button className="uppercase text-base md:text-base lg:text-2xl font-semibold bg-red-600 px-3 py-1">Play Now</button>
              <div className="uppercase text-2xl font-medium md:text-2xl lg:text-3xl flex items-center justify-center hover:text-red-600 hover:cursor-pointer"
                onClick={setModalActive}
              >
                <i className='bx bx-play-circle text-2xl md:text-3xl lg:text-5xl' ></i>
                <span>Watch trailer</span>
              </div>
            </div>
          </div>
          <div className="uppercase text-2xl font-medium md:text-4xl md:flex items-center justify-center hidden hover:cursor-pointer">
            <img src={img2} alt=""
              className="w-[75%] object-cover rounded-2xl shadow-img"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SlideItem;