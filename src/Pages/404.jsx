const FourZeroFour = () => {
    return(
        <>
            {/*component*/}
            <div>
                <div className='font-mono'>
                    <div className="bg-ieeegrey">
                        <div className="xl:mx-auto max-w-7xl lg:mx-[10vw] justify-items-center mx-[5vw] min-h-screen max-h-screen flex items-center justify-center">
                            <div className="overflow-hidden grid grid-cols-1 md:grid-cols-2 md:w-full pb-8">
                                <div className="text-left">
                                    <h1 className="text-5xl text-ieeewhite font-medium">ERROR!!</h1>
                                    <h1 className="text-9xl font-bold text-pracula">404</h1>
                                    {/*<h1 className="text-6xl font-medium py-8">oops! Page not found</h1>*/}
                                    <p className="text-xl lg:text-3xl pb-8 text-ieeewhite font-medium">Oops!! The page you are looking for does not exist. It might have been moved or deleted.</p>
                                    <a rel="noopener noreferrer" href="/"
                                       className="px-8 py-3 text-lg font-medium border-2 border-ieeeyellow hover:text-ieeeyellow rounded-lg hover:bg-opacity-0 bg-ieeeyellow text-ieeewhite">GO HOME</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FourZeroFour;