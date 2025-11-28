import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Network" className="text-primary-foreground" size={24} />
              </div>
              <span className="text-xl font-bold text-primary">АНО ЦСА</span>
            </div>
            <div className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-secondary transition-colors">О нас</button>
              <button onClick={() => scrollToSection('methodology')} className="text-sm font-medium hover:text-secondary transition-colors">Методология</button>
              <button onClick={() => scrollToSection('cases')} className="text-sm font-medium hover:text-secondary transition-colors">Кейсы</button>
              <button onClick={() => scrollToSection('team')} className="text-sm font-medium hover:text-secondary transition-colors">Команда</button>
              <button onClick={() => scrollToSection('contact')} className="text-sm font-medium hover:text-secondary transition-colors">Контакты</button>
            </div>
            <Button onClick={() => scrollToSection('contact')} className="hidden md:inline-flex">
              Связаться
            </Button>
          </div>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-primary via-primary to-secondary">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Центр социальной архитектуры
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Системный подход к управлению социальными проектами. 
                Технология, которая превращает идеи в результаты.
              </p>
              <div className="flex gap-4">
                <Button onClick={() => scrollToSection('about')} size="lg" variant="secondary">
                  Узнать больше
                </Button>
                <Button onClick={() => scrollToSection('contact')} size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
                  Начать проект
                </Button>
              </div>
            </div>
            <div className="animate-slide-up">
              <img 
                src="https://cdn.poehali.dev/projects/2748f48c-a06e-426c-89b8-6ad343061c1f/files/9896c323-898d-489a-852e-1c7234f94452.jpg" 
                alt="Социальная архитектура"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-muted">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Зачем создан Центр</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Мы разработали систему управления сложными социальными проектами, 
              которая объединяет методологию, технологии и экспертизу
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Target" className="text-secondary" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">Масштаб</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Работаем с проектами федерального и регионального уровня, 
                  где требуется системный подход и прозрачное управление
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Lightbulb" className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">Технология</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Метод социальной архитектуры основан на научных принципах 
                  и проверен практикой реализации сложных проектов
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Users" className="text-secondary" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">Экспертиза</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Команда специалистов с опытом управления социальными 
                  и государственными проектами на всех уровнях
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="methodology" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/2748f48c-a06e-426c-89b8-6ad343061c1f/files/e53e3e80-98a6-4b3b-bcbe-a364c6d002d8.jpg" 
                alt="Методология"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">Метод социальной архитектуры</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Системный подход к проектированию и реализации социальных изменений, 
                основанный на принципах управляемости, прозрачности и измеримости результатов
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Layout" className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Структурирование</h3>
                    <p className="text-muted-foreground">
                      Разбиение сложных задач на управляемые элементы с четкими связями и зависимостями
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="GitBranch" className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Процессный подход</h3>
                    <p className="text-muted-foreground">
                      Выстраивание эффективных процессов взаимодействия между участниками проекта
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="BarChart" className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Измеримость</h3>
                    <p className="text-muted-foreground">
                      Контроль ключевых показателей и метрик эффективности на каждом этапе
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 px-6 bg-muted">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Реализованные проекты</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Практические результаты применения метода социальной архитектуры
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg overflow-hidden group">
              <div className="h-48 bg-gradient-to-br from-secondary to-accent relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors"></div>
                <div className="absolute bottom-4 left-6">
                  <Icon name="Building" className="text-white" size={48} />
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-3">Цифровая трансформация региона</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Разработка и внедрение системы управления региональными социальными проектами 
                  с охватом 2.5 млн жителей
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">Государственный сектор</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">18 месяцев</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg overflow-hidden group">
              <div className="h-48 bg-gradient-to-br from-accent to-secondary relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors"></div>
                <div className="absolute bottom-4 left-6">
                  <Icon name="Briefcase" className="text-white" size={48} />
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-3">Программа развития НКО</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Создание системы поддержки некоммерческих организаций с механизмами 
                  оценки эффективности и масштабирования лучших практик
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">Некоммерческий сектор</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">24 месяца</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg overflow-hidden group">
              <div className="h-48 bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
                <div className="absolute inset-0 bg-secondary/20 group-hover:bg-secondary/10 transition-colors"></div>
                <div className="absolute bottom-4 left-6">
                  <Icon name="Award" className="text-white" size={48} />
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-3">Система оценки социальных эффектов</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Разработка методологии и цифровой платформы для оценки результативности 
                  социальных программ на федеральном уровне
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">Аналитика</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">12 месяцев</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg overflow-hidden group">
              <div className="h-48 bg-gradient-to-br from-secondary to-primary relative overflow-hidden">
                <div className="absolute inset-0 bg-accent/20 group-hover:bg-accent/10 transition-colors"></div>
                <div className="absolute bottom-4 left-6">
                  <Icon name="Rocket" className="text-white" size={48} />
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-3">Акселератор социальных проектов</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Создание образовательной программы и системы менторства для руководителей 
                  социальных инициатив
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">Образование</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">Постоянно</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Технологическая система</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Цифровой контур управления проектами обеспечивает прозрачность и контроль на всех этапах
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="border-0 shadow-lg text-center p-6 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Database" className="text-secondary" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">Сбор данных</h3>
              <p className="text-sm text-muted-foreground">
                Автоматизированная система сбора и валидации информации
              </p>
            </Card>

            <Card className="border-0 shadow-lg text-center p-6 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="TrendingUp" className="text-accent" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">Аналитика</h3>
              <p className="text-sm text-muted-foreground">
                Интерактивные дашборды и отчеты в реальном времени
              </p>
            </Card>

            <Card className="border-0 shadow-lg text-center p-6 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" className="text-secondary" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">Контроль</h3>
              <p className="text-sm text-muted-foreground">
                Система мониторинга KPI и автоматических уведомлений
              </p>
            </Card>

            <Card className="border-0 shadow-lg text-center p-6 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" className="text-accent" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">Автоматизация</h3>
              <p className="text-sm text-muted-foreground">
                Оптимизация рутинных процессов и документооборота
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="team" className="py-20 px-6 bg-muted">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Команда экспертов</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Профессионалы с опытом управления проектами на государственном и федеральном уровне
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Александр Иванов",
                role: "Руководитель Центра",
                expertise: "15+ лет в управлении социальными проектами",
                icon: "User"
              },
              {
                name: "Мария Петрова",
                role: "Директор по методологии",
                expertise: "Разработка систем оценки эффективности",
                icon: "BookOpen"
              },
              {
                name: "Дмитрий Сидоров",
                role: "Технический директор",
                expertise: "Цифровая трансформация государственного сектора",
                icon: "Code"
              }
            ].map((member, index) => (
              <Card key={index} className="border-0 shadow-lg overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                    <Icon name={member.icon as any} className="text-white" size={64} />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-secondary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.expertise}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Начать сотрудничество</h2>
            <p className="text-xl text-muted-foreground">
              Свяжитесь с нами для обсуждения вашего проекта
            </p>
          </div>

          <Card className="border-0 shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Имя</label>
                    <Input placeholder="Ваше имя" className="h-12" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Организация</label>
                    <Input placeholder="Название организации" className="h-12" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="your@email.com" className="h-12" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <Input type="tel" placeholder="+7 (___) ___-__-__" className="h-12" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Расскажите о вашем проекте</label>
                  <Textarea 
                    placeholder="Опишите задачу, которую хотите решить..." 
                    className="min-h-32"
                  />
                </div>

                <Button size="lg" className="w-full md:w-auto">
                  Отправить заявку
                  <Icon name="Send" className="ml-2" size={18} />
                </Button>
              </form>

              <div className="mt-12 pt-8 border-t border-border">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" className="text-secondary" size={20} />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Email</p>
                      <p className="text-sm text-muted-foreground">info@csa.ru</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" className="text-secondary" size={20} />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Телефон</p>
                      <p className="text-sm text-muted-foreground">+7 (495) 123-45-67</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" className="text-secondary" size={20} />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Адрес</p>
                      <p className="text-sm text-muted-foreground">Москва, Россия</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-primary text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <Icon name="Network" className="text-white" size={24} />
                </div>
                <span className="text-xl font-bold">АНО ЦСА</span>
              </div>
              <p className="text-white/70 text-sm">
                Центр социальной архитектуры — системный подход к управлению социальными проектами
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Навигация</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('about')} className="block text-sm text-white/70 hover:text-white transition-colors">О нас</button>
                <button onClick={() => scrollToSection('methodology')} className="block text-sm text-white/70 hover:text-white transition-colors">Методология</button>
                <button onClick={() => scrollToSection('cases')} className="block text-sm text-white/70 hover:text-white transition-colors">Кейсы</button>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Разделы</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('team')} className="block text-sm text-white/70 hover:text-white transition-colors">Команда</button>
                <button onClick={() => scrollToSection('contact')} className="block text-sm text-white/70 hover:text-white transition-colors">Контакты</button>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-white/70">
                <p>info@csa.ru</p>
                <p>+7 (495) 123-45-67</p>
                <p>Москва, Россия</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 text-center text-sm text-white/60">
            <p>© 2024 АНО Центр социальной архитектуры. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
