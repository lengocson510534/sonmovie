import bg from '../../assets/image/footer-bg.jpeg'

function Footer() {
  const bgFooter = {
    backgroundImage: `url('${bg}')`
  }
  return (
    <div className={`grid md:grid-cols-3 text-center md:py-20 relative mt-7 bg-cover bg-no-repeat md:text-2xl md:font-semibold md:place-items-center grid-cols-1`}
      style={bgFooter}
    >
      <ul className='md:flex-col mx-4 flex items-center justify-between'>
        <li className='hover:text-red-600 hover:cursor-pointer'>FAQ</li>
        <li className='my-10 hover:text-red-600 hover:cursor-pointer'>Cookie Preferences</li>
        <li className='hover:text-red-600 hover:cursor-pointer'>Help Center</li>
      </ul>
      <span className="text-4xl text-red-600 uppercase font-black">sonmovie</span>
      <ul className='md:flex-col mx-4 flex items-center justify-between'>
        <li className='hover:text-red-600 hover:cursor-pointer'>Privacy</li>
        <li className='my-10 hover:text-red-600 hover:cursor-pointer'>Contact</li>
        <li className='hover:text-red-600 hover:cursor-pointer'>Term of Use</li>
      </ul>
    </div>
  );
}

export default Footer;