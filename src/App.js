import './App.css';
import { Suspense, useState } from 'react';
import { useTranslation } from 'react-i18next';

const locales = {
  en: { title: 'English' },
  kr: { title: 'Korean' },
  hi: { title: 'Hindi' }
};


function App() {
  const [message, setMessage] = useState(0);
  const { t, i18n } = useTranslation();
  console.log(message);
  return (
    <>
      <ul>
        {Object.keys(locales).map((locale) =>
          <li key={locale}><button
            style={{ fontWeight: i18n.resolvedLanguage === locale ? 'bold' : '' }}
            type='submit' onClick={() => i18n.changeLanguage(locale)} >{locale}
          </button></li>
        )}
      </ul>
      <h1>{t('main.header')}</h1>
      <p>This is demo test for i18next</p>
      <button onClick={() => setMessage(message + 1)}>+1 message</button>
      <p>{t('main.new_message', { count: message })}</p>
      <p>{t('main.current_date', { date: new Date() })}</p>

    </>
  );
}

export default function WrapperApp() {
  return (
    <Suspense fallback="...loading">
      <App />
    </Suspense>
  )
};
