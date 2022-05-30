<template>
      <div id="app">
        
        
    </div>
  
</template>

<script>

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
      .then((data) => { 
          
        if ( data['data']['error'] == '無此帳號或密碼' ) {
          console.log( '登入失敗') ;
          this.isUser = 'False'
        }
        else {
          console.log( '登入成功')
          this.checkuser = data['data']['name']
          this.role = data['data']['role']
          this.userid = data['data']['id']

          this.loginstatus() ;
        }  
      })
    }
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
