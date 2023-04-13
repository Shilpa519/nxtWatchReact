import Popup from 'reactjs-popup'
import Cookie from 'js-cookie'
import {withRouter} from 'react-router-dom'
import {FiLogOut} from 'react-icons/fi'
import ThemeContext from '../../context/ThemeContext'

import {
  PopupContainer,
  LogoutButton,
  ModalContainer,
  WarningMessage,
  ButtonsContainer,
  PopupButton,
  SmallContainer,
  LargeContainer,
} from './styledComponents'

import 'reactjs-popup/dist/index.css'

const PopupDesign = props => {
  const onLogout = () => {
    const {history} = props
    Cookie.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <PopupContainer>
            <LargeContainer>
              <Popup
                modal
                trigger={
                  <LogoutButton type="button" darkMode={isDarkTheme}>
                    Logout
                  </LogoutButton>
                }
              >
                {close => (
                  <ModalContainer darkMode={isDarkTheme}>
                    <WarningMessage darkMode={isDarkTheme}>
                      Are you sure, you want to logout
                    </WarningMessage>
                    <ButtonsContainer>
                      <PopupButton
                        type="button"
                        outline
                        onClick={() => close()}
                      >
                        Cancel
                      </PopupButton>
                      <PopupButton type="button" onClick={onLogout}>
                        Confirm
                      </PopupButton>
                    </ButtonsContainer>
                  </ModalContainer>
                )}
              </Popup>
            </LargeContainer>

            <SmallContainer>
              <Popup
                modal
                trigger={
                  <LogoutButton type="button" darkMode={isDarkTheme}>
                    <FiLogOut height="50" />
                  </LogoutButton>
                }
              >
                {close => (
                  <ModalContainer darkMode={isDarkTheme}>
                    <WarningMessage darkMode={isDarkTheme}>
                      Are you sure, you want to logout
                    </WarningMessage>
                    <ButtonsContainer>
                      <PopupButton
                        type="button"
                        outline
                        onClick={() => close()}
                      >
                        Cancel
                      </PopupButton>
                      <PopupButton type="button" onClick={onLogout}>
                        Confirm
                      </PopupButton>
                    </ButtonsContainer>
                  </ModalContainer>
                )}
              </Popup>
            </SmallContainer>
          </PopupContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(PopupDesign)
