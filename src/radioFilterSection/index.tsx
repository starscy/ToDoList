import React from "react";
import style from "./radioFilterSection.module.scss";

type RadioFilterSectionProps = {
  setFilter: React.Dispatch<React.SetStateAction<string>>;
};
const RadioFilterSection: React.FC<RadioFilterSectionProps> = ({
  setFilter,
}) => {
  const [value, setValue] = React.useState("active");

  const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    setFilter(event.target.value);
  };

  return (
    <div className={style["radioFilterSection"]}>
      <input
        type="radio"
        name="radio"
        value="all"
        onChange={changeValue}
        checked={value === "all" ? true : false}
      />
      <label>Все</label>
      <input
        type="radio"
        name="radio"
        value="active"
        onChange={changeValue}
        checked={value === "active" ? true : false}
      />
      <label>Активные</label>
      <input
        type="radio"
        name="radio"
        value="completed"
        onChange={changeValue}
        checked={value === "completed" ? true : false}
      />
      <label>Выполненные</label>
    </div>
  );
};

export default RadioFilterSection;
