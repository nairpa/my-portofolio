import { IconButton } from "@/common/components/icon-button/IconButton"
import { Select } from "@/common/components/select/Select";
import { Switch } from "@/common/components/switch/Switch"
import { Theme, ThemeContext } from "@/common/context/ThemeContext";
import { faBars } from "@fortawesome/free-solid-svg-icons"
import moonIcon from 'public/icons/moon.svg';
import sunIcon from 'public/icons/sun.svg';
import { useContext } from "react";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
    const { theme, prefersDarkTheme } = useContext(ThemeContext) as Theme;
    const { i18n } = useTranslation();

    const handleChange = (event: any) => {
        const { checked } =  event.target;
        prefersDarkTheme(checked)
    }
    
    const handleSelectChange = (event: any) => {
        i18n.changeLanguage(event)
    }

    const options = [   
        { icon: 'es', value: 'es', label: 'es' },
        { icon: 'gb', value: 'en', label: 'en' },
    ]

    const icons = [
        moonIcon,
        sunIcon,
    ]

    return (
        <nav className='navbar'>
            <Select options={options} handleChange={handleSelectChange} defaultValue={i18n.language}></Select>
            <Switch handleChange={handleChange} checked={theme == 'dark' ? true : false} icons={icons} />
        </nav>
    )
}