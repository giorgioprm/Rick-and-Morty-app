import React from 'react'
import Navbar from './Navbar'

const Pagination = ({ prev, next, onPrevious, onNext }) => {
    const handlePrevious = () => {
        onPrevious();
    }

    const handleNext = () => {
        onNext();
    }

    return (
        <nav className='my-5'>
            <ul className='pagination justify-content-center'>
                {prev ?
                    <li className='page-item'>
                        <button className='page-link'
                            onClick={handlePrevious}>Previus
                        </button>
                    </li>
                    : null
                }
                {next ? (
                    <li lassName='page-item'>
                        <button button className='page-link'
                            onClick={handleNext}>Next
                        </button>
                    </li>
                ) : null}
            </ul>
        </nav>
    )
}

export default Pagination
