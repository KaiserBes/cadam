const FrameworksContent = () => {
  return (
    <div className="mx-auto p-6">
      <h1 className="text-2xl font-bold text-center">Frameworks</h1>
      <p className="mt-4 text-center text-gray-700">
        Мой стек включает в себя как инструменты для управления состоянием и
        аутентификацией, так и UI-фреймворки для удобной и быстрой разработки
        интерфейсов.
      </p>
      <p className="mt-2 text-gray-700">
        📌 Фронтенд: Next.js, Qwik, React, TypeScript
      </p>
      <p>📌 Аутентификация: Keycloak, NextAuth</p>
      <p>📌 Работа с данными: RTK Query, REST API</p>
      <p>📌 UI-фреймворки: Tailwind, Shadcn/ui, Ant Design, MUI, Flowbite</p>
      <p>📌 Разработка компонентов: Storybook</p>
    </div>
  );
};

export default FrameworksContent;
