import React, { CSSProperties, ReactNode, FC } from "react";
import ClassNames from "classnames";

type gutter = number | [number, number]; // 类型别名、基本数据类型
type justify = "start" | "end" | "center" | "space-around" | "space-between"; // 类型别名、联合类型
type align = "top" | "middle" | "bottom"; // 类型别名、联合类型

interface RowProps {
  // 接口
  classname?: string;
  align?: align;
  justify?: justify;
  gutter?: gutter;
  style?: CSSProperties;
  children?: ReactNode;
}

const Row: FC<RowProps> = ({ children, ...props }) => {
  console.log(children);
  const { className, align, justify, style = {} } = props;
  const classes = ClassNames("azir-row", className, {
    [`azir-row-${align}`]: align,
    [`azir-row-${justify}`]: justify
  });

  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
};

Row.defaultProps = {
  align: "top",
  justify: "start",
  gutter: 0
};

export default Row;
