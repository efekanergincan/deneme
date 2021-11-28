
export default class Page {
  

    open () {
       browser.maximizeWindow();
        return browser.url(`https://www.hepsiburada.com/`)  
    }

    bekleme (){
       return browser.pause(9000)
    }
}
