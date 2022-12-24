const {assert} = require('chai')

const Cryptowiz = artifacts.require("./Cryptowiz")
require('chai')
.use(require('chai-as-promised'))
.should()

contract(
    'Cryptowiz',(accounts) =>{

        let contract  

        before(async ()=>{
         contract = await Cryptowiz.deployed()
        }
        )
         
    

    describe(
        'deployment',async () =>{
            it('deployed succesfully !', async() =>{
                
                const address = contract.address;
                assert.notEqual(address,'')
                assert.notEqual(address,null)
                assert.notEqual(address,undefined)
                assert.notEqual(address,0x0)


            }) 

            it('Same name',async () =>{
                const name = await contract.name()
                assert.equal(name,'Cryptowiz')
            })

            it('Same symbol',async () =>{
                const symbol = await contract.symbol()
                assert.equal(symbol,'CWIZ')
            })



        }
    )
    
        describe('minting ', async () =>{
            it('creates a new token' , async () =>{
                const result= await contract.mint('https...1')
                const totalSupply = await contract.totalSupply()

                assert.equal(totalSupply,1 )

                const event = result.logs[0].args
                assert.equal(event.from, '0x0000000000000000000000000000000000000000',"from is the contract")
                assert.equal(event.to,accounts[0],'to is the msg.sender')
                 

                await contract.mint(
                    'https...1'
                ).should.be.rejected;
            })
        })


        describe('index',async () =>{
            it('lists Cryptowiz', async()=>{
                await contract.mint('https...2')
                await contract.mint('https...3')
                await contract.mint('https...4')
                const totalSupply = await contract.totalSupply()

                //loop through list 

                let result = []
                let cryptowiz
                for(i=1;i<=totalSupply;i++){
                    cryptowiz = await contract.Cryptowiz(i-1)
                    result.push(cryptowiz)
                }
                let expected = ['https...1','https...2','https...3','https...4']
                assert.equal(result.join(','),expected.join(','))
            })

      
        })

    })