export default function About() {
    return (
        <div className="relative z-[-90]">
            <div className="w-screen h-[200px] pt-[25px] bg-gradient-to-r from-green-900 to-amber-900">
                <h1 className="text-center text-6xl text-white font-bold drop-shadow-md">About us</h1>
            </div>
            <div className="sm:w-3/4 w-full max-w-[800px] mx-auto mt-[-75px] mb-[50px] text-lg bg-white rounded border-2 shadow-xl p-7">
                <p>Welcome to our online tea and coffee shop! We are a dedicated team of tea and coffee enthusiasts who 
                believe that a great cup of tea or coffee can make all the difference in your day. We source only the highest 
                quality teas and coffees from around the world, carefully selecting blends and single origin options to cater 
                to a wide range of tastes. Whether you're a tea lover looking for a classic Earl Grey or a coffee connoisseur 
                searching for the perfect pour-over blend, we have something for you.</p> 
                <br />

                <p>In addition to our wide selection of teas and coffees, we also offer a variety of brewing equipment and 
                accessories to help you make the perfect cup at home. From traditional teapots to state-of-the-art coffee makers, 
                we have everything you need to elevate your at-home brewing experience. We pride ourselves on providing excellent 
                customer service, and we're always happy to answer any questions you might have about our products or brewing methods.</p>
                <br />

                <p>Thank you for visiting our online store, and we hope you enjoy shopping with us!</p>
            </div>
        </div>
    );
}