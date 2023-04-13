import {Component} from 'react'

import {Link} from 'react-router-dom'
import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'
import {GoThreeBars} from 'react-icons/go'
import ThemeContext from '../../context/ThemeContext'
import PopupDesign from '../PopupDesign'

import {
  NavDesktopContainer,
  NavBarDesktopContent,
  WebsiteLogo,
  OptionsContainer,
  ThemeButton,
  ThemeLogo,
  Profile,
} from './styledComponents'

import {SmallContainer, LargeContainer} from '../PopupDesign/styledComponents'

class Header extends Component {
  state = {show: false}

  onShowOptions = () => {
    this.setState(prevState => ({show: !prevState.show}))
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, toggleTheme} = value
          const onToggle = () => {
            toggleTheme()
          }
          const websiteLogo = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          const themeImageUrl = !isDarkTheme ? (
            <BsMoon color="black" size={30} />
          ) : (
            <BsBrightnessHigh color="white" size={30} />
          )

          return (
            <NavDesktopContainer darkMode={isDarkTheme}>
              <NavBarDesktopContent>
                <Link to="/">
                  <WebsiteLogo src={websiteLogo} alt="website logo" />
                </Link>
                <OptionsContainer>
                  <ThemeButton
                    type="button"
                    data-testid="theme"
                    onClick={onToggle}
                  >
                    <ThemeLogo>{themeImageUrl}</ThemeLogo>
                  </ThemeButton>
                  <LargeContainer>
                    <GoThreeBars size={50} />
                  </LargeContainer>
                  <SmallContainer>
                    <Profile
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png "
                      alt="profile"
                    />
                  </SmallContainer>
                  <br />
                  <PopupDesign />
                </OptionsContainer>
              </NavBarDesktopContent>
            </NavDesktopContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default Header
