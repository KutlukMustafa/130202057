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

![Ekran Görüntüsü (190)](https://user-images.githubusercontent.com/73552295/105178529-2e1f5180-5b39-11eb-8385-cd01f7f802e7.png)
- Yukarıda ki görselde proje çalıştırıldığında karşılayan sayfa. Giriş için bir email ve şifre gerekiyor. Mail ve şifre işlemleri
doğru ise sizi navigate işlemi ile anasayfa ekranına yönlendirilyor. Eğer kayıt olunmadıysa aşağıda kayıt ol butonu bulunmaktadır. Kayıt ol butonuna 
tıklandığında navigate ile kayıt olma sayfasına yönlendiriliyorsunuz. 




![Ekran Görüntüsü (191)](https://user-images.githubusercontent.com/73552295/105179387-578cad00-5b3a-11eb-8c21-617e2c3d47d7.png)
Kayıt sayfasında isim mail ve şifre bilgilerinin belirlenmesi isteniyor. Bu bilgiler girildikten sonra kayıt oluşturulur. Sonrasında giriş sayfasına 
yönlendirilirsiniz. Kayıt bilgileri Cloud Firestore üzerinden kaydedilir. Sonrasında bir doğrulama maili gönderilir kayıt yapan kişinin mailine. Doğrulama 
yapıldıktan sonra giriş için hesap aktif olur. Bu durumda giriş için mail ve şifre kombinasyonu ile yapılır bu durum yukarıda  giriş kısmında gösterilmiştir.

![Ekran Görüntüsü (189)](https://user-images.githubusercontent.com/73552295/105179979-0af5a180-5b3b-11eb-87c0-1d1d0783ef3b.png)
![Ekran Görüntüsü (186)](https://user-images.githubusercontent.com/73552295/105179986-0cbf6500-5b3b-11eb-8c64-d9c9c479cbcd.png)

Yukarıda ki görüntülerde cloud firestore ekranı ve doğrulama görüntüleri gösterilmiştir. Sistem bir bulut ortamında kayıt bilgilerinin depolanmasına ve giriş yaparkende
bu mail sisteminden kontrol eden bir bulut veri tabanı oluşturulmuştur. Kullanıcının gerçekliğine binaen mail adresi doğrulama maili atar ve doğrulanan kişi artık sistemde mail adresi ve şifresi ile sisteme giriş yapabilmektedir.

![Ekran Görüntüsü (188)](https://user-images.githubusercontent.com/73552295/105180517-bacb0f00-5b3b-11eb-8ee9-427219bd517f.png)

Giriş bilgilerinin doğru girilmesi sunucu sistem otomotik olarak anasayfa ya yönlendirilir. Anasayfa da haberlerin görüntülenmesi yapılmak istenmiş. Ancak bu kısım eksik kalmıs
ve haberler görüntülenmemektedir. Onun için anasayfa boş durmaktadır.







