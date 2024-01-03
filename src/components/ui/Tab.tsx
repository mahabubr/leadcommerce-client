"use client";
import React, { ReactElement, useEffect, useState } from "react";
import style from "../dashboard/static/dashboard.module.css";

type IProps = {
  childrens: { body: ReactElement; label: string }[];
  labels: string[];
};
const Tab = (props: IProps) => {
  const { childrens, labels } = props;
  const [cLabel, setLabel] = useState(labels[0]);

  return (
    <div>
      <div className={style.labels}>
        {labels.map((item: string, index: number) => (
          <span
            onClick={() => setLabel(item)}
            key={index}
            className={`${style.tab_buttons} ${
              cLabel === item && style.active
            }`}>
            {item}
          </span>
        ))}
      </div>
      <div>
        {childrens?.map(
          (item, index) =>
            item.label === cLabel && <div key={index}>{item.body}</div>
        )}
      </div>
    </div>
  );
};

export default Tab;
