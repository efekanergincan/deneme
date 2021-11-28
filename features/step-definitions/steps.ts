import { Given, When, Then } from '@wdio/cucumber-framework';
import homePage from '../pageobjects/home.page';
import uyeolmaPage from '../pageobjects/uyeolma.page';




Given(/^Anasayfaya girilir$/, async () => {
    await homePage.open()
});

When(/^Giriş Yapa tıklanır$/, async () => {
    await homePage.home()
});
When(/^Uye ol tıklanır$/,async()=>{
    await uyeolmaPage.uyeOl()
});
When(/^İsim alanına (.+) yazılır$/,async(ad)=>{
    await uyeolmaPage.isimYazma(ad)
});
When(/^Soyisim alanına (.+) yazılır$/,async(soyad)=>{
    await uyeolmaPage.soyisimYazma(soyad)
});
When(/^eposta alanına (.+) yazılır$/,async(eposta)=>{
    await uyeolmaPage.epostaYazma(eposta)
});
When(/^sifre alanına (.+) yazılır$/,async(sifre)=>{
    await uyeolmaPage.sifreYazma(sifre)
});

When(/^Veri izni onaylanır$/,async()=>{
    await uyeolmaPage.onaylama()
});

When(/^Login tuşuna basılır$/,async()=>{
    await uyeolmaPage.uyeoltiklama()
    await homePage.bekle()
});



function ad(ad: any) {
    throw new Error('Function not implemented.');
}

