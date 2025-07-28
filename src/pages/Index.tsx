import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [registrationData, setRegistrationData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    if (registrationData.name && registrationData.phone) {
      setIsRegistered(true);
    }
  };

  const events = [
    {
      time: '12:00',
      title: 'VR Club',
      description: 'Погружение в виртуальную реальность',
      icon: 'Gamepad2',
      location: 'VR Зона'
    },
    {
      time: '15:00', 
      title: 'Ресторан',
      description: 'Праздничный обед и торт',
      icon: 'Cake',
      location: 'Главный зал'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-coral/10 via-white to-turquoise/10">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-coral to-coral-light text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 py-24 text-center">
          <div className="animate-fade-in">
            <Icon name="PartyPopper" size={64} className="mx-auto mb-6 text-white/90" />
            <h1 className="text-6xl font-bold font-['Montserrat'] mb-4">
              День Рождения Никиты!
            </h1>
            <p className="text-xl mb-2 opacity-90">Исполняется 11 лет</p>
            <Badge variant="secondary" className="text-lg px-6 py-2 bg-white/20 text-white border-white/30">
              🎉 Праздничная программа
            </Badge>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/20 to-transparent"></div>
      </section>

      {/* Navigation Tabs */}
      <section className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm border-b shadow-sm">
        <div className="container mx-auto px-4">
          <nav className="flex justify-center space-x-8 py-4">
            <a href="#invitation" className="text-coral hover:text-coral-dark font-medium transition-colors">Приглашение</a>
            <a href="#program" className="text-coral hover:text-coral-dark font-medium transition-colors">Программа</a>
            <a href="#registration" className="text-coral hover:text-coral-dark font-medium transition-colors">Регистрация</a>
          </nav>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 space-y-16">
        
        {/* Invitation Section */}
        <section id="invitation" className="text-center animate-fade-in">
          <h2 className="text-4xl font-bold font-['Montserrat'] text-gray-800 mb-8">
            Дорогие друзья!
          </h2>
          <Card className="max-w-2xl mx-auto border-2 border-coral/20 shadow-xl">
            <CardContent className="p-8">
              <div className="space-y-6">
                <Icon name="Cake" size={48} className="mx-auto text-coral" />
                <p className="text-lg text-gray-700 leading-relaxed">
                  Приглашаю вас на мой <span className="font-bold text-coral">11-й день рождения</span>! 
                  Нас ждет увлекательная программа с VR-играми и вкусным обедом в ресторане.
                </p>
                <div className="bg-turquoise/10 p-4 rounded-lg">
                  <p className="text-gray-600">
                    Будет весело и незабываемо! Приходите и давайте отметим этот особенный день вместе! 🎈
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Program Section */}
        <section id="program" className="animate-fade-in">
          <h2 className="text-4xl font-bold font-['Montserrat'] text-center text-gray-800 mb-12">
            Программа мероприятия
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-coral to-turquoise"></div>
              
              <div className="space-y-8">
                {events.map((event, index) => (
                  <div key={index} className="relative flex items-start space-x-6">
                    {/* Timeline dot */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-6 h-6 bg-coral rounded-full border-4 border-white shadow-lg"></div>
                    </div>
                    
                    {/* Event card */}
                    <Card className="flex-1 border-2 border-gray-100 hover:border-coral/30 transition-all duration-300 hover:shadow-lg">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-xl font-['Montserrat'] text-gray-800 flex items-center gap-3">
                            <Icon name={event.icon as any} size={24} className="text-coral" />
                            {event.title}
                          </CardTitle>
                          <Badge variant="outline" className="text-coral border-coral">
                            {event.time}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-2">{event.description}</p>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Icon name="MapPin" size={16} />
                          {event.location}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Registration Section */}
        <section id="registration" className="animate-fade-in">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold font-['Montserrat'] text-center text-gray-800 mb-8">
              Регистрация на мероприятие
            </h2>
            
            {!isRegistered ? (
              <Card className="border-2 border-turquoise/20 shadow-xl">
                <CardHeader className="text-center pb-6">
                  <Icon name="UserPlus" size={48} className="mx-auto text-turquoise mb-4" />
                  <CardTitle className="text-2xl font-['Montserrat'] text-gray-800">
                    Подтвердите участие
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleRegistration} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Ваше имя *
                      </label>
                      <Input
                        type="text"
                        placeholder="Введите ваше имя"
                        value={registrationData.name}
                        onChange={(e) => setRegistrationData({...registrationData, name: e.target.value})}
                        className="border-2 focus:border-turquoise"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Телефон *
                      </label>
                      <Input
                        type="tel"
                        placeholder="+7 (999) 123-45-67"
                        value={registrationData.phone}
                        onChange={(e) => setRegistrationData({...registrationData, phone: e.target.value})}
                        className="border-2 focus:border-turquoise"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email (по желанию)
                      </label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={registrationData.email}
                        onChange={(e) => setRegistrationData({...registrationData, email: e.target.value})}
                        className="border-2 focus:border-turquoise"
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-turquoise hover:bg-turquoise-dark text-white font-semibold py-3 text-lg">
                      <Icon name="Check" size={20} className="mr-2" />
                      Подтвердить участие
                    </Button>
                  </form>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-2 border-green-200 bg-green-50 shadow-xl">
                <CardContent className="text-center py-12">
                  <Icon name="CheckCircle" size={64} className="mx-auto text-green-500 mb-6" />
                  <h3 className="text-2xl font-bold text-green-800 mb-4">
                    Спасибо за регистрацию, {registrationData.name}!
                  </h3>
                  <p className="text-green-700 text-lg">
                    Ждем вас на празднике! До встречи! 🎉
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 py-12 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-8 mb-6">
            <Icon name="Gift" size={32} className="text-coral" />
            <Icon name="Cake" size={32} className="text-turquoise" />
            <Icon name="PartyPopper" size={32} className="text-coral" />
          </div>
          <p className="text-gray-600 text-lg">
            С нетерпением жду встречи с вами на моем дне рождения! 🎈
          </p>
          <p className="text-sm text-gray-500 mt-4">
            11-й день рождения Никиты • 2024
          </p>
        </div>
      </footer>
    </div>
  );
}