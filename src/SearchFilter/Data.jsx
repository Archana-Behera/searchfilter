import React from 'react'
import ReactStars from 'react-stars'

const Data = (props) => {

    return (
        <div className='flexbox'>
            <div className={props.movie.length ?'border':null}>
                {props.movie.length ? props.movie && props.movie.map((value) => {
                    return (
                        <div className='table'>
                            <div>
                                <h4>{value.title}</h4>
                                <ReactStars value={value.ratings} size={30} edit={false} count={10} style={{ marginBottom: '100px' }} />
                            </div>
                            <div>
                                <h5 className='background'>{value.category}</h5>
                            </div>
                        </div>
                    )
                }) :
                <h2 style={{marginTop:'100px'}}>no data found</h2>
                   
                }

            </div>
        </div>

    )
}

export default Data;