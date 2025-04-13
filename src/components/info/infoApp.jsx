// InfoApp.jsx
import React from 'react';
import './infoApp.css';

const InfoApp = () => {
    return (
        <div className="password-info-container">
            <h2 className="password-info-title">🔒 Факторы надёжности пароля</h2>
            
            <div className="password-info-section">
                <h3 className="password-info-subtitle">1. Длина пароля</h3>
                <p className="password-info-text">Каждый дополнительный символ <strong>экспоненциально</strong> увеличивает сложность подбора:</p>
                <ul className="password-info-list">
                    <li>8 символов: ~5 часов взлома</li>
                    <li>12 символов: ~300 лет</li>
                    <li>16 символов: ~30 миллионов лет</li>
                </ul>
            </div>

            <div className="password-info-section">
                <h3 className="password-info-subtitle">2. Разнообразие символов</h3>
                <p className="password-info-text">Использование разных типов символов увеличивает количество возможных комбинаций:</p>
                <table className="password-info-table">
                    <thead>
                        <tr>
                            <th className="password-info-th">Типы символов</th>
                            <th className="password-info-th">Пример</th>
                            <th className="password-info-th">Вариантов на символ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="password-info-td">Только цифры</td>
                            <td className="password-info-td">123456</td>
                            <td className="password-info-td">10</td>
                        </tr>
                        <tr>
                            <td className="password-info-td">Цифры + буквы</td>
                            <td className="password-info-td">a3b9R2</td>
                            <td className="password-info-td">62</td>
                        </tr>
                        <tr>
                            <td className="password-info-td">Все символы</td>
                            <td className="password-info-td">P@ssw0rd!</td>
                            <td className="password-info-td">94+</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="password-info-section">
                <h3 className="password-info-subtitle">3. Время взлома*</h3>
                <p className="password-info-text">При скорости 1 млрд попыток/секунду:</p>
                <ul className="password-info-list">
                    <li>8 символов (только цифры): 0.0001 секунды</li>
                    <li>8 символов (все типы): ~7 часов</li>
                    <li>12 символов (все типы): ~300 лет</li>
                </ul>
                <p className="password-info-disclaimer">*Теоретические оценки для идеальных условий</p>
            </div>

            <div className="password-info-recommendation">
                <h3 className="password-info-subtitle">🏆 Рекомендации</h3>
                <ul className="password-info-list">
                    <li>Используйте минимум 12 символов</li>
                    <li>Комбинируйте буквы (A-Z, a-z), цифры и спецсимволы (!@#$%^&*)</li>
                    <li>Избегайте популярных слов и последовательностей (qwerty, 12345)</li>
                    <li>Используйте менеджеры паролей (LastPass, 1Password)</li>
                    <li>Включите двухфакторную аутентификацию</li>
                </ul>
            </div>
        </div>
    )
}

export default InfoApp;