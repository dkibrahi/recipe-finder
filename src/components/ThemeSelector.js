// react imports
import { useTheme } from '../hooks/useTheme';

// styles
import './ThemeSelector.css';

// img import
import modeIcon from '../assests/mode-icon.svg';

const themeColors = ['#58249c', '#249c6b', '#b70233'];

export default function ThemeSelector() {
    const { changeColor, changeMode, mode, color } = useTheme();

    const toggleMode = () => {
        if (mode === 'dark') {
            changeMode('light');
        }

        else {
            changeMode('dark');
        }
    }

    console.log(mode);

    return (
        <div className='theme-selector'>
            <div className='mode-toggle'>
                <img 
                    src={modeIcon} 
                    onClick={toggleMode}
                    alt='switch theme to dark or light'
                    style={{ filter: mode === 'dark' ? 'invert(100%)' : 'invert(20%)'}}
                />
            </div>
            <div className='theme-buttons'>
                {themeColors.map((color) => (
                    <div 
                        key={color}
                        onClick={() => { changeColor(color) }}
                        style={{ background: color }}
                    />
                ))}
            </div>
        </div>
    )
}


