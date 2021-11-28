Feature: Hepsiburada örnek test

  Scenario Outline: Örnek kullanıcı ile üye olma

    * Anasayfaya girilir
    * Giriş Yapa tıklanır
    * Uye ol tıklanır
    * İsim alanına <ad> yazılır
    * Soyisim alanına <soyad> yazılır
    * eposta alanına <eposta> yazılır
    * sifre alanına <sifre> yazılır
    * Veri izni onaylanır
    * Login tuşuna basılır


    Examples:
      | ad     | soyad    | eposta           | sifre       |
      | efekan | ergincan | deneme@gmail.com | 1234Efekano |
