function orderpage() {
    
    this.sUser = element(by.css('input[formcontrolname="email"]'));

    this.homeHeaderBtn =element(by.xpath('//text()[.="home"]/ancestor::button[1]'));
    //home_button	//text()[.='home']/ancestor::button[1]
    //people_button	//text()[.='people']/ancestor::button[1]
    //unarchive_button	//text()[.='unarchive']/ancestor::button[1]
    //description_button	//text()[.='description']/ancestor::button[1]

    this.contactHeaderBtn = element(by.xpath('//text()[.="people"]/ancestor::button[1]'));
    this.productHeaderBtn = element(by.xpath('//text()[.="unarchive"]/ancestor::button[1]'));
    this.orderHeaderBtn = element(by.xpath('//text()[.="description"]/ancestor::button[1]'));

    this.createNewOrderBtn =element(by.xpath('//text()[.="add"]/ancestor::button[1]')); 

    this.sourceCreateOrderBtn = element(by.xpath('/html[1]/body[1]/app-root[1]/app-sidenav[1]/mat-sidenav-container[1]/mat-sidenav-content[1]/app-header[1]/mat-toolbar[1]/button[2]')); 

    this.menuBtn = element(by.xpath('//text()[.="menu"]/ancestor::button[1]'));

    this.selectSource = element(by.xpath('//span[text()="ManualSource01"]'));   //wrong xpath

    this.serachName= element(by.xpath('//*[@id="mat-input-55"]'));

    this.taxIdType= element(by.css('mat-select[formcontrolname="taxIdType"]')); 

    this.taxIdTxt= element(by.css('input[formcontrolname="taxIdNumber"]')); 
    
    //this.NotesMultiTxt= element(by.xpath('//textarea[@id="mat-input-57"]')); 

    this.Notes = element.all(by.css('textarea[formcontrolname="notes"]')); 
    
    this.NotesMultiTxt= this.Notes.first();

    this.contactTypeSel= element(by.css('mat-select[formcontrolname="addressTypes"]')); 

    this.countrySel= element(by.css('mat-select[formcontrolname="country"]')); 
    
    this.address1Txt= element(by.css('input[formcontrolname="address1"]')); 
    this.address2Txt= element(by.css('input[formcontrolname="address2"]')); 
    this.address3Txt= element(by.css('input[formcontrolname="address3"]')); 
    this.cityTxt= element(by.css('input[formcontrolname="city"]')); 
    
    this.stateSel= element(by.css('mat-select[formcontrolname="stateOrProvince"]')); 

    //this.zipTxt= element(by.css('input[formcontrolname="postalCode"]')); 
    this.zipTxt= element(by.css('input[formcontrolname="postalCode"]')); 

    this.contactNameTxt= element(by.css('input[formcontrolname="name"]')); 
    this.companyNameTxt= element(by.css('input[formcontrolname="company"]')); 
    this.phoneTxt= element(by.css('input[formcontrolname="phoneNumber"]')); 
    this.faxTxt= element(by.css('input[formcontrolname="fax"]')); 
    this.emailTxt= element(by.css('input[formcontrolname="email"]')); 
    this.addressNotesMultiTxt= this.Notes.last();
    //this.addressNotesMultiTxt= element.all(by.css('textarea[formcontrolname="notes"]'));

    this.resedentialSel= element(by.css('mat-slide-toggle[formcontrolname="isResidential"]')); 

 /* 
 //text()[.='EIN']/ancestor::div[1]
//textarea[@id='mat-input-124']
//*[@id='mat-input-123']

//*[@id='mat-chip-list-input-1']
//text()[.='United States - US']/ancestor::div[1]

//*[@id='mat-input-125']
//*[@id='mat-input-126']
//*[@id='mat-input-127']
//*[@id='mat-input-128']
//span[@class='mat-select-placeholder ng-tns-c14-652 ng-star-inserted']
//*[@id='mat-input-129']
//div[@class='mat-slide-toggle-bar mat-slide-toggle-bar-no-side-margin']
//textarea[@id='mat-input-135']
//*[@id='mat-input-134']
//*[@id='mat-input-133']
//*[@id='mat-input-132']
//*[@id='mat-input-131']
//*[@id='mat-input-130']

*/



}

module.exports = new orderpage(); 