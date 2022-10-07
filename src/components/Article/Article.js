import stylesArticle from './Article.module.css';

export const Article = () => {
  return (
    <div className={stylesArticle.article}>
        <img className={stylesArticle.profileImg}
          src="https://avatars.githubusercontent.com/u/100159537?v=4"
          alt="profilePhoto"
        />
      <div className={stylesArticle.articleData}>
      <p className={stylesArticle.profileName}>@nickwhite</p>
        <h2 className={stylesArticle.articleTitle}>Переменные в JavaScript</h2>
        <img className={stylesArticle.articleImg}
          src="https://itchief.ru/assets/images/covers/javascript-statements.png"
          alt="article"
        />
        <p className={stylesArticle.articleText}>
          Движки сложны. Но основы понять легко. Движок (встроенный, если это
          браузер) читает («парсит») текст скрипта. Затем он преобразует
          («компилирует») скрипт в машинный язык. После этого машинный код
          запускается и работает достаточно быстро. Движок применяет оптимизации
          на каждом этапе. Он даже просматривает скомпилированный скрипт во
          время его работы, анализируя проходящие через него данные, и применяет
          оптимизации к машинному коду, полагаясь на полученные знания. В
          результате скрипты работают очень быстро.
        </p>
      </div>
    </div>
  );
};
