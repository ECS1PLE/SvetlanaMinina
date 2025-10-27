import { FC } from "react";

const IconBlock: FC<{ children: React.ReactNode }> = ({ children }) => (
  <div
    className="IconBlockForm rounded-lg"
    style={{
      padding: 8,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    {children}
  </div>
);

export default IconBlock;
