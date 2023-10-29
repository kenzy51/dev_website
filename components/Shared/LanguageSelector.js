import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

const LanguageSelector = () => {
  const router = useRouter();

  const changeLanguage = (locale) => {
    const { pathname, asPath } = router;

    if (locale !== router.locale) {
      router.push(pathname, asPath, { locale });
    }
  };

  const defaultLocale = router.defaultLocale;

  return (
    <div className="col-lg-1 col-sm-6 col-md-6">
      <div className="languages-switch">
        <select
          onChange={(e) => changeLanguage(e.target.value)}
          value={router.locale || defaultLocale} 
          style={{ borderRadius: '20px', cursor: 'pointer' }}
        >
          <option value="en">En</option>
          <option value="es">Es</option>
          <option value="ru">Ru</option>
          <option value="zh">Zh</option>
        </select>
      </div>
    </div>
  );
};

export default LanguageSelector;
