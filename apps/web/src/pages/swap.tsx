import { CHAIN_IDS } from 'utils/wagmi'
import styled from 'styled-components'
import Swap from '../views/Swap'
import { SwapFeaturesProvider } from '../views/Swap/SwapFeaturesContext'



const Video = styled.video`
  position: absolute;
  width: 100%;
  // height: 100vh;
  top: -70px;
`

const SwapPage = () => {
  return (
    <SwapFeaturesProvider>
      <Video autoPlay loop muted>
        <source src="./back.mp4" type="video/mp4" />
      </Video>
      <Swap />
    </SwapFeaturesProvider>
  )
}

SwapPage.chains = CHAIN_IDS

export default SwapPage
