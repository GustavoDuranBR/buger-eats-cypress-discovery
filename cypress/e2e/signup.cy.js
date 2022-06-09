import signup from '../pages/SignupPage'
import signupFactory from '../factories/SignupFactory'

describe('Cadastro',()=>{

it('Usuário deve se tornar um entregador', function(){
	
	var  deliver = signupFactory.deliver()
	
	signup.go()
      signup.fillForm(deliver)
      signup.submit()
	       
      const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
      signup.modalContentShouldBe(expectedMessage)
        
      cy.get('[type="button"][class="swal2-confirm swal2-styled"]').click()
})
	
it('Usuário deve se tornar um entregador Bicicleta', function(){
	
	var  deliver = signupFactory.deliver()
	
	deliver.delivery_method = 'Bike Elétrica'
	
      signup.go()
      signup.fillForm(deliver)
      signup.submit()
        
      const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
      signup.modalContentShouldBe(expectedMessage)
        
      cy.get('[type="button"][class="swal2-confirm swal2-styled"]').click()
})	

it('Usuário deve se tornar um entregador Van/Carro', function(){
	
	var  deliver = signupFactory.deliver()
	
	deliver.delivery_method = 'Van/Carro'
	
      signup.go()
      signup.fillForm(deliver)
      signup.submit()
        
      const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
      signup.modalContentShouldBe(expectedMessage)
        
      cy.get('[type="button"][class="swal2-confirm swal2-styled"]').click()
})
	    
it('CPF incorreto', function(){
	
	var  deliver = signupFactory.deliver()
	
	deliver.cpf = 'X0000014AbC'
	
      signup.go()
      signup.fillForm(deliver)
      signup.submit()
      signup.alertMessageShouldBe('Oops! CPF inválido')
})
	
it('E-mail inválido', function(){
	
	var  deliver = signupFactory.deliver()
	
	deliver.email = 'mel-capotinho.com.br'
	
      signup.go()
      signup.fillForm(deliver)
      signup.submit()
	signup.alertMessageShouldBe('Oops! Email com formato inválido.')
})
	
context('Required fields', function(){
	const messages = [
		{field: 'name', output: 'É necessário informar o nome'},
		{field: 'cpf', output: 'É necessário informar o CPF'},
		{field: 'email', output: 'É necessário informar o email'},
		{field: 'cep', output: 'É necessário informar o CEP'},
		{field: 'endereço', output: 'É necessário informar o número do endereço'},
		{field: 'metodo-entrega', output: 'Selecione o método de entrega'},
		{field: 'cnh', output: 'Adicione uma foto da sua CNH'},
	]
	
	before(function(){
		signup.go()
		signup.submit()
	})
	
	messages.forEach(function(msg){
		it(`${msg.field} is required`, function(){
			signup.alertMessageShouldBe(msg.output)
		})
	})
})	
	
})
   