<template>
      <div id="app">
        
        
    </div>
  
</template>

<script>
// import Web3 from 'web3'
export default {
  name: 'App',
  components: {
 
  },
  data() {
    return {
      abi : ''
    }
  },
  methods : {
    getABI() {
      let url = 'localhost:3000/api/abi' ;
      fetch( url, {
        method : 'GET',
          headers : {
                'Content-Type': 'application/json'
            },
            // body :  JSON.stringify({
            //    'account' : this.username,
            //    'password' : this.password
            // })
      } ) 
      .then( (response) => {
        if ( response.ok ) {
            return response.json() ;
        }
      })

    },
    web_test() {
      // var web3 = new Web3(new Web3.providers.HttpProvider("127.0.0.1:8545"));
      // web3.eth.getBalance("0xf7a6900c7957e372F9c4aBF599c4031c3DdBcCC7")
      // .then(console.log);
    }
  },
  crated() {
    this.web_test() ;
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
