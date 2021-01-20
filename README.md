Mustafa Kutluk - 130202057

Uygulamayı çalıştırma şekli

ionic CLI'yi kurun: "npm install -g @ionic/cli"
Bu depoyu klonlayın: "git clone https://github.com/KutlukMustafa/130202057.git"
Bir terminalde depoya gidin: "cd 130202057"
Firebase için : "npm install firebase" yükleyin.
Bir tarayıcıda yerel olarak çalıştırın: "ionic serve"

-Proje oluşturmak için Node.js ve npm kurulumları gerçekleştirildi.
-İonic kurularak ionic projesi oluşturulmuştur ve angular framework yüklemiştir.
-Template olarak blank kullanıldı.
-Sonrasında page ler kullarak sayfalar eklendi.
-Service, guard, interface ,component eklendi.
-Veritabanı işlemleri için Firebase kullanıldı. 
-Kısaca genel olarak firebase veritabanı kullanılıp kayıt etme durumunda veritabanı eklendi bilgiler. Blank ile template yapısı 
oluşturulan projede service,guard,component,interface kullanıldı. Page ile sayfalar oluşturuldu. Navigate işlemi gerçekleştirilmesi sağlandı. 

Proje ionic serve ile çalıştırıldıktan sonra giriş sayfası karşılamaktadır. Burada giriş için mail ve şifre istenmektedir.
Giriş sayfasında kayıt olma butonu bulunmaktadır. Kayıt ol dediğiniz de sizi kayıt olma sayfasına yönlendirecektir. Burada email
şifre ve isim bilgilerinden sonra kayıt olma seçeneği sunmaktadır. Kayıt olunca navigate ile giriş sayfasına yönlendirilir.
Kayıt olunan mail adresine firebase veritabanına kaydedilir ve email adresine bir mail gider doğrulama için. Ancak kayıt için geçerli bir mail olmalı.
Mail adresinden doğrulama yapan kişi login girişi yapabilir. Sonrasından mail ve şifre bilgileri ile giriş yapan kişi home sayfasına yönlendirilir. 


Projede yapılanları daha net görmek için aşağıda resimler ve açıklamalarıyla bakalım.





