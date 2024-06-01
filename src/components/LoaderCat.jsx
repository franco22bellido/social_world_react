import CatSvg from "./CatSvg"

const LoaderCat = ({ loading = false, className }) => {
    return (

        <>
            {
                loading &&
                <div className={`flex flex-row items-center justify-center ${className}`}>
                    <div role="status">
                        <p className="opacity-80">Loading...</p>
                        <CatSvg className={"inline-block size-16 animate-spin rounded-full border-solid border-current border-e-transparent align-[-0.125em] text-danger motion-reduce:animate-[spin_1.5s_linear_infinite]"} />
                        <span
                            className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                        >Loading...</span>
                    </div>
                </div>
            }
        </>

    )
}

export default LoaderCat
