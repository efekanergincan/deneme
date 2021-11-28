import Page from './page';


class UyePage extends Page {
    

    get uyeol () {return $('div.ADIhvxgv7pKXQwkRVFS_1 div:nth-of-type(2)')}
    get inputUsername () { return $('input#txtName') }
    get inputSurname () { return $('input#txtSurname') }
    get inputEmail () {return $('input#txtEmail')}
    get inputPassword () { return $('input#txtNewPassEmail')}
    get onay () { return $('#checkSubscribeEmail')}
    get btnSubmit () { return $('#btnSignUpSubmit') }

  
    async uyeOl () {
        await this.uyeol.click();
    }

    async isimYazma (ad:string){
        await this.inputUsername.setValue(ad);
    }

    async soyisimYazma (soyad:string){
        await this.inputSurname.setValue(soyad);
    }

    async epostaYazma (eposta: string){
        await this.inputEmail.setValue(eposta);
    }

    async sifreYazma (sifre: string){
        await this.inputPassword.setValue(sifre);
    }

    async uyeoltiklama(){
        await this.btnSubmit.scrollIntoView();
        await this.btnSubmit.click();
    }

    async onaylama (){
        await this.onay.click();
    }
   

}

export default new UyePage();
