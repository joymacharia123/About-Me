import '../App.css'
import { motion } from "framer-motion"
import Comp from "../assets/comp.jpg"
import Man from "../assets/man.jpg"

function Card ({ title, description, languages}) {
    return (
        <div className="w-[280px] h-[400px] font-NTR bg-other-dark rounded-xl hover:bg-hover-dark hover:scale-105 p-8 flex flex-col gap-8 transition ease-in-out">
            <h2 className="text-violet-200 text-3xl">{title}</h2>
            <p className="text-gray-300 text-lg">{description}</p>
            <p className="text-gray-300">{languages}</p>
        </div>
    )
}

export default function Landing() {
    let wave = String.fromCodePoint(0x0001F44B)
    const cursorVariants = {
        blinking: {
            opacity: [0, 0, 1, 1],
            transition: {
                duration: 1,
                repeat: Infinity,
                repeatDelay: 0,
                ease: "linear",
                times: [0, 0.5, 0.5, 1]
            }
        }
    }

    return (
        <div className="bg-nice-dark flex flex-col items-center px-10">
            <div className="w-4/5 h-screen font-NTR text-violet-200 flex flex-col items-center gap-5">
                <motion.div animate={{ opacity: 1, y: 0, transition: { duration: 1 } }} initial={{ opacity: 0, y: 300 }} className="w-[350px] h-[350px]">
                    <img className="w-full h-full object-contain rounded-full" src={Comp} alt="Computer Image" />
                </motion.div>
                <motion.div animate={{ opacity: 1, y: 0, transition: { duration: 1 } }} initial={{ opacity: 0, y: 200 }} className="h-[150px] w-[650px] flex flex-col items-center text-center">
                    <div className="flex">
                        <h1 className="text-7xl">hi there I'm <mark className="text-green-200 bg-transparent">Kipkirui</mark>{`${wave}`}</h1>
                        <motion.div variants={cursorVariants} animate="blinking" className="h-20 w-[7px] bg-green-200 rounded-lg"></motion.div>
                    </div>
                    <h2 className="text-gray-300 text-4xl">Crafting Code, Cultivating Creativity</h2>
                    <h3 className="text-gray-300 text-xl">I'm a turbo-charged software whiz who thrives on whipping up mind-blowing solutions to tricky puzzles.</h3>
                </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, y: 200}} whileInView={{ opacity: 1, y:0,  transition: { duration: 1, delay: 0.5}}} viewport={{once:true}} id="about" className="w-4/5 h-full font-NTR p-10 py-40 flex flex-col">
                <h1 className="text-violet-200 text-6xl m-5">/about me</h1>
                <div className="flex justify-between">
                    <div className="text-gray-300 text-2xl w-1/2 flex flex-col gap-5">
                        <p>I'm a budding software developer currently fully immersed in my journey of learning. With a background in mathematics and a natural curiosity for technology, I find myself deeply passionate about coding.</p>
                        <ul className="list-disc list-inside text-green-300">
                            <span className="text-gray-300">Here are some of the technologies I am currently working with:</span>
                            <li>Javascript ES6+</li>
                            <li>React.js</li>
                            <li>Python</li>
                            <li>HTML</li>
                            <li>CSS</li>
                        </ul>
                    </div>
                    <div className="w-[400px] h-[400px]">
                        <img className="w-full h-full object-cover rounded-xl" src={Man} alt="A man" />
                    </div>
                </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 200}} whileInView={{ opacity: 1, y:0,  transition: { duration: 1, delay: 0.5}}} viewport={{once:true}} id="projects" className="w-4/5 h-full font-NTR px-10 py-40 flex flex-col">
                <h1 className="text-violet-200 text-6xl m-5">/projects</h1>
                <div className="w-full flex gap-5 justify-center my-10">
                    <Card title="Rock Paper Scissors Game" description="A simple rock, paper scissors game that allows two players to play against each other and also keeps track of the scores. The game also has a reset functionality which resets the scores." languages="Javascript, HTML, CSS"></Card>
                    <Card title=" Weather Finder" description="A simple web app that uses an API to find products that are available in the Kenyan market, display the name and price of the product with a link to a store. that is selling it." languages="Javascript, HTML, CSS"></Card>
                    <Card title="Netflix Clone" description="A netflix clone built using HTML and CSS resembling the Netflix site" languages="HTML, CSS"></Card>
                </div>
            </motion.div>
        </div>
    )
}