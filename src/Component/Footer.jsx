import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className='bg-body-tertiary '>
            <div className=' pt-5 font-monospace'>
                <footer class="footer">
                    <div class="container">
                        <p>&copy; 2023 Gorgeous Blog. All rights reserved. | Designed by <Link to="#">Your Name</Link></p>
                    </div>
                </footer>
            </div>
        </div>
    )
}
