import { motion, AnimatePresence } from "framer-motion"
import { useSnapshot } from "valtio"
import state from "../store"
import { CustomButton } from "../components"

import { headContainerAnimation, headContentAnimation, headTextAnimation,  slideAnimation } from '../config/motion'

const Home = () => {
    const snap = useSnapshot(state)

    return (
        <AnimatePresence>
            {snap.intro && (
                <motion.section className="home" {...slideAnimation('left')}>
                    <motion.header {...slideAnimation("down")}>
                        <img src="./NUS-Computing-Logo.png" alt="logo" className="lg:h-40 h-20 max-w-2xl"/>
                        <motion.div {...headTextAnimation}>
                            <h2 className="head-text" style={{ fontSize: '100px' }} >
                                Let's <br className="x2:block hidden"/>stylez
                            </h2>
                        </motion.div>
                    </motion.header>

                    <motion.div className="home-content" {...headContainerAnimation}>
                        <motion.div {...headContentAnimation} className="flex flex-col gap-5">
                            <p className="max-w-md font-normal text-grey-600 text-base">
                                Create your oh-so-fabulous shirt: Because, let's be real, the only thing more impressive 
                                than your custom design skills is your ability to be completely invisible to your crush 
                                on Telegram! <strong>Get ready to be fashionably ignored.</strong> 😔✨
                            </p>

                            <CustomButton
                                type='filled'
                                title='Customise It'
                                handleClick={() => state.intro = false}
                                customStyles= "w-fit px-4 py-2.5 font-bold text-sm"
                                />
                        </motion.div>
                    </motion.div>
                </motion.section>
            )}
        </AnimatePresence>
    )
}

export default Home
