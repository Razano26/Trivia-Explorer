import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-primary p-4 shadow-md">
      <div className="inline-block bg-secondary p-2 rounded-lg">
        <h1 className="text-primary text-2xl font-bold">Trivia Explorer</h1>
      </div>
    </header>
  );
};

export default Header;
