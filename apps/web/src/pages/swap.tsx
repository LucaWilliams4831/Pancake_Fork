import { CHAIN_IDS } from 'utils/wagmi'
import styled from "styled-components";
import Swap from '../views/Swap'
import { SwapFeaturesProvider } from '../views/Swap/SwapFeaturesContext'

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
`

const SwapPage = () => {
  return (
    <SwapFeaturesProvider>
      <Image alt=''
        src='./images/bg2.png' />

      <Swap />
      <div style={{
        width: '15vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'absolute',
        justifyContent: 'center',
        top: '20%',
      }}>
        <div style={{
          border: '1px solid gray',
          borderRadius: '25px',
          width: '80%',
          margin: '15px',
          background: '#4b3557',
          display: 'flex',
          flexDirection: 'column',

        }}>
          <div style={{
            width: '100%',
            height: '42px',
            margin: '10px 0',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#F4EEFF',
          }}>
            
            <a href="/swap">Swap</a>
          </div>

          <div style={{
            width: '100%',
            height: '42px',
            margin: '10px 0',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#F4EEFF',
          }}>
            {/* <img/> */}
            <a href="/limit">Limit</a>
          </div>

          <div style={{
            width: '100%',
            height: '42px',
            margin: '10px 0',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#F4EEFF',
          }}>
            {/* <img/> */}
            <a href="/liquidity">Liquidity</a>
          </div>

          <div style={{
            width: '100%',
            height: '42px',
            margin: '10px 0',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#F4EEFF',
          }}>
            {/* <img/> */}
            <a href="/farms">Farms</a>
          </div>

          <div style={{
            width: '100%',
            height: '42px',
            margin: '10px 0',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#F4EEFF',
          }}>
            {/* <img/> */}
            <a href="/pools">Pools</a>
          </div>



        </div>
      </div>

    </SwapFeaturesProvider>
  )
}

SwapPage.chains = CHAIN_IDS

export default SwapPage
