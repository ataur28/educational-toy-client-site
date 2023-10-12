import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
import user1 from '../../../assets/images/users/user1.jpg'
import user2 from '../../../assets/images/users/user2.jpg'
import user3 from '../../../assets/images/users/user3.jpg'
const UserReview = () => {
    return (
        <div>
            <h2 className="text-4xl font-bold pt-8 text-center text-gray-600">User Review</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 '>
                <div className="card w-96 bg-base-100 shadow-xl mb-4">
                    <figure className="px-10 pt-10">
                        <img  src={user1} alt="Shoes" className="rounded-xl h-60" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Ataur Rahman</h2>
                        <p>My experience with Doll House has been very satisfactory. The production of the doll was faster than I expected and they made the changes I requested without any problem, and very fast too.</p>

                        <div className="card-actions">
                            <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
                            <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
                            <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
                            <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
                            <FontAwesomeIcon className='text-yellow-400' icon={faStarHalfStroke} />
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl mb-4">
                    <figure className="px-10 pt-10">
                        <img src={user2} alt="Shoes" className="rounded-xl h-60" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Jhankar Mahbub</h2>
                        <p>I really appreciate the quick response to my questions and concerns. I also like the variety of brands they sell. I never had heard of FanReal dolls until I found this site. I am about to buy a 2nd FanReal doll.</p>

                        <div className="card-actions">
                            <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
                            <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
                            <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
                            <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
                            <FontAwesomeIcon className='text-yellow-400' icon={faStarHalfStroke} />
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl mb-4">
                    <figure className="px-10 pt-10">
                        <img src={user3} alt="Shoes" className="rounded-xl h-60" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Ayman Sadiq</h2>
                        <p>Ordering was quick and easy they kept me posted every step of the way and the doll was packaged and shipped quickly and discreetly packaged and the doll was high quality would definitely order through them again.</p>

                        <div className="card-actions">
                            <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
                            <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
                            <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
                            <FontAwesomeIcon className='text-yellow-400' icon={faStar} />
                            <FontAwesomeIcon className='text-yellow-400' icon={faStarHalfStroke} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UserReview;