import style from "./component.module.css";

function Filter({ activeTag, handleTag, tagList }) {
  return (
    <div className={style.container}>
      {tagList.map((tag, i) => (
        <h4
          onClick={() => handleTag(tag)}
          className={`${style.buttons}
             ${activeTag == tag ? `${style.active}` : `${style.notActive}`}`}
          key={i}
        >
          {tag}
        </h4>
      ))}
    </div>
  );
}

export default Filter;
