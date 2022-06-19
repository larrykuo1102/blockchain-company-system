<template>
      <div id="app">
        <div>
          <a>請輸入要放入文件的內容</a>
          <input type="textarea" v-model="content" >
        </div>
        <div>
          <button @click="add_Note">送出</button>
        </div>
        
        
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
      abi : '',
      content : ''
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
        console.log( data )
      })

    },
    async add_Note() {
      let url = '/api/addNote'
      // alert( this.content)
      await fetch( url, {
        method : 'POST',
          headers : {
                // 'Content-Type': 'application/json'
          },
          body :  JSON.stringify({
              'content' : this.content,
              
          })
      } ) 
      .then( (response) => {
        if ( response.ok ) {
            return response.json() ;
        }
      })
      .then((data) => {
        console.log( 'result', data )
      })
    },
    async get_Note() {
      let url = '/api/getNote'
      // alert( this.content)
      await fetch( url, {
        method : 'GET',
          headers : {
                // 'Content-Type': 'application/json'
          },
          body :  JSON.stringify({
              'content' : this.content,
              
          })
      } ) 
      .then( (response) => {
        if ( response.ok ) {
            return response.json() ;
        }
      })
      .then((data) => {
        console.log( 'result', data )
      })
    }
  },
  crated() {
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
