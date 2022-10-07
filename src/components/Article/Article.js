import stylesArticle from "./Article.module.css";

export const Article = ({
  avatarUser,
  imageArticle,
  nameUser,
  textArticle,
  titleArticle,
}) => {
  return (
    <div className={stylesArticle.article}>
      <img
        className={stylesArticle.profileImg}
        src={avatarUser}
        alt="profilePhoto"
      />
      <div className={stylesArticle.articleData}>
        <p className={stylesArticle.profileName}>@{nameUser}</p>
        <h2 className={stylesArticle.articleTitle}>{titleArticle}</h2>
        <img
          className={stylesArticle.articleImg}
          src={imageArticle}
          alt="article"
        />
        <p className={stylesArticle.articleText}>{textArticle}</p>
      </div>
    </div>
  );
};
