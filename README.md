# Cloudewer.js.sdk

# Giriş
Cloudewer projemizde yapılmış olan fileManager geliştirmemizde kullanılmak üzere yazılmış cloudewer.sdk.min.js dosyasını kullanmak için gerekli adımları sırasıyla sizlere açıklayacağım.

Öncelikle projemiz olan cloudewer’da hesabınız olması gerekmektedir. Hesap bilgileri ile giriş sağlayarak token oluşturmanız gerekmektedir. Aşağıda token oluşturma örneğini inceleyebilirsiniz.
![image](https://github.com/Umutyasar1/Cloudewer.js.sdk/assets/65557830/5824e88c-ebdd-49eb-9226-eb5a32920754)
 

Oluşturulan token ile birlikte oluşturmuş olduğunuz html dosyasında öncelikle cloudewer.sdk.min.js dosyasını import etmeniz gerekmektedir.

Yeni geliştirmeleri direkt kullanım sağlamak için aşağıdaki url import etmeniz daha sağlıklı olacaktır.
### Url
https://cdn.cloudewer.com/cloudewer.sdk.min.js


## main.js
```
window.addEventListener('load', function() {
    var url = '';
    url = Cloudewer.options({
        protocol: 'https',
        token: '', // Login işlemi sağladıktan sonra oluşan token  
        domain: '', // Cloudewer domain bilginiz
        lang: '', // iframe dil seçimi (tr,en)
    });
    Cloudewer.eventListener(function (eventName, data) {
        console.log(eventName);
        console.log(data);
    })
});
```

## Cloudewer.eventListener fonksiyonu ile iframeden gelen post mesajları görebilir işlem yapabilirsiniz

## Örnek html dosyası
İframe.html dosyasını inceleyebilirsiniz

Main js’den dönen url ile iframe url ekleyerek cloudewer filemanager geliştirmesini kullanmaya başlayabilirsiniz.

### Filemanager geliştirmesini aşağıda detaylıca inceleyebilirsiniz.

## Klasör ekleme sayfası 
  
![image](https://github.com/Umutyasar1/Cloudewer.js.sdk/assets/65557830/1e37a11a-f2d6-424e-903f-dea30d5c72a0)

 
## Varolan klasörün içerisine klasör eklemek için klasör üzerine hızlıca sağ tıklayarak açılan pencerede klasör ekleyebilirsiniz.
  
![image](https://github.com/Umutyasar1/Cloudewer.js.sdk/assets/65557830/0bbbefc4-72aa-4abb-920e-c3bd88e85634)

![image](https://github.com/Umutyasar1/Cloudewer.js.sdk/assets/65557830/f0f6c628-8d05-4dc3-a1eb-84d8f5c5b798)


Bu şekilde arzum klasörünün içerisine ürünler klasörünü eklemiş bulunmaktayız.

## Dosya Eklenmesi

![image](https://github.com/Umutyasar1/Cloudewer.js.sdk/assets/65557830/5884cf20-dde8-4dee-8ef1-005895b0d8e1)

 
## Dosya yüklenmesi için aşağıda belirtilen yeni dosya ekle butonuna tıklanarak açılan modal da dosya yüklemesi gerçekleştirebilir eğer ki bir klasör de yer almasını istiyorsanız aşağıda sizlerin eklemiş olduğunuz klasörleri bir ağaç yapısı şeklinde listeleyerek seçebilir ve dosya yüklemesi gerçekleştirebilirsiniz.

## Seçmek istediğiniz dosyanın üzerine çift tıklayarak post message ile dosyanın detaylarına erişebilirsiniz

 ![image](https://github.com/Umutyasar1/Cloudewer.js.sdk/assets/65557830/af399499-e605-4c11-af65-dce25dd362d0)

## Dosya silme düzenleme işlemlerinde de aynı şekilde post mesajlarına erişebilirsiniz.
## Klasör ekleme de ve klasör seçmede post mesajlara erişebilirsiniz

![image](https://github.com/Umutyasar1/Cloudewer.js.sdk/assets/65557830/f2adf935-65e8-43ee-af2f-e08d7275ce23)


 





