import React from "react";
import {useState} from 'react'
import './passwordApp.css'; // Убедитесь, что файл существует и правильно подключен

const PasswordApp = () => {
    const [password, setPassword] = useState('');
    const [length, setLength] = useState(12);
    const [useUppercase, setUseUppercase] = useState(true);
    const [useLowercase, setUseLowercase] = useState(true);
    const [useNumbers, setUseNumbers] = useState(true);
    const [useSymbols, setUseSymbols] = useState(true);

    const generatePassword = () => {
        // Определяем доступные символы на основе выбранных параметров
        let chars = '';
        const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowercase = 'abcdefghijklmnopqrstuvwxyz';
        const numbers = '0123456789';
        const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

        if (useUppercase) chars += uppercase;
        if (useLowercase) chars += lowercase;
        if (useNumbers) chars += numbers;
        if (useSymbols) chars += symbols;

        // Если ни один параметр не выбран, используем все
        if (!chars) {
            chars = uppercase + lowercase + numbers + symbols;
            setUseUppercase(true);
            setUseLowercase(true);
            setUseNumbers(true);
            setUseSymbols(true);
        }

        // Генерация пароля 
        let generatedPassword = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            generatedPassword += chars[randomIndex];
        }
        setPassword(generatedPassword);
    };

    // Копирование пароля в буфер обмена
    const copyToClipboard = () => {
        navigator.clipboard.writeText(password);
        alert('Пароль скопирован в буфер обмена!');
    };

    return (
        <div className="password-generator">
            <div className="password-display"> 
                <input 
                    type="text"
                    value={password}
                    readOnly
                    placeholder="Сгенерированный пароль появится здесь"
                />
                {password && (
                    <button className="copy-btn" onClick={copyToClipboard}>Копировать</button>
                )}
            </div>
            
            <div className="password-settings">
                <div className="length-control">
                    <label>
                        Длина пароля: {length}
                        <input
                            type="range"
                            min="4"
                            max="32"
                            value={length}
                            onChange={(e) => setLength(parseInt(e.target.value))}
                        />
                    </label>
                </div>
                
                <div className="character-types">
                    <label>
                        <input
                            type="checkbox"
                            checked={useUppercase}
                            onChange={() => setUseUppercase(!useUppercase)}
                        />
                        Заглавные буквы (A-Z)
                    </label>

                    <label>
                        <input
                            type="checkbox"
                            checked={useLowercase}
                            onChange={() => setUseLowercase(!useLowercase)}
                        />
                        Строчные буквы (a-z)
                    </label>

                    <label>
                        <input
                            type="checkbox"
                            checked={useNumbers}
                            onChange={() => setUseNumbers(!useNumbers)}
                        />
                        Цифры (0-9)
                    </label>
                    
                    <label>
                        <input
                            type="checkbox"
                            checked={useSymbols}
                            onChange={() => setUseSymbols(!useSymbols)}
                        />
                        Спецсимволы (!@#$...)
                    </label>
                </div>
            </div>
            
            <button className="generate-btn" onClick={generatePassword}>
                Сгенерировать пароль
            </button>
        </div>
    );
}

export default PasswordApp;