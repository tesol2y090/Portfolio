import "aos/dist/aos.css"
import { Web3ReactProvider } from "@web3-react/core"
import { ethers } from "ethers"

import ContractsProvider from "../hooks/useContracts"
import ToastProvider from "../hooks/useToasts"

import Header from "../components/Header"
import AboutMe from "../components/AboutMe"
import Skills from "../components/Skills"
import Experiences from "../components/Experiences"
import Project from "../components/Project"
import Navbar from "../components/Navbar"

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
