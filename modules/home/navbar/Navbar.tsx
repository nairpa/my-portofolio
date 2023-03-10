import { IconButton } from "@/common/components/icon-button/IconButton"
import { Switch } from "@/common/components/switch/Switch"
import { Theme, ThemeContext } from "@/common/context/ThemeContext";
import { faBars } from "@fortawesome/free-solid-svg-icons"
import moonIcon from 'public/icons/moon.svg';
import sunIcon from 'public/icons/sun.svg';
import { useContext } from "react";

export const Navbar = () => {
    const { theme, prefersDarkTheme } = useContext(ThemeContext) as Theme;
    const handleChange = (event: any) => {
        const { checked } =  event.target;
        prefersDarkTheme(checked)
    }
    
    const icons = [
        moonIcon,
        sunIcon,
    ]

    return (
        <nav className='navbar'>
          <IconButton icon={faBars}/>
          <Switch handleChange={handleChange} checked={theme == 'dark' ? true : false} icons={icons} />
        </nav>
    )
}