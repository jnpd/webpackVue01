require('../css/style.css')
<template>
	<div class="about"> 这是 {{ page }}</div>
</template>

<script>
	module.exports =  {
		data:function(){
			return {
				page:'now window.locahref about.vue Page!'
			}
		}
	}
</script>