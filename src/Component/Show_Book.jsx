import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

export default function Show_Book() {
    const id = useParams().id
    const [alldata, setalldata] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:5000/api/book/${id}`)
            .then((response) => setalldata(response.data))
            .catch((err) => console.log(err))
    })
    return (
        <div class="container mt-5 font-monospace">
            <div class="row">
                <div class="col-md-8">
                    <div class="blog-post animated p-0">
                        <div className='entry-img'>
                            <img src={alldata.image} className="full-cover-image " alt="Blog Post Image" />
                        </div>
                        <div class="card-body px-3 py-2">
                            <div className='d-flex justify-content-between mb-2'>
                                <h2 class="card-title">{alldata.name}</h2>
                                <h2 class="card-title px-3 py-1 rounded" style={{ backgroundColor: "#79AC78", color: "#F1EFEF" }}>{alldata.author}</h2>
                            </div>
                            <p class="card-text">{alldata.description}</p>
                            <Link to={`/show-book/`} class="btn btn-read-more bg-success me-3">Read More</Link>
                            <Link to={`/edit-book/${alldata._id}`} class="btn btn-read-more bg-info">Update</Link>
                        </div>
                    </div>


                </div>
                <div class="col-md-2">

                </div>
            </div>
        </div>
    )
}
