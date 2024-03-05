import '../App.css'


export default function NavBar () {
    return (
        <nav className="sticky top-0 w-full h-[8vh] shadow-2xl bg-nice-dark text-violet-200 py-5 px-32 box-border flex gap-10 justify-between">
            <a className="text-3xl font-NTR"href="#">Kipkirui Keter</a>
            <div className="flex gap-6 font-NTR ">
                <a className="hover:text-green-200 transition text-lg ease-in-out delay-100" href="#">Home</a>
                <a className="hover:text-green-200 transition text-lg ease-in-out delay-100" href="#about">About</a>
                <a className="hover:text-green-200 transition text-lg ease-in-out delay-100" href="#projects">Projects</a>
            </div>
        </nav>
    )

}