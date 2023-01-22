export default function NotFound(){
    return (
        <div className="h-screen flex flex-col items-center justify-center text-purple-900">
            <div className="material-symbols-outlined sm:text-9xl text-7xl">warning</div>
            <h1 className="sm:text-5xl text-3xl">404</h1>
            <h1 className="sm:text-5xl text-3xl font-bold">Page Not Found</h1>
        </div>
    );
}