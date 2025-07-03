import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Помощь детям-сиротам",
      description:
        "Обеспечиваем детей в детских домах необходимыми вещами, образованием и эмоциональной поддержкой",
      raised: 850000,
      goal: 1200000,
      image: "👶",
      urgency: "Высокий приоритет",
    },
    {
      id: 2,
      title: "Поддержка пожилых людей",
      description:
        "Оказываем помощь одиноким пожилым людям: доставка продуктов, лекарств и медицинская помощь",
      raised: 450000,
      goal: 600000,
      image: "👴",
      urgency: "Средний приоритет",
    },
    {
      id: 3,
      title: "Лечение онкобольных",
      description:
        "Финансируем дорогостоящее лечение и реабилитацию людей, борющихся с раком",
      raised: 1100000,
      goal: 1500000,
      image: "🏥",
      urgency: "Критический",
    },
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-['Montserrat']">
            Наши проекты
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-['Open_Sans']">
            Каждый проект — это возможность изменить чью-то жизнь к лучшему.
            Выберите тот, который откликается вашему сердцу.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => {
            const progressPercentage = Math.round(
              (project.raised / project.goal) * 100,
            );

            return (
              <Card
                key={project.id}
                className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-8 text-center">
                    <div className="text-6xl mb-4">{project.image}</div>
                    <div
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                        project.urgency === "Критический"
                          ? "bg-red-100 text-red-800"
                          : project.urgency === "Высокий приоритет"
                            ? "bg-orange-100 text-orange-800"
                            : "bg-green-100 text-green-800"
                      }`}
                    >
                      {project.urgency}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 font-['Montserrat']">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed font-['Open_Sans']">
                      {project.description}
                    </p>

                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">
                          Собрано: {formatCurrency(project.raised)}
                        </span>
                        <span className="text-sm text-gray-500">
                          {progressPercentage}%
                        </span>
                      </div>
                      <Progress value={progressPercentage} className="h-2" />
                      <div className="text-sm text-gray-500 mt-1">
                        Цель: {formatCurrency(project.goal)}
                      </div>
                    </div>

                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                      <Icon name="Heart" className="mr-2" size={16} />
                      Помочь проекту
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-purple-600 text-purple-600 hover:bg-purple-50"
          >
            <Icon name="Plus" className="mr-2" size={20} />
            Посмотреть все проекты
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
