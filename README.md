# react-node.js

Proje de csv dosyası üzerinden veriler okunarak oluşturulan zeromq yapısı ile node.js projesine her veri aralıksız olarak gönderilerek mongodb databasine kayıt işlemi gerçekleştirilmiştir.Mysql veri tabanı kullanılarak oluşturulan 3 ayrı tablo ile kullanıcı bilgileri,kullanıcıların sahip olduğu araçlar veri kullanıcının giriş,çıkış zamanının depolanacağı farklı tablolar oluşturuldu.React üzerinden oluşturulan arayüzle girilen bilgiler axios ile node.js projesine post edildi.Mysql için oluşturduğumuz model controller yapısı ile gerekli kontroller yapılarak kullanıcı doğruluğu ile ilgili bilgiler reactde gönderildi.Kullanıcı başarılı giriş yapması halinde mongodb içinden kullanıcının sahip olduğu her aracın en son yaptığı 30 dk lık veriler çekilerek reactde gönderildi ve harita üzerinde marker ile gösterildi.Liste üzerinden kullanıcının sahip olduğu araçlardan seçim yaparak gireceği saat aralığında bilgiler post edilip databeseden çekilerek arayüz üzerinde sadece seçilen aracın o saat aralığındaki bilgileri ekranda gösterildi.Çıkış butonu eklenerek kullanıcın çıkış zamanı post edilerek veri tabanına kayıt işlemi gerçekleştirildi.Aynı zamanda kullanıcın başarılı girişi anında kullanıcın giriş zamanı aynı tablo üzerine update işlemi gerçekleştirildi.
![image](https://user-images.githubusercontent.com/65635963/167132379-3e5cd992-60ef-4eba-871d-86b0fec0160c.png)
