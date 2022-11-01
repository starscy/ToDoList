import React from "react";

type HeaderProps = { countAll: number; activeTask: number };

const Header: React.FC<HeaderProps> = ({ countAll, activeTask }) => {
  return (
    <div className="header">
      {countAll - activeTask === countAll ? (
        <h1>Все задачи завершены</h1>
      ) : (
        <h1>
          Моих задач {countAll} шт. из них незавершенных {activeTask}
        </h1>
      )}
    </div>
  );
};

export default Header;
