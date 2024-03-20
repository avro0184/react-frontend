import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import swal from 'sweetalert';


export default function Edit_Book() {
    const id = useParams().id
    const [all_data, set_alldata] = useState({})

    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`http://localhost:5000/api/book/${id}`)
            .then((response) => set_alldata(response.data))
            .catch((err) => console.log(err))
    }, [id])


    async function UpdateBook(event) {
        event.preventDefault();
        await axios.put(`http://localhost:5000/api/book/${id}`, all_data)
            .then(swal({
                title: "Good work!",
                text: "You clicked the button!",
                icon: "success",
                button: "Aww yiss!",
            }),
                navigate("/"))
            .catch((err) => console.log(err))
    }

    return (
        <div className='bg-body-tertiary p-1'>
            <div className='container mt-5 font-monospace'>
                <form action="" onSubmit={UpdateBook}>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Book Name</label>
                        <input type="text" value={all_data.name} onChange={(e) => set_alldata({ ...all_data, name: e.target.value })} className="form-control" id="exampleFormControlInput1" placeholder="Write Book name....." />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Author Name</label>
                        <input type="text" value={all_data.author} onChange={(e) => set_alldata({ ...all_data, author: e.target.value })} className="form-control" id="exampleFormControlInput1" placeholder="Write Author name....." />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Image Url</label>
                        <input type="text" value={all_data.image} onChange={(e) => set_alldata({ ...all_data, image: e.target.value })} className="form-control" id="exampleFormControlInput1" placeholder="Enter Image Url....." />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Set Book Price</label>
                        <input type="text" value={all_data.price} onChange={(e) => set_alldata({ ...all_data, price: e.target.value })} className="form-control" id="exampleFormControlInput1" placeholder="Enter Book Price....." />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">About The Book</label>
                        <textarea className="form-control" value={all_data.description} onChange={(e) => set_alldata({ ...all_data, description: e.target.value })} id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary">Update</button>
                </form>
            </div>
        </div>
    )
}
