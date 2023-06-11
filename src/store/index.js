import { proxy } from "valtio"

const state = proxy({
    intro: true,
    color:'red',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './nus.png',
    fullDecal: './nus.png',
})

export default state