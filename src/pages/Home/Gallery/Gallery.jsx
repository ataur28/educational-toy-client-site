import toy1 from '../../../assets/images/gallery/toy1.jpg'
import toy2 from '../../../assets/images/gallery/toy2.jpg'
import toy3 from '../../../assets/images/gallery/toy3.jpg'
import toy4 from '../../../assets/images/gallery/toy4.jpg'
import toy5 from '../../../assets/images/gallery/toy5.jpg'
import toy6 from '../../../assets/images/gallery/toy6.jpg'

const Gallery = () => {
    return (
        <div >
            <h2 className="text-4xl font-bold pt-8 text-center text-gray-600 mb-6">Galley</h2>
            <div className='lg:grid lg:grid-cols-3 gap-2 rounded-lg'>
                <img className='m-5 w-80 h-96 border-4 border-pink-300 rounded-lg hover:scale-125 transition ease-in-out duration-300' src={toy1} />
                <img className='m-5 w-80 h-96 border-4 border-pink-300 rounded-lg hover:scale-125 transition ease-in-out duration-300' src={toy2} />
                <img className='m-5 w-80 h-96 border-4 border-pink-300 rounded-lg hover:scale-125 transition ease-in-out duration-300' src={toy3} />
                <img className='m-5 w-80 h-96 border-4 border-pink-300 rounded-lg hover:scale-125 transition ease-in-out duration-300' src={toy4} />
                <img className='m-5 w-80 h-96 border-4 border-pink-300 rounded-lg hover:scale-125 transition ease-in-out duration-300' src={toy5} />
                <img className='m-5 w-80 h-96 border-4 border-pink-300 rounded-lg hover:scale-125 transition ease-in-out duration-300' src={toy6} />

            </div>
            <div className='text-center mt-8 mb-8'>
            <button className="btn btn-secondary">See More Picture</button>
            </div>
        </div>
    );
};

export default Gallery;