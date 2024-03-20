import React, { useState } from 'react'
import axios from "axios"
import "../Assets/Css/Book.css"

export default function Add_Book() {
    const [name, setname] = useState("")
    const [author, setauthor] = useState("")
    const [image, setimage] = useState("")
    const [price, setprice] = useState("")
    const [description, setdescription] = useState("")

    async function BookSubmit(event) {
        event.preventDefault();
        axios.post("http://localhost:5000/api/book", { name, author, image, price, description })
            .then(
                setname(""),
                setauthor(""),
                setimage(""),
                setprice(""),
                setdescription("")
            )

    }

    return (
        <div className='bg-body-tertiary p-1'>
            <div className='container custom-form mt-4 font-monospace'>
                <h2 className='py-1 rounded' style={{ backgroundColor: "#F0F0F0" }}> Book Submission Form</h2>
                <form action="" onSubmit={BookSubmit}>
                    <div className='d-flex justify-content-between col-md-12'>
                        <div className="mb-3 me-2 form-group col-md-6">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Book Name</label>
                            <input type="text" value={name} onChange={(e) => setname(e.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="Write Book name....." />
                        </div>
                        <div className="mb-3 ms-2 form-group col-md-6">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Author Name</label>
                            <input type="text" value={author} onChange={(e) => setauthor(e.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="Write Author name....." />
                        </div>
                    </div>
                    <div className='d-flex justify-content-between col-md-12'>
                        <div className="mb-3 me-2 form-group col-md-6">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Image Url</label>
                            <input type="text" value={image} onChange={(e) => setimage(e.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="Enter Image Url....." />
                        </div>

                        <div className="mb-3 ms-2 form-group col-md-6">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Set Book Price</label>
                            <input type="text" value={price} onChange={(e) => setprice(e.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="Enter Book Price....." />
                        </div>
                    </div>

                    <div className="mb-3 form-group ">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">About The Book</label>
                        <textarea style={{
                            resize: 'vertical',
                            minHeight: '200px',
                        }} className="form-control" value={description} onChange={(e) => setdescription(e.target.value)} id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary">submit</button>
                </form>
            </div>
        </div>
    )
}
