import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-['Montserrat']">
            О нашем фонде
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-['Open_Sans']">
            Мы верим, что каждый человек достоин поддержки и заботы. Наша миссия
            — создавать мир, где никто не остается один на один с трудностями.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Target" className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-['Montserrat']">
                Наша миссия
              </h3>
              <p className="text-gray-600 leading-relaxed font-['Open_Sans']">
                Оказывать поддержку людям, оказавшимся в трудной жизненной
                ситуации, и способствовать созданию справедливого общества
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Eye" className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-['Montserrat']">
                Наше видение
              </h3>
              <p className="text-gray-600 leading-relaxed font-['Open_Sans']">
                Мир, где каждый человек имеет равные возможности для счастливой
                и достойной жизни, независимо от обстоятельств
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Heart" className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-['Montserrat']">
                Наши ценности
              </h3>
              <p className="text-gray-600 leading-relaxed font-['Open_Sans']">
                Сострадание, прозрачность, профессионализм и уважение к каждому
                человеку — основа нашей работы
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-['Montserrat']">
                Прозрачность и отчетность
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed font-['Open_Sans']">
                Мы регулярно публикуем отчеты о своей деятельности и том, как
                расходуются пожертвования. Каждый рубль учитывается и
                направляется на помощь тем, кто в ней нуждается.
              </p>
              <div className="flex items-center text-purple-600 font-medium">
                <Icon name="FileText" className="mr-2" size={20} />
                Скачать годовой отчет
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-2xl font-bold text-purple-600 mb-1">
                  94%
                </div>
                <div className="text-sm text-gray-600">
                  Средств идет напрямую на помощь
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-2xl font-bold text-purple-600 mb-1">
                  6%
                </div>
                <div className="text-sm text-gray-600">
                  Административные расходы
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
