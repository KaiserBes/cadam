import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AboutPage() {
  const courses = [
    {
      title: "ITC-BOOTCAMP",
      description: "Курс по Frontend-разработке (2023)",
    },
    {
      title: "Bloc",
      description:
        "Продвинутый React и Next.js (2024), также изучение Tailwind, Shadcn/ui и так далее...",
    },
    {
      title: "Tunduk",
      description:
        "Изучение новых технологий (Keycloak, RTK Query, NextAuth, Ant Design и так далее...) ",
    },
  ];

  return (
    <div className="mx-auto p-6">
      <h1 className="text-2xl font-bold text-center">
        Привет! Я Улукбек — frontend-разработчик.
      </h1>
      <p className="mt-4 text-center text-gray-700">
        Разрабатываю быстрые и удобные интерфейсы с Next.js, Tailwind и
        TypeScript. Специализируюсь на сложных UI, интеграции API и
        аутентификации (Keycloak, NextAuth). Люблю чистый код и изучение новых
        технологий.
      </p>
      <hr className="my-6 border-gray-300" />
      <p className="text-gray-700 text-center">
        Я закончил курсы ITC BOOTCAMP и участвовал в различных хакатонах. После
        окончания курсов работал на фрилансе, затем в Тундук.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {courses.map((course) => (
          <Card
            key={course.title}
            className="p-4 shadow-md rounded-lg transform transition-all duration-300 
            hover:scale-105 hover:rotate-2 hover:shadow-xl 
            bg-gray-100 hover:bg-gradient-to-r from-blue-200 to-purple-300 hover:text-white"
          >
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                {course.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="hover:text-white">
              <p className="text-gray-600 hover:text-white transition-colors duration-300">
                {course.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
