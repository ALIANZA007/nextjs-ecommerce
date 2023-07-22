import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">Discover
            <br className="max-md:hidden"/>
                <span className="orange_gradient text-center">E Commerce</span></h1>
                    <p className="desc text-center">
                        Online Shop Discover for everyone y'all happy for shopping 
                        this is market place the best seler ever
                    </p>
                <Feed />
    </section>
  )
}

export default Home