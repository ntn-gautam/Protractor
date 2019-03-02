 describe('Practice of getting element with All',function(){
	 
	 beforeAll(function(){
		 browser.get('http://juliemr.github.io/protractor-demo/');
	 })
	 
	 function Add(a,b){
		 element(by.model('first')).sendKeys(a);
			element(by.model('second')).sendKeys(b);
			element(by.id('gobutton')).click();
			browser.sleep(2000); 
	 }
	 
	 it('Test WebElement in WebTable',function(){
		
		    Add(4,5);
		    Add(5,5);
		    Add(6,5);
		    
			element.all(by.repeater('result in memory')).count().then(function(text) {
			 console.log("count ---> "+text); 	
			})
			
			
			element.all(by.repeater('result in memory')).get(0)	
			
			element.all(by.repeater('result in memory')).each(function(item) {
				item.element(by.css("td:nth-child(3)")).getText().then(function(text) {
					console.log(text);
				})
			})
			
			
			
			
			
			
			
			
			
			
			
	 })
	 
 })