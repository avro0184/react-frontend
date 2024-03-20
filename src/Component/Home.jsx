import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import swal from 'sweetalert';
import "../Assets/Css/Book.css"


export default function Home() {
    const [books, setbooks] = useState([])
    const [search, setsearch] = useState("")
    console.log(search)

    function getdata() {
        axios.get("http://localhost:5000/api/book")
            .then((response) => setbooks(response.data))
        
    }
    useEffect(() => {
        getdata();
    }, [])

    async function DeleteBook(id) {
        await axios.delete(`http://localhost:5000/api/book/${id}`)
            .then(() => getdata())
            .catch((err) => console.log(err))
    }

    function DEleteAlert(id) {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success",
                    });
                    DeleteBook(id)
                } else {
                    swal("Your imaginary file is safe!");
                }
            });
    }

    return (
        <div className='bg-body-tertiary py-4'>
            <div className="container">
                <div className='d-flex justify-content-between'>
                    <form className="d-flex me-5 mb-5 col-lg-4" role="search">
                        <input value={search} onChange={(e) => setsearch(e.target.value)} className="form-control me-2 fs-5" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success fs-5 font-monospace" type="submit">Search</button>
                    </form>
                    <div className=''>
                        <Link to='/add-book' className="btn btn-secondary fs-5 font-monospace ">Add Book</Link>
                    </div>
                </div>
                <div className='row'>
                    {
                        books.filter((d) => {
                            return search === '' ? d :
                                d.name.toLowerCase().includes(search)
                        })
                            .map((d, index) => (
                                <div class="col-md-6 col-lg-4" >
                                    <div class="blog-post animated p-0">
                                        <div class="image-div">
                                            <img src={d.image} class="full-cover-image" alt="Blog" />
                                        </div>
                                        <div class="card-body px-3 py-1">
                                            <h2 class="card-title">{d.name}</h2>
                                            <p class="card-text">{d.description.split(' ').slice(0, 10).join(' ')}{d.description.split(' ').length > 10 ? ' .....' : ''}</p>
                                            <div className='d-flex justify-content-between mb-3 '>

                                                <Link to={`/show-book/${d._id}`} class="btn btn-read-more bg-success">Read More</Link>
                                                <Link to={`/edit-book/${d._id}`} class="btn btn-read-more bg-info">Update</Link>
                                                <button onClick={() => { DEleteAlert(d._id) }} class="btn btn-read-more bg-danger">Delete</button>
                                            </div>
                                        </div>
                                    </div>


                                </div>



                            ))
                    }

                </div>
            </div>
        </div >
    )
}
// if (window.confirm("sure")) { DeleteBook(d._id) } }