export default function About() {
    return (
        <div>
            <div className="flex justify-center">
                <div className="absolute w-1/2 text-lg">
                    <h1 className="my-12 w-full text-center text-6xl text-white font-bold drop-shadow-md">About us</h1>
                    
                    <div className="bg-white rounded border-2 shadow-xl p-7">
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
                <div className="w-screen h-[250px] bg-gradient-to-r from-green-900 to-amber-900"></div>
            </div>
        </div>
    );
}