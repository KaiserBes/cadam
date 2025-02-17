"use client";

import { FC } from "react";
import * as React from "react";
import EditModal from "./edit-modal";

const ReactContent: FC = () => {
  return (
    <div className="">
      <div className=" mx-auto p-6">
        <h1 className="text-2xl font-bold text-center">React & Next.js</h1>
        <p className="mt-4 text-center text-gray-700">
          Свой путь в frontend-разработке я начинал с React, изучая основы
          компонетного подхода, хуков и управления состоянием. Со временем,
          углубляясь в разработку, я перешел на Next.js, который позволил мне
          оптимизировать проекты, улучшить SEO и ускорить рендеринг за счет SSR
          и SSG. Теперь я активно использую Next.js в своих проектах, совмещая
          его с Tailwind, TypeScript и Shadcn/ui для создания быстрых и удобных
          интерфейсов.
        </p>
      </div>
      <EditModal />
    </div>
  );
};
export default ReactContent;
