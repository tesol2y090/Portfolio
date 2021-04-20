import "aos/dist/aos.css"
import { Web3ReactProvider } from "@web3-react/core"
import { ethers } from "ethers"

import ContractsProvider from "../hooks/useContracts"
import ToastProvider from "../hooks/useToasts"

import Header from "../components/Header.js"
import AboutMe from "../components/AboutMe.js"
import Skills from "../components/Skills.js"
import Experiences from "../components/Experiences.js"
import Project from "../components/Project.js"
import Navbar from "../components/Navbar.js"

export default function Home() {
  const getLibrary = (provider) => {
    const library = new ethers.providers.Web3Provider(provider)
    library.pollingInterval = 12000
    return library
  }

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ContractsProvider>
        <ToastProvider>
          <Navbar />
          <Header />
          <AboutMe />
          <Skills />
          <Experiences />
          <Project />
        </ToastProvider>
      </ContractsProvider>
    </Web3ReactProvider>
  )
}
