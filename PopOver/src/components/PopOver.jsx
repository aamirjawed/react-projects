import { useState } from "react";


const PopOver = () => {

    const [visible, setVisible] = useState(false)

    const handleClick = () => {
        setVisible(!visible)
    }

    const handleIconClick = () => {
        setVisible(false)
    }
    return (
        <div className="mx-auto h-screen flex items-center justify-center">
            <button
                className="fixed bg-transparent m-2 hover:bg-blue-500 rounded border border-blue-500 p-3 items-center justify-center top-10 "
                onClick={handleClick}
            >Click to Pop</button>

            {visible ? <div className="z-50 relative text-2xl shadow-2xl shadow-white bg-white p-20 rounded border w-fit items-center justify-center">
                <svg onClick={handleIconClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer size-6 absolute top-0 right-0 ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>

                <h2>Aamir</h2>
                <h3>Muzaffarpur</h3>
                <h4>Bihar</h4>

            </div> : ""
            }
        </div>
    )
}

export default PopOver