import { Link } from "react-router-dom"

const GoBackButton = ({to=''}) => {
    return (
        <div className="flex justify-end items-center">
        <Link to={to} className="hover:opacity-70">
            <svg xmlns="http://www.w3.org/2000/svg"
                width="27" height="27" viewBox="0 0 24 24"
                fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="inline mx-0">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 14l-4 -4l4 -4" />
                <path d="M5 10h11a4 4 0 1 1 0 8h-1" />
            </svg>
        </Link>
        </div>
    )
}

export default GoBackButton
