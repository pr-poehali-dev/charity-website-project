import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-purple-50 py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-['Montserrat']">
            Помогаем создавать{" "}
            <span className="text-purple-600">лучший мир</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed font-['Open_Sans']">
            Мы объединяем людей, которые готовы делиться добротой и поддерживать
            тех, кто нуждается в помощи
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg font-medium"
            >
              <Icon name="Heart" className="mr-2" size={20} />
              Сделать пожертвование
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-6 text-lg font-medium"
            >
              <Icon name="Users" className="mr-2" size={20} />
              Стать волонтером
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                2,500+
              </div>
              <div className="text-gray-600">Людей получили помощь</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">45</div>
              <div className="text-gray-600">Активных проектов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                ₽12М
              </div>
              <div className="text-gray-600">Собрано средств</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
