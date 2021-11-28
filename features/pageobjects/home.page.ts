import Page from './page';


class HomePage extends Page {
   
    get girisYapHover () { return $('#myAccount') }
    get girisYap () { return $('#login') }
    get btnSubmit () { return $('button[type="submit"]') }

    
    async home () {
        await this.girisYapHover.moveTo();
        await this.girisYap.waitForClickable();
        await this.girisYap.click();
        
    }

    open () {
       return super.open();  
    }

    bekle (){
       return super.bekleme();
   }
}

export default new HomePage();
